# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a bilingual (English/Khmer) FinTech consulting website for Cambodia, built with Next.js 16 (React 19) using the App Router architecture. The site focuses on Cambodia's unique Government-as-a-Platform digital infrastructure, including CamDigiKey (digital identity), Bakong (instant payments), CamDX (data exchange), and CamInvoice (mandatory invoicing system).

## Legal Entity & Corporate HQ

- **Founder & Managing Director**: William Mallett — LinkedIn: https://www.linkedin.com/in/william-mall/ — surfaced on https://www.camfintech.com/about and referenced via `Organization.founder` in the homepage JSON-LD
- **Trading name (used publicly)**: CamFinTech
- **Legal name (pending registration, NOT yet used on public site)**: CAMFINTECH CO., LTD
- **Corporate HQ — abbreviated form (used on public site until registration finalises)**: 30 Preah Norodom Boulevard, Khan Daun Penh, Phnom Penh, Kingdom of Cambodia
- **Corporate HQ — full form (internal docs only)**: 30 Preah Norodom Boulevard, 3rd floor, BRED Bank Building, Sangkat Phsar Thmey 3, Khan Daun Penh, Phnom Penh 12210, Cambodia
- **LinkedIn (company)**: https://www.linkedin.com/company/118224010/ — listed in `Organization.sameAs` in the homepage JSON-LD
- **Naming convention**: founder's LinkedIn slug is `william-mall` (short form); the public website name is `William Mallett` (full surname). The slug-name mismatch is intentional — do not "fix" by changing one to match the other.
- **Status**: Cambodian business registration in progress. Until registration is finalised, refer to the practice as "CamFinTech" (trading name) on public materials. Do not use "Co., Ltd" suffix publicly.

## Development Commands

### Local Development
```bash
npm install          # Install dependencies
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build for production
npm start            # Start production server
npm run lint         # eslint .  — `next lint` was REMOVED in Next 16
```

**Linting changed in Next 16.** `next build` no longer runs ESLint, so a green build does NOT imply a clean lint — run `npm run lint` deliberately before committing. `eslint.config.mjs` is native flat config: do **not** reintroduce the `@eslint/eslintrc` FlatCompat wrapper, which throws `Converting circular structure to JSON` against `eslint-config-next@16`. Note `eslint .` also lints the repo root (`next.config.js`, `tailwind.config.ts`), which `next lint` never did.

Builds use **Turbopack by default** — no `--turbopack` flag needed, and adding a custom `webpack` config to `next.config.js` would make `next build` fail.

## Architecture & Key Patterns

### Language System
- **State Management**: Language state (`"en" | "km"`) is managed in `app/page.tsx` using React's `useState`
- **Font Handling**: Khmer text uses Kantumruy Pro, toggled via the `.font-khmer` CSS class. Note the two **deliberately inverted** ternaries at `PrivacyContent.tsx` and `TermsContent.tsx` (`${isKm ? "" : "font-khmer"}`) — the language-switch button displays the *other* language's label, so the inversion is correct. Do not "fix" them.
- **Language Toggle**: Passed down from `page.tsx` to `Header.tsx` component via props
- **Bilingual Content**: All user-facing content has both English and Khmer versions using ternary operators

### Component Structure
- **Client Components**: `app/page.tsx`, `Header.tsx` marked with `"use client"` for interactivity
- **Server Components**: `layout.tsx`, `Footer.tsx`, `ServiceCard.tsx`, `UseCaseCard.tsx` are server components by default
- **Component Organization**: Shared components live in `app/components/`
- **Type Definitions**: Centralized in `app/types/index.ts`

### Styling System

Migrated to the locked brand identity on 2026-08-31 (commit `5bece33`). Brand masters live in `brand/` (gitignored); web copies in `public/brand/`. `brand/README.txt` is the authoritative spec.

- **Tailwind Configuration**: semantic tokens in `tailwind.config.ts` — no raw brand aliases, no stock Tailwind colours anywhere in `app/`:

  | Token | Hex | Role |
  |---|---|---|
  | `navy` | `#1E2F52` | headings, body, structure |
  | `navy-deep` | `#16233F` | text sitting ON a teal fill |
  | `teal` | `#17A398` | accent — **fills only** |
  | `cloud` | `#F5F7FB` | page background |
  | `card` | `#FFFFFF` | cards, deliberately brighter than the page |
  | `slate` | `#5E6B84` | secondary/muted text (defined, currently unused) |
  | `line` | `#E2E7F0` | hairlines and rules |

