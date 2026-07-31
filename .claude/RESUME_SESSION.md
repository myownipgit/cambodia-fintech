# Session Recovery State

This file tracks the current session state to enable seamless recovery between sessions or after a crash. Update after every material change.

## Last Updated
2026-07-31 (end of 2026-07-30/31 session — GEO re-audit + Wikidata dead-link fix + hotfix bundle + OBR-KHNSIC scope broadening + vault sweep + **sameAs Health Check n8n + Daily GEO Monitoring pipeline deployed** + **direction notes 64+65 captured for pending pivots** + **Agentic Firm operating thesis captured (new `Firm Operations/` vault folder)** + **GEO Sensor Pilot pressure-test + Decision Log with ADR-001 Honcho-defer**)

## Current Branch
`feature/update-homepage` — **aligned with `main`** at `2f2e70c` (both branches fast-forwarded end of 2026-07-31 session)

## Latest commits (2026-07-30/31 arc — all pushed, main = feature/update-homepage = `2f2e70c`)
- **`2f2e70c`** — "Add pointer to Agentic Firm operating thesis (new Firm Operations vault folder)" (HEAD) — docs only
- **`0dbe191`** — "Add pointers to direction notes 64 (62010 pivot) + 65 (remediation engine)" — docs only
- **`9f82043`** — "Add continuous monitoring pipeline docs (n8n + Hermes cron)" — docs only
- **`8f37e09`** — "Update RESUME_SESSION for 2026-07-30/31 arc" — docs only
- **`086a8ae`** — "Broaden site language to reflect OBR-registered KHNSIC scope" — deploy `dpl_6pcc9sZ1FJfj2raqN1mirnjEnBsQ`
- **`c9e9690`** — "Post-audit hotfix bundle: GitHub sameAs, 404 robots, sitemap freshness, DASP breadcrumb" — deploy `dpl_Cwh1WkcScRg69mmKBY52VB2uwUaN`
- **`ca32875`** — "Remove dead Wikidata sameAs anchor (Q140279044 was deleted 2026-06-28)" — deploy `dpl_6LPAHGBd6qCcKL9sjcihTZCdPt3N`

**Production**: last deploy remains `dpl_6pcc9sZ1FJfj2raqN1mirnjEnBsQ` from 2026-07-30 (OBR-KHNSIC broadening). No code deploys shipped 2026-07-31 — all four 2026-07-31 commits are docs-only.

## What just happened (2026-07-30 arc, one session)

### Phase 8 — Post-DPI-repositioning GEO re-audit (composite 63 → 67)

Ran full 5-subagent re-audit ~6 weeks after 2026-06-18 DPI ship. Composite **67/100 (Fair — upper band, approaching Good)**, +4 vs 63 baseline.

Per-category deltas: Citability 78→77 (−1), Brand 42→43 (+1), E-E-A-T 68→73 (**+5, biggest**), Technical 88→91 (+3), Schema 82→77 (−5, dateModified staleness), Platform 30→35 (+5, GBP win).

**CRITICAL discovery**: Wikidata Q140279044 was DELETED by admin `MisterSynergy` on **2026-06-28** — 10 days after Bill created it. Reason: notability failure. Production HTML had been emitting the now-404 URL for 33 days.

### Same-day hotfix arc (3 commits, all shipped)

- **C1 hotfix** (`ca32875`): Removed dead Wikidata URL from `Organization.sameAs`. Deploy required interactive `vercel login` re-auth (token had expired).
- **L1+H1+H2+M1 bundle** (`c9e9690`): Added GitHub URL to sameAs (2 anchors restored); overrode 404 robots metadata; added `revalidate = 86400` to sitemap.ts; fixed DASP BreadcrumbList self-loop.
- **OBR-KHNSIC scope broadening** (`086a8ae`): Bill submitted CamFinTech to Cambodian OBR portal with 5 KHNSIC-2015 codes. Site language broadened to reflect 4 public codes (62020, 62090, 70200, 85499). 62010 (software dev/SaaS) kept OFF public site to preserve "never build" hard rule. Locked via AskUserQuestion: single-brand front door, no CamFinTech Group umbrella, no Angkor Skills Academy mention until angkorskillsacademy.com launches. Plan file: `/Users/myownip/.config/claude/plans/misty-cuddling-gray.md`.

