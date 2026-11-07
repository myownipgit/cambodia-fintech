import { ArticleContent } from '../types';

/*
 * Figure pass 2026-11-08 (busiest-page-first, GA4 rank 8). Kept because each
 * was read in a primary: the NBC 2024 payment-system report figures (claims),
 * the NBC register counts as at 31 May 2026 (58 commercial banks, 7 specialized
 * banks, 28 payment service institutions — checked by the 2026-11-04 register
 * pass, b70498d), the KHQR Prakas F14-020-351 of June 2020 and the Bakong white
 * paper (both read for learn/how-bakong-works.ts), and the QR payment links in
 * ch. 6 of the NBC 2024 report (memory: project_corpus_evidence_bar). Removed,
 * not hedged, so nobody restores these from git:
 *
 * - "Bakong CBDC" (lead, section heading and body). The NBC white paper calls
 *   Bakong a next-generation payment system; it does not describe it as a CBDC.
 *   Also "real-time gross settlement", "1-3 business days to under 3 seconds",
 *   "21 million transactions", and the 2021-2025 growth table. Unsourced.
 * - Remittance corridors with PromptPay, DuitNow and Alipay "reducing remittance
 *   costs by 40-60%". These are QR payment links, not remittance corridors, and
 *   the cost figure has no source.
 * - Median age 26, smartphone penetration 80%+, 35% CAGR since 2020, GDP growth
 *   5.8% in 2025, "penetration exceeds several larger ASEAN economies", Global
 *   Findex 59% to 78%, ~USD 120m cumulative investment, the ASEAN USD 60bn
 *   projection. None read in a primary.
 * - Named-company user and agent counts (Wing 9M+ and 10,000+ agents, ABA 5M+,
 *   TrueMoney 3M+, ACLEDA Unity 2.5M+, Chip Mong 1M+), "Pi Pay merged into
 *   Bakong ecosystem", named funding rounds and backers, and the players table.
 *   Unsourced statements about named institutions; the NBC registers are cited
 *   instead.
 * - The NBC sandbox ("launched in 2023", phases, "approximately 15 firms").
 *   No instrument read establishes one; SERC's sandbox is stated instead.
 * - "Yes." as the answer to whether Cambodia is a good investment market, and
 *   "the NBC's forward-thinking regulatory framework" — investment advice and
 *   commentary on a regulator, respectively (ADR-006).
 *
 * Bar for restoring any figure: read in a fetched primary, recorded in `claims`
 * or `sources` with where it was read.
 */