- **Riel Teal is a FILL colour, never body text.** Measured 2.91:1 on `cloud` and 3.12:1 on `card` — both below the 4.5:1 WCAG AA floor. It carries CTA fills, tinted bands, borders, rules, and icon glyphs at large-text sizes. Text on a teal fill must be `navy-deep` (5.00:1); `navy` is 4.25:1 and white is 3.12:1, and both fail. Do not "simplify" a CTA to white-on-teal.
- **No dark mode.** Removed 2026-08-31 — the brand guide specifies no dark palette. There is no `darkMode` key, no `dark:` class, no theme toggle, and nothing writes to browser storage. `:root { color-scheme: light }` in `globals.css` replaces the old `<html className="light">`. Do not reintroduce a `dark:` variant without a brand-side dark palette to derive it from.
- **Font Setup** (brand-locked, `next/font/google` in `layout.tsx`): Poppins 600/700/800 (Latin display) · Manrope variable (body, the default) · Kantumruy Pro 400/600 (Khmer) · IBM Plex Mono 400/500 (data). **Poppins has no variable master** — every weight the headings request must be listed explicitly or the browser synthesises fake bold. Manrope's ceiling is 800, so `font-black` (900) will clamp on body elements.
- **Headings**: a base-layer `h1–h4` rule in `globals.css` puts them on `font-display` (Poppins). Utility classes still win, so `font-bold` on a heading gives Poppins 700.
- **Material Symbols**: icon font still loaded from the Google Fonts CDN in the layout head. This is open GEO finding H3 — 310 KB render-blocking, and its ligature text contaminates AI text extraction. Replacing it with inline SVG is queued, not done.

### Image Handling
- **Next.js Image**: Uses `next/image` with `fill` prop for responsive images
- **Remote Patterns**: Configured in `next.config.js` to allow images from `lh3.googleusercontent.com`

### Path Aliases
- `@/*` maps to repository root (configured in `tsconfig.json`)

## Content Focus

The website emphasizes:
1. Cambodia's deliberate digital infrastructure planning (not organic growth)
2. Government-as-a-Platform (GaaP) model with mandatory integration layers
3. Strategic investment opportunities at infrastructure intersections (SCF, compliance-as-a-service, embedded insurance)
4. Technical consulting **and integration delivery** for enterprises connecting to government APIs

## Positioning — what CamFinTech does and doesn't (updated 2026-08-31)

The "never builds" rule was **reversed on 2026-08-31** (commit `cd62c7b`, vault `Firm Operations/02_Decision_Log.md` **ADR-005**). It had been adopted partly on a mistaken belief that offering software development needed extra Cambodian licensing — that requirement belongs to a **Third-Party Processor** routing payments on a bank's behalf (the PSI licence, ~US$2M + 5% deposit), which CamFinTech is not.

**Scope is integrate-only.** CamFinTech builds the **client side** of an integration — ERP→CamInvoice connectors, Bakong/KHQR connectivity, CamDX and CamDigiKey adapters. KHNSIC **62010 is now public**.

**The seam that must not be crossed**: CamFinTech does **not host or transmit client transaction traffic**. A multi-tenant SaaS carrying clients' invoice or payment data is operate-adjacent and would need a ring-fenced entity — a corporate-structure decision, not a copy decision. Vault `DPI Integration/40_CamInvoice_Mandate_and_SP_Strategy.md:34,:189`.

**Rules that did NOT change — do not weaken any of these:**

- **Fee-only** — no commissions, no transaction cuts, no markup on partner invoices
- **Never hold client funds**
- **Never operate a rail** — the client or its sponsor bank is the licensed operator
- **Reserved work to licensed professionals** — Bar lawyers, GDT tax agents
- **Client is always the applicant of record**
- **Process competence, never access**

**Never write access-claim language.** Phrases like "relationships with the NBC", "government liaison", "regulatory dialogue on behalf of clients", or anything implying influence over a regulator's decision are an **existential brand liability** post-Huione (vault `31_Training_Strategy.md:35`). Two separate instances of this shipped undetected and were removed on 2026-08-31 — check for it whenever touching positioning copy. "Ex-regulator talent" is fine: that describes who was hired, not who is known.

