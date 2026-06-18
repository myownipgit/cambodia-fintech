import { ArticleContent } from '../types';

export const bakong: ArticleContent = {
  slug: 'bakong',
  title: 'What is Bakong?',
  description: 'Bakong is Cambodia\'s blockchain-based CBDC and real-time payment system operated by the National Bank of Cambodia, enabling instant KHR and USD settlement via KHQR.',
  type: 'glossary',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-06-18',
  readingTime: 3,
  schema: 'DefinedTerm',
  relatedSlugs: ['khqr', 'nbc', 'camdigikey'],
  lead: 'Bakong is Cambodia\'s central bank digital currency (CBDC) and real-time gross settlement system operated by the National Bank of Cambodia (NBC). Launched in 2020, Bakong enables instant peer-to-peer and merchant payments in both Khmer Riel (KHR) and US Dollars via the KHQR standardized QR code protocol.',
  claims: [
    { stat: 'Bakong processed over 21 million transactions in 2024, representing a 78% year-over-year increase in adoption across Cambodia.', source: 'National Bank of Cambodia Annual Report', year: '2024' },
    { stat: 'Over 60 financial institutions including banks, microfinance institutions, and payment service providers are connected to the Bakong system.', source: 'National Bank of Cambodia', year: '2025' },
    { stat: 'Cambodia is one of only a few countries globally with a fully operational retail CBDC, positioning it ahead of most ASEAN nations in digital currency deployment.', source: 'Bank for International Settlements', year: '2024' },
  ],
  faqs: [
    { question: 'What is Bakong in Cambodia?', answer: 'Bakong is Cambodia\'s national digital currency and instant payment system operated by the National Bank of Cambodia (NBC). It is a blockchain-based CBDC (Central Bank Digital Currency) that enables real-time settlement of both Khmer Riel and US Dollar transactions through the KHQR QR code standard.' },
    { question: 'How does Bakong differ from mobile money services like Wing or ABA Pay?', answer: 'Unlike commercial mobile wallets, Bakong is a central bank-operated settlement rail. Wing, ABA Pay, and other mobile wallets connect TO Bakong as participant institutions. Bakong provides the underlying interbank settlement infrastructure, while commercial apps provide the consumer interface.' },
    { question: 'Can foreign businesses integrate with Bakong?', answer: 'Yes. Foreign enterprises operating in Cambodia can integrate with Bakong through participant banks. CamFinTech navigates the approval to integrate with Bakong and coordinates the technical build with accredited Service Providers — we never operate the rail or hold client funds.' },
  ],
  sections: [
    {
      heading: 'How Bakong Works',
      content: 'Bakong operates as a hybrid CBDC system built on Hyperledger Iroha blockchain technology, developed in partnership with Japanese firm Soramitsu. The system functions as both a digital currency (e-wallet) and an interbank settlement network.\n\nWhen a consumer initiates a payment via any Bakong-connected bank app, the transaction settles in real-time on the Bakong ledger. This eliminates the multi-day clearing cycles typical of traditional banking. Both KHR and USD transactions are supported natively, reflecting Cambodia\'s dual-currency economy.',
    },
    {
      heading: 'KHQR Integration',
      content: 'KHQR (Khmer QR) is the standardized QR code payment protocol that operates on top of Bakong. Introduced in July 2022, KHQR enables any merchant to accept payments from any Bakong-connected bank or wallet through a single QR code.\n\nFor merchants and enterprises, this eliminates the need to support multiple payment app QR codes. A single KHQR code works across all participating institutions. CamFinTech helps businesses navigate the approval to accept KHQR and coordinates the technical build (point-of-sale integration, e-commerce gateway) with accredited Service Providers.',
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
      heading: 'Enterprise Approval-Navigation with CamFinTech',
      content: 'CamFinTech navigates the approval for businesses to integrate with Bakong, and runs the compliance programme that keeps them approved. This includes regulatory readiness assessment, NBC liaison, KHQR merchant-onboarding sequencing, and the compliance architecture that ERP, payment-gateway, and reconciliation builds must satisfy.\n\nThe technical build itself — API connectivity to the Bakong Open API, payment-gateway development, reconciliation pipelines — is coordinated with accredited Service Providers. CamFinTech is fee-only and never operates the rail or holds client funds.',
    },
  ],
};
