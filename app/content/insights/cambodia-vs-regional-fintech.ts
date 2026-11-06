import { ArticleContent } from '../types';

/*
 * Figures removed 2026-11-07 (unsourced-figures pass, same bar as
 * insights/sme-digital-readiness.ts).
 *
 * This article carried roughly 120 quantified figures and four tables. What
 * survives is in `claims` below: World Bank population, GDP and Global Findex
 * figures read from the World Bank Data API, two Bank of Thailand releases,
 * and the NBC's Bakong white paper. Everything else was removed, not hedged.
 * What the checks found, so nobody restores these from git:
 *
 * - "Cambodia's internet economy reached USD 3.1 billion" (attributed to
 *   e-Conomy SEA 2024) is a false citation. The 2024 report covered six
 *   markets (ID, MY, PH, SG, TH, VN), not Cambodia. The derived "9.4% of GDP"
 *   and the "20% YoY growth" fall with it, as do the Thai and Vietnamese
 *   internet-economy figures in the same table (unsourced).
 * - The macro table was wrong against the World Bank for Cambodia: GDP "USD
 *   33bn" (World Bank, 2024: USD 46.35bn), GDP per capita "2,060" (2024:
 *   2,628), population "16 million" (2024: 17.64m). Vietnam's GDP "USD 411bn"
 *   is the 2022 value, not 2024 (476.32bn). The "184 million consumers" across
 *   the three countries matches no World Bank year shown (2024 sum: ~190m).
 * - The digital-payment adoption table is contradicted by Global Findex. It
 *   gave Cambodia 73% (2024) and 36% (2017); Findex gives 32.3% (2024) and
 *   15.6% (2017) for "made or received a digital payment". Thailand 92% vs
 *   82.8%; Vietnam 78% vs 62.4%. The "2028 projected" row was a projection with
 *   no source. Do not restore any row of it.
 * - The financial-inclusion table is contradicted by Global Findex: Cambodia
 *   "any financial account 78%" vs 39.0% (2024, account ownership including
 *   mobile money); "mobile money account 61%" unsourced and inconsistent with
 *   that total. Savings, credit-card, insurance-penetration and microfinance
 *   borrower figures had no source.
 * - "Bakong-PromptPay corridor, operational since 2023" misdates it. The Bank
 *   of Thailand's release No. 9/2020 records the launch of the Cambodia-
 *   Thailand interoperable QR linkage on 18 February 2020. The "USD 850
 *   million in annual remittances" through it had no source.
 * - "Thailand and Vietnam have a PromptPay-NAPAS linkage in development" is
 *   contradicted by the Bank of Thailand's cross-border payments page, which
 *   describes a live Thailand-Vietnam QR linkage (Thai QR Payment / VietQR).
 * - "A genuine retail CBDC" overstates the NBC's own description. The Bakong
 *   white paper describes a payment system upgraded with a permissioned
 *   Hyperledger Iroha network and calls this "a rather conservative use of
 *   blockchain technology"; it says the project targets infrastructure
 *   modernisation rather than the macroeconomic policy of a CBDC.
 * - "KHQR standard set by NBC Prakas in June 2020" — the instrument is not in
 *   app/content/regulatory/instruments/, so no Prakas is cited here.
 * - The claim that Thailand and Vietnam "lack" government identity and data-
 *   exchange layers was unsourced and is doubtful; removed rather than
 *   replaced with an equally unsourced comparison.
 * - The investment table (USD 918m / 432m / 38m, company counts, average
 *   revenue per fintech, VC deal counts, named funding rounds) had no source.
 *   Sandbox years and digital-bank licence counts for Thailand and Vietnam
 *   had no source either. Median-age and smartphone-penetration figures:
 *   unsourced.
 * - The regulatory section characterised the Bank of Thailand as "slow", the
 *   State Bank of Vietnam as "cautious" and "catching up", and described an
 *   NBC "informal sandbox" with "speed advantages for well-connected
 *   applicants". All removed: commentary on a regulator's conduct, and the last
 *   is an access claim. Do not restore.
 * - "CamFinTech advises a build-in-Cambodia, scale-to-ASEAN strategy" was a
 *   firm recommendation resting on no analysis the firm has run. Removed.
 *
 * Bar for restoring a figure: read in a fetched primary, recorded in `claims`
 * or `sources` with where it was read — the same bar as app/content/regulatory.
 */
