import { ArticleContent } from '../types';

/*
 * Figure pass, 2026-11-15. Rebuilt from the NBC's own English KHQR developer
 * documents on bakong.nbc.gov.kh (read this day): KHQR Content Guideline v1.3
 * (November 2020); QR Payment Integration v1.0.3 (6 August 2021); KHQR SDK
 * Document v2.9 (May 2025); Bakong Open API Document v1.0.2 (November 2021).
 * Plus KHQR Prakas F14-020-351 (June 2020; Khmer scan, title only) and the
 * NBC Annual Report on the Payment System 2024, ch. 6, for the QR links.
 *
 * Removed, not hedged:
 * - "coordinates the build with accredited Service Providers" (three places)
 *   and "we recommend dynamic QR for any business processing more than 50
 *   transactions per day". The 2026-11-08 register sweep note below says this
 *   wording was removed; three instances survived it. ADR-005: the firm builds
 *   the client side itself; no partner relationship exists.
 * - "over 400,000 merchants are registered". The NBC 2024 report gives a KHQR
 *   merchant-account figure, but it reads as either 4.5 or 8.5 million (Khmer
 *   4 and 8 look alike), so no count is stated.
 * - Fees: "0% to 0.5%", "NBC has worked with acquiring banks to keep MDR ...",
 *   "card networks 2-3%", "no monthly fees ... or chargeback costs", and the
 *   cost-comparison table. Unsourced, and the NBC claim is about a named
 *   institution's conduct.
 * - "settle in real time ... within one to two seconds. Funds are available
 *   in the merchant's account immediately". Not in the NBC documents; the
 *   integration guide describes status polling instead.
 * - Registration requirements table, "three to five business days",
 *   "same-day onboarding", "increasingly through CamDigiKey". Unsourced.
 * - "consumer-presented QR". The Content Guideline is merchant-presented.
 * - Tourist section: "China (Alipay)" (the link is with Alipay+), "currency
 *   conversion happens automatically", "settles in the merchant's local
 *   currency", "eliminates the need for separate Alipay or WeChat Pay merchant
 *   registrations", "the most tourist-friendly payment method". Unsourced.
 * - "SDKs ... JavaScript, Python, PHP, Java" from "several banks", WooCommerce
 *   / Shopify paths, and the integration-methods table. The NBC SDK document
 *   covers Java, iOS (Swift) and JavaScript; bank SDKs were not read.
 *
 * Bar for restoring: read in an NBC document or an acquirer's published
 * terms, recorded here.
 *
 * 2026-11-08 register sweep (ADR-005/006). The firm section and FAQ lines
 * here said CamFinTech "navigates the approval", "keeps them approved",
 * provides "approval-navigation", and that the build "is coordinated with
 * accredited Service Providers"; some also claimed NBC liaison, regulatory
 * goodwill, banking partners or partnership facilitation. Removed: the
 * approval decision is the operator's or regulator's, the client is the
 * applicant of record, the firm builds the client side itself (ADR-005), and
 * no partner relationship exists. Do not reintroduce any of these phrasings.
 */
