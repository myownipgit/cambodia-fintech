# GEO Audit Report: CamFinTech

**Audit Date:** 2026-07-30 (6 weeks post-DPI-repositioning)
**URL:** https://www.camfintech.com
**Business Type:** ProfessionalService (fee-only regulatory approval-navigation & compliance firm)
**Pages Analyzed:** 8 core + full sitemap sweep (26 URLs)
**Deploy Under Test:** `dpl_BheUwfLVccPVaLfsL5uwksLYk1N5` (2026-06-18) — no deploy in 42 days
**Baseline for comparison:** 2026-06-18 post-rewrite audit, composite 63/100

---

## Executive Summary

**Overall GEO Score: 67/100 (Fair — upper band, approaching Good)**

+4 delta on the 63 post-rewrite baseline, achieved despite losing the flagship off-site anchor (Wikidata was deleted 10 days after creation). The DPI-repositioning scaffolding is holding — schema is intact, canonicals are fixed, and 14 AI crawlers still have first-class access. The lift came from Technical (NEW-H1 fix) and E-E-A-T (per-page schema types + Article.author=Person). The drag is external-authority: the Wikidata deletion is a live production issue that must be hotfixed today.

### Score Breakdown

| Category | Score | Weight | Weighted | Δ vs 2026-06-18 |
|---|---|---|---|---|
| AI Citability | 77/100 | 25% | 19.25 | −1 |
| Brand Authority | 43/100 | 20% | 8.60 | +1 |
| Content E-E-A-T | 73/100 | 20% | 14.60 | +5 |
| Technical GEO | 91/100 | 15% | 13.65 | +3 |
| Schema & Structured Data | 77/100 | 10% | 7.70 | −5 |
| Platform Optimization | 35/100 | 10% | 3.50 | +5 |
| **Overall GEO Score** | | | **67.30** | **+4** |

### Rating band: Fair (60-74)

Note: Schema dropped 5 points not because rewrite work regressed but because `dateModified` froze at build time and now reads 42 days stale site-wide — an artifact of no production deploy since 2026-06-18. Score returns to baseline the moment a deploy ships with the sitemap fix.

---

## Critical Issues (Fix Immediately)

### C1. Wikidata sameAs anchor points to a deleted entity

- **Where**: `app/components/JsonLd.tsx` — `Organization.sameAs` array
- **What**: Every page emits `"https://www.wikidata.org/wiki/Q140279044"` in Organization.sameAs. That URL now returns **HTTP 404**.
- **When it broke**: Wikidata admin `MisterSynergy` deleted the entity at 13:57 on **2026-06-28** with reason *"Does not meet the notability policy"*. Live for 10 days after Bill created it (2026-06-18).
- **Why it matters**: Every AI crawler / graph indexer dereferencing this anchor lands on a 404 — a negative trust signal on every page of the site, 24/7 for the last 33 days.
- **Fix**: Remove the Wikidata line from Organization.sameAs; deploy same day. Wikidata re-creation is a separate 4–6 week programme requiring 3+ verifiable external mentions before any editor would let it survive a notability review (Khmer Times / Cambodia Investment Review / CAFT directory entry are the near-term candidates).

---

## High Priority Issues (Fix Within 1 Week)

### H1. NEW-M1 unchanged — 404 page emits contradictory robots meta tags

- Same-response HTML on any 404: both `<meta name="robots" content="noindex"/>` AND `<meta name="robots" content="index, follow"/>`.
- **Fix**: Override in `app/not-found.tsx`: `export const metadata = { robots: { index: false, follow: false } }`.
- **Effort**: 5 minutes.

### H2. `dateModified` frozen site-wide at 2026-06-18 (42 days stale)

- **Root cause**: `app/sitemap.ts:6` uses `const lastModified = new Date()` which evaluates at Next.js build time. No production deploy since 2026-06-18 = frozen timestamp.
- **Content registry**: `updatedAt` on glossary/learn pages also hardcoded to `2026-06-18T00:00:00.000Z`.
- **Fix**: Add `export const dynamic = 'force-dynamic'` (or `revalidate = 86400`) to `app/sitemap.ts`. Bump `updatedAt` on any content edited since 2026-06-18. Add a `reviewedAt` field so review-without-edit still emits fresh signal.

### H3. FU-6 unchanged — founder bio still `[Bio in progress]` after 2 audit cycles

- `/about` renders verbatim: *"Bio in progress. Coming soon: William's professional background…"*
- Person schema exists but points at an empty biographical node.
- **Impact**: LLMs asked "Who is William Mallett?" will source the answer from LinkedIn rather than the owned domain. Single biggest E-E-A-T lift still on the table.
- **Fix**: Even a 5-line factual bio ships better than the placeholder.

### H4. Zero hyperlinked primary sources across the entire content surface

