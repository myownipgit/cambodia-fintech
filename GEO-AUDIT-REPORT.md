# GEO Audit Report: CamFinTech.com

**Audit Date:** 2026-06-18
**URL:** https://www.camfintech.com
**Business Type:** Agency / Services (specialist consulting — Cambodia FinTech / GaaP integration)
**Pages Analyzed:** 52 (full sitemap surveyed; 10 deep-sampled for content audit)
**Prior audits:** 2026-04-15 (composite 46/100), 2026-05-24 (composite 50/100)

---

## Executive Summary

**Overall GEO Score: 54/100 (Poor — upper band)**

The site has continued to ship on-page improvements since the May baseline — `/about` exists with the founder named, the Phnom Penh address is everywhere, the JSON-LD `@graph` renders cleanly on every page including `/privacy` and `/terms`. But two structural ceilings are now visible and explain why the composite has only nudged: (1) the brand has effectively zero off-site footprint, and (2) several "shipped" things are stuck at placeholder quality — the founder bio reads `[Bio in progress]`, the OG image returns 404, the WebPage `dateModified` is frozen at 2026-03-24 across the entire site, and the homepage stats are unsourced while the rest of the site cites primary sources.

### Score Breakdown

| Category | Score | Weight | Weighted | Calibration vs 2026-05-24 |
|---|---|---|---|---|
| AI Citability | 62/100 | 25% | 15.5 | May scored 78; June scoring more strict on unsourced homepage stats + lack of hyperlinked citations |
| Brand Authority | 38/100 | 20% | 7.6 | May scored 6 (treating absent platforms as near-zero); June scored 38 (giving credit for verified LinkedIn presence) |
| Content E-E-A-T | 56/100 | 20% | 11.2 | May scored 42; June +14 — `/about` shipped with named founder, real legal pages, full contact stack |
| Technical GEO | 80/100 | 15% | 12.0 | May scored 89; June −9 — OG image 404 surfaced + stale llms.txt + missing hreflang properly weighted |
| Schema & Structured Data | 62/100 | 10% | 6.2 | May scored 70; June −8 — `WebPage @id` collapse and stale `dateModified` now penalized |
| Platform Optimization | 12/100 | 10% | 1.2 | May scored 5; June +7 — LinkedIn company page now claimed, founder profile linked |
| **Overall GEO Score** | | | **53.7 → 54** | **+4 vs 2026-05-24** |

> **Calibration caveat.** The May audit ran with a different scorer cohort. Three categories (Citability, Technical, Schema) were scored more generously in May than the June rubric warrants; one (Brand Authority) was scored more strictly. The +4 composite delta is real but understates the substantive on-site shipping done between 2026-05-22 and 2026-06-18; it overstates how much off-site authority has actually grown. Treat the absolute June scores as the honest snapshot; treat the delta as directional only.

### Headline findings

1. **The `/privacy` and `/terms` JSON-LD "non-rendering" bug from the May audit was a WebFetch artefact, not a real bug.** Raw curl confirms the homepage `@graph` renders on every page. The actual gap is different: no page-specific `PrivacyPolicy` / `TermsOfService` / `AboutPage` schema is emitted, and the `WebPage @id` is globally locked to the homepage on every URL.

2. **OG image is broken site-wide.** `/images/og-image.png` returns HTTP 404. Every social share, Slack/Discord preview, Bing snippet card, and several AI assistants' citation cards render the Next.js error page instead of a branded card. Single highest-leverage one-line fix in this audit.

3. **`WebPage.dateModified` is frozen at 2026-03-24 on every page.** Site has shipped material changes since (the entire Phnom Penh relocation, `/about`, `/privacy`, `/terms`) but the schema reports a 12-week-old modification date everywhere. Sends "abandoned site" signals to crawlers.

4. **Article author is the Organization, not the Person.** Now that `Person` schema for William Mallett exists, flipping `Article.author` and `TechArticle.author` from `#organization` to `#person` is a free site-wide E-E-A-T uplift across ~30 article-bearing pages.

5. **Zero hyperlinked citations site-wide.** Every statistic on `/knowledge/*` and `/insights/*` is sourced by name to NBC, World Bank, BIS, GSMA, ADB, MIT Tech Review — but none are hyperlinked. Hyperlinked citations are weighted ~10× parenthetical mentions by AI ranking models.

