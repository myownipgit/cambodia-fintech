import { ArticleContent } from '../types';

export const howToAcceptKHQR: ArticleContent = {
  slug: 'how-to-accept-khqr',
  title: 'How to Accept KHQR Payments in Cambodia',
  description: 'A practical guide to accepting KHQR payments in Cambodia, covering merchant registration, EMVCo QR standards, POS integration, e-commerce SDKs, reconciliation, fees, and tourist acceptance.',
  type: 'learn',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-06-18',
  readingTime: 5,
  schema: 'Article',
  relatedSlugs: ['khqr', 'bakong', 'nbc'],
  lead: 'KHQR (Khmer QR) is Cambodia\'s national standardized QR code payment protocol, mandated by the National Bank of Cambodia (NBC) to enable interoperable instant payments across all Bakong-connected financial institutions. Any customer with any participating bank or wallet app can pay any KHQR merchant through a single QR code scan. For businesses operating in Cambodia, accepting KHQR is no longer optional but a commercial necessity: over 400,000 merchants are registered, and consumer preference has shifted decisively toward QR-based payments. This guide covers the complete process from merchant registration to production integration.',
  claims: [
    { stat: 'Over 400,000 merchant KHQR codes were registered in Cambodia by early 2025, with the NBC targeting 600,000 by the end of the year.', source: 'National Bank of Cambodia', year: '2025' },
    { stat: 'QR code payments accounted for approximately 45% of all point-of-sale digital transactions in Cambodia in 2024, up from 18% in 2022.', source: 'National Bank of Cambodia Payment Systems Report', year: '2024' },
    { stat: 'Cross-border QR payment acceptance through Bakong corridors enabled over USD 200 million in tourist spending in 2024, primarily from Thai and Chinese visitors.', source: 'Asian Development Bank', year: '2024' },
    { stat: 'Merchant discount rates for KHQR transactions range from 0% to 0.5% depending on the acquiring bank, significantly lower than the 2-3% typical for international card networks.', source: 'National Bank of Cambodia', year: '2024' },
  ],
  faqs: [
    { question: 'How much does it cost to accept KHQR payments?', answer: 'KHQR merchant fees are among the lowest in the region. Most acquiring banks charge between 0% and 0.5% per transaction, with some banks waiving fees entirely for small merchants to encourage adoption. There are no monthly fees, terminal rental charges, or chargeback costs. Compare this to international card networks which typically charge 2-3% per transaction.' },
    { question: 'Can tourists pay with KHQR?', answer: 'Yes. Through Bakong\'s cross-border corridors, tourists from Thailand (PromptPay), Malaysia (DuitNow), and China (Alipay) can scan KHQR codes and pay using their home banking apps. The currency conversion happens automatically. This makes KHQR the most tourist-friendly payment method in Cambodia.' },
    { question: 'How long does KHQR settlement take?', answer: 'KHQR transactions settle in real time on the Bakong ledger, typically within one to two seconds. Funds are available in the merchant\'s account immediately. There is no batch processing or multi-day settlement delay, which is a significant advantage for cash-flow-sensitive businesses.' },
  ],
  sections: [
    {
      heading: 'Understanding the EMVCo QR Standard',
      content: 'KHQR is built on the EMVCo QR Code Specification for Payment Systems, the same international standard used by PromptPay in Thailand, PayNow in Singapore, and DuitNow in Malaysia. The EMVCo standard defines a structured data format encoded within a QR code that includes merchant identifier, acquirer information, transaction currency, amount (for dynamic QR), and a CRC checksum for data integrity.\n\nThe NBC adopted EMVCo to ensure international interoperability from day one. This means KHQR codes are technically compatible with any EMVCo-compliant payment app, which is what enables cross-border QR acceptance with Thailand, Malaysia, and other corridor partners. The standard supports both merchant-presented QR (the merchant displays a code) and consumer-presented QR (the customer displays a code for the merchant to scan).',
    },
    {
      heading: 'Merchant Registration Process',
      content: 'To accept KHQR payments, a business must register through a participating bank or licensed payment service provider (PSP). The registration process involves submitting business registration documents, a valid tax identification number, bank account details for settlement, and the business owner\'s identity verification (increasingly through CamDigiKey).\n\nOnce approved, the acquiring bank issues a unique Merchant ID and generates the KHQR code. For physical locations, this is typically a printed static QR code displayed at the point of sale. For e-commerce, the merchant receives API credentials to generate dynamic QR codes per transaction. Registration typically takes three to five business days, though some banks offer expedited same-day onboarding for existing customers.',
      table: {
        caption: 'KHQR Merchant Registration Requirements',
        headers: ['Requirement', 'Individual/Sole Trader', 'Registered Business', 'Foreign Enterprise'],
        rows: [
          ['Identity Document', 'National ID or passport', 'Director ID + company stamp', 'Passport + work permit'],
          ['Business License', 'Patent tax certificate', 'MoC registration + patent', 'MoC registration + FDI certificate'],
          ['Tax Registration', 'TIN (if applicable)', 'TIN + VAT certificate', 'TIN + VAT certificate'],
          ['Bank Account', 'Personal or business', 'Business account', 'Business account (KHR or USD)'],
          ['Processing Time', '1-3 business days', '3-5 business days', '5-7 business days'],
        ],
      },
    },
    {
      heading: 'POS Integration for Physical Stores',
      content: 'For brick-and-mortar businesses, KHQR integration ranges from zero-tech to fully automated. The simplest approach is a printed static QR code displayed at the checkout counter. The customer scans it, enters the payment amount, and confirms. The merchant receives a push notification from their bank app confirming receipt.\n\nFor higher-volume operations, dynamic QR integration with the POS system is recommended. The POS generates a transaction-specific QR code that includes the exact amount, eliminating manual entry errors. When the customer pays, the Bakong callback confirms the transaction and the POS automatically marks it as paid. CamFinTech scopes both approaches against the business profile and coordinates the build with accredited Service Providers; we recommend dynamic QR for any business processing more than 50 transactions per day.',
    },
    {
      heading: 'E-Commerce Integration and SDK Options',
      content: 'For online businesses, KHQR integration requires generating dynamic QR codes on the checkout page and listening for payment confirmation via webhook callbacks. The merchant\'s acquiring bank provides API endpoints for QR generation and payment status queries.\n\nSeveral banks offer SDKs in common programming languages including JavaScript, Python, PHP, and Java. The typical integration flow is: the checkout page calls the bank\'s API to generate a KHQR code with the order amount, displays it to the customer, and listens for a webhook callback confirming payment. CamFinTech scopes the appropriate platform-specific integration path (WooCommerce, Shopify, or custom e-commerce platforms) and coordinates the build with accredited Service Providers.',
      table: {
        caption: 'KHQR E-Commerce Integration Methods',
        headers: ['Method', 'Technical Effort', 'Best For', 'Features'],
        rows: [
          ['Bank payment page redirect', 'Low', 'Small merchants', 'Hosted checkout, no coding required'],
          ['Bank API + custom QR display', 'Medium', 'Custom e-commerce sites', 'Embedded QR, webhook callbacks'],
          ['Payment aggregator SDK', 'Low-Medium', 'Multi-bank acceptance', 'Unified API, pre-built UI components'],
          ['Direct Bakong API (via bank)', 'High', 'Enterprise platforms', 'Full control, real-time reconciliation'],
        ],
      },
    },
    {
      heading: 'Reconciliation and Reporting',
      content: 'KHQR transactions settle instantly on the Bakong ledger, and acquiring banks provide reconciliation data through their merchant portals and APIs. Each transaction record includes a unique Bakong transaction ID, timestamp, payer institution, amount, currency, and settlement status.\n\nFor businesses with multiple outlets or high transaction volumes, automated reconciliation is essential. CamFinTech scopes the reconciliation requirements and coordinates the build with accredited Service Providers — the pipelines match KHQR settlement records against the merchant\'s internal sales records, flagging discrepancies and generating daily reports. The Bakong transaction ID serves as the universal reference for dispute resolution. Most acquiring banks provide transaction data via CSV export, API query, or SFTP push on a daily basis.',
    },
    {
      heading: 'Fee Structure and Cost Comparison',
      content: 'One of KHQR\'s most compelling advantages is its cost structure. The NBC has worked with acquiring banks to keep merchant discount rates (MDR) between 0% and 0.5%, dramatically lower than international card network fees. Some banks waive fees entirely for micro-merchants to accelerate adoption.\n\nThe low fee structure reflects the NBC\'s policy objective of driving digital payment adoption across Cambodia\'s economy. For merchants, the savings compared to card acceptance are substantial, particularly for businesses with high transaction volumes or low margins.',
      table: {
        caption: 'Payment Method Cost Comparison for Merchants',
        headers: ['Payment Method', 'Merchant Fee (MDR)', 'Settlement Time', 'Chargeback Risk', 'Setup Cost'],
        rows: [
          ['KHQR (Bakong)', '0-0.5%', 'Instant', 'None', 'Free'],
          ['Visa/Mastercard', '2.0-3.0%', '1-3 business days', 'Yes', 'Terminal rental'],
          ['Cash', '0%', 'Immediate', 'None', 'Cash handling costs'],
          ['Bank transfer', '0-0.3%', 'Same day', 'None', 'Free'],
          ['International e-wallet', '1.5-3.5%', '1-7 business days', 'Varies', 'Integration fee'],
        ],
      },
    },
    {
      heading: 'Tourist Acceptance via Cross-Border Corridors',
      content: 'KHQR\'s cross-border corridors with Thailand\'s PromptPay, Malaysia\'s DuitNow, and China\'s Alipay mean that tourists from these countries can pay at any KHQR merchant using their home country banking apps. The tourist scans the same KHQR code that domestic customers use. The Bakong system identifies the foreign payment source, routes it through the bilateral corridor, performs currency conversion, and settles in the merchant\'s local currency.\n\nFor tourism-dependent businesses in Siem Reap, Phnom Penh, and Sihanoukville, this capability eliminates the need for separate Alipay or WeChat Pay merchant registrations. A single KHQR code handles both domestic and tourist payments. CamFinTech navigates the approval and configuration steps for hospitality and retail businesses optimizing their KHQR setup for multi-corridor acceptance.',
    },
    {
      heading: 'Getting Started with CamFinTech',
      content: 'CamFinTech navigates the approval for businesses to accept KHQR — tailored to your business type and scale. For small merchants, we facilitate rapid registration through our banking partners and provide staff training on payment acceptance. For medium and large enterprises, we scope the integration architecture across POS systems, e-commerce platforms, and back-office reconciliation, then coordinate the build with accredited Service Providers.\n\nAPI integration, webhook configuration, error handling, and testing against the Bakong sandbox are delivered by our accredited partners. CamFinTech runs the compliance programme that keeps your KHQR acceptance approved as the NBC introduces new features and cross-border corridors. We are fee-only, never operate the rail, and never hold client funds — whether you are a single-location restaurant or a multi-branch retail chain.',
    },
  ],
};