### Continuous monitoring infrastructure deployed (2026-07-31)

**Phase 8 — sameAs Health Check n8n workflow** (`VRga1rFKpoghkWy5` on `automation.camfintech.com`, active): weekly Sundays 09:00 ICT. Fetches production homepage, parses JSON-LD, HEAD-checks every `Organization.sameAs` + `Person.sameAs` URL, alerts Telegram only if any URL returns non-2xx. Would have caught the Wikidata dead-link within 2 days instead of 33. Companion error-alert workflow (`s3oujqs6DMAcnEVs`) fires if the main workflow itself crashes. **Bill-actionable**: wire Gmail credential on both workflows' Gmail nodes in the n8n UI (30 sec each). Alerts won't send until credential is picked.

**Phase 9 — Daily GEO Monitoring Pipeline** (3 Hermes cron jobs, active):
- `645711088c45` camfintech-daily-audit — DeepSeek V4 Pro daily 09:00 ICT
- `3ce7e030981c` camfintech-weekly-cross-check — Sonnet 4.7 Sundays 08:00 ICT
- `f365ca6ac1f5` camfintech-weekly-competitor — DeepSeek Mondays 09:00 ICT (DFDL, Acclime, DAS & Partners)

Tier B locked after Phase 0 empirical model shootout. Estimated cost ~$136/year total. Delivers digest + full report as document to CamFinTech Hermes Telegram group `-1004295083888`.

**Key discovery**: `claude -p /geo-audit URL` FAILS in headless mode (subagent orchestration is incompatible with print mode). Applies to Sonnet + Haiku + Opus. Cron audits MUST use single-context inlined-prompt approach. DeepSeek delivered ~75–85% of Sonnet's quality with verification-discipline addendum (drops false-positive rate from ~30% to near-zero).

**Manual trigger 2026-07-31**: daily-audit ran end-to-end in 27 min, delivered composite 65/100 (Δ −2 vs Sonnet baseline 67), zero false positives. Pipeline validated end-to-end.

Full docs: [[Daily GEO Monitoring Pipeline]] + [[sameAs Health Check Workflow]]. Plan file: `/Users/myownip/.config/claude/plans/misty-cuddling-gray.md`. Shootout: `~/.geo-prospects/shootout/SHOOTOUT-RESULTS.md`.

### Phase 10 — Direction-note capture arc (2026-07-31, late session)

Three strategic framing docs captured in the vault, none executable — all forbid ad-hoc changes without proper scoping sessions:

- **`64_62010_Pivot_Direction_Note.md`** — Bill discovered during OBR registration that 62010 (software dev / SaaS) requires NO additional ministerial certification. Wants CamFinTech.com to broaden offerings to include DPI-compliant technology building — REVERSES the 2026-07-30 `086a8ae` "62010 stays OFF" decision + the "never builds" hard rule stamped on 6 site surfaces. **7 tensions** to resolve before executing (scope, accredited-partner fate, SP status, hard-rule survival, brief revision, disclaimer reversal, timing).
- **`65_Remediation_Engine_Direction_Note.md`** — Evidence-backed remediation engine spec: daily GEO audit findings → persistent Kanban cards keyed on `domain:rule:template` → four action tiers (`auto-executable` / `draft-and-stage` / `human-only` / `observe-only`) → branch→PR→human-merge automation (never direct-to-prod) → verification-gated closure with `Recurrence` as first-class state. GEO is the pilot; pattern generalizes to sameAs / competitor / security. **10 tensions** to resolve.
- **`Firm Operations/00_Agentic_Firm_Thesis.md`** — parent thesis behind docs 64+65 in NEW `Firm Operations/` vault folder. Sole-founder consulting firm as 4-layer agentic system: **Sensors → AI Chief of Staff → Human → Specialist Agents**. 9-sensor network mapped for CamFinTech (2 deployed = GEO + competitor; 7 shape-only = compliance / financial / client health / cybersecurity / legal / brand / product-market). Load-bearing insight: AI CoS synthesis at founder-volume is the genuinely-new role (previously priced at ~$150K/yr salary). Coincidentally converges with the 62010 pivot — makes the firm's own operations a **saleable second product** (KHNSIC 62010+62020+70200) and a **Riel Report editorial arc**.

