import { ArticleContent } from '../types';

/*
 * Figure pass, 2026-11-15. Rebuilt from Insurance Regulator of Cambodia (IRC)
 * primaries, read this day:
 * - "Cambodia Insurance Market Data 2025" (English, one-page PDF, published
 *   19 May 2026) and the 2024 edition. Gross premium 2025: life
 *   USD 204,216,341, general 162,832,564, total 367,048,904; 2024 total
 *   357,073,078. Gross claims incurred 2025: USD 95,829,039. The IRC notes
 *   that micro insurers are included in the general insurance figures.
 * - The IRC's insurance technology sandbox register (irc.gov.kh/en/article/
 *   sandbox, public page) and entry for Phillip Bank Plc.: institution type
 *   commercial bank, insurance technology "Phillip Mobile", sandbox period
 *   15 March 2024 - 14 March 2025, customers to access the company's services
 *   and products through the mobile application. Other completed entries
 *   include insurers and a third-party administrator.
 * - IRC Guideline on the Insurance Technology Sandbox Environment (Khmer, 12
 *   pp.), p. 1 read at 220 dpi. Its preamble cites Royal Kram NS/RKM/0814/021
 *   of 4 August 2014 (Law on Insurance), a 2021 sub-decree on insurance, a
 *   2024 sub-decree on micro-insurance, and a 2023 NBFSA Prakas on a fintech
 *   sandbox for the non-bank financial sector. Sub-decree and Prakas numbers
 *   and days are NOT published: some Khmer digits (4/8) are ambiguous.
 * - "About 0.8% of GDP" is a calculation, stated as one: IRC 2024 gross
 *   premium / World Bank 2024 GDP of USD 46.35 bn (as read for
 *   insights/cambodia-vs-regional-fintech.ts) = 0.77%.
 * - CamDigiKey statements follow Sub-Decree 207 (registry entry).
 *
 * Removed, not hedged:
 * - "insurance penetration of approximately 1.5% of GDP" / "below 2%" in the
 *   description, lead and thesis. The IRC and World Bank figures give ~0.8%.
 * - The premium-range table ($0.50-$20.00) and "micro-premiums of $0.50-$2.00
 *   per month are commercially sustainable". No source; product design.
 * - "$100-200 million in annual GWP within five years ... 20-40% of the
 *   current market" (which also implied a ~USD 500m market; the IRC records
 *   USD 367m) and "first movers ... will capture disproportionate share".
 * - "near-zero cost", "claims paid back instantly via Bakong", "instant
 *   policyholder identification without paper-based KYC". Unsourced, and
 *   Sub-Decree 207 makes eKYC through CamDigiKey no substitute for an ID card
 *   or passport and requires CamDX membership, operator permission and the
 *   owner's consent for each use.
 * - CamInvoice as rails for crop and device insurance: CamInvoice Phase 1 is
 *   business-to-government (Prakas 075; memory project_corpus_evidence_bar).
 * - "Traditional insurance has failed", "catastrophic financial shocks",
 *   "this combination does not exist in most other developing markets".
 *   Unsourced characterisations.
 *
 * Earlier register fixes (2026-11-08, 2026-11-15, ADR-005/006): approval
 * agency ("navigates the IAC approval", "keeps them approved"), "accredited
 * Service Providers", NBC liaison and partnership claims, and the non-existent
 * "Insurance Authority of Cambodia" were removed. Do not reintroduce any.
 *
 * Bar for restoring a figure: read in a fetched IRC, NBFSA or other issuer
 * primary, recorded here.
 */
