import { ArticleContent } from '../types';

/*
 * Figure pass, 2026-11-15. Rebuilt from the NBC's own English developer
 * documents on bakong.nbc.gov.kh (read this day): Bakong Open API Document
 * v1.0.2 (4 November 2021; endpoints p. 3, status and error codes p. 4, token
 * flow pp. 5-11, deeplink pp. 11-13, status by MD5 pp. 13-15); QR Payment
 * Integration v1.0.3 (6 August 2021); KHQR SDK Document v2.9 (May 2025); KHQR
 * Content Guideline v1.3 (November 2020). Plus the NBC 2024 payment-system
 * report (members) and the Bakong white paper.
 *
 * The previous version presented an invented API as a reference. Removed, not
 * hedged, so nobody restores it from git:
 * - "the sole authorized real-time gross settlement (RTGS) infrastructure ...
 *   connecting over 60 financial institutions". Not the NBC's description;
 *   the 2024 report gives 69 members, 60 live.
 * - The four-tier access model ("Tier 1-4", "Commercial banks (30+)", "PSPs,
 *   MFIs (30+)"), "dedicated VPN tunnels or MPLS circuits", "X.509
 *   certificates issued by the NBC's Certificate Authority", "OAuth 2.0 +
 *   mTLS", and NBC "minimum standards" (TLS 1.2, 90-day key rotation, IP
 *   whitelists, HMAC-SHA256 webhooks, PCI DSS Level 2, SOC 2), "annual
 *   security assessments", "remediation within 30 days". None is in an NBC
 *   document read.
 * - The transaction state machine (INITIATED, VALIDATED, SETTLED, TIMEOUT,
 *   FX_PENDING ...), "acknowledge within 5 seconds", "30-second timeout",
 *   "idempotency keys" in the Bakong switch, "AML/CFT screening" at validation.
 * - The webhook model, event types, payload fields, HMAC signatures and retry
 *   schedule (5s/15s/45s/135s). The NBC Open API has no webhooks; payment
 *   status is polled.
 * - The error-code table (1001, 2001, 2003 ... 5001) and "maintenance on the
 *   first Sunday of each month 02:00-06:00 ICT". The real error codes are
 *   1-10 and are stated below.
 * - "NBC requires all participating institutions to reconcile within T+1",
 *   "settlement files by 06:00 ICT", "settlement day ends 23:59:59 ICT".
 * - Corridor specifications (PromptPay/DuitNow/Alipay limits in THB, MYR,
 *   CNY; "15-minute batches 08:00-20:00 MYT"; FX providers; "Vietnam pilot",
 *   "Laos planned Q3 2026"). Laos and Vietnam launched in 2023 (NBC 2024
 *   report ch. 6); the links are QR payment links; no specification was read.
 * - "The NBC mandates ... sandbox ... before production access", "200 test
 *   transactions", "8-12 weeks", "NBC technical review", "500 TPS", "NBC
 *   publishes monthly peak transaction periods". Unsourced.
 * - Sales lines: bank "comparison matrix", "reference state machine",
 *   "dedicated project management and independent technical QA".
 *
 * Bar for restoring: read in an NBC document or a member institution's
 * published API documentation, recorded here with version and page.
 */

