#!/usr/bin/env node
/**
 * Guards the persistent-memory corpus against silent truncation.
 *
 * Why this exists. On 2026-11-06 the session-start harness reported:
 *
 *     MEMORY.md is 27.5KB (limit: 24.4KB) — 17 of 185 lines were cut off
 *
 * Nothing errored. The file simply loaded short, so that session began with
 * less project knowledge than the files contained and no way to tell. That is
 * the same failure shape as the llms.txt drift that `check:llms` exists for:
 * the content was wrong and NOTHING NOTICED.
 *
 * This notices. It is not advisory — it exits non-zero.
 *
 * What it does NOT check, deliberately:
 *   - Total size of .claude/RESUME_SESSION.md. That file is designed as a
 *     bounded "Start here" block plus unbounded history below, and the history
 *     is only read on purpose. Its length is not a defect; an overlong or
 *     missing Start here block is.
 *   - Per-line length in MEMORY.md. Bytes are what truncate; line length is
 *     only a heuristic for keeping bytes down, and MEMORY.md legitimately
 *     carries long prose rules. A check that fires on correct content trains
 *     you to ignore the check.
 *
 * Run: npm run check:memory   (and after any memory edit)
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { homedir } from 'node:os';

// The observed hard limit is ~24,400 bytes. Fail below it so there is room to
// land one more entry before the harness starts dropping lines.
const MEMORY_BUDGET_BYTES = 22000;
const START_HERE_MAX_LINES = 30;   // the figure RESUME_SESSION.md sets for itself

const root = process.cwd();
const problems = [];
const notes = [];

// --- Locate the memory dir -------------------------------------------------
// CLAUDE_CONFIG_DIR is exported from ~/.zshrc and set by a LaunchAgent on this
// Mac. Skip cleanly elsewhere (CI, another machine) rather than failing a build
// over a path that legitimately does not exist there.
const configDir = process.env.CLAUDE_CONFIG_DIR || join(homedir(), '.config/claude');
const projectKey = root.replace(/\//g, '-');
const memoryDir = join(configDir, 'projects', projectKey, 'memory');

if (!existsSync(memoryDir)) {
  console.warn(`memory check skipped — no memory dir at ${memoryDir}`);
  process.exit(0);
}

// --- 1. MEMORY.md must fit its load budget ---------------------------------
const indexPath = join(memoryDir, 'MEMORY.md');
if (!existsSync(indexPath)) {
  problems.push('MEMORY.md does not exist — the whole index is missing');
} else {
  const raw = readFileSync(indexPath);
  const bytes = raw.byteLength;
  notes.push(`MEMORY.md ${bytes} B / ${MEMORY_BUDGET_BYTES} B budget`);
  if (bytes > MEMORY_BUDGET_BYTES) {
    problems.push(
      `MEMORY.md is ${bytes} B, over the ${MEMORY_BUDGET_BYTES} B budget — it will be`
      + ' silently truncated at session start. Move detail into a topic file and leave'
      + ' a one-line pointer.',
    );
  }

  // --- 2. Every topic file an index entry points at must exist -------------
  // A pointer to a missing file is memory lost with no error anywhere.
  const text = raw.toString('utf8');
  const linked = [...text.matchAll(/\]\(([A-Za-z0-9_\-]+\.md)\)/g)].map((m) => m[1]);
  const present = new Set(readdirSync(memoryDir).filter((f) => f.endsWith('.md')));
  const missing = [...new Set(linked)].filter((f) => !present.has(f));
  notes.push(`${new Set(linked).size} topic links, ${present.size - 1} topic files on disk`);
  for (const f of missing) {
    problems.push(`MEMORY.md links topic file ${f}, which does not exist in ${memoryDir}`);
  }
}

// --- 3. RESUME_SESSION.md needs a short, present Start here block ----------
const resumePath = join(root, '.claude/RESUME_SESSION.md');
if (!existsSync(resumePath)) {
  problems.push('.claude/RESUME_SESSION.md does not exist');
} else {
  const lines = readFileSync(resumePath, 'utf8').split('\n');
  const start = lines.findIndex((l) => /^##\s+Start here\s*$/i.test(l));
  if (start === -1) {
    problems.push(
      '.claude/RESUME_SESSION.md has no "## Start here" block — a session resuming'
      + ' from it has no bounded entry point and must read the whole history.',
    );
  } else {
    const after = lines.slice(start + 1);
    const nextHeading = after.findIndex((l) => /^##\s+/.test(l));
    const blockLen = nextHeading === -1 ? after.length : nextHeading;
    notes.push(`Start here block ${blockLen} lines / ${START_HERE_MAX_LINES} max`);
    if (blockLen > START_HERE_MAX_LINES) {
      problems.push(
        `"Start here" block is ${blockLen} lines, over the ${START_HERE_MAX_LINES} the file`
        + ' sets for itself. Move the detail down into the history below it.',
      );
    }
  }
}

// --- Report ----------------------------------------------------------------
if (problems.length) {
  console.error('memory guard FAILED:\n');
  for (const p of problems) console.error(`  · ${p}`);
  console.error('\nThe risk is silent: an oversized MEMORY.md loads short with no error.');
  process.exit(1);
}
console.warn(`memory guard passed — ${notes.join(' · ')}`);
