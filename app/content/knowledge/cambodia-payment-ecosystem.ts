import { ArticleContent } from '../types';

/*
 * Figure pass, 2026-11-15. Rebuilt from the NBC registers as at 31 May 2026
 * (read 2026-11-04), the NBC Annual Report on the Payment System 2024 (Khmer;
 * foreword p. i; ch. 2 pp. 8-11 and the summary pp. ix-xi read 2026-11-15; ch. 6
 * for the QR links), the NBC Bakong white paper, and the NBC's KHQR developer
 * documents (read for learn/how-to-accept-khqr.ts). About 63 figures removed.
 *
 * Removed, not hedged, so nobody restores these from git:
 * - Bakong as "a central bank digital currency (CBDC)" and "the real-time gross
 *   settlement (RTGS) backbone connecting over 60 financial institutions". The
 *   NBC white paper does not call Bakong a CBDC; the 2024 report gives 69
 *   members, 60 live.
 * - "over 400,000 registered merchant codes" (twice). The 2024 report's KHQR
 *   merchant figure reads 4.5 or 8.5 million (Khmer 4/8 ambiguous); none stated.
 * - "12 million digital payment users"; the payment-mix FAQ (cash 48%, KHQR
 *   35%, transfers 12%, cards 5%, "NBC targeting 70% by 2028"); banking-sector
 *   assets, deposits and loans; MFI borrowers, loans and "18% per annum"; the
 *   wallet table (Wing 8.0M / 10,000+ agents, TrueMoney 3.5M, Pi Pay 2.8M, Ly
 *   Hour 0.6M); "1.2 million Cambodian workers in Thailand", "400,000 in
 *   Malaysia"; KHQR acceptance rates by city and sector; card and POS counts,
 *   MDRs and the card-vs-KHQR table; the corridor volumes (USD 1.5bn / 800m /
 *   500m), "ADB USD 3.5bn remittances", hawala costs; the e-commerce market,
 *   PayWay "45%", the gateway paragraph and the payment-mix table; BNPL
 *   "three licensed providers" and "NBC guidance ... 12 months". None read in
 *   a primary.
 * - "Future corridors under development include Vietnam, Laos, South Korea
 *   and Japan" and "all 10 ASEAN member states by 2028". Laos and Vietnam
 *   launched in 2023 and South Korea in 2024 (NBC 2024 report ch. 6); the
 *   rest is unsourced. These are QR payment links, not remittance corridors.
 * - Rankings and characterisations of named institutions: "ABA ... most
 *   digitally advanced", "highest KHQR volumes", "ACLEDA ... largest", "Canadia
 *   ... strongest corporate franchise", "TrueMoney ... CP Group", the "best
 *   bank" FAQ, the "Key Players" column. Unsourced claims about named
 *   institutions (ADR-006 register).
 * - "The NBC has responded with interest rate caps ...", "The NBC has not
 *   prioritized card payment expansion", "The NBC has launched targeted
 *   campaigns ... subsidized smartphone programs". Unsourced statements about
 *   a regulator's conduct.
 * - Bakong smart-contract "pilot", bank "biometric payment pilots", G2P/IDPoor
 *   on Bakong. Unsourced. The NBC's own 2024 developments are stated instead.
 * - Closing lines "regulatory navigation" and "annual review of positioning".
 *
 * Kept from the 2026-11-04 register pass: 28 payment service institutions;
 * PayGo and Chhip Pay are not on the register, which does not establish their
 * status either way.
 *
 * Bar for restoring: read in a fetched NBC publication or register, recorded
 * here with the page.
 */

