import { ArticleContent } from '../types';

/*
 * Rewritten 2026-11-07 (unsourced-figures pass, same bar as
 * insights/cambodia-vs-regional-fintech.ts).
 *
 * The previous version framed Bakong's cross-border links as "remittance
 * corridors" and carried volumes, costs, settlement times and launch years
 * with no source. Every figure and date that survives is in `claims` below,
 * read in the National Bank of Cambodia's Annual Report on the Payment System
 * 2024 (Khmer), two Bank of Thailand releases, or the NBC's Bakong white paper.
 * Everything else was removed, not hedged. What the checks found, so nobody
 * restores these from git:
 *
 * - "The Bakong-PromptPay corridor, launched in 2023" misdates it. Bank of
 *   Thailand Press Release No. 9/2020 records the launch of the Cambodia-
 *   Thailand interoperable QR payment linkage on 18 February 2020, and the
 *   NBC's 2024 report (p. 46) gives phase 1 as 18 February 2020 and phase 2 as
 *   6 June 2023. It is a retail QR payment linkage for merchant payments, not a
 *   remittance corridor: the NBC report says the two central banks' technical
 *   teams are *studying* expanding cooperation to money transfers.
 * - "Corridors with Vietnam (NAPAS) and Laos (LAPNet) are under development"
 *   and the table's "2026 (planned)" rows are FALSE. The NBC report (p. 49)
 *   records the Cambodia-Laos QR linkage officially launched on 18 August 2023
 *   and the Cambodia-Vietnam linkage (NAPAS, VIETQR) on 3 December 2023. LAPNet
 *   is not named in the source and is not used here.
 * - "The Bakong-DuitNow corridor with Malaysia became operational in 2024"
 *   misdescribes it. The NBC report (p. 46) records a cross-border money-
 *   transfer service between Bakong and Maybank launched on 11 August 2021,
 *   and a Cambodia-Malaysia QR payment project in two phases, the first
 *   launched on 19 September 2024; the Bank of Thailand's copy of the joint
 *   release records the second phase launched on 8 April 2025. DuitNow is not
 *   named in either source and is not used here.
 * - "The Bakong Tourist App, launched by the NBC in 2025" is FALSE: the NBC
 *   report (p. 5) gives 19 August 2024. The app's described top-up methods
 *   (PromptPay/DuitNow/Alipay links), currency display, language support and
 *   "NBC daily rate" table had no source and are removed.
 * - "Converts currency at real-time NBC exchange rates" and "FX rate source:
 *   NBC daily rate" are contradicted by the NBC's own worked example (2024
 *   report, Box 4, p. 47): the paying customer's bank debits the equivalent
 *   amount at the bank's own market exchange rate and transfers it to the
 *   merchant's bank. The "daily net settlement between the two central banks",
 *   "NBC FX reserves allocated to corridor liquidity" and "0.5-1.5% corridor
 *   fee" had no source.
 * - Every characterisation of Bakong as a CBDC ("Cambodia's central bank
 *   digital currency", "CBDC interoperability", "bilateral CBDC linkages",
 *   "one of the most impactful CBDC implementations") is removed. The NBC's
 *   white paper describes a "Next Generation Payment System": FAST enhanced by
 *   replacing its relational database with a permissioned Hyperledger Iroha
 *   network, "a rather conservative use of blockchain technology" (p. 22).
 * - Unsourced and removed: "40-60%" cost reduction, "1-3% vs 8-10%", "1.2
 *   million Cambodian migrant workers" in Thailand, "$1.8 billion", "400,000
 *   workers" in Malaysia, "$800 million", "$200M+", "$3.1 billion remittance
 *   market", the hawala/MTO/bank channel shares, "World Bank reports ... 7.2%
 *   in 2022 to 4.1% in 2025", "$10-20 per transfer", "under 30 seconds",
 *   "<15 seconds", "1.2 million international arrivals", the BIS "model for
 *   emerging market CBDC interoperability" attribution, BI-FAST/InstaPay "MOU
 *   stage", and "link all ten member states by 2030".
 * - "Cambodia is positioning itself as a hub" / "natural hub" — hype, removed.
 *
 * Bar for restoring a figure: read in a fetched primary, recorded in `claims`
 * or `sources` with where it was read — the same bar as app/content/regulatory.
 * Page numbers for the NBC 2024 report are the printed folios (PDF page =
 * printed page + 15 for the body).
 */
