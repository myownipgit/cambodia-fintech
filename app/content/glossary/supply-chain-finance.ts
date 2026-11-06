import { ArticleContent } from '../types';

/*
 * CamInvoice correction, 2026-11-07 (targeted: CamInvoice sentences, rows and
 * FAQ answers only; other figures on this page are unsourced and left for the
 * general pass). Found false or untraceable, removed, not hedged:
 * - CamInvoice attributed to the General Department of Taxation ("GDT-verified",
 *   "the GDT clears every invoice", "administered by the GDT", "the GDT's system
 *   ... returns a digitally signed tax stamp") — FALSE. MEF Prakas 075 (22
 *   January 2025), Art. 4: the MEF's General Department of Digital Economy
 *   (GDDE) manages and operates the system. The GDT appears in none of the four
 *   MEF documents read (Prakas 075; Circulars 003, 012, 017).
 * - "a government-verified, tamper-proof record of every B2B transaction" —
 *   FALSE as to scope. Phase 1 is business-to-government: invoices from
 *   suppliers to the budget entities of named ministries, three steps from
 *   fiscal year 2025. No primary sets a private-sector B2B scope or date.
 * - A central registry of pledged invoices, "prevents double financing",
 *   buyer acceptance, delivery confirmation, financiers querying CamInvoice
 *   (directly or "through CamDX"), a "cryptographic reference" and a "digital
 *   stamp" — none described in any primary read; no technical primary could be
 *   read (e-invoice.gov.kh and gdde.mef.gov.kh returned 403 on 2026-11-06).
 * What the invoice-financing argument may rest on: Prakas 075 Art. 6 — a
 * validated invoice is an original digital record with legal effect, stored 10
 * years — scoped to what Phase 1 covers.
 * - "CamInvoice will make [garment] trade flow visible and verifiable for the
 *   first time" — no primary puts that trade in scope.
 * Bar for restoring: read in a fetched MEF/GDDE primary.
 *
 * Updated 2026-11-07: MEF Circular 007 (signed 2026, read from the Khmer
 * original) adds Phase 1, Step 4 - 14 further ministries and institutions.
 * Phase 1 is no longer 'three steps'; do not reintroduce a fixed count.
 * Also later on 2026-11-07: CamInvoice's own developer documentation WAS read,
 * from Internet Archive snapshots (see knowledge/caminvoice-technical-compliance.ts
 * for URLs), so any '403 / no technical primary' note above is superseded. It
 * supports XML e-invoices in UBL format (no version stated), OAuth 2.0, and the
 * INVOICE / CREDIT_NOTE / DEBIT_NOTE types. It does NOT support 'UBL 2.1',
 * a 'clearance model', a 'digital tax stamp' or the GDT operating the system.
 */