3 commits (all docs-only) pushed and main fast-forwarded to `2f2e70c`. MEMORY.md updated with 3 parallel anchor sections pointing at the vault docs.

### Vault + memory sweep (2026-07-31)

- **[[GEO Audit 2026-07-30]]** — new snapshot in website vault
- **Rewrite Project.md** — 3 sprint log entries (re-audit + hotfix + OBR broadening)
- **Outstanding Issues.md** — reconciled against 2026-07-30 audit; historical content preserved for provenance
- **Recent Milestones.md** — new "Phase 7" section with 2026-06-18 → 2026-07-30 entries
- **GEO and SEO Strategy.md** — 2026-07-30 row added; pre-DPI baseline callout updated
- **README.md** — bumped to 67/100 baseline; OBR row added
- **DPI Integration/00_README.md** — new "OBR company registration submitted (2026-07-30)" section
- **DPI Integration/61_CamFinTech_Website_Rewrite_Brief.md** — addendum note added at top
- **DPI Integration/63_OBR_Registration_and_KHNSIC_Scope.md** — NEW canonical doc for OBR filing + decision log
- **MEMORY.md** (auto-memory) — Wikidata marked DELETED; GitHub added to sameAs anchors; GBP still LIVE with wire-up pending; new "Group structure" section; OBR submission details in Legal Entity; 2026-07-30 audit added; string collision worsened
- **This file** — full rewrite

## Expected next audit composite

**~70/100** once AI crawlers re-index (2-4 weeks). This assumes:
- Wikidata dead-link removed (done)
- GitHub URL in sameAs (done)
- Sitemap freshness restored (done)
- 404 robots contradiction resolved (done — behaviorally)
- DASP breadcrumb clean (done)
- KHNSIC scope broadening reaches AI crawlers via llms.txt + knowsAbout expansion (in progress)

## Pending tasks (Bill-actionable)

Priority order for the 30-day target (composite ≥ 72 by 2026-08-30):

| # | Item | Effort | Blocked by |
|---|---|---|---|
| 1 | **Send GBP Maps URL + lat/lng** | 2 min Bill · 3 min Claude follow-up | Bill only |
| 2 | **FU-6**: real founder bio + headshot for `/about` | Bill content · Claude drops in | Bill content — SINGLE BIGGEST E-E-A-T LIFT STILL ON TABLE |
| 3 | **H4**: Hyperlink 8-12 primary sources (Prakas 093, TCRMG, NBFSA plan, Digital Gov Policy, Law on Taxation, BIS 2024, NBC AR 2024) | 2 hours Claude | Nothing |
| 4 | **HSTS preload submission** at hstspreload.org | 5 min Bill | Bill only — header already qualifies |
| 5 | **GSC: request indexing** for `/`, `/about`, `/products/dasp`, `/publication` | 5 min Bill | Bill only |
| 6 | **CAFT membership** application (caftkh.org was 503 on 2026-06-18) | Bill | Bill only — retry |
| 7 | **LinkedIn 1-3 posts** re-sharing Riel Report briefings | Bill | Bill only |
| 8 | **M4/M5/M6**: Small copy polish (homepage "What is CamFinTech?" answer block; /glossary/camdigikey lead sentence; /about full street address) | 30 min Claude | Nothing |
| 9 | **NEW-M1 cosmetic residue**: 404 page still emits 2 robots meta tags (both agree noindex now — behavior correct, redundancy remains) | 15 min Claude — investigate app/layout.tsx | Nothing |
| 10 | **2-week re-audit** on/after 2026-08-13 | Run `/geo-audit` | Nothing |
| 11 | **Wire Gmail credential** on both sameAs Health Check n8n workflows (main + error-alert) | 30 sec each in n8n UI | Bill — alerts won't send until picked |