export const crossBorderPaymentsBakong: ArticleContent = {
  slug: 'cross-border-payments-bakong',
  title: 'How Do Cross-Border Payments Work via Bakong?',
  description: 'A guide to Bakong\'s cross-border links as the National Bank of Cambodia records them: QR payment linkages with Thailand, Malaysia, Laos, Vietnam and South Korea, links with UnionPay International and Alipay+, the Malaysia money-transfer service, the Bakong Tourists App, and the Regional Payment Connectivity initiative.',
  type: 'learn',
  cluster: 'compliance',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-07',
  readingTime: 6,
  schema: 'Article',
  relatedSlugs: ['bakong', 'nbc', 'khqr'],
  lead: 'Most of Bakong\'s cross-border connectivity takes the form of QR payment linkages: a customer of a bank in one country uses their own mobile banking app to scan a merchant\'s QR code in the other, and the payment reaches the merchant\'s account at home. The National Bank of Cambodia (NBC) records officially launched cross-border QR payments with Thailand, Laos, Vietnam, Malaysia and South Korea, and with UnionPay International and Alipay, in support of tourism and trade, and it is developing links with other countries. One link with Malaysia is a money-transfer service. This guide sets out what each link does according to the central banks\' own publications, how a cross-border QR payment moves between banks, and what the Regional Payment Connectivity initiative adds. It carries no estimates of its own, and figures that could not be traced to a primary source have been left out.',
  claims: [
    { stat: 'The Cambodia–Thailand interoperable QR code linkage for retail payments was launched by the governors of the two central banks. From 18 February 2020, Cambodian tourists in Thailand could use their mobile banking applications to scan Thai merchants\' QR codes; Thai tourists were to be able to scan Cambodian QR codes at merchants in Cambodia from the third quarter of 2020. Siam Commercial Bank was the sponsoring bank on the Thai side, with ACLEDA Bank, Cambodia Commercial Bank (CCB) and Foreign Trade Bank of Cambodia (FTB) on the Cambodian side. The governors had signed an MOU on cooperation in financial innovation and payment systems in February 2019.', source: 'Bank of Thailand, Press Release No. 9/2020, "The Launch of Interoperable QR Payment Linkage between Cambodia and Thailand", 18 February 2020, page 1', year: '2020', url: 'https://www.bot.or.th/content/dam/bot/documents/en/news-and-media/news-pdf/2020/n0963e.pdf' },
    { stat: 'Cambodia–Thailand: MOU on cooperation in financial innovation and payment systems signed 3 February 2019; cross-border QR payment launched in phase 1 on 18 February 2020 and phase 2 on 6 June 2023. The two central banks\' technical teams are studying expanding cooperation to money transfers between the two countries.', source: 'National Bank of Cambodia, Annual Report on the Payment System in Cambodia 2024 (Khmer), chapter 6, section (b), page 46', year: '2024', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf' },
    { stat: 'Cambodia–Malaysia: a cross-border money-transfer service between Bakong and Maybank\'s mobile banking app and counters was launched on 11 August 2021, and Cambodian Public Bank launched transfers to Bakong account holders on 23 May 2022. The NBC and Bank Negara Malaysia signed an MOU on cooperation in financial innovation and payment systems in February 2024; the cross-border QR payment project was divided into two phases, and its official launch was presided over by the two governors on 19 September 2024.', source: 'National Bank of Cambodia, Annual Report on the Payment System in Cambodia 2024 (Khmer), chapter 6, section (a), page 46', year: '2024', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf' },
    { stat: 'The second phase of the Malaysia–Cambodia cross-border QR payment linkage was launched on 8 April 2025, when the NBC also joined the Regional Payment Connectivity initiative, bringing the signatories to nine ASEAN central banks. The initiative was established in 2022 by the central banks of Indonesia, Malaysia, the Philippines, Singapore and Thailand; Vietnam joined in August 2023, and Brunei Darussalam and Lao PDR in February and April 2024.', source: 'Joint press release of nine ASEAN central banks, "The National Bank of Cambodia Formally Joins the Regional Payment Connectivity Initiative", 8 April 2025, page 1 (Bank of Thailand copy)', year: '2025', url: 'https://www.bot.or.th/content/dam/bot/documents/en/news-and-media/news/2025/news-20250408.pdf' },
    { stat: 'Cambodia–Laos: cross-border QR payment officially launched on 18 August 2023 for Cambodian customers paying by scanning QR codes in Laos; payment by Lao customers scanning QR codes in Cambodia was planned for early 2025.', source: 'National Bank of Cambodia, Annual Report on the Payment System in Cambodia 2024 (Khmer), chapter 6, section (c), page 49', year: '2024', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf' },
    { stat: 'Cambodia–Vietnam: MOU signed 8 November 2022; NAPAS is the technical operator on the Vietnamese side. Cross-border QR payment officially launched on 3 December 2023, letting Cambodians with riel accounts pay by scanning merchants\' VIETQR codes in Vietnam, and Vietnamese with dong accounts pay by scanning KHQR codes in Cambodia.', source: 'National Bank of Cambodia, Annual Report on the Payment System in Cambodia 2024 (Khmer), chapter 6, section (d), page 49', year: '2024', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf' },
    { stat: 'Cambodia–South Korea: three separate MOUs on cross-border QR payment cooperation were signed during the Prime Minister\'s official visit to Seoul on 15–18 May 2024. Phase 1 of the QR linkage was launched on 29 August 2024, for visitors from Korea paying at shops displaying KHQR with Jeonbuk Bank\'s mobile banking app.', source: 'National Bank of Cambodia, Annual Report on the Payment System in Cambodia 2024 (Khmer), chapter 6, section (e), page 50', year: '2024', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf' },
    { stat: 'UnionPay International: MOU signed 10 July 2023; cross-border QR payment officially launched 22 December 2023, letting UnionPay customers scan KHQR to pay merchants in Cambodia with riel accounts. From early 2024, Cambodians could use riel in Bakong or mobile banking apps to pay in China and other countries in the UnionPay network by scanning UnionPay QR codes.', source: 'National Bank of Cambodia, Annual Report on the Payment System in Cambodia 2024 (Khmer), chapter 6, section (f), pages 50–51', year: '2024', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf' },
    { stat: 'Alipay: the NBC and Alipay Connect Pte. Ltd. signed an MOU on 15 November 2023 at the Singapore FinTech Festival. On 14 October 2024 the NBC and Ant International announced the official launch of cross-border QR payment between Bakong and the Alipay+ network, letting Alipay customers scan KHQR to pay merchants in Cambodia, who receive riel automatically.', source: 'National Bank of Cambodia, Annual Report on the Payment System in Cambodia 2024 (Khmer), chapter 6, section (g), page 51', year: '2024', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf' },
    { stat: 'The Bakong Tourists App was first launched on 19 August 2024. The NBC states that Bakong is used as the payment infrastructure for cross-border payments, officially launched with Thailand, Malaysia, Laos, Vietnam, South Korea, UnionPay International and Alipay, and that cross-border payment projects with other countries, such as China, Japan, India and Singapore, are being developed.', source: 'National Bank of Cambodia, Annual Report on the Payment System in Cambodia 2024 (Khmer), chapter 1, page 5; Foreword, page i', year: '2024', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf' },
    { stat: 'Bakong enhances the existing FAST system by replacing its relational database with a permissioned blockchain network of Hyperledger Iroha nodes — described by the NBC as "a rather conservative use of blockchain technology, as it is mainly a change to the backend infrastructure".', source: 'National Bank of Cambodia, "Project Bakong: Next Generation Payment System" white paper, page 22 of the PDF', year: '2020', url: 'https://bakong.nbc.gov.kh/download/NBC_BAKONG_White_Paper.pdf' },
  ],
  sources: [
    { publisher: 'National Bank of Cambodia', label: 'Annual Report on the Payment System in Cambodia 2024, in Khmer (PDF, Open Development Cambodia mirror)', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Project Bakong: Next Generation Payment System, white paper (PDF)', url: 'https://bakong.nbc.gov.kh/download/NBC_BAKONG_White_Paper.pdf', tier: 'primary' },
    { publisher: 'Bank of Thailand', label: 'Press Release No. 9/2020: The Launch of Interoperable QR Payment Linkage between Cambodia and Thailand (PDF)', url: 'https://www.bot.or.th/content/dam/bot/documents/en/news-and-media/news-pdf/2020/n0963e.pdf', tier: 'primary' },
    { publisher: 'Bank of Thailand', label: 'Joint press release: The National Bank of Cambodia formally joins the Regional Payment Connectivity initiative, 8 April 2025 (PDF)', url: 'https://www.bot.or.th/content/dam/bot/documents/en/news-and-media/news/2025/news-20250408.pdf', tier: 'primary' },
    { publisher: 'Bank of Thailand', label: 'Cross-border Payment Linkages (web page)', url: 'https://www.bot.or.th/en/financial-innovation/digital-finance/digital-payment/cross-border-payment.html', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Bakong, official site (home page)', url: 'https://bakong.nbc.gov.kh', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-06',
  faqs: [
    { question: 'How do cross-border payments work through Bakong?', answer: 'Mostly through QR payment linkages. A customer uses their own bank\'s mobile app to scan a merchant\'s QR code across the border — a Thai QR code in Thailand, a VIETQR code in Vietnam, or KHQR in Cambodia for visitors — and the payment passes from the customer\'s bank to the merchant\'s bank. In the National Bank of Cambodia\'s own worked example, the paying customer\'s bank debits the equivalent amount in its own currency at the bank\'s market exchange rate and transfers it to the merchant\'s bank, which credits the merchant. Bakong serves as the payment infrastructure on the Cambodian side. These linkages are for paying merchants; they are not the same thing as sending money to a person.' },
    { question: 'Which countries and networks are connected to Bakong?', answer: 'The National Bank of Cambodia records officially launched cross-border QR payments with Thailand (from February 2020), Laos (August 2023), Vietnam (December 2023), Malaysia (September 2024, with a second phase in April 2025) and South Korea (August 2024), and with UnionPay International (December 2023) and Alipay+ (October 2024). It also records a money-transfer service between Bakong and Maybank in Malaysia from August 2021, and says links with other countries, including China, Japan, India and Singapore, are being developed. For current participants and services, rely on the NBC\'s own publications.' },
    { question: 'Can tourists use Bakong to pay in Cambodia?', answer: 'Yes, in two ways. Visitors whose home bank or wallet is in a connected scheme — for example Thai, Vietnamese or Korean bank apps in the linkages described above, or Alipay — can scan KHQR codes at Cambodian merchants with the app they already have. Separately, the NBC launched the Bakong Tourists App on 19 August 2024 so that visitors can pay merchants\' KHQR codes across the country. For how to register and fund the app, and which visitors it serves, use the NBC\'s current guidance.' },
  ],
  sections: [
    {
      heading: 'What "Cross-Border" Means for Bakong',
      content: 'Bakong is the National Bank of Cambodia\'s payment system. Its white paper describes it as a "Next Generation Payment System": the existing FAST system enhanced by replacing its relational database with a permissioned Hyperledger Iroha network — in the NBC\'s words, "a rather conservative use of blockchain technology, as it is mainly a change to the backend infrastructure". Bakong is payment infrastructure, and that is how its cross-border role is best understood.\n\nThe NBC\'s 2024 report on the payment system describes Bakong as the payment infrastructure for cross-border payments and lists the links officially launched: Thailand, Laos, Vietnam, Malaysia and South Korea, plus UnionPay International and Alipay. Most of these are QR payment linkages — a customer pays a merchant across the border with their home banking app — and the NBC frames them as support for tourism and trade. One link, with Malaysia, is a money-transfer service. The distinction matters: a QR payment linkage moves a purchase from a customer to a merchant, and should not be read as a remittance channel unless the operator says it is one.',
    },
    {
      heading: 'Thailand',
      content: 'The Cambodia–Thailand linkage is the oldest. The governors of the Bank of Thailand and the National Bank of Cambodia presided over its launch in February 2020, following an MOU on cooperation in financial innovation and payment systems signed in February 2019. According to the Bank of Thailand\'s release, from 18 February 2020 Cambodian tourists in Thailand could use their mobile banking apps to scan Thai merchants\' QR codes, and Thai tourists were to be able to scan Cambodian QR codes at merchants in Cambodia from the third quarter of 2020. Siam Commercial Bank was the sponsoring bank on the Thai side, working with ACLEDA Bank, Cambodia Commercial Bank and Foreign Trade Bank of Cambodia on the Cambodian side.\n\nThe NBC records the first phase as launched on 18 February 2020 and a second phase on 6 June 2023. Both central banks describe the linkage in terms of retail payments, trade and tourism, financial inclusion and the use of local currencies. Money transfers are a separate question: the NBC reports that the two central banks\' technical teams are studying expanding cooperation to transfers between the two countries.',
    },
    {
      heading: 'Malaysia',
      content: 'Malaysia is the one counterpart with which the NBC records a money-transfer service as well as a QR payment linkage. A cross-border transfer service between Bakong and Maybank\'s mobile banking app and branch counters was launched on 11 August 2021, and Cambodian Public Bank launched transfers to customers holding Bakong accounts on 23 May 2022.\n\nThe QR payment linkage came later. The NBC and Bank Negara Malaysia signed an MOU on cooperation in financial innovation and payment systems in February 2024, with the project divided into two phases. The two governors presided over the official launch of the cross-border QR payment on 19 September 2024, and the second phase was launched on 8 April 2025 in Kuala Lumpur, on the sidelines of the 12th ASEAN Finance Ministers\' and Central Bank Governors\' Meeting.',
    },
    {
      heading: 'Laos, Vietnam and South Korea',
      content: 'The Cambodia–Laos QR linkage was officially launched on 18 August 2023, letting Cambodian customers pay by scanning QR codes in Laos; the NBC gave early 2025 as the plan for Lao customers paying by QR in Cambodia.\n\nWith Vietnam, the two central banks signed an MOU on 8 November 2022, and the linkage was officially launched on 3 December 2023. NAPAS is the technical operator on the Vietnamese side. Cambodians with riel accounts can use their mobile banking apps to scan merchants\' VIETQR codes in Vietnam, and Vietnamese with dong accounts can scan KHQR codes at merchants in Cambodia.\n\nWith South Korea, three separate MOUs on cross-border QR cooperation were signed during the Prime Minister\'s official visit to Seoul in May 2024. Phase 1 was launched on 29 August 2024, for visitors from Korea paying at shops that display KHQR using Jeonbuk Bank\'s mobile banking app.',
      table: {
        caption: 'Bakong cross-border links recorded by the National Bank of Cambodia (Annual Report on the Payment System 2024, ch. 6; Bank of Thailand releases)',
        headers: ['Counterpart', 'Type of link', 'MOU', 'Launched'],
        rows: [
          ['Thailand', 'QR payment linkage', 'February 2019', 'Phase 1: 18 Feb 2020 · Phase 2: 6 Jun 2023'],
          ['Malaysia (Maybank)', 'Money-transfer service with Bakong', '—', '11 Aug 2021'],
          ['Malaysia', 'QR payment linkage', 'February 2024', 'Phase 1: 19 Sep 2024 · Phase 2: 8 Apr 2025'],
          ['Laos', 'QR payment linkage', '—', '18 Aug 2023 (Cambodian customers in Laos)'],
          ['Vietnam', 'QR payment linkage (KHQR / VIETQR)', '8 Nov 2022', '3 Dec 2023'],
          ['South Korea', 'QR payment linkage', 'May 2024 (three MOUs)', 'Phase 1: 29 Aug 2024'],
          ['UnionPay International', 'QR payment linkage', '10 Jul 2023', '22 Dec 2023'],
          ['Alipay+ (Ant International)', 'QR payment linkage', '15 Nov 2023', '14 Oct 2024'],
        ],
      },
    },
    {
      heading: 'UnionPay International and Alipay+',
      content: 'Two links are with international payment networks rather than with another country\'s central bank. The NBC and UnionPay International signed an MOU on 10 July 2023 and officially launched cross-border QR payment on 22 December 2023. UnionPay customers can scan KHQR to pay merchants in Cambodia who hold riel accounts, and from early 2024 Cambodians could use riel in Bakong or in mobile banking apps to pay in China and other countries in the UnionPay network by scanning UnionPay QR codes.\n\nThe NBC and Alipay Connect signed an MOU on 15 November 2023 at the Singapore FinTech Festival, and on 14 October 2024 the NBC and Ant International announced the official launch of cross-border QR payment between Bakong and the Alipay+ network. Alipay customers can scan KHQR to pay merchants in Cambodia, who receive riel automatically.',
    },
    {
      heading: 'How a Cross-Border QR Payment Moves Between Banks',
      content: 'The NBC\'s 2024 report illustrates the flow with two worked examples, one in each direction. When a visitor from Thailand scans a Cambodian merchant\'s KHQR code with a Thai bank\'s app, the Thai bank debits the equivalent amount in baht from the customer\'s account at the bank\'s market exchange rate and transfers it to the merchant\'s bank in Cambodia, which credits the merchant in riel to complete the transaction. The reverse example — a Cambodian visitor in Thailand paying with the Bakong app at a merchant displaying a Thai QR code — runs the same way in the other direction.\n\nTwo practical points follow. The exchange rate a customer receives is set by the banks in the transaction. And the merchant deals only with its own bank, in its own currency. Arrangements between the participating banks — sponsorship, settlement and fees — are set by the parties and the central banks concerned, and are not described here; anyone building on a linkage should confirm them with the participating institutions.',
    },
    {
      heading: 'The Bakong Tourists App',
      content: 'The NBC first launched the Bakong Tourists App on 19 August 2024. In the NBC\'s description, it makes it easier for visitors to pay for goods and services through merchants\' KHQR codes across the country, conveniently and safely, and reduces the use of cash. It sits alongside the bilateral linkages: a visitor whose home bank or wallet is already connected — through the Thai, Vietnamese or Korean linkages, UnionPay or Alipay+ — can pay KHQR merchants with the app they already use.\n\nThis guide does not describe how the app is registered, funded or priced, or which visitors it serves; those details change and are best taken from the NBC\'s current guidance.',
    },
    {
      heading: 'Regional Payment Connectivity and What Comes Next',
      content: 'On 8 April 2025, during the launch of the second phase of the Malaysia–Cambodia QR linkage, the NBC joined the Regional Payment Connectivity initiative, bringing its signatories to nine ASEAN central banks. The initiative was established in 2022 by the central banks of Indonesia, Malaysia, the Philippines, Singapore and Thailand; Vietnam joined in August 2023, and Brunei Darussalam and Lao PDR in 2024. Its stated aim is faster, cheaper, more transparent and more inclusive cross-border payments, through QR-code and fast-payment linkages, supporting trade, market access for SMEs and remittance flows across the region.\n\nThe NBC reports that it is developing cross-border payment links with further countries, naming China, Japan, India and Singapore. What those links will support, and when, will be set out in the central banks\' own announcements; this guide does not anticipate them.',
    },
    {
      heading: 'Considerations for Enterprises',
      content: 'For a business with customers or suppliers across the region, the linkages matter in specific ways. A merchant in Cambodia that accepts KHQR can already take payment from customers of connected banks and wallets abroad, settled to its own account in riel. A business integrating payments should treat each linkage separately: participating institutions, currencies, limits and the use case — merchant payment or money transfer — differ from link to link and change over time.\n\nThe authoritative source for any of these is the NBC and the participating institutions. This guide reports what the central banks have published; it does not estimate volumes, costs or savings, because none could be traced to a source.',
    },
  ],
};