export const embeddedInsurance: ArticleContent = {
  slug: 'embedded-insurance',
  title: 'What is Embedded Insurance in Cambodia?',
  description: 'Embedded insurance is cover offered inside another product or payment, such as a banking app or a purchase. In Cambodia, gross premiums were USD 367 million in 2025, and the Insurance Regulator of Cambodia runs an insurance technology sandbox.',
  type: 'glossary',
  cluster: 'investment',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-15',
  readingTime: 4,
  schema: 'DefinedTerm',
  relatedSlugs: ['khqr', 'camdigikey', 'supply-chain-finance'],
  relatedInstruments: ['law-on-nbfsa', 'sub-decree-207-camdigikey'],
  lead: 'Embedded insurance is insurance offered inside another product or transaction, such as a banking app, a ticket purchase or a loan, rather than sold on its own through an agent or branch. In Cambodia it is a small part of a small market: the Insurance Regulator of Cambodia (IRC) records gross premiums of USD 367.0 million in 2025, which in 2024 was equal to about 0.8% of GDP. The IRC runs an insurance technology sandbox, and its register lists a commercial bank\'s mobile app among the technologies tested.',
  claims: [
    { stat: 'Gross insurance premiums in Cambodia were USD 367,048,904 in 2025 (life USD 204,216,341; general USD 162,832,564), up 3% on USD 357,073,078 in 2024. Micro insurers are included in the general insurance figures.', source: 'Insurance Regulator of Cambodia, Cambodia Insurance Market Data 2025 (PDF), published 19 May 2026', year: '2025', url: 'https://object.irc.gov.kh/irc-public/upload/2026/5f3b6b8d-7a81-468c-94d4-c9a9d8a25f23.pdf' },
    { stat: 'A commercial bank, Phillip Bank Plc., took part in the IRC\'s insurance technology sandbox from 15 March 2024 to 14 March 2025 with its mobile application, through which its customers were to access the company\'s services and products.', source: 'Insurance Regulator of Cambodia, insurance regulatory sandbox register (completed entries)', year: '2025', url: 'https://www.irc.gov.kh/en/article/sandbox' },
  ],
  sources: [
    { publisher: 'Insurance Regulator of Cambodia', label: 'Cambodia Insurance Market Data 2025 (PDF, one page)', url: 'https://object.irc.gov.kh/irc-public/upload/2026/5f3b6b8d-7a81-468c-94d4-c9a9d8a25f23.pdf', tier: 'primary' },
    { publisher: 'Insurance Regulator of Cambodia', label: 'Cambodia Insurance Market Data 2024 (PDF, one page)', url: 'https://object.irc.gov.kh/irc-public/upload/2025/e48f036e-b7fd-4c25-81ae-c833190b37d8.pdf', tier: 'primary' },
    { publisher: 'Insurance Regulator of Cambodia', label: 'Insurance regulatory sandbox register (web page)', url: 'https://www.irc.gov.kh/en/article/sandbox', tier: 'primary' },
    { publisher: 'Insurance Regulator of Cambodia', label: 'Guideline on the Insurance Technology Sandbox Environment (Khmer, PDF)', url: 'https://object.irc.gov.kh/irc-public/upload/2026/f8913159-3327-458a-9c67-c46183a9641b.pdf', tier: 'primary' },
    { publisher: 'World Bank', label: 'World Development Indicators via the World Bank Data API: GDP, 2024 (Cambodia, Thailand, Viet Nam)', url: 'https://api.worldbank.org/v2/country/KHM;THA;VNM/indicator/NY.GDP.MKTP.CD?format=json&date=2024', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-15',
  faqs: [
    { question: 'What is embedded insurance?', answer: 'Embedded insurance is cover offered at the point where a customer is already doing something else: buying a ticket, taking a loan, buying a device or using a banking app. The customer does not seek out an insurer separately; the offer and the premium payment sit inside the other transaction. The insurance is still underwritten by a licensed insurer, and the platform that presents it is a distribution channel.' },
    { question: 'How large is Cambodia\'s insurance market?', answer: 'The Insurance Regulator of Cambodia records gross premiums of USD 367.0 million in 2025: USD 204.2 million in life insurance and USD 162.8 million in general insurance, which includes micro insurers. That was up 3% on 2024. Set against the World Bank\'s figure for Cambodia\'s 2024 GDP, 2024 premiums were equal to about 0.8% of GDP.' },
    { question: 'Can CamDigiKey and KHQR be used for embedded insurance?', answer: 'They can support parts of it, within their rules. KHQR is the NBC\'s standard for QR payments, so a premium can be paid by scanning a code. CamDigiKey can verify a customer\'s identity data, but under Sub-Decree 207 a business needs CamDX membership and the operator\'s permission, the account owner must consent to each use, and eKYC through CamDigiKey is not a substitute for an identity card or passport. Neither changes what the insurance rules require of the insurer.' },
  ],
  sections: [
    {
      heading: 'Definition',
      content: 'Embedded insurance places an insurance offer inside a non-insurance product or transaction. Common forms elsewhere include travel cover sold with a ticket, credit life cover sold with a loan, device cover sold with a phone, and cover offered inside a bank\'s or wallet\'s app. Three parties are usually involved: the licensed insurer that underwrites the risk, the platform that presents the offer, and the customer. Which of them needs which licence or registration is set by the insurance rules, not by the technology.',
    },
    {
      heading: 'The Cambodian Insurance Market',
      content: 'The Insurance Regulator of Cambodia publishes an annual one-page summary of the market. Its figures for 2025 show gross premiums of USD 367.0 million, up 3% on 2024, with life insurance slightly larger than general insurance. Micro insurers are counted within general insurance. Against the World Bank\'s figure for Cambodia\'s 2024 GDP, USD 46.35 billion, 2024 premiums of USD 357.1 million were equal to about 0.8% of GDP; that ratio is a calculation from the two sources, not a figure either publishes.',
      table: {
        caption: 'Cambodia insurance market, USD (IRC, Cambodia Insurance Market Data 2025)',
        headers: ['Measure', '2025', '2024', 'Change'],
        rows: [
          ['Gross premium: life', '204,216,341', '200,407,724', '+2%'],
          ['Gross premium: general (incl. micro insurers)', '162,832,564', '156,665,354', '+4%'],
          ['Gross premium: total', '367,048,904', '357,073,078', '+3%'],
          ['Gross claims incurred: total', '95,829,039', '101,780,882', '-6%'],
        ],
      },
    },
    {
      heading: 'The Regulatory Frame',
      content: 'Insurance in Cambodia is supervised by the Insurance Regulator of Cambodia, one of the regulators under the Non-Bank Financial Services Authority. The IRC\'s guideline on its insurance technology sandbox cites the instruments it rests on: the Law on Insurance of 2014, a 2021 sub-decree on insurance, a 2024 sub-decree on micro-insurance, and a 2023 Prakas of the Non-Bank Financial Services Authority on a financial technology sandbox for the non-bank sector. The guideline is addressed to insurers, insurance intermediaries and technology firms.\n\nThe IRC publishes a register of firms that have completed the sandbox. It includes life and general insurers, a third-party administrator with a health claims platform, and a commercial bank, Phillip Bank, whose mobile application, Phillip Mobile, is listed as the insurance technology it tested between March 2024 and March 2025. A bank\'s app tested as an insurance channel is the pattern embedded insurance describes.',
    },
    {
      heading: 'The Digital Rails',
      content: 'Two pieces of Cambodia\'s public digital infrastructure are relevant. KHQR, the NBC\'s QR payment standard, lets a premium be paid by scanning a code from any participating bank or wallet app. CamDigiKey, the government\'s digital identity platform, can verify a customer\'s identity data for a business that is a CamDX member and has the operator\'s permission, with the account owner\'s consent for each use. Sub-Decree 207 states that eKYC through CamDigiKey does not replace an identity card or passport.\n\nNeither rail changes the insurance rules. An embedded product still needs a licensed insurer, product terms the regulator accepts, and whatever arrangement the rules require for the platform that presents it.',
    },
    {
      heading: 'Where CamFinTech\'s Work Sits',
      content: 'For an insurer, insurtech or distribution partner designing an embedded-insurance product for Cambodia, CamFinTech prepares the regulatory assessment and compliance architecture the programme needs, and builds the client side of any rail integration it uses, such as KHQR payment or CamDigiKey identity touchpoints. It is charged as a fee and handed over.\n\nLicensing decisions rest with the insurance regulator, and the licence is the client\'s. CamFinTech holds no premiums, claims funds or other client funds.',
    },
  ],
};
