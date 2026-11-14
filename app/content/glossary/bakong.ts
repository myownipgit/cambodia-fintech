import { ArticleContent } from '../types';

/*
 * Figure pass, 2026-11-15, against the NBC white paper (ch. 3), the NBC 2024
 * payment-system report (ch. 2 and 6) and Bakong Open API v1.0.2. Removed, not
 * hedged: "central bank digital currency (CBDC)", "blockchain-based CBDC",
 * "hybrid CBDC system", "national digital currency" (the white paper calls
 * Bakong a next-generation payment system and does not describe it as a CBDC);
 * "real-time gross settlement system" (not the NBC's description); "Wing, ABA
 * Pay ... connect TO Bakong as participant institutions" (named-institution
 * claim, unsourced); "real-time cross-border remittance ... reducing transfer
 * costs" and the corridor table (QR payment links, not remittance; "China
 * Alipay" is the Alipay+ network; Vietnam "In Development" and Laos "MoU
 * Signed" launched in 2023). The site-wide "Bakong CBDC" label in JSON-LD is
 * a separate decision for Bill.
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
export const bakong: ArticleContent = {
  slug: 'bakong',
  title: 'What is Bakong?',
  description: 'Bakong is the National Bank of Cambodia\'s national payment system, built on Hyperledger Iroha, which settles riel and US dollar payments between participating institutions in real time and carries KHQR, the national QR standard.',
  type: 'glossary',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-15',
  readingTime: 3,
  schema: 'DefinedTerm',
  relatedSlugs: ['khqr', 'nbc', 'camdigikey'],
  lead: 'Bakong is the national payment system of the National Bank of Cambodia (NBC), which its white paper describes as a next-generation payment system built on Hyperledger Iroha blockchain technology, not a central bank digital currency. Launched on 28 October 2020, it settles payments between banks, microfinance institutions and payment service institutions in real time, in both Khmer riel (KHR) and US dollars (USD), and carries KHQR, the national QR code standard. At the end of 2024 it had 60 live member institutions.',
  // Claims removed 2026-08-31. This array previously carried figures attributed
  // to named institutional reports with no URL, access date or page reference.
  // A verified sample was wrong more often than not — including a Cambodian FATF
  // mutual evaluation that never took place, and citations to bodies that do not
  // exist under the names given. Restore an entry only when its figure has been
  // read in a fetched primary, on the same evidence bar as app/content/regulatory,
  // and record where it was read. See vault ADR-007.
  claims: [
    { stat: 'Bakong payments are initiated and settled in real time with settlement finality, with a design target of under 5 seconds; transactions are validated by a Byzantine Fault Tolerant consensus algorithm on nodes run by the NBC.', source: 'National Bank of Cambodia, Project Bakong: Next Generation Payment System, white paper (June 2020), ch. 3, pp. 21-24', year: '2020', url: 'https://bakong.nbc.gov.kh/download/NBC_BAKONG_White_Paper.pdf' },
  ],
  sources: [
    { publisher: 'National Bank of Cambodia', label: 'Project Bakong: Next Generation Payment System, white paper, June 2020 (PDF)', url: 'https://bakong.nbc.gov.kh/download/NBC_BAKONG_White_Paper.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Bakong, official site (home page)', url: 'https://bakong.nbc.gov.kh', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Annual Report on the Payment System in Cambodia 2024 (Khmer, PDF, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf', tier: 'primary' },
    { publisher: 'Nine ASEAN central banks (Bank of Thailand copy)', label: 'Joint press release: The National Bank of Cambodia formally joins the Regional Payment Connectivity initiative, 8 April 2025 (PDF)', url: 'https://www.bot.or.th/content/dam/bot/documents/en/news-and-media/news/2025/news-20250408.pdf', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-15',
  faqs: [
    { question: 'What is Bakong in Cambodia?', answer: 'Bakong is the National Bank of Cambodia\'s national payment system. The NBC\'s white paper describes it as a next-generation payment system: the earlier FAST system rebuilt on a permissioned Hyperledger Iroha ledger, settling riel and US dollar payments in real time with finality. The white paper does not describe it as a central bank digital currency.' },
    { question: 'How does Bakong differ from mobile money services like Wing or ABA Pay?', answer: 'Bakong is the NBC\'s system that moves payments between institutions; banks\' and wallets\' own apps are what most customers use. Member institutions connect to Bakong, so a customer of one can pay a customer of another. About 30 million accounts could pay through Bakong in 2024, while only 642,500 were registered on the NBC\'s own Bakong app.' },
    { question: 'Can foreign businesses integrate with Bakong?', answer: 'Yes. Foreign enterprises operating in Cambodia can integrate with Bakong through participant banks. CamFinTech prepares the compliance work and builds the client side of the integration; it operates no rail and holds no client funds.' },
  ],
  sections: [
    {
      heading: 'How Bakong Works',
      content: 'Bakong is built on Hyperledger Iroha, and the NBC undertook the project with the Japanese firm SORAMITSU. Validating nodes are run by the NBC, and transactions are confirmed by a Byzantine Fault Tolerant consensus algorithm. The white paper describes payments initiated and settled in real time with finality, with a design target of under 5 seconds.\n\nEach end user has separate riel and dollar accounts, and Bakong does not convert between them; participating banks can provide foreign exchange. Customers can also use the NBC\'s own Bakong app, which can be linked to a bank account.',
    },
    {
      heading: 'KHQR Integration',
      content: 'KHQR (Khmer QR) is the standardized QR code payment protocol that operates on top of Bakong. KHQR, set as a standard by NBC Prakas in June 2020, enables any merchant to accept payments from any Bakong-connected bank or wallet through a single QR code.\n\nFor merchants and enterprises, this eliminates the need to support multiple payment app QR codes. A single KHQR code works across all participating institutions. CamFinTech builds the client side of a KHQR integration, such as point-of-sale or e-commerce checkout, for a fee and hands it over.',
    },
    {
      heading: 'Cross-Border Capabilities',
      content: 'Bakong has QR payment links abroad, which let a visitor pay a Cambodian merchant from a home-country app. They are payment links, not remittance services. The NBC\'s 2024 payment-system report records the links below; the NBC joined the ASEAN Regional Payment Connectivity initiative in April 2025.',
      table: {
        caption: 'Bakong QR payment links recorded by the NBC (Annual Report on the Payment System 2024, ch. 6)',
        headers: ['Counterpart', 'Launch recorded'],
        rows: [
          ['Thailand', '18 February 2020'],
          ['Laos', '18 August 2023'],
          ['Vietnam', '3 December 2023'],
          ['UnionPay network', '22 December 2023'],
          ['South Korea', '29 August 2024'],
          ['Malaysia', '19 September 2024'],
          ['Alipay+ network', '14 October 2024'],
        ],
      },
    },
    {
      heading: 'Where CamFinTech\'s Work Sits',
      content: 'For a business connecting to Bakong, CamFinTech prepares the regulatory readiness and compliance work the connection requires, and builds the client side of the integration: the link from the client\'s ERP, payment or reconciliation systems. It is charged as a fee and handed over, and the client operates it in its own environment.\n\nParticipation decisions rest with the National Bank of Cambodia and the participating institution, and the client is the applicant of record. CamFinTech does not host or transmit payment traffic, operates no rail and holds no client funds.',
    },
  ],
};
