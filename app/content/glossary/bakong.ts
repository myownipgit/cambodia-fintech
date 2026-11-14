import { ArticleContent } from '../types';

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
export const bakong: ArticleContent = {
  slug: 'bakong',
  title: 'What is Bakong?',
  description: 'Bakong is Cambodia\'s blockchain-based CBDC and real-time payment system operated by the National Bank of Cambodia, enabling instant KHR and USD settlement via KHQR.',
  type: 'glossary',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-08',
  readingTime: 3,
  schema: 'DefinedTerm',
  relatedSlugs: ['khqr', 'nbc', 'camdigikey'],
  lead: 'Bakong is Cambodia\'s central bank digital currency (CBDC) and real-time gross settlement system operated by the National Bank of Cambodia (NBC). Launched in 2020, Bakong enables instant peer-to-peer and merchant payments in both Khmer Riel (KHR) and US Dollars via the KHQR standardized QR code protocol.',
  // Claims removed 2026-08-31. This array previously carried figures attributed
  // to named institutional reports with no URL, access date or page reference.
  // A verified sample was wrong more often than not — including a Cambodian FATF
  // mutual evaluation that never took place, and citations to bodies that do not
  // exist under the names given. Restore an entry only when its figure has been
  // read in a fetched primary, on the same evidence bar as app/content/regulatory,
  // and record where it was read. See vault ADR-007.
  claims: [],
  sources: [
    { publisher: 'National Bank of Cambodia', label: 'Project Bakong: Next Generation Payment System, white paper, June 2020 (PDF)', url: 'https://bakong.nbc.gov.kh/download/NBC_BAKONG_White_Paper.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Bakong, official site (home page)', url: 'https://bakong.nbc.gov.kh', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Annual Report on the Payment System in Cambodia 2024 (Khmer, PDF, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-04',
  faqs: [
    { question: 'What is Bakong in Cambodia?', answer: 'Bakong is Cambodia\'s national digital currency and instant payment system operated by the National Bank of Cambodia (NBC). It is a blockchain-based CBDC (Central Bank Digital Currency) that enables real-time settlement of both Khmer Riel and US Dollar transactions through the KHQR QR code standard.' },
    { question: 'How does Bakong differ from mobile money services like Wing or ABA Pay?', answer: 'Unlike commercial mobile wallets, Bakong is a central bank-operated settlement rail. Wing, ABA Pay, and other mobile wallets connect TO Bakong as participant institutions. Bakong provides the underlying interbank settlement infrastructure, while commercial apps provide the consumer interface.' },
    { question: 'Can foreign businesses integrate with Bakong?', answer: 'Yes. Foreign enterprises operating in Cambodia can integrate with Bakong through participant banks. CamFinTech prepares the compliance work and builds the client side of the integration; it operates no rail and holds no client funds.' },
  ],
  sections: [
    {
      heading: 'How Bakong Works',
      content: 'Bakong operates as a hybrid CBDC system built on Hyperledger Iroha blockchain technology, developed in partnership with Japanese firm Soramitsu. The system functions as both a digital currency (e-wallet) and an interbank settlement network.\n\nWhen a consumer initiates a payment via any Bakong-connected bank app, the transaction settles in real-time on the Bakong ledger. This eliminates the multi-day clearing cycles typical of traditional banking. Both KHR and USD transactions are supported natively, reflecting Cambodia\'s dual-currency economy.',
    },
    {
      heading: 'KHQR Integration',
      content: 'KHQR (Khmer QR) is the standardized QR code payment protocol that operates on top of Bakong. KHQR, set as a standard by NBC Prakas in June 2020, enables any merchant to accept payments from any Bakong-connected bank or wallet through a single QR code.\n\nFor merchants and enterprises, this eliminates the need to support multiple payment app QR codes. A single KHQR code works across all participating institutions. CamFinTech builds the client side of a KHQR integration, such as point-of-sale or e-commerce checkout, for a fee and hands it over.',
    },
    {
      heading: 'Cross-Border Capabilities',
      content: 'Bakong has established cross-border payment corridors with several countries through bilateral agreements. Notable connections include linkages with Thailand\'s PromptPay, Malaysia\'s DuitNow, and China\'s Alipay.\n\nThese corridors enable real-time cross-border remittance and merchant payments, reducing transfer costs and settlement times from days to seconds. For enterprises operating across ASEAN, Bakong\'s cross-border capabilities present significant opportunities for payment optimization.',
      table: {
        caption: 'Bakong Cross-Border Payment Corridors',
        headers: ['Partner Country', 'System', 'Status', 'Use Case'],
        rows: [
          ['Thailand', 'PromptPay', 'Operational', 'Remittance, Tourism'],
          ['Malaysia', 'DuitNow', 'Operational', 'Remittance, Trade'],
          ['China', 'Alipay', 'Operational', 'Tourism, E-commerce'],
          ['Vietnam', 'NAPAS', 'In Development', 'Trade, Remittance'],
          ['Laos', 'LAPNet', 'MoU Signed', 'Border Trade'],
        ],
      },
    },
    {
      heading: 'Where CamFinTech\'s Work Sits',
      content: 'For a business connecting to Bakong, CamFinTech prepares the regulatory readiness and compliance work the connection requires, and builds the client side of the integration: the link from the client\'s ERP, payment or reconciliation systems. It is charged as a fee and handed over, and the client operates it in its own environment.\n\nParticipation decisions rest with the National Bank of Cambodia and the participating institution, and the client is the applicant of record. CamFinTech does not host or transmit payment traffic, operates no rail and holds no client funds.',
    },
  ],
};
