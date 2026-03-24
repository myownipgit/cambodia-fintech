import { ArticleContent } from '../types';

export const howBakongWorks: ArticleContent = {
  slug: 'how-bakong-works',
  title: 'How Does Bakong Work in Cambodia?',
  description: 'A deep-dive into Bakong\'s blockchain architecture, Hyperledger Iroha consensus, dual-currency settlement in KHR and USD, KHQR integration, cross-border corridors, and developer API access.',
  type: 'learn',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-03-25',
  readingTime: 6,
  schema: 'Article',
  relatedSlugs: ['bakong', 'khqr', 'nbc'],
  lead: 'Bakong is far more than a mobile wallet. It is a central bank digital currency (CBDC) and real-time gross settlement system built on Hyperledger Iroha blockchain technology, operated by the National Bank of Cambodia (NBC). Since its public launch in October 2020, Bakong has grown into the payment backbone of the Cambodian economy, connecting over 60 financial institutions, enabling dual-currency settlement in both Khmer Riel (KHR) and US Dollars (USD), and powering the KHQR standardized QR code protocol that has become ubiquitous in Cambodian commerce.',
  claims: [
    { stat: 'Bakong processed over 21 million transactions in 2024, representing a 78% year-over-year increase, with total value exceeding USD 26 billion.', source: 'National Bank of Cambodia Annual Report', year: '2024' },
    { stat: 'Cambodia ranks among the top five countries globally with a fully operational retail CBDC, ahead of most ASEAN peers.', source: 'Bank for International Settlements CBDC Tracker', year: '2024' },
    { stat: 'Mobile money and digital payment adoption in Cambodia reached 73% of the adult population in 2024, up from 36% in 2017, driven largely by Bakong infrastructure.', source: 'World Bank Global Findex Database', year: '2024' },
    { stat: 'Cross-border remittance costs from Thailand to Cambodia fell by approximately 50% after Bakong-PromptPay linkage, from an average 10% to under 5% of transaction value.', source: 'Asian Development Bank', year: '2024' },
  ],
  faqs: [
    { question: 'Is Bakong a cryptocurrency?', answer: 'No. Bakong is a central bank digital currency (CBDC), not a cryptocurrency. It is issued and fully backed by the National Bank of Cambodia, operates on a permissioned Hyperledger Iroha blockchain, and maintains a stable 1:1 peg to fiat KHR and USD. Unlike cryptocurrencies, Bakong has no speculative value and is designed purely for payment settlement.' },
    { question: 'Do I need a bank account to use Bakong?', answer: 'No. Bakong supports both bank-linked wallets and standalone e-wallets. Users can open a Bakong wallet by completing KYC through a participating institution. This design deliberately targets financial inclusion for Cambodia\'s unbanked population, which the World Bank estimates at approximately 27% of adults.' },
    { question: 'Can foreign businesses accept Bakong payments?', answer: 'Yes. Any business registered in Cambodia can accept Bakong payments through a participating bank. Foreign enterprises should engage a licensed payment service provider or directly integrate with the Bakong Open API via their bank partner. CamFinTech provides full technical consulting for enterprise Bakong integration.' },
  ],
  sections: [
    {
      heading: 'The Hyperledger Iroha Foundation',
      content: 'Bakong is built on Hyperledger Iroha, an open-source distributed ledger framework originally developed by Soramitsu, a Japanese blockchain company. Unlike public blockchains such as Bitcoin or Ethereum, Hyperledger Iroha is a permissioned network where only authorized validator nodes operated by the NBC participate in consensus.\n\nThe consensus mechanism uses a variant of Byzantine Fault Tolerant (BFT) ordering, which means the network can process transactions within one to two seconds even if some validator nodes fail. This architecture gives Bakong the speed of centralized payment systems while retaining the auditability and resilience of distributed ledger technology. Each transaction is cryptographically signed and immutably recorded, providing a tamper-proof audit trail for regulators.',
    },
    {
      heading: 'Dual-Currency Settlement Architecture',
      content: 'Cambodia operates a de facto dual-currency economy where both Khmer Riel (KHR) and US Dollars (USD) circulate freely. Bakong was engineered to handle both currencies natively. When a user initiates a payment, the system identifies the currency, routes the transaction to the appropriate ledger, and settles in real time.\n\nCross-currency transactions are also supported. If a payer sends KHR and the merchant accepts only USD, the participating bank performs an FX conversion at the prevailing NBC reference rate. This dual-currency capability is a distinguishing feature that sets Bakong apart from most CBDC implementations globally, which typically support only the domestic currency.',
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
      content: 'KHQR (Khmer QR) is the standardized QR code protocol mandated by the NBC that runs on top of Bakong infrastructure. Based on the EMVCo QR Code Specification, KHQR assigns each merchant a unique identifier embedded in the QR code. Any customer using any Bakong-connected bank app can scan a single KHQR code to pay.\n\nBefore KHQR, merchants needed separate QR codes for each bank or wallet. KHQR interoperability eliminated this fragmentation. By early 2025, over 400,000 merchant KHQR codes had been registered across Cambodia. The protocol supports both static QR codes printed at point-of-sale locations and dynamic QR codes generated per transaction for e-commerce and invoicing scenarios.',
      table: {
        caption: 'KHQR Adoption Milestones',
        headers: ['Year', 'Registered Merchants', 'Monthly Transactions', 'Key Development'],
        rows: [
          ['2022', '~50,000', '~500,000', 'KHQR standard launched by NBC'],
          ['2023', '~180,000', '~2.5 million', 'Interoperability mandate enforced'],
          ['2024', '~350,000', '~6 million', 'Tourist acceptance expanded'],
          ['2025', '~400,000+', '~8 million+', 'Dynamic QR for e-commerce scaling'],
        ],
      },
    },
    {
      heading: 'Cross-Border Payment Corridors',
      content: 'The NBC has aggressively pursued bilateral payment linkages with neighboring countries. The Bakong-PromptPay corridor with Thailand became operational in 2023, enabling migrant workers to send remittances home for a fraction of traditional wire transfer costs. The ADB estimates that Thailand-Cambodia remittance corridor handles over USD 1.5 billion annually.\n\nSimilar linkages with Malaysia\'s DuitNow and China\'s Alipay are operational, while corridors with Vietnam\'s NAPAS and Laos\'s LAPNet are in advanced development. These cross-border connections position Cambodia as an ASEAN payment hub and reduce friction for regional trade. For enterprises, cross-border Bakong corridors enable real-time supplier payments across Southeast Asia without relying on SWIFT or correspondent banking.',
    },
    {
      heading: 'Developer APIs and Integration Patterns',
      content: 'The Bakong Open API provides a RESTful interface for financial institutions and licensed fintech companies to integrate with the payment network. The API supports account lookup, payment initiation, transaction status queries, and webhook-based notifications for real-time settlement confirmation.\n\nIntegration follows a tiered model. Banks and licensed payment service providers connect directly to the Bakong API gateway. Merchants and enterprises access Bakong through their bank\'s API layer or through licensed payment aggregators. Authentication uses OAuth 2.0 with mutual TLS for transport security. CamFinTech assists enterprises in designing their integration architecture, mapping business workflows to Bakong API endpoints, and building reconciliation pipelines.',
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
      content: 'For enterprises evaluating Cambodia\'s digital payment landscape, Bakong represents mandatory infrastructure rather than an optional channel. The NBC\'s strategy is to route all domestic retail payments through Bakong rails over time, making direct integration a strategic imperative.\n\nCamFinTech advises enterprises on three integration horizons: immediate KHQR acceptance for retail operations, medium-term API integration for automated B2B payments and reconciliation, and long-term positioning for cross-border payment corridors as ASEAN linkages mature. Companies that build Bakong-native payment systems now will have a structural advantage as Cambodia\'s digital economy scales toward the government\'s 2035 Digital Economy Framework targets.',
    },
  ],
};
