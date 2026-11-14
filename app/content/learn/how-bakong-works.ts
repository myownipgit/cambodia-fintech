import { ArticleContent } from '../types';

/*
 * Figure pass, 2026-11-15. Checked against the NBC white paper (ch. 3,
 * "Project Bakong", pp. 21-24, read this day), the NBC's Bakong Open API
 * Document v1.0.2 and KHQR documents (read for knowledge/bakong-technical-
 * integration.ts) and the NBC 2024 payment-system report.
 * Kept because the white paper states it: real-time settlement with finality,
 * a design target under 5 seconds, debit and credit in one operation, BFT
 * consensus on NBC-run validating nodes, separate KHR and USD accounts with no
 * conversion on the system (banks provide FX), KYC by participating
 * institutions, Iroha and SORAMITSU.
 * Removed, not hedged: "over 60 financial institutions" (69 members, 60 live,
 * 2024 report); "one to two seconds"; "real-time gross settlement (RTGS)";
 * "routes the transaction to the appropriate ledger" and FX "at the prevailing
 * NBC reference rate" and the currency-flow table; "over 400,000 merchant
 * KHQR codes"; "unbanked ... approximately 27% of adults" (World Bank, no
 * reference); the Developer APIs section's "payment initiation", "webhook-
 * based notifications", "tiered model", "OAuth 2.0 with mutual TLS" and the
 * Tier 1-4 table (the NBC Open API has none of these); "TLS 1.3", "the NBC ...
 * can freeze accounts or reverse transactions", "NBC conducts regular audits";
 * "The NBC's strategy is to route all domestic retail payments through Bakong
 * rails". None read in a primary.
 *
 * Register fix, 2026-11-15 (ADR-005/006): "the integration architecture and
 *   reconciliation pipelines themselves are coordinated with accredited Service
 *   Providers" survived the 2026-11-08 sweep. No partner relationship exists;
 *   the firm builds the client side itself. Rest of the page not re-checked.
 *
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
/*
 * 2026-11-08 register sweep (ADR-005/006). The firm section and FAQ lines
 * here said CamFinTech "navigates the approval", "keeps them approved",
 * provides "approval-navigation", and that the build "is coordinated with
 * accredited Service Providers"; some also claimed NBC liaison, regulatory
 * goodwill, banking partners or partnership facilitation. Removed: the
 * approval decision is the operator's or regulator's, the client is the
 * applicant of record, the firm builds the client side itself (ADR-005), and
 * no partner relationship exists. Do not reintroduce any of these phrasings.
 */
