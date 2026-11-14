import { ArticleContent } from '../types';

/*
 * Register fix, 2026-11-15 (ADR-005/006/011): the foreign-fintech FAQ said
 *   CamFinTech "navigates the NBC licensing pathway" (agency over an approval),
 *   "coordinates any technical build with accredited Service Providers" (no
 *   such relationship), listed "Payment Service Provider, Electronic Money
 *   Issuer" licence categories (the PSI Prakas record has one licence, ADR-011)
 *   and an NBC sandbox (no instrument read establishes one). Replaced.
 *
 * 2026-11-08 register sweep (ADR-005/006). The firm section and FAQ lines
 * here said CamFinTech "navigates the approval", "keeps them approved",
 * provides "approval-navigation", and that the build "is coordinated with
 * accredited Service Providers"; some also claimed NBC liaison, regulatory
 * goodwill, banking partners or partnership facilitation. Removed: the
 * approval decision is the operator's or regulator's, the client is the
 * applicant of record, the firm builds the client side itself (ADR-005), and
 * no partner relationship exists. Do not reintroduce any of these phrasings.
 */
export const nbc: ArticleContent = {
  slug: 'nbc',
  title: 'What is the National Bank of Cambodia?',
  description: 'The National Bank of Cambodia (NBC) is Cambodia\'s central bank, operating the Bakong CBDC, regulating financial institutions, and managing the FinTech regulatory sandbox.',
  type: 'glossary',
  cluster: 'compliance',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-15',
  readingTime: 3,
  schema: 'DefinedTerm',
  relatedSlugs: ['bakong', 'khqr', 'gdt'],
  relatedInstruments: ['prakas-b14-017-161', 'prakas-b7-024-735', 'law-on-banking'],
  lead: 'The National Bank of Cambodia (NBC) is Cambodia\'s central bank responsible for monetary policy, financial institution supervision, and payment system regulation. The NBC operates the Bakong CBDC and KHQR payment infrastructure, and administers the FinTech Regulatory Sandbox that governs innovation in Cambodia\'s financial services sector.',
  // Claims removed 2026-08-31. This array previously carried figures attributed
  // to named institutional reports with no URL, access date or page reference.
  // A verified sample was wrong more often than not — including a Cambodian FATF
  // mutual evaluation that never took place, and citations to bodies that do not
  // exist under the names given. Restore an entry only when its figure has been
  // read in a fetched primary, on the same evidence bar as app/content/regulatory,
  // and record where it was read. See vault ADR-007.
  claims: [],
  sources: [
    { publisher: 'Cambodia National Trade Repository', label: 'Prakas on the Management of Payment Service Institution, official record', url: 'https://cambodiantr.gov.kh/en/document/?title=prakas-on-the-management-of-payment-service-institution', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Annual Report on the Payment System in Cambodia 2024 (Khmer, PDF, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Official site (home page)', url: 'https://www.nbc.gov.kh', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-04',
  faqs: [
    { question: 'What does the National Bank of Cambodia regulate?', answer: 'The NBC regulates all financial institutions in Cambodia including commercial banks, specialized banks, microfinance deposit-taking institutions, microfinance institutions, payment service providers, and electronic money issuers. It also regulates the Bakong payment system, sets KHQR technical standards, administers the FinTech regulatory sandbox, and manages Cambodia\'s monetary policy including the exchange rate stability between KHR and USD.' },
    { question: 'What is the NBC FinTech regulatory sandbox?', answer: 'The NBC FinTech Regulatory Sandbox is a controlled testing environment where innovative financial service providers can trial new products under NBC supervision with relaxed regulatory requirements. Companies accepted into the sandbox operate under temporary conditions that allow them to test business models, technology, and consumer response before applying for a full license. The sandbox covers areas including digital lending, insurance technology, and payment innovations.' },
    { question: 'How does NBC licensing affect foreign fintech companies?', answer: 'Foreign fintech companies must obtain appropriate NBC licenses to operate financial services in Cambodia. A firm providing payment services needs a payment service institution licence under NBC Prakas B14-017-161, which provides for one licence rather than categories; specialized banks and other institutions are licensed under their own instruments. CamFinTech prepares the licensing strategy and the compliance programme that supports an application, and builds the client side of any integration. The client is the applicant of record, and the licensing decision is the NBC\'s.' },
  ],
  sections: [
    {
      heading: 'NBC\'s Role in Cambodia\'s Digital Economy',
      content: 'The National Bank of Cambodia has positioned itself as one of the most forward-looking central banks in Southeast Asia. Beyond traditional monetary policy and banking supervision, the NBC has taken direct responsibility for building Cambodia\'s payment infrastructure through Bakong and KHQR.\n\nThis dual role as both regulator and infrastructure operator is intentional. By building Bakong as a public good rather than leaving payment infrastructure to private competition, the NBC ensures universal interoperability and prevents market fragmentation. The NBC also actively promotes financial inclusion through policies that encourage mobile banking, agent banking, and digital payment adoption in rural areas.',
    },
    {
      heading: 'Regulatory Framework and Licensing',
      content: 'The NBC maintains a tiered licensing framework that governs different categories of financial service providers. Each license type carries specific capital requirements, reporting obligations, technology standards, and consumer protection mandates. The framework has evolved significantly to accommodate digital business models while maintaining systemic stability.\n\nFor enterprises entering Cambodia\'s financial services market, understanding the NBC licensing landscape is critical. Choosing the wrong license category can result in regulatory delays, while underestimating compliance requirements risks enforcement action. The NBC has increased its supervisory capacity significantly in recent years, with dedicated teams for digital finance oversight.',
      // Capital thresholds removed 2026-11-04. The site carried three mutually
      // contradictory sets of NBC minimum-capital figures (PSP variously $500,000,
      // $1,000,000 and ~USD 250,000), none traceable to a fetched source. CLAUDE.md
      // excludes capital thresholds, licence tiers and fees from a secondary
      // aggregator site-wide. Restore a figure only when it has been read in an
      // issuer's instrument or stated by a law firm, on the app/content/regulatory
      // evidence bar, and record where it was read.
      table: {
        caption: 'NBC Financial Service License Categories',
        headers: ['License Type', 'Key Requirements', 'Typical Applicants'],
        rows: [
          ['Commercial Bank', 'Full prudential regulation, deposit insurance', 'Large domestic and foreign banks'],
          ['Specialized Bank', 'Limited banking activities, sector focus', 'Niche lenders, digital banks'],
          ['MFI (Deposit-taking)', 'Microfinance focus, rural coverage mandates', 'Microfinance operators'],
          ['Payment Service Institution', 'Payment services and electronic money, Bakong connectivity', 'Fintech companies, processors, mobile money operators'],
        ],
      },
    },
    {
      heading: 'FinTech Sandbox and Innovation Policy',
      content: 'The NBC FinTech Regulatory Sandbox represents Cambodia\'s commitment to balancing innovation with financial stability. Launched to provide a structured pathway for new financial technologies, the sandbox allows companies to operate under tailored regulatory conditions for a defined testing period, typically 12 to 24 months.\n\nSandbox participants benefit from direct NBC mentorship, reduced initial capital requirements, and flexibility on certain regulatory provisions. In return, they must provide detailed reporting on operations, consumer outcomes, and risk metrics. Successful sandbox graduates receive expedited consideration for full licensing. The sandbox has been particularly active in evaluating digital lending platforms, cross-border payment solutions, and insurtech products.',
    },
    {
      heading: 'Where CamFinTech\'s Work Sits',
      content: 'For a business preparing an application under National Bank of Cambodia requirements, CamFinTech prepares the work the application rests on: the assessment against the applicable Prakas, the compliance architecture, and the reporting and AML/CFT programme that applies once licensed. It also builds the client side of any rail integration the business needs.\n\nThe licensing decision is the National Bank of Cambodia\'s, the licence is held by the client, and reserved legal work belongs with the client\'s Cambodian counsel. CamFinTech holds no client funds and operates no rail.',
    },
  ],
};