6. **Founder block on `/about` is still placeholder.** The `[Bio in progress]` literal text and "WM" initials avatar mean a name + LinkedIn link exist for AI to bind to, but no verifiable expertise to ground against.

7. **Khmer toggle on `/about` is label-only.** `?lang=km` serves English body content; only the toggle string `ខ្មែរ` is in Khmer. The bilingual claim in `/about` metadata and schema is not substantiable for an audit by a Khmer-language AI query.

### Audit errata carried forward

The 2026-04-15 audit's Brand & Platform agent flagged Aston Hill (LinkedIn `kh.linkedin.com/in/aston-hill-469944322`, self-described as "General Manager at Camfintech") as a positive E-E-A-T signal. **This was confirmed incorrect by the principal.** Aston Hill is NOT associated with CamFinTech (Cambodia); the LinkedIn description matches a different "Camfintech"-shaped entity. The 2026-06-18 Brand subagent was explicitly briefed on this and did NOT re-introduce the finding. Future audits must not re-introduce it without explicit principal confirmation.

---

## Critical Issues (Fix Immediately)

| # | Finding | Affected | Fix |
|---|---|---|---|
| C1 | `/images/og-image.png` returns HTTP 404 — every social/AI preview card across all 52 URLs is broken | Site-wide | Upload the 1200×630 PNG to `public/images/og-image.png` (or correct the metadata path in `app/layout.tsx`); redeploy |
| C2 | `WebPage @id` collapsed to `https://www.camfintech.com/#webpage` on every URL — AI cannot disambiguate which page is the citation target for a query | Site-wide schema | In `app/components/JsonLd.tsx`, accept a per-page slug, set `@id` to `${url}#webpage`, set `name` to the page-specific `<title>` |

## High Priority Issues (Fix Within 1 Week)

| # | Finding | Affected | Fix |
|---|---|---|---|
| H1 | `WebPage.dateModified = 2026-03-24` frozen across the site despite material changes shipped since May | Site-wide schema | Per-page mtime: build-time `git log -1 --format=%ct` per source file; pass into `JsonLd` |
| H2 | `Article` / `TechArticle` `author` is `#organization`, not the Person `#person` | ~30 article pages | Single change in the article schema generator — flip the `@id` reference |
| H3 | `BreadcrumbList` schema absent on every deep page | All `/knowledge/*`, `/insights/*`, `/glossary/*`, `/learn/*`, `/use-cases/*` | Emit 3-step BreadcrumbList (Home → Section → Article) inside each page's existing JSON-LD block |
| H4 | Zero hyperlinked citations across the article corpus — every stat parenthetical only | `/knowledge/*`, `/insights/*` (~5 articles drive most stats) | Wrap each `(NBC Annual Report 2024)` in `<a href>` to the primary-source PDF/page. ~3 hours total |
| H5 | `/about` founder bio is `[Bio in progress]` placeholder; "WM" initials avatar; no credentials | `/about` | Replace with ~150-word real bio + headshot. Even draft quality closes this. ~2 hours once copy + image exist |
| H6 | `llms.txt` does not name William Mallett or link `/about` — the May `/about` ship is invisible to AI navigation | `/llms.txt` | Regenerate to add a "Company" or "About" section that names the founder and links `/about` |
| H7 | `FAQPage` answer rendering — Citability subagent observed accordion-only rendering on deep pages; the schema-declared answers may be visible to crawlers via DOM, but if they're JS-injected only on expand they're not extracted | Site-wide FAQ blocks | Confirm answer `<div>` is in initial DOM (not JS-injected); use CSS to visually hide collapsed state but keep text in DOM |
| H8 | Zero off-site authority graph — no Wikidata, no Wikipedia, no Crunchbase, no GBP, no YouTube; entity grounding has one source (the domain itself) | Off-site | Create Wikidata + Crunchbase entries this week; both free; ~75 minutes total |

## Medium Priority Issues (Fix Within 1 Month)