**No unevidenced claims.** CamFinTech is pre-revenue with no active clients. Do not write case studies, track-record claims, named product SKUs, or quantified client outcomes. The restored 2026 content carried ~15 fabricated assets and two fabricated citations; all were removed. If a capability claim cannot be evidenced, it does not ship.

**This class of claim has now been found late three times** — twice in the 2026-08-31 Phase A neutralisation, and once *after* it, on `/knowledge/cambodia-fintech-regulation` (*"Our clients have achieved average licensing timelines 30% shorter…"*, live until 2026-08-31). Grepping for a remembered phrasing is not sufficient. When touching content, sweep for the **pattern**: any first-person sentence asserting an outcome, a delivery, a product, or a relationship.

### `/use-cases` — engagement scenarios, and why the guardrail is structural

The four articles under `/use-cases/*` are **illustrative scoping documents**, rewritten from scratch on 2026-08-31 (`a1c024d`). The originals were fabricated case studies naming clients that never existed; two also described CamFinTech operating services across the design seam, and one carried an access claim. Nothing from that framing survives, and none of it is recoverable from git as a starting point — treat `c5b5201^` versions of these files as a record of what went wrong, not as source material.

Three rules hold this in place. Do not weaken any of them:

- **`ScenarioNotice.tsx` is rendered by `ArticleLayout` for `type: 'use-cases'`**, not written into article prose. That is deliberate: prose disclaimers get edited away, and two access claims already shipped undetected. Do not make it conditional, do not move it below the claims block, and do not "DRY it up" into the content files.
- **The URL segment stays `/use-cases`; every visible label says "Engagement Scenarios."** The URLs are being recovered for their link equity, so renaming the route would cost the thing the rewrite exists to get. The label is the other half of the guardrail — `typeLabels` in `ArticleLayout.tsx` and `RelatedReading.tsx` must not revert to "Use Cases", which reads as delivery history.
- **Each scenario carries an explicit scope-boundary section** naming who does what: CamFinTech builds and hands over, the client operates and holds the data, the licensed party operates the rail. That section is what keeps the pages inside the seam, not just clear of fabrication.

If a real, consented engagement ever exists, it is a new content type — not an edit to these files.

**The conflict disclosure on the homepage is load-bearing** — building a client's integration while navigating its approval is the one genuine residual risk of the reversal, and it is answered publicly rather than in the engagement letter. Do not remove it.

## Git Workflow & Deployment Automation

### Repository Information
- **GitHub Repo**: https://github.com/myownipgit/cambodia-fintech
- **Production Branch**: `main` (configured in Vercel dashboard as "push to deploy")
- **Working Branch**: `feature/update-homepage` — where in-flight work lands; merge to `main` periodically (fast-forward) to keep the GitHub default branch current
- **Vercel Project**: `cambodia-fintech`, team `fin-tec-consulting-cambodia` (Hobby plan)
- **Project ID**: `prj_nPOSlaQ6IskxhY65Ysp6EloAtzFq`
- **Dashboard URL**: https://vercel.com/fin-tec-consulting-cambodia/cambodia-fintech
- **Production URL**: https://www.camfintech.com

### Deploy method: `vercel --prod` CLI (not Git auto-deploy)

The Vercel Git integration is configured against `main` and theoretically deploys on push. **In practice, the Hobby plan blocks deploys when the commit author isn't a team member** — and the linked GitHub account (`myownipgit`) shows up as a non-team author, so pushes silently no-op for deploys. The CLI deploy bypasses this because it uses the local Vercel OAuth token as the identity, not the git commit author.

There was historically a Vercel deploy webhook documented here — it is dead and has been removed from this doc. Do not attempt to use webhook-based deploys.

### Standard workflow

```bash
# 1. Make your code changes

# 2. Verify the build before deploying
npm run build

# 3. Commit (on whichever branch you are working — main or feature/update-homepage)
git add <specific-files>
git commit -m "$(cat <<'EOF'
Concise subject line

Body explaining the why.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"

# 4. Push (history hygiene — does NOT trigger a deploy)
git push origin <current-branch>

# 5. Deploy from the local working directory
vercel --prod --yes
```

`vercel --prod` deploys whatever is on disk in the working directory — it does not read git state, so the branch you're on does not affect what gets deployed.

### Working branch → main hygiene

When working on `feature/update-homepage`, periodically fast-forward `main` so the GitHub default branch reflects what's deployed:

```bash
git checkout main
git merge feature/update-homepage --ff-only
git push origin main
git checkout feature/update-homepage
```

