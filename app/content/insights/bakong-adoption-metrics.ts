import { ArticleContent } from '../types';

/*
 * Rebuilt 2026-11-15 from the NBC's Annual Report on the Payment System in
 * Cambodia 2024 (Khmer; Open Development Cambodia copy; PDF page = printed
 * page + 15). Read by eye at 220-440 dpi because the text layer is garbled:
 * ch. 2, printed pp. 8-11 (PDF 23-26), and ch. 6 for the QR links (memory:
 * project_corpus_evidence_bar). Also the NBC Bakong white paper (June 2020).
 *
 * Published only where the reading is unambiguous or cross-checked:
 * - 69 members / 60 live / 9 integrating (p. 8): sums.
 * - 642.5 thousand Bakong-app accounts, +7% (p. 9): Khmer 4 and 8 look alike;
 *   chart 3 puts 2024 at about 640.
 * - "about 30 million accounts reached", stated as "more than the population"
 *   rather than the text's 169%, whose last digit was not certain.
 * - "more than 600 million transactions" (p. 9): the total reads 604.32 or
 *   608.32 million and the riel/USD sub-counts do not sum exactly to either,
 *   so no exact count is given. Shares (49/51 count, 30/70 value) are from the
 *   chart 4 donuts; growth rates match between text and chart; USD value
 *   102.32 bn and 327% of GDP have no ambiguous digits.
 * Left out: KHQR merchant accounts (4.5 or 8.5 million, ambiguous) and the
 * riel value in trillions.
 *
 * Removed, not hedged (the March 2026 page): "Bakong CBDC" throughout and the
 * claim to be "sourced from NBC reports and BIS CBDC data"; 10 million
 * wallets, 3.8 million MAU, the wallet and MAU tables, the category mix, the
 * KHR/USD share series 2021-2025, "USD 30 billion annual throughput", "22% of
 * non-cash retail value", the NBC "50% by 2028 target", "60+ institutions",
 * the eNaira / Sand Dollar / JAM-DEX / e-CNY comparisons and "134 CBDC
 * projects", "lower fees for KHR" and "KHR salary payments", and the
 * "CamFinTech projects ..." 2026 forecast (a first-person projection, ADR-006).
 * None was read in a primary. The earlier corridor correction (2026-11-14) is
 * superseded by this rebuild; its section is kept.
 *
 * Bar for restoring: read in a fetched NBC publication, with page recorded.
 */

