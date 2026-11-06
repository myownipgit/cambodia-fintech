import { ArticleContent } from '../types';

/*
 * CamInvoice correction, 2026-11-07 (targeted: CamInvoice sentences only; the
 * rest of this page is still unsourced and is left for the general pass).
 *
 * Found false or untraceable, and removed, not hedged:
 * - "Cambodia's General Department of Taxation mandates CamInvoice adoption",
 *   "the GDT's phased CamInvoice mandate", "real-time submission to the GDT
 *   system" — FALSE as to operator. MEF Prakas 075 (22 January 2025), Art. 4,
 *   makes the MEF's General Department of Digital Economy (GDDE) the secretariat
 *   that manages and operates CamInvoice. The GDT appears in none of the four
 *   MEF documents read (Prakas 075; Circulars 003, 012, 017).
 * - The rollout table and paragraph: "Large taxpayers (> $250,000) January
 *   2024 / Medium ($62,500-250,000) July 2025 / Small (< $62,500) January
 *   2026 / Micro voluntary", with business counts (~3,200 / ~8,500 / ~32,270 /
 *   ~100,000+) and compliance rates (92% / 65% / 25%). FALSE as to scope: Phase
 *   1 is business-to-government (suppliers to the budget entities of named
 *   ministries, three steps from fiscal year 2025). No turnover band, taxpayer
 *   count, compliance rate or private-sector date appears in any primary read.
 * - "issue CamInvoice-compliant electronic invoices for every transaction" —
 *   universality claim; scoped to Phase 1.
 * - CamInvoice penalties ("fines of 10-40% of the tax owed, denial of VAT
 *   input credits, suspension of business licences") — no primary.
 * - "digital signatures", "CamInvoice API ... submission, validation and
 *   status checking", "REST API + Digital Certificate" — no technical primary
 *   could be read (e-invoice.gov.kh and gdde.mef.gov.kh returned 403 on
 *   2026-11-06). Replaced with the two issuing routes the circulars describe.
 *
 * Bar for restoring any CamInvoice threshold, date, count, penalty or technical
 * specific: read in a fetched MEF/GDDE primary, recorded in `claims` with where.
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

export const complianceAsAService: ArticleContent = {
  slug: 'compliance-as-a-service',
  title: 'What is Compliance-as-a-Service for Cambodia?',
  description: 'A detailed guide to compliance-as-a-service (CaaS) in Cambodia, covering SME tax compliance burden, CamInvoice integration, automated bookkeeping, GDT reporting, the 43,970+ SMEs opportunity, and bundled accounting and compliance tools.',
  type: 'learn',
  cluster: 'investment',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-07',
  readingTime: 6,
  schema: 'Article',
  relatedSlugs: ['caminvoice', 'gdt', 'gaap'],
  lead: 'Compliance-as-a-Service (CaaS) is an emerging business model that automates tax filing, bookkeeping, and regulatory reporting for Cambodia\'s 43,970+ registered SMEs by integrating directly with government digital infrastructure. As the Ministry of Economy and Finance phases in its e-invoicing system, CamInvoice, and tax obligations move onto digital channels, SMEs face compliance work that many lack the internal capacity to manage. CaaS platforms that connect to CamInvoice, automate GDT reporting, and bundle accounting with compliance functions represent a multi-million-dollar market opportunity sitting at the intersection of Cambodia\'s Government-as-a-Platform model and the operational reality of small businesses.',
  // Claims removed 2026-08-31. This array previously carried figures attributed
  // to named institutional reports with no URL, access date or page reference.
  // A verified sample was wrong more often than not — including a Cambodian FATF
  // mutual evaluation that never took place, and citations to bodies that do not
  // exist under the names given. Restore an entry only when its figure has been
  // read in a fetched primary, on the same evidence bar as app/content/regulatory,
  // and record where it was read. See vault ADR-007.
  claims: [],
  sources: [
    { publisher: 'Cambodia Financial Intelligence Unit', label: 'Official site (home page)', url: 'https://cafiu.gov.kh', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Prakas 075 on the launch of the Cambodia E-Invoicing System (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/a57a86ff-1c53-481e-a4f0-8b32fe96b6cf/resource/e433f7a7-0bd0-4407-8d58-c5f346be20dd/download/mef_prakas-075_launching-of-cambodia-e-invoicing-system_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 003, mandatory e-invoicing, Phase 1 Step 1 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/dataset/2ff2820c-df65-4d60-aa0f-806c65d82952/resource/d77ab51b-6f54-4960-b947-ffd4a4f2a5a4/download/mef_circular-003_obligation-to-use-e-invoice_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 012, mandatory e-invoicing, Phase 1 Step 2 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/bce86ad2-6baf-456a-b49f-90c0b7b61f26/resource/e8c6b0ce-8f79-427e-a7e2-56f87c89ed1e/download/1756437973985-20250714_circular_to_6_lms_in_q3_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 017, mandatory e-invoicing, Phase 1 Step 3 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/d244f7f4-ef43-43fe-8645-d79483c9b0c3/resource/7d904664-edbe-40fe-8e76-f4b119d6a51c/download/1.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 007, mandatory e-invoicing, Phase 1 Step 4 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/9bdb6142-b119-41c4-b2ae-5bdde281a8f6/resource/549d6645-3232-4fa3-8715-a8f61c79b1f9/download/1.pdf', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-06',
  faqs: [
    { question: 'What is compliance-as-a-service in Cambodia?', answer: 'Compliance-as-a-service (CaaS) refers to cloud-based platforms that automate tax compliance, bookkeeping, and regulatory reporting for Cambodian businesses by connecting directly to government systems such as CamInvoice and the GDT\'s tax-filing channels. Instead of hiring accountants or compliance officers, SMEs subscribe to CaaS platforms that handle invoicing, VAT calculation, tax filing, and audit preparation automatically.' },
    { question: 'Why do Cambodian SMEs need compliance automation?', answer: 'Tax and invoicing obligations are moving onto digital channels, and CamInvoice is being made mandatory in phases, beginning with suppliers to government ministries. Most SMEs lack dedicated accounting staff and spend 173+ hours per year on tax compliance. CaaS platforms reduce this burden to minutes per month through automation.' },
],
  sections: [
    {
      heading: 'The SME Compliance Challenge',
      content: 'Cambodia\'s SME sector is the backbone of the national economy, contributing approximately 58% of GDP and employing over 70% of the workforce. Yet these 43,970+ registered enterprises face a growing compliance burden as the government digitizes its tax infrastructure. The World Bank estimates that Cambodian SMEs spend an average of 173 hours per year on tax compliance, above the regional average.\n\nThe compliance challenge is multifaceted. SMEs that supply the ministries covered by CamInvoice\'s first phase must issue those invoices through the system; all must calculate and file monthly VAT returns, submit annual income tax declarations, maintain accounting records per Cambodian Accounting Standards, and respond to GDT audits with complete documentation. Most SMEs have no dedicated accounting staff. The typical response -- hiring an external bookkeeper for $100-300 per month -- is both expensive relative to margins and unreliable in quality.',
    },
    {
      heading: 'What CamInvoice Mandates Mean for SMEs',
      content: 'CamInvoice, the Cambodia E-Invoicing System, was launched by the Ministry of Economy and Finance on 22 January 2025 and is operated by the MEF\'s General Department of Digital Economy. Its first phase is business-to-government: suppliers invoicing the central-level budget entities of designated ministries for public procurement must do so through the system. The MEF has added ministries in steps, beginning with the MEF and the Ministry of Environment in fiscal year 2025. A business that supplies one of those ministries registers as a member of the system and issues its e-invoices either on the CamInvoice platform or from an invoicing system registered with and connected to it.\n\nAn invoice validated by the system is recognised as an original digital record and is kept for 10 years. For a business outside the ministries named so far, the MEF\'s current circulars are the place to check for any extension of scope. For an SME that is inside it, the practical need is to produce correct invoices from the records it already keeps, without specialised technical staff.',
    },
    {
      heading: 'The CaaS Business Model',
      content: 'Compliance-as-a-Service platforms in Cambodia operate on a subscription model, typically charging $30-150 per month depending on transaction volume and service tier. The core value proposition is simple: the platform handles e-invoicing, VAT and tax reporting obligations automatically, while the SME owner focuses on running their business.\n\nA typical CaaS platform provides five integrated functions. First, issuing e-invoices through CamInvoice where the business is within its scope. Second, automated VAT calculation and monthly return preparation. Third, real-time bookkeeping from invoice and payment data. Fourth, annual tax return compilation. Fifth, audit-ready document management. The most advanced platforms also integrate bank account feeds via Bakong-connected institutions, reconcile payments automatically, and provide dashboards showing tax liability in real-time. Revenue scales with SME adoption, and retention is high because switching costs increase as historical data accumulates.',
    },
    {
      heading: 'Technical Architecture for CaaS Platforms',
      content: 'Building a compliance-as-a-service platform for Cambodia requires deep integration with multiple government APIs. CamInvoice accepts e-invoices created on its own platform or issued from an invoicing system registered with and connected to it, and validates each one. The GDT e-filing system accepts monthly and annual tax returns. Bank APIs via Bakong-connected institutions provide transaction data for reconciliation.\n\nThe technical stack must handle dual-currency accounting (KHR and USD), real-time exchange rate application per NBC daily rates, Cambodian Accounting Standards (CAS) chart of accounts mapping, and secure certificate-based authentication with government systems. Data residency requirements mandate that all taxpayer data remain on servers physically located in Cambodia. A shared API integration and government-connectivity layer is what separates a 3-6 month CaaS build from a 12-18 month one.',
      table: {
        caption: 'CaaS Platform Technical Requirements',
        headers: ['Component', 'Government System', 'Integration Method', 'Key Challenge'],
        rows: [
          ['Invoice Submission', 'CamInvoice', 'Invoicing system registered with and connected to CamInvoice', 'Validation, error handling'],
          ['Tax Filing', 'GDT e-Filing Portal', 'API + Form Submission', 'Multi-tax type calculations'],
          ['Payment Reconciliation', 'Bakong / Bank APIs', 'Open Banking APIs', 'Dual-currency matching'],
          ['Identity Verification', 'CamDigiKey', 'OAuth 2.0 / OIDC', 'Taxpayer identity binding'],
          ['Audit Document Storage', 'Local Data Center', 'Encrypted Storage', 'Data residency compliance'],
        ],
      },
    },
    {
      heading: 'Bundled Accounting and Compliance Tools',
      content: 'The most compelling CaaS products bundle accounting and compliance into a single workflow. Rather than treating compliance as an afterthought bolted onto separate accounting software, integrated platforms design the accounting process around compliance outputs. Every transaction entered generates the correct invoice (through CamInvoice where the business is within its scope), updates the VAT ledger, and feeds into the annual tax return simultaneously.\n\nThis approach eliminates the reconciliation headaches that plague traditional accounting-then-compliance workflows. It also enables value-added services: real-time profit and loss statements, cash flow forecasting, inventory valuation, and payroll processing with National Social Security Fund (NSSF) contribution calculations. For SME owners, the platform becomes their complete back-office finance function. For investors, the bundled model dramatically increases customer lifetime value and creates a data moat that can underwrite additional financial products like working capital loans.',
    },
    {
      heading: 'Market Sizing and Revenue Potential',
      content: 'The addressable market for CaaS in Cambodia is straightforward to calculate. With 43,970+ registered SMEs and an average monthly subscription of $50-80, the core compliance market represents $26-42 million in annual recurring revenue. Adding micro-enterprises that voluntarily adopt digital invoicing, the market could reach $60-80 million at maturity.\n\nBeyond subscription revenue, CaaS platforms unlock adjacent monetization opportunities. Embedded lending using compliance data for credit scoring. Embedded insurance for business interruption and trade credit. Payroll processing with NSSF integration. B2B marketplace connectivity for buyer-supplier matching. The compliance data generated by these platforms is uniquely valuable because it is government-verified, current, and comprehensive -- exactly the data that banks and insurers need to underwrite SME financial products.',
    },
    {
      heading: 'Competitive Landscape',
      content: 'Cambodia\'s CaaS market is in its nascent stage, with no dominant player yet established. Existing solutions include manual bookkeeping firms (fragmented, non-digital), generic accounting software like QuickBooks and Xero (not localized for Cambodia\'s tax system), and a handful of early-stage Cambodian startups building CamInvoice-native platforms.\n\nThe competitive dynamics favor purpose-built platforms over adapted foreign software. Cambodia\'s dual-currency accounting requirements, unique tax code provisions, CamInvoice integration requirements, and Khmer-language interface requirements create localization barriers that global players are unlikely to prioritize for a market of Cambodia\'s size. First movers who establish CamInvoice connections, build SME distribution channels, and accumulate compliance data histories will have significant defensibility against later entrants.',
    },
],
};
