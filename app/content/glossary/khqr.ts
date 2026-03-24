import { ArticleContent } from '../types';

export const khqr: ArticleContent = {
  slug: 'khqr',
  title: 'KHQR: Cambodia\'s Standardized QR Payment Protocol for Instant Payments',
  description: 'KHQR is Cambodia\'s standardized QR code payment protocol based on EMVCo specifications, enabling interoperable instant payments across all Bakong-connected institutions.',
  type: 'glossary',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-03-25',
  readingTime: 3,
  schema: 'DefinedTerm',
  relatedSlugs: ['bakong', 'nbc', 'camdigikey'],
  lead: 'KHQR (Khmer QR) is Cambodia\'s standardized QR code payment protocol based on EMVCo specifications and operated through the Bakong payment system. Launched in 2022 by the National Bank of Cambodia, KHQR enables merchants to accept instant payments from any Bakong-connected bank or wallet through a single interoperable QR code.',
  claims: [
    { stat: 'KHQR merchant acceptance points exceeded 500,000 locations across Cambodia by end of 2024, spanning retail, food service, transportation, and government payments.', source: 'National Bank of Cambodia', year: '2025' },
    { stat: 'QR code-based payments in Cambodia grew by over 150% year-over-year in transaction volume during 2024, driven primarily by KHQR adoption.', source: 'National Bank of Cambodia Annual Report', year: '2024' },
    { stat: 'EMVCo-compliant QR payment standards have been adopted by over 30 countries globally, with Cambodia\'s KHQR recognized as one of the most successful implementations in Southeast Asia.', source: 'Bank for International Settlements', year: '2024' },
  ],
  faqs: [
    { question: 'What is KHQR and how is it different from other QR codes?', answer: 'KHQR (Khmer QR) is Cambodia\'s national standardized QR code payment protocol. Unlike proprietary QR codes from individual banks (such as ABA QR or ACLEDA QR), KHQR is interoperable, meaning a single KHQR code can accept payments from any Bakong-connected bank or mobile wallet. This eliminates the need for merchants to display multiple QR codes and provides a unified payment experience for consumers.' },
    { question: 'How does KHQR work with Bakong?', answer: 'KHQR operates as the consumer-facing payment interface on top of the Bakong settlement infrastructure. When a customer scans a KHQR code and initiates payment through their banking app, the transaction is routed through Bakong for real-time settlement. The merchant receives instant confirmation and the funds settle immediately between the customer\'s and merchant\'s banks via the Bakong ledger.' },
    { question: 'Can KHQR be used for cross-border payments?', answer: 'Yes. KHQR is being linked to QR payment systems in other countries through bilateral agreements facilitated by the NBC. Thai tourists can scan KHQR codes using PromptPay-connected apps, and Malaysian visitors can pay via DuitNow-linked wallets. These cross-border QR corridors operate through Bakong\'s international settlement connections.' },
  ],
  sections: [
    {
      heading: 'EMVCo Standard and Technical Architecture',
      content: 'KHQR is built on the EMVCo QR Code Specification for Payment Systems, the global standard maintained by the consortium behind Visa, Mastercard, JCB, UnionPay, American Express, and Discover. This ensures KHQR codes follow internationally recognized data structures and security protocols.\n\nEach KHQR code encodes merchant identification data, the receiving bank\'s Bakong participant ID, transaction amount (optional for static codes), and currency denomination (KHR or USD). The EMVCo format also includes provisions for additional data fields, enabling value-added features such as loyalty program integration, tip suggestions, and transaction metadata.',
    },
    {
      heading: 'Merchant Adoption and Acceptance Network',
      content: 'KHQR adoption has expanded rapidly across Cambodia since its 2022 launch. The NBC has driven merchant acceptance through a combination of regulatory mandates for banks to support KHQR and incentive programs that subsidize merchant onboarding costs. Today, KHQR is accepted at a wide range of locations from large retail chains and hotels to street vendors and tuk-tuk drivers.\n\nThe system supports both static and dynamic QR codes. Static KHQR codes are printed once and displayed at merchant locations, with customers entering the payment amount manually. Dynamic KHQR codes are generated per transaction with a pre-filled amount, commonly used for e-commerce and point-of-sale integrations.',
      table: {
        caption: 'KHQR Code Types and Use Cases',
        headers: ['Type', 'Generation', 'Amount', 'Best For'],
        rows: [
          ['Static Merchant', 'Printed once, reused', 'Customer enters amount', 'Street vendors, small shops'],
          ['Dynamic Merchant', 'Generated per transaction', 'Pre-filled by POS', 'Retail chains, restaurants'],
          ['Dynamic P2P', 'Generated per request', 'Pre-filled by requester', 'Peer-to-peer transfers'],
          ['E-commerce', 'Generated at checkout', 'Pre-filled from cart', 'Online shopping, delivery apps'],
        ],
      },
    },
    {
      heading: 'KHQR as Distribution Rail for Financial Products',
      content: 'Beyond basic payments, KHQR is emerging as a distribution channel for embedded financial products. The ubiquity of KHQR acceptance creates an infrastructure layer through which insurance products, lending offers, loyalty rewards, and other financial services can be delivered at the moment of transaction.\n\nFor example, a micro-insurance product could be offered at KHQR checkout, or a merchant financing offer triggered based on KHQR transaction volume. This positions KHQR not just as a payment tool but as a platform for financial product distribution in a market where traditional distribution channels remain limited.',
    },
    {
      heading: 'Enterprise Integration with CamFinTech',
      content: 'CamFinTech provides KHQR integration services for enterprises across multiple use cases. For merchants, we implement KHQR acceptance at point-of-sale terminals, e-commerce platforms, and self-service kiosks. For financial institutions, we develop KHQR-based payment products and merchant acquiring solutions.\n\nCamFinTech also consults on advanced KHQR use cases including embedded financial product distribution via KHQR transaction flows, cross-border QR payment acceptance for tourism and trade businesses, and KHQR data analytics for merchant intelligence. Our integration approach ensures full compliance with NBC technical specifications and security requirements.',
    },
  ],
};
