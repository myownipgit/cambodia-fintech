# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a bilingual (English/Khmer) FinTech consulting website for Cambodia, built with Next.js 14 using the App Router architecture. The site focuses on Cambodia's unique Government-as-a-Platform digital infrastructure, including CamDigiKey (digital identity), Bakong (instant payments), CamDX (data exchange), and CamInvoice (mandatory invoicing system).

## Legal Entity & Corporate HQ

- **Trading name (used publicly)**: CamFinTech
- **Legal name (pending registration, NOT yet used on public site)**: CAMFINTECH CO., LTD
- **Corporate HQ — abbreviated form (used on public site until registration finalises)**: 30 Preah Norodom Boulevard, Khan Daun Penh, Phnom Penh, Kingdom of Cambodia
- **Corporate HQ — full form (internal docs only)**: 30 Preah Norodom Boulevard, 3rd floor, BRED Bank Building, Sangkat Phsar Thmey 3, Khan Daun Penh, Phnom Penh 12210, Cambodia
- **Status**: Cambodian business registration in progress. Until registration is finalised, refer to the practice as "CamFinTech" (trading name) on public materials. Do not use "Co., Ltd" suffix publicly.

## Development Commands

### Local Development
```bash
npm install          # Install dependencies
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run Next.js linter
```

## Architecture & Key Patterns

### Language System
- **State Management**: Language state (`"en" | "km"`) is managed in `app/page.tsx` using React's `useState`
- **Font Handling**: Khmer text uses Noto Sans Khmer font, toggled via the `.font-khmer` CSS class
- **Language Toggle**: Passed down from `page.tsx` to `Header.tsx` component via props
- **Bilingual Content**: All user-facing content has both English and Khmer versions using ternary operators

### Component Structure
- **Client Components**: `app/page.tsx`, `Header.tsx` marked with `"use client"` for interactivity
- **Server Components**: `layout.tsx`, `Footer.tsx`, `ServiceCard.tsx`, `UseCaseCard.tsx` are server components by default
- **Component Organization**: Shared components live in `app/components/`
- **Type Definitions**: Centralized in `app/types/index.ts`

### Styling System
- **Tailwind Configuration**: Custom color palette defined in `tailwind.config.ts`:
  - Primary: `#f4af25` (golden/yellow accent)
  - Light mode: `#f8f7f5` background, `#1c170d` text
  - Dark mode: `#221c10` background, `#f8f7f5` text
- **Dark Mode**: Uses class-based strategy (`darkMode: "class"`) with toggle in Header, persists to localStorage
- **Font Setup**: Inter (Latin) and Noto Sans Khmer fonts loaded via next/font/google in `layout.tsx`
- **Material Symbols**: Icon font loaded from Google Fonts CDN in layout head

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
4. Technical consulting for enterprises to integrate with government APIs

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

# 4. Confirm Facebook domain verification still present
curl -sS https://www.camfintech.com | grep -oE 'facebook-domain-verification[^>]*'
```

For UI changes, open the page in a browser — `curl` won't catch visual regressions.

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
- The project uses the Next.js 14 App Router (not Pages Router)
- ServiceCard and UseCaseCard are now in separate files under `app/components/`
- Types are centralized in `app/types/index.ts`
- Dark mode is enabled with localStorage persistence
- Mobile hamburger menu is implemented in Header.tsx
