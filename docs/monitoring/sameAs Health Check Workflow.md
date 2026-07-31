---
type: doc
project: CamFinTech.com
status: spec-ready
created: 2026-07-31
updated: 2026-07-31
tags:
  - camfintech
  - website
  - n8n
  - automation
  - monitoring
  - schema
  - health-check
related:
  - "[[../DPI Integration/63_OBR_Registration_and_KHNSIC_Scope]]"
  - "[[GEO Audit 2026-07-30]]"
  - "[[Outstanding Issues]]"
n8n-instance: automation.camfintech.com
workflow-name: "camfintech-sameAs-health-check"
schedule: weekly · Sun 09:00 ICT (02:00 UTC)
alert-channel: email → info@camfintech.com
---

# n8n Workflow Spec — camfintech.com sameAs Health Check

## Purpose

Prevent recurrence of the 2026-06-28 → 2026-07-30 Wikidata dead-link incident, where Q140279044 was deleted by a Wikidata admin and camfintech.com's production HTML continued emitting the 404 URL in `Organization.sameAs` on every page for 33 days before anyone noticed.

This workflow is a **weekly health check** on every external URL that camfintech.com broadcasts to AI crawlers via schema.org `sameAs`, `hasMap`, and similar external-reference fields. Any non-2xx response triggers an email alert. Every check is logged to an n8n Data Table for audit-trail continuity.

**Success criteria**: any external-reference URL in production schema that starts returning non-2xx surfaces within ≤7 days, not ≥30.

## Design decisions