**Task 10 completed 2026-07-31**: `main` fast-forwarded to `2f2e70c`.

## Pending scoping sessions (triggered by Bill when ready — do NOT execute without them)

Three strategic direction docs captured this session, all forbid ad-hoc execution:

| # | Session | Tensions to lock | Trigger phrase |
|---|---|---|---|
| A | **62010 pivot** — broaden CamFinTech.com to include DPI-compliant technology building; reverses "never builds" hard rule on 6 site surfaces | 7 tensions (scope, accredited-partner fate, SP status, hard-rule survival, brief revision, disclaimer reversal, timing) | "let's plan the 62010 pivot" |
| B | **Remediation engine** — GEO audit findings → persistent Kanban cards → tiered automation with branch→PR→human-merge | 10 tensions (Kanban tool, YAML store, policy config, grouping-rule authoring, verification trigger, accepted-risk auth, recurrence policy, pilot scope, confidence-to-tier mapping, human-only assignment) | "let's plan the remediation engine" |
| C | **Agentic firm — sensor #2 selection** — most likely cybersecurity (daily, deterministic) or regulatory compliance calendar (weekly, OBR/Prakas-coupled). Do NOT design CoS synthesis layer until 2–3 sensors exist. | Sensor domain, cadence, cost, format, and how it feeds a future CoS layer | "let's plan sensor 2" |

## Longer-horizon follow-ups

- **FU-1/2/3/4**: Reconcile Riel Report side (riel.report/about, briefing footer boilerplate, LinkedIn bios still carry old "Phnom Penh software company" framing). Bill operational.
- **FU-7**: Write 7 TCRMG posture docs (~6.5 hours per FinTechReport vault 37) — gates Phase 4 `/approach` page
- **When OBR certificate issues**: mechanical swap across `/about`, Footer, `/privacy`, `/terms`, `JsonLd.tsx` `legalName` to remove "pending registration" language. See vault [[../DPI Integration/63_OBR_Registration_and_KHNSIC_Scope]] §8.
- **When angkorskillsacademy.com launches**: introduce ASA as sibling brand in Footer + JsonLd `sameAs` + EducationalOrganization schema. See vault §9.
- **Wikidata rebuild**: NOT before Month 3 of off-site programme. Requires 3+ verifiable independent external mentions before survival is likely.
- **Phase 4 product pages**: `/products/mlro-support` + `/products/ekyc-build` (gated on validation-sprint signal + FU-7)

## Vault state (2026-07-31)

Primary path: `/Users/myownip/Library/Mobile Documents/com~apple~CloudDocs/Obsidian/Research/CamFinTech.com/` (iCloud; moved from OneDrive 2026-07-07). Symlink alias: `~/ObsidianVaults/Research/CamFinTech.com/`. OneDrive copy still exists but is legacy — iCloud is authoritative.

