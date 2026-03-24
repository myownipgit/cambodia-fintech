import { ArticleContent } from '../types';

export const crossBorderPaymentsBakong: ArticleContent = {
  slug: 'cross-border-payments-bakong',
  title: 'How Do Cross-Border Payments Work via Bakong?',
  description: 'A detailed guide to cross-border payments through Cambodia\'s Bakong system, covering bilateral QR corridors with Thailand PromptPay, Malaysia DuitNow, and China Alipay, remittance flows, settlement mechanics, FX handling, tourist payments, the Bakong Tourist App, and future ASEAN expansion.',
  type: 'learn',
  cluster: 'compliance',
  publishedAt: '2026-03-25',
  updatedAt: '2026-03-25',
  readingTime: 6,
  schema: 'Article',
  relatedSlugs: ['bakong', 'nbc', 'khqr'],
  lead: 'Bakong\'s cross-border payment corridors represent one of the most advanced real-time international settlement implementations in the developing world. Through bilateral agreements with Thailand\'s PromptPay, Malaysia\'s DuitNow, and China\'s Alipay, Cambodia\'s central bank digital currency enables instant cross-border transfers that reduce costs by 40-60% compared to traditional remittance channels. The Bank for International Settlements has cited Bakong\'s cross-border architecture as a model for emerging market CBDC interoperability, and with corridors to Vietnam and Laos under development, Cambodia is positioning itself as a hub for ASEAN real-time payment connectivity.',
  claims: [
    { stat: 'Cross-border remittances to Cambodia totaled $3.1 billion in 2024, with Thailand and Malaysia accounting for over 60% of inbound flows from Cambodian migrant workers.', source: 'World Bank Migration and Remittances Data', year: '2024' },
    { stat: 'The Bakong-PromptPay corridor reduced average remittance costs from 8-10% to under 3% for Cambodia-Thailand transfers, processing transactions in under 30 seconds.', source: 'National Bank of Cambodia', year: '2025' },
    { stat: 'The Bank for International Settlements identified bilateral CBDC linkages like Bakong\'s corridors as the most practical near-term approach to cross-border CBDC interoperability.', source: 'BIS Innovation Hub Cross-Border Payments Report', year: '2024' },
    { stat: 'Cambodia received approximately 1.2 million international tourist arrivals in the first half of 2025, with Chinese, Thai, and Malaysian visitors representing the primary source markets for Bakong Tourist App usage.', source: 'Ministry of Tourism, Cambodia', year: '2025' },
  ],
  faqs: [
    { question: 'How do cross-border payments work through Bakong?', answer: 'Bakong processes cross-border payments through bilateral linkages with foreign national payment systems. When a sender in Thailand initiates a transfer via PromptPay, the payment routes through the PromptPay-Bakong connection, converts currency at real-time NBC exchange rates, and settles instantly into the recipient\'s Bakong-connected account in Cambodia. The entire process takes under 30 seconds and costs significantly less than traditional wire transfers.' },
    { question: 'Which countries can send payments to Cambodia via Bakong?', answer: 'As of 2026, Bakong has operational cross-border payment corridors with Thailand (via PromptPay), Malaysia (via DuitNow), and China (via Alipay). Corridors with Vietnam (NAPAS) and Laos (LAPNet) are under development. These bilateral linkages support both remittance transfers and merchant payments, with additional ASEAN corridors planned.' },
    { question: 'Can tourists use Bakong to pay in Cambodia?', answer: 'Yes. The NBC launched the Bakong Tourist App, which allows foreign visitors to load funds and make KHQR payments at any merchant in Cambodia. Thai tourists can link their PromptPay accounts, Malaysian visitors can connect DuitNow, and Chinese travelers can use Alipay integration. The app handles currency conversion automatically and eliminates the need for visitors to carry US dollars or Khmer Riel.' },
  ],
  sections: [
    {
      heading: 'The Architecture of Bakong Cross-Border Corridors',
      content: 'Bakong\'s cross-border payment architecture operates through bilateral linkages between Cambodia\'s CBDC system and foreign national payment networks. Unlike traditional correspondent banking, which requires intermediary banks, SWIFT messaging, and multi-day settlement, Bakong\'s corridors establish direct system-to-system connections that settle in real-time.\n\nEach corridor follows a common technical pattern. The sending country\'s payment system initiates the transfer, which is routed through a bilateral gateway maintained jointly by the two central banks or payment operators. The gateway handles message translation between the two systems\' protocols, triggers real-time FX conversion, and settles the transaction simultaneously on both domestic ledgers. This architecture eliminates correspondent banking fees, reduces settlement risk, and provides end-to-end transaction visibility. The NBC operates the Cambodian side of each gateway, ensuring all cross-border flows settle through the Bakong ledger.',
    },
    {
      heading: 'Thailand PromptPay Corridor',
      content: 'The Bakong-PromptPay corridor, launched in 2023, is the most heavily utilized cross-border pathway. Thailand hosts an estimated 1.2 million Cambodian migrant workers who collectively sent over $1.8 billion in remittances home in 2024. The corridor enables these workers to send money directly from their Thai bank accounts to any Bakong-connected wallet in Cambodia, settling in under 30 seconds at a cost of approximately 1-3% compared to the 8-10% charged by traditional remittance agents.\n\nThe corridor also supports merchant payments. Cambodian tourists in Thailand can scan PromptPay QR codes using their Bakong app, while Thai visitors to Cambodia can pay at KHQR merchants. Settlement occurs in real-time with FX conversion at NBC-published rates. The reduction in remittance costs alone represents hundreds of millions of dollars in savings for Cambodian migrant families, making this corridor one of the most impactful CBDC implementations globally.',
    },
    {
      heading: 'Malaysia DuitNow and China Alipay Corridors',
      content: 'The Bakong-DuitNow corridor with Malaysia became operational in 2024, serving approximately 400,000 Cambodian workers in Malaysia who remitted an estimated $800 million in 2024. The corridor operates on the same bilateral gateway model as PromptPay, with real-time settlement between DuitNow\'s instant payment system and Bakong. Malaysian Ringgit to KHR/USD conversion occurs at competitive interbank rates, eliminating the spread that traditional remittance operators charge.\n\nThe Alipay corridor focuses on tourist payments and e-commerce rather than remittances. Chinese visitors to Cambodia can pay at any KHQR merchant using their Alipay wallet, with settlement flowing through the Bakong-Alipay bilateral connection. For Cambodian merchants in tourist-heavy areas like Siem Reap and Phnom Penh, this eliminates the need for separate Chinese payment terminal agreements and provides direct settlement into their Bakong-connected accounts.',
      table: {
        caption: 'Bakong Cross-Border Corridor Comparison',
        headers: ['Corridor', 'Launch Year', 'Primary Use Case', 'Est. Annual Volume', 'Avg. Transaction Time', 'Cost vs Traditional'],
        rows: [
          ['PromptPay (Thailand)', '2023', 'Remittance + Tourism', '$1.8B+', '<30 seconds', '60-70% cheaper'],
          ['DuitNow (Malaysia)', '2024', 'Remittance + Trade', '$800M+', '<30 seconds', '50-60% cheaper'],
          ['Alipay (China)', '2024', 'Tourism + E-commerce', '$200M+', '<15 seconds', '40-50% cheaper'],
          ['NAPAS (Vietnam)', '2026 (planned)', 'Trade + Remittance', 'TBD', 'Target: <30 seconds', 'Target: 50%+ cheaper'],
          ['LAPNet (Laos)', '2026 (planned)', 'Border Trade', 'TBD', 'Target: <30 seconds', 'Target: 60%+ cheaper'],
        ],
      },
    },
    {
      heading: 'Settlement Mechanics and FX Handling',
      content: 'Cross-border settlement through Bakong involves three simultaneous operations: payment message routing, foreign exchange conversion, and ledger settlement. When a PromptPay user in Thailand sends 10,000 THB to a Bakong recipient in Cambodia, the bilateral gateway converts the amount at the real-time exchange rate published by the NBC, deducts a small corridor fee (typically 0.5-1.5%), and credits the equivalent USD or KHR amount to the recipient\'s Bakong account.\n\nFX risk is managed through daily net settlement between the two central banks. Rather than converting each individual transaction at spot rates, the gateway aggregates flows and settles the net difference at the daily fixing rate. This reduces FX volatility exposure while maintaining real-time transaction processing for end users. Cambodia\'s dual-currency economy creates an additional layer: recipients can choose to receive funds in USD or KHR, with the Bakong system handling the final conversion leg. The NBC maintains FX reserves specifically allocated to support cross-border corridor liquidity.',
    },
    {
      heading: 'Bakong Tourist App and Visitor Payments',
      content: 'The Bakong Tourist App, launched by the NBC in 2025, extends Bakong\'s payment capabilities to international visitors without requiring a Cambodian bank account. The app allows tourists to load funds from their home country payment systems and spend at any KHQR-accepting merchant in Cambodia.\n\nThai tourists link their PromptPay accounts directly. Malaysian visitors connect via DuitNow. Chinese travelers can top up through Alipay. The app handles all currency conversion automatically, displays prices in both local and home currencies, and provides transaction receipts in the user\'s language. For Cambodia\'s tourism sector, which welcomed approximately 1.2 million international arrivals in the first half of 2025, the Tourist App eliminates a significant friction point: the need for visitors to obtain and carry US dollars, which has historically been the primary tourist payment method.',
      table: {
        caption: 'Bakong Tourist App Features by Source Country',
        headers: ['Feature', 'Thai Visitors', 'Malaysian Visitors', 'Chinese Visitors'],
        rows: [
          ['Funding Source', 'PromptPay / Thai bank', 'DuitNow / Malaysian bank', 'Alipay wallet'],
          ['Currency Displayed', 'THB + KHR/USD', 'MYR + KHR/USD', 'CNY + KHR/USD'],
          ['Top-up Method', 'Direct bank link', 'Direct bank link', 'Alipay transfer'],
          ['Payment Method', 'Scan KHQR code', 'Scan KHQR code', 'Scan KHQR code'],
          ['Language Support', 'Thai + English', 'Malay + English', 'Simplified Chinese + English'],
          ['FX Rate Source', 'NBC daily rate', 'NBC daily rate', 'NBC daily rate'],
        ],
      },
    },
    {
      heading: 'Remittance Market Transformation',
      content: 'Bakong\'s cross-border corridors are fundamentally reshaping Cambodia\'s $3.1 billion annual remittance market. Before Bakong, migrant worker remittances flowed through three primary channels: informal hawala networks (estimated 30-40% of flows), licensed money transfer operators like Western Union and MoneyGram (40-50%), and bank wire transfers (10-20%). Average costs ranged from 5-10% of the transfer amount, with settlement times of 1-3 days.\n\nBakong corridors compress this to under 30 seconds at 1-3% cost. The impact is measurable: the World Bank reports that Cambodia\'s average remittance cost dropped from 7.2% in 2022 to 4.1% in 2025, with corridor-specific costs even lower. For a migrant worker sending $300 per month, the savings amount to $10-20 per transfer, or $120-240 annually -- a meaningful increase in the effective value of their labor. The formalization of remittance flows through Bakong also provides better data for economic planning and AML monitoring.',
    },
    {
      heading: 'Future ASEAN Expansion and Regional Strategy',
      content: 'The NBC has articulated an ambitious vision for expanding Bakong\'s cross-border connectivity across ASEAN. Corridors with Vietnam\'s NAPAS system and Laos\'s LAPNet are under active development, with launch targets in 2026. Discussions with Indonesia\'s BI-FAST system and the Philippines\' InstaPay are at the memorandum of understanding stage.\n\nThis expansion aligns with the ASEAN Payment Connectivity initiative, which aims to link all ten member states\' instant payment systems by 2030. Cambodia\'s early mover advantage in bilateral CBDC linkages positions it as a natural hub in the emerging ASEAN payment network. For enterprises, the expanding corridor network means that Cambodia-based operations can increasingly settle cross-border payments in real-time with lower costs, improving working capital efficiency and reducing FX exposure across ASEAN supply chains.',
    },
    {
      heading: 'Enterprise Integration and CamFinTech\'s Role',
      content: 'For enterprises operating across borders, Bakong\'s cross-border corridors create opportunities to optimize payment operations, reduce treasury costs, and improve supplier payment terms. CamFinTech provides the technical consulting needed to architect cross-border payment integrations, including Bakong Open API connectivity for automated cross-border disbursements, multi-corridor payment routing logic, FX optimization strategies, and regulatory compliance for cross-border transactions.\n\nOur cross-border payment consulting covers use cases including payroll disbursement for multi-country workforces, supplier payments across ASEAN corridors, tourist revenue collection and settlement optimization, and remittance service integration for mobile apps. CamFinTech\'s deep understanding of both Bakong\'s technical architecture and the bilateral corridor protocols enables enterprises to build payment systems that leverage Cambodia\'s cross-border infrastructure for competitive advantage. As new corridors launch, we help clients extend their payment capabilities to additional markets without rebuilding their core integration.',
    },
  ],
};