export const cambodiaVsRegionalFintech: ArticleContent = {
  slug: 'cambodia-vs-regional-fintech',
  title: 'Cambodia vs Vietnam vs Thailand: FinTech Ecosystem Comparison',
  description: 'A comparison of how Cambodia, Vietnam and Thailand have structured their digital financial infrastructure — national QR payments, account ownership and digital-payment use, and cross-border linkages — using World Bank, Global Findex, Bank of Thailand and National Bank of Cambodia sources.',
  type: 'insights',
  cluster: 'investment',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-07',
  readingTime: 5,
  schema: 'Article',
  relatedSlugs: ['gaap', 'asean-digital-economy-comparison', 'cambodia-fintech-landscape'],
  lead: 'Cambodia, Vietnam and Thailand are neighbours at very different scales. On World Bank figures for 2024, Cambodia\'s GDP was US$46.35 billion against Thailand\'s US$529.39 billion and Vietnam\'s US$476.32 billion, and the share of adults with an account differed sharply: 91.8% in Thailand, 70.6% in Vietnam and 39.0% in Cambodia (Global Findex). What distinguishes Cambodia is less its scale than the way its infrastructure was assembled. The National Bank of Cambodia (NBC) developed Bakong as the national payment system, and the Royal Government has built shared identity and data-exchange layers that private institutions connect to. This comparison sets out what can be compared from published sources — size, account ownership, digital-payment use and cross-border linkages — and describes structure qualitatively elsewhere. It carries no estimates of its own, and figures that could not be traced to a primary source have been left out.',
  claims: [
    { stat: 'GDP in 2024 (current US$): Cambodia US$46.35 billion, Thailand US$529.39 billion, Viet Nam US$476.32 billion. GDP per capita in 2024 (current US$): Cambodia 2,628, Thailand 7,387, Viet Nam 4,717.', source: 'World Bank, World Development Indicators, indicators NY.GDP.MKTP.CD and NY.GDP.PCAP.CD (World Bank Data API, last updated 8 October 2026)', year: '2024', url: 'https://api.worldbank.org/v2/country/KHM;THA;VNM/indicator/NY.GDP.MKTP.CD?format=json&date=2024' },
    { stat: 'Population in 2024: Cambodia 17,638,801; Thailand 71,668,011; Viet Nam 100,987,686.', source: 'World Bank, World Development Indicators, indicator SP.POP.TOTL (World Bank Data API, last updated 8 October 2026)', year: '2024', url: 'https://api.worldbank.org/v2/country/KHM;THA;VNM/indicator/SP.POP.TOTL?format=json&date=2024' },
    { stat: 'Account ownership at a financial institution or with a mobile-money-service provider, % of population aged 15+, 2024: Cambodia 39.0%, Thailand 91.8%, Viet Nam 70.6%. Cambodia was 21.7% in 2017 and 33.4% in 2021.', source: 'World Bank, Global Findex Database, indicator account.t.d (World Bank Data API)', year: '2024', url: 'https://api.worldbank.org/v2/country/KHM;THA;VNM/indicator/account.t.d?format=json&source=28' },
    { stat: 'Made or received a digital payment, % of population aged 15+, 2024: Cambodia 32.3%, Thailand 82.8%, Viet Nam 62.4%. Viet Nam was 22.7% in 2017 and 46.0% in 2022.', source: 'World Bank, Global Findex Database, indicator g20.any (World Bank Data API)', year: '2024', url: 'https://api.worldbank.org/v2/country/KHM;THA;VNM/indicator/g20.any?format=json&source=28' },
    { stat: 'The interoperable QR payment linkage between Cambodia and Thailand was launched by the governors of the two central banks, with Cambodian tourists able to scan Thai QR codes from 18 February 2020. The governors had signed an MOU on cooperation in financial innovation and payment systems in February 2019.', source: 'Bank of Thailand, Press Release No. 9/2020, "The Launch of Interoperable QR Payment Linkage between Cambodia and Thailand", 18 February 2020, page 1', year: '2020', url: 'https://www.bot.or.th/content/dam/bot/documents/en/news-and-media/news-pdf/2020/n0963e.pdf' },
    { stat: 'The National Bank of Cambodia joined the Regional Payment Connectivity initiative on 8 April 2025, bringing the signatories to nine ASEAN central banks. The initiative was established in 2022 by Indonesia, Malaysia, the Philippines, Singapore and Thailand; Vietnam joined in August 2023.', source: 'Joint press release of nine ASEAN central banks, "The National Bank of Cambodia Formally Joins the Regional Payment Connectivity Initiative", 8 April 2025, page 1 (Bank of Thailand copy)', year: '2025', url: 'https://www.bot.or.th/content/dam/bot/documents/en/news-and-media/news/2025/news-20250408.pdf' },
    { stat: 'Bakong preserves the features of the existing FAST payment system and upgrades it with Hyperledger Iroha, a permissioned blockchain network, as its core system — described by the NBC as "a rather conservative use of blockchain technology".', source: 'National Bank of Cambodia, "Project Bakong: Next Generation Payment System" white paper, section 3.2 Design Features, page 22', year: '2020', url: 'https://bakong.nbc.gov.kh/download/NBC_BAKONG_White_Paper.pdf' },
  ],
  sources: [
    { publisher: 'World Bank', label: 'World Development Indicators via the World Bank Data API: GDP, GDP per capita, population (Cambodia, Thailand, Viet Nam)', url: 'https://api.worldbank.org/v2/country/KHM;THA;VNM/indicator/NY.GDP.MKTP.CD?format=json&date=2024', tier: 'primary' },
    { publisher: 'World Bank', label: 'Global Findex Database via the World Bank Data API: account ownership and digital payments (Cambodia, Thailand, Viet Nam)', url: 'https://api.worldbank.org/v2/country/KHM;THA;VNM/indicator/account.t.d?format=json&source=28', tier: 'primary' },
    { publisher: 'Bank of Thailand', label: 'Press Release No. 9/2020: The Launch of Interoperable QR Payment Linkage between Cambodia and Thailand (PDF)', url: 'https://www.bot.or.th/content/dam/bot/documents/en/news-and-media/news-pdf/2020/n0963e.pdf', tier: 'primary' },
    { publisher: 'Bank of Thailand', label: 'Joint press release: The National Bank of Cambodia formally joins the Regional Payment Connectivity initiative, 8 April 2025 (PDF)', url: 'https://www.bot.or.th/content/dam/bot/documents/en/news-and-media/news/2025/news-20250408.pdf', tier: 'primary' },
    { publisher: 'Bank of Thailand', label: 'Cross-border Payment Linkages (web page)', url: 'https://www.bot.or.th/en/financial-innovation/digital-finance/digital-payment/cross-border-payment.html', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Project Bakong: Next Generation Payment System, white paper, June 2020 (PDF)', url: 'https://bakong.nbc.gov.kh/download/NBC_BAKONG_White_Paper.pdf', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-06',
  faqs: [
    { question: 'Which country has the most developed fintech infrastructure?', answer: 'It depends on what is measured. On usage, Thailand is furthest ahead: in the World Bank\'s Global Findex data for 2024, 91.8% of Thai adults had an account and 82.8% had made or received a digital payment, against 70.6% and 62.4% in Vietnam and 39.0% and 32.3% in Cambodia. On architecture, Cambodia is distinctive rather than ahead: the National Bank of Cambodia developed the national payment system, Bakong, and the Royal Government has built shared identity and data-exchange layers that institutions connect to. The two measures answer different questions, and neither settles the other.' },
    { question: 'How should an enterprise compare the three markets?', answer: 'By fit with its own strategy rather than by a single ranking. The markets differ in scale — in 2024 Vietnam had about 101.0 million people, Thailand about 71.7 million and Cambodia about 17.6 million (World Bank) — in how widely adults already hold and use accounts, and in how infrastructure is provided. In Cambodia, much of the core infrastructure is built by the state and connected to rather than built privately, which changes what a new entrant needs to build. This article does not rank the markets as investments; no sourced analysis here supports a ranking.' },
    { question: 'How are the three countries connected for cross-border payments?', answer: 'Through bilateral QR payment linkages and a regional initiative. The Cambodia–Thailand interoperable QR linkage was launched by the two central banks in February 2020 (Bank of Thailand, Press Release No. 9/2020). The Bank of Thailand also describes a Thailand–Vietnam QR linkage between Thai QR Payment and VietQR. All three central banks are now signatories to the Regional Payment Connectivity initiative: Thailand among its founders in 2022, Vietnam from August 2023, and the National Bank of Cambodia from 8 April 2025. For current participants, limits and services, rely on the central banks\' own publications.' },
  ],
  sections: [
    {
      heading: 'Macro-Economic Context',
      content: 'The three economies differ in scale by an order of magnitude, and that shapes their financial sectors. On World Bank figures for 2024, Thailand\'s GDP was US$529.39 billion and Vietnam\'s US$476.32 billion, against Cambodia\'s US$46.35 billion. Income levels differ too: GDP per capita was US$7,387 in Thailand, US$4,717 in Vietnam and US$2,628 in Cambodia. Population ranks differently from income — Vietnam is the largest market by people, Thailand the richest per head, and Cambodia the smallest on both measures.\n\nScale is not the whole comparison. A smaller market can be a practical place to build and test a product connected to national infrastructure, and a larger one rewards distribution. This article does not attempt to size the digital economy of any of the three: the internet-economy figures previously given here could not be traced to a source, and one of them — a Cambodia estimate attributed to a report that did not cover Cambodia — was a false citation.',
      table: {
        caption: 'Scale and income, 2024 (World Bank, World Development Indicators)',
        headers: ['Metric', 'Thailand', 'Vietnam', 'Cambodia'],
        rows: [
          ['Population', '71,668,011', '100,987,686', '17,638,801'],
          ['GDP (current US$, billions)', '529.39', '476.32', '46.35'],
          ['GDP per capita (current US$)', '7,387', '4,717', '2,628'],
        ],
      },
    },
    {
      heading: 'Payment Infrastructure Architecture',
      content: 'All three countries have a national QR payment standard and real-time retail payments, and all three central banks oversee the national payment system. The difference lies in who built the core layer and what sits on it.\n\nIn Cambodia, the National Bank of Cambodia developed Bakong itself. Its white paper describes a system that preserves the features of the earlier FAST payment system and replaces its relational database with a permissioned Hyperledger Iroha blockchain network — in the NBC\'s own words, "a rather conservative use of blockchain technology", largely invisible to end users. KHQR is the national QR standard that lets a customer of one participating institution pay a merchant served by another.\n\nThailand\'s PromptPay and Vietnam\'s NAPAS-based switching follow a more conventional pattern, with banks and licensed payment providers building customer-facing services on an interbank switch. The comparison is of design, not of quality: each model reflects the starting point of its banking system.',
    },
    {
      heading: 'Account Ownership and Digital Payment Use',
      content: 'The World Bank\'s Global Findex survey is the one source that measures the three countries on the same basis. In 2024, 91.8% of adults in Thailand had an account at a financial institution or with a mobile-money provider, 70.6% in Vietnam and 39.0% in Cambodia. The share who had made or received a digital payment was 82.8%, 62.4% and 32.3% respectively.\n\nCambodia\'s figure has risen — account ownership was 21.7% in 2017 and 33.4% in 2021 — and it remains below its neighbours\'. Two cautions apply. Findex is a household survey of adults aged 15 and over, so it measures individual use, not transaction volume or merchant acceptance. And a figure for one year should be read against the survey\'s own definitions before it is compared with numbers from other sources.',
      table: {
        caption: 'Account ownership and digital payments, % of adults aged 15+, 2024 (World Bank, Global Findex Database)',
        headers: ['Indicator', 'Thailand', 'Vietnam', 'Cambodia'],
        rows: [
          ['Account at a financial institution or mobile-money provider', '91.8%', '70.6%', '39.0%'],
          ['Made or received a digital payment', '82.8%', '62.4%', '32.3%'],
        ],
      },
    },
    {
      heading: 'Regulatory Frameworks',
      content: 'In each country the central bank — the Bank of Thailand, the State Bank of Vietnam and the National Bank of Cambodia — is the principal regulator of payments and banking, and each publishes its own framework for licensing and for testing new services. Those frameworks change, and the authoritative statement of any of them is the regulator\'s own current text; this article does not summarise or characterise them.\n\nThe structural point that bears on market entry in Cambodia is that the state provides much of the shared infrastructure. A firm entering Cambodia connects to Bakong and KHQR, to CamDigiKey for digital identity and to CamDX for data exchange, rather than building equivalents. That shifts the work towards integrating correctly with national systems and meeting the standards that come with them. For the Cambodian instruments themselves, see the regulatory index.',
    },
    {
      heading: 'Fintech Investment and the Startup Ecosystem',
      content: 'Vietnam and Thailand have larger and longer-established fintech and venture ecosystems than Cambodia, which follows from the difference in market size. This section previously gave investment totals, company counts, deal counts and revenue averages for each country; none could be traced to a source, and they have been removed rather than replaced.\n\nAnyone comparing investment activity across the three should work from a dataset whose method is published and which treats the three countries on the same basis, and should note that regional fintechs headquartered elsewhere — Singapore especially — complicate any country-level count.',
    },
    {
      heading: 'Cross-Border Integration',
      content: 'Cross-border payment connectivity is where the three systems meet. The Cambodia–Thailand interoperable QR linkage was launched by the governors of the two central banks in February 2020, following an MOU signed in February 2019; according to the Bank of Thailand, it lets Cambodian visitors scan Thai QR codes and Thai visitors scan KHQR codes with their own banks\' apps. The Bank of Thailand also describes a Thailand–Vietnam linkage between Thai QR Payment and VietQR.\n\nAt regional level, the Regional Payment Connectivity initiative, established in 2022 by five ASEAN central banks, now has nine signatories: Vietnam joined in August 2023 and the National Bank of Cambodia on 8 April 2025. The initiative\'s stated aim is faster, cheaper, more transparent and more inclusive cross-border payments, through QR-code and fast-payment linkages. For businesses that trade across the three markets, these linkages matter most for retail and tourism payments today; what they will support beyond that depends on arrangements the central banks announce, and is best followed in their own releases.',
    },
    {
      heading: 'Considerations for Enterprises and Investors',
      content: 'The three markets suit different strategies. Thailand offers the highest incomes and the widest existing use of accounts and digital payments, with a correspondingly established competitive field. Vietnam offers the largest population and a fast-rising share of adults using digital payments. Cambodia offers a smaller market in which the core rails, identity and data-exchange layers are provided by the state, so a new service is built on national infrastructure rather than alongside it — and much of the adult population is not yet reached by formal accounts.\n\nWhich of these matters most depends on the product, its distribution model and its tolerance for scale. This article does not recommend one market over another or size the opportunity in any of them; the figures that previously supported such conclusions could not be sourced.',
    },
  ],
};