export const howBakongWorks: ArticleContent = {
  slug: 'how-bakong-works',
  title: 'How Does Bakong Work in Cambodia?',
  description: 'A deep-dive into Bakong\'s blockchain architecture, Hyperledger Iroha consensus, dual-currency settlement in KHR and USD, KHQR integration, cross-border corridors, and developer API access.',
  type: 'learn',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-15',
  readingTime: 6,
  schema: 'Article',
  relatedSlugs: ['bakong', 'khqr', 'nbc'],
  relatedInstruments: ['prakas-b14-017-161'],
  lead: 'Bakong is far more than a mobile wallet. It is the national payment system of the National Bank of Cambodia (NBC), which the NBC\'s own white paper describes as a next-generation payment system built on Hyperledger Iroha blockchain technology. Launched on 28 October 2020, it moves payments between banks, microfinance institutions and payment service institutions in both Khmer riel (KHR) and US dollars (USD), and carries KHQR, the national QR code standard. At the end of 2024 it had 69 member institutions, 60 of them live, and about 30 million accounts could pay through it.',
  // Claims removed 2026-08-31. This array previously carried figures attributed
  // to named institutional reports with no URL, access date or page reference.
  // A verified sample was wrong more often than not — including a Cambodian FATF
  // mutual evaluation that never took place, and citations to bodies that do not
  // exist under the names given. Restore an entry only when its figure has been
  // read in a fetched primary, on the same evidence bar as app/content/regulatory,
  // and record where it was read. See vault ADR-007.
  claims: [
    { stat: 'Bakong payments are initiated and settled in real time with settlement finality, with a design target of under 5 seconds; transactions are validated by a Byzantine Fault Tolerant consensus algorithm on nodes run by the NBC, and each end user has separate KHR and USD accounts, with no currency conversion on the system itself.', source: 'National Bank of Cambodia, Project Bakong: Next Generation Payment System, white paper (June 2020), ch. 3, pp. 21-24', year: '2020', url: 'https://bakong.nbc.gov.kh/download/NBC_BAKONG_White_Paper.pdf' },
  ],
  sources: [
    { publisher: 'National Bank of Cambodia', label: 'Prakas F14-020-349 on the Bakong system rules and procedures, June 2020 (Khmer, PDF)', url: 'https://nbc.gov.kh/files/legislation/prakas/latest/km/Prakas_F14-020-349-PR_Rule_and_Procedure.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Prakas F14-020-351 on the KHQR Code technical specification, June 2020 (Khmer, PDF)', url: 'https://nbc.gov.kh/files/legislation/prakas/latest/km/Prakas_F14-020-351-PR_KHQR_for_Payment_in_Cambodia_appendix.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Project Bakong: Next Generation Payment System, white paper, June 2020 (PDF)', url: 'https://bakong.nbc.gov.kh/download/NBC_BAKONG_White_Paper.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Annual Report on the Payment System in Cambodia 2024 (Khmer, PDF, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf', tier: 'primary' },
    { publisher: 'Bank of Thailand', label: 'Press Release No. 9/2020: The Launch of Interoperable QR Payment Linkage between Cambodia and Thailand (PDF)', url: 'https://www.bot.or.th/content/dam/bot/documents/en/news-and-media/news-pdf/2020/n0963e.pdf', tier: 'primary' },
    { publisher: 'Nine ASEAN central banks (Bank of Thailand copy)', label: 'Joint press release: The National Bank of Cambodia formally joins the Regional Payment Connectivity initiative, 8 April 2025 (PDF)', url: 'https://www.bot.or.th/content/dam/bot/documents/en/news-and-media/news/2025/news-20250408.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Bakong, official site (home page)', url: 'https://bakong.nbc.gov.kh', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Bakong Open API Document, v1.0.2, November 2021 (PDF)', url: 'https://bakong.nbc.gov.kh/download/KHQR/integration/Bakong%20Open%20API%20Document.pdf', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-15',
  faqs: [
    { question: 'Is Bakong a cryptocurrency?', answer: 'No. Bakong is the National Bank of Cambodia\'s payment system, not a cryptocurrency. The NBC\'s white paper describes it as the earlier FAST payment system enhanced by replacing its relational database with a permissioned Hyperledger Iroha blockchain network — in the NBC\'s words, "a rather conservative use of blockchain technology", mainly a change to back-end infrastructure that is invisible in many uses. It has no speculative value; it exists to settle payments.' },
    { question: 'Do I need a bank account to use Bakong?', answer: 'Not necessarily. The NBC white paper describes Bakong accounts held through participating institutions, which carry out customer identification (KYC), and a Bakong app that can be linked to a bank account so funds move in both directions. Expanding access for people without bank accounts is one of Bakong\'s stated aims. Most people, though, use Bakong through their own bank\'s or wallet\'s app: only 642,500 accounts were registered on the Bakong app itself in 2024.' },
    { question: 'Can foreign businesses accept Bakong payments?', answer: 'Yes. Any business registered in Cambodia can accept Bakong payments through a participating bank. Payments move through a participating bank or payment service institution; the NBC\'s public Bakong Open API adds KHQR payment-status checks and deeplinks, but does not move money. CamFinTech prepares the compliance work and builds the client side of the integration; it operates no rail and holds no client funds.' },
  ],
  sections: [
    {
      heading: 'The Hyperledger Iroha Foundation',
      content: 'Bakong is built on Hyperledger Iroha, an open-source distributed ledger framework originally developed by Soramitsu, a Japanese blockchain company. Unlike public blockchains such as Bitcoin or Ethereum, Hyperledger Iroha is a permissioned network where only authorized validator nodes operated by the NBC participate in consensus.\n\nTransactions are validated by a Byzantine Fault Tolerant (BFT) consensus algorithm, under which agreement needs 2n+1 of 3n+1 nodes, and the validating nodes are run by the NBC at its own premises. The white paper calls the result "a rather conservative use of blockchain technology": the earlier FAST system\'s database replaced by a permissioned ledger, giving consistency across nodes and an immutable record without opening the network to outside validators.',
    },
    {
      heading: 'Dual-Currency Settlement Architecture',
      content: 'Cambodia operates a de facto dual-currency economy where both Khmer Riel (KHR) and US Dollars (USD) circulate freely. Bakong handles both. Under the white paper\'s design, each end user has two separate accounts, one in KHR and one in USD, and a payment is made in the currency of the account it comes from.\n\nBakong itself does not convert between currencies: a conversion or transfer from one currency to the other is not possible on the system. Participating banks can provide foreign exchange to their customers, at their own rates and terms.',
    },
    {
      heading: 'The Settlement Process Step by Step',
      content: 'A Bakong transaction follows a precise flow. First, the payer initiates payment through their bank or wallet app. The app sends an API request to the originating institution\'s core banking system, which forwards it to the Bakong switch. The Bakong switch validates the transaction, checks account balances, debits the payer, and credits the beneficiary in a single atomic operation.\n\nThe white paper describes payments initiated and settled in real time with settlement finality, a design target of under 5 seconds per transaction, and the sender\'s debit and the receiver\'s credit made in a single, automatically executed operation. Bakong balances are treated as cash equivalent and recorded in each participant\'s Bakong settlement account at the NBC. When funds reach a merchant\'s own account, and on what terms, is set by the merchant\'s institution.',
    },
    {
      heading: 'KHQR Integration and Merchant Acceptance',
      content: 'KHQR (Khmer QR) is the standardized QR code protocol set by the NBC that runs on top of Bakong infrastructure. Based on the EMVCo QR code standard, KHQR embeds the merchant\'s account information in the code, so any customer using any participating bank or wallet app can scan a single KHQR code to pay. It supports static codes, printed once and used with an amount the customer enters, and dynamic codes generated per transaction with the amount built in; the NBC publishes a content guideline and an SDK for both.',
    },
    {
      heading: 'Cross-Border Payment Corridors',
      content: 'The NBC has pursued bilateral payment linkages with neighbouring countries. The Cambodia–Thailand interoperable QR payment linkage was launched by the governors of the two central banks in February 2020, following an MOU signed in February 2019. It lets Cambodian visitors to Thailand pay Thai merchants by scanning Thai QR codes with their own banking apps, and Thai users pay KHQR merchants in Cambodia (Bank of Thailand, Press Release No. 9/2020).\n\nThe NBC\'s 2024 payment-system report records cross-border QR links with Thailand, Laos, Vietnam, Malaysia and South Korea, and with the UnionPay and Alipay+ networks. The second phase of the Malaysia–Cambodia QR linkage was launched on 8 April 2025, the day the NBC joined the Regional Payment Connectivity initiative of ASEAN central banks. These are QR payment linkages for retail payments; for what each currently supports, rely on the NBC\'s own announcements.',
    },
    {
      heading: 'Developer APIs',
      content: 'The NBC publishes a small public developer toolkit for KHQR. The Bakong Open API (version 1.0.2, November 2021) lets an integrator register with an email address, organisation and project name, obtain an access token, generate a deeplink that opens a KHQR payment in a banking app, check a payment\'s status by the MD5 hash of its KHQR string or by its transaction hash, and check a Bakong account. It returns ten numbered error codes. It does not initiate or settle payments, and it has no webhooks: payment status is checked by polling.\n\nPayments themselves move through a participating bank or payment service institution, under that institution\'s own API and terms. The guide on this site to Bakong technical integration sets out the NBC\'s toolkit endpoint by endpoint. CamFinTech scopes the integration, maps business workflows to it, and builds the client side of the integration and its reconciliation, which the client then operates.',
    },
    {
      heading: 'Security and Regulatory Safeguards',
      content: 'Bakong\'s ledger is permissioned: only nodes run by the NBC validate transactions, and the white paper notes that transactions are visible to validating nodes without disclosing the identity of the parties. Identity sits with the participating institutions, which are responsible for KYC on their own customers.\n\nThose institutions are reporting entities under Cambodia\'s AML/CFT law. They must identify and verify customers, keep records for at least five years, and report suspicious transactions to the Cambodia Financial Intelligence Unit within 24 hours.',
    },
    {
      heading: 'Strategic Implications for Enterprise FinTech',
      content: 'For enterprises evaluating Cambodia\'s digital payment landscape, Bakong is central infrastructure, and its members must follow its rules under NBC Prakas F14-020-349. A business that is not a member reaches it through one that is.\n\nA business typically meets Bakong in stages: KHQR acceptance for retail operations first, then API integration for automated payments and reconciliation, and later cross-border payment links where they apply. CamFinTech builds the client side of those integrations for a fee and hands them over; it operates no rail and holds no client funds.',
    },
  ],
};