- Prakas 093, Prakas 1125, TCRMG-2026, NBFSA 2024-2028 plan, Digital Government Policy 2022-2035, Law on Taxation, BIS 2024, NBC Annual Report 2024, IMF Article IV, World Bank Tax Diagnostic — all named but none hyperlinked.
- Trust-weighted grounding models discount unverifiable claims.
- **Fix**: One 2-hour sweep to wrap the first mention of each statute/report with a link to the NBC/SERC/MEF/GDT source page.

### H5. GBP not wired into schema

- Google Business Profile live + verified since 2026-06-19. Maps URL + lat/lng not sent to me yet.
- **Blocked on**: Bill sends `maps.app.goo.gl/...` URL + coordinates.
- **Fix (once unblocked)**: Add Maps URL as 3rd `Organization.sameAs` anchor; add `geo: {latitude, longitude}` on ProfessionalService; add `hasMap`.

---

## Medium Priority Issues (Fix Within 1 Month)

### M1. DASP BreadcrumbList position 2 is a self-loop

Position 2 "Products" links to `/products/dasp` instead of `/products` (the index). Google's breadcrumb validator will flag same-URL loops.

### M2. `Organization.address` is empty `{}` across every page

PostalAddress lives only on `ProfessionalService.address`. Google Knowledge Graph reads Organization first — mirror the address there.

### M3. String collision worsened — Cámara Argentina Fintech runs `camfintech.hiringroomcampus.com`

A live "camfintech" subdomain that is not CamFinTech (Argentine job board). Ongoing dilution risk in fuzzy/global searches.

### M4. Homepage has no "What is CamFinTech?" answer block

H1 is a service pitch, not a definition. LLMs asked "What is CamFinTech?" can't grab a clean self-contained passage from the homepage.

### M5. `/glossary/camdigikey` lead sentence is fragmentary

Opens with a verb, no subject. Contrast with the Bakong glossary opener which is textbook citable. ~10-point lift on that page alone if rewritten.

### M6. `/about` address inconsistency

`/about` says "based in Phnom Penh" (city only) while every other page carries the full street address. Trivial fix.

### M7. FAQ answers on Bakong/CamDigiKey/CamInvoice may be JS-collapsed

Citability agent could not surface the answer prose in fetched HTML. Verify with `curl -sS <url> | grep -A5 "How does Bakong"`. If collapsed, either expand or duplicate the answer text into the DOM.

### M8. Zero Cambodian press pickup

Khmer Times / Phnom Penh Post / TechinAsia / Cambodia Investment Review all clean-zero on "CamFinTech". Even one editorial mention would materially move Brand Authority AND re-open the Wikidata notability door.

### M9. Absent from AI-search results for "Cambodia DASP compliance consultant"

Present for "Bakong integration consulting Phnom Penh"; absent from this closer-fit DASP query. Winners: DFDL, Acclime, DAS & Partners, Making It Easy Cambodia.

---

## Low Priority Issues

- **L1.** GitHub URL (`https://github.com/myownipgit/cambodia-fintech`) not yet added to `Organization.sameAs` — free authority signal, zero-cost.
- **L2.** CSP header missing from `next.config.js` headers block. Even a report-only starter policy earns a Mozilla Observatory positive grade.
- **L3.** `/publication` page thin — mostly a signpost to riel.report; add editorial byline story + selected briefing summaries.
- **L4.** Riel Report itself has no editorial bylines; undercuts the independence signal.
- **L5.** `dateModified` missing entirely on AboutPage / PrivacyPolicy / TermsOfService JSON-LD (regulators-as-audience read dated legal pages preferentially).
- **L6.** HSTS preload submission at hstspreload.org still pending (Bill manual action; header already qualifies).
- **L7.** Zero GBP reviews — solicit 3–5 named early-client testimonials to unlock star rating + review count in Knowledge Panel.
- **L8.** DASP page uses "coordinated with" for accredited Service Providers where the standard phrasing elsewhere is "reserved to". Consistency lift.

---

## Category Deep Dives

### AI Citability (77/100, −1)

The DPI-repositioning skeleton is solid — question-format H1s on glossary/learn are pulling their weight (Bakong opener is a textbook citable answer block), and the DASP page's published pricing bands + Prakas 093 date binding are exactly the numeric-density signals LLMs reward.

The shortfall is finishing work: the /about bio placeholder, one weak lead sentence on /glossary/camdigikey, a homepage H1 that pitches instead of defines, and missing hyperlinked citations across 6 named sources.

**Per-page scores**: /glossary/bakong 92 · /learn/what-is-caminvoice 90 · /products/dasp 85 · /glossary/camdigikey 78 · homepage 78 · /privacy 72 · /publication 60 · /about 55.

### Brand Authority (43/100, +1 — masked delta)

