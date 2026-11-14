import { ArticleContent } from '../types';

/*
 * Rebuilt 2026-11-15 (figure pass). Sources, all fetched or read on the record:
 * - World Bank Global Findex Database for Cambodia, read this day from the
 *   World Bank Data360 API (DATABASE_ID=WB_FINDEX, REF_AREA=KHM; 2,785 rows).
 *   Indicators used: ACCOUNT_T_D, MOBILEACCOUNT_T_D, G20_ANY (by sex and by
 *   urban/rural), MERCHANT_PAY (2024 only). The 2017 and 2024 totals match the
 *   values already read from the World Bank Data API for
 *   insights/cambodia-vs-regional-fintech.ts (15.6%, 32.3%, 39.0%). The older
 *   api.worldbank.org endpoint timed out on every call this day; Data360 did not.
 * - NBC Annual Report on the Payment System in Cambodia 2024 (Khmer), foreword
 *   p. i and ch. 2 and ch. 6, read 2026-11-04/15 for other pages; figures here
 *   are the ones already published with page references on
 *   insights/bakong-adoption-metrics.ts and learn/fintech-license-cambodia.ts.
 * - NBC registers as at 31 May 2026 (as on knowledge/cambodia-payment-ecosystem).
 * - Prakas F14-020-351 (June 2020), KHQR, as on learn/how-to-accept-khqr.
 *
 * Removed, not hedged (the March 2026 page). Do not restore from git:
 * - The Bakong annual table 2021-2025 (1.2m to 24m transactions, USD 2.1bn to
 *   30bn, average sizes, YoY growth). Contradicted by the NBC: Bakong carried
 *   more than 600 million transactions in 2024, not 21 million, and US dollar
 *   value alone was USD 102.32bn, not a USD 26bn total. "78% growth in 2024"
 *   is the NBC's figure for the whole payment system's transaction count, not
 *   Bakong's. The "USD 30 billion annually by 2025" in the lead falls with it.
 * - The Findex table: 73% / 55% / 36% digital payment use, 42% bank account,
 *   61% mobile money account, 70% female, 65% rural, 6 pp gender gap, and the
 *   "37-point increase". Findex gives 32.3% / 26.1% / 15.6%, 39.0% account
 *   ownership (bank or mobile money), 16.9% mobile money, 29.8% women, 27.4%
 *   rural. The FAQ comparison with Vietnam and the Philippines fell with it.
 * - KHQR merchant counts (50k to 400k+), the province table, and an "NBC target
 *   of 600,000 merchants". The NBC 2024 report gives a KHQR merchant-account
 *   figure that reads as 4.5 or 8.5 million (Khmer 4/8); no count is stated.
 * - The GSMA mobile money table (12.7m to 21.3m accounts, active rates, P2P /
 *   merchant / bill shares). No GSMA source was read.
 * - "Bakong-PromptPay linkage operational since mid-2023" (launched 18 Feb
 *   2020), ADB corridor values, remittance costs and savings, "250,000 workers
 *   in Malaysia", "USD 400 million". The links are QR payment links, not
 *   remittance corridors; no volume figure was read.
 * - "CamFinTech estimates the TAM at USD 180-220 million", MDR, gateway-fee and
 *   FX-margin ranges, "USD 8-12 billion undigitised", and the "CamFinTech
 *   projects" 2026 forecast. First-person estimates with no evidence (ADR-006).
 * - The provider market-share table (68% / 22% / 10%), "Bakong Tier 2 access"
 *   (Bakong has no participant tiers in the NBC documents read), "Wing, backed
 *   by Cellcard", account counts for Wing and TrueMoney. Unsourced.
 * - "Bakong CBDC" in the description and "CBDC experiment" in the lead. The
 *   NBC's white paper calls Bakong a next-generation payment system.
 *
 * Bar for restoring any figure: read in a fetched primary, recorded here.
 */

