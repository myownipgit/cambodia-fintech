# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a bilingual (English/Khmer) FinTech consulting website for Cambodia, built with Next.js 14 using the App Router architecture. The site focuses on Cambodia's unique Government-as-a-Platform digital infrastructure, including CamDigiKey (digital identity), Bakong (instant payments), CamDX (data exchange), and CamInvoice (mandatory invoicing system).

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
- **Production Branch**: `feature/update-homepage` (configured in Vercel)
- **Main Branch**: `main`
- **Vercel Project**: cambodia-fintech (prj_nPOSlaQ6IskxhY65Ysp6EloAtzFq)
- **Production URL**: www.camfintech.com

### Standard Workflow for Changes

When making changes to the codebase, follow this workflow:

```bash
# 1. Make your code changes (edit files as needed)

# 2. Commit changes to the current branch (usually feature/update-homepage)
git add .
git commit -m "$(cat <<'EOF'
Your commit message here

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"

# 3. Push to GitHub
git push origin feature/update-homepage

# 4. Trigger Vercel deployment via webhook
curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_nPOSlaQ6IskxhY65Ysp6EloAtzFq/IWAkYBIAKI

# 5. (Optional) Merge to main branch when ready
git checkout main
git merge feature/update-homepage
git push origin main
git checkout feature/update-homepage
```

### Automated Deployment Script

For convenience, you can run all steps in a single command:

```bash
# After making code changes, run this to commit, push, and deploy:
git add . && \
git commit -m "$(cat <<'EOF'
[Your commit message]

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)" && \
git push origin feature/update-homepage && \
curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_nPOSlaQ6IskxhY65Ysp6EloAtzFq/IWAkYBIAKI && \
echo "✓ Changes pushed and deployment triggered!"
```

### Verification Steps

After deployment (wait 1-2 minutes for build to complete):

1. **Check Deployment Status**: Visit [Vercel Dashboard](https://vercel.com/myownipgit/cambodia-fintech)
2. **Verify Production**: Visit www.camfintech.com
3. **Check Meta Tags**: Right-click → View Page Source, search for verification tags
4. **Check Analytics**: Google Analytics should be tracking with ID: G-QDZ83JQWVC
5. **Check Facebook Verification**: Look for `<meta name="facebook-domain-verification" content="9x1qhej2nne7tyd5t4w7t8hjk8wg4a" />`

### Deployment Notes

- **Deploy Hook**: The Vercel deploy hook automatically triggers builds from `feature/update-homepage` branch
- **Preview vs Production**: Deployments may initially show as "Preview" but are accessible via production URL
- **Build Time**: Typical build takes 25-35 seconds
- **Ignored Build Step**: Set to "Automatic" - Vercel decides when to rebuild based on file changes
- **Manual Redeploy**: If webhook fails, use Vercel dashboard → Click deployment → "Redeploy" button

### Troubleshooting

If deployment doesn't appear:
1. Check GitHub push was successful: `git log --oneline -1`
2. Verify webhook response shows `"state":"PENDING"` with a job ID
3. Check Vercel dashboard for new deployment (may take 30-60 seconds to appear)
4. Ensure changes were pushed to `feature/update-homepage` branch (not main)

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