| # | Finding | Affected | Fix |
|---|---|---|---|
| M1 | Robots.txt allows 7 AI bots but omits Applebot-Extended, Anthropic-AI, Meta-ExternalAgent, Bytespider, Diffbot, Cohere-AI, MistralAI-User | `/robots.txt` | Add explicit `User-agent` + `Allow: /` for each of the 6 missing |
| M2 | Hreflang completely absent as machine signal — HTML alternates both point to the same URL; sitemap has no `xhtml:link` entries; bilingual posture invisible | Site-wide | Either ship distinct `/km` routes or remove the misleading `km` alternate (current state is worse than no hreflang) |
| M3 | Khmer toggle on `/about` is label-only; the `?lang=km` param doesn't actually render Khmer content | `/about` (likely other pages too — verify) | Implement real per-page bilingual rendering or remove the toggle from pages it doesn't apply to |
| M4 | Homepage stats unsourced (`43,970+ SMEs`, `80% reduction`, `100% automated`) while the rest of the site cites primary sources | `app/page.tsx` | Add MISTI 2024 attribution to `43,970+`; link the others to the case-study source |
| M5 | Glossary H1s declarative (`Bakong: Cambodia's Central Bank Digital Currency...`), not question-form (`What is Bakong?`) | 10 `/glossary/*` pages | Rewrite each H1 to question form + add 50-word sourced answer capsule at top |
| M6 | `Article.dateModified` stale on all article pages (`2026-03-25`); same staleness signal as H1 but at the article-content level | ~30 article pages | Build-time mtime per file; same fix as H1 but applied to Article schema |
| M7 | `SpeakableSpecification` cssSelectors target homepage-only IDs (`#home h1`, `#about h2 + p`); silently match nothing on non-home pages | Site-wide WebPage node | Either scope speakable to homepage only via per-page WebPage (after fixing C2), or define per-page-type selectors |
| M8 | `/use-cases/sme-compliance-automation` is hypothetical illustration; no named client, no quote, no quantified outcome attribution | `/use-cases/*` | Sanitized real case studies — even anonymized with metrics — would be substantially stronger Experience signal |
| M9 | LinkedIn company page invisible to crawlers (login wall); ~1K followers per side-channel but no public post cadence | LinkedIn ops | Publish 1–2 posts this week (re-share latest `/insights` articles). Even minimal cadence makes the page substantive |
| M10 | Sitemap URL count drift (49 actual vs 52 expected) — three routes missing from sitemap generator | `app/sitemap.ts` | Audit which routes are missing; likely newer pages not emitted |
| M11 | Per-page legal schema missing — `/privacy` should have `PrivacyPolicy`, `/terms` should have `TermsOfService`, `/about` should have `AboutPage` | `/privacy`, `/terms`, `/about` | Add a third JSON-LD block per page (alongside homepage `@graph` and FAQPage) with the appropriate `@type` |
| M12 | `/learn/how-to-accept-khqr` serves generic `Article` schema; should be `HowTo` with `step` array — eligible for Google rich-results carousel | `/learn/how-to-accept-khqr` (and other `how-to-*` slugs) | Replace generic Article with HowTo + HowToStep array sourced from existing page headings |

## Low Priority Issues (Optimize When Possible)

| # | Finding | Fix |
|---|---|---|
| L1 | HSTS header bare (`max-age=63072000`); missing `includeSubDomains; preload` — blocks preload-list submission | Upgrade in `next.config.js` headers; submit to `hstspreload.org` |
| L2 | 13 hydration JS chunks on homepage — INP risk for what is essentially a marketing page | Route-level code-splitting review or RSC conversion for static sections |
| L3 | Footer "Last updated: May 2026" now 4+ weeks stale | Auto-update via build-time stamp |
| L4 | `Person.sameAs` only contains LinkedIn personal URL — no GitHub, no Crunchbase (once created), no conference talks | Extend `sameAs` array in `JsonLd.tsx` once entries exist |
| L5 | `Organization.sameAs` only has LinkedIn company — no GitHub org (pending repo public decision), no industry directories | Same as L4 |
| L6 | `ContactPoint` is a single bag — Schema.org allows arrays with distinct `contactType` + `hoursAvailable` | Split into `customer service`, `sales`, `technical support` ContactPoints |
| L7 | `DefinedTerm` nodes lack cross-references between related terms (Bakong ↔ KHQR ↔ CBDC) | Add `relatedLink` or `subjectOf` fields |
| L8 | `TechArticle` has no `citation` array despite citing government sources | Model NBC/MEF/MPTC references as `citation: [{"@type":"CreativeWork","url":"..."}]` |
| L9 | Service entities have no `offers` / `hasOfferCatalog` — even a price-range Offer per service would lift comparability | Add `offers` with `priceSpecification` per Service node |
| L10 | Terms uses trading name "CamFinTech" only; no legal entity disclosure | Update once Cambodian business registration finalises |
| L11 | Bakong settlement flow on `/learn/how-bakong-works` rendered as prose; underlying 6 steps are list-shaped | Reformat as numbered list (2-3× extraction lift) |
| L12 | No "Last updated" date visible on `/learn/*`, `/glossary/*`, `/use-cases/*`, `/about` | Add visible date stamp + sync with schema `dateModified` |