export const cambodiaFintechLandscape: ArticleContent = {
  slug: 'cambodia-fintech-landscape',
  title: 'What is Cambodia\'s FinTech Landscape in 2026?',
  description: 'An overview of Cambodia\'s FinTech landscape in 2026: the institutions on the NBC registers, digital payment growth, Bakong and KHQR, the QR payment links with other markets, how FinTech activity is licensed, and where the infrastructure creates openings.',
  type: 'learn',
  cluster: 'investment',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-08',
  readingTime: 5,
  schema: 'Article',
  relatedSlugs: ['gaap', 'bakong', 'nbc'],
  relatedInstruments: ['prakas-b14-017-161', 'fintech-development-policy', 'notification-083-25'],
  lead: 'Cambodia\'s FinTech landscape is built on infrastructure the state designed: Bakong, the National Bank of Cambodia\'s (NBC) national payment system, and KHQR, the single QR standard that lets a customer of one institution pay a merchant served by another. The NBC registers list 58 commercial banks, 7 specialized banks and 28 payment service institutions, as at 31 May 2026, and the NBC reports that the number of digital payment transactions grew 78% in 2024 and their value 38%. This page sets out who operates in the market, how the payment rails work, how FinTech activity is licensed, and where the infrastructure creates openings — using figures only where they have been read in a primary source.',
  // Claims removed 2026-08-31. This array previously carried figures attributed
  // to named institutional reports with no URL, access date or page reference.
  // A verified sample was wrong more often than not — including a Cambodian FATF
  // mutual evaluation that never took place, and citations to bodies that do not
  // exist under the names given. Restore an entry only when its figure has been
  // read in a fetched primary, on the same evidence bar as app/content/regulatory,
  // and record where it was read. See vault ADR-007.
  // 2026-11-04: this page carried "$78 billion in 2024" twice, and a derived
  // "up from approximately $40 billion in 2022". Both came from reading the NBC's
  // 78% transaction-count GROWTH RATE as a currency total; the 2022 figure had no
  // source at all and is gone. Same correction as learn/fintech-license-cambodia.ts,
  // where the fetched primary and its URL are recorded in full.
  claims: [
    { stat: 'The number of digital payment transactions in Cambodia grew 78% during 2024 and their value grew 38%, both measured against 2023. The National Bank of Cambodia puts the total value at approximately 15 times gross domestic product.', source: 'National Bank of Cambodia, Annual Report on the Payment System in Cambodia 2024 (Khmer), foreword, p. i (Open Development Cambodia copy)', year: '2024', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf' },
    { stat: 'The National Bank of Cambodia lists 58 commercial banks, 7 specialized banks and 28 payment service institutions, as at 31 May 2026.', source: 'National Bank of Cambodia, Lists of Commercial Banks, Specialized Banks and Payment Service Institutions', year: '2026', url: 'https://nbc.gov.kh/files/supervision/payment-service/en/PSIs.pdf' },
  ],
  sources: [
    { publisher: 'National Bank of Cambodia', label: 'Annual Report on the Payment System in Cambodia 2024 (Khmer, PDF, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'List of Commercial Banks, as at 31 May 2026 (PDF)', url: 'https://nbc.gov.kh/files/supervision/commercial-banks/en/Commercial_Banks.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'List of Specialized Banks, as at 31 May 2026 (PDF)', url: 'https://nbc.gov.kh/files/supervision/specialized-banks/en/Specialized_Banks.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'List of Payment Service Institutions, as at 31 May 2026 (PDF)', url: 'https://nbc.gov.kh/files/supervision/payment-service/en/PSIs.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Project Bakong: Next Generation Payment System, white paper, June 2020 (PDF)', url: 'https://bakong.nbc.gov.kh/download/NBC_BAKONG_White_Paper.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Prakas F14-020-351 on the KHQR Code technical specification, June 2020 (Khmer, PDF)', url: 'https://nbc.gov.kh/files/legislation/prakas/latest/km/Prakas_F14-020-351-PR_KHQR_for_Payment_in_Cambodia_appendix.pdf', tier: 'primary' },
    { publisher: 'Bank of Thailand', label: 'Press Release No. 9/2020: The Launch of Interoperable QR Payment Linkage between Cambodia and Thailand (PDF)', url: 'https://www.bot.or.th/content/dam/bot/documents/en/news-and-media/news-pdf/2020/n0963e.pdf', tier: 'primary' },
    { publisher: 'Nine ASEAN central banks (Bank of Thailand copy)', label: 'Joint press release: The National Bank of Cambodia formally joins the Regional Payment Connectivity initiative, 8 April 2025 (PDF)', url: 'https://www.bot.or.th/content/dam/bot/documents/en/news-and-media/news/2025/news-20250408.pdf', tier: 'primary' },
    { publisher: 'Financial Services Authority (FSA), Cambodia', label: 'Cambodia FinTech Development Policy, official portal', url: 'https://fintech.fsa.gov.kh/cambodia-fintech-development-policy?lang=en', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-08',
  faqs: [
    { question: 'How big is Cambodia\'s FinTech market?', answer: 'The NBC registers list 58 commercial banks, 7 specialized banks and 28 payment service institutions, as at 31 May 2026, alongside deposit-taking and other microfinance institutions. The NBC reports that the number of digital payment transactions grew 78% during 2024 and their value 38%, against 2023, with total value equivalent to roughly 15 times GDP. This page does not give a revenue or market-value figure for the sector, because none has been traced to a primary source.' },
    { question: 'What are the biggest FinTech companies in Cambodia?', answer: 'The authoritative list of who is licensed is the NBC\'s own: its registers of commercial banks, specialized banks, microfinance institutions and payment service institutions, which it publishes and updates. Most digital payment in Cambodia runs through banks\' apps and licensed payment service institutions\' wallets, interoperating over Bakong and KHQR. This page does not rank institutions by users or volume, because no published, comparable figures for them have been read.' },
    { question: 'Is Cambodia a good market for FinTech investment?', answer: 'That depends on the business, and is a judgement for the investor. What is structurally distinctive is the infrastructure: a national payment system and a single QR standard built by the NBC, QR payment links with several other markets, a digital identity platform and a state e-invoicing system. A FinTech business builds on these rails rather than competing with them. Payments and electronic money are licensed by the NBC under Prakas B14-017-161, and digital-asset businesses by SERC, where completing SERC\'s FinTech Regulatory Sandbox is a precondition to applying.' },
  ],
  sections: [
    {
      heading: 'Market Size and Growth',
      content: 'The clearest measure of the market is the NBC\'s own. Its annual payment-system report for 2024 records that the number of digital payment transactions grew 78% against 2023 and their value 38%, with total value equivalent to roughly 15 times gross domestic product. The market spans payments, lending, insurance and investment, but published, Cambodia-specific measures of the size of most of those segments are scarce, and this page does not estimate them.\n\nThe shape of the growth matters more than its rate. It has been carried by infrastructure the state built and required institutions to interoperate on, rather than by competing proprietary networks. That is the defining feature of Cambodian FinTech, and the reason the opportunities in it sit where the government rails meet commercial services.',
    },
    {
      heading: 'Who Operates in the Market',
      content: 'Every institution that takes deposits, lends or provides payment services in Cambodia is licensed by the NBC and appears on one of its registers. As at 31 May 2026 those list 58 commercial banks, 7 specialized banks and 28 payment service institutions, with separate registers for deposit-taking and non-deposit-taking microfinance institutions. Payment service institutions include the e-wallet, remittance and merchant-payment businesses; under Prakas B14-017-161 an electronic money issuer is a payment service institution licensed to issue electronic money.\n\nThe registers, not a ranking, are the right starting point for a reader mapping the market: they are published by the regulator, dated, and updated. Securities, insurance and digital-asset businesses sit under the Non-Bank Financial Services Authority and its sector regulators instead.',
    },
    {
      heading: 'KHQR and Everyday Payments',
      content: 'KHQR is the national QR code standard, set by NBC Prakas F14-020-351 of June 2020 on the KHQR technical specification. A merchant displaying a KHQR code can be paid from the app of any participating institution, which is what makes a printed code at a market stall usable by almost any customer with a banking or wallet app.\n\nFor financial inclusion, the effect has been to make digital payment available without each merchant needing a relationship with each institution. Cash remains in wide use, and accepting KHQR is not the same as running a business digitally; but the barrier to the first digital transaction is low.',
    },
    {
      heading: 'Bakong: The National Payment System',
      content: 'Bakong is the NBC\'s national payment system. The NBC\'s white paper of June 2020 presents it as a next-generation payment system built on Hyperledger Iroha blockchain technology, and does not describe it as a central bank digital currency. It settles in both Khmer riel and US dollars, and connects the apps of participating banks and payment service institutions so that transfers and KHQR payments move between them.\n\nBakong has also been linked to QR payment systems outside Cambodia. The NBC\'s 2024 payment-system report records QR payment links with Thailand (from February 2020), Laos, Vietnam, Malaysia and South Korea, and with the UnionPay and Alipay+ networks. These let a customer pay a merchant across the border by QR; they are payment links, not remittance licences. For a FinTech business, Bakong is reached through a participating licensed institution, and integration is a question of reconciliation and settlement design as much as connectivity.',
    },
    {
      heading: 'How FinTech Activity Is Licensed',
      content: 'Cambodian FinTech regulation is divided by activity. Payment services and electronic money are licensed by the NBC under Prakas B14-017-161 of June 2017, which sets one payment service institution licence with a minimum capital in cash, safeguarding of users\' funds and a six-month decision window. Banking and microfinance sit under the NBC\'s own regimes. Digital assets held for investment are a securities matter for SERC under Prakas 093, and only firms that have completed SERC\'s FinTech Regulatory Sandbox may apply for that licence (Notification 083/25).\n\nThe policy direction is set by the Cambodia Financial Technology Development Policy 2023-2028, published by the Financial Services Authority\'s FinTech Center. It is a policy, not a binding instrument, but it is the reference point later instruments are drafted against. For the licensing detail, see the guide to getting a FinTech licence in Cambodia.',
    },
    {
      heading: 'Where the Openings Are',
      content: 'The openings follow from the infrastructure. Businesses connecting to government rails need the client side of each integration built: accounting and invoicing systems connected to CamInvoice, merchant and treasury systems connected to Bakong and KHQR, and onboarding connected to CamDigiKey. Lending that uses invoice and payment data rather than land title, including supply chain finance, depends on those data existing in structured form. And compliance work — AML/CFT programmes, licence applications prepared to the standard the Prakas sets — is a recurring need for every new entrant.\n\nThis page does not size those opportunities or report investment totals, because no figure for them has been traced to a primary source.',
    },
    {
      heading: 'ASEAN Context',
      content: 'Within ASEAN, Cambodia is a small economy with an unusually centralised payment architecture: one national payment system, one QR standard, and interoperability built in rather than negotiated between competing networks. Its QR payment links with Thailand, Laos, Vietnam and Malaysia put it among the participants in regional payment connectivity, and the NBC formally joined the ASEAN Regional Payment Connectivity initiative in April 2025.\n\nFor a firm looking at the region, that architecture is the point of comparison worth making. Larger markets offer scale; Cambodia offers a set of national rails that every licensed institution already shares.',
    },
  ],
};
