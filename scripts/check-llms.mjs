#!/usr/bin/env node
/**
 * Guards public/llms.txt and public/llms-full.txt against inventory drift.
 *
 * Why this exists (NEW-M6). These two files are hand-maintained, have no build
 * step and no link to the content registries, and they drifted twice:
 *
 *   - llms-full.txt spent a day telling AI systems that /knowledge, /insights,
 *     /use-cases and six /learn articles were "retired" and "superseded", a full
 *     day after they were restored — actively suppressing ~38,000 words on
 *     exactly the surface the restoration targeted.
 *   - llms.txt listed two of five content sections under "Reference content",
 *     and the canonical page index in llms-full.txt listed /learn at 6 articles
 *     when there were 12.
 *
 * A generator was the obvious fix and is the wrong one: it would mean moving
 * ~340 lines of carefully-worded prose into template literals, and neither
 * drift above was a formatting problem. The failure is that nothing NOTICED.
 * So this notices.
 *
 * Run: npm run check:llms   (and before committing any content change)
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const llms = readFileSync(join(root, 'public/llms.txt'), 'utf8');
const llmsFull = readFileSync(join(root, 'public/llms-full.txt'), 'utf8');

const problems = [];

// --- Count what the registries actually hold -------------------------------

// Articles: every registered content file declares `type: '<contentType>'`.
const articleDir = join(root, 'app/content');
const contentTypes = ['glossary', 'learn', 'knowledge', 'insights', 'use-cases'];
const counts = {};
for (const type of contentTypes) {
  const dir = join(articleDir, type);
  counts[type] = readdirSync(dir).filter((f) => f.endsWith('.ts')).length;
}

// Instruments: one file per instrument under regulatory/instruments.
counts.regulatory = readdirSync(join(articleDir, 'regulatory/instruments')).filter((f) =>
  f.endsWith('.ts'),
).length;

// Cross-check against the registry imports, so an orphaned file that is never
// registered does not quietly inflate a published count.
const registry = readFileSync(join(articleDir, 'registry.ts'), 'utf8');
const regRegistry = readFileSync(join(articleDir, 'regulatory/registry.ts'), 'utf8');
for (const type of contentTypes) {
  const imported = (registry.match(new RegExp(`from '\\./${type}/`, 'g')) || []).length;
  if (imported !== counts[type]) {
    problems.push(
      `${type}: ${counts[type]} file(s) on disk but ${imported} imported in registry.ts — one is orphaned`,
    );
  }
}
const instrumentsImported = (regRegistry.match(/from '\.\/instruments\//g) || []).length;
if (instrumentsImported !== counts.regulatory) {
  problems.push(
    `regulatory: ${counts.regulatory} instrument file(s) on disk but ${instrumentsImported} imported — one is orphaned`,
  );
}

// --- Every section must be present in both files ---------------------------

const sections = [...contentTypes, 'regulatory'];
for (const section of sections) {
  const url = `https://www.camfintech.com/${section}`;
  if (!llms.includes(url)) problems.push(`llms.txt never mentions ${url}`);
  if (!llmsFull.includes(url)) problems.push(`llms-full.txt never mentions ${url}`);
}

// --- Published counts must match reality -----------------------------------

// The canonical index writes counts as "/learn — factual explainers (12)".
for (const section of sections) {
  const line = llmsFull
    .split('\n')
    .find((l) => l.includes(`camfintech.com/${section} —`));
  if (!line) {
    problems.push(`llms-full.txt canonical index has no line for /${section}`);
    continue;
  }
  // Allows a unit word: "(12)" and "(17 instruments)" both parse.
  const match = line.match(/\((\d+)[^)]*\)/);
  if (!match) {
    problems.push(`llms-full.txt canonical index line for /${section} states no count`);
    continue;
  }
  if (Number(match[1]) !== counts[section]) {
    problems.push(
      `/${section}: canonical index says ${match[1]}, registry holds ${counts[section]}`,
    );
  }
}

// --- Nothing may still be described as retired or superseded ---------------

// The exact wording that shipped the 2026-08-31 defect. If a future edit
// reintroduces it, that is almost certainly a mistake.
for (const [name, text] of [
  ['llms.txt', llms],
  ['llms-full.txt', llmsFull],
]) {
  for (const phrase of ['treat these as superseded', 'are retired and 301-redirected']) {
    if (text.includes(phrase)) {
      problems.push(`${name} still contains "${phrase}" — the content tree is live`);
    }
  }
}

// --- Report ----------------------------------------------------------------

if (problems.length) {
  console.error('llms drift check FAILED:\n');
  for (const p of problems) console.error(`  · ${p}`);
  console.error('\nUpdate public/llms.txt and public/llms-full.txt to match the registries.');
  process.exit(1);
}

const summary = sections.map((s) => `${s} ${counts[s]}`).join(' · ');
// console.warn rather than log — the repo's eslint config allows warn/error only.
console.warn(`llms drift check passed — ${summary}`);
