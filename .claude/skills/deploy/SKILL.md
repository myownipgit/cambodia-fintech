---
name: deploy
description: Deploy Next.js changes to Vercel production. Use when asked to deploy, push to production, commit and deploy, or trigger deployment. Commits changes, pushes to feature/update-homepage, triggers Vercel webhook, and updates session recovery.
---

# Deploy to Vercel

Automated deployment workflow for the Cambodia FinTech Next.js project.

## Workflow

When the user asks to deploy, follow these steps:

### Step 1: Check for Changes
```bash
git status
git diff --stat
```

If there are no changes, inform the user and skip deployment.

### Step 2: Build Verification
Run a quick build to ensure no errors:
```bash
npm run build
```

If the build fails, stop and fix the issues before deploying.

### Step 3: Commit Changes
Stage and commit with a descriptive message:
```bash
git add .
git commit -m "$(cat <<'EOF'
[Description of changes]

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

### Step 4: Push to Remote
Push to the feature branch (NOT main):
```bash
git push origin feature/update-homepage
```

### Step 5: Trigger Vercel Deployment
```bash
curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_nPOSlaQ6IskxhY65Ysp6EloAtzFq/IWAkYBIAKI
```

Expected response: `{"job":{"id":"...","state":"PENDING",...}}`

### Step 6: Update Session Recovery
Update `.claude/RESUME_SESSION.md` with:
- New commit hash
- Deployment status
- Updated timestamp

### Step 7: Report Status
Provide the user with:
- Commit hash
- Deployment job ID
- Link to Vercel dashboard: https://vercel.com/myownipgit/cambodia-fintech
- Production URL: https://www.camfintech.com

## Quick Deploy (No Changes)
If user just wants to trigger a redeploy without new changes:
```bash
curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_nPOSlaQ6IskxhY65Ysp6EloAtzFq/IWAkYBIAKI
```

## Merge to Main
If user also wants to merge to main after deploying:
```bash
git checkout main
git merge feature/update-homepage
git push origin main
git checkout feature/update-homepage
```

## Troubleshooting

If deployment fails:
1. Check `git log --oneline -1` to verify push succeeded
2. Check webhook response for errors
3. Visit Vercel dashboard to manually redeploy
4. Ensure on `feature/update-homepage` branch

## Important
- Build typically takes 25-35 seconds
- Always verify build passes before deploying
- Never force push to main
- Update RESUME_SESSION.md after every deployment