### Verification after deploy

```bash
# 1. Confirm the deploy is the new commit
curl -sS -I https://www.camfintech.com | grep -i x-vercel-id

# 2. Spot-check a changed page
curl -sS https://www.camfintech.com/<your-changed-route>

# 3. Confirm GA tag still loads (measurement ID: G-QDZ83JQWVC)
curl -sS https://www.camfintech.com | grep -oE 'G-QDZ83JQWVC'

# 4. Confirm the surviving verification meta tags are still present
curl -sS https://www.camfintech.com | grep -oE 'facebook-domain-verification[^>]*'
curl -sS https://www.camfintech.com | grep -oE 'msvalidate\.01[^>]*'

# 5. Confirm NO google-site-verification meta tag has crept back (expect zero matches)
curl -sS https://www.camfintech.com | grep -c 'google-site-verification'
```

For UI changes, open the page in a browser — `curl` won't catch visual regressions.

### Site verification tokens — current state

| Service | Method | Owner | Where it lives |
|---|---|---|---|
| Google Search Console | **DNS TXT** | info@camfintech.com | DNS zone (`OFlDlnpA…`) — **not** in this repo |
| Bing Webmaster Tools | meta tag | — | `verification.other['msvalidate.01']` in `app/layout.tsx` |
| Facebook domain | meta tag | — | `verification.other['facebook-domain-verification']` in `app/layout.tsx` |

**Do not re-add a `verification.google` field to the root layout metadata.** The
meta-tag GSC verification belonged to a second property owned by
bill.mallett@2speak2.com; that property was removed in Search Console and the tag
was deleted from the repo on 2026-08-23 (commit `9b55c95`). Google Search Console
coverage is now DNS-only under info@camfintech.com — adding the meta tag back would
re-verify the retired property.

### Troubleshooting

If `vercel --prod` fails with a token error, run `vercel login` interactively (browser OAuth) and re-deploy.

If the deploy succeeds but the change doesn't appear on the live site, check:
1. `vercel inspect <deployment-url>` — verify the deployment is `READY` and aliased to `www.camfintech.com`
2. Browser cache or CDN cache — try a hard refresh or `?nocache=1` query param
3. `curl -sS https://www.camfintech.com/<route>` — confirm the change is in the raw HTML, not just hidden by client-side JS

## Session Recovery

### RESUME_SESSION.md
A session state file is maintained at `.claude/RESUME_SESSION.md` to enable seamless recovery if Claude Code or the IDE crashes.

**Claude MUST update this file:**
1. After completing any significant task or milestone
2. Before ending a session
3. After each commit/deployment
4. When switching between major tasks

**Update the file with:**
- Current branch and last commit hash
- Summary of completed work
- Any pending tasks or known issues
- Recently modified files
- Notes for future context

**To update, include:**
```markdown
## Last Updated
[Current date/time UTC]

## Current Branch
[branch name]

## Last Commit
- **Hash**: [commit hash]
- **Message**: [commit message]
- **Status**: [pushed/unpushed, merged/unmerged]

## Recent Work Summary
[What was accomplished]

## Pending Tasks
[What remains to be done]
```

## Important Notes

- The main page is a single-page application with anchor links for navigation
- All sections are contained in `app/page.tsx` (no separate route pages yet)
- TypeScript is in strict mode
- The project uses the Next.js 16 App Router (not Pages Router) — upgraded 14 → 15 → 16 across 2026-08-12/16
- ServiceCard and UseCaseCard are now in separate files under `app/components/`
- Types are centralized in `app/types/index.ts`
- **Dark mode was removed 2026-08-31** — see the Styling System section above
- Mobile hamburger menu is implemented in Header.tsx
- The header logo is `public/brand/lockup-bilingual-navybg.svg` at `h-12`. The `-navybg` variants bake clearspace into the panel, so the drawn mark is only ~56% of panel height — below `h-12` the symbol falls under the brand guide's own 24px minimum. `app/loading.tsx`'s skeleton must track this height or the sticky bar jumps on every page load.
- The bilingual lockup embeds **`ឯ.ក`** (Co., Ltd. equivalent). This is a **recorded deviation** from the public-vs-legal name rule below — see vault `Firm Operations/02_Decision_Log.md` ADR-004. Fallback if OBR approval proves outstanding: swap to `lockup-latin-navybg.svg`, already in `public/brand/`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
