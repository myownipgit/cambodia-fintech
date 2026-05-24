# GEO Audit Report: CamFinTech.com

**Audit Date:** 2026-05-24
**URL:** https://www.camfintech.com
**Business Type:** Agency / Services (specialist consulting — Cambodia FinTech / GaaP integration)
**Pages Analyzed:** 13 (homepage + 5 cluster indexes + 6 sample articles + /privacy + /terms)
**Prior Audit:** 2026-04-15 — 46/100 (Poor)

---

## Executive Summary

**Overall GEO Score: 50/100 (Poor)** — up 4 points from the prior audit's 46.

The site has materially improved on three axes since April: AI Citability climbed 6 points on the strength of statistical density and FAQ blocks; Technical GEO climbed 7 points after the canonical-URL fix from 2026-05-22 propagated cleanly across all content sub-pages; Schema climbed 8 points because the previously-suspected `Article` JSON-LD bug turns out to be **fixed** — Article / ScholarlyArticle nodes now emit on every content page with correct headline, dates, and references to the Organization node.

But the composite lift is gated by Brand Authority slipping 2 points to **6/100** — the lowest score on the audit and the single largest drag on the composite. The Cambodia entity is functionally invisible to AI models: no LinkedIn company page, no Google Business Profile, no Wikipedia entry, no press coverage, no CAFT membership, and the GitHub repo (`myownipgit/cambodia-fintech`) is **private**, surrendering the one technical-authority signal a fintech consultancy could cheaply own. A bare Google search for "camfintech" returns Cámara Argentina de Fintech in position 1; the Cambodia firm doesn't surface in the top 10.

The 30-day target of ~68 from the prior audit remains intact but unmoved. The path there is **off-site work plus an `/about` page with a named founder** — not more technical fixes.

### Score Breakdown

| Category | Score | Weight | Weighted | Δ from 2026-04-15 |
|---|---|---|---|---|
| AI Citability | 78/100 | 25% | 19.5 | +6 |
| Brand Authority | 6/100 | 20% | 1.2 | −2 |
| Content E-E-A-T | 42/100 | 20% | 8.4 | +4 |
| Technical GEO | 89/100 | 15% | 13.35 | +7 |
| Schema & Structured Data | 70/100 | 10% | 7.0 | +8 |
| Platform Optimization | 5/100 | 10% | 0.5 | 0 |
| **Overall GEO Score** | | | **50.0/100** | **+4** |

### Headline findings

1. **The "Article schema is broken" hypothesis from the prior audit was wrong.** Live HTML inspection shows `Article` on `/learn/*`, `ScholarlyArticle` on `/knowledge/*` and `/insights/*`, and `Article` on `/use-cases/*`. All carry `headline`, `datePublished`, `dateModified`, `author` and `publisher` references. The bug was elsewhere or has been silently fixed.

2. **`/privacy` and `/terms` schema blocks added on 2026-05-22 are NOT in the rendered HTML.** Live fetch shows only the inherited root `@graph`. Either the per-page Script tag didn't deploy or it's stripped at build. Needs investigation.

3. **No named human is publicly associated with CamFinTech.** The Brand & Platform agent initially surfaced a LinkedIn profile self-describing as "General Manager at Camfintech" and treated it as a positive signal — that association has been confirmed incorrect by the project principal. The website remains fully anonymous, and there is no public-domain candidate for `/about`. (See Errata.)

4. **The address `30 Preah Norodom Boulevard` resolves to the BRED Bank Tower** which also houses EuroCham and CCI France Cambodge. No Google Business Profile for CamFinTech at that address.

5. **Sitemap anchor URLs still not fixed.** `/sitemap.xml` still lists `/#about`, `/#services`, `/#why-us`, `/#use-cases`, `/#contact` despite being flagged in the prior audit.

---

## Critical Issues (Fix Immediately)

None at the literal "site is broken" level. The site is up, indexable, served via SSG, and AI-crawlable. The items below are urgent on the GEO score but not site-down events.

---

## High Priority Issues