export const cambodiaDigitalPaymentGrowth: ArticleContent = {
  slug: 'cambodia-digital-payment-growth',
  title: 'Cambodia Digital Payment Growth: What the NBC and Global Findex Record',
  description: 'Cambodia\'s digital payment growth measured two ways: the National Bank of Cambodia\'s payment-system statistics for 2024, and the World Bank Global Findex survey of how many adults actually pay digitally, 2017 to 2024.',
  type: 'insights',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-15',
  readingTime: 6,
  schema: 'Article',
  relatedSlugs: ['bakong-adoption-metrics', 'bakong', 'khqr', 'cambodia-payment-ecosystem'],
  lead: 'Two primary sources measure digital payments in Cambodia, and they measure different things. The National Bank of Cambodia (NBC) counts transactions: in 2024 the number of digital payment transactions grew 78% on 2023 and their value 38%, and Bakong, the NBC\'s national payment system, carried more than 600 million transactions. The World Bank\'s Global Findex survey counts people: in 2024, 32.3% of Cambodian adults had made or received a digital payment in the past year, up from 15.6% in 2017. Both show fast growth. Read together, they show transaction volumes rising much faster than the share of adults who pay digitally, and a wide gap between towns and the countryside. Figures are as at their source year.',
  claims: [
    { stat: 'The number of digital payment transactions in Cambodia grew 78% during 2024 and their value grew 38%, both measured against 2023. The National Bank of Cambodia puts the total value at approximately 15 times gross domestic product.', source: 'National Bank of Cambodia, Annual Report on the Payment System in Cambodia 2024 (Khmer), foreword, p. i (Open Development Cambodia copy)', year: '2024', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf' },
    { stat: 'Bakong carried more than 600 million transfer and payment transactions in 2024; US dollar transactions were worth about USD 102.32 billion, and total value equalled 327% of GDP.', source: 'National Bank of Cambodia, Annual Report on the Payment System in Cambodia 2024 (Khmer), ch. 2.1 and chart 4, printed pp. 9-10', year: '2024', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf' },
    { stat: 'In 2024, 32.3% of adults in Cambodia had made or received a digital payment in the past year, up from 26.1% in 2021 and 15.6% in 2017. Account ownership, at a financial institution or with a mobile money provider, was 39.0%.', source: 'World Bank, Global Findex Database, Cambodia (indicators G20_ANY and ACCOUNT_T_D, adults aged 15+), via the World Bank Data360 API', year: '2024', url: 'https://data360api.worldbank.org/data360/data?DATABASE_ID=WB_FINDEX&REF_AREA=KHM' },
    { stat: 'In 2024, 58.1% of urban adults and 27.4% of rural adults in Cambodia had made or received a digital payment; for women the figure was 29.8% and for men 35.1%.', source: 'World Bank, Global Findex Database, Cambodia (indicator G20_ANY by urbanisation and sex), via the World Bank Data360 API', year: '2024', url: 'https://data360api.worldbank.org/data360/data?DATABASE_ID=WB_FINDEX&REF_AREA=KHM' },
  ],
  sources: [
    { publisher: 'National Bank of Cambodia', label: 'Annual Report on the Payment System in Cambodia 2024 (Khmer, PDF, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf', tier: 'primary' },
    { publisher: 'World Bank', label: 'Global Findex Database, Cambodia, via the World Bank Data360 API (JSON)', url: 'https://data360api.worldbank.org/data360/data?DATABASE_ID=WB_FINDEX&REF_AREA=KHM', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Project Bakong: Next Generation Payment System, white paper, June 2020 (PDF)', url: 'https://bakong.nbc.gov.kh/download/NBC_BAKONG_White_Paper.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Prakas F14-020-351 on the KHQR Code technical specification, June 2020 (Khmer, PDF)', url: 'https://nbc.gov.kh/files/legislation/prakas/latest/km/Prakas_F14-020-351-PR_KHQR_for_Payment_in_Cambodia_appendix.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'List of Commercial Banks, as at 31 May 2026 (PDF)', url: 'https://nbc.gov.kh/files/supervision/commercial-banks/en/Commercial_Banks.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'List of Specialized Banks, as at 31 May 2026 (PDF)', url: 'https://nbc.gov.kh/files/supervision/specialized-banks/en/Specialized_Banks.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'List of Payment Service Institutions, as at 31 May 2026 (PDF)', url: 'https://nbc.gov.kh/files/supervision/payment-service/en/PSIs.pdf', tier: 'primary' },
    { publisher: 'Bank of Thailand', label: 'Press Release No. 9/2020: The Launch of Interoperable QR Payment Linkage between Cambodia and Thailand (PDF)', url: 'https://www.bot.or.th/content/dam/bot/documents/en/news-and-media/news-pdf/2020/n0963e.pdf', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-15',
  faqs: [
    { question: 'How fast are digital payments growing in Cambodia?', answer: 'By the National Bank of Cambodia\'s count, the number of digital payment transactions grew 78% in 2024 and their value 38%, against 2023. Bakong alone carried more than 600 million transactions in 2024. By the World Bank\'s Global Findex survey, the share of adults who made or received a digital payment rose from 15.6% in 2017 to 26.1% in 2021 and 32.3% in 2024. Transaction volumes are growing much faster than the number of people paying digitally.' },
    { question: 'What share of Cambodians use digital payments?', answer: 'In 2024, 32.3% of adults aged 15 and over had made or received a digital payment in the past year, according to the World Bank\'s Global Findex survey. The figure was 58.1% in urban areas and 27.4% in rural areas, and 35.1% for men against 29.8% for women. Account ownership, at a bank or similar institution or with a mobile money provider, was 39.0%.' },
    { question: 'Why does Bakong reach 30 million accounts if only 39% of adults have one?', answer: 'The two figures count different things. The NBC\'s figure of about 30 million is bank and e-wallet accounts at member institutions that can transact through Bakong; one person can hold several accounts, and some accounts may be inactive. Findex is a survey of individuals, and asks whether each person has an account at all. Neither figure is a count of active users.' },
  ],
  sections: [
    {
      heading: 'Two Ways to Measure Growth',
      content: 'Growth in digital payments can be measured by counting transactions or by counting people, and Cambodia\'s two primary sources do one each. The NBC\'s Annual Report on the Payment System counts transactions and their value across the payment system. The World Bank\'s Global Findex Database surveys adults about whether they hold an account and whether they have made or received a digital payment in the past year. The first shows how much the rails carry; the second shows how widely they are used. A page that quotes one as if it were the other will mislead.',
    },
    {
      heading: 'Transactions: The NBC\'s 2024 Figures',
      content: 'The NBC reports that the number of digital payment transactions in Cambodia grew 78% during 2024 and their value 38%, both against 2023, with total value equivalent to approximately 15 times GDP.\n\nBakong, the NBC\'s national payment system launched in October 2020, is part of that picture. It carried more than 600 million transfer and payment transactions in 2024, with total value equal to 327% of GDP; US dollar transactions alone were worth about USD 102.32 billion. Riel and dollar transactions were close to even by number, 49% and 51%, but dollars made up 70% of value. At the end of 2024, 60 institutions were live on Bakong and nine more were integrating. The detail is set out on the Bakong adoption metrics page.\n\nThe NBC\'s report is published in Khmer. Annual Bakong figures for earlier years are not given here, because none has yet been read in an NBC publication.',
    },
    {
      heading: 'People: The Global Findex Survey',
      content: 'The Global Findex survey shows steady but much slower growth in the share of adults paying digitally. In 2017, 15.6% of Cambodian adults had made or received a digital payment in the past year. That rose to 26.1% in 2021 and 32.3% in 2024. Account ownership, counting both financial institution and mobile money accounts, rose from 21.7% to 39.0% over the same period. Mobile money account ownership was 16.9% in 2024.\n\nIn 2024, 19.8% of adults had made a digital payment to a merchant, in a shop or online. That is the kind of payment KHQR, the national QR code standard the NBC set by Prakas in June 2020, is used for.',
      table: {
        caption: 'Cambodia, adults aged 15+ (World Bank Global Findex Database)',
        headers: ['Indicator', '2017', '2021', '2024'],
        rows: [
          ['Made or received a digital payment', '15.6%', '26.1%', '32.3%'],
          ['Account (financial institution or mobile money)', '21.7%', '33.4%', '39.0%'],
          ['Mobile money account', '5.7%', '6.6%', '16.9%'],
          ['Made or received a digital payment: women', '15.1%', '23.9%', '29.8%'],
          ['Made or received a digital payment: men', '16.1%', '28.6%', '35.1%'],
        ],
      },
    },
    {
      heading: 'The Urban-Rural Gap',
      content: 'The widest gap in the Findex data is between town and countryside. In 2024, 58.1% of urban adults had made or received a digital payment, against 27.4% of rural adults. Account ownership showed the same pattern: 65.2% urban, 34.0% rural. The gap between men and women was much smaller, at about five percentage points.\n\nThe national figure, 32.3%, sits much closer to the rural figure than the urban one, which reflects how much of the adult population is rural. Growth in the national share will therefore depend mostly on rural adoption.',
    },
    {
      heading: 'Reconciling the Two Pictures',
      content: 'The NBC records about 30 million bank and e-wallet accounts that can transact through Bakong, more than the country\'s population. Findex finds that 39.0% of adults have an account. These are consistent once it is clear what each counts. The NBC counts accounts, and one person can hold several; Findex counts people. Findex is also a sample survey, so its figures carry sampling error that the NBC\'s administrative counts do not.\n\nTaken together, the two sources show transaction volumes growing far faster than the number of people transacting. That pattern fits more frequent use by existing users, especially in towns, more than a broad new wave of users, though neither source measures frequency of use per person directly.',
    },
    {
      heading: 'Cross-Border QR Payment Links',
      content: 'Bakong\'s links abroad are QR payment links: they let a customer pay a merchant across the border by scanning a QR code. Thailand was first, launched on 18 February 2020 and announced by the Bank of Thailand. The NBC\'s 2024 payment-system report records the links that followed, with Laos and Vietnam in 2023, South Korea and Malaysia in 2024, and the UnionPay and Alipay+ networks. No volume or value figure for an individual link has been read in a primary source, so none is given.',
    },
    {
      heading: 'Who Provides Digital Payments',
      content: 'Digital payment services in Cambodia are provided by institutions the NBC licenses and lists on its registers. As at 31 May 2026, those registers list 58 commercial banks, 7 specialised banks and 28 payment service institutions, alongside microfinance institutions. Many of them reach each other through Bakong, which had 69 member institutions at the end of 2024. No primary source breaks down transaction volume by type of provider, so no market-share figures are given here.',
    },
    {
      heading: 'What the Data Does Not Show',
      content: 'Several figures often quoted about Cambodian digital payments have not been found in a primary source: annual Bakong totals before 2024, the number of KHQR merchants, mobile money account totals by provider, market shares, remittance values through the cross-border links, and the size of the payments revenue pool. They are left out rather than estimated. Anyone relying on such a figure should ask for its source and page.',
    },
  ],
};
