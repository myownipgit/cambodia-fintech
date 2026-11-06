import { ArticleContent } from '../types';

/*
 * Corrected 2026-11-07 against fetched primaries — do not restore from git:
 * - "Bakong is a central bank digital currency (CBDC)", "1:1 peg", "sets Bakong
 *   apart from most CBDC implementations": the NBC white paper presents Bakong
 *   as a next-generation payment system (FAST upgraded onto Hyperledger Iroha,
 *   "a rather conservative use of blockchain technology", p. 23) and does not
 *   describe it as a CBDC.
 * - "Bakong-PromptPay corridor operational in 2023 … migrant remittances … ADB:
 *   USD 1.5bn": BOT Press Release 9/2020 shows a QR *payment* linkage launched
 *   February 2020. The remittance and ADB figures are unsourced.
 * - "Vietnam and Laos in advanced development": the NBC 2024 payment-system
 *   report (Foreword, p. i) already lists QR links with both.
 * - KHQR Adoption Milestones table: unsourced, and its "2023 interoperability
 *   mandate" was already found unsupported on 2026-11-04.
 * Remaining prose figures (e.g. institution and merchant counts) are still
 * unsourced and await the busiest-page-first pass.
 */
export const howBakongWorks: ArticleContent = {
  slug: 'how-bakong-works',
  title: 'How Does Bakong Work in Cambodia?',
  description: 'A deep-dive into Bakong\'s blockchain architecture, Hyperledger Iroha consensus, dual-currency settlement in KHR and USD, KHQR integration, cross-border corridors, and developer API access.',
  type: 'learn',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-07',
  readingTime: 6,
  schema: 'Article',
  relatedSlugs: ['bakong', 'khqr', 'nbc'],
  relatedInstruments: ['prakas-b14-017-161'],
  lead: 'Bakong is far more than a mobile wallet. It is the national payment system of the National Bank of Cambodia (NBC), which the NBC\'s own white paper describes as a next-generation payment system built on Hyperledger Iroha blockchain technology. Since its public launch in October 2020, Bakong has grown into the payment backbone of the Cambodian economy, connecting over 60 financial institutions, enabling dual-currency settlement in both Khmer Riel (KHR) and US Dollars (USD), and powering the KHQR standardized QR code protocol that has become ubiquitous in Cambodian commerce.',
  // Claims removed 2026-08-31. This array previously carried figures attributed
  // to named institutional reports with no URL, access date or page reference.
  // A verified sample was wrong more often than not — including a Cambodian FATF
  // mutual evaluation that never took place, and citations to bodies that do not
  // exist under the names given. Restore an entry only when its figure has been
  // read in a fetched primary, on the same evidence bar as app/content/regulatory,
  // and record where it was read. See vault ADR-007.
  claims: [],
  sources: [
    { publisher: 'National Bank of Cambodia', label: 'Prakas F14-020-349 on the Bakong system rules and procedures, June 2020 (Khmer, PDF)', url: 'https://nbc.gov.kh/files/legislation/prakas/latest/km/Prakas_F14-020-349-PR_Rule_and_Procedure.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Prakas F14-020-351 on the KHQR Code technical specification, June 2020 (Khmer, PDF)', url: 'https://nbc.gov.kh/files/legislation/prakas/latest/km/Prakas_F14-020-351-PR_KHQR_for_Payment_in_Cambodia_appendix.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Project Bakong: Next Generation Payment System, white paper, June 2020 (PDF)', url: 'https://bakong.nbc.gov.kh/download/NBC_BAKONG_White_Paper.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Annual Report on the Payment System in Cambodia 2024 (Khmer, PDF, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf', tier: 'primary' },
    { publisher: 'Bank of Thailand', label: 'Press Release No. 9/2020: The Launch of Interoperable QR Payment Linkage between Cambodia and Thailand (PDF)', url: 'https://www.bot.or.th/content/dam/bot/documents/en/news-and-media/news-pdf/2020/n0963e.pdf', tier: 'primary' },
    { publisher: 'Nine ASEAN central banks (Bank of Thailand copy)', label: 'Joint press release: The National Bank of Cambodia formally joins the Regional Payment Connectivity initiative, 8 April 2025 (PDF)', url: 'https://www.bot.or.th/content/dam/bot/documents/en/news-and-media/news/2025/news-20250408.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Bakong, official site (home page)', url: 'https://bakong.nbc.gov.kh', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-06',
  faqs: [
    { question: 'Is Bakong a cryptocurrency?', answer: 'No. Bakong is the National Bank of Cambodia\'s payment system, not a cryptocurrency. The NBC\'s white paper describes it as the earlier FAST payment system enhanced by replacing its relational database with a permissioned Hyperledger Iroha blockchain network — in the NBC\'s words, "a rather conservative use of blockchain technology", mainly a change to back-end infrastructure that is invisible in many uses. It has no speculative value; it exists to settle payments.' },
    { question: 'Do I need a bank account to use Bakong?', answer: 'No. Bakong supports both bank-linked wallets and standalone e-wallets. Users can open a Bakong wallet by completing KYC through a participating institution. This design deliberately targets financial inclusion for Cambodia\'s unbanked population, which the World Bank estimates at approximately 27% of adults.' },
    { question: 'Can foreign businesses accept Bakong payments?', answer: 'Yes. Any business registered in Cambodia can accept Bakong payments through a participating bank. Foreign enterprises should engage a licensed payment service provider or directly integrate with the Bakong Open API via their bank partner. CamFinTech navigates the approval for enterprises to accept Bakong and coordinates the technical build with accredited Service Providers — we never operate the rail or hold client funds.' },
  ],
  sections: [
    {
      heading: 'The Hyperledger Iroha Foundation',
      content: 'Bakong is built on Hyperledger Iroha, an open-source distributed ledger framework originally developed by Soramitsu, a Japanese blockchain company. Unlike public blockchains such as Bitcoin or Ethereum, Hyperledger Iroha is a permissioned network where only authorized validator nodes operated by the NBC participate in consensus.\n\nThe consensus mechanism uses a variant of Byzantine Fault Tolerant (BFT) ordering, which means the network can process transactions within one to two seconds even if some validator nodes fail. This architecture gives Bakong the speed of centralized payment systems while retaining the auditability and resilience of distributed ledger technology. Each transaction is cryptographically signed and immutably recorded, providing a tamper-proof audit trail for regulators.',
    },
    {
      heading: 'Dual-Currency Settlement Architecture',
      content: 'Cambodia operates a de facto dual-currency economy where both Khmer Riel (KHR) and US Dollars (USD) circulate freely. Bakong was engineered to handle both currencies natively. When a user initiates a payment, the system identifies the currency, routes the transaction to the appropriate ledger, and settles in real time.\n\nCross-currency transactions are also supported. If a payer sends KHR and the merchant accepts only USD, the participating bank performs an FX conversion at the prevailing NBC reference rate.',
      table: {
        caption: 'Bakong Dual-Currency Transaction Flows',
        headers: ['Scenario', 'Payer Currency', 'Merchant Currency', 'Settlement', 'FX Required'],
        rows: [
          ['Domestic KHR', 'KHR', 'KHR', 'Instant on KHR ledger', 'No'],
          ['Domestic USD', 'USD', 'USD', 'Instant on USD ledger', 'No'],
          ['Cross-currency', 'KHR', 'USD', 'Bank FX at NBC rate', 'Yes'],
          ['Cross-currency', 'USD', 'KHR', 'Bank FX at NBC rate', 'Yes'],
          ['Cross-border', 'Foreign currency', 'KHR or USD', 'Corridor-specific', 'Yes'],
        ],
      },
    },
    {
      heading: 'The Settlement Process Step by Step',
      content: 'A Bakong transaction follows a precise flow. First, the payer initiates payment through their bank or wallet app. The app sends an API request to the originating institution\'s core banking system, which forwards it to the Bakong switch. The Bakong switch validates the transaction, checks account balances, debits the payer, and credits the beneficiary in a single atomic operation.\n\nSettlement is final and irrevocable once confirmed on the Iroha ledger, typically within one to two seconds. There is no batch processing, no end-of-day netting, and no multi-day clearing cycle. This real-time gross settlement (RTGS) model eliminates counterparty risk between participating institutions and provides immediate liquidity to merchants, a critical advantage for small businesses managing daily cash flow.',
    },
    {
      heading: 'KHQR Integration and Merchant Acceptance',
      content: 'KHQR (Khmer QR) is the standardized QR code protocol set by the NBC that runs on top of Bakong infrastructure. Based on the EMVCo QR Code Specification, KHQR assigns each merchant a unique identifier embedded in the QR code. Any customer using any Bakong-connected bank app can scan a single KHQR code to pay.\n\nBefore KHQR, merchants needed separate QR codes for each bank or wallet. KHQR interoperability eliminated this fragmentation. By early 2025, over 400,000 merchant KHQR codes had been registered across Cambodia. The protocol supports both static QR codes printed at point-of-sale locations and dynamic QR codes generated per transaction for e-commerce and invoicing scenarios.',
    },
    {
      heading: 'Cross-Border Payment Corridors',
      content: 'The NBC has pursued bilateral payment linkages with neighbouring countries. The Cambodia–Thailand interoperable QR payment linkage was launched by the governors of the two central banks in February 2020, following an MOU signed in February 2019. It lets Cambodian visitors to Thailand pay Thai merchants by scanning Thai QR codes with their own banking apps, and Thai users pay KHQR merchants in Cambodia (Bank of Thailand, Press Release No. 9/2020).\n\nThe NBC\'s 2024 payment-system report records cross-border QR links with Thailand, Laos, Vietnam, Malaysia and South Korea, and with UnionPay International and Alipay. The second phase of the Malaysia–Cambodia QR linkage was launched on 8 April 2025, the day the NBC joined the Regional Payment Connectivity initiative of ASEAN central banks. These are QR payment linkages for retail payments; for what each currently supports, rely on the NBC\'s own announcements.',
    },
    {
      heading: 'Developer APIs and Integration Patterns',
      content: 'The Bakong Open API provides a RESTful interface for financial institutions and licensed fintech companies to integrate with the payment network. The API supports account lookup, payment initiation, transaction status queries, and webhook-based notifications for real-time settlement confirmation.\n\nIntegration follows a tiered model. Banks and licensed payment service providers connect directly to the Bakong API gateway. Merchants and enterprises access Bakong through their bank\'s API layer or through licensed payment aggregators. Authentication uses OAuth 2.0 with mutual TLS for transport security. CamFinTech helps enterprises scope their integration approach and map business workflows to Bakong API endpoints; the integration architecture and reconciliation pipelines themselves are coordinated with accredited Service Providers.',
      table: {
        caption: 'Bakong API Integration Tiers',
        headers: ['Tier', 'Entity Type', 'Access Method', 'Capabilities'],
        rows: [
          ['Tier 1', 'NBC', 'Direct ledger access', 'Full system administration'],
          ['Tier 2', 'Licensed banks', 'Bakong Open API', 'Payment initiation, settlement, account services'],
          ['Tier 3', 'Payment service providers', 'Bakong Open API (restricted)', 'E-wallet operations, merchant services'],
          ['Tier 4', 'Enterprises / merchants', 'Bank partner API', 'Payment acceptance, status queries, reconciliation'],
        ],
      },
    },
    {
      heading: 'Security and Regulatory Safeguards',
      content: 'Bakong implements multiple layers of security mandated by the NBC. All data in transit is encrypted with TLS 1.3, and all data at rest on the Iroha ledger is cryptographically hashed. The permissioned blockchain design means that only NBC-authorized nodes can validate transactions, eliminating the 51% attack vectors present in public blockchains.\n\nOn the regulatory side, all Bakong participants must comply with NBC Prakas (regulations) on anti-money laundering (AML) and combating the financing of terrorism (CFT). Transaction monitoring systems flag suspicious patterns in real time. The NBC conducts regular audits of participant institutions and can freeze accounts or reverse transactions when fraud is detected, a capability that decentralized cryptocurrencies fundamentally lack.',
    },
    {
      heading: 'Strategic Implications for Enterprise FinTech',
      content: 'For enterprises evaluating Cambodia\'s digital payment landscape, Bakong is central infrastructure, and its members must follow its rules under NBC Prakas F14-020-349. The NBC\'s strategy is to route all domestic retail payments through Bakong rails over time, making direct integration a strategic imperative.\n\nCamFinTech navigates the approval for businesses to integrate with Bakong across three horizons: immediate KHQR acceptance for retail operations, medium-term API integration for automated B2B payments and reconciliation, and long-term positioning for cross-border payment corridors as ASEAN linkages mature. The technical build is coordinated with accredited Service Providers; CamFinTech is fee-only, never operates the rail, and never holds client funds.',
    },
  ],
};
