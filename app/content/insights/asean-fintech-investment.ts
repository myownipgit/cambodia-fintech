import { ArticleContent } from '../types';

/*
 * Figures removed 2026-11-07 (rewrite of a restored article whose figures were
 * mostly fabricated or mis-cited).
 *
 * This article carried four tables and roughly 120 quantified figures. What
 * survives is in `claims` below, each read in a fetched source with its page
 * recorded. Everything else was removed, not hedged. What the checks found, so
 * nobody restores these from git:
 *
 * - "The Google/Temasek/Bain e-Conomy SEA 2024 report shows Cambodia's internet
 *   economy growing at 20% to USD 3.1 billion, the second-fastest in ASEAN" is
 *   a FALSE citation. The 2024 report defines "SEA" as six markets (ID, MY, PH,
 *   SG, TH, VN; p. 4) and its text does not mention Cambodia at all. Coverage
 *   first extended to ASEAN-10 in the 2025 edition (p. 5), and even there
 *   Brunei, Cambodia, Laos and Myanmar appear as one aggregate, ~2% of total
 *   GMV (p. 12); no Cambodia-only GMV figure was found. Everything derived
 *   from the false citation fell with it: "USD 7-8 billion by 2030", the "48%
 *   fintech share" applied to Cambodia, the "USD 1.5 billion fintech market",
 *   "USD 3.5-4.0 billion by 2030", and the "0.3% investment-to-market ratio",
 *   together with the whole internet-economy table.
 * - "Cambodia's GDP of USD 33 billion" does not match World Bank data for any
 *   year 2020-2025 (USD 34.8bn to 51.3bn, current US$). The ASEAN "USD 3.6
 *   trillion" and "0.9% share" beside it were unsourced.
 * - "USD 2.8 billion SME financing gap" attributed to the ADB — no ADB figure
 *   was found by a prior check (see insights/sme-digital-readiness.ts).
 * - "Insurance penetration of 1.2% of GDP vs 3.5% ASEAN average", and the
 *   "USD 400 million premium opportunity" built on it — unsourced.
 * - Every investment-flow figure attributed to CB Insights and KPMG Pulse of
 *   Fintech: the market-by-market cumulative totals, shares, deal counts and
 *   "largest rounds" naming specific companies; the vertical split for ASEAN
 *   and Cambodia; Cambodia's "USD 38 million" and "18 deals"; average deal
 *   sizes; the investor-type percentages. Paywalled or secondary, no figure
 *   readable in a free report from the publisher. Untraceable.
 * - "Financial services FDI USD 285m (2024) / 213m (2023) / 128m (2020)"
 *   attributed to the Council for the Development of Cambodia — not found.
 * - Named regional groups said to have invested in Cambodia, and named funds
 *   and DFIs said to make up "65% of fintech investors" — unevidenced claims
 *   about named institutions.
 * - Peer-regulator facts (licence counts in Singapore and Indonesia, a 2024
 *   Vietnamese sandbox) — unsourced. Characterisations of the NBC's approach
 *   ("informal sandbox", "pragmatically flexible", "significant discretionary
 *   authority", "willingness to engage directly") were removed under ADR-006:
 *   the site does not comment on a regulator's process or conduct.
 * - "CamFinTech terms ... the Government-Infrastructure Paradox" and
 *   "CamFinTech identifies four investment themes" with revenue and loan-book
 *   targets — first-person sizing the firm has never done. Removed as
 *   evidence claims, not merely as unsourced figures. "Mandatory adoption
 *   creates guaranteed demand" removed as an investor-pitch line.
 *
 * Kept and re-read 2026-11-07: the NBC register counts (28 payment service
 * institutions, 7 specialized banks, as at 31 May 2026).
 *
 * Bar for restoring a figure: read in a fetched primary, recorded in `claims`
 * or `sources` with where it was read — the same bar as app/content/regulatory.
 * A Cambodia fintech-investment total in particular needs a source that
 * actually breaks Cambodia out; none was found.
 */
