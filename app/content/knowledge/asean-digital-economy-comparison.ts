import { ArticleContent } from '../types';

/*
 * Figure pass, 2026-11-14. Rebuilt from primaries; the page had about 200
 * figures across ten countries with no source. Search Console: 8 impressions,
 * 0 clicks in the 3 months to 11 Nov 2026, so the page was cut to what a
 * fetched record supports rather than researched country by country.
 *
 * Kept, each read in a primary:
 * - RPC membership and dates: joint press release of nine ASEAN central banks,
 *   8 April 2025 (Bank of Thailand copy), read 2026-11-14.
 * - Cambodia's QR payment link dates: NBC Annual Report on the Payment System
 *   2024, ch. 6, printed pp. 46-51, Khmer, read by eye (memory:
 *   project_corpus_evidence_bar, 2026-11-07); Thailand launch also BOT 9/2020.
 * - Bakong as a next-generation payment system, not a CBDC: NBC white paper.
 * - KHQR (Prakas F14-020-351), CamDigiKey (Sub-Decree 207), CamDX (Sub-Decree
 *   164), CamInvoice (MEF Prakas 075, Art. 4), PSI licence (Prakas
 *   B14-017-161), digital assets (Prakas 093, Notification 083/25): registry
 *   entries and the pages that cite them.
 *
 * Removed, not hedged, so nobody restores these from git:
 * - "one of only five fully functional retail CBDCs" and "combines CBDC
 *   issuance". The NBC does not describe Bakong as a CBDC.
 * - All ten-country tables: population, GDP, GDP per capita, internet
 *   penetration, digital-economy GMV and share of GDP; payment-system launch
 *   years, technology, cross-border link counts and daily volumes (Bakong
 *   "0.06M/day", "3 links (TH, MY, CN)"); fintech investment 2022-2024 with
 *   CAGRs and named "key players"; licence-type counts, foreign-ownership caps,
 *   sandbox years and licensing timelines; the 1-10 "DPI maturity" scores,
 *   which were the page's own invention presented as a comparison.
 * - "USD 330bn GMV ... e-Conomy SEA" (that report's country coverage was not
 *   checked; it was presented as covering all ten), Cambodia GDP USD 33.5bn and per capita USD 1,950, "USD 2.1bn GMV",
 *   "8th largest", "USD 285m fintech investment, +42%, fastest-growing".
 * - "NBC Regulatory Sandbox, launched in 2023" (no instrument read establishes
 *   one) and "100% foreign ownership of fintech companies" (not read in a
 *   primary).
 * - "DEFA signed in 2024", Project Nexus membership and "NBC intends to join by
 *   2028", "KHQR 400,000 merchants", "CamDigiKey 38% enrolment", "NBC eKYC
 *   mandate by mid-2026", "INA Digital 1.3%", Singpass/ThaID/VNeID enrolment,
 *   e-commerce GMV and social-commerce shares, median age, urbanisation, GDP
 *   growth, "15-20% of GDP by 2030", "concept to prototype in 3-4 months".
 *   None read in a primary; several are statements about named systems or
 *   institutions.
 * - The FAQ naming Vietnam and the Philippines as "competitive threats" and
 *   comparing infrastructure "per dollar invested": investment framing with
 *   no source.
 * - Closing "regulatory navigation" line (ADR-006).
 *
 * Bar for restoring any of it: read in a fetched primary (the issuer, or the
 * report itself), with the page or article recorded here.
 *
 * Earlier note, 2026-11-07, CamInvoice: "ahead of larger ASEAN peers" and
 * "Phase 3 universal compliance" removed; CamInvoice is an MEF system run by
 * the GDDE (Prakas 075, Art. 4) and its Phase 1 is business-to-government.
 */

