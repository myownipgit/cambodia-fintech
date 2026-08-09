# Session Recovery State

This file tracks the current session state to enable seamless recovery between sessions or after a crash. Update after every material change.

## Last Updated
2026-08-09 evening (Phase 19 landed three arcs in one session: (a) weekly cross-check audit surfaced stale FU-6 wording in llms.txt + llms-full.txt — fixed and deployed as `dpl_4NWa7SSk4PZLyuoZxux2FGHd5D5W` on commit `7471c86`; (b) daily-audit Hermes cron `645711088c45` had been failing all day with YAML frontmatter double-prepend — root-cause was DeepSeek emitting SKILL-shape frontmatter with fabricated values; two-layer fix committed as `8450ed3` on local `~/.geo-prospects` (write-audit-metadata.sh now strips + rewrites instead of aborting; daily-audit.sh prompt tells DeepSeek not to emit frontmatter); E2E verified by triggering `hermes cron run` — cron status flipped `error` → `ok`, report has real UUID + real content hash; (c) VPS migration scoping conversation — initial plan v1 was over-spec (t3.xlarge, ~$130/mo, full LLMware migration) drew Bill's "you often over-spec" push-back; rewrote as plan v2 (t3.small, **~$21/mo on-demand**, LLMware stays on Mac, Contract Sensor accepts ~25% failure rate documented explicitly). Approved plan at `~/.config/claude/plans/misty-cuddling-gray.md`. Trigger to execute: `"execute VPS migration plan"`. Task #60 tracks. Also filed new feedback memory `feedback_infrastructure_sizing.md` capturing Bill's "lean smaller" rule as durable behavioral guidance. Prior arc (2026-08-05→08-07 = Phases 17+18+19+20) still valid: Compliance Calendar sensor #5 built + published + live-pipeline-verified 2026-08-05 (exec 5710 success), Security Posture daily D3-promoted 2026-08-06 (2/2), Compliance Calendar populated with 3 real domain-renewal deadlines 2026-08-07 (whois + Identity Digital RDAP). Security Posture WEEKLY cadence still 0/1 pending 2026-08-09 07:00 ICT first weekly fire. Compliance Calendar D3 still 0/2 pending 2026-08-10 08:30 ICT first Sunday fire.)

### Phase 17 — Compliance Calendar built + published + verified (2026-08-05)

Fresh session opened via trigger `"execute compliance calendar sensor plan"`. Delivered Phases 1/2/3/4/7 of the plan; Phase 5 (Prakas scraper — MEF+NBFSA+OBR+CIR) deferred to a separate scoped session; Phase 6 (seed deadlines) skipped per plan Round-3 lock.

Built: `~/.geo-prospects/compliance/{schema.sql,deadlines.db,compliance-cal,evaluator.py,eval_api.py}` on Mac; `/opt/compliance/{deadlines.db,webhook.secret,evaluator.py,eval_api.py}` + `/etc/systemd/system/compliance-eval-api.service` on droplet; new Kanban board `firm-compliance`; two n8n workflows: `o3SVegyvlFsQuf6G` (compliance-calendar-weekly, Schedule Sun 08:30 ICT → HTTP POST http://172.18.0.1:8745/run) + `0rMsCp01eBNZs3eB` (compliance-calendar-error-alert, errorTrigger → Gmail).

Two design pivots off locked plan surfaced at build time + re-approved via AskUserQuestion: (1) sshfs → CLI push model (Mac had no inbound SSH); (2) n8n Execute Command → HTTP endpoint on docker bridge `172.18.0.1:8745`. Bill Published both workflows in web UI same session; live pipeline probe passed: exec 5710 `mode=manual · status=success · 1.87s`, card `t_8ef4e1b7` landed on `firm-compliance` board, all cleaned up.

Nuances captured for future: (a) n8n CLI `--active` filter unreliable on this version (returns empty for known-active workflows) — use DB WAL-forced check instead; (b) `docker cp` of `database.sqlite` alone misses in-flight WAL — copy all three files (`database.sqlite` + `-wal` + `-shm`) then `PRAGMA wal_checkpoint(FULL)`; (c) actual vault path is `.../Obsidian/Research/Obsidian Vault/...` NOT `.../Obsidian/Research/CamFinTech.com/...` as CLAUDE.md implies — iCloud fuzzy-resolved my earlier writes, but the correct explicit path avoids the round-trip. New vault docs `12_Compliance_Calendar_Sensor_Registration.md` + `13_Session_Log_2026-08-05.md`. Sensor tally: **5 of 10 deployed** (all 4 prior + Compliance Calendar).

### Phase 18 — Security Posture first unattended daily clean (2026-08-05)

Hermes cron `57a63b09e69d` fired 2026-08-05 10:28 ICT (Mac-wake catch-up). 7 real high-severity npm-audit CVEs. Hermes dedup'd → no new cards. **D3 1/2**.

### Phase 19 — Security Posture daily cadence D3-promoted (2026-08-06)

Second consecutive clean unattended daily fire 2026-08-06 10:00 ICT sharp. Content-identical to 2026-08-05 (diff = only run_id/hash/generated_at/H1-date). Same 7 npm CVEs, Hermes dedup'd. **D3 2/2 → non-negotiable #2 met for daily cadence.** Ratified in vault + memory 2026-08-07: `10_Security_Posture_Sensor_Registration.md` frontmatter `trust_level` → `confirmed-daily (D3 2/2 · 2026-08-06)`; thesis doc 00 cybersecurity row → `daily D3-promoted 2026-08-06 · weekly still provisional`; Recent Milestones Phase 17 added; `MEMORY.md` + `project_security_posture_sensor.md` + `project_agentic_firm_thesis.md` + `project_direction_notes.md` all updated. Weekly cadence still 0/1 pending 2026-08-09 07:00 ICT first weekly fire (expected shakedown noise on T2 SSH-threshold + T3 internal-port whitelist).

### Phase 20 — Compliance Calendar populated with 3 real deadlines + committed (2026-08-07)

Bill populated DB with 3 real Namecheap domain-renewal deadlines (verified via whois + Identity Digital RDAP for the `.report` TLD which needs a non-default whois server): `camfintech-domain-renewal` 2030-11-18 (1564d) · `riel-report-domain-renewal` 2027-05-26 (292d) · `angkorskillsacademy-domain-renewal` 2028-07-02 (695d). All tiers 90/30/7/0, rule=yearly. First tier fire = 2027-02-25 (riel.report at 90d out). Evaluator's manual run confirmed `fires_matched: 0` for all three (all still beyond 90d tier window) → Kanban `firm-compliance` still empty. Proves non-firing logic works correctly. Committed compliance/ bundle as `e126a61` to local `~/.geo-prospects` git (5 files: schema.sql · deadlines.db · compliance-cal · evaluator.py · eval_api.py; no remote so nothing pushed). Off-by-one nuance captured: evaluator's droplet-side `date.today()` uses UTC while Mac CLI uses ICT — no impact on Sunday 08:30 ICT scheduled fire (both same UTC date at fire time), only visible on manual runs in the ICT morning.

### Phase 21 — Documentation sweep for Phases 19+20 (2026-08-07 afternoon)

Bill asked to update documentation and applicable vaults after Phases 19 (Security Posture D3) and 20 (Compliance populated). Audit surfaced 4 gaps: (a) `12_Compliance_Calendar_Sensor_Registration.md` didn't mention the 3 real deadlines populated, (b) `project_compliance_calendar_sensor.md` didn't mention them either, (c) Recent Milestones only had Phase 17 (Security Posture D3) — no Phase 18 for the Compliance population + commit, (d) no session log covered the 2026-08-06 → 2026-08-07 activity arc. Fixed all four: added "Populated deadlines" section to registration doc (with source-verification table + `.report` RDAP nuance); rewrote memory Current-state section (added `.report` RDAP how-to-apply); added Recent Milestones Phase 18; created new session log `14_Session_Log_2026-08-06_to_07.md` covering D3 promotion + real-deadline population + git commit + docs sweep; cross-linked from `13_Session_Log_2026-08-05.md`.

### Next-auto-events (updated 2026-08-07)

- **2026-08-07 10:00 ICT (~4h from morning check) — Security Posture daily fire** (steady-state; already-trusted; expected clean).
- **2026-08-09 07:00 ICT Sun — Security Posture weekly fire #1** (first ever; will likely surface T2 SSH-threshold + T3 internal-port whitelist false positives per shakedown analysis; weekly D3 counter starts).
- **2026-08-10 08:30 ICT Sun — Compliance Calendar first unattended fire** → D3 1/2 (3 real deadlines all beyond 90d tier windows → `fires_matched: 0`, still counts as clean).
- **2026-08-17 08:30 ICT Sun — Compliance Calendar second unattended fire** → D3 2/2 → non-negotiable #2 promotion.

### Pending Bill decisions

- Contract Sensor T1 tuning gate (boolean answer/explanation agreement) — still open.
- Compliance Calendar tuning T1-T5 (Prakas scraper deferred, fire journal write-back, auto-recurrence, complete-command sugar, second HMAC secret).
- Security Posture tuning T1-T4 (telegram-send.sh HTML sanitizer, SSH threshold rebaseline, internal-port whitelist, HIBP paid-tier).
- `next` + `postcss` direct-dependency upgrades in cambodia-fintech repo (surfaced by npm audit THREE days in a row now: 2026-08-04 + 2026-08-05 + 2026-08-06).

## Current Branch
`feature/update-homepage` — **aligned with `main`** at `e908fb1` (P0 Case A merge commit; both remotes in sync). PR branch `p0/itemlist-index-pages` DELETED after merge (both local + origin) — GitHub PR #4 record preserves the 2 original commits at `f8642d0` + `aaacfb5`.

## Latest commits (2026-07-30 → 2026-08-01 arc — all pushed, main = feature/update-homepage = `e908fb1`)
- **`e908fb1`** — "P0 Case A: Add ItemList JSON-LD to /glossary and /learn index pages (#4)" (HEAD) — squash-merge of PR #4; **deployed as `dpl_AGjMXv8MhR6Vzb6YJRvvr3a68ukr` 2026-08-01T02:19:36Z, aliased to https://www.camfintech.com**
- **`00b8b8a`** — "Update RESUME_SESSION for Phase 11 + ADR-002 D1/D2 + D3 review discipline" — docs only
- **`2f2e70c`** — "Add pointer to Agentic Firm operating thesis (new Firm Operations vault folder)" — docs only
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

### Phase 11 — Agentic-firm pilot execution + PR #4 (2026-07-31, afternoon → evening)

Started with Bill's structured 15-item pressure-test of the agentic-firm thesis at GEO-sensor scope. Ended with the pilot's first real remediation-engine PR queued for merge and multiple pilot principles empirically validated. Full narrative: [[../Firm Operations/03_Session_Log_2026-07-31]].

**Vault docs added (afternoon)**:
- `Firm Operations/01_GEO_Sensor_Pilot_Pressure_Test.md` — 15-item structured critique; 3 counter-arguments (sample-size-of-1, verifier=implementer, auto-authorization creep); 6-phase pilot P0→P5; 3 pilot cases (reversible-tech / high-consequence / human-only); stop conditions
- `Firm Operations/02_Decision_Log.md` — append-only ADR ledger. **ADR-001**: defer Honcho memory service until CoS synthesis layer emerges (git-tracked YAML wins for pilot). **ADR-002**: 3-part decision (D1 evidence requirement for Critical/High technical findings + D2 audit artifact identity spec + D3 sensor-quality pause).
- `Firm Operations/03_Session_Log_2026-07-31.md` — narrative session log covering the full day arc

**Pilot execution (`~/.geo-prospects/` — locally git-tracked, no remote)**:
- Repo initialized (`git init`) with baseline commit for existing audits + scripts + shootout
- 3 P0 cards hand-authored in `cards/` (schema-writer + infra-config + brand-copy authority classes exercised)
- **Cards 1 & 2 closed as FALSE POSITIVE** via empirical HTTP + source-code verification. **2-of-3 P0 cards were FP (66.7%)** — Bill's measurement correction: do NOT extrapolate to overall audit FP rate; sample too small and non-random.
- **Audit-artifact discrepancy discovered**: Bill-quoted audit and disk audit contained contradictory findings despite sharing logical identity `geo-audit:2026-07-31`. Quarantined the Bill-quoted variant in `quarantine/` with provenance `unknown/manual-input`. Cards 1 & 2 retroactively re-provenanced.
- **Replacement Card 1 authored (ItemList)** after 5-question empirical screening of 4 candidates. Selected as Medium enhancement (not defect) per Bill's calibration.
- **Card 3 (founder bio) remains `awaiting-input`** — human-only tier, blocked on Bill's bio content

**PR #4 — first real remediation-engine PR** ([github.com/myownipgit/cambodia-fintech/pull/4](https://github.com/myownipgit/cambodia-fintech/pull/4)):
- Branch `p0/itemlist-index-pages` (2 commits: `f8642d0` + `aaacfb5`)
- Adds `ItemList` JSON-LD to `/glossary` + `/learn` index pages via shared helper `app/content/indexItemList.ts`
- Self-review + independent code-reviewer agent (verifier-separation from ADR-002 applied to review layer itself)
- Independent reviewer caught **C3** (helper didn't enforce `indexPath`/`article.type` consistency) which self-review missed
- Fix commit `aaacfb5` addressed C1 (`itemListOrder` dropped) + C3 (type enforcement) + N4 (`inLanguage: 'en'`) + N5 (return type annotation)
- Local verification: 49/49 + 33/33 structural + 6/6 + 6/6 alignment checks pass on built HTML
- **Vercel preview verification blocked** by Deployment Protection SSO; 4 API paths to programmatically create bypass secret returned 404 or invalid property. Per Bill's fallback rule, dropping preview validation and running against production URLs post-deploy.
- **Status**: Draft, MERGEABLE, awaiting Bill's α checklist (merge + `vercel --prod --yes`)

**Recent Milestones Phase 9** entry added in website vault ([[Recent Milestones]]) covering this whole Phase 11 arc. Documentation milestones row added noting new `Firm Operations/` folder + 4-doc set.

**Meta-signal**: the pilot's own principles validated on Day 1 — verifier-separation caught a real gap; false-positive gates held twice; ADR-002 turned an unexpected discovery into structural improvement.

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

**Task 10 completed 2026-07-31**: `main` fast-forwarded to `2f2e70c` (later to `2712591`).

## Live pilot state (Phase 11 → Phase 16)

### Phase 16 (2026-08-04 evening) — FU-6 CLOSED + sensor #5 planning-locked

**FU-6 (founder bio + headshot) closed after 71 days.** Every GEO audit since 2026-05-24 flagged this as the biggest E-E-A-T lift still open. Shipped as commit `a75b6dc` → deploy `dpl_HNxTCEGRY1tiiBfE3PfyFWTB5tv5`:
- Real headshot `/images/founder-william-mallett.png` (397×500 RGBA, 253KB) wired into `AboutContent.tsx` FounderAvatar (replaced "WM" placeholder div).
- Background section adapted from vault `DPI Integration/29_Founder_LinkedIn_Bio.md` — "engineers on regulatory problems no engineer was trained to solve" analytical framing, third-person, LinkedIn linked for personal-history detail. Vault doc's hard guardrail against fabricated credentials honored — `[fill: …]` placeholders NOT shipped.
- `Person.image` field added to JSON-LD (`@id /about#person`). LinkedIn + Google Knowledge Panel should pick up on next crawl (48h-2wk).
- Expected composite lift: ~2-4 points on next GEO audit (target 72/100 by 2026-08-30).

**Sensor #5 (Compliance Calendar) planning-locked, build deferred.** 3 AskUserQuestion rounds captured 9 design locks — Bill picked heavy across all three rounds (scope = statutory + Prakas + tax/business-ops · data source = SQLite + CLI · runtime = Tailscale-mounted DB Mac→droplet · alert tiers = per-deadline configurable in schema · delivery = Kanban only, no Telegram · meta-monitoring = single n8n workflow with explicit stale-data check · Prakas scrape = MEF + NBFSA + OBR + Cambodia Investment Review · Kanban board = `firm-compliance`). Realistic build estimate: **10-13 hours** across 7 phases (SQLite schema + CLI · Tailscale mount setup · n8n evaluator + stale-check · error-alert workflow · Prakas scraper × 4 sources · seed deadlines · vault registration entry). Deferred to fresh session per context-budget discipline. **Plan file lives at `/Users/myownip/.config/claude/plans/compliance-calendar-sensor-plan.md`** (written 2026-08-04 evening — full spec ready to execute). Trigger: `"execute compliance calendar sensor plan"`. Recent Milestones vault Phase 14 (FU-6) + Phase 15 (sensor #5 planning) added same evening; Outstanding Issues H3/FU-6 marked RESOLVED with 71-day age.

### Phase 15 (2026-08-04 afternoon) — Sensor #4 Cybersecurity built (Security Posture Sensor)

Same-day continuation from Phase 14. Bill opened sensor #4 via `"let's plan sensor #4"` after weighing my earlier weaker recommendation of compliance calendar; picked pure existential-risk ranking → cybersecurity. Excluded the OBR cert-issued watcher as "political" (noted for compliance calendar future scoping).

**9 design locks across 3 AskUserQuestion rounds**:
- R1: scope=External+supply+internal · runtime=Cloud+Hermes cron hybrid · tooling=deterministic scanners + LLM triage
- R2 (resolving R1's non-negotiable #8 tension): LLM triage runtime=local SLIM · delivery=Both Telegram+Kanban · budget=free tier
- R3: cadence=mixed daily+weekly · organization=2 scripts · meta-monitoring=Hermes-native only

**One design reversal mid-stream (Path B)**: after R1's "LLM triage" pick, flagged that severity-classifying LLM = Contract Sensor's T1 shakedown pattern. Bill reversed `/triage` to summary-only; severity classification stays caller-side deterministic. Path B principle: LLM output = compression of scanner evidence, not novel judgment.

**Built** (all in `~/.geo-prospects/scripts/`):
- `cybersecurity-lib.sh` — shared helpers (HMAC signer, kanban card creator, SLIM triage caller, internal-finding redactor, dedup helpers, telegram digest wrapper). Reuses Contract Sensor's webhook secret + kanban-create route.
- `cybersecurity-weekly.sh` — 7 check families (Sundays 07:00 ICT): TLS certs · HTTPS headers · email auth (SPF/DMARC/DKIM) · external port scan (via `nc -G 3 -z`, NOT `nc -w2` — macOS bug) · Mac posture (SIP/FileVault/Gatekeeper) · droplet posture via SSH · Tailscale ACL.
- `cybersecurity-daily.sh` — 3 check families (10:00 ICT): DNS integrity (A/NS/DNSSEC baseline drift) · npm audit on `cambodia-fintech` · n8n version+reachability on `n8n-camfintech-com` container.

**Sensor API modification** — `POST /triage` endpoint added to `~/llmware_data/contract_sensor/sensor_api.py` (additive; Contract Sensor's `/health`+`/analyze`+`/scan` untouched). Uses `slim-summary-tool` with `params=["key point (1)"]`. Bill approved via "option 1" (extend existing API rather than second FastAPI). launchd service kickstarted; 5 SLIMs remain warm.

**Kanban board `security-posture` created** via `hermes kanban boards create security-posture --name "Security Posture"`. Reuses Contract Sensor's webhook (generic; board picked per payload).

**Real-run delivery test (2026-08-04 12:07 ICT)** — 10 real cards + 2 Telegram digests:
- Weekly: 5 findings (TLS www cert 30d, CSP missing on www, all 6 headers missing on automation.camfintech.com, 2 internal medium: unexpected listen ports + elevated SSH failed count). 3 cards created (high-only card gate).
- Daily: 7 findings — all high-severity npm audit CVEs on cambodia-fintech (2 direct: `next` + `postcss`; 5 transitive: brace-expansion, flatted, js-yaml, minimatch, picomatch). 7 cards created.
- Daily Telegram first-attempt FAILED on `<=1.1.17` HTML parse-mode collision (same bug class Bill's e55c7ac patched for UTF-8). HTML-escape (`&amp;`, `&lt;`, `&gt;`) applied inline in EXTERNAL_SUMMARY block of both scripts; retry succeeded. Systemic fix belongs in shared `telegram-send.sh` — filed as tuning card T1.

**Bugs found + fixed during scaffold** (captured as feedback memory `feedback_python_bash_quoting`):
1. Lib's last-line `[[ ]] && echo` short-circuit exited 1 under `set -e` → fixed with `if` + `true`
2. Python `f"{d[\"key\"]}"` inside bash single-quoted `python3 -c '...'` — outer `'` closes at inner `'`. Refactored to heredoc + extract-vars pattern.
3. `nc -w2` doesn't enforce connect-timeout on macOS for filtered ports (port 3000 hung). Switched to `nc -G 3 -z`.
4. `echo "$audit_json" | python3 <<'PYEOF'` — heredoc replaces stdin, so `json.load(sys.stdin)` reads Python source. Fixed with env var passthrough.
5. n8n container name `camfintech` was wrong (actual: `n8n-camfintech-com`).
6. Telegram HTML parse-mode + `<=1.1.17` = "Unsupported start tag" — inline HTML-escape.

**4 tuning cards on `security-posture` board** (idempotency `tuning|security-posture|Tn|...`):
- T1 (P2) — `telegram-send.sh` HTML-parse-mode systemic sanitizer (bug class hit 3 scripts now)
- T2 (P2) — SSH failed-count threshold 200 → 2000+ (real baseline observed 613/day; internet-exposed 22 sees this normally)
- T3 (P2) — Internal-port whitelist mechanism (tailscaled ephemeral, systemd-resolve, code-server all fired FP on first run)
- T4 (P3) — HIBP paid-tier authorization ($3.99/mo) to close credential-leak gap deferred from v1

**Vault docs added**:
- `Firm Operations/10_Security_Posture_Sensor_Registration.md` — second sensor registration entry, parallels `07_Contract_Sensor_Registration`
- `Firm Operations/11_Session_Log_2026-08-04b.md` — this session's narrative
- `Firm Operations/00_Agentic_Firm_Thesis.md` — cybersecurity row updated (deployed-pending-cron); sensor count "2 fully deployed + 1 in shakedown + 1 deployed-pending-cron"
- `Firm Operations/07_Contract_Sensor_Registration.md` — added `/triage` endpoint section
- `Recent Milestones.md` — Phase 13 section added

**Auto-memory**:
- MEMORY.md — new topic `project_security_posture_sensor` + new feedback `feedback_python_bash_quoting`
- Existing topics updated: `project_agentic_firm_thesis` (sensor count) + `project_contract_sensor` (/triage endpoint)

**HIBP dropped from v1** — Round-2 "free tier only" lock excludes HIBP's paid email-search API ($3.99/mo minimum). Recommendation: batch-review paid-service asks when scoping sensor #5+.

**Task 50 completed 2026-08-04 late afternoon**: two Hermes crons registered — `57a63b09e69d` camfintech-cybersecurity-daily (`0 10 * * *`) + `b4345725e0cb` camfintech-cybersecurity-weekly (`0 7 * * 0`). Both `--no-agent` mode, deliver to Telegram `-1004295083888`. Uses exec-wrapper pattern (`~/.hermes/scripts/camfintech-cybersecurity-{daily,weekly}.sh` → `exec ~/.geo-prospects/scripts/cybersecurity-{daily,weekly}.sh`) because Hermes requires scripts under `~/.hermes/scripts/`. First scheduled fires: **2026-08-05 10:00 ICT** (daily) + **2026-08-09 07:00 ICT (Sunday)** (weekly). D3-equivalent trust counter starts 0/2 on those.

### Phase 14 (2026-08-04 morning) — Contract Sensor framework integration + meta-monitoring live

Post-compact resumption. Bill's ask: *"Integrate the Legal Exposure sensor (Contract Sensor) into the agentic firm sensor framework."* Scope locked via AskUserQuestion at start — **option 3: sensor-first minimal + framework design note**.

**Two new n8n workflows published + smoke-tested end-to-end** (both use existing `Gmail account` credential, gmailOAuth2 ID `RouyAEjLbQKt6KoJ`):
- `aRHJD1BDIS5SpBY6` — contract-sensor-error-alert (2 nodes, ErrorTrigger→Gmail clone of `s3oujqs6DMAcnEVs`). Wired as `settings.errorWorkflow` of `8xPNIjO5tiLESwyZ` via workflow-settings modal (Bill approved the diff; only setting changed on the Contract Sensor — nodes/cron/URLs untouched).
- `h4h4SkXNDOQ8j6YZ` — contract-sensor-watchdog (6 nodes, Schedule 08:15 ICT → GET http://100.64.107.112:8742/health → IF healthy? → Gmail on unhealthy). Self-monitored via `errorWorkflow → aRHJD1BDIS5SpBY6`.

**Smoke tests (2026-08-04 02:39 → 02:43 ICT)**:
- Healthy path (exec 5613, 256 ms): probe reached Mac, `{status:"ok", models_warm:[5 SLIMs]}`, Route Unhealthy → false branch, zero emails. Correct silence.
- Unhealthy path: temporarily set macHost to `192.0.2.1` (RFC 5737 reserved-unreachable), executed → 10s timeout → healthy=false → email fired to `info@camfintech.com` with all fields rendered correctly (statusCode 0, warmModels 0, error `timeout of 10000ms exceeded`, full first-response checklist HTML intact). Reverted immediately; verified via `n8n_get_workflow full` — draft AND `activeVersionId d00573f9` both show `macHost: "100.64.107.112"`.

**Vault docs added**:
- `Firm Operations/07_Contract_Sensor_Registration.md` — the first-ever formal sensor registration entry (identity · trust status · data-sensitivity · delivery sink · meta-monitoring · finding format · tuning backlog). Updated later in session with activation status + smoke-test outcomes + n8n versioning nuance.
- `Firm Operations/08_Sensor_Framework_Direction_Note.md` — direction-only. 7 tensions captured (normalized schema · registry storage · meta-monitoring convention · brief-feed contract · retrofit cost · notifier mixing · component-vs-convention). Trigger phrase *"let's plan the sensor framework"*.
- `Firm Operations/09_Session_Log_2026-08-04.md` — this session's narrative record.

**Tuning backlog captured as 7 `[tuning]`-prefixed Kanban cards** on `contract-sensor` board (idempotency keys `tuning|contract-sensor|Tn|...`):
- T1 `t_d119689c` (P2) — Boolean answer/explanation agreement gate — LOAD-BEARING for Contract Sensor to earn non-negotiable #2 trust
- T2 `t_011a7ba6` (P2) — doc_type-gated field set
- T3 `t_06830716` (P3) — Whitespace bug re-verification
- T4 `t_abc31d96` (P3) — Expiration/renewal date extraction (thesis row 6b)
- T5 `t_d1fae256` (P2) — Plaintext webhook secret in n8n Config → env var
- T6 `t_7454536f` (P2) — Mac wake-at-07:00 guarantee (pmset repeat)
- T7 `t_c05d3ca3` (P3) — n8n Executions API check ("cron actually fired") — bundled with sensor #4 meta-monitoring

Contract-sensor board now: 22 sensor findings + 1 test + 7 tuning = 30 real cards.

**n8n workflow versioning nuance discovered**: this instance separates `versionId` (draft) from `activeVersionId` (published). **Save** commits draft; **Publish** promotes to what cron runs; **Execute Workflow** button runs the draft. Consequence: Bill's 192.0.2.1 test-edit only ever touched draft; scheduled cron would have been safe even without revert. Documented in registration entry §"n8n versioning nuance". Forward rule: for a change to affect scheduled behavior, Save + Publish.

**Communication feedback saved to memory** (`feedback_n8n_ui_terminology.md`): always qualify "modal" (workflow-settings / node-parameters / credential-editor) — bare "modal" caused two rounds of back-and-forth during activation walkthrough.

### Phase 13 (2026-08-03) — Competitor sweep first fire + DAS→Sciaroni + Firecrawl saga

**Competitor sweep first-ever fire** (Monday 2026-08-03 09:00 ICT, cron `f365ca6ac1f5`): SUCCEEDED CLEAN in 4:28. No bug trail (contra weekly-cross-check's 4-bug morning 2026-08-02). Glyph fix `cb40213` rendered `▲/●/○` correctly (no 🔴🟡🟢). D2 metadata clean.

**Competitor watchlist correction (`abb2dad`)**: first sweep discovered `dasandpartners.com` is a UAE engineering firm (Das And Partners Engineering Consultants in Abu Dhabi), NOT the Cambodia advisory the 2026-07-30 audit had named. Replaced with **Sciaroni & Associates** (sciaroni.com, Phnom Penh, DNS-verified). Current watchlist: DFDL · Acclime · Sciaroni. Historical note inline in weekly-competitor.sh line 37.

**Firecrawl unconfigured on sensor Hermes profile**: SERP positions in competitor report marked `[unverified]`. Investigation established root cause = `web.use_gateway: true` requires Nous Portal `hermes model` interactive login (~90-min saga; `FIRECRAWL_API_KEY` env var alone doesn't work). Blocked pending Bill run `hermes model` interactively.

**Daily-audit Telegram-delivery is a bug class, not a single fix (FU-D3-5)**: 08-02 and 08-03 daily audits both had bodies + D2 metadata clean but Telegram send failed on different content triggers:
- 08-02: parse-entity choked on date-token
- 08-03: UTF-8-invalid em-dash from mid-byte truncation (`head -c 200` truncated `—` = U+2014 = 3 bytes mid-sequence)

**08-03 char-safe truncation shipped in `e55c7ac`** (extract-digest.sh: `head -c 200` → python character slice `sys.stdin.read()[:200]`). 08-02 parse-entity fix still open. Pattern: novel digest content will keep tripping new Telegram validators until sender is hardened at the sanitization layer.

**Session log `06_Session_Log_2026-08-03.md`** written (vault Firm Operations). Recent Milestones Phase 11 added.

### Phase 12 (2026-08-02 afternoon → evening) — Contract Manager PoC + ADR-003

Bill built **sensor #3 out-of-order**: a contract-intake risk analyzer on LLMware. Full loop shipped in one session — n8n orchestrator on DO droplet (178.128.85.53) → Tailscale bridge → local SLIM inference on Bill's M3 Max → 18 exception cards emitted to a new Hermes Kanban board `contract-sensor` on a 15-contract initial run.

**Deployed but IN SHAKEDOWN** — currently failing thesis non-negotiable #2 (sensor trustworthiness): `no_severance_term` false-positive on all 15 contracts with empty explanations; `party_person` misses on all. Tuning backlog is the pre-condition for the sensor being counted as "fully deployed" for CoS trigger purposes.

**ADR-003 landed** in vault [[../Firm Operations/02_Decision_Log|02_Decision_Log]] capturing three coupled decisions:
- **Sequencing deviation**: sensor #3 built out-of-order (thesis recommended cybersecurity or compliance-calendar based on existential-risk ranking; pre-existing LLMware install lowered contract-sensor's marginal build cost below cybersecurity's — momentum-driven)
- **Scope deviation**: thesis's Legal Exposure row scoped expiration/renewal watcher, but what was built is intake-risk analyzer; different existential risks. Thesis sensor table now has **two Legal Exposure rows** (intake DEPLOYED-in-shakedown + expiration-monitor PENDING); total sensor count moved 9 → 10.
- **Design principle discovered → thesis non-negotiable #8 added**: sensitive-data sensors run inference at the data (Tailscale hybrid — cloud orchestration + local SLIM inference; client contracts never leave the founder's machine; metadata is the only thing that touches cloud).

**Thesis edits applied** ([[../Firm Operations/00_Agentic_Firm_Thesis]]):
- Sensor table split into two Legal Exposure rows; "Nine sensors" → "Ten sensors"; count → "two fully deployed + one in shakedown"
- Non-negotiable #8 added
- CoS trigger clarified as **conditionally-fired** — activates when contract-intake clears its tuning backlog
- Sequencing-deviation acknowledged inline (Recommended path forward section)
- Frontmatter `status: thesis-in-shakedown` · `updated: 2026-08-02`

**MEMORY.md LLMware anchor** rewritten from "NOT pre-selected" inventory → "deployed as contract-intake sensor back-end (in shakedown)" — includes scope deviation, sequencing deviation, non-negotiable #8, meta-monitoring gap flags.

**Session log 05** written: [[../Firm Operations/05_Session_Log_2026-08-01_to_02]] — narrative of the two-day arc from first D3 review through weekly-cross-check 4-bug trail through Contract Manager PoC through ADR-003.

**Recent Milestones Phase 10 added** in the website vault.

### Combined section — original Phase 11 D3 arc below

**D3 sensor-quality pause status**: **HOLD — counter 0/2**. Both scheduled D1-covered runs reviewed by end 2026-08-02; neither counted toward lift.

### D3 review discipline in action (2026-08-01 → 2026-08-02)

| Date | Producer | Verdict | Notes |
|---|---|---|---|
| 2026-08-01 09:00 ICT | daily-audit (DeepSeek) | **DIRTY** | 4 refuted false Medium findings (M1 heading · M2 OG-inherited · M3 Article-schema-missing · L4 DefinedTerm-missing). Downgrade-abuse loophole Bill flagged during ADR-002 scoping observed concretely — DeepSeek probed schema only on homepage, then made unattested Medium claims about Learn/Glossary schema state that failed empirical probes. Review: `~/.geo-prospects/reviews/2026-08-01-daily-audit-review.md`. Flow artifact: https://claude.ai/code/artifact/9b0c98e2-f13a-46bb-9eee-589603c091ef |
| 2026-08-02 08:00 ICT | weekly-cross-check (Sonnet) | **CLEAN — NOT COUNTING** | Scheduled cron failed exit 127 (PATH bug); after 4 script fixes to geo-prospects (`90f10b5` PATH → `13f5725` stdin → `ffeae34` sandbox-root → `0d1dfc1` `--dangerously-skip-permissions` — Bill-authorized), manual retry succeeded and reviewed CLEAN. Bill ruled 2026-08-02: **manual retries of mid-day-fixed cron scripts do NOT earn D3 credit** (protects against fix-and-declare-success slippery slope; only unattended scheduled runs count). Review: `~/.geo-prospects/reviews/2026-08-02-sonnet-cross-check-review.md` |
| 2026-08-02 09:00 ICT | daily-audit (DeepSeek) | **DIRTY** | 2 refuted false Medium findings — MED-1 Article-schema-missing (**3rd consecutive occurrence** across audit artifacts, downgrade-abuse pattern now entrenched) + MED-3 BreadcrumbList-schema-missing (**NEW hallucination** contradicted by DeepSeek's own probe elsewhere in the same audit). Cron exit 1 was Telegram delivery parse-error, NOT audit failure — audit body intact. Review: `~/.geo-prospects/reviews/2026-08-02-daily-audit-review.md` |

**ADR-003 stance (as of 2026-08-02 EOS)**: trigger #1 (recurring downgrade-abuse) emphatically met — Article-schema false claim now spans 3 audit artifacts and a new false-Medium claim (BreadcrumbList) emerged at a different site element. Sonnet's 08-02 cross-check also caught DeepSeek missing an Aston Hill unverified LinkedIn profile (false negative in Brand Authority — third distinct failure mode). Bill's standing decision: **wait it out** — position revisited only if a subsequent audit adds a fourth distinct pattern.

### Six D3 follow-ups filed (all await Bill authorization — none actioned)

- **FU-D3-1**: Checklist item A4 wording — reviewers need to know to strip the `echo ""` blank line that `write-audit-metadata.sh` inserts between frontmatter and body, OR drop the `echo ""` from the helper
- **FU-D3-2**: Add template note that "no Critical/High findings" does NOT satisfy D3 — Section C is load-bearing whenever severity distribution skews Medium/Low
- **FU-D3-3**: A5 time-sensitivity — `$DEEPSEEK_LATEST` embedded in weekly-cross-check.sh PROMPT is resolved by `ls -t` at audit runtime; reviewer at different time gets different hash. Fix: record resolved cross-check-input path into D2 metadata as new field
- **FU-D3-4**: Hermes misclassifies script exit-1 as "provider rate limit" when actual cause is a downstream failure (e.g. `telegram-send.sh` parse error)
- **FU-D3-5**: `telegram-send.sh` needs input sanitization for date-like (`2026-08-02`) and hash-like (`sha256:...`) tokens that trigger Telegram parse errors
- **FU-D3-6**: Add Wikidata guardrail to daily-audit prompt — DeepSeek recommends creating a Wikidata entry (Quick Wins #2 on 2026-08-02 audit) which directly contradicts Bill's rebuild rule ("NOT before 3+ external mentions exist"). Analogous shape to existing Aston Hill guardrail

### weekly-competitor.sh — pre-emptive color-blind fix (2026-08-02)

Never fired yet — first fire Monday 2026-08-03 09:00 ICT. Shipped one-line prompt change in geo-prospects `cb40213`: threat-level glyphs switched from 🔴/🟡/🟢 (red-yellow-green, violates Bill's color-blindness preference) to `▲/●/○` (shape-based, monochrome-safe). Sensor is D1 & D3 exempt per checklist (competitor findings are qualitative competitive intelligence, not technical claims about our own site; D2 metadata still applied).

### Task tracker (end state)

- ✅ **28-37** all completed
  - 28-35: pilot P0 setup through ADR-002 D1/D2 implementation
  - 36: 2026-08-01 daily-audit D3 review (verdict DIRTY)
  - 37: 2026-08-02 combined review (weekly-cross-check 4-bug trail diagnosed & patched + Sonnet cross-check reviewed CLEAN-not-counting + DeepSeek daily-audit reviewed DIRTY)
- No pending tasks; next auto-events are cron-driven (see How to resume § 7)

**Pilot cards** (`~/.geo-prospects/cards/`) — all four resolved:
| Card | Status | Note |
|---|---|---|
| `camfintech-article-schema-learn-glossary.yaml` | `false-positive` | Schema already present via `ArticleLayout.tsx:61-104` shipped 2026-06-18 |
| `camfintech-canonical-domain-redirect.yaml` | `false-positive` | 4 URLs probed 2026-07-31T04:07Z; all redirect correctly with 308 + HSTS |
| `camfintech-founder-bio-placeholder.yaml` | `awaiting-input` | Only Card 3 exercises the human-only tier; blocked on Bill's bio content |
| `camfintech-itemlist-index-pages.yaml` | **`closed`** (verdict `verified-clean`) | P0 Case A complete: PR #4 merged 2026-08-01T02:18Z → deployed `dpl_AGjMXv8MhR6Vzb6YJRvvr3a68ukr` 02:19Z → probed clean 02:22Z → closed 02:25Z. `clean_runs_observed: 2`. Full evidence + validator.schema.org response summary preserved in card (geo-prospects `7be11af`). |

**P0 Case A pipeline demonstrated end-to-end** for the first time: find → classify → gate → PR → review-fix → merge → deploy → verify (deterministic probe + validator.schema.org) → close. Pattern is now proven for future auto-executable cards.

**Observations logged but NOT ticketed** (per §8 anti-bureaucracy discipline):
- `ProfessionalService.serviceType` triggers 20 SPORE `UNKNOWN_FIELD` WARNINGS per URL in validator.schema.org — pre-existing artifact from `JsonLd.tsx` global schema, unrelated to PR #4 scope. Not opening a card. Worth revisiting only if Google Rich Results reports downstream impact or during a wider structured-data cleanup.
- PR #4 O1 (richer `item: { @type, @id }` form for ListItem) and Observation 4 (`isPartOf` link from ItemList to `@graph`) deferred at merge time; low-priority citability lifts, not defects.

## Pending scoping sessions (triggered by Bill when ready — do NOT execute without them)

Three strategic direction docs captured this session, all forbid ad-hoc execution:

| # | Session | Tensions to lock | Trigger phrase |
|---|---|---|---|
| A | **62010 pivot** — broaden CamFinTech.com to include DPI-compliant technology building; reverses "never builds" hard rule on 6 site surfaces | 7 tensions (scope, accredited-partner fate, SP status, hard-rule survival, brief revision, disclaimer reversal, timing) | "let's plan the 62010 pivot" |
| B | **Remediation engine** — GEO audit findings → persistent Kanban cards → tiered automation with branch→PR→human-merge | 10 tensions (Kanban tool, YAML store, policy config, grouping-rule authoring, verification trigger, accepted-risk auth, recurrence policy, pilot scope, confidence-to-tier mapping, human-only assignment) | "let's plan the remediation engine" |
| C | **Agentic firm — sensor #2 selection** — most likely cybersecurity (daily, deterministic) or regulatory compliance calendar (weekly, OBR/Prakas-coupled). Do NOT design CoS synthesis layer until 2–3 sensors exist. | Sensor domain, cadence, cost, format, and how it feeds a future CoS layer | "let's plan sensor 2" |
| ~~D~~ | ~~**ADR-002 D1/D2 implementation**~~ | ~~Prompt-append text; metadata JSON shape; retroactive-run-id policy~~ | **✅ COMPLETED 2026-07-31 evening** — shipped as geo-prospects commit `01850f0`. All 4 scoping decisions resolved via AskUserQuestion (YAML frontmatter + structured YAML evidence block + sha256 prompt hash + retroactive backfill). D3 pause-lift condition (2 clean scheduled runs against vault checklist doc 04) is what's now pending; tasks 36 + 37 track those reviews. |

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
| `Firm Operations/02_Decision_Log.md` | ✅ NEW append-only ADR ledger — **ADR-001** (Honcho defer): git-tracked YAML wins for pilot; 5 revisit triggers all must be true. **ADR-002** (added late 2026-07-31): 3-part decision — D1 sensor evidence requirement for Critical/High technical findings + D2 audit artifact identity spec (immutable run_id/producer/model/prompt_version/content_hash; logical identity `geo-audit:<date>` forbidden) + D3 sensor-quality pause before P1 automation. Bill-quoted audit variant quarantined at `~/.geo-prospects/quarantine/`. |
| `Firm Operations/03_Session_Log_2026-07-31.md` | ✅ NEW session log — narrative record of the full 2026-07-31 day arc. 5 sections (morning hotfix → mid-day concept expansion → afternoon pilot execution → PR #4 + verifier-separation → end-of-day state). Artifacts index at bottom (new vault docs, YAML cards, quarantine, deployed infrastructure, all commits). Sets naming pattern `NN_Session_Log_YYYY-MM-DD.md` for future session logs. |
| `Firm Operations/04_ADR-002_D3_Clean_Run_Checklist.md` | ✅ NEW review instrument — per-audit checklist for the D3 pause-lift condition. Three sections: (A) D2 metadata integrity mechanical checks, (B) D1 evidence discipline substantive checks, (C) **downgrade-abuse detection** per Bill's 2026-07-31 loophole observation that a Critical/High could be rebadged to Medium and stay in the report. Names two triggers for a future ADR-003 amendment but explicitly forbids amending before empirical review evidence exists. Per-audit review records at `~/.geo-prospects/reviews/`. |
| `Firm Operations/05_Session_Log_2026-08-01_to_02.md` | ✅ NEW session log — 2-day arc (2026-08-01 first D3 review → 08-02 weekly-cross-check 4-bug trail → Contract Manager PoC → ADR-003). |
| `Firm Operations/06_Session_Log_2026-08-03.md` | ✅ NEW session log — competitor sweep first-fire clean + DAS→Sciaroni + Telegram bug class + Firecrawl saga. |
| `Firm Operations/07_Contract_Sensor_Registration.md` | ✅ NEW (2026-08-04) — first-ever formal sensor registration entry. Updated later same session with activation-live status + smoke-test outcomes + n8n versioning nuance. |
| `Firm Operations/08_Sensor_Framework_Direction_Note.md` | ✅ NEW (2026-08-04) direction-only. 7 tensions ready for scoping session. Trigger phrase "let's plan the sensor framework". |
| `Firm Operations/09_Session_Log_2026-08-04.md` | ✅ NEW session log — Contract Sensor framework integration + meta-monitoring build + smoke tests + n8n versioning discovery. |
| `Firm Operations/10_Security_Posture_Sensor_Registration.md` | ✅ NEW (2026-08-04 afternoon) — second formal sensor registration (cybersecurity). 9 design locks captured + tuning backlog (T1-T4) + data-sensitivity-class handling per non-negotiable #8. |
| `Firm Operations/11_Session_Log_2026-08-04b.md` | ✅ NEW session log — sensor #4 (cybersecurity) build narrative. Includes Path-B `/triage` decision + HIBP dropped from v1 + 6 bugs fixed during scaffold. |
| `CamFinTech.com website/Recent Milestones.md` | ✅ NEW Phase 9 section + Documentation-milestones row for new `Firm Operations/` folder. Phase 9 = agentic firm operating system arc (docs 65 + 00 + 01 + 02, pilot P0 execution, ADR-002, PR #4). |
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
2. `git log --oneline -5` to see commit history — HEAD of both `main` and `feature/update-homepage` should be `e908fb1` (P0 Case A ItemList merge) or the latest RESUME_SESSION commit. PR #4 is **MERGED**; branch `p0/itemlist-index-pages` deleted.
3. `git status` to check for uncommitted changes (should be clean modulo `.claude/RESUME_SESSION.md` if updates are in progress)
4. Read auto-memory `MEMORY.md` for cross-session state — includes anchors for 62010 pivot, remediation engine, agentic firm thesis, ADR-001+ADR-002
5. Check `Research/CamFinTech.com/Firm Operations/03_Session_Log_2026-07-31.md` for the full narrative of the day
6. Check `~/.geo-prospects/cards/` for pilot card state (`git log --oneline` inside that dir)
7. Bill's next likely ask (in rough priority order):
   - **Standing task**: review each scheduled cron output against the D3 checklist as it lands. Review records go at `~/.geo-prospects/reviews/YYYY-MM-DD-<producer>-review.md`. Cadence: daily 09:00 ICT DeepSeek daily-audit (D1 + D3 scope) + Sunday 08:00 ICT Sonnet weekly cross-check (D1 + D3 scope) + Monday 09:00 ICT competitor sweep (D1 & D3 EXEMPT per checklist; D2-only mechanical checks).
   - **Next auto-events**:
     - **2026-08-05 07:00 ICT**: Contract Sensor daily scan (`8xPNIjO5tiLESwyZ`) — first scheduled fire with errorWorkflow wired to `aRHJD1BDIS5SpBY6`; runtime failure → Gmail alert
     - **2026-08-05 08:15 ICT**: Contract Sensor watchdog (`h4h4SkXNDOQ8j6YZ`) first scheduled fire — probes Mac /health; if Mac asleep or Tailscale down → Gmail alert
     - **2026-08-05 09:00 ICT**: daily-audit fire (D3 candidate)
     - **2026-08-05 10:00 ICT**: cybersecurity-daily first UNATTENDED fire (cron `57a63b09e69d` registered); expected findings same 7 npm CVEs already deduped, ~0 net cards unless new — D3-equivalent counter starts building
     - **2026-08-09 07:00 ICT (Sunday)**: cybersecurity-weekly first UNATTENDED fire (cron `b4345725e0cb`); expected findings same 5 already deduped, ~0 net cards unless new
     - **2026-08-09 08:00 ICT (Sunday)**: weekly cross-check fire — first honest Hermes-launched test of the 4 script fixes committed 2026-08-02
     - **2026-08-10 09:00 ICT (Monday)**: weekly competitor sweep — Firecrawl SERP will remain `[unverified]` until Bill completes Nous Portal `hermes model` login
   - **Execution work**: send GBP Maps URL + lat/lng (2 min) · real founder bio for /about (FU-6) · H4 primary-source hyperlinking sweep · 2-week re-audit on/after 2026-08-13
   - **Scoping sessions** (all forbid ad-hoc execution): "let's plan the 62010 pivot" (A) · "let's plan the remediation engine" (B) · "let's plan sensor 2" (C)
   - **Six D3 follow-ups filed** (see Live Pilot State section) — FU-D3-1 through FU-D3-6; none actioned; all await Bill authorization
   - **ADR-003 opening**: trigger emphatically met, standing "wait it out" per 2026-08-02 decision; revisit if a 4th distinct downgrade-abuse pattern emerges

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
- **ADR-002 D1** (**prompt-enforced policy — mechanical enforcement pending P1**): the DeepSeek daily-audit prompt instructs the model that Critical/High technical findings CANNOT be emitted without attached machine-readable evidence from a current production probe. Applies to Technical GEO + Schema/Structured Data categories; does NOT apply to Brand Authority / E-E-A-T (inherently interpretive). **Deployed 2026-07-31** in geo-prospects commit `01850f0` (`daily-audit.sh` + `weekly-cross-check.sh` addendum §2 replaced; `weekly-competitor.sh` D2-only). **Important qualification**: this is a prompt policy the model MAY still violate. Mechanical downstream rejection (the classifier that reads each audit and refuses malformed evidence blocks) is part of the blocked P1 work and does NOT yet exist. **The two scheduled reviews therefore require substantive human inspection** — mere completion of a scheduled cron run does NOT satisfy D3. First scheduled run under D1: 2026-08-01 09:00 ICT. Reviews recorded at `~/.geo-prospects/reviews/` per vault [[../Firm Operations/04_ADR-002_D3_Clean_Run_Checklist]] (Section C: downgrade-abuse detection per Bill's 2026-07-31 loophole observation).
- **ADR-002 D2**: every audit artifact must carry immutable `run_id` + `producer` + `model` + `prompt_version` + `generated_at` + `input_target` + `content_hash`. Logical identity `geo-audit:<date>` FORBIDDEN — use `geo-audit:<run_id>`. Non-negotiable—an identity scheme that permits collisions is broken by construction.
- **ADR-002 D3**: no P1 (normalize/dedupe automation) begins until D1 deployed AND 2 subsequent daily-audit runs show zero unattested Critical/High technical findings. Disk audit `~/.geo-prospects/audits/*.md` = operational-source for P0 (NOT universally authoritative). Bill-quoted audit variant of unknown provenance quarantined at `~/.geo-prospects/quarantine/`.
- **`~/.geo-prospects/` is now a local git repo** (initialized 2026-07-31; no remote). Tracks pilot cards + quarantine + scripts + audits + `reviews/` (D3 clean-run records). Commit anything material — 12MB projected footprint after 6 months is trivial. Head as of end-of-session: `acad582` (reviews scaffolding); prior: `01850f0` (ADR-002 D1/D2), `99fc7b6` (ItemList card review-fix record).
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
- **Last deploy**: `dpl_AGjMXv8MhR6Vzb6YJRvvr3a68ukr` (2026-08-01T02:19:36Z) — PR #4 P0 Case A ItemList JSON-LD on /glossary + /learn. Aliased to https://www.camfintech.com. Build cache restored; 31s build. Status: Ready.
- **Prior deploy**: `dpl_6pcc9sZ1FJfj2raqN1mirnjEnBsQ` (2026-07-30) — OBR-KHNSIC scope broadening
- **Verified live**: knowsAbout + serviceType arrays expanded; KHNSIC section in llms-full.txt renders; prohibited-string sweep clean (no "software development" / "SaaS product" leak); all 5 hard rules intact; Wikidata URL removed from sameAs; sitemap lastmod fresh
- **Vercel project**: `cambodia-fintech` (team `fin-tec-consulting-cambodia`)
- **GitHub repo**: https://github.com/myownipgit/cambodia-fintech (PUBLIC since 2026-06-18)
- **Vercel CLI**: last re-auth 2026-07-30 (browser OAuth via `vercel login`)