---

## Category Deep Dives

### AI Citability (62/100)

**Strengths.** Exceptional table density on knowledge/insights pages — `/knowledge/cambodia-gaap-architecture` ships 6 fully-citable comparison tables; `/insights/cambodia-digital-payment-growth` ships 5. Tables are the highest-citation-rate format for AI engines. Statistic density with named primary sources is strong on deep pages. `/learn/how-bakong-works` has a question-format H1 AND substantive self-contained answer capsules — the citability gold-standard template. `/use-cases/sme-compliance-automation` has quotable outcome stats with specific numbers.

**Ceilings.** Zero hyperlinks to primary sources across the entire article corpus (H4). Homepage has no answer capsules and no FAQ block — H2s are marketing labels ("About Us", "Our Services"), not questions. Homepage stats unsourced. Glossary H1s declarative not question-form. FAQ answers may be JS-injected behind accordions only — needs render verification (H7).

**Rewrite example.** `/glossary/bakong` H1 should be `What is Bakong?` (not `Bakong: Cambodia's Central Bank Digital Currency...`), with a 50-word sourced capsule directly underneath.

### Brand Authority (38/100)

**Verified presence.** Founder LinkedIn `william-mall` exists. Company LinkedIn `company/118224010` claimed 2026-05-24 (~1K followers per side-channel; login-walled to crawlers). Both are referenced via `sameAs` in the on-site `@graph`.