export const aseanDigitalEconomyComparison: ArticleContent = {
  slug: 'asean-digital-economy-comparison',
  title: 'Cambodia in the ASEAN Digital Economy: Payment Connectivity and National Rails',
  description: 'Where Cambodia sits in ASEAN\'s regional payment connectivity, which QR payment links reach across its borders, and the national systems a regional business connects to, set out from central bank and government primary sources.',
  type: 'knowledge',
  cluster: 'investment',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-14',
  readingTime: 5,
  schema: 'TechArticle',
  relatedSlugs: ['gaap', 'cambodia-fintech-landscape', 'cross-border-payments-bakong'],
  relatedInstruments: ['prakas-b14-017-161', 'sub-decree-207-camdigikey', 'prakas-093', 'notification-083-25'],
  lead: 'ASEAN economies differ too much in size for a headline ranking to say much about Cambodia. The comparison worth making is structural: how a country\'s payment and digital government systems connect to its neighbours\', and what a business must connect to on arrival. On that measure the record is clear. The National Bank of Cambodia (NBC) became the ninth ASEAN central bank to sign the Regional Payment Connectivity (RPC) memorandum, on 8 April 2025. Bakong, the NBC\'s national payment system, has QR payment links with Thailand, Laos, Vietnam, Malaysia and South Korea, and with the UnionPay and Alipay+ networks. At home, one payment system, one QR standard, a national digital identity, a national data exchange and a national e-invoicing system each rest on a published legal instrument. This page sets out that record and nothing beyond it.',
  claims: [
    { stat: 'The National Bank of Cambodia joined the Regional Payment Connectivity initiative on 8 April 2025, bringing the signatories to nine ASEAN central banks. The initiative was established in 2022 by the central banks of Indonesia, Malaysia, the Philippines, Singapore and Thailand, and expanded to Vietnam in August 2023, Brunei Darussalam in February 2024 and Lao PDR in April 2024.', source: 'Joint press release of nine ASEAN central banks, "The National Bank of Cambodia formally joins the Regional Payment Connectivity initiative", 8 April 2025, p. 1 (Bank of Thailand copy)', year: '2025', url: 'https://www.bot.or.th/content/dam/bot/documents/en/news-and-media/news/2025/news-20250408.pdf' },
  ],
  sources: [
    { publisher: 'Nine ASEAN central banks (Bank of Thailand copy)', label: 'Joint press release: The National Bank of Cambodia formally joins the Regional Payment Connectivity initiative, 8 April 2025 (PDF)', url: 'https://www.bot.or.th/content/dam/bot/documents/en/news-and-media/news/2025/news-20250408.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Annual Report on the Payment System in Cambodia 2024 (Khmer, PDF, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf', tier: 'primary' },
    { publisher: 'Bank of Thailand', label: 'Press Release No. 9/2020: The Launch of Interoperable QR Payment Linkage between Cambodia and Thailand (PDF)', url: 'https://www.bot.or.th/content/dam/bot/documents/en/news-and-media/news-pdf/2020/n0963e.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Project Bakong: Next Generation Payment System, white paper, June 2020 (PDF)', url: 'https://bakong.nbc.gov.kh/download/NBC_BAKONG_White_Paper.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Prakas F14-020-351 on the KHQR Code technical specification, June 2020 (Khmer, PDF)', url: 'https://nbc.gov.kh/files/legislation/prakas/latest/km/Prakas_F14-020-351-PR_KHQR_for_Payment_in_Cambodia_appendix.pdf', tier: 'primary' },
    { publisher: 'Royal Government of Cambodia', label: 'Sub-Decree No. 164 on Data Exchange through CamDX, unofficial English translation (PDF)', url: 'https://camdx.gov.kh/documents/files/Unofficial%20Translation%20of%20CamDX%20Subdecree.pdf', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-14',
  faqs: [
    { question: 'Is Cambodia part of ASEAN\'s regional payment connectivity initiative?', answer: 'Yes. The National Bank of Cambodia joined the Regional Payment Connectivity initiative on 8 April 2025, announcing it at the launch of the second phase of the Malaysia–Cambodia cross-border QR payment link, on the sidelines of the 12th ASEAN Finance Ministers\' and Central Bank Governors\' Meeting in Kuala Lumpur. That made nine ASEAN central bank signatories. The initiative aims at faster, cheaper, more transparent and more inclusive cross-border payments, chiefly through QR code and fast payment links.' },
    { question: 'Which countries can a Cambodian QR payment reach?', answer: 'The NBC\'s 2024 payment-system report records Bakong QR payment links with Thailand (from February 2020), Vietnam (December 2023), Laos (August 2023), Malaysia (September 2024, with a second phase in April 2025) and South Korea (August 2024), and with the UnionPay (December 2023) and Alipay+ (October 2024) networks. These let a customer pay a merchant across the border by scanning a QR code. They are payment links, not remittance licences.' },
    { question: 'Is Bakong a central bank digital currency?', answer: 'Not on the NBC\'s own account. The NBC\'s white paper of June 2020 describes Bakong as a next-generation payment system built on Hyperledger Iroha blockchain technology. It settles in Khmer riel and US dollars between the apps of participating banks and payment service institutions, and the white paper does not describe it as a central bank digital currency.' },
  ],
  sections: [
    {
      heading: 'Regional Payment Connectivity: Nine Central Banks',
      content: 'The Regional Payment Connectivity initiative is the ASEAN central banks\' own framework for linking national payment systems. Five central banks established it in 2022, and four more have joined since. Cambodia was the most recent, on 8 April 2025.\n\nThe initiative works through payment links between member countries, chiefly QR code and fast payment connections, rather than a single regional system. Membership is therefore a statement of direction, not a connection in itself: each link between two countries is still built and launched separately. The April 2025 release names nine signatories, and Myanmar\'s central bank is not among them.',
      table: {
        caption: 'Signatories to the Regional Payment Connectivity memorandum (joint press release, 8 April 2025)',
        headers: ['Central bank', 'Joined'],
        rows: [
          ['Bank Indonesia', '2022 (founding)'],
          ['Bank Negara Malaysia', '2022 (founding)'],
          ['Bangko Sentral ng Pilipinas', '2022 (founding)'],
          ['Monetary Authority of Singapore', '2022 (founding)'],
          ['Bank of Thailand', '2022 (founding)'],
          ['State Bank of Vietnam', 'August 2023'],
          ['Brunei Darussalam Central Bank', 'February 2024'],
          ['Bank of the Lao PDR', 'April 2024'],
          ['National Bank of Cambodia', '8 April 2025'],
        ],
      },
    },
    {
      heading: 'Cambodia\'s Cross-Border QR Payment Links',
      content: 'Cambodia\'s links are built on Bakong and the KHQR standard. Thailand was first: the Bank of Thailand announced the interoperable QR payment link with Cambodia in February 2020. The NBC\'s 2024 payment-system report records the links that followed, within ASEAN and with two international card and wallet networks.\n\nFor a business, a QR link matters at the point of sale. A visitor can pay a Cambodian merchant from a home-country app, and a Cambodian customer can pay abroad, without either side holding a foreign account. That is a different thing from sending money across a border, which these links do not license.',
      table: {
        caption: 'Bakong QR payment links recorded by the NBC (Annual Report on the Payment System 2024, ch. 6)',
        headers: ['Counterpart', 'Launch recorded', 'Later phase'],
        rows: [
          ['Thailand', '18 February 2020', 'Phase 2, 6 June 2023'],
          ['Laos', '18 August 2023', '—'],
          ['Vietnam', '3 December 2023', '—'],
          ['UnionPay network', '22 December 2023', '—'],
          ['South Korea', '29 August 2024', '—'],
          ['Malaysia', '19 September 2024 (QR)', 'Phase 2, 8 April 2025'],
          ['Alipay+ network', '14 October 2024', '—'],
        ],
      },
    },
    {
      heading: 'The National Rails a Regional Business Connects To',
      content: 'A business arriving from elsewhere in ASEAN meets one national system for each layer, and each rests on a published instrument. That is the feature of Cambodia\'s architecture most worth comparing: interoperability is built into the national design rather than negotiated between competing networks.\n\nThe practical consequence is that integration work is predictable in shape. A payment flow reaches Bakong through a participating licensed institution, and a QR code follows the KHQR specification. Identity checks run through CamDigiKey, government data queries through CamDX, and invoices to designated ministries through CamInvoice.',
      table: {
        caption: 'Cambodia\'s national systems and their legal basis',
        headers: ['Layer', 'System', 'Operator or legal basis'],
        rows: [
          ['Payments', 'Bakong', 'National Bank of Cambodia; white paper, June 2020'],
          ['QR standard', 'KHQR', 'NBC Prakas F14-020-351, June 2020'],
          ['Digital identity', 'CamDigiKey', 'Sub-Decree 207, July 2023'],
          ['Data exchange', 'CamDX', 'Sub-Decree No. 164 on data exchange through CamDX'],
          ['E-invoicing', 'CamInvoice', 'MEF Prakas 075, 22 January 2025; operated by the MEF\'s General Department of Digital Economy'],
        ],
      },
    },
    {
      heading: 'How Market Entry Is Licensed',
      content: 'Two instruments decide most FinTech entry. A business that provides payment services needs a payment service institution licence from the NBC under Prakas B14-017-161. A digital asset business is licensed under Prakas 093 of December 2025, and the Securities and Exchange Regulator of Cambodia\'s Notification 083/25 makes its sandbox the route to that licence: only sandbox graduates may apply.\n\nEach is linked below with its source and the date it was last checked. Questions of foreign ownership, capital and timing are matters for the current instrument and Cambodian counsel, and this page does not state them.',
    },
    {
      heading: 'Reading Regional Comparisons',
      content: 'Regional scorecards that rank ASEAN members on digital-economy size, investment or "infrastructure maturity" circulate widely, and they rarely say where their figures come from. A reader comparing Cambodia with its neighbours is better served by the issuers\' own records: central bank releases on payment links, the instruments that establish each national system, and the regulators\' published lists of licensed firms. For a figure on market size or investment, go to the report that publishes it, and check which countries it actually covers before reading it as a regional comparison.',
    },
  ],
};