Big loss + big win cancelling out.
- **Loss**: Wikidata Q140279044 deleted 2026-06-28 for notability failure.
- **Win**: GBP live + verified since 2026-06-19; AI search now correctly binds William Mallett → CamFinTech on 2/3 test queries.

External anchor status:

| Anchor | Status | Notes |
|---|---|---|
| Wikidata Q140279044 | **DELETED 2026-06-28** | Schema still emits — hotfix required |
| LinkedIn company (118224010) | Live but login-walled | Unchanged |
| LinkedIn personal (william-mall) | Live | Correctly wired |
| GitHub (myownipgit/cambodia-fintech) | Public + indexed | Not in schema yet — cheap win |
| Google Business Profile | **LIVE + verified** | Major inflection; not in schema yet |
| CAFT directory | NONE | Bill-driven, unchanged |
| Crunchbase | NONE (dropped) | Paywall decision holds |
| Riel Report cross-link | Live | Separate property confirmed |

### Content E-E-A-T (73/100, +5 — biggest delta)

The 2026-06-18 schema-work is holding: Article.author flipped to Person, PrivacyPolicy/TermsOfService @type specialization live, BreadcrumbList on learn/glossary/products/legal, hard rules ("never builds, never operates a rail, never holds client funds") consistent across every sampled page. Trust signals (address, contact channels, hard rules, effective dates on legal pages) all converge — with three small drifts: /about address is city-only; DASP author byline reads Organization while schema binds to Person; Bakong glossary uses "coordinated with" where DASP uses "reserved to".

No pre-DPI "we build" language survived critical review. Two borderline phrasings noted (Bakong glossary, CamInvoice learn page) but both carry disclaimers.

### Technical GEO (91/100, +3)

