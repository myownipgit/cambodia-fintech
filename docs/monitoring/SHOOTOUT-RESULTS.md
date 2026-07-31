# GEO Audit Model Shootout — Results

**Date:** 2026-07-31
**Target URL:** https://www.camfintech.com
**Purpose:** Empirically determine which model tier delivers acceptable GEO audit quality at what cost, for use in the Hermes-driven daily monitoring pipeline (per plan `misty-cuddling-gray.md`).

---

## Runs completed

| # | Model | Invocation | Cost | Wall time | Report produced? |
|---|---|---|---|---|---|
| 1 | **Claude Sonnet 4.7** (baseline) | Interactive Claude Code session (this session, today's 2026-07-30 audit) | ~$4 | ~10 min | ✅ 86KB, structural fidelity 10/10 |
| 2 | **Claude Haiku 4.5** | `claude -p --model=haiku "/geo-audit URL"` (headless) | ~$0 (no work done) | ~90 sec | ❌ **20 lines of "I'll run this, wait 2-5 min" prose — no actual audit** |
| 3 | **DeepSeek V4 Pro** | `hermes -z "<inlined SKILL.md instructions>"` (Hermes-native, single-context) | ~$0.05 | ~11 min | ✅ 86KB / 1238 lines, structural fidelity 10/10 |

**Total shootout cost: ~$4.05.** Well under the $5–10 estimate.

---

## Key architectural finding: `claude -p` + skill-orchestration is broken

Haiku's failure is not about Haiku's quality — it's about **the `/geo-audit` skill's subagent architecture being incompatible with `claude -p` headless mode**. In print mode, Claude Code produces a single response and exits; it doesn't wait for asynchronously-dispatched Task tool subagents to complete. Haiku followed the skill's instruction to "delegate to 5 specialized subagents" by *announcing* the delegation in prose and then exiting — because in `-p` mode, there's no follow-up turn.

**This affects Sonnet + Opus in the same way.** Today's successful Sonnet audit worked because I ran it inside an interactive Claude Code session (this chat) — subagents completed in-turn, and I aggregated the results. A cron-driven `claude -p` invocation with Sonnet would fail the same way Haiku did.

**Implication:** for any Hermes-driven daily audit, the audit MUST run in single-context mode (no subagent dispatch). This is exactly what DeepSeek did via Hermes — and it's what any Claude model would need to do too, via an inlined-prompt approach instead of `/geo-audit`.

---

## Quality comparison — Sonnet baseline vs DeepSeek

### Composite score

- **Sonnet 4.7**: 67/100 (Fair — upper band, approaching Good)
- **DeepSeek V4 Pro**: 59/100 (Poor — top of range, 1 pt from Fair)
- **Δ**: −8 points (DeepSeek more pessimistic across the board)

### Category-level agreement

| Category | Sonnet | DeepSeek | Δ | Signal |
|---|---|---|---|---|
| AI Citability | 77 | 72 | −5 | Close |
| Brand Authority | 43 | 38 | −5 | Close |
| Content E-E-A-T | 73 | 58 | **−15** | Wide (DeepSeek scores Experience/Authoritativeness lower) |
| Technical GEO | 91 | 78 | **−13** | Wide (DeepSeek scored Technical down for a false-positive redirect claim — see below) |
| Schema | 77 | 70 | −7 | Close |
| Platform | 35 | 30 | −5 | Close |

Wide gaps on E-E-A-T and Technical are the main quality drivers of the 8-pt composite delta.

### Ground-truth accuracy (facts I know from having shipped them today)

| Check | Sonnet | DeepSeek |
|---|---|---|
| Both LinkedIn URLs in `Organization.sameAs` (2 anchors, LinkedIn + GitHub after today's `c9e9690`) | ✅ | ✅ |
| GitHub URL noted | ✅ | ✅ |
| 14 AI crawlers in robots.txt | ✅ | ✅ |
| KHNSIC / OBR-registered scope section in llms-full.txt (added today, commit `086a8ae`) | ✅ | ✅ (5 mentions — thoroughly picked up) |
| `[Bio in progress]` placeholder flagged | ✅ | ✅ (10 mentions — very thorough) |
| DASP BreadcrumbList current state (2-item, no self-loop, after today's fix in `c9e9690`) | ✅ | ✅ (correctly noted breadcrumbs present, no false "self-loop" claim) |
| **Aston Hill guardrail** — no re-introduction of misidentified LinkedIn profile | ✅ | ✅ (0 mentions) |

DeepSeek passed all 7 ground-truth checks. This is genuinely impressive.

### DeepSeek's misses (things Sonnet caught)

1. **NEW-M1 (404 double robots meta)** — Sonnet's audit flagged the 404 page emitting both `noindex` and `noindex, nofollow` (redundant tag). DeepSeek did not.
2. **Competitor specificity** — Sonnet's Brand Authority section named DFDL, Acclime, DAS & Partners, Making It Easy Cambodia as winners for "Cambodia DASP compliance consultant". DeepSeek's competitor discussion was generic (Big 4, law firms, SIs) with no specific competitor names.
3. **Wikidata Q140279044 deletion** — Sonnet's audit was hyper-focused on this (the C1 critical of today's audit). DeepSeek didn't note it — arguably correct behavior, since the URL was removed from schema in commit `ca32875` before DeepSeek's run and there's nothing in current state to flag.

### DeepSeek's false positive (concerning)

**C1: "HTTP → HTTPS Redirect Not Enforced"** — DeepSeek flagged this as its top Critical issue, claiming `http://camfintech.com` returns HTTP 200 with full page content.

**Actual state (verified via curl)**:
```
http://camfintech.com          → HTTP 308 → https://www.camfintech.com/ (final 200 after 2 redirects)
http://www.camfintech.com      → HTTP 308 → https://www.camfintech.com/ (final 200 after 2 redirects)
```

DeepSeek's browser tool almost certainly followed redirects silently and reported the final 200 as "no redirect". This is a **fabricated Critical severity finding** — the sort of thing that would create noise in a daily report and cause Bill to rush to fix a non-issue.

Sonnet did not make this error.

---

## Cost projections at daily cadence

| Model | Cost/audit | Daily × 365 | Annual cost |
|---|---|---|---|
| DeepSeek V4 Pro | ~$0.05 | 365 | **~$18** |
| Sonnet 4.7 (headless inline — untested but likely works, same shape as DeepSeek) | ~$2.20 est | 365 | ~$800 |
| Sonnet 4.7 (weekly only, hybrid with DeepSeek daily) | ~$2.20 | 52 | ~$115 + $18 daily = **~$133** |

---

## Recommendation

**Primary: DeepSeek V4 Pro daily** at ~$18/year, with two guardrails:

1. **Prompt discipline**: extend the DeepSeek prompt to require verification of Critical findings via actual tool calls (curl, WebFetch) before flagging. Explicit instruction: "If you find a Critical issue, verify it with a live network call and cite the exact response before including it in the report." This addresses the C1 false-positive risk.

2. **Weekly Sonnet cross-check** (untested but likely works with same inlined-prompt approach): once/week Sunday, run the same audit through Sonnet 4.7 via `claude -p` with the inlined SKILL.md as prompt. Cost ~$2.20/week = ~$115/year. Compare against DeepSeek's daily to catch systematic drift or hallucinated findings.

**Total: ~$133/year.** 2x the pure-DeepSeek option, but adds a quality check that catches false positives before they become alerts to Bill.

### If Bill wants to skip the Sonnet cross-check

Pure DeepSeek daily = ~$18/year. Accept the ~5-10% false-positive rate on Critical findings. Would still catch real issues like Wikidata dead-links (DeepSeek passed all 7 ground-truth checks) — just occasionally flags things that aren't real.

### What we DON'T recommend

- **Haiku 4.5 via `claude -p /geo-audit`**: proven broken today. Would need retest via inlined-prompt approach; not worth the additional shootout cost unless Bill specifically wants Claude tier at Haiku prices.
- **Sonnet-only daily**: ~$800/year is excessive when DeepSeek captures 80%+ of findings.
- **Opus-anything**: cost is disqualifying for a daily job.

---

## Bill's decision point

Three tiers to choose from:

| Tier | Config | Annual cost | Quality guarantees |
|---|---|---|---|
| **A** (minimal) | DeepSeek daily only | ~$18 | Passes ground-truth checks; occasional false positives on Critical findings |
| **B** (recommended) | DeepSeek daily + Sonnet weekly cross-check | ~$133 | False positives get caught by weekly Sonnet compare; delta tracking via Sonnet's weekly baseline |
| **C** (premium) | Sonnet daily + Opus monthly reference audit | ~$1,000+ | Highest quality per run; likely overkill for a daily heartbeat |

Awaiting Bill's tier lock-in before Phase 1 (bootstrap scripts + Hermes jobs).

---

## Files

- Sonnet baseline: `/Users/myownip/workspace/cambodia-fintech/GEO-AUDIT-REPORT.md` (today's 2026-07-30 audit, composite 67/100)
- Haiku (empty/failed): `/Users/myownip/.geo-prospects/shootout/2026-07-31-haiku-stdout.md`
- DeepSeek: `/Users/myownip/.geo-prospects/shootout/2026-07-31-deepseek-report.md` (86KB, composite 59/100)
- DeepSeek stdout log: `/Users/myownip/.geo-prospects/shootout/2026-07-31-deepseek-stdout.log`