| File | Status |
|---|---|
| `CamFinTech.com website/README.md` | ✅ Bumped to 2026-07-30 baseline |
| `CamFinTech.com website/Rewrite Project.md` | ✅ 3 new sprint log entries |
| `CamFinTech.com website/Outstanding Issues.md` | ✅ Reconciled — 6 items closed, 18 items still open |
| `CamFinTech.com website/Recent Milestones.md` | ✅ New Phase 7 section |
| `CamFinTech.com website/GEO and SEO Strategy.md` | ✅ 2026-07-30 row; baseline callout updated |
| `CamFinTech.com website/GEO Audit 2026-07-30.md` | ✅ NEW snapshot |
| `CamFinTech.com website/GEO Audit 2026-06-18 (post-rewrite).md` | Unchanged (historical) |
| `CamFinTech.com website/GEO Audit 2026-06-18.md` | Unchanged (historical) |
| `DPI Integration/00_README.md` | ✅ New OBR section |
| `DPI Integration/61_CamFinTech_Website_Rewrite_Brief.md` | ✅ Addendum banner |
| `DPI Integration/63_OBR_Registration_and_KHNSIC_Scope.md` | ✅ NEW canonical doc |
| `DPI Integration/64_62010_Pivot_Direction_Note.md` | ✅ NEW direction note — 62010 pivot (Bill wants to broaden into DPI-compliant tech building; reverses `086a8ae` decision + "never builds" hard rule). Awaits AskUserQuestion scoping session — 7 tensions. |
| `DPI Integration/65_Remediation_Engine_Direction_Note.md` | ✅ NEW direction note — Evidence-backed remediation engine (GEO audit findings → persistent Kanban cards → auto-executable / draft-and-stage / human-only / observe-only tiers → branch→PR→human-merge → verification-gated closure). Awaits scoping session — 10 tensions. |
| `Firm Operations/00_Agentic_Firm_Thesis.md` | ✅ NEW parent thesis + NEW folder — 4-layer agentic system (Sensors → AI Chief of Staff → Human → Specialist Agents); 9-sensor network for CamFinTech (2 deployed, 7 shape-only); load-bearing insight = AI-CoS synthesis at founder-volume; second-product implication maps to KHNSIC 62010+62020+70200. Parent context for docs 64+65. |
| `Firm Operations/01_GEO_Sensor_Pilot_Pressure_Test.md` | ✅ NEW analytical pressure-test — 15-section structured critique of the thesis at GEO-pilot scope; 3 strongest counter-arguments (sample-size-of-1, verifier=implementer, auto-authorization creep); 6-phase pilot P0→P5; 3 pilot cases (reversible-tech / high-consequence / human-only); stop conditions; smallest credible experiment (P0+P1 in ~1 month). Companion to doc 65. |
| `Firm Operations/02_Decision_Log.md` | ✅ NEW append-only ADR ledger — ADR-001 (Honcho defer): git-tracked YAML wins for pilot; Honcho's peer/session/message primitives fit CoS layer + cross-sensor correlation, not deterministic structured records. Bill's subscription remains valuable, just not yet applied. 5 revisit triggers (all must be true). |
| `FinTechReport/35 - Brand Architecture...md` | ⚠️ Unchanged — banner-only reconciliation still current; body says "software company" (FU-1) |
| `FinTechReport/12 - Session Timeline.md` | Unchanged — no new entry needed |
| `Angkor Skills Academy/` (folder exists, 7 items) | Not touched this session — awaits site launch trigger |

## Auto-memory state (2026-07-31)

`/Users/myownip/.config/claude/projects/-Users-myownip-workspace-cambodia-fintech/memory/MEMORY.md` — refreshed this session. Now includes:
- Legal Entity section: OBR submission + 5 KHNSIC codes + public/private split decision
- **New Group structure section**: sibling brands (Riel Report + ASA) attribution rules; no umbrella language
- External Entity IDs: Wikidata marked DELETED with errata + rebuild rule; GitHub now in Organization.sameAs; GBP still pending wire-up; Cámara Argentina Fintech string-collision worsened
- GEO Audits: 2026-06-18 post-rewrite (63) + 2026-07-30 (67) entries added; Aston Hill guardrail carried; Wikidata rebuild rule added
- 30-day target updated: composite ≥ 72 by 2026-08-30
- **Late-2026-07-31 additions**: three parallel anchor sections pointing at vault docs 64 (62010 pivot), 65 (remediation engine), and the new `Firm Operations/` thesis — each with "do NOT execute without scoping session" guardrail

## How to resume

