#!/usr/bin/env node
// check-nav.mjs: every built page must carry the site footer exactly once,
// with a link to every section index. Run it after `npm run build`.
//
// Why this exists: on 2026-11-14 Search Console showed 23 of 69 sitemap URLs
// not indexed and 19 never crawled. Header and Footer were rendered by only 3
// pages, so roughly 66 pages had no site navigation. CLAUDE.md already called
// the footer "the inbound link for every section index", but a written rule is
// not a check. This is the check.
//
// The section list is read from Footer.tsx's SECTIONS array, not repeated here,
// so the check cannot drift from the footer it guards.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const footerSrc = readFileSync(join(root, "app/components/Footer.tsx"), "utf8");
const block = footerSrc.match(/const SECTIONS = \[([\s\S]*?)\];/);
if (!block) fail(["could not find the SECTIONS array in app/components/Footer.tsx"]);
const sections = [...block[1].matchAll(/href:\s*"([^"]+)"/g)].map((m) => m[1]);
if (sections.length === 0) fail(["the SECTIONS array in Footer.tsx has no hrefs"]);

// Where prerendered HTML lands depends on who runs `next build`. A plain local
// build writes it under .next/server/app. On Vercel's builder (which applies
// its own adapter config, "Applying modifyConfig from Vercel" in the log) it
// goes under .next/server/route-cache/APP_PAGE/<build hash>/$/ instead, and
// .next/server/app holds no .html at all. Found 2026-11-15 when this check
// first ran inside `npm run build` on Vercel and saw 0 pages. Read both; key
// each page by its route so a page present in both is checked once.
const outDir = join(root, ".next/server/app");
const cacheDir = join(root, ".next/server/route-cache/APP_PAGE");
const roots = [outDir];
if (existsSync(cacheDir)) {
  for (const h of readdirSync(cacheDir)) {
    const r = join(cacheDir, h, "$");
    if (existsSync(r)) roots.push(r);
  }
}
if (!roots.some(existsSync)) fail([".next/server/app not found; run `npm run build` first"]);

const byRoute = new Map();
for (const base of roots.filter(existsSync)) {
  (function walk(dir) {
    for (const name of readdirSync(dir)) {
      const p = join(dir, name);
      if (statSync(p).isDirectory()) walk(p);
      // _global-error is rendered by Next without the root layout, by design.
      else if (name.endsWith(".html") && name !== "_global-error.html") {
        const rel = p.slice(base.length);
        if (!byRoute.has(rel)) byRoute.set(rel, p);
      }
    }
  })(base);
}
const pages = [...byRoute.entries()];
if (pages.length < 50) fail([`only ${pages.length} prerendered pages found under ${roots.length} output dir(s); expected ~70. Is the build complete?`]);

const problems = [];
for (const [rel, p] of pages) {
  const html = readFileSync(p, "utf8");
  // Count the SITE footer only. A page may use <footer> semantically inside
  // its content, as the homepage does for a quotation's attribution.
  const footers = (html.match(/<footer class="mt-16 w-full border-t/g) || []).length;
  const headers = (html.match(/<header class="sticky/g) || []).length;
  if (footers !== 1) problems.push(`${rel}: ${footers} site footers (want 1)`);
  if (headers !== 1) problems.push(`${rel}: ${headers} site headers (want 1)`);
  const missing = sections.filter((h) => !html.includes(`href="${h}"`));
  if (missing.length) problems.push(`${rel}: no link to ${missing.join(", ")}`);
}

if (problems.length) fail(problems);
console.warn(`nav guard passed: ${pages.length} pages, each with one header, one footer and links to ${sections.length} sections`);

function fail(lines) {
  console.error("nav guard FAILED:\n  " + lines.join("\n  "));
  process.exit(1);
}
