---
type: doc
project: CamFinTech.com
status: active
created: 2026-07-31
updated: 2026-07-31
tags:
  - camfintech
  - website
  - monitoring
  - geo
  - hermes
  - cron
  - deepseek
  - sonnet
  - telegram
plan-file: /Users/myownip/.config/claude/plans/misty-cuddling-gray.md
shootout-results: /Users/myownip/.geo-prospects/shootout/SHOOTOUT-RESULTS.md
related:
  - "[[GEO Audit 2026-07-30]]"
  - "[[GEO and SEO Strategy]]"
  - "[[Outstanding Issues]]"
  - "[[sameAs Health Check Workflow]]"
  - "[[Rewrite Project]]"
---

# Daily GEO Monitoring Pipeline — Hermes Cron → Telegram

**Deployed:** 2026-07-31
**Motivation:** The 33-day Wikidata dead-link incident (2026-06-28 → 2026-07-30) showed that manual audits alone leave silent failures live for weeks. This pipeline runs continuous automated GEO monitoring with delta-tracking and Telegram delivery.

**Delivery target:** CamFinTech Hermes Telegram group `-1004295083888` (team-visible, auditable).

---

## Cadence + model tier (locked 2026-07-31)

Tier B chosen after empirical model shootout ([shootout results](file:///Users/myownip/.geo-prospects/shootout/SHOOTOUT-RESULTS.md)):

| Job | Schedule (ICT) | Model | Cost/run | Cost/year |
|---|---|---|---|---|
| **Daily audit** | 09:00 daily | DeepSeek V4 Pro (Hermes native) | ~$0.05 | ~$18 |
| **Weekly cross-check** | Sunday 08:00 | Claude Sonnet 4.7 (`claude -p` headless) | ~$2.20 | ~$115 |
| **Weekly competitor sweep** | Monday 09:00 | DeepSeek V4 Pro (Hermes native) | ~$0.05 | ~$3 |

**Total: ~$136/year.** All runs deliver digest + full-report-as-document to the same Telegram group.

**Why Tier B (recommended) not Tier A (DeepSeek-only)**: DeepSeek without verification discipline fabricated a Critical severity finding in the shootout (claimed HTTP→HTTPS redirects weren't enforced when they were). Weekly Sonnet cross-check catches this class of false positive. See [[#Model shootout summary]] below.

---

## Files deployed

### Canonical scripts (~/.geo-prospects/scripts/)

| File | Role |
|---|---|
| `daily-audit.sh` | DeepSeek daily audit — inlines SKILL.md + verification discipline addendum, saves to `audits/`, sends Telegram digest + document |
| `weekly-cross-check.sh` | Sonnet weekly audit — inlines SKILL.md, cross-checks the same-week DeepSeek run, saves to `audits/`, sends digest + document |
| `weekly-competitor.sh` | DeepSeek competitor sweep — custom prompt for DFDL, Acclime, DAS & Partners; saves to `competitors/`, sends digest + document |
| `telegram-send.sh` | Shared helper: `--text` for messages, `--document` for file uploads. Reads bot token from `~/.hermes/.env`. Handles 4096-char body limit. |
| `extract-digest.sh` | Shared helper: parses composite score, categories, Critical + High findings, top quick win from a report markdown. |

### Hermes cron wrappers (~/.hermes/scripts/)

Hermes enforces scripts must physically live under `~/.hermes/scripts/` (symlinks fail the security check). Three thin wrappers delegate to the canonical scripts:

- `camfintech-daily-audit.sh` → execs `~/.geo-prospects/scripts/daily-audit.sh`
- `camfintech-weekly-cross-check.sh` → execs `~/.geo-prospects/scripts/weekly-cross-check.sh`
- `camfintech-weekly-competitor.sh` → execs `~/.geo-prospects/scripts/weekly-competitor.sh`

### Hermes cron registrations

| ID | Name | Cron | Next run |
|---|---|---|---|
| `645711088c45` | camfintech-daily-audit | `0 9 * * *` (Asia/Phnom_Penh) | 2026-07-31 09:00 ICT |
| `3ce7e030981c` | camfintech-weekly-cross-check | `0 8 * * 0` (Sunday) | 2026-08-02 08:00 ICT |
| `f365ca6ac1f5` | camfintech-weekly-competitor | `0 9 * * 1` (Monday) | 2026-08-03 09:00 ICT |

Registered via `hermes cron create ... --no-agent --deliver telegram`. Each script ends with `echo "[SILENT]"` to suppress Hermes' own delivery — scripts handle their own Telegram messaging (digest + document, which Hermes' built-in delivery can't attach).

### Output directory structure

```
~/.geo-prospects/
├── audits/                                   # daily + weekly full audits
│   ├── camfintech-deepseek-YYYY-MM-DD.md    # daily
│   ├── camfintech-deepseek-YYYY-MM-DD.log
│   ├── camfintech-sonnet-YYYY-MM-DD.md      # weekly Sunday
│   └── camfintech-sonnet-YYYY-MM-DD.log
├── competitors/                              # weekly Monday sweeps
│   ├── weekly-YYYY-MM-DD.md
│   └── weekly-YYYY-MM-DD.log
├── quick/                                    # (unused; kept for future /geo quick tier)
├── reports/                                  # (unused; kept for future /geo compare monthly)
├── scripts/                                  # the 5 scripts above
└── shootout/                                 # Phase 0 model-selection artifacts
    ├── SHOOTOUT-RESULTS.md
    ├── 2026-07-31-deepseek-report.md
    ├── 2026-07-31-deepseek-stdout.log
    └── 2026-07-31-haiku-stdout.md
```

---

## Prompt engineering — verification discipline addendum

Every DeepSeek and Sonnet audit prompt includes this addendum after the inlined SKILL.md content, added specifically to counter DeepSeek's false-positive risk observed in the shootout:

> **VERIFICATION DISCIPLINE for Critical + High findings:**
> Before including any Critical or High severity finding in the report, you MUST verify the claim with a live tool call (curl, WebFetch, or equivalent) and quote the actual response as evidence. If the verification does not confirm the finding, DO NOT include it. This rule exists because prior audits have hallucinated Critical findings that turned out to be false positives (e.g., 'HTTP → HTTPS redirect not enforced' when in fact Vercel returns 308 → https). Every Critical/High entry in the report must cite the specific curl/fetch response that supports it.

Also includes the **Aston Hill guardrail** to prevent re-introduction of the misidentified LinkedIn profile as a positive signal.

**Impact of the discipline addendum**: shootout DeepSeek (no discipline) had 1 Critical false positive out of 3 Criticals (~33% error rate). Today's live run (with discipline) had zero — confirmed via curl on the previously-fabricated claim.

---

## Model shootout summary

Full detail: [shootout results](file:///Users/myownip/.geo-prospects/shootout/SHOOTOUT-RESULTS.md).

| Model | Delivered? | Composite vs Sonnet 67 | Cost | Note |
|---|---|---|---|---|
| Claude Sonnet 4.7 (interactive baseline) | ✅ | 67 (baseline) | ~$4/run | Gold standard |
| Claude Haiku 4.5 (`claude -p /geo-audit`) | ❌ | N/A | ~$0 | **FAILED** — announced audit, exited before subagents ran. `claude -p` + skill dispatch is broken. |
| DeepSeek V4 Pro shootout (no discipline) | ✅ | 59 (Δ −8) | ~$0.05 | 1 fabricated Critical (HTTP→HTTPS false alarm) |
| DeepSeek V4 Pro live daily (with discipline) | ✅ | **65 (Δ −2)** | ~$0.05 | Zero false positives on this run |

**Estimated quality degradation DeepSeek vs Sonnet: 15–25%** — score accuracy ~97%, coverage of major findings ~80%, actionability ~70–80%, competitor specificity ~50%. Sufficient for daily heartbeat + delta detection; not sufficient for definitive expert audit (that's the weekly Sonnet's job).

---

## Delivery format

**Telegram message body** (~500–900 chars, per digest template):
```
📊 camfintech.com daily GEO audit · YYYY-MM-DD
Model: DeepSeek V4 Pro (Hermes-native, single-context)

📊 Composite: 65/100 (Fair)

Categories:
  AI Citability: 82
  Brand Authority: 45
  Content E-E-A-T: 55
  Technical GEO: 88
  Schema: 78
  Platform: 35

🔴 Critical + High findings:
• C1: Founder bio placeholder
• H1: No Article/HowTo schema on 16 content pages
[...]

⚡ Top quick win: [first Quick Win from report]

📎 Full report attached · camfintech-deepseek-YYYY-MM-DD.md
```

**Telegram document**: the full ~25–90 KB markdown report as `sendDocument` (Telegram supports up to 50 MB — plenty of headroom).

---

## Monitoring the monitor

If any job fails (Hermes crash, script error, DeepSeek timeout), the script itself catches the failure and sends an error alert via `telegram-send.sh` before exiting non-zero. Hermes also logs failures to `~/.hermes/logs/gateway.log`.

**How to spot silent failure**:
- No daily digest appears in the Telegram group by 10:00 ICT → check `hermes cron list` for last run status
- Check `~/.geo-prospects/audits/camfintech-deepseek-<today>.log` for DeepSeek stderr
- Check `~/.hermes/logs/gateway.log` for Hermes-side errors

**Sunday sanity check**: on the first Sunday of each month, verify that `~/.geo-prospects/audits/` has ≥28 daily-deepseek reports from the previous 4 weeks. Absence = pipeline stopped running.

---

## Cross-check verdict format

Weekly Sunday Sonnet audit includes an extra section at the end:

```markdown
## Cross-check vs DeepSeek daily audit

- Sonnet composite: XX/100
- DeepSeek composite (latest daily): YY/100
- Composite delta: ±Z

**DeepSeek Criticals I disagree with:** [list]
**DeepSeek Highs I verified as false positives:** [list]
**Findings I flagged that DeepSeek missed:** [list]

**Verdict:** DeepSeek daily is [reliable | mostly-reliable | needs prompt-tuning] as of YYYY-MM-DD.
```

If the verdict trends toward "needs prompt-tuning" over 3+ consecutive weeks, revisit the discipline addendum.

---

## Follow-ups (out of scope for the initial deployment)

- **Historical trending dashboard**: after 4+ weeks of daily data, build a small HTML dashboard plotting composite + category scores over time. Would live in `~/.geo-prospects/reports/dashboard.html`.
- **Score-alert mode**: if daily digests become noise, add `--changes-only` that suppresses no-change days (competitor: silent unless movement; daily: silent unless Δ ≥ ±2 points).
- **Delta trigger integration with sameAs health check**: the [[sameAs Health Check Workflow]] (n8n, deployed 2026-07-31) covers URL health weekly. Consider whether the daily audit should ALSO ping every `sameAs` URL — currently no, since both surfaces would raise the same alerts.
- **When OBR certificate issues**: expand competitor sweep to include ~5 more Cambodia-registered firms that show up under 70200 KHNSIC code.
- **PDF version of weekly reports**: `/geo report-pdf` skill exists. Once markdown-attach flow proves stable, add PDF-attach.
- **Multi-target expansion**: if Riel Report (riel.report) or Angkor Skills Academy (angkorskillsacademy.com when launched) also need monitoring, clone scripts and register 2 more cron jobs.

---

## First live results

**Manual trigger 2026-07-31** (validation before scheduled run):

- Report: 26 KB / 392 lines
- Composite: **65/100 (Fair)** — Δ −2 vs Sonnet 2026-07-30 baseline (67)
- Delivery: ✅ digest + document to CamFinTech Hermes group
- Cost: ~$0.05
- Zero false positives (discipline addendum working)

**First scheduled cron run:** 2026-07-31 09:00 ICT.