**Empty platforms.** Wikidata (no Q-ID), Wikipedia (no article in any language), Crunchbase (no entry; entity-collision noise with Cámara Argentina Fintech, CamNtech, Camvi), Google Business Profile (no Knowledge Panel), YouTube (no channel), CAFT membership (directory unreachable; Tracxn's 113-startup Cambodia fintech list excludes CamFinTech), Medium / Reddit / Quora (all empty).

**GitHub repo** `myownipgit/cambodia-fintech` confirmed still private (`gh api`: `"private":true`). Unchanged from May; principal still deciding whether to make public.

**Entity-collision risk** on the bare string "Camfintech" is non-trivial. Future grounding should always disambiguate with the camfintech.com URL or William Mallett's name.

### Content E-E-A-T (56/100)

| Dimension | Score | Note |
|---|---|---|
| Experience | 4/10 | Article tables read informed but no first-person experiential evidence — no API code samples, no developer-portal screenshots, no named clients in `/use-cases` |
| Expertise | 6/10 | Strong technical precision (EMVCo specs, Tier 2 participants, four-layer GaaP framing). Capped because expertise is attributed to Organization, not Person |
| Authoritativeness | 5/10 | Founder named on `/about`; both LinkedIn profiles linked. But `[Bio in progress]` placeholder + "WM" avatar + no credentials disclosed |
| Trustworthiness | 7/10 | Real Cambodia-specific Privacy (NBC, TRC, MPTC, TRMG named); real Terms with Cambodia governing law; multi-channel contact. Two gaps: legal-entity name not disclosed on Terms; `/about` doesn't link to Privacy or Terms |

### Technical GEO (80/100)

| Check | Result |
|---|---|
| TTFB | 0.16s (excellent, edge-cached) |
| Total response | 0.22s for 64KB homepage |
| SSR | Confirmed (JSON-LD in raw HTML) |
| Canonical | Per-page self-referential canonicals on `/`, `/about`, `/privacy`, `/terms` ✓ |
| 404 handling | HTTP 404 status (not soft-200), `noindex` ✓ |
| Mobile viewport | Present ✓ |
| AI crawlers | 7 allowed; 6+ missing (M1) |
| llms.txt | Present, stale (H6) |
| Hreflang | Absent / broken (M2) |
| OG image | 404 (C1) |
| HSTS | Bare (L1) |
| Sitemap | 49 URLs (3 missing — M10) |

### Schema & Structured Data (62/100)

**Validation.** All emitted JSON-LD parses cleanly. Homepage `@graph` is a well-formed 12-node graph (Organization, Person, ProfessionalService, WebSite, WebPage, 6 Services, FAQPage). Per-page TechArticle/Article/DefinedTerm/FAQPage blocks all valid.

**Gaps (ranked).** WebPage `@id` collapse (C2) → stale `dateModified` (H1) → BreadcrumbList absent (H3) → Article author = Organization (H2) → per-page legal schema missing (M11) → SpeakableSpecification dead on non-home pages (M7) → HowTo absent on `/learn/how-to-*` (M12) → ContactPoint not split (L6) → DefinedTerm cross-refs missing (L7) → TechArticle `citation` array missing (L8) → Service `offers` missing (L9).

### Platform Optimization (12/100)

Effectively unchanged from the March baseline (5/100) and May audit (5/100). The +7 lift in this June reading reflects the LinkedIn company page now being claimed and the founder profile being verifiable — both shipped between March and May but the May audit scored them under Brand Authority rather than Platform. Treat the +7 as a scoring rebalance, not real new lift. The substantive metric — count of distinct off-site platforms where CamFinTech has a discoverable, populated presence — is still 2 (LinkedIn company + LinkedIn personal).

---

## Quick Wins (Implement This Week — each <4 hours)

Ranked by effort-adjusted impact:

1. **Fix `/images/og-image.png` 404** (C1). Upload the 1200×630 PNG; redeploy. Single highest-leverage one-line fix in the audit.
2. **Add author bylines to `/knowledge`, `/insights`, `/use-cases`** (H2) — flip `Article.author` to the Person `#person` `@id` in the schema generator. One file edit; closes the biggest free E-E-A-T uplift.
3. **Hyperlink primary-source citations across ~5 deep articles** (H4). Wrap each `(NBC Annual Report 2024)` in an `<a href>` to the source PDF. ~3 hours; biggest citability lift available.
4. **Regenerate `llms.txt`** to add an "About" section naming William Mallett and linking `/about` (H6). ~30 minutes.
5. **Create Wikidata entry** for CamFinTech with `instance of: business`, `country: KH`, `headquarters location: Phnom Penh`, `founder: William Mallett`, `official website: camfintech.com`, plus `sameAs` to LinkedIn. Free, ~45 minutes. Becomes a foundational AI grounding source.
6. **Create Crunchbase company entry** with description, founder, HQ, industry, website. Free, ~30 minutes.
7. **Add the 6 missing AI crawlers to `robots.txt`** (M1). Mechanical; ~10 minutes.
8. **Replace `/about` `[Bio in progress]` placeholder with a real 150-word bio** (H5). Closes the May audit's primary lift and the lingering H5 finding in one step.
9. **Source-attribute the homepage stats** (M4) — propagate `(MISTI, 2024)` from the case-study source to the homepage.
10. **Upgrade HSTS** (L1) to `max-age=63072000; includeSubDomains; preload`; submit to `hstspreload.org`. ~15 minutes.

---

## 30-Day Action Plan

### Week 1: Render-layer fixes (closes the obvious "this looks broken" perception)
- [ ] Upload `og-image.png` to fix the 404 (C1)
- [ ] Pass per-page slug into `JsonLd.tsx`; set `WebPage @id`, `name`, `dateModified` per page (C2 + H1 + M6)
- [ ] Flip `Article.author` from Organization to Person (H2)
- [ ] Regenerate `llms.txt` with `/about` + founder block (H6)
- [ ] Add 6 missing AI crawlers to `robots.txt` (M1)
- [ ] Upgrade HSTS to `includeSubDomains; preload`; submit (L1)

### Week 2: E-E-A-T and citation hardening
- [ ] Replace `/about` bio placeholder with 150-word real bio + headshot (H5)
- [ ] Add author bylines visible on `/knowledge`, `/insights`, `/use-cases` page headers — not just in schema (H2 visible side)
- [ ] Hyperlink all primary-source citations on ~5 deep articles (H4)
- [ ] Add BreadcrumbList JSON-LD to every deep page (H3)
- [ ] Source-attribute homepage stats (M4)
- [ ] Add Privacy/Terms inline links to `/about` page body

### Week 3: Off-site entity grounding
- [ ] Create Wikidata entry (free; ~45 min)
- [ ] Create Crunchbase company entry (free; ~30 min)
- [ ] Publish 2 LinkedIn company posts re-sharing latest `/insights` articles
- [ ] Re-attempt CAFT membership directory check; apply if not a member
- [ ] Audit and re-decide on GitHub repo visibility (currently private — H8 secondary)

### Week 4: Schema deepening + sitemap hygiene
- [ ] Add `PrivacyPolicy` schema to `/privacy`, `TermsOfService` to `/terms`, `AboutPage` to `/about` (M11)
- [ ] Add `HowTo` schema to `/learn/how-to-*` slugs (M12)
- [ ] Fix sitemap URL count drift (M10)
- [ ] Decide on hreflang: ship real `/km` routes OR remove the misleading current alternate (M2)
- [ ] Rewrite glossary H1s to question form + add capsules (M5)
- [ ] Run a `/geo-audit` re-run on 2026-07-18 to verify lift

---

## Appendix A: Pages Analyzed (Deep Sample)

| URL | Type | GEO Issues observed |
|---|---|---|
| / | Homepage | Unsourced stats (M4); no answer capsules; no FAQ block |
| /about | AboutPage | Bio placeholder (H5); WM avatar; no legal links; Khmer toggle label-only (M3) |
| /privacy | Legal | No `PrivacyPolicy` schema (M11); inherits homepage WebPage (C2) |
| /terms | Legal | No `TermsOfService` schema (M11); no legal entity disclosure (L10) |
| /knowledge/cambodia-gaap-architecture | TechArticle | 6 citable tables; author=Org (H2); stale dateModified (M6); no BreadcrumbList (H3); no `citation` (L8) |
| /knowledge/bakong-technical-integration | TechArticle | Same pattern as above |
| /insights/cambodia-digital-payment-growth | Article | Unhyperlinked NBC/World Bank/BIS citations (H4) |
| /insights/sme-digital-readiness | Article | Same pattern |
| /glossary/bakong | DefinedTerm | Declarative H1 (M5); no cross-refs (L7) |
| /glossary/khqr | DefinedTerm | Same pattern |
| /learn/how-bakong-works | Article | Question H1 ✓; settlement flow rendered as prose not list (L11) |
| /learn/how-to-accept-khqr | Article | Should be HowTo (M12) |
| /use-cases/sme-compliance-automation | Article | Hypothetical case study; no named client (M8) |

## Appendix B: Crawler-side checks

| Check | Result |
|---|---|
| `/robots.txt` | 7 AI bots allowed; 6 missing (M1) |
| `/sitemap.xml` | 49 URLs (3 short of expected; M10); lastmod stale on most articles |
| `/llms.txt` | Present, conformant; missing `/about` + William Mallett (H6) |
| `/llms-full.txt` | Present, comprehensive |
| HTTP 404 on bad URL | Returns 404 status; `noindex` ✓ |
| HSTS | Present but bare (L1) |
| OG image | 404 (C1) |
| Hreflang | Absent / broken (M2) |
| Canonical per-page | ✓ |

---

## Methodology

- 5 parallel subagents (general-purpose) — one per category — briefed with the Aston Hill guardrail and given a 10-URL sample
- Schema verified via raw `curl` + `grep` for `application/ld+json` (WebFetch's HTML-to-markdown conversion strips `<script>` tags and missed the rendered schema — the May audit's "Privacy/Terms schema not rendering" finding was an artefact of this)
- Composite score: weighted average per the `geo-audit` skill rubric (Citability 25% · Brand 20% · E-E-A-T 20% · Technical 15% · Schema 10% · Platform 10%)
- Calibration drift between the May and June audit cohorts is real; absolute scores are the honest snapshot and the +4 composite delta is directional only

This report overwrites the 2026-05-24 snapshot at this path; the prior version is preserved in git history (commits `5b2c99d` and `5bb3a9a`). A dated copy of this audit is also written to the Obsidian vault at `Research/CamFinTech.com/CamFinTech.com website/GEO Audit 2026-06-18.md`.