export const supplyChainFinance: ArticleContent = {
  slug: 'supply-chain-finance',
  title: 'What is Supply Chain Finance in Cambodia?',
  description: 'Supply chain finance in Cambodia can draw on invoices validated by CamInvoice, where the system covers them, and on Bakong instant settlement, opening trade finance opportunities for SMEs.',
  type: 'glossary',
  cluster: 'investment',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-07',
  readingTime: 3,
  schema: 'DefinedTerm',
  relatedSlugs: ['caminvoice', 'bakong', 'embedded-insurance'],
  lead: 'Supply chain finance (SCF) in Cambodia refers to the set of financial products, including invoice financing, factoring, and reverse factoring, that can draw on invoices validated by CamInvoice, where the system covers them, and on Bakong instant settlement to provide working capital to businesses within supply chains.',
  // Claims removed 2026-08-31. This array previously carried figures attributed
  // to named institutional reports with no URL, access date or page reference.
  // A verified sample was wrong more often than not — including a Cambodian FATF
  // mutual evaluation that never took place, and citations to bodies that do not
  // exist under the names given. Restore an entry only when its figure has been
  // read in a fetched primary, on the same evidence bar as app/content/regulatory,
  // and record where it was read. See vault ADR-007.
  claims: [],
  sources: [
    { publisher: 'Ministry of Economy and Finance', label: 'Prakas 075 on the launch of the Cambodia E-Invoicing System (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/a57a86ff-1c53-481e-a4f0-8b32fe96b6cf/resource/e433f7a7-0bd0-4407-8d58-c5f346be20dd/download/mef_prakas-075_launching-of-cambodia-e-invoicing-system_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 003, mandatory e-invoicing, Phase 1 Step 1 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/dataset/2ff2820c-df65-4d60-aa0f-806c65d82952/resource/d77ab51b-6f54-4960-b947-ffd4a4f2a5a4/download/mef_circular-003_obligation-to-use-e-invoice_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 012, mandatory e-invoicing, Phase 1 Step 2 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/bce86ad2-6baf-456a-b49f-90c0b7b61f26/resource/e8c6b0ce-8f79-427e-a7e2-56f87c89ed1e/download/1756437973985-20250714_circular_to_6_lms_in_q3_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 017, mandatory e-invoicing, Phase 1 Step 3 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/d244f7f4-ef43-43fe-8645-d79483c9b0c3/resource/7d904664-edbe-40fe-8e76-f4b119d6a51c/download/1.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 007, mandatory e-invoicing, Phase 1 Step 4 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/9bdb6142-b119-41c4-b2ae-5bdde281a8f6/resource/549d6645-3232-4fa3-8715-a8f61c79b1f9/download/1.pdf', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-06',
  faqs: [
    { question: 'What is supply chain finance and how does it work in Cambodia?', answer: 'Supply chain finance is a set of financing techniques that optimize cash flow within supply chains. In Cambodia, where an invoice falls within CamInvoice\'s scope — in its first phase, invoices from suppliers to designated government ministries — the supplier issues it through the system, and a financial institution can advance payment to the supplier at a discount against it. Under Ministry of Economy and Finance Prakas 075, an invoice the system has validated is recognised as an original digital record and kept for 10 years, which gives the financier a firmer basis for confirming that the receivable is genuine. When the buyer pays at invoice maturity, the financial institution collects the full amount.' },
    { question: 'Why does CamInvoice make supply chain finance viable in Cambodia?', answer: 'Invoice-based financing depends on a lender being able to rely on three things: that the invoice is genuine, that it has not been altered, and that it is not already pledged to another lender. CamInvoice bears on the first two. Each invoice it validates is given an identifier and, under Ministry of Economy and Finance Prakas 075, recognised as an original digital record with legal effect, kept in digital form for 10 years. The MEF documents reviewed do not describe a register of pledged invoices, so checking for duplicate financing remains the financier\'s own work. In its first phase the system covers invoices from suppliers to designated government ministries, so the receivables it validates today are receivables from the state.' },
    { question: 'What returns can investors expect from Cambodia supply chain finance?', answer: 'Supply chain finance in Cambodia offers attractive risk-adjusted returns due to the combination of high SME financing demand, relatively high interest rate environment (12-18% for SME lending), and the firmer documentary basis that CamInvoice-validated invoices give where they are available. Early movers building platforms at the intersection of CamInvoice data and Bakong settlement infrastructure are positioned to capture significant market share. CamFinTech provides fee-only investor advisory on market sizing, risk analysis, and the regulatory approval-navigation a platform operator faces — we never operate a lending rail or hold client funds.' },
  ],
  sections: [
    {
      heading: 'How CamInvoice Enables Supply Chain Finance',
      content: 'CamInvoice changes the documentary basis for trade finance where it applies. Lenders financing invoices face three risks: invoice fraud (fake invoices), double financing (the same invoice pledged to more than one lender), and dispute risk (the buyer says the goods were not delivered). Each has made invoice-based lending expensive or impossible for SMEs.\n\nAn invoice issued through CamInvoice is validated by the system and given an identifier, and Ministry of Economy and Finance Prakas 075 recognises it as an original digital record with legal effect, kept in digital form for 10 years. That bears most directly on the first risk. The MEF documents reviewed do not describe a register of pledged invoices or any confirmation of delivery, so the second and third risks remain for the financier and the buyer to manage. The system\'s first phase covers invoices from suppliers to the budget entities of designated ministries, so the receivables it validates today are receivables from government; for any wider scope, the MEF\'s current circulars are the place to check.',
    },
    {
      heading: 'SCF Product Types for the Cambodia Market',
      content: 'Several supply chain finance products are particularly well-suited to Cambodia\'s market structure and GaaP infrastructure. Each product addresses a different cash flow challenge within supply chains and leverages CamInvoice data in distinct ways.\n\nThe most immediate opportunity is receivables financing, where suppliers sell CamInvoice-validated receivables to lenders at a discount for immediate cash. Reverse factoring, where a large buyer\'s creditworthiness supports financing for its smaller suppliers, is also compelling given Cambodia\'s concentrated buyer markets in garments, agriculture, and construction.',
      table: {
        caption: 'Supply Chain Finance Products Enabled by CamInvoice',
        headers: ['Product', 'How It Works', 'CamInvoice Role', 'Target Segment'],
        rows: [
          ['Invoice Discounting', 'Supplier sells receivable at discount for immediate cash', 'Validated invoice is an original digital record', 'SME suppliers with 30-90 day terms'],
          ['Reverse Factoring', 'Buyer\'s bank finances suppliers against approved invoices', 'Records the validated invoice; buyer approval is separate', 'Large buyer supply chains'],
          ['Dynamic Discounting', 'Buyer offers early payment in exchange for discount', 'Validated invoice data for automation', 'Cash-rich buyers, cost-sensitive suppliers'],
          ['Distributor Finance', 'Lender finances distributor purchases from manufacturer', 'Validates invoices within its scope', 'FMCG and pharmaceutical distribution'],
        ],
      },
    },
    {
      heading: 'Market Opportunity and Investment Thesis',
      content: 'The supply chain finance opportunity in Cambodia is driven by a convergence of structural factors: a large SME financing gap estimated at over $3 billion annually, a formalizing economy in which CamInvoice, phased in from government procurement, is creating validated invoice records, and modern payment rails via Bakong that enable instant disbursement and collection. These factors create conditions for SCF platform growth that does not exist in markets without integrated digital infrastructure.\n\nThe garment sector alone, which accounts for approximately 30% of Cambodia\'s exports, generates billions in annual invoiced trade between factories, material suppliers, and international buyers.',
    },
    {
      heading: 'Strategic Advisory with CamFinTech',
      content: 'CamFinTech provides fee-only strategic advisory for investors and financial institutions entering Cambodia\'s supply chain finance market. Our services include market sizing and opportunity assessment, regulatory approval-navigation for NBC lending licence requirements, the compliance architecture that an SCF programme must satisfy, and partnership facilitation with Cambodian banks and anchor buyers.\n\nFor existing financial institutions, we scope SCF programme design that draws on CamInvoice-validated receivables and Bakong settlement, and coordinate the technical build with accredited Service Providers. For technology investors, we provide due diligence on SCF platform opportunities. CamFinTech never operates a lending rail, never holds client funds, and never advances credit on our own balance sheet.',
    },
  ],
};
