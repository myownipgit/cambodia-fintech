# FinTech Consulting Cambodia

The website of a FinTech consulting practice in Cambodia, built with Next.js 16 (React 19), TypeScript and Tailwind CSS.

The site is **English**, and that is a decision rather than an omission — see the
Language System section of `CLAUDE.md` and ADR-007. There is no i18n mechanism: no
`next-intl`, no `[locale]` segment, no dictionaries, no hreflang. The only Khmer
toggles are two local ones on `/privacy` and `/terms`, over hand-written string
pairs. **Do not machine-translate the corpus.**

**Production:** https://www.camfintech.com

## About the practice

**CamFinTech** is a Phnom Penh-based specialist consulting practice focused on Cambodia's Government-as-a-Platform (GaaP) digital financial infrastructure — Bakong, CamDigiKey, CamDX, and CamInvoice.

| | |
|---|---|
| **Founder & Managing Director** | William Mallett ([LinkedIn](https://www.linkedin.com/in/william-mall/)) |
| **Trading name** | CamFinTech |
| **Legal entity** | CAMFINTECH CO., LTD (registered — MoC 1000648818, 9 Oct 2026) |
| **Corporate HQ** | 30 Preah Norodom Boulevard, Khan Daun Penh, Phnom Penh, Kingdom of Cambodia |
| **Contact** | info@camfintech.com · +855 76 277 5645 |
| **LinkedIn (company)** | https://www.linkedin.com/company/118224010/ |
| **Registered activity scope** | KHNSIC-2015 codes 62010 · 62020 · 62090 · 70200 · 85499 |

### Registered activity scope (KHNSIC-2015)

Filed with the OBR on 30 July 2026. The wording below is the same as the public
statement on [/about](https://www.camfintech.com/about) — keep the two in step.

| Code | Scope |
|---|---|
| **62010** | Computer programming — integration development against the DPI rails |
| **62020** | Computer consultancy, systems integration, regulatory-compliance advisory |
| **62090** | IT advisory, project management, data & analytics |
| **70200** | Management consultancy, GRC, DPI integration advisory |
| **85499** | Professional training in FinTech, DPI, cybersecurity, regulatory compliance |

All activities are delivered under the fee-only, never-operate, reserved-work
discipline: CamFinTech never holds client funds, never operates a rail, and routes
reserved work to Bar-admitted counsel and licensed tax agents. The client is always
the applicant of record. 62010 is public following the 2026-08-31 reversal of the
earlier "never builds" rule (ADR-005) — scope is **integrate-only**: the firm builds
the client side of an integration and does not host or transmit client transaction
traffic.

## Features

- **Next.js 16 App Router**, React 19, TypeScript in strict mode, Tailwind CSS
- **Fully static** — every route prerenders at build time and is served from Vercel's `sin1` edge
- **Published regulatory reference** — 17 instruments, each source-linked and date-verified
- **Structured data throughout** — Organization, ProfessionalService, Person, FAQPage, Legislation, DefinedTerm, Article/TechArticle
- **Built for AI retrieval** — hand-maintained `llms.txt` and `llms-full.txt`, guarded by `npm run check:llms`; explicit AI-crawler allowlist in `robots.txt`
- **No dark mode.** Removed 2026-08-31 — the brand guide specifies no dark palette. There is no `darkMode` key, no `dark:` class and no theme toggle. Do not reintroduce one without a brand-side dark palette.

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Deployment on Vercel

**Git push does not deploy this project.** The Vercel Git integration is configured
against `main`, but the Hobby plan blocks deploys when the commit author is not a team
member, so pushes silently no-op. Deploy from the working directory instead:

```bash
npm run build          # verify before deploying
vercel --prod --yes
```

`vercel --prod` ships whatever is on disk — it does not read git state, so the branch
you are on does not affect what gets deployed. Check `git status` first.

Why Vercel at all is answered in ADR-008: it was never actually chosen (it arrived as
the Next.js vendor default in the initial commit) and was ratified retrospectively on
measured grounds. Do not migrate without one of the revisit triggers recorded there.

## Project Structure

```
cambodia-fintech/
├── app/
│   ├── components/          # shared UI — ArticleLayout, SourceList, FAQSection, JsonLd, …
│   ├── content/             # the article corpus, as typed data
│   │   ├── glossary/        # 10 · DefinedTerm
│   │   ├── learn/           # 12 · Article
│   │   ├── knowledge/       # 8  · TechArticle
│   │   ├── insights/        # 6
│   │   ├── use-cases/       # 4  · engagement scenarios, NOT case studies
│   │   ├── regulatory/      # 17 instruments — separate data model, absolute evidence bar
│   │   ├── registry.ts
│   │   └── types.ts
│   ├── about/ products/ privacy/ terms/ …
│   ├── globals.css · layout.tsx · page.tsx
├── public/                  # brand assets, llms.txt, llms-full.txt, robots.txt
├── scripts/check-llms.mjs   # content-inventory drift gate
├── .claude/RESUME_SESSION.md
└── CLAUDE.md                # read this before changing anything
```

**Read `CLAUDE.md` first.** It carries the rules that are not visible from the code:
the evidence bar for published figures, the register and cultural-fit rules for public
copy (ADR-006/007), the brand contrast constraints, and the deploy workflow.

## Technologies Used

- **Next.js 16**: React 19, App Router, Turbopack builds by default
- **TypeScript**: strict mode
- **Tailwind CSS**: semantic brand tokens only — no raw hex, no stock Tailwind colours in `app/`
- **Google Fonts**: Poppins (display) · Manrope (body) · Kantumruy Pro (Khmer) · IBM Plex Mono (data)

`npm run lint` runs `eslint .` — `next lint` was removed in Next 16, and `next build`
no longer runs ESLint, so a green build does not imply a clean lint.

## License

© 2024–2026 CamFinTech — FinTech Consulting Cambodia. All Rights Reserved.