### H1. `/about` returns 404 — zero named humans anywhere on the site
- **Impact:** Largest single E-E-A-T deduction. Required for `Person` schema, founder bio, institutional-partner due diligence.
- **Aggravating factor:** No named human is publicly associated with the practice (the audit's initial LinkedIn match was a misidentification — see Errata). The principal needs to decide on the named founder / team to surface before this can be implemented.
- **Fix:** Once the principal identifies a named founder/team, create `app/about/page.tsx` with: name, photo, ~200-word bio, prior employers/affiliations, LinkedIn link. Emit `Person` JSON-LD with `worksFor` referencing the Organization. Update `JsonLd.tsx` to add `founder: { @id: …#founder }` on the Organization node.
- **Fix complexity:** S — content + one component.

### H2. Brand entity collision: AI search returns Cámara Argentina de Fintech, not CamFinTech (KH)
- **Evidence:** Bare "camfintech" Google query is dominated by `camfintech.hiringroomcampus.com` (Argentine fintech chamber). The Cambodia firm doesn't appear in the top 10. Secondary collisions: CAMS / KFinTech (Indian mutual fund RTAs).
- **Why it matters:** AI models trained on web data default to the most-mentioned "camfintech" — Argentina — when asked about anything camfintech-shaped.
- **Fix:** Two pronged. (a) Populate `Organization.sameAs` in `JsonLd.tsx` with every owned profile once they exist (LinkedIn, GitHub, GBP, Crunchbase, Wikidata). (b) Off-site: claim LinkedIn company page, register GBP at the Phnom Penh address, list with CAFT.
- **Fix complexity:** M — needs off-site work, not just code.

### H3. GitHub repo is private — surrenders a free authority signal
- **Evidence:** `https://github.com/myownipgit/cambodia-fintech` is `isPrivate: true`. The old `github.com/camfintech` org is deleted (404). Public-facing GitHub presence: zero.
- **Why it matters:** A fintech consultancy with no public technical artefacts is unusual; AI models lean on GitHub for entity verification.
- **Fix:** Either (a) make the existing repo public, (b) create a new public `camfintech` org with a single public reference repo (e.g., open-source Bakong/CamDigiKey integration examples), or (c) reclaim the deleted `camfintech` org if available.
- **Fix complexity:** S — one decision.

### H4. `/privacy` and `/terms` JSON-LD blocks not rendering despite being committed
- **Evidence:** Live fetch of `/privacy` and `/terms` returns only the inherited root `@graph` (Organization / ProfessionalService / WebSite / WebPage). The `PrivacyPolicy` and `WebPage about Terms` blocks added in commit `ace46ec` are absent from the rendered HTML.
- **Why it matters:** AI systems don't know these pages exist as PrivacyPolicy entities; canonical-URL fix works but schema-typing doesn't.
- **Fix:** Check `app/privacy/page.tsx` and `app/terms/page.tsx` for the `<Script type="application/ld+json">` blocks. Likely either the Script component isn't rendering server-side or the schema is being stripped at build.
- **Fix complexity:** S — debug and re-deploy.

### H5. No LinkedIn company page for CamFinTech (Cambodia)
- **Evidence:** `site:linkedin.com/company camfintech Cambodia` returns nothing.
- **Why it matters:** LinkedIn is the #1 entity source for B2B AI citations (Perplexity, ChatGPT, Gemini weight it heavily).
- **Fix:** Claim `linkedin.com/company/camfintech` (or `/camfintech-cambodia` if taken). Add the principal as admin; publish initial posts; cross-link from any named team members' personal profiles once `/about` exists.
- **Fix complexity:** S — 30 minutes.

### H6. No Google Business Profile at the Phnom Penh address
- **Evidence:** Maps search for "CamFinTech" at 30 Preah Norodom Boulevard returns only BRED Bank Tower / EuroCham / CCI France Cambodge. No CamFinTech listing.
- **Why it matters:** GBP feeds Google Knowledge Panel + Bing + Gemini. Critical for local-entity grounding in AI responses.
- **Fix:** Create the GBP under category "Business Management Consultant" with the same NAP (name, address, phone) as the site footer.
- **Fix complexity:** S — 1 hour, plus the postcard verification wait.

### H7. Sitemap still contains 5 anchor URLs — flagged in prior audit, NOT fixed
- **Evidence:** `/sitemap.xml` still lists `/#about`, `/#services`, `/#why-us`, `/#use-cases`, `/#contact` with their own `lastmod` and `priority`.
- **Why it matters:** Search engines and AI crawlers treat fragments as duplicates of `/`. Wastes crawl budget and signals immaturity.
- **Fix:** Drop the fragment entries from `staticPages` array in `app/sitemap.ts`. One-line change.
- **Fix complexity:** XS.

---

## Medium Priority Issues

### M1. `BreadcrumbList` JSON-LD missing entirely despite visible breadcrumbs
- Breadcrumb UI renders on every content sub-page (`ArticleLayout.tsx`); no corresponding JSON-LD emitted.
- Fix: emit `BreadcrumbList` in `ArticleLayout.tsx` alongside the existing Article block. One-component change, hits 30+ pages.

### M2. WebPage `@id` collision — every sub-page falsely declares itself the homepage
- Confirmed: every sub-page inherits `@id: https://www.camfintech.com/#webpage` with `name: "CamFinTech — Architecting Cambodia's Digital Financial Future"`.
- Fix: in `ArticleLayout.tsx`'s `buildSchema`, override with a page-specific `WebPage` node carrying unique `@id` = `${url}#webpage`, correct `url`, `name`, `inLanguage`, and `breadcrumb` reference.

### M3. hreflang completely absent (was broken, now removed without replacement)
- Homepage emits zero `hreflang` tags. The prior `/?lang=km` (a query param that wasn't a real route) is gone, but nothing replaces it. Khmer UI exists client-side but is invisible to AI crawlers and search engines.
- Fix: either (a) implement real `/km/...` routes via Next.js i18n and declare proper alternates, or (b) declare `hreflang="x-default"` on the homepage and drop the Khmer claim from layout metadata.

### M4. `dateModified` is stale on every content page
- All 41 content pages share `"dateModified":"2026-03-25T00:00:00.000Z"` — now 2 months old. Top-level pages show `2026-05-22`. Homepage WebPage's `dateModified` is `2026-03-24`.
- Fix: derive per-article `dateModified` from the registry entry's `updatedAt` field (which already exists in `ArticleContent`).

### M5. Source citations are plain text — no hyperlinks, no References section
- NBC, BIS, ADB, World Bank, GSMA are named verbatim across articles but never linked. AI systems weight cited sources more heavily when they can follow the link.
- Fix: extend `ArticleContent` schema with a `references[]` field (label + URL) and render as a `<References>` section. Backfill the 10 highest-traffic articles first.

### M6. Schema type mismatch — `ScholarlyArticle` emitted on `/knowledge/*` instead of `TechArticle`
- Architecture / integration content reads as developer docs, not academic papers. Crawlers expect `TechArticle` for technical documentation.
- Fix: update the `schema` field in the registry entries under `app/content/knowledge/*.ts`.

### M7. Khmer translations of /privacy, /terms, and the new Phnom Penh address strings are AI-quality, not native
- Marked with "EN version prevails" disclaimer but should be reviewed by a native Khmer speaker before regulator-facing use.

### M8. "March 20266 min read" / "March 20263 min read" formatting bug on article meta
- Missing separator between `updatedAt` formatted month-year and `readingTime` minutes. Fix in `ArticleLayout.tsx` ~line 102 — insert a `·` or non-breaking space.

### M9. Footer (with Privacy / Terms / Glossary nav + Phnom Penh location) only renders on the homepage
- Legal links + the HQ address are invisible on every sub-page; users on `/glossary/bakong` can't see Privacy without going home. Undermines the address-consistency signal across the site.
- Fix: promote Footer rendering to `app/layout.tsx`.

### M10. Use Cases lack named clients (intentional, but currently reads as marketing)
- `use-cases/sme-compliance-automation` opens "CamFinTech designed and delivered an API-first middleware solution..." with no client, no industry detail, no dollar value. AI systems treat unnamed case studies as advertising, not evidence.
- Fix: even pseudonymized detail helps ("a Phnom Penh-based garment exporter, 180 employees, KHR 12M monthly invoice volume").

---

## Low Priority Issues

### L1. Twitter Card on `/glossary/*` defaults to homepage title instead of page-specific
- `<meta name="twitter:title">` falls back to root layout's "CamFinTech — Cambodia FinTech Consulting" on glossary pages even though `og:title` is page-specific.
- Fix: explicitly set Twitter Card metadata per page in `app/glossary/[slug]/page.tsx`.

### L2. Homepage hero has minimal statistical grounding
- Only 4 numbers (43,970+ SMEs, 80% reduction) with zero external sources. The most-crawled page is the least citable.
- Fix: add 2-3 sourced statistics into the hero or above-the-fold area.

### L3. First-person promotional claims diluted into otherwise-factual articles
- `cambodia-gaap-architecture` mid-article: "CamFinTech has developed reference architecture patterns... reducing implementation time from months to weeks" — unverifiable, sales-y. Either delete or quantify with a verifiable comparison.

### L4. CLAUDE.md still says production branch is `feature/update-homepage`
- Vercel dashboard says `main`. Per-session memory and Obsidian docs are correct; the repo's CLAUDE.md is stale.

### L5. `GEO-AUDIT-REPORT.md` (this file) and `docs/` folder remain git-untracked
- Either commit (under `docs/audits/`) or `.gitignore`. Currently sits in repo root as untracked.

---

## Category Deep Dives

### AI Citability — 78/100 (+6)

**What's working:**
- Statistical density is exceptional in `/insights` and `/knowledge`. `cambodia-digital-payment-growth` carries 40+ year-tagged figures — textbook AI citation bait.
- Definition-then-elaboration pattern consistent across `/glossary` (e.g., `glossary/bakong` opens with a textbook AI-extractable definition).
- 6 tables in `cambodia-gaap-architecture`, 5 tables in `cambodia-digital-payment-growth` — machine-readable, extracted cleanly.
- Explicit FAQ blocks on every deep page (3-5 Q&A pairs each).
- Heading hierarchy is descriptive, not generic ("The Settlement Process Step by Step" vs "Process").

**What's broken:**
- Zero hyperlinked sources across all 6 pages sampled. Highest single-line fix in this category.
- No References section on any article. `cambodia-digital-payment-growth` cites 6 institutions but offers only internal "Related Reading".
- Homepage has minimal statistical grounding — the most-crawled page is the least citable.
- Use Cases lack named customers — generic case studies aren't cited.
- First-person promotional claims mid-article hurt extractability.

**High-citability passage found** (`/learn/how-bakong-works`):

> "Bakong processed over 21 million transactions in 2024, representing a 78% year-over-year increase, with total value exceeding USD 26 billion. Settlement is final and irrevocable once confirmed on the Iroha ledger, typically within one to two seconds. There is no batch processing, no end-of-day netting, and no multi-day clearing cycle."

Self-contained, specific numbers, named technology, contrastive structure.

**Low-citability passage found** (`/knowledge/cambodia-gaap-architecture`):

> "enterprises that integrate early gain competitive advantage, while those that delay face escalating compliance costs"

Unsourced, no quantification, speculative — AI models skip this in favour of the dated fact above it.

### Brand Authority — 6/100 (−2)

The audit's primary leverage point and its lowest score. Bullet summary of presence checks:

| Platform | Status |
|---|---|
| LinkedIn company page | **Missing** |
| Google Business Profile | **Missing** |
| Wikipedia | **Missing** |
| Crunchbase / PitchBook | **Missing** |
| Medium | **Missing** |
| Reddit | **Missing** |
| YouTube | **Missing** |
| GitHub (current `myownipgit/cambodia-fintech`) | **Private** — zero public signal |
| GitHub (old `camfintech` org) | **Dead** (deleted for non-payment) |
| CAFT member directory | **Unverified** (directory returned 503 at audit time; not in founding-member list) |
| Khmer Times / Phnom Penh Post | **Missing** |
| ASEAN fintech press (Fintech Singapore, Tracxn, The Fintech Times) | **Missing** |
| Industry directories (TechBehemoths, Consultancy.org KH, D&B, Lusha) | **Missing** |
| AI-search proxy tests (3 queries) | **All fail** — camfintech.com appears in 0/3 top-10 result sets |

There is no positive: the audit initially surfaced a LinkedIn profile self-describing as "General Manager at Camfintech" but the principal has confirmed no such association exists. The Cambodia entity is fully anonymous in the public record. (See Errata.)

### Content E-E-A-T — 42/100 (+4)

| Sub-dimension | Score | Note |
|---|---|---|
| Experience | 45/100 | Anonymous engagements; quantified outcomes; no dated project timelines; ~2-year operating history (per © 2024-2026) |
| Expertise | 62/100 | Strongest pillar. Real depth: Hyperledger Iroha + Soramitsu, OAuth/OIDC/mTLS specifics, Estonian e-Governance Academy reference, phased CamInvoice rollout dates |
| Authoritativeness | 25/100 | No "as featured in", no speaking engagements, no panel mentions, no media citations, no industry body memberships |
| Trustworthiness | 38/100 | Privacy + Terms now live; Phnom Penh address; working email/phone/WhatsApp/Telegram; but no named legal entity, no DPO, no registration number, no hyperlinked sources, no /about |

Quick wins (ordered by ROI): ship `/about` this week; add a legal entity / registration line to footer once finalised; add bylines and an author profile to all 40 articles; hyperlink source citations on the 10 highest-traffic articles; name a DPO in `/privacy`.

### Technical GEO — 89/100 (+7)

Best-in-class for this site size. The 7-point lift came from the 2026-05-22 canonical fix landing cleanly.

**Working:**
- AI crawler allow-list comprehensive (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, ChatGPT-User, Google-Extended, CCBot, plus default).
- llms.txt is spec-compliant (H1, blockquote summary, 8 H2 sections, all bulleted Markdown links).
- llms-full.txt exists (10,524 bytes, last-modified 2026-05-24).
- Pure SSG — `<title>`, canonical, meta description, JSON-LD all in raw HTML pre-hydration.
- Canonicals correct on `/privacy`, `/terms`, `/glossary`, `/glossary/[slug]`, `/learn/[slug]`, `/knowledge/[slug]` — prior audit's known-broken concern is RESOLVED.
- Page speed: homepage TTFB 0.18s, total 0.23s, 63 KB; sub-page TTFB 0.13s. HSTS `max-age=63072000` enforced.

**Broken:**
- Sitemap anchor URLs (5 entries, M severity).
- hreflang completely absent (M severity).
- Twitter Card on glossary pages generic (S severity).
- `lastmod` uniform across content (S severity).
- WebPage JSON-LD `dateModified: 2026-03-24` is 2 months stale.

### Schema & Structured Data — 70/100 (+8)

Inventory:

| Page | Types found | Status |
|---|---|---|
| `/` | Organization, ProfessionalService, WebSite, WebPage, 6× Service, FAQPage | Complete |
| `/glossary/bakong` | + DefinedTerm, FAQPage | Complete (bonus FAQ) |
| `/learn/how-bakong-works` | + Article, FAQPage | FIXED — bug from prior audit was wrong / fixed silently |
| `/knowledge/cambodia-gaap-architecture` | + ScholarlyArticle, FAQPage | Wrong type (should be TechArticle) |
| `/insights/cambodia-digital-payment-growth` | + ScholarlyArticle, FAQPage | Wrong type (should be Article) |
| `/use-cases/sme-compliance-automation` | + Article, FAQPage | Article only; no HowTo |
| `/privacy` | Root @graph only | **Missing per-page block** |
| `/terms` | Root @graph only | **Missing per-page block** |

**Organization audit (homepage):**
- `PostalAddress` correct (Phnom Penh, 12210, KH — Phnom Penh fix from 2026-05-22 confirmed live).
- `sameAs` **missing entirely** on Organization node (the one on a nested Place/Country node points to Wikipedia for Cambodia, not the firm).
- `legalName` correctly absent (registration pending).
- `founder` **missing** — no Person node anywhere in the @graph.
- `contactPoint` present (`+855-76-277-5645`, `info@camfintech.com`, en+km).
- `foundingDate: "2024"` set.

**Highest-impact gaps (ranked):**
1. `BreadcrumbList` missing on every sub-page (visible UI, no markup).
2. Per-page `WebPage` with unique `@id` (collision bug — every sub-page declares itself the homepage).
3. `Organization.sameAs` (entity disambiguation for AI crawlers).
4. `Person` schema for founder, referenced via `Organization.founder`.
5. `PrivacyPolicy` on `/privacy` and proper `WebPage` on `/terms` (verify the 2026-05-22 deploy).
6. `Dataset` schema on `/insights/*` pages with stat tables.
7. `HowTo` schema on `/use-cases/*` with step-based content.
8. `TechArticle` (not `ScholarlyArticle`) for `/knowledge/*`.

### Platform Optimization — 5/100 (unchanged)

Same data as Brand Authority. CamFinTech is essentially absent from every platform AI models train on. Closing this gap requires off-site work, not code changes.

---

## Quick Wins (Implement This Week)

1. **Decide on the named founder/team to publish, then ship `/about`** with name, photo, bio, LinkedIn link, Person JSON-LD. Single-handedly moves E-E-A-T from 42 → ~55 and the composite from 50 → ~54. **Blocked on a name from the principal.**
2. **Make the GitHub repo public** (or create a new public reference repo under a new `camfintech` org). Restores a free authority signal.
3. **Claim `linkedin.com/company/camfintech`** and admin it with the principal's account. ~30 minutes; major entity-disambiguation value.
4. **Drop sitemap anchor URLs** in `app/sitemap.ts`. One-line fix; closes a prior-audit finding that wasn't addressed.
5. **Debug `/privacy` and `/terms` JSON-LD** — they're committed but not rendering. Investigate `app/privacy/page.tsx` and `app/terms/page.tsx`.

These five collectively should move the composite from 50 → ~57 in a single sprint.

---

## 30-Day Action Plan

### Week 1: Named entity and quick fixes

- [ ] Ship `/about` with named founder, photo, bio, Person JSON-LD, sameAs LinkedIn (H1)
- [ ] Make GitHub repo public OR publish a new public reference repo (H3)
- [ ] Claim `linkedin.com/company/camfintech`; add admins (H5)
- [ ] Add `Organization.sameAs` array to `JsonLd.tsx` with LinkedIn + GitHub URLs (H2)
- [ ] Drop sitemap anchor URLs (H7)
- [ ] Debug why `/privacy` and `/terms` JSON-LD blocks aren't rendering; redeploy (H4)
- [ ] Fix "March 20266 min read" formatting bug (M8)

### Week 2: Schema cleanup

- [ ] Add `BreadcrumbList` JSON-LD in `ArticleLayout.tsx` (M1)
- [ ] Override `WebPage` per-page with unique `@id` in `ArticleLayout.tsx` (M2)
- [ ] Change `/knowledge/*` schema type to `TechArticle` (M6)
- [ ] Change `/insights/*` schema type to `Article` (or `Article + Dataset` for stat-table pages)
- [ ] Wire per-article `dateModified` to the registry's `updatedAt` field (M4)
- [ ] Promote Footer rendering to `app/layout.tsx` so legal links + HQ show on every page (M9)

### Week 3: Authority and references

- [ ] Create Google Business Profile at 30 Preah Norodom Boulevard (H6)
- [ ] Apply for CAFT membership (caftkh.org/members-directory/) — single inbound link
- [ ] Backfill bylines + author profile page (`/team/[slug]`) on all 40 articles
- [ ] Add `references[]` field to `ArticleContent` schema; backfill the 10 highest-traffic articles with hyperlinked sources + `<References>` section (M5)
- [ ] Decide on hreflang: real `/km/...` routes OR drop the KM alternate cleanly (M3)

### Week 4: Off-site and content

- [ ] Place one byline article in Khmer Times or Cambodia Investment Review on Bakong / CamInvoice integration
- [ ] Pitch first speaking slot (CAFT event, BIS conference, Mekong Innovation forum)
- [ ] Name a customer (even pseudonymized) in one use-case piece (M10)
- [ ] Add a Data Protection Officer name and a data-subject-request workflow to `/privacy`
- [ ] Schedule next audit (target: composite ≥ 65)

If all four weeks land, expected composite: **65-70** (Fair → Good).

---

## Comparison to 2026-04-15 Audit

| Category | 2026-04-15 | 2026-05-24 | Δ |
|---|---|---|---|
| AI Citability | 72 | 78 | +6 |
| Brand Authority | 8 | 6 | −2 |
| Content E-E-A-T | 38 | 42 | +4 |
| Technical GEO | 82 | 89 | +7 |
| Schema & Structured Data | 62 | 70 | +8 |
| Platform Optimization | 5 | 5 | 0 |
| **Composite** | **46** | **50** | **+4** |

Net: +4 composite points after 5 weeks of work, with **all of the lift coming from on-site improvements**. The off-site authority work that the prior audit identified as the unlocking step has not been started — explaining why Brand and Platform are flat or negative.

The "Article schema broken" finding from the prior audit was incorrect; that contributed 8 of the Schema category's improvement.

---

## Appendix: Pages Analyzed

| URL | Title | GEO Issues |
|---|---|---|
| `/` | CamFinTech — Cambodia FinTech Consulting... | Thin homepage stats; no sameAs; WebPage `@id` shared everywhere |
| `/glossary` | Cambodia FinTech Glossary — CamFinTech | OK |
| `/glossary/bakong` | Bakong — CamFinTech Glossary | Twitter Card defaults to homepage |
| `/learn` | Cambodia FinTech Learn — CamFinTech | OK |
| `/learn/how-bakong-works` | How Does Bakong Work in Cambodia? | High-citability content; missing breadcrumb schema |
| `/knowledge` | — | OK |
| `/knowledge/cambodia-gaap-architecture` | Cambodia GaaP Architecture... | Schema type `ScholarlyArticle` should be `TechArticle` |
| `/insights` | — | OK |
| `/insights/cambodia-digital-payment-growth` | — | Schema type `ScholarlyArticle` should be `Article` |
| `/use-cases` | — | OK |
| `/use-cases/sme-compliance-automation` | — | Anonymous client undermines citability |
| `/privacy` | Privacy Statement — CamFinTech | PrivacyPolicy JSON-LD missing from rendered HTML |
| `/terms` | Terms of Use — CamFinTech | Terms WebPage JSON-LD missing from rendered HTML |

---

## Errata (corrections issued post-audit)

- **2026-05-24** — The Brand & Platform agent initially surfaced [kh.linkedin.com/in/aston-hill-469944322](https://kh.linkedin.com/in/aston-hill-469944322) as "Aston Hill, General Manager at Camfintech" and treated it as a positive E-E-A-T signal (a named human publicly associated with the practice). **The project principal has confirmed this association does not exist** — the LinkedIn profile self-describes against a different "Camfintech" entity, not the Cambodia consulting firm at camfintech.com. All references to Aston Hill have been removed from this report. The original finding stands: no named human is publicly associated with CamFinTech, and `/about` cannot be shipped until the principal identifies the named founder/team. Future audit runs should ignore any LinkedIn match against the literal string "Camfintech" without explicit confirmation from the principal — the entity collision risk (with Cámara Argentina de Fintech and other "camfintech"-shaped entities) extends to personal-profile self-descriptions, not just organisation-level matches.

---

*Audit generated 2026-05-24 by `/geo-audit` orchestration skill. Five specialist agents ran in parallel against live production HTML. Errata applied post-audit.*
