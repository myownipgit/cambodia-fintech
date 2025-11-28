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
- **Server Components**: `layout.tsx`, `Footer.tsx` are server components by default
- **Component Organization**: Shared components live in `app/components/`
- **Inline Components**: `ServiceCard` and `UseCaseCard` are defined in `page.tsx` as they're page-specific

### Styling System
- **Tailwind Configuration**: Custom color palette defined in `tailwind.config.ts`:
  - Primary: `#f4af25` (golden/yellow accent)
  - Light mode: `#f8f7f5` background, `#1c170d` text
  - Dark mode: `#221c10` background, `#f8f7f5` text
- **Dark Mode**: Uses class-based strategy (`darkMode: "class"`) but currently fixed to light mode
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

## Important Notes

- The main page is a single-page application with anchor links for navigation
- All sections are contained in `app/page.tsx` (no separate route pages yet)
- TypeScript is in strict mode
- The project uses the Next.js 14 App Router (not Pages Router)