export const howToAcceptKHQR: ArticleContent = {
  slug: 'how-to-accept-khqr',
  title: 'How to Accept KHQR Payments in Cambodia',
  description: 'A practical guide to accepting KHQR payments in Cambodia from the National Bank of Cambodia\'s own developer documents: static and dynamic KHQR, the EMVCo-based format, the KHQR SDK, checking payment status through the Bakong Open API, reconciliation, and cross-border QR acceptance.',
  type: 'learn',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-15',
  readingTime: 6,
  schema: 'Article',
  relatedSlugs: ['khqr', 'bakong', 'nbc'],
  relatedInstruments: ['prakas-b14-017-161'],
  lead: 'KHQR is Cambodia\'s national QR code standard for payments, set by National Bank of Cambodia (NBC) Prakas F14-020-351 of June 2020. A customer of any participating bank or wallet can pay a KHQR merchant by scanning one code, and the payment moves between institutions on Bakong, the NBC\'s payment system. A merchant can display a static code, into which the customer enters the amount, or generate a dynamic code for each transaction with the amount built in. The NBC publishes the format, an SDK for generating codes, and an API for checking whether a payment has been made. This guide follows those documents from first code to reconciled payment.',
  claims: [
    { stat: 'In the NBC\'s dynamic KHQR flow, the merchant\'s back end generates a KHQR code with the NBC\'s KHQR SDK, following the EMVCo QR standard, and displays it with an expiration time; the merchant then checks the transaction status with Bakong at intervals, and Bakong responds with a status such as success or failed.', source: 'National Bank of Cambodia, QR Payment Integration, v1.0.3 (6 August 2021), product flow', year: '2021', url: 'https://bakong.nbc.gov.kh/download/KHQR/integration/QR%20Payment%20Integration.pdf' },
    { stat: 'The KHQR payload marks a static code with Point of Initiation Method 11 and a dynamic code with 12, carries the merchant\'s account information, name, city and transaction currency (for example 116 for Khmer riel), and ends with a CRC checksum computed over the rest of the code.', source: 'National Bank of Cambodia, KHQR Content Guideline v1.3 (November 2020), static and dynamic KHQR examples', year: '2020', url: 'https://bakong.nbc.gov.kh/download/KHQR/integration/KHQR%20Content%20Guideline%20v.1.3.pdf' },
  ],
  sources: [
    { publisher: 'National Bank of Cambodia', label: 'Prakas F14-020-351 on the KHQR Code technical specification, June 2020 (Khmer, PDF)', url: 'https://nbc.gov.kh/files/legislation/prakas/latest/km/Prakas_F14-020-351-PR_KHQR_for_Payment_in_Cambodia_appendix.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'KHQR Content Guideline v1.3, November 2020 (PDF)', url: 'https://bakong.nbc.gov.kh/download/KHQR/integration/KHQR%20Content%20Guideline%20v.1.3.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'QR Payment Integration, v1.0.3, 6 August 2021 (PDF)', url: 'https://bakong.nbc.gov.kh/download/KHQR/integration/QR%20Payment%20Integration.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'KHQR SDK Document, v2.9, May 2025 (PDF)', url: 'https://bakong.nbc.gov.kh/download/KHQR/integration/KHQR%20SDK%20Document.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Bakong Open API Document, v1.0.2, November 2021 (PDF)', url: 'https://bakong.nbc.gov.kh/download/KHQR/integration/Bakong%20Open%20API%20Document.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Annual Report on the Payment System in Cambodia 2024 (Khmer, PDF, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-15',
  faqs: [
    { question: 'How much does it cost to accept KHQR payments?', answer: 'Merchant fees are set by the bank or payment service institution that signs the merchant up, not by the KHQR standard, and the NBC documents read for this page publish none. Ask the acquiring institution for its current fee schedule, settlement terms and any charges for dynamic-QR or API access, and compare offers in writing.' },
    { question: 'Can tourists pay with KHQR?', answer: 'Visitors from some countries can. The NBC\'s 2024 payment-system report records QR payment links with Thailand, Laos, Vietnam, Malaysia and South Korea, and with the UnionPay and Alipay+ networks, which let a visitor pay a Cambodian merchant from a home-country app. Which apps and wallets work, and how currency conversion is handled, depends on each link, so a merchant should confirm the details with its acquiring institution.' },
    { question: 'How does a merchant know a KHQR payment has gone through?', answer: 'For a static code, the merchant\'s bank or wallet app shows the incoming payment. For a dynamic code, the NBC\'s integration guide has the merchant\'s system check the transaction status with Bakong at intervals after displaying the code; the Bakong Open API provides a check by the code\'s MD5 hash. The guide says the check should complete within 10 seconds, with a manual check as the fallback. When the funds become available in the merchant\'s account is set by the acquiring institution.' },
  ],
  sections: [
    {
      heading: 'Static and Dynamic KHQR',
      content: 'KHQR follows the EMVCo QR code standard for payments, the international format used for merchant-presented QR, with Cambodia-specific content set by the NBC\'s Prakas and its KHQR Content Guideline. The code is a structured string: a payload format indicator, a point-of-initiation method, the merchant\'s account information, merchant name and city, the transaction currency, optionally the amount, and a CRC checksum over everything before it.\n\nThe point-of-initiation method distinguishes the two kinds of code. A static code (value 11) is printed once and reused; the customer scans it and types the amount. A dynamic code (value 12) is generated for one transaction with the amount and an expiry time built in, so the customer only confirms. The Guideline gives examples of each, including codes for an individual or solo merchant.',
      table: {
        caption: 'Static and dynamic KHQR (NBC KHQR Content Guideline v1.3; QR Payment Integration v1.0.3)',
        headers: ['', 'Static KHQR', 'Dynamic KHQR'],
        rows: [
          ['Point of initiation method', '11', '12'],
          ['Amount', 'Entered by the customer', 'Built into the code'],
          ['Generated', 'Once, then displayed or printed', 'Per transaction, by the merchant\'s back end'],
          ['Expiry', 'None', 'Set by the integrator'],
          ['Confirming payment', 'Merchant\'s bank or wallet app', 'Merchant system checks status with Bakong'],
        ],
      },
    },
    {
      heading: 'Getting Started as a Merchant',
      content: 'A merchant accepts KHQR through a bank or licensed payment service institution that is a Bakong member, and its KHQR is linked to a settlement account with that institution. The institution decides on the merchant application, sets the documents it requires, and issues the merchant\'s code or API credentials; the merchant is the applicant.\n\nFor a shop with a counter, a static code from the institution may be all that is needed. For a till system, an online checkout or an app, a dynamic code generated per transaction removes manual amount entry and gives each payment its own reference, which makes reconciliation far simpler.',
    },
    {
      heading: 'Generating Dynamic KHQR with the SDK',
      content: 'The NBC publishes a KHQR SDK for generating, decoding and verifying KHQR codes. Its documentation, at version 2.9 of May 2025, gives examples for Java (installed through Maven or Gradle), iOS (Swift) and JavaScript, and covers codes for both individuals and merchants, an alternate-language merchant name and city in Khmer, and the generation of deeplinks that open a payment in a banking app.\n\nIn the NBC\'s integration flow, the customer starts a payment in the merchant\'s app, website or point of sale; the merchant\'s back end generates the KHQR with the SDK, with a unique transaction reference, and returns it with its expiry time; and the merchant displays the code. Generating the code on the server, not in the browser or app, keeps the merchant\'s account details and transaction references under the merchant\'s control.',
    },
    {
      heading: 'Checking Payment Status: the Bakong Open API',
      content: 'Once the code is displayed, the merchant\'s system checks at intervals whether it has been paid. The Bakong Open API provides the calls for this: requesting, verifying and renewing an access token; checking a transaction\'s status by the MD5 hash of its KHQR string; generating a deeplink; and checking a Bakong account. Bakong responds with the payment status, such as success or failed, and the merchant then confirms the order to the customer.\n\nThe integration guide asks that status checks complete within 10 seconds, with a manual check as the fallback. A production integration therefore needs a polling interval matched to the code\'s expiry time, a clear state for expired codes, and a way for staff to confirm a payment by hand when the automated check cannot.',
      table: {
        caption: 'Bakong Open API calls (Bakong Open API Document v1.0.2)',
        headers: ['Call', 'Purpose'],
        rows: [
          ['Request token / Verify token / Renew token', 'Obtain and maintain API access'],
          ['Check transaction status by MD5', 'Confirm whether a dynamic KHQR has been paid'],
          ['Generate deeplink', 'Open the payment in a banking app'],
          ['Check Bakong account', 'Confirm a Bakong account exists'],
        ],
      },
    },
    {
      heading: 'Reconciliation and Reporting',
      content: 'Reconciliation is where the dynamic flow earns its extra work. Each dynamic code carries a unique transaction reference generated by the merchant, and the MD5 hash of the code identifies it to Bakong, so every order in the merchant\'s system can be matched to exactly one payment status. Static codes have no such reference, which is why they suit low volumes and manual checking.\n\nThe acquiring institution\'s statements are the settlement record. A sound design matches three things daily: the merchant\'s orders, the payment statuses returned by Bakong, and the institution\'s settlement statement, and it flags anything that appears in one and not the others.',
    },
    {
      heading: 'Accepting Payments from Visitors',
      content: 'Bakong has QR payment links abroad. The NBC\'s 2024 payment-system report records links with Thailand (launched in February 2020), Laos and Vietnam (2023), South Korea and Malaysia (2024), and the UnionPay and Alipay+ networks. Through these, a visitor can pay a Cambodian merchant from a home-country app. They are payment links, not remittance services.\n\nWhich foreign apps a given merchant can accept, and how currency conversion and settlement work for those payments, depends on the link and on the merchant\'s acquiring institution. A merchant serving visitors should confirm both before relying on it.',
    },
    {
      heading: 'Where CamFinTech\'s Work Sits',
      content: 'For a business preparing to accept KHQR, CamFinTech scopes the integration across point of sale, e-commerce and back-office reconciliation, builds the client side of it, and prepares the compliance work the acquiring bank or payment service institution will ask for. It is charged as a fee and handed over, with documentation, and the client operates it.\n\nMerchant onboarding is the acquiring institution\'s decision, and the client is the applicant. CamFinTech does not host or transmit payment traffic, operates no rail and holds no client funds.',
    },
  ],
};