export const cambodiaPaymentEcosystem: ArticleContent = {
  slug: 'cambodia-payment-ecosystem',
  title: 'Cambodia Payment Ecosystem Map: Banks, Wallets, and Infrastructure',
  description: 'A map of Cambodia\'s payment ecosystem from the National Bank of Cambodia\'s own registers and 2024 payment-system report: the licensed institutions, Bakong and KHQR, how payments move between institutions, the cross-border QR links, and what the NBC added in 2024.',
  type: 'knowledge',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-15',
  readingTime: 7,
  schema: 'TechArticle',
  relatedSlugs: ['bakong', 'khqr', 'nbc', 'how-to-accept-khqr'],
  relatedInstruments: ['prakas-b14-017-161'],
  lead: 'Cambodia\'s payment ecosystem is organised around shared national infrastructure. The National Bank of Cambodia (NBC) licenses the institutions, runs Bakong, the national payment system that moves riel and US dollar payments between them, and sets KHQR, the single QR code standard every participating bank and wallet accepts. The NBC\'s registers list 58 commercial banks, 7 specialized banks, 88 microfinance institutions and 28 payment service institutions as at 31 May 2026. Its 2024 payment-system report records 60 institutions live on Bakong, about 30 million accounts able to pay through it, and digital payment transactions up 78% in number on 2023. This article maps who does what in that system, using the NBC\'s own figures.',
  // Claims removed 2026-08-31. Restore an entry only when its figure has been
  // read in a fetched primary, on the same evidence bar as app/content/regulatory,
  // and record where it was read. Added 2026-11-04 from the NBC register; added
  // 2026-11-15 from the NBC 2024 payment-system report.
  claims: [
    { stat: 'The National Bank of Cambodia lists 58 commercial banks, 7 specialized banks, 88 microfinance institutions (3 deposit-taking and 85 non-deposit-taking) and 28 payment service institutions, as at 31 May 2026.', source: 'National Bank of Cambodia, Lists of Commercial Banks, Specialized Banks, Microfinance Deposit-Taking Institutions, Microfinance Institutions and Payment Service Institutions', year: '2026', url: 'https://nbc.gov.kh/files/supervision/payment-service/en/PSIs.pdf' },
    { stat: 'The number of digital payment transactions in Cambodia grew 78% during 2024 and their value grew 38%, both measured against 2023. The National Bank of Cambodia puts the total value at approximately 15 times gross domestic product.', source: 'National Bank of Cambodia, Annual Report on the Payment System in Cambodia 2024 (Khmer), foreword, p. i', year: '2024', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf' },
    { stat: 'By the end of 2024 Bakong had 69 member institutions, 60 of them live, and about 30 million accounts at member institutions could transact through it; it carried more than 600 million transactions in 2024, with a total value equal to 327% of GDP.', source: 'National Bank of Cambodia, Annual Report on the Payment System in Cambodia 2024 (Khmer), ch. 2.1, printed pp. 8-9', year: '2024', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf' },
  ],
  sources: [
    { publisher: 'National Bank of Cambodia', label: 'Annual Report on the Payment System in Cambodia 2024 (Khmer, PDF, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Project Bakong: Next Generation Payment System, white paper, June 2020 (PDF)', url: 'https://bakong.nbc.gov.kh/download/NBC_BAKONG_White_Paper.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Prakas F14-020-351 on the KHQR Code technical specification, June 2020 (Khmer, PDF)', url: 'https://nbc.gov.kh/files/legislation/prakas/latest/km/Prakas_F14-020-351-PR_KHQR_for_Payment_in_Cambodia_appendix.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Prakas F14-020-349 on the Bakong system rules and procedures, June 2020 (Khmer, PDF)', url: 'https://nbc.gov.kh/files/legislation/prakas/latest/km/Prakas_F14-020-349-PR_Rule_and_Procedure.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'KHQR Content Guideline v1.3, November 2020 (PDF)', url: 'https://bakong.nbc.gov.kh/download/KHQR/integration/KHQR%20Content%20Guideline%20v.1.3.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'List of Commercial Banks, as at 31 May 2026 (PDF)', url: 'https://nbc.gov.kh/files/supervision/commercial-banks/en/Commercial_Banks.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'List of Specialized Banks, as at 31 May 2026 (PDF)', url: 'https://nbc.gov.kh/files/supervision/specialized-banks/en/Specialized_Banks.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'List of Microfinance Deposit-Taking Institutions, as at 31 May 2026 (PDF)', url: 'https://nbc.gov.kh/files/supervision/microfinance-deposit-taking-institutions/en/MDIs.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'List of Microfinance Institutions, as at 31 May 2026 (PDF)', url: 'https://nbc.gov.kh/files/supervision/microfinance-non-deposit-taking-institutions/en/MFIs.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'List of Payment Service Institutions, as at 31 May 2026 (PDF)', url: 'https://nbc.gov.kh/files/supervision/payment-service/en/PSIs.pdf', tier: 'primary' },
    { publisher: 'Bank of Thailand', label: 'Press Release No. 9/2020: The Launch of Interoperable QR Payment Linkage between Cambodia and Thailand (PDF)', url: 'https://www.bot.or.th/content/dam/bot/documents/en/news-and-media/news-pdf/2020/n0963e.pdf', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-15',
  faqs: [
    { question: 'How many payment and banking institutions are licensed in Cambodia?', answer: 'The National Bank of Cambodia\'s registers list 58 commercial banks, 7 specialized banks, 88 microfinance institutions (3 deposit-taking and 85 non-deposit-taking) and 28 payment service institutions, as at 31 May 2026. The registers are updated over time, so check the NBC\'s current lists before relying on any count or on whether a particular firm is licensed.' },
    { question: 'Is Bakong a central bank digital currency?', answer: 'Not on the NBC\'s own account. Its white paper of June 2020 describes Bakong as a next-generation payment system built on Hyperledger Iroha, and does not describe it as a central bank digital currency. Bakong moves riel and US dollar payments between the accounts and wallets of its member institutions, of which 60 were live at the end of 2024.' },
    { question: 'Can foreign visitors pay in Cambodia with their own apps?', answer: 'Some can. The NBC\'s 2024 payment-system report records QR payment links with Thailand, Laos, Vietnam, Malaysia and South Korea, and with the UnionPay and Alipay+ networks, which let a visitor pay a Cambodian KHQR merchant from a home-country app. Which apps work at a given merchant, and how currency conversion is handled, depends on the link and on the merchant\'s acquiring institution.' },
  ],
  sections: [
    {
      heading: 'How the Ecosystem Is Organised',
      content: 'The NBC sits at the centre in two roles. It licenses and supervises banks, microfinance institutions and payment service institutions, and it runs the shared infrastructure they use: Bakong for moving payments between institutions, under Prakas F14-020-349 of June 2020, and the KHQR standard for QR payments, under Prakas F14-020-351 of the same month. Its 2024 report lists the national payment systems it operates, among them the National Clearing System, the FAST payment system, the Online Banking System, Bakong, Retail Pay and the Cambodian Shared Switch.\n\nThe effect of a single QR standard and a shared payment system is interoperability by design. A customer of any participating institution can pay any KHQR merchant, whichever institution either side uses, rather than each bank or wallet running its own closed network.',
      table: {
        caption: 'Licensed institutions on the NBC registers, as at 31 May 2026',
        headers: ['Category', 'Count', 'Register'],
        rows: [
          ['Commercial banks', '58', 'NBC List of Commercial Banks'],
          ['Specialized banks', '7', 'NBC List of Specialized Banks'],
          ['Microfinance institutions, deposit-taking', '3', 'NBC List of Microfinance Deposit-Taking Institutions'],
          ['Microfinance institutions, non-deposit-taking', '85', 'NBC List of Microfinance Institutions'],
          ['Payment service institutions', '28', 'NBC List of Payment Service Institutions'],
        ],
      },
    },
    {
      heading: 'Banks, Microfinance Institutions and Payment Service Institutions',
      content: 'Commercial banks provide accounts, lending and payment services, and can sign up KHQR merchants. Specialized banks are a separate licence category on the NBC register. Microfinance institutions lend, and the deposit-taking ones also take savings. Payment service institutions are licensed under NBC Prakas B14-017-161 to provide payment services; the Prakas provides for a single payment service institution licence rather than categories. The 2024 report\'s panel of Bakong\'s 60 live members includes banks, microfinance institutions and payment service institutions.\n\nThe registers name each licensed institution, and they are the right place to confirm a counterparty. Some well-known brands are licensed in a different category from the one their history suggests: Wing, which began as a mobile money operator, now appears on the register as a commercial bank. A firm that is not on any register may be unlicensed, may operate under another regulator, or may have changed its name; the register alone does not say which.',
    },
    {
      heading: 'Bakong: The Shared Payment System',
      content: 'Bakong, launched on 28 October 2020, is the NBC\'s national payment system. The NBC\'s white paper describes it as a next-generation payment system built on Hyperledger Iroha, not a central bank digital currency. It connects the payment services of its members so that a customer of one bank or wallet can pay a customer of another.\n\nAt the end of 2024, 60 institutions were live on Bakong and nine more were integrating. About 30 million accounts at member institutions could transact through it, more than Cambodia\'s population, although only 642,500 accounts were registered on the Bakong app itself: most people use Bakong through their own bank\'s or wallet\'s app. Bakong carried more than 600 million transactions in 2024, with a total value equal to 327% of GDP. Riel transactions were 49% of the number and 30% of the value.',
    },
    {
      heading: 'KHQR: One Standard for QR Payments',
      content: 'KHQR is the national QR code standard, set by Prakas F14-020-351. It follows the EMVCo format for merchant-presented QR codes, and the NBC\'s KHQR Content Guideline sets out the Cambodian content: a static code, printed once and used with an amount the customer enters, and a dynamic code, generated for each transaction with the amount built in. Every participating bank and wallet app can pay any KHQR code.\n\nA merchant accepts KHQR through a bank or payment service institution that is a Bakong member, which decides on the application and sets its own fees. The NBC publishes an SDK for generating codes and an API for checking payment status, so a merchant with a till system or online checkout can generate dynamic codes and confirm payment automatically.',
    },
    {
      heading: 'Digital Payment Growth',
      content: 'The NBC\'s 2024 payment-system report records the number of digital payment transactions in Cambodia growing 78% on 2023 and their value 38%, with total value approximately 15 times GDP. Within Bakong, riel use grew fastest: the number of riel transactions more than quadrupled on 2023, against a 132% rise for dollar transactions.\n\nThese are usage measures, and they say nothing about how much of all retail spending has moved off cash; the report read for this page gives no such share. Figures that circulate for cash versus digital shares of retail payments should be traced to their source before they are relied on.',
    },
    {
      heading: 'Cross-Border QR Payment Links',
      content: 'Bakong\'s links abroad are QR payment links: they let a customer pay a merchant across the border by scanning a QR code. They are not remittance services. Thailand was first, launched in February 2020 and announced by the Bank of Thailand. The NBC\'s 2024 report records the links that followed.',
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
      heading: 'What the NBC Added in 2024',
      content: 'The 2024 report describes several developments that shape where the ecosystem is heading. Electronic customer registration (eKYC) through Bakong, built with the Techo Startup Center on identity data from the Ministry of Interior, is meant to make customer onboarding at member institutions easier. Account linking lets a customer connect a bank account to the Bakong app: 23 institutions had completed it by the end of 2024 and 33 more were working on it. On 19 March 2024 the NBC issued guidance to banks, microfinance institutions and payment service institutions on promoting the use of riel in payment services. And after Bakong\'s retail payments, the NBC piloted Bakong for large-value payments, using distributed ledger technology.',
    },
    {
      heading: 'Where the Opportunities Lie',
      content: 'The shared infrastructure changes where a new entrant can add value. Moving money between institutions, and a QR standard every app accepts, are already provided. What sits on top of them is less developed: merchant tools that use payment data, reconciliation between payments and accounting systems, and business-to-business payment flows that connect invoices, including those issued through CamInvoice, to settlement on Bakong.\n\nAny of these starts from the same two decisions: which licensed institution to work with, since a non-bank reaches Bakong through a member, and whether the activity itself needs a licence, such as a payment service institution licence under Prakas B14-017-161. Both are matters to settle with the institution and, for the licensing question, with Cambodian counsel, before the build.',
    },
  ],
};