export const bakongAdoptionMetrics: ArticleContent = {
  slug: 'bakong-adoption-metrics',
  title: 'Bakong Adoption Metrics: What the NBC\'s 2024 Report Records',
  description: 'Bakong\'s membership, users and transactions in 2024 as the National Bank of Cambodia\'s own payment-system report records them: 60 live member institutions, about 30 million reachable accounts, more than 600 million transactions, and value equal to 327% of GDP.',
  type: 'insights',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-15',
  readingTime: 6,
  schema: 'Article',
  relatedSlugs: ['bakong', 'how-bakong-works', 'nbc'],
  lead: 'Bakong, the National Bank of Cambodia\'s national payment system, launched on 28 October 2020. The NBC\'s Annual Report on the Payment System in Cambodia 2024 gives the most complete public picture of its use. By the end of 2024, 60 institutions were live on Bakong and nine more were integrating. About 30 million bank and e-wallet accounts could transact through it, more than the country\'s population, although only 642,500 accounts were registered on the Bakong app itself. It carried more than 600 million transactions in the year, with a total value equal to 327% of GDP. The difference between those two user numbers is the most important thing to understand about how Bakong is used.',
  claims: [
    { stat: 'By the end of 2024 Bakong had 69 member institutions, of which 60 had gone live and 9 were integrating their systems.', source: 'National Bank of Cambodia, Annual Report on the Payment System in Cambodia 2024 (Khmer), ch. 2.1, printed p. 8', year: '2024', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf' },
    { stat: 'In 2024, 642,500 customer accounts were registered on the Bakong app, up 7% on 2023, while about 30 million accounts at banks, financial institutions and payment service institutions could transact through Bakong.', source: 'National Bank of Cambodia, Annual Report on the Payment System in Cambodia 2024 (Khmer), ch. 2.1 and chart 3, printed p. 9', year: '2024', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf' },
    { stat: 'Bakong carried more than 600 million transfer and payment transactions in 2024; US dollar transactions were worth about USD 102.32 billion, and total value equalled 327% of GDP.', source: 'National Bank of Cambodia, Annual Report on the Payment System in Cambodia 2024 (Khmer), ch. 2.1 and chart 4, printed pp. 9-10', year: '2024', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf' },
  ],
  sources: [
    { publisher: 'National Bank of Cambodia', label: 'Annual Report on the Payment System in Cambodia 2024 (Khmer, PDF, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Project Bakong: Next Generation Payment System, white paper, June 2020 (PDF)', url: 'https://bakong.nbc.gov.kh/download/NBC_BAKONG_White_Paper.pdf', tier: 'primary' },
    { publisher: 'Bank of Thailand', label: 'Press Release No. 9/2020: The Launch of Interoperable QR Payment Linkage between Cambodia and Thailand (PDF)', url: 'https://www.bot.or.th/content/dam/bot/documents/en/news-and-media/news-pdf/2020/n0963e.pdf', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-15',
  faqs: [
    { question: 'How many people use Bakong?', answer: 'It depends which number is meant. The NBC\'s 2024 report records 642,500 accounts registered on the Bakong app itself, up 7% on 2023. It also records about 30 million bank and e-wallet accounts, at its member institutions, that can transact through Bakong, which is more than Cambodia\'s population because many people hold more than one account. Most people use Bakong through their own bank\'s or wallet\'s app rather than the Bakong app. The report gives account counts, not a count of individual active users.' },
    { question: 'Is Bakong a central bank digital currency?', answer: 'Not on the NBC\'s own account. Its white paper of June 2020 describes Bakong as a next-generation payment system built on Hyperledger Iroha, and does not describe it as a central bank digital currency. Bakong moves riel and US dollar payments between the accounts and wallets of member institutions.' },
    { question: 'How much of Bakong\'s use is in Khmer riel?', answer: 'In 2024, riel transactions were 49% of Bakong\'s transaction count and 30% of its value; US dollar transactions were 51% and 70%. Riel use grew faster: the number of riel transactions more than quadrupled on 2023, against a 132% rise for dollar transactions. Promoting the use of riel is one of Bakong\'s four stated aims.' },
  ],
  sections: [
    {
      heading: 'What Bakong Is For',
      content: 'The NBC launched Bakong on 28 October 2020. Its 2024 report gives four aims: to reflect the digital transformation of payments, to make interbank transactions easier, to promote financial inclusion, and to promote the use of the riel. Bakong is built on blockchain and distributed ledger technology; the NBC\'s white paper of June 2020 calls it a next-generation payment system, not a central bank digital currency.\n\nBakong links the payment services of its member institutions, so that a customer of one bank or wallet can pay a customer of another. That design is the key to reading its numbers.',
    },
    {
      heading: 'Membership',
      content: 'At the end of 2024, Bakong had 69 member institutions. Sixty had gone live and nine were still integrating their systems. Members include commercial banks, microfinance institutions and payment service institutions. For the current list of licensed institutions in each category, the NBC publishes its own registers.',
    },
    {
      heading: 'Users: Two Numbers, Two Meanings',
      content: 'The NBC\'s report records two different measures of users, and they differ by a factor of almost fifty. The first is accounts registered on the Bakong app itself: 642,500 in 2024, up 7% on 2023. The second is the number of bank and e-wallet accounts at member institutions that can transact through Bakong, which the NBC calls customers reached: about 30 million accounts, more than the country\'s population.\n\nThe gap is the design working as intended. Most people never open the Bakong app; they pay from their own bank\'s or wallet\'s app, and Bakong carries the payment between institutions. A count of Bakong-app wallets alone therefore understates Bakong\'s reach, and a count of reachable accounts overstates the number of people, since one person can hold several accounts. Neither is a count of active users, which the report does not give.',
    },
    {
      heading: 'Transactions in 2024',
      content: 'Bakong carried more than 600 million transfer and payment transactions in 2024. Their total value was equal to 327% of Cambodia\'s GDP; the US dollar share alone was about USD 102.32 billion. Riel and dollar transactions were close to even by number, but dollars dominated by value. Riel use grew fastest: the number of riel transactions more than quadrupled on 2023.',
      table: {
        caption: 'Bakong transactions by currency, 2024 (NBC Annual Report on the Payment System 2024, chart 4)',
        headers: ['Currency', 'Share of transactions', 'Growth in number on 2023', 'Share of value', 'Growth in value on 2023'],
        rows: [
          ['Khmer riel', '49%', 'More than fourfold', '30%', '+121%'],
          ['US dollar', '51%', '+132%', '70%', '+90%'],
        ],
      },
    },
    {
      heading: 'What Was Added in 2024',
      content: 'The report describes three developments. First, electronic customer registration (eKYC) through Bakong: the NBC worked with the Techo Startup Center on a digital identity framework that verifies identity data from the Ministry of Interior, to make customer registration at member institutions easier and less dependent on branch visits. Second, account linking, which lets a customer connect a bank account to the Bakong app: by the end of 2024, 23 member institutions had completed the integration and 33 more were working on it. Third, on 19 March 2024 the NBC issued guidance to banks, microfinance institutions and payment service institutions on promoting the use of riel in payment services.',
    },
    {
      heading: 'Cross-Border QR Payment Links',
      content: 'Bakong\'s links abroad are QR payment links, not remittance corridors: they let a customer pay a merchant across the border by scanning a QR code. Thailand was first, launched in February 2020 and announced by the Bank of Thailand. The NBC\'s 2024 payment-system report records the links that followed, with Laos and Vietnam in 2023, South Korea and Malaysia in 2024, and the UnionPay and Alipay+ networks. Volume, value and market-share figures for individual links are not given here; none was read in a primary source.',
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
      heading: 'Reading Bakong Metrics',
      content: 'Three cautions apply to any Bakong figure, including those circulating in commentary. Check which user measure is meant: Bakong-app accounts and reachable accounts differ by a factor of almost fifty. Check the currency: dollar transactions carry most of the value, riel transactions most of the growth. And check the source and year: the NBC\'s annual payment-system report is the primary record, it is published in Khmer, and figures attributed to it should be traceable to a page.',
    },
  ],
};
