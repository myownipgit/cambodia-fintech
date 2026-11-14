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

const outDir = join(root, ".next/server/app");
if (!existsSync(outDir)) fail([".next/server/app not found; run `npm run build` first"]);

const pages = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    // _global-error is rendered by Next without the root layout, by design.
    else if (name.endsWith(".html") && name !== "_global-error.html") pages.push(p);
  }
})(outDir);
if (pages.length < 50) fail([`only ${pages.length} prerendered pages found; expected ~70. Is the build complete?`]);

const problems = [];
for (const p of pages) {
  const html = readFileSync(p, "utf8");
  const rel = p.slice(outDir.length);
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