export const aseanFintechInvestment: ArticleContent = {
  slug: 'asean-fintech-investment',
  title: 'ASEAN FinTech Investment Comparison: Cambodia\'s Emerging Position',
  description: 'How fintech investment is measured and distributed across ASEAN, why Cambodia barely appears in the regional data, and what its government-built payment infrastructure means for where private capital can be put to work.',
  type: 'insights',
  cluster: 'investment',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-07',
  readingTime: 5,
  schema: 'Article',
  relatedSlugs: ['cambodia-fintech-landscape', 'asean-digital-economy-comparison'],
  relatedInstruments: ['prakas-b14-017-161', 'fintech-development-policy'],
  lead: 'Private investment in Southeast Asia\'s digital economy has concentrated on digital financial services: the e-Conomy SEA 2025 report puts the sector at 45–50% of total deal value in the twelve months to mid-2025. Cambodia is hard to place in that picture, for a simple reason — the most widely used regional series covered only six markets until 2025, and when it extended to all ten ASEAN members it reported Brunei, Cambodia, Laos and Myanmar together, at about 2% of regional GMV. No published primary source breaks out fintech investment into Cambodia. What can be measured points in a consistent direction: the National Bank of Cambodia reports that digital payment transactions grew 78% in number and 38% in value during 2024, on rails the public sector built. This analysis compares Cambodia with its ASEAN peers on what the sources support, and is qualitative where they do not. Figures are as at their source year.',
  claims: [
    { stat: 'Private funding into Southeast Asia\'s digital economy rose 15% to USD 7.7 billion in the last 12 months (to H1 2025), about 70% below the 2021 record. Digital financial services attracted 45–50% of total deal value over the period, up from about 30% in the prior period.', source: 'Google, Temasek and Bain & Company, e-Conomy SEA 2025, p. 41 ("Funding")', year: '2025', url: 'https://services.google.com/fh/files/misc/e_conomy_sea_2025_report.pdf' },
    { stat: 'The 2025 edition was the first to extend coverage beyond six markets to all ten ASEAN members. Brunei, Cambodia, Laos and Myanmar are reported together and account for about 2% of total GMV.', source: 'Google, Temasek and Bain & Company, e-Conomy SEA 2025, pp. 5 and 12', year: '2025', url: 'https://services.google.com/fh/files/misc/e_conomy_sea_2025_report.pdf' },
    { stat: 'The number of digital payment transactions in Cambodia grew 78% during 2024 and their value grew 38%, both measured against 2023. The National Bank of Cambodia puts the total value at approximately 15 times gross domestic product.', source: 'National Bank of Cambodia, Annual Report on the Payment System in Cambodia 2024 (Khmer), foreword, p. i (Open Development Cambodia copy)', year: '2024', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf' },
    { stat: 'The National Bank of Cambodia lists 28 payment service institutions and 7 specialized banks, as at 31 May 2026.', source: 'National Bank of Cambodia, List of Payment Service Institutions and List of Specialized Banks, as at 31 May 2026', year: '2026', url: 'https://nbc.gov.kh/files/supervision/payment-service/en/PSIs.pdf' },
    { stat: 'Cambodia\'s GDP was USD 46.4 billion in 2024 (current US$).', source: 'World Bank, World Development Indicators, NY.GDP.MKTP.CD (Cambodia)', year: '2024', url: 'https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=KH' },
  ],
  sources: [
    { publisher: 'Google, Temasek and Bain & Company', label: 'e-Conomy SEA 2025 (PDF)', url: 'https://services.google.com/fh/files/misc/e_conomy_sea_2025_report.pdf', tier: 'primary' },
    { publisher: 'Google, Temasek and Bain & Company', label: 'e-Conomy SEA 2024 (PDF) — six-market coverage, p. 4', url: 'https://services.google.com/fh/files/misc/e_conomy_sea_2024_report.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Annual Report on the Payment System in Cambodia 2024 (Khmer, PDF, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'List of Payment Service Institutions, as at 31 May 2026 (PDF)', url: 'https://nbc.gov.kh/files/supervision/payment-service/en/PSIs.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'List of Specialized Banks, as at 31 May 2026 (PDF)', url: 'https://nbc.gov.kh/files/supervision/specialized-banks/en/Specialized_Banks.pdf', tier: 'primary' },
    { publisher: 'Nine ASEAN central banks (Bank of Thailand copy)', label: 'Joint press release: The National Bank of Cambodia formally joins the Regional Payment Connectivity initiative, 8 April 2025 (PDF)', url: 'https://www.bot.or.th/content/dam/bot/documents/en/news-and-media/news/2025/news-20250408.pdf', tier: 'primary' },
    { publisher: 'World Bank', label: 'World Development Indicators — GDP (current US$), Cambodia', url: 'https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=KH', tier: 'primary' },
  ],
  faqs: [
    { question: 'Does Cambodia receive less fintech investment than other ASEAN countries?', answer: 'Almost certainly less in absolute terms, but the size of the gap cannot be stated from published primary data. The regional series most often cited did not cover Cambodia until its 2025 edition, and then reported it only within a four-country group (Brunei, Cambodia, Laos and Myanmar) that together make up about 2% of regional GMV. Three structural factors are clear without a number: the market is small (World Bank GDP of USD 46.4 billion in 2024); venture capital and accelerator infrastructure is thinner than in Singapore or Jakarta; and the core payment rails were built by the public sector, which removes the category — consumer payments — that has drawn the largest private rounds elsewhere.' },
    { question: 'Which fintech segments are most relevant to investors in Cambodia?', answer: 'The segments that build on government infrastructure rather than duplicate it. Compliance technology, particularly CamInvoice integration and tax automation, follows the General Department of Taxation\'s phased e-invoicing rollout. Cash-flow-based SME lending and supply chain finance can draw on payment and invoice records, with the business\'s consent. Cross-border payment services build on the bilateral QR links the NBC has put in place. Embedded insurance can be distributed through digital payment touchpoints, under the Insurance Regulator of Cambodia. None of these is sized here: the market estimates that previously appeared on this page could not be traced to a source.' },
    { question: 'How is fintech regulated in Cambodia?', answer: 'Payment services are licensed by the National Bank of Cambodia; the governing instrument for payment service institutions is Prakas B14-017-161, and the NBC publishes a register of licensed institutions. The Financial Services Authority\'s FinTech Center publishes the Cambodia Financial Technology Development Policy 2023-2028, which sets the policy direction. The public infrastructure — Bakong, the KHQR standard, CamDigiKey identity and the CamDX data exchange — is built for private institutions to integrate with. Licensing requirements are set by the instruments themselves; anyone planning market entry should read the current text and take Cambodian legal advice.' },
  ],
  sections: [
    {
      heading: 'How ASEAN FinTech Investment Is Measured',
      content: 'Fintech investment across ASEAN is concentrated in the region\'s largest economies and in Singapore as its financial centre. Measuring it precisely is harder than headline totals suggest. The commercial deal databases most often quoted are paywalled, define "fintech" differently from one another, and report figures that are hard to check independently.\n\nThe e-Conomy SEA series by Google, Temasek and Bain is freely available and is the most widely used public reference. Its 2025 edition reports that private funding into the region\'s digital economy rose 15% to USD 7.7 billion in the twelve months to mid-2025 — still about 70% below the 2021 peak. That is regional data. Until 2025 the series covered six markets only, and Cambodia has never been broken out on its own. A country-level figure for fintech investment into Cambodia, from a source that can be checked, has not been found; the totals, deal counts and named rounds that previously appeared in this section have been removed for that reason.',
    },
    {
      heading: 'Where Regional Capital Goes, by Segment',
      content: 'Across the region, digital financial services have become the largest destination for private funding. e-Conomy SEA 2025 puts the sector at 45–50% of total deal value in the twelve months to mid-2025, up from about 30% in the prior period, as investors moved towards later-stage rounds in businesses with clearer paths to revenue.\n\nNo published source splits Cambodian fintech investment by segment. The structure of the market, however, shapes where private capital can go. In Cambodia the core payment layer — the Bakong system and the KHQR standard — was built by the National Bank of Cambodia as shared infrastructure. Private opportunity therefore sits less in building rails and more in the services built on top of them: lending, compliance, cross-border services and insurance distribution.',
    },
    {
      heading: 'The Government-Infrastructure Paradox',
      content: 'In several neighbouring markets, privately funded e-wallets and payment companies built much of the QR and wallet layer, and raised capital to do it. In Cambodia, the public sector built that layer. This produces an apparent paradox: the stronger the public digital infrastructure, the smaller the market for the payments start-ups that attract the most venture capital elsewhere.\n\nThe paradox inverts at the application layer. A lending or compliance business in Cambodia can connect to existing public rails rather than building payment processing itself, which lowers the capital it needs to reach the market. For investors, that points towards capital-efficient application businesses rather than infrastructure-heavy bets — and it means headline investment totals understate how much of the market\'s foundation is already in place.',
    },
    {
      heading: 'Digital Payment Growth as the Leading Indicator',
      content: 'Where regional investment data is silent on Cambodia, the National Bank of Cambodia\'s own payment statistics are not. Its annual report on the payment system records that the number of digital payment transactions grew 78% during 2024, and their value 38%, against 2023 — with total value equivalent to approximately 15 times GDP. For scale, the World Bank records Cambodia\'s GDP at USD 46.4 billion in 2024.\n\nThat is a measure of usage, not of investment, and the two should not be conflated. It does show that the rails private businesses would build on are carrying rapidly rising volumes. Projections of Cambodia\'s internet economy that previously appeared here were attributed to a regional report that did not cover Cambodia in the year cited, and have been removed.',
    },
    {
      heading: 'Regulatory Framework and Market Entry',
      content: 'Investors comparing ASEAN markets usually ask first how a fintech business is licensed. In Cambodia, payment services are licensed by the National Bank of Cambodia under Prakas B14-017-161 on the Management of Payment Service Institutions. The NBC publishes its registers of licensed institutions: as at 31 May 2026, they list 28 payment service institutions and 7 specialized banks. The Financial Services Authority\'s FinTech Center publishes the Cambodia Financial Technology Development Policy 2023-2028, which sets the direction for the sector.\n\nThe defining feature of the framework is that fintech businesses are expected to build on government infrastructure — Bakong, KHQR, CamDigiKey and CamDX — rather than alongside it. For licensing requirements, the current text of the relevant instrument is the reference; the regulatory index on this site links each one to its source.',
    },
    {
      heading: 'Reading Investment Into the Financial Sector',
      content: 'Venture capital is only one channel. Some fintech-adjacent investment reaches Cambodia through licensed banking and financial institutions — as capital, partnerships or in-house development — rather than through disclosed venture rounds, which makes it largely invisible to deal databases.\n\nAnyone building an evidence base on this market should start from the sources of record: the NBC\'s registers and its annual reports, including the report on the payment system, and investment-project data from the Council for the Development of Cambodia. The investor-type breakdown, average deal sizes and financial-services FDI figures that previously appeared here could not be traced to any of these, and have been removed.',
    },
    {
      heading: 'Cross-Border Connectivity',
      content: 'Cambodia\'s payment rails are increasingly connected to the region. In its 2024 payment-system report, the National Bank of Cambodia records cross-border QR payment links with Thailand, Laos, Vietnam, Malaysia and South Korea, and with UnionPay International and Alipay, with further connections in development. The National Bank of Cambodia joined the Regional Payment Connectivity initiative on 8 April 2025, bringing its signatories to nine ASEAN central banks; the initiative was established in 2022 by five.\n\nFor investors, these links matter more than any single domestic metric: they extend the reach of businesses built on Cambodian rails to remittance, tourism and trade flows with neighbouring markets.',
    },
    {
      heading: 'Investment Themes for 2026-2030',
      content: 'Four themes follow from the structure described above. First, compliance platforms for CamInvoice integration and tax automation, as the Ministry of Economy and Finance\'s e-invoicing system, which began with government procurement, is extended. Second, SME lending that underwrites on consented payment and invoice data rather than land title. Third, value-added services on the bilateral QR corridors. Fourth, embedded insurance distributed through digital payment touchpoints.\n\nIndia\'s Unified Payments Interface is a useful comparison — public rails, with private applications built on top — though the parallel has limits: market size, regulatory structure and the role of the central bank all differ. None of these themes is sized here. The revenue, loan-book and premium estimates that previously appeared in this section had no traceable basis, and an investment case built on untraceable inputs is not one a reader should act on.',
    },
  ],
};
