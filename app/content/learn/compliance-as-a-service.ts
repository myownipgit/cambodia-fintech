import { ArticleContent } from '../types';

/*
 * Figure pass, 2026-11-14. Kept, each read in a primary: the CamInvoice
 * paragraph (MEF Prakas 075 and Circulars 003/012/017/007, see the 2026-11-07
 * note below); the CamInvoice API facts (developer documentation via Internet
 * Archive, as cited in knowledge/caminvoice-technical-compliance.ts); and the
 * GDT's online services (tax.gov.kh, as cited in glossary/gdt.ts).
 *
 * Removed, not hedged, so nobody restores these from git:
 * - "Data residency requirements mandate that all taxpayer data remain on
 *   servers physically located in Cambodia", and the "Local Data Center /
 *   data residency compliance" table row. No instrument read establishes a
 *   data residency rule for taxpayer data.
 * - "43,970+ registered SMEs" (lead, description, two sections), "58% of GDP",
 *   "over 70% of the workforce", "173 hours per year on tax compliance"
 *   (attributed to the World Bank without a reference). None read in a primary.
 * - Price and market figures: bookkeeper "$100-300 per month", subscriptions
 *   "$30-150" and "$50-80", "$26-42 million ARR", "$60-80 million at maturity",
 *   "multi-million-dollar market opportunity", "3-6 month vs 12-18 month build".
 * - "GDT e-filing ... API + Form Submission", "Open Banking APIs" via Bakong,
 *   CamDigiKey "OAuth 2.0 / OIDC", "certificate-based authentication with
 *   government systems", "NBC daily rates", "Cambodian Accounting Standards
 *   (CAS)". No primary read for this page states any of them.
 * - "no dominant player", "a handful of early-stage Cambodian startups",
 *   QuickBooks and Xero "not localized", "retention is high", "data moat":
 *   unsourced statements about a market and named products.
 * - The CAFIU home page as a source: nothing on this page draws on it.
 *
 * Bar for restoring: read in a fetched primary, recorded in `claims` or here
 * with where it was read.
 *
 * Earlier note, 2026-11-07 (CamInvoice correction), kept for its record:
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
  description: 'What compliance-as-a-service means for Cambodian businesses: how a platform connects to CamInvoice and the GDT\'s online services, what it can and cannot take off a business\'s hands, and what to check before relying on one.',
  type: 'learn',
  cluster: 'investment',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-14',
  readingTime: 5,
  schema: 'Article',
  relatedSlugs: ['caminvoice', 'gdt', 'gaap'],
  lead: 'Compliance-as-a-service (CaaS) is software, usually sold by subscription, that turns a business\'s day-to-day records into the invoices, returns and filings the state requires. In Cambodia the model is shaped by two sets of government systems. CamInvoice, the Ministry of Economy and Finance\'s e-invoicing system launched on 22 January 2025, is being made mandatory in phases, beginning with suppliers to designated ministries. The General Department of Taxation (GDT) runs tax filing and payment online. A CaaS platform is useful to the extent it connects to both correctly and keeps the business\'s own records in order; the obligations, and the responsibility for meeting them, stay with the business.',
  // Claims removed 2026-08-31. This array previously carried figures attributed
  // to named institutional reports with no URL, access date or page reference.
  // Restore an entry only when its figure has been read in a fetched primary,
  // on the same evidence bar as app/content/regulatory, and record where.
  claims: [
    { stat: 'A CamInvoice user generates an XML e-invoice in its own system or in the free Merchant Portal and sends it to CamInvoice via the API, where it is validated; supported document types are INVOICE, CREDIT_NOTE and DEBIT_NOTE, and API access uses OAuth 2.0 with access tokens that expire after 900 seconds.', source: 'CamInvoice developer documentation: Introduction, "How it works" (Internet Archive snapshot of 18 June 2024); Get New Access Token and Document Type (snapshots of 22 December 2025)', year: '2025', url: 'https://web.archive.org/web/20251222130429/https://developer.e-invoice.gov.kh/api-reference/authentication' },
  ],
  sources: [
    { publisher: 'Ministry of Economy and Finance', label: 'Prakas 075 on the launch of the Cambodia E-Invoicing System (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/a57a86ff-1c53-481e-a4f0-8b32fe96b6cf/resource/e433f7a7-0bd0-4407-8d58-c5f346be20dd/download/mef_prakas-075_launching-of-cambodia-e-invoicing-system_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 003, mandatory e-invoicing, Phase 1 Step 1 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/dataset/2ff2820c-df65-4d60-aa0f-806c65d82952/resource/d77ab51b-6f54-4960-b947-ffd4a4f2a5a4/download/mef_circular-003_obligation-to-use-e-invoice_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 012, mandatory e-invoicing, Phase 1 Step 2 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/bce86ad2-6baf-456a-b49f-90c0b7b61f26/resource/e8c6b0ce-8f79-427e-a7e2-56f87c89ed1e/download/1756437973985-20250714_circular_to_6_lms_in_q3_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 017, mandatory e-invoicing, Phase 1 Step 3 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/d244f7f4-ef43-43fe-8645-d79483c9b0c3/resource/7d904664-edbe-40fe-8e76-f4b119d6a51c/download/1.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 007, mandatory e-invoicing, Phase 1 Step 4 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/9bdb6142-b119-41c4-b2ae-5bdde281a8f6/resource/549d6645-3232-4fa3-8715-a8f61c79b1f9/download/1.pdf', tier: 'primary' },
    { publisher: 'CamInvoice', label: 'Developer documentation, Introduction (Internet Archive snapshot, 18 June 2024)', url: 'https://web.archive.org/web/20240618030344/https://developer.e-invoice.gov.kh/', tier: 'primary' },
    { publisher: 'CamInvoice', label: 'Developer documentation, Get New Access Token (Internet Archive snapshot, 22 December 2025)', url: 'https://web.archive.org/web/20251222130429/https://developer.e-invoice.gov.kh/api-reference/authentication', tier: 'primary' },
    { publisher: 'General Department of Taxation', label: 'Official site (home page)', url: 'https://www.tax.gov.kh/en', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-14',
  faqs: [
    { question: 'What is compliance-as-a-service in Cambodia?', answer: 'Software that produces a business\'s statutory outputs from its everyday records: e-invoices through CamInvoice where the business is within its scope, and the figures for tax returns filed through the GDT\'s online services. It is a tool, not an agent: the business remains the taxpayer and the invoice issuer, and reserved work such as acting as a tax agent belongs with a licensed tax agent.' },
    { question: 'Does every Cambodian business have to use CamInvoice?', answer: 'Not yet. CamInvoice\'s first phase is business-to-government: suppliers invoicing the budget entities of designated ministries must issue those invoices through the system, and the Ministry of Economy and Finance has added ministries in steps since fiscal year 2025. A business outside the ministries named so far should check the MEF\'s current circulars for any extension of scope.' },
    { question: 'How does a CaaS platform connect to CamInvoice?', answer: 'Through the CamInvoice API, as an invoicing system registered with and connected to CamInvoice. CamInvoice\'s developer documentation describes XML e-invoices sent through the API and validated by the system, three document types (invoice, credit note and debit note), and OAuth 2.0 authentication with credentials obtained from CamInvoice support. A business can also issue invoices directly on CamInvoice\'s own platform.' },
  ],
  sections: [
    {
      heading: 'What a Compliance Platform Does',
      content: 'A compliance platform sits between a business\'s operations and the state\'s systems. Sales, purchases and payments go in; correctly formed invoices, ledgers and the figures for tax returns come out. The value is not in any single document but in consistency: the invoice issued, the VAT ledger and the annual return are all produced from the same record, so they agree with each other.\n\nFor a small business without accounting staff, that consistency is most of the work. The obligations themselves, such as issuing invoices, filing and paying tax and keeping records, are set by the MEF and the GDT, and a platform does not change them. It changes how much manual effort they take, and how likely a mistake is.',
    },
    {
      heading: 'What CamInvoice Mandates Mean for SMEs',
      content: 'CamInvoice, the Cambodia E-Invoicing System, was launched by the Ministry of Economy and Finance on 22 January 2025 and is operated by the MEF\'s General Department of Digital Economy. Its first phase is business-to-government: suppliers invoicing the central-level budget entities of designated ministries for public procurement must do so through the system. The MEF has added ministries in steps, beginning with the MEF and the Ministry of Environment in fiscal year 2025. A business that supplies one of those ministries registers as a member of the system and issues its e-invoices either on the CamInvoice platform or from an invoicing system registered with and connected to it.\n\nAn invoice validated by the system is recognised as an original digital record and is kept for 10 years. For a business outside the ministries named so far, the MEF\'s current circulars are the place to check for any extension of scope. For an SME that is inside it, the practical need is to produce correct invoices from the records it already keeps, without specialised technical staff.',
    },
    {
      heading: 'Connecting to CamInvoice and the GDT',
      content: 'CamInvoice publishes developer documentation for systems that issue invoices through it. A connected system generates an XML e-invoice and sends it through the API. CamInvoice validates it, and the documented checks include the XML structure, the invoice fields and the GDT\'s rules. The system supports invoices, credit notes and debit notes. API access uses OAuth 2.0: a client ID and secret are obtained from CamInvoice support, and access tokens expire after 900 seconds, so a platform must refresh them as part of normal operation.\n\nTax filing is a separate system. The GDT\'s website lists an e-Tax Portal, e-Filing for tax returns, e-Payment for paying tax, and registration services. A platform that prepares returns has to produce figures that match what the business files there. Which parts of that filing can be automated, and how, is a question for the GDT\'s current services rather than an assumption.',
      table: {
        caption: 'What a compliance platform connects to',
        headers: ['Obligation', 'Government system', 'What the record supports'],
        rows: [
          ['E-invoices (within CamInvoice\'s scope)', 'CamInvoice (MEF, operated by the GDDE)', 'XML e-invoices through the API or on the platform; OAuth 2.0; invoice, credit note and debit note'],
          ['Tax returns', 'GDT e-Filing', 'Listed on the GDT\'s website as an online service'],
          ['Tax payment', 'GDT e-Payment', 'Listed on the GDT\'s website as an online service'],
          ['Validated invoice records', 'CamInvoice', 'Recognised as original digital records and kept for 10 years (Prakas 075)'],
        ],
      },
    },
    {
      heading: 'Choosing or Building a Platform',
      content: 'Four questions separate a platform that helps from one that adds risk. First, is it registered with and connected to CamInvoice, or does it only produce documents a person must re-enter? Second, does it handle both Khmer riel and US dollar amounts, since payments in Cambodia move in both currencies and Bakong itself settles in both? Third, can the business export its own records in full, so that the data is not held hostage to the subscription? Fourth, who is responsible for what: the platform for producing correct outputs, the business for what it issues and files, and a licensed tax agent for any work reserved to one.\n\nWhere a platform holds a business\'s invoices and accounts, data protection and access controls matter as much as features. A business should ask where its data is stored, who can see it, and what happens to it if the subscription ends, and check the answers against current Cambodian law rather than a vendor\'s summary of it.',
    },
    {
      heading: 'Where the Model Goes Next',
      content: 'The direction of travel is set by the state\'s own systems. CamInvoice\'s scope has grown ministry by ministry since 2025, and each step brings more suppliers inside it. Tax filing and payment are already online. A business whose invoicing and accounting are produced from one consistent record is better placed for each extension than one that will have to retrofit.\n\nThe same records can support more than compliance: accurate, current books are what a lender or insurer asks for. How far that goes depends on decisions by the businesses that hold the data, and by the institutions that would rely on it, rather than on the platform alone.',
    },
  ],
};