| Decision | Choice | Rationale |
|---|---|---|
| **URL source** | Fetch live homepage HTML, parse JSON-LD | Self-updating — workflow always reflects what production is actually emitting. Alternative (curated list) would drift silently. |
| **Fields covered** | `Organization.sameAs` + `Person.sameAs` (+ `ProfessionalService.hasMap` once GBP is wired) | Every external URL we broadcast. Extend the extractor when new fields land. |
| **Schedule** | Weekly, Sunday 09:00 ICT (02:00 UTC) | Sunday alert = quiet enough to be signal, not noise. Weekly cadence beats the 10-day Wikidata patrol window; catches dead links well inside the 30-day threshold set by the incident. |
| **Check method** | HEAD request, follow redirects (up to 5), 10s timeout | HEAD avoids downloading response bodies (cheap); redirects OK (a 308 that resolves is fine). |
| **Failure threshold** | Status code not in [200, 399] | 2xx = OK; 3xx OK (following redirects means final response is what counts, but n8n's HTTP Request node reports final code after following). Explicit failures: 4xx / 5xx / network errors / DNS. |
| **Rate limiting** | 1 second between HEAD requests | Polite pinging of external services; ~5 URLs = ~5 seconds total. |
| **Alert channel** | Gmail node → `info@camfintech.com` | Bill has Gmail credentials wired on the CamFinTech n8n instance. Email is safest (no missed notification). |
| **Alert policy** | Send email ONLY if any check fails; silent when healthy | Alert fatigue kills monitoring. Weekly "all clear" emails train Bill to ignore the alerts. |
| **Log destination** | n8n Data Table `camfintech_sameAs_checks` — every check, every week | Audit trail: when did each URL start failing? Enables trend analysis. |
| **Failure handling** | HTTP Request node: "Continue on Fail" = ON | A network error on one URL shouldn't kill the whole workflow. |

## Node graph

```
[Schedule Trigger: weekly Sun 09:00 ICT]
    ↓
[HTTP Request: GET https://www.camfintech.com/]
    ↓ (headers include User-Agent: "camfintech-health-check/1.0")
[Code (All Items, run once): extract sameAs URLs from JSON-LD]
    ↓ (outputs N items — one per URL)
[HTTP Request: HEAD {{ $json.url }}]
    ↓ (iterates over items; continue on fail; follow redirects)
[Set: normalize { url, source, status, ok, checkedAt }]
    ↓
[Data Table Insert: log every check to camfintech_sameAs_checks]
    ↓
[IF: {{ !$json.ok }}]
    ↓ true (failed URLs)                    ↓ false (healthy URLs)
[Aggregate: combine all failures]           [END — no alert]
    ↓ (single item with { failures: [...], count: N, timestamp })
[Code: build HTML email body]
    ↓
[Gmail: Send email to info@camfintech.com]
    ↓
[END]
```

## Node-by-node config

### 1. Schedule Trigger
- **Type**: `n8n-nodes-base.scheduleTrigger`
- **Trigger interval**: Custom (Cron)
- **Cron expression**: `0 2 * * 0` (Sunday 02:00 UTC = 09:00 ICT)

### 2. HTTP Request — Fetch homepage
- **Type**: `n8n-nodes-base.httpRequest`
- **Method**: `GET`
- **URL**: `https://www.camfintech.com/`
- **Response**: keep as text/string (we parse HTML in Code)
- **Send Headers**: `{ "User-Agent": "camfintech-health-check/1.0 (n8n)" }`
- **Timeout**: 15000 ms
- **On failure**: `Stop and Error` (if we can't fetch the homepage, the workflow has nothing to check — this failure MUST alert; the workflow's Error Trigger workflow catches it — see §Error handling)

### 3. Code — Extract sameAs URLs
- **Type**: `n8n-nodes-base.code`
- **Language**: JavaScript
- **Mode**: `Run Once for All Items`
- **Code**:

```javascript
// Parse every <script type="application/ld+json"> block from the homepage HTML,
// then extract Organization.sameAs, Person.sameAs, ProfessionalService.hasMap URLs.
// Emit one n8n item per URL.
const html = $input.first().json.data ?? $input.first().json.body ?? $input.first().json;

// Extract all JSON-LD script contents
const scriptRegex = /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
const jsonLdBlocks = [];
let match;
while ((match = scriptRegex.exec(html)) !== null) {
  try {
    jsonLdBlocks.push(JSON.parse(match[1]));
  } catch (e) {
    // Skip malformed blocks; log for visibility
    console.log('Skipping malformed JSON-LD block:', e.message);
  }
}

// Walk each block's @graph (or the block itself) looking for target fields
const urlsToCheck = [];
const addUrl = (url, source) => {
  if (typeof url === 'string' && /^https?:\/\//.test(url)) {
    urlsToCheck.push({ url, source });
  }
};

const walkNode = (node) => {
  if (!node || typeof node !== 'object') return;
  const type = node['@type'];
  // Extract sameAs from Organization, Person, ProfessionalService, etc.
  if (Array.isArray(node.sameAs)) {
    node.sameAs.forEach(u => addUrl(u, `${type || 'unknown'}.sameAs`));
  } else if (typeof node.sameAs === 'string') {
    addUrl(node.sameAs, `${type || 'unknown'}.sameAs`);
  }
  // Extract hasMap
  if (typeof node.hasMap === 'string') addUrl(node.hasMap, `${type || 'unknown'}.hasMap`);
  // Extract url on ImageObject (logo etc.) — optional; comment out if noisy
  // if (type === 'ImageObject' && typeof node.url === 'string') addUrl(node.url, `${type}.url`);
};

for (const block of jsonLdBlocks) {
  if (Array.isArray(block['@graph'])) {
    block['@graph'].forEach(walkNode);
  } else {
    walkNode(block);
  }
}

// Deduplicate — same URL might be in multiple nodes
const seen = new Set();
const deduped = urlsToCheck.filter(({ url }) => {
  if (seen.has(url)) return false;
  seen.add(url);
  return true;
});

if (deduped.length === 0) {
  throw new Error('No sameAs/hasMap URLs found in homepage JSON-LD — schema may be broken');
}

return deduped.map(item => ({ json: item }));
```

- **Notes**:
  - Throws if zero URLs extracted — treated as a workflow failure (the Error Trigger workflow alerts)
  - Deduplicates so the same URL isn't checked twice
  - `source` field tells you WHICH schema node emitted the URL for debugging

### 4. HTTP Request — HEAD each URL
- **Type**: `n8n-nodes-base.httpRequest`
- **Method**: `HEAD`
- **URL**: `={{ $json.url }}` (expression)
- **Redirect**: Follow, max 5
- **Timeout**: 10000 ms
- **Continue on Fail**: **YES** (critical — a network error on one URL shouldn't stop the workflow)
- **Delay between iterations**: 1000 ms (set on workflow settings or via a Wait node if per-item pause needed)
- **Response**: keep headers + status; body not needed

### 5. Set — Normalize check result
- **Type**: `n8n-nodes-base.set`
- **Mode**: `Manual mapping` (keep only what we log/alert on)
- **Fields**:
  - `url`: `={{ $('Code — Extract sameAs URLs').item.json.url }}`
  - `source`: `={{ $('Code — Extract sameAs URLs').item.json.source }}`
  - `status`: `={{ $json.statusCode ?? 0 }}` (0 if network error)
  - `ok`: `={{ ($json.statusCode ?? 0) >= 200 && ($json.statusCode ?? 0) < 400 }}`
  - `checkedAt`: `={{ $now.toISO() }}`
  - `error`: `={{ $json.error?.message ?? '' }}`

### 6. Data Table Insert — Audit log
- **Type**: `n8n-nodes-base.dataTable` (or `n8n_manage_datatable` via MCP)
- **Table**: `camfintech_sameAs_checks`
- **Operation**: Insert row
- **Fields**: `url`, `source`, `status`, `ok`, `checkedAt`, `error`
- **Schema** (create the table once with these columns before first run):
  - `id` INTEGER PRIMARY KEY AUTO
  - `url` TEXT
  - `source` TEXT
  - `status` INTEGER
  - `ok` BOOLEAN
  - `checkedAt` TIMESTAMP
  - `error` TEXT

### 7. IF — Route failures
- **Type**: `n8n-nodes-base.if`
- **Condition**: `{{ $json.ok }}` equals `false`
- **True branch** → continues to Aggregate
- **False branch** → dead-end (no alert on healthy URL)

### 8. Aggregate — Combine failures into single item
- **Type**: `n8n-nodes-base.aggregate` (or `itemLists → Concatenate items`)
- **Aggregate**: All item data into single item
- **Field name**: `failures`
- **Output**: `{ failures: [{ url, source, status, error, checkedAt }, ...] }`

### 9. Code — Build HTML email body
- **Type**: `n8n-nodes-base.code`
- **Mode**: `Run Once for All Items`
- **Code**:

```javascript
const item = $input.first().json;
const failures = item.failures ?? [];
const count = failures.length;
const now = new Date().toISOString();

const rows = failures.map(f => `
  <tr>
    <td><a href="${f.url}">${f.url}</a></td>
    <td><code>${f.source}</code></td>
    <td>${f.status || 'ERR'}</td>
    <td>${f.error || ''}</td>
  </tr>
`).join('');

const html = `
  <p><strong>${count} sameAs URL${count === 1 ? '' : 's'} failing on production HTML at ${now}</strong></p>
  <table border="1" cellpadding="6" cellspacing="0">
    <thead>
      <tr><th>URL</th><th>Source field</th><th>Status</th><th>Error</th></tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>
  <h3>Remediation checklist</h3>
  <ol>
    <li>Verify the URL is actually dead: <code>curl -sSI &lt;url&gt;</code></li>
    <li>If external takedown (e.g. Wikidata notability delete): remove from schema, deploy same day. Do NOT attempt re-creation without ≥3 verifiable independent external mentions first.</li>
    <li>If temporary outage (5xx): re-check tomorrow. If still dead in 48h, treat as removal.</li>
    <li>If URL renamed (redirect to a good target): the HEAD check would show 200 after redirect — this alert would not fire. If it fired, the redirect chain is broken.</li>
    <li>Update <code>app/components/JsonLd.tsx</code>, commit, deploy via <code>vercel --prod --yes</code>.</li>
    <li>Log the incident in <code>Research/CamFinTech.com/CamFinTech.com website/Outstanding Issues.md</code>.</li>
  </ol>
  <p><em>This alert generated by n8n workflow <code>camfintech-sameAs-health-check</code> on <code>automation.camfintech.com</code>. Weekly schedule: Sundays 09:00 ICT. Audit log: n8n Data Table <code>camfintech_sameAs_checks</code>.</em></p>
`;

return [{ json: { subject: `[camfintech health check] ${count} sameAs URL${count === 1 ? '' : 's'} failing`, html } }];
```

### 10. Gmail — Send alert
- **Type**: `n8n-nodes-base.gmail`
- **Operation**: `Send`
- **Credentials**: existing Gmail OAuth (info@camfintech.com)
- **To**: `info@camfintech.com`
- **Subject**: `={{ $json.subject }}`
- **Body (HTML)**: `={{ $json.html }}`

## Error handling

If the workflow itself fails (homepage fetch dies, Code node throws, etc.), we need a separate signal — otherwise a broken health check silently gives false comfort.

**Recommended: create a second workflow `camfintech-sameAs-health-check-error-alert`**:
- Trigger: `Error Trigger` (n8n-nodes-base.errorTrigger)
- Settings on this workflow: set as the "Error Workflow" for the health check workflow
- Action: Gmail send to info@camfintech.com with subject `[camfintech health check] WORKFLOW FAILED` and body containing the error message + workflow execution URL

Two-workflow pattern ensures a silent workflow failure doesn't mask a real production issue.

## Deployment

### Option A — Via n8n-mcp MCP (recommended, ~10 min)

From this Claude Code session with `mcp__n8n-camfintech__*` tools loaded:

1. Create the Data Table first: `n8n_manage_datatable({ operation: 'create', name: 'camfintech_sameAs_checks', columns: [...] })`
2. Build the workflow JSON per this spec — use `mcp__n8n-camfintech__validate_workflow` before creation
3. Deploy: `n8n_create_workflow({ workflow: {...} })`
4. Test: `n8n_test_workflow({ id })` — verify all URLs return 200 today
5. Verify: read the Data Table — should have N rows, all `ok=true`
6. Activate: `n8n_update_partial_workflow({ id, operations: [{ activateWorkflow: true }] })`
7. Create the Error Workflow separately, then link it in the health check workflow's settings

### Option B — Manual (build in n8n UI)

1. Log in to https://automation.camfintech.com
2. Create the Data Table (Settings → Data Tables → New)
3. New workflow → follow the node graph above
4. Test manually before activating
5. Save + activate

### Option C — Docker-side import (large-workflow pattern from CLAUDE.md)

Only if the workflow JSON exceeds ~5 KB. For this spec (~9 nodes) MCP creation should work — CLAUDE.md notes MCP is unreliable for large imports (>5 KB), but this one sits well below that threshold.

## Test plan

Before activating:

1. **Manual trigger** the workflow (Execute Workflow button)
2. Verify the Code node extracts the expected URLs — currently `["https://www.linkedin.com/company/118224010/", "https://github.com/myownipgit/cambodia-fintech", "https://www.linkedin.com/in/william-mall/"]` (3 URLs; will be 4 when GBP wire-up lands)
3. Verify each HEAD request returns 200 today
4. Verify the IF branch takes the "false" (healthy) path — no email
5. Check the Data Table — should have 3 rows, all `ok=true`, `status=200`

**Deliberate failure test**:

1. Temporarily add a known-bad URL (e.g. `https://www.wikidata.org/wiki/Q140279044` — deleted item, guaranteed 404) to the Code node's extraction output
2. Run workflow
3. Verify: email received at info@camfintech.com; Data Table has the failure row with `ok=false, status=404`
4. Remove the test URL, run again — no email

## Monitoring the monitor

A silent workflow failure defeats the whole purpose. Two safeguards:

1. **Error Workflow** (see §Error handling) — catches n8n-side crashes
2. **Manual monthly check**: on the first Sunday of each month, verify the Data Table has ≥4 rows from the last 4 weeks. Absence = workflow stopped running. Add to a monthly Bill-actionable list.

## Extension points (future)

- **Add ProfessionalService.hasMap** to extraction once GBP Maps URL is wired
- **Add /about page fetch** to check Person.sameAs on that page too (defensive; same schema is emitted globally today)
- **Slack / Telegram alert channel** as alternative to Gmail if Bill prefers push notifications
- **Extend to check schema completeness** (e.g. warn if `Organization.sameAs` array shrinks below 2 anchors)
- **Alert on staleness**: check the Data Table for URLs that have been failing for ≥3 consecutive checks — escalate

## Related

- Incident that motivated this: 2026-06-28 Wikidata Q140279044 deletion (see [[GEO Audit 2026-07-30]] §Critical finding)
- Deploy of the Wikidata hotfix: commit `ca32875` (see [[Rewrite Project]] entry for 2026-07-30)
- OBR/KHNSIC context: [[../DPI Integration/63_OBR_Registration_and_KHNSIC_Scope]]