1. Read this file first
2. `git log --oneline -5` to see commit history — HEAD of both `main` and `feature/update-homepage` should be `2f2e70c` (Agentic Firm thesis pointer)
3. `git status` to check for uncommitted changes (should be clean modulo `.claude/RESUME_SESSION.md` if updates are in progress)
4. Read auto-memory `MEMORY.md` for cross-session state — includes 3 direction-note anchors from the late-2026-07-31 arc
5. Check `Research/CamFinTech.com/CamFinTech.com website/Rewrite Project.md` for the live sprint log
6. Bill's next likely ask (in rough priority order):
   - **Execution work**: send GBP Maps URL + lat/lng (2 min task) · run 2-week re-audit on/after 2026-08-13 · real founder bio for /about (FU-6) · H4 primary-source hyperlinking sweep
   - **Scoping sessions**: "let's plan the 62010 pivot" (session A) · "let's plan the remediation engine" (session B) · "let's plan sensor 2" (session C)
   - **First live cron audit**: 2026-08-01 09:00 ICT — daily-audit fires automatically; Bill may want a post-run readout

## Hard rules to preserve (from CLAUDE.md + DPI Integration vault)

- Deploy method is `vercel --prod` CLI only (NOT Git auto-deploy — Hobby plan blocks non-team commit authors)
- Production branch in Vercel dashboard: `main` (working branch `feature/update-homepage`)
- Founder display name: William Mallett; LinkedIn slug: `william-mall` (mismatch intentional — do NOT "fix")
- **Aston Hill is NOT associated with CamFinTech** — see GEO Audit errata; do NOT re-introduce
- DPI positioning is canonical: fee-only · never hold client funds · never operate a rail · reserved work to licensed partners · process competence not access
- **62010 (software development / SaaS) stays OFF the public site** — OBR-registered but legal-umbrella breadth only; preserves "never build" hard rule. **⚠️ UNDER REVERSAL** — see vault [[../DPI Integration/64_62010_Pivot_Direction_Note]]; do NOT make ad hoc changes without scoping session
- **Remediation engine pending** — GEO audit → Kanban → automated fixes design captured but not built; see vault [[../DPI Integration/65_Remediation_Engine_Direction_Note]]; do NOT extend `daily-audit.sh` or wire Kanban surface without scoping session
- **Agentic Firm thesis is thesis-only** — parent framing for docs 64+65 in vault [[../Firm Operations/00_Agentic_Firm_Thesis]]; do NOT begin building sensors 3–9 or the AI Chief of Staff synthesis layer without scoping session; pattern earns its place empirically, one sensor at a time
- **Honcho deferred per ADR-001** (vault [[../Firm Operations/02_Decision_Log]]) — do NOT adopt Honcho for GEO pilot; use git-tracked YAML in `~/.geo-prospects/cards/` + bounded classifier reads; revisit only when all 5 triggers true (post-Phase-5, sensor #2+ deployed, CoS layer being designed, natural-language query surface required, per-entity peer memory genuinely accumulating)
- **Single-brand front door on camfintech.com** — no "CamFinTech Group" umbrella language
- **No Angkor Skills Academy mention until angkorskillsacademy.com is live** — decided 2026-07-30
- CamDL is a back-end dependency, NOT a sellable rail
- Soft mandates (CamInvoice B2B, PDP law) framed as "get ahead of", never "you're in breach"
- Pricing is indicative; never a quote
- Bill colour-blind: avoid red/green pairings in any visual output
- CO., LTD suffix NOT publicly used until OBR certificate issues
- Wikidata rebuild: NOT before 3+ verifiable independent external mentions exist

## Deployment status

- **Production URL**: https://www.camfintech.com
- **Last deploy**: `dpl_6pcc9sZ1FJfj2raqN1mirnjEnBsQ` (2026-07-30) — OBR-KHNSIC scope broadening
- **Verified live**: knowsAbout + serviceType arrays expanded; KHNSIC section in llms-full.txt renders; prohibited-string sweep clean (no "software development" / "SaaS product" leak); all 5 hard rules intact; Wikidata URL removed from sameAs; sitemap lastmod fresh
- **Vercel project**: `cambodia-fintech` (team `fin-tec-consulting-cambodia`)
- **GitHub repo**: https://github.com/myownipgit/cambodia-fintech (PUBLIC since 2026-06-18)
- **Vercel CLI**: last re-auth 2026-07-30 (browser OAuth via `vercel login`)
