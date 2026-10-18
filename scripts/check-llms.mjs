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
 * Extended 2026-10-18 (GEO audit) to guard two more drift classes that had each
 * already shipped, for the same underlying reason — a rule written in docs that
 * new code did not inherit:
 *
 *   - `updatedAt` drift. 36 of 40 content files declared a date OLDER than their
 *     last real edit. All 36 were rewritten on 2026-08-31 — the day 153
 *     unsourceable claims were stripped and the FATF facts corrected — and all
 *     still said March or June. The pages whose facts were corrected were the
 *     ones telling AI systems nothing had changed, so a model holding the
 *     pre-correction text had no signal prompting a re-crawl.
 *   - Missing `openGraph.images`. A route that declares its own `openGraph`
 *     loses the file-convention image from app/opengraph-image.tsx, and a route
 *     that omits `twitter` inherits the root layout's block verbatim. This was
 *     closed for the then-existing routes on 2026-08-24 and reappeared in the
 *     three sections built afterwards — 27 pages with no social image and the
 *     homepage's own Twitter title.
 *
 * Run: npm run check:llms   (and before committing any content change)
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { execFileSync } from 'node:child_process';

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

// --- updatedAt must not be older than the file's last content edit ---------

// Compared against git, not against a hand-kept list. Commits whose diff for a
// file touches ONLY the `updatedAt` line are skipped: a metadata-only bump must
// not itself count as a content edit, or this check would fail every time it is
// satisfied.
const lastContentEdit = (file) => {
  const hashes = execFileSync(
    'git', ['log', '--format=%H', '--', file], { encoding: 'utf8' },
  ).trim().split('\n').filter(Boolean);

  for (const hash of hashes) {
    const diff = execFileSync(
      'git', ['show', '--format=', '--unified=0', hash, '--', file], { encoding: 'utf8' },
    );
    const touched = diff
      .split('\n')
      .filter((l) => /^[+-]/.test(l) && !/^(\+\+\+|---)/.test(l));
    const onlyTheDate = touched.length > 0
      && touched.every((l) => /updatedAt:\s*'[0-9-]+'/.test(l));
    if (touched.length === 0 || onlyTheDate) continue;

    return execFileSync(
      'git', ['log', '-1', '--format=%ad', '--date=short', hash], { encoding: 'utf8' },
    ).trim();
  }
  return null;
};

for (const type of contentTypes) {
  const dir = join(articleDir, type);
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.ts'))) {
    const abs = join(dir, file);
    const declared = (readFileSync(abs, 'utf8').match(/updatedAt: '([0-9-]+)'/) || [])[1];
    if (!declared) continue;
    const edited = lastContentEdit(relative(root, abs));
    if (edited && declared < edited) {
      problems.push(
        `${type}/${file} declares updatedAt ${declared} but was last edited ${edited}`
        + ' — stale freshness signal, set it to the real edit date',
      );
    }
  }
}

// --- A route that declares openGraph must declare images (and twitter) -----

// Source-level, because og:image is only observable once rendered — by which
// point it has already shipped.
// Returns the text of a named object literal, brace-matched. Needed because a
// bare /images: \[ogImage\]/ test over the whole file passes when the image is
// present in `twitter` but missing from `openGraph` — which still ships a page
// with no og:image. Verified by negative test before this was tightened.
const block = (src, key) => {
  const open = src.search(new RegExp(`${key}:\\s*{`));
  if (open === -1) return null;
  const start = src.indexOf('{', open);
  let depth = 0;
  for (let i = start; i < src.length; i += 1) {
    if (src[i] === '{') depth += 1;
    else if (src[i] === '}') {
      depth -= 1;
      if (depth === 0) return src.slice(start, i + 1);
    }
  }
  return null;
};

const routeFiles = [
  'app/layout.tsx',
  'app/about/page.tsx',
  'app/privacy/page.tsx',
  'app/terms/page.tsx',
  'app/publication/page.tsx',
  'app/products/dasp/page.tsx',
  'app/glossary/[slug]/page.tsx',
  'app/learn/[slug]/page.tsx',
  'app/knowledge/[slug]/page.tsx',
  'app/insights/[slug]/page.tsx',
  'app/use-cases/[slug]/page.tsx',
  'app/regulatory/[slug]/page.tsx',
];

for (const file of routeFiles) {
  let src;
  try {
    src = readFileSync(join(root, file), 'utf8');
  } catch {
    problems.push(`${file} is listed in the og:image guard but does not exist — update the list`);
    continue;
  }
  if (!/openGraph:\s*{/.test(src)) continue;
  // The root layout is the one route that legitimately inherits the file
  // convention, because it does not override it for a child segment.
  if (file === 'app/layout.tsx') continue;

  if (!block(src, 'openGraph') || !/images:\s*\[ogImage\]/.test(block(src, 'openGraph'))) {
    problems.push(
      `${file} declares openGraph without images: [ogImage] inside it`
      + ' — the page will ship with no og:image',
    );
  }
  const tw = block(src, 'twitter');
  if (!tw) {
    problems.push(
      `${file} declares openGraph without its own twitter block`
      + " — it will inherit the root layout's title",
    );
  } else if (!/images:\s*\[ogImage\]/.test(tw)) {
    problems.push(
      `${file} has a twitter block without images: [ogImage] inside it`
      + ' — the card will ship with no image',
    );
  }
}

// --- Report ----------------------------------------------------------------

if (problems.length) {
  console.error('llms drift check FAILED:\n');
  for (const p of problems) console.error(`  · ${p}`);
  console.error('\nFix the items above: llms*.txt must match the registries, updatedAt must match the last real edit, and any route declaring openGraph must declare images and twitter.');
  process.exit(1);
}

const summary = sections.map((s) => `${s} ${counts[s]}`).join(' · ');
// console.warn rather than log — the repo's eslint config allows warn/error only.
console.warn(`llms drift check passed — ${summary}`);