export const bakongTechnicalIntegration: ArticleContent = {
  slug: 'bakong-technical-integration',
  title: 'Bakong Technical Integration Guide for Enterprise Developers',
  description: 'What the National Bank of Cambodia publishes for developers integrating with Bakong: the KHQR payload, the KHQR SDK, the Bakong Open API\'s token flow, endpoints and error codes, deeplinks and payment-status checks, and what the NBC documents leave to member institutions.',
  type: 'knowledge',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-15',
  readingTime: 8,
  schema: 'TechArticle',
  relatedSlugs: ['bakong', 'khqr', 'how-bakong-works'],
  relatedInstruments: ['prakas-b14-017-161'],
  lead: 'Bakong is the National Bank of Cambodia\'s national payment system, and its members are banks, microfinance institutions and payment service institutions: 69 at the end of 2024, 60 of them live. An enterprise that is not a member reaches Bakong in two ways. Payments themselves move through a member institution, under that institution\'s own API and terms. Alongside that, the NBC publishes a public developer toolkit for KHQR: a format guideline, an SDK for generating and verifying codes, and the Bakong Open API for checking whether a KHQR payment has been made. This guide sets out what those NBC documents specify, endpoint by endpoint, and is explicit about what they leave to the member institution.',
  claims: [
    { stat: 'The Bakong Open API provides eight calls: request token, verify token, renew token, generate deeplink by QR, check transaction status by MD5, by full hash or by short hash, and check a Bakong account, the last added in version 1.0.2. Responses carry a response code of 0 for success or 1 for failure and a numbered error code.', source: 'National Bank of Cambodia, Bakong Open API Document v1.0.2 (4 November 2021), pp. 2-4', year: '2021', url: 'https://bakong.nbc.gov.kh/download/KHQR/integration/Bakong%20Open%20API%20Document.pdf' },
    { stat: 'In the NBC\'s dynamic KHQR flow, the merchant\'s back end generates a KHQR code with the NBC\'s KHQR SDK, following the EMVCo QR standard, and displays it with an expiration time; the merchant then checks the transaction status with Bakong at intervals, and Bakong responds with a status such as success or failed.', source: 'National Bank of Cambodia, QR Payment Integration, v1.0.3 (6 August 2021), product flow', year: '2021', url: 'https://bakong.nbc.gov.kh/download/KHQR/integration/QR%20Payment%20Integration.pdf' },
  ],
  sources: [
    { publisher: 'National Bank of Cambodia', label: 'Bakong Open API Document, v1.0.2, November 2021 (PDF)', url: 'https://bakong.nbc.gov.kh/download/KHQR/integration/Bakong%20Open%20API%20Document.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'QR Payment Integration, v1.0.3, 6 August 2021 (PDF)', url: 'https://bakong.nbc.gov.kh/download/KHQR/integration/QR%20Payment%20Integration.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'KHQR SDK Document, v2.9, May 2025 (PDF)', url: 'https://bakong.nbc.gov.kh/download/KHQR/integration/KHQR%20SDK%20Document.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'KHQR Content Guideline v1.3, November 2020 (PDF)', url: 'https://bakong.nbc.gov.kh/download/KHQR/integration/KHQR%20Content%20Guideline%20v.1.3.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Prakas F14-020-349 on the Bakong system rules and procedures, June 2020 (Khmer, PDF)', url: 'https://nbc.gov.kh/files/legislation/prakas/latest/km/Prakas_F14-020-349-PR_Rule_and_Procedure.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Prakas F14-020-351 on the KHQR Code technical specification, June 2020 (Khmer, PDF)', url: 'https://nbc.gov.kh/files/legislation/prakas/latest/km/Prakas_F14-020-351-PR_KHQR_for_Payment_in_Cambodia_appendix.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Project Bakong: Next Generation Payment System, white paper, June 2020 (PDF)', url: 'https://bakong.nbc.gov.kh/download/NBC_BAKONG_White_Paper.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Annual Report on the Payment System in Cambodia 2024 (Khmer, PDF, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-15',
  faqs: [
    { question: 'Can an enterprise connect directly to Bakong?', answer: 'Not as a payment participant: Bakong\'s members are licensed banks, microfinance institutions and payment service institutions, under the NBC\'s Bakong rules (Prakas F14-020-349), and an enterprise\'s payments move through a member. What an enterprise can use directly is the NBC\'s public Bakong Open API, which any integrator can register for with an email address, organisation and project name. It checks whether a KHQR payment has been made and generates payment deeplinks; it does not move money.' },
    { question: 'What is the difference between static and dynamic KHQR codes?', answer: 'A static KHQR code (point-of-initiation value 11) is generated once and reused, and the customer enters the amount. A dynamic code (value 12) is generated per transaction with the amount built in and an expiry time set by the integrator. The Bakong Open API\'s status checks work for dynamic codes; its documentation lists "the system does not support static QR code" as error 2.' },
    { question: 'How do I know whether a KHQR payment succeeded or failed?', answer: 'Poll the Bakong Open API. Send the MD5 hash of the KHQR string to the check-transaction-by-MD5 endpoint with your access token. A found transaction returns its hash, the from and to account identifiers, currency and amount; otherwise the response carries error 1 ("Transaction could not be found") or 3 ("Transaction failed"). The NBC\'s integration guide asks that checks complete within 10 seconds, with a manual check as the fallback.' },
  ],
  sections: [
    {
      heading: 'Two Ways In',
      content: 'An enterprise integrating with Bakong works on two surfaces, and they should not be confused. The first is the member institution, the bank or payment service institution that holds the enterprise\'s account and moves its money. Its API, credentials, settlement terms, statements and any notifications are its own, and they are documented by that institution, not by the NBC. The second is the NBC\'s public KHQR toolkit: a format guideline, an SDK and the Bakong Open API. It lets the enterprise generate KHQR codes correctly and check whether they have been paid, but it does not initiate or settle payments.\n\nMost merchant and e-commerce integrations use both: the toolkit at the point of payment, and the member institution\'s statements for settlement and reconciliation. Bakong membership itself, for institutions, is governed by the NBC\'s Bakong rules in Prakas F14-020-349.',
    },
    {
      heading: 'The KHQR Payload',
      content: 'KHQR follows the EMVCo QR code standard for merchant-presented payments, with Cambodian content set by Prakas F14-020-351 and the KHQR Content Guideline. The payload is a series of tag-length-value fields: a two-digit tag, a two-digit length and the value. The Guideline\'s examples show the fields below; the point-of-initiation method distinguishes a static code (11) from a dynamic one (12), and the final field is a CRC checksum computed over everything before it.',
      table: {
        caption: 'KHQR fields in the NBC\'s examples (KHQR Content Guideline v1.3; Bakong Open API Document v1.0.2)',
        headers: ['Tag', 'Field', 'Example from the NBC documents'],
        rows: [
          ['00', 'Payload format indicator', '000201 (version 01)'],
          ['01', 'Point of initiation method', '010211 (static) / 010212 (dynamic)'],
          ['29', 'Merchant account information (individual or solo merchant)', 'Bakong account information'],
          ['53', 'Transaction currency', '5303116 (Khmer riel)'],
          ['59', 'Merchant name', '5917Lucky Supermarket'],
          ['60', 'Merchant city', '6010Phnom Penh'],
          ['62', 'Additional data', 'Free-text reference, as in the Open API deeplink sample'],
          ['63', 'CRC checksum', '6304 followed by four hexadecimal digits'],
        ],
      },
    },
    {
      heading: 'Generating Codes with the KHQR SDK',
      content: 'The NBC\'s KHQR SDK generates, decodes and verifies KHQR codes. Version 2.9 of its documentation, dated May 2025, gives examples for Java (via Maven or Gradle), iOS (Swift) and JavaScript. It distinguishes individual and merchant codes, supports an alternate-language merchant name and city in Khmer, and returns an MD5 hash with each generated code, which is the key used to check payment status.\n\nIn the NBC\'s integration flow, the merchant\'s back end generates the code with a unique transaction reference, returns it to the client with its expiry time, and the client displays it. Generating on the server keeps account information and references under the merchant\'s control, and lets the same service that issued a code also check it.',
    },
    {
      heading: 'The Bakong Open API: Access and Endpoints',
      content: 'Access to the Bakong Open API starts with registration. The integrator calls request-token with an email address (up to 30 characters), organisation name and project name; a 20-character verification code is sent to that email; and the verify call exchanges the code for an access token. When the token expires, renew-token issues a new one. Status checks send the token as a Bearer authorization header.\n\nEvery response carries a response code, 0 for success and 1 for failure, a numbered error code and a message. The API also returns standard HTTP codes, including 429 for too many requests, so a client should back off rather than retry immediately.',
      table: {
        caption: 'Bakong Open API endpoints (Bakong Open API Document v1.0.2)',
        headers: ['Call', 'Endpoint', 'Purpose'],
        rows: [
          ['Request token', 'POST /v1/request_token', 'Register email, organisation and project; a verification code is emailed'],
          ['Verify token', 'POST /v1/verify', 'Exchange the 20-character code for an access token'],
          ['Renew token', 'POST /v1/renew_token', 'Issue a new token when the previous one expires'],
          ['Generate deeplink', 'POST /v1/generate_deeplink_by_qr', 'Turn a KHQR string into a short link that opens a payment app'],
          ['Check transaction by MD5', 'POST /v1/check_transaction_by_md5', 'Status of a payment by the MD5 hash of its KHQR string'],
          ['Check transaction by full hash', 'POST /v1/check_transaction_by_hash', 'Status of a payment by its transaction hash'],
          ['Check transaction by short hash', 'POST /v1/check_transaction_by_short_hash', 'Status of a payment by a shortened hash'],
          ['Check Bakong account', 'Added in v1.0.2', 'Confirm a Bakong account'],
        ],
      },
    },
    {
      heading: 'Checking Payment Status and Handling Errors',
      content: 'A successful MD5 check returns the transaction hash, the from and to account identifiers, the currency, the amount and an optional description. The integration guide asks that a status check complete within 10 seconds, with a manual check as the fallback, and leaves the code\'s expiry time to the integrator.\n\nThe error codes are few and specific, and each calls for a different response. Error 1 usually means the customer has not yet paid: keep polling until the code expires. Error 3 is a definite failure: tell the customer and offer a new code. Error 2 means a static code was sent to an endpoint that only handles dynamic ones. Errors 6 and 10 are credential problems, to fix rather than retry.',
      table: {
        caption: 'Bakong Open API error codes (Bakong Open API Document v1.0.2, p. 4)',
        headers: ['Code', 'Message'],
        rows: [
          ['1', 'Transaction could not be found. Please try again.'],
          ['2', 'Sorry, the system does not support static QR code.'],
          ['3', 'Transaction failed.'],
          ['4', 'Error occurred on requesting deeplink from provider.'],
          ['5', 'Missing required fields.'],
          ['6', 'Unauthorized.'],
          ['7', 'Email server has been down.'],
          ['8', 'Email has been registered already.'],
          ['9', 'Cannot connect to server. Please try again later.'],
          ['10', 'Not registered yet.'],
        ],
      },
    },
    {
      heading: 'Deeplinks for Mobile Payments',
      content: 'On a phone, a customer cannot scan a QR code displayed on the same screen. The generate-deeplink call solves this: it takes the KHQR string, plus the merchant app\'s name, icon and a callback deeplink to return to after payment, and returns a short link that opens the payment in a banking app. The documentation notes that the short link is different every time the call is made, so it should be generated per payment and not cached.',
    },
    {
      heading: 'Reconciliation',
      content: 'The NBC toolkit gives each dynamic payment two identifiers: the merchant\'s own transaction reference, embedded when the code is generated, and the MD5 hash of the code, which the status check uses and which returns the Bakong transaction hash once paid. A sound design stores all three against the order, so that every order can be matched to exactly one payment.\n\nThe member institution\'s statements remain the settlement record. Daily reconciliation should match the merchant\'s orders, the statuses returned by the Open API, and the institution\'s statement, and flag anything that appears in one and not the others. The cut-off times, file formats and fee lines of those statements are set by the institution.',
    },
    {
      heading: 'What the NBC Documents Do Not Cover',
      content: 'The NBC\'s public documents read for this guide do not specify webhooks or push notifications, a sandbox or test environment, service levels or maintenance windows, rate limits beyond the HTTP 429 response, settlement timing, or the transaction limits and operating hours of the cross-border QR links. Those are matters for the member institution\'s documentation and agreement, and an enterprise should obtain them in writing before designing around them.\n\nThe cross-border links themselves are recorded in the NBC\'s 2024 payment-system report: Thailand from February 2020, Laos and Vietnam from 2023, South Korea and Malaysia from 2024, and the UnionPay and Alipay+ networks. They are QR payment links, which let a visitor pay a Cambodian merchant from a home-country app, not remittance services.',
    },
  ],
};