**NEW-H1 fixed** — /learn/* canonicals now self-reference (biggest single fix of the cycle). All 14 named AI bots still allowed. llms.txt + llms-full.txt DPI-aligned and not stale. 308 redirects on retired routes work. SSR intact on /products/dasp (all four critical strings — DASP, Prakas 093, SERC, DX/BUILD/RUN/TRAIN — present in initial HTML). Security headers preload-eligible (HSTS max-age 2 years, `includeSubDomains`, `preload`).

Sitemap freeze is a Next.js build-time evaluation issue with a 2-minute fix. NEW-M1 unchanged.

### Schema & Structured Data (77/100, −5)

All 18 JSON-LD blocks across 8 sampled pages parse cleanly — zero syntax failures. The rewrite is holding structurally: per-page @id no longer collapses to homepage, Article.author is Person, Wikidata is in Organization.sameAs (wire holds even though target is dead), 3 ContactPoints present, SpeakableSpecification on homepage present, PostalAddress correct on ProfessionalService.

Decay is entirely `dateModified` staleness (frozen 42 days, missing on legal pages) plus two small residual bugs (DASP breadcrumb self-loop, empty `Organization.address`).

### Platform Optimization (35/100, +5)

GBP moved this materially even absent full schema wire-up. GitHub public since 2026-06-18. LinkedIn company + personal live. Riel Report cross-link operational. Zero presence on Reddit / YouTube / Wikipedia / Cambodian press — pursued in Bill's outreach follow-ups, not the code path.

---

## Quick Wins (Implement This Week)

1. **Remove dead Wikidata URL from Organization.sameAs** — `app/components/JsonLd.tsx`, single line. 2-minute code change; unblocks stopping the 24/7 dead-link broadcast. **Critical, do first.**
2. **Fix NEW-M1** — override robots metadata in `app/not-found.tsx`. 5 minutes.
3. **Un-freeze sitemap `lastmod`** — add `export const dynamic = 'force-dynamic'` to `app/sitemap.ts`. 2 minutes. Restores site-wide freshness signal.
4. **Add GitHub URL to Organization.sameAs** — replaces the removed Wikidata line 1:1 in slot count. 2 minutes.
5. **Fix DASP BreadcrumbList position 2** — point "Products" at `/products`, not `/products/dasp`. 5 minutes.

That's five fixes, ~20 minutes of code, one deploy — and the composite should jump ~3 points on the strength of stopping the Wikidata dead-link alone.

---

## 30-Day Action Plan

### Week 1 — Hotfix + code sweep (Bill + Claude)

- [ ] **C1**: Remove Wikidata URL from Organization.sameAs (Claude, 2 min)
- [ ] **H1 / NEW-M1**: Fix 404 double robots meta (Claude, 5 min)
- [ ] **H2**: `dynamic = 'force-dynamic'` on sitemap.ts (Claude, 2 min)
- [ ] **L1**: Add GitHub URL to Organization.sameAs (Claude, 2 min)
- [ ] **M1**: Fix DASP BreadcrumbList self-loop (Claude, 5 min)
- [ ] Deploy the bundle via `vercel --prod` (Claude, 3 min)
- [ ] **H5**: Bill sends GBP Maps URL + lat/lng → Claude wires Org.sameAs 3rd anchor + `geo` on ProfessionalService

### Week 2 — Content authoritativeness

- [ ] **H4**: Hyperlink 8–12 primary sources (Prakas 093, Prakas 1125, TCRMG, NBFSA plan, Digital Gov Policy, Law on Taxation, BIS 2024, NBC AR 2024) across DASP + learn + glossary
- [ ] **M5**: Rewrite `/glossary/camdigikey` lead sentence to full `X is Y` form
- [ ] **M6**: Add full street address to `/about`
- [ ] **M4**: Add "What is CamFinTech?" H2 + 2-sentence definition on homepage
- [ ] **L5**: Add `dateModified` + `datePublished` to AboutPage / PrivacyPolicy / TermsOfService JSON-LD

### Week 3 — Founder identity + freshness

- [ ] **H3 / FU-6**: Ship real 3-5 line founder bio on `/about` + real headshot
- [ ] **M7**: Verify FAQ answers render in raw HTML on Bakong / CamDigiKey / CamInvoice pages
- [ ] **L6**: Submit HSTS preload at hstspreload.org (Bill manual)
- [ ] **L2**: Add starter CSP header (report-only) to `next.config.js`

### Week 4 — Off-site authority

- [ ] **M8**: Pitch Khmer Times op-ed or Cambodia Investment Review interview (target: one editorial mention by 2026-08-31)
- [ ] **L7**: Solicit 3–5 named GBP reviews from early clients
- [ ] **M9**: Consider paid presence on comparison pages for "Cambodia DASP compliance consultant" search (or content play targeting that exact query)
- [ ] CAFT membership retry (was 503 at 2026-06-18 check)
- [ ] LinkedIn 1–3 posts re-sharing Riel Report briefings

### Milestone target

**Composite ≥ 72 by 2026-08-30** — moves the site from "Fair upper" to "Good lower" band, with the Wikidata dead-link removed, freshness restored, founder bio landed, and 8+ primary sources hyperlinked.

---

## Wins Since 2026-06-18 (Worth Celebrating)

- **NEW-H1 FIXED** — /learn/* canonicals now self-reference (was silently donating link equity to homepage)
- **GBP live + verified** — major new Google-native anchor with Knowledge Panel eligibility
- **OG image bug closed** — `/opengraph-image` dynamic route working; old `/images/og-image.png` unreferenced
- **Article.author flipped to Person** — confirmed live across learn/glossary content
- **Per-page WebPage @id holding** — no collapse to homepage
- **All 3 ContactPoints holding** (info/dasp/partners)
- **SpeakableSpecification on homepage present** — voice-assistant citation surface working
- **AI search entity recognition working** — 2/3 test queries correctly bind William Mallett → CamFinTech with no name-collision drift
- **HSTS max-age 2 years, preload-eligible** — one form submission away from browser-baked HTTPS

---

## Errata Preserved

- **Aston Hill guardrail HELD** — no re-introduction of the misidentified LinkedIn profile as a positive E-E-A-T signal. Any LinkedIn match against the literal string "Camfintech" that isn't explicitly tied to William Mallett / camfintech.com / Phnom Penh remains UNVERIFIED.
- **Wikidata deletion is NOT a re-do candidate right now** — MisterSynergy's notability rationale is standard. Rebuilding requires 3+ independent verifiable external mentions (Khmer Times op-ed, Cambodia Investment Review mention, CAFT directory entry). Attempt again after Month 3 of off-site programme, not before.

---

## Appendix: Pages Analyzed

| URL | Type | Notable Issues |
|---|---|---|
| / | Homepage | No "What is CamFinTech?" answer block; FAQ 5 Qs present |
| /about | AboutPage | Bio placeholder; address city-only; no dateModified |
| /products/dasp | Service | Breadcrumb self-loop; pricing bands strong |
| /publication | WebPage | Thin content; signpost only |
| /learn/what-is-caminvoice | Article | Article.author=Person confirmed; strong citability |
| /learn/how-bakong-works | Article | NEW-H1 canonical FIXED (verified) |
| /glossary/bakong | DefinedTerm | Best citable opener on the site |
| /glossary/camdigikey | DefinedTerm | Lead sentence fragmentary |
| /privacy | PrivacyPolicy | Type specialization LIVE; no dateModified |
| /terms | TermsOfService | Type specialization LIVE; no dateModified |
| /nonexistent-page-abc123 | 404 | NEW-M1: double robots meta still present |

Discovery pass: 26 URLs enumerated from sitemap; robots.txt allows 14 named AI crawlers; llms.txt + llms-full.txt DPI-aligned and not stale.
