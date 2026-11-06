import { ArticleContent } from '../types';

/**
 * Rewritten 2026-08-31 (62010 pivot, Phase A4). The original article at this URL
 * claimed CamFinTech had delivered "automated GDT compliance for over 43,970
 * registered small businesses" on a multi-tenant middleware platform, with
 * invented acceptance rates and cost reductions. Two problems, not one: the
 * outcomes were fabricated, AND a platform standing in the path of clients'
 * invoice traffic is across the design seam (see CLAUDE.md — that shape needs a
 * ring-fenced entity). This rewrite is a single-client connector built inside
 * the client's own estate.
 *
 * CamInvoice correction, 2026-11-07. Found false, and removed:
 * - Every statement that invoices are "submitted to the General Department of
 *   Taxation", that the GDT returns the confirmation, or that the GDT decides
 *   on accreditation. MEF Prakas 075 (22 January 2025), Art. 4, makes the MEF's
 *   General Department of Digital Economy (GDDE) the operator of CamInvoice;
 *   the GDT appears in none of the four MEF documents read.
 * - "VAT-registered and already inside the CamInvoice mandate or approaching
 *   its phase of it", "every registered business must speak it", "filing
 *   deadlines concentrate load across every taxpayer in the country" —
 *   universality. Phase 1 is business-to-government (suppliers to the budget
 *   entities of named ministries); the scenario is now set there.
 * - "Cambodia's e-invoicing model follows the same structured-document lineage
 *   as UBL-based systems" — no technical primary could be read (e-invoice.gov.kh
 *   and gdde.mef.gov.kh returned 403 on 2026-11-06).
 * - "the enforcement risk is real" and the far-end-least-responsive line — no
 *   primary, and the second comments on a government system's performance.
 * Bar for restoring: read in a fetched MEF/GDDE primary.
 *
 * Updated 2026-11-07: MEF Circular 007 (signed 2026, read from the Khmer
 * original) adds Phase 1, Step 4 - 14 further ministries and institutions.
 * Phase 1 is no longer 'three steps'; do not reintroduce a fixed count.
 * Also later on 2026-11-07: CamInvoice's own developer documentation WAS read,
 * from Internet Archive snapshots (see knowledge/caminvoice-technical-compliance.ts
 * for URLs), so any '403 / no technical primary' note above is superseded. It
 * supports XML e-invoices in UBL format (no version stated), OAuth 2.0, and the
 * INVOICE / CREDIT_NOTE / DEBIT_NOTE types. It does NOT support 'UBL 2.1',
 * a 'clearance model', a 'digital tax stamp' or the GDT operating the system.
 */
export const smeComplianceAutomation: ArticleContent = {
  slug: 'sme-compliance-automation',
  title: 'Scoping an ERP-to-CamInvoice Connector',
  description:
    'An illustrative engagement scenario: how a Cambodian business would connect its existing accounting or POS system to CamInvoice — the document mapping, the submission lifecycle, idempotency and retry design, and why the connector belongs inside the client\'s estate rather than behind a vendor\'s service.',
  type: 'use-cases',
  cluster: 'compliance',
  publishedAt: '2026-08-31',
  updatedAt: '2026-11-07',
  readingTime: 8,
  schema: 'Article',
  relatedSlugs: ['caminvoice', 'gdt', 'compliance-as-a-service', 'what-is-caminvoice'],
  lead: 'CamInvoice compliance is not really an invoicing problem. Most businesses already produce invoices; what the mandate adds, for a business within its scope, is that each one must pass through the Cambodia E-Invoicing System, which the Ministry of Economy and Finance\'s General Department of Digital Economy operates, and be validated by it. The first phase covers suppliers invoicing the budget entities of designated ministries; the circulars allow the invoice to be issued from the business\'s own invoicing system once that system is registered with and connected to CamInvoice. The work is a mapping-and-lifecycle problem between a system a business already runs and an interface it does not control. This scenario sets out how that connector would be scoped, and why the least interesting architectural decision — where it runs — is the one that matters most.',
  // Claims removed 2026-08-31. This array previously carried figures attributed
  // to named institutional reports with no URL, access date or page reference.
  // A verified sample was wrong more often than not — including a Cambodian FATF
  // mutual evaluation that never took place, and citations to bodies that do not
  // exist under the names given. Restore an entry only when its figure has been
  // read in a fetched primary, on the same evidence bar as app/content/regulatory,
  // and record where it was read. See vault ADR-007.
  claims: [],
  sources: [
    { publisher: 'Ministry of Economy and Finance', label: 'Prakas 075 on the launch of the Cambodia E-Invoicing System (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/a57a86ff-1c53-481e-a4f0-8b32fe96b6cf/resource/e433f7a7-0bd0-4407-8d58-c5f346be20dd/download/mef_prakas-075_launching-of-cambodia-e-invoicing-system_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 003, mandatory e-invoicing, Phase 1 Step 1 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/dataset/2ff2820c-df65-4d60-aa0f-806c65d82952/resource/d77ab51b-6f54-4960-b947-ffd4a4f2a5a4/download/mef_circular-003_obligation-to-use-e-invoice_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 012, mandatory e-invoicing, Phase 1 Step 2 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/bce86ad2-6baf-456a-b49f-90c0b7b61f26/resource/e8c6b0ce-8f79-427e-a7e2-56f87c89ed1e/download/1756437973985-20250714_circular_to_6_lms_in_q3_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 017, mandatory e-invoicing, Phase 1 Step 3 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/d244f7f4-ef43-43fe-8645-d79483c9b0c3/resource/7d904664-edbe-40fe-8e76-f4b119d6a51c/download/1.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 007, mandatory e-invoicing, Phase 1 Step 4 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/9bdb6142-b119-41c4-b2ae-5bdde281a8f6/resource/549d6645-3232-4fa3-8715-a8f61c79b1f9/download/1.pdf', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-06',
  faqs: [
    {
      question: 'Does a business have to replace its accounting system to comply with CamInvoice?',
      answer:
        'Generally no. The mandate specifies the document that must reach CamInvoice and the channel it travels on; it does not specify what the business uses to raise the invoice in the first place. Where an existing system holds the necessary data, a connector can extract it, map it to the required structure, submit it and store the response. Replacement becomes the better option only when the source system cannot produce the data at all — most often missing tax identifiers, no line-level tax breakdown, or no stable invoice identifier to reconcile against.',
    },
    {
      question: 'Does CamFinTech run the connector or host the invoice data?',
      answer:
        'No. We build the connector and hand it over; it runs on the client\'s infrastructure, submits under the client\'s own credentials, and stores the client\'s records in the client\'s systems. We do not host or transmit client transaction traffic. A vendor-operated service standing in the path of many businesses\' invoice data is a different kind of business with a different regulatory posture, and we do not offer it.',
    },
    {
      question: 'Who is responsible if a submission is rejected or a filing is wrong?',
      answer:
        'The taxpayer is. The obligation runs to the business, not to its software vendor, and it is not something an integrator can assume. What a well-built connector does is make failures visible and recoverable: validate before submitting, surface the specific field a rejection names, retain every response, and never silently drop a document. Advice on the tax treatment itself is reserved work and belongs with the client\'s licensed tax agent, not with us.',
    },
  ],
  sections: [
    {
      heading: 'The situation this scenario addresses',
      content:
        'Assume a mid-sized Cambodian business — a distributor, a services firm, a works contractor — that supplies one of the ministries brought into CamInvoice\'s first phase, and so must issue its invoices to that ministry through the system. It raises a few hundred to a few thousand invoices a month from an accounting package or a POS system it has used for years. The finance team is small. There is no in-house integration capability and no appetite to change the system everyone knows.\n\nThe requirement is set by MEF circular, so the question is never whether to connect but how, and the honest answer depends almost entirely on what the existing system can already tell you.\n\nThat is why the first phase of an engagement like this is not development. It is a survey of the source system: can it emit invoice data at all, and does that data carry every field the submission requires? Businesses are frequently missing something structural — counterparty tax identifiers that were never captured, tax broken out at document level rather than line level, or invoice numbers that are reused across branches. Every one of those is a data problem that no amount of connector engineering will solve, and finding them in week one rather than week nine is most of the value of scoping properly.',
    },
    {
      heading: 'What the connector actually has to do',
      content:
        'Reduced to essentials, four things.\n\nExtract. Pull invoice data out of the source system by whatever route it supports — an API, a database view, a scheduled export, or a watched folder. This is the part that varies most between clients and the part least worth being clever about.\n\nMap. Transform the business\'s own representation of an invoice into the structure CamInvoice requires, including the tax identifiers of both parties, line items with their classifications, the tax computation, and the document identifiers that make the submission traceable back to the source record. The mapping is mechanical once the source fields exist — and impossible where they do not.\n\nSubmit. Authenticate with the client\'s credentials, transmit the document, and capture whatever the system returns: an acceptance with its confirmation reference, or a rejection with the field that caused it.\n\nRetain. Store the submitted document and its response together, in the client\'s systems, for the statutory retention period. Under Prakas 075 an invoice the system has validated is an original digital record, so the connector should treat the system\'s response as the authoritative record and never as a transient acknowledgement to be discarded after logging.',
      table: {
        caption: 'Connector stages and where each one typically fails',
        headers: ['Stage', 'Function', 'Most common defect'],
        rows: [
          ['Extract', 'Read invoices from the source system', 'No stable identifier, so re-reads duplicate'],
          ['Map', 'Transform to the required document structure', 'Source lacks a mandatory field entirely'],
          ['Validate', 'Check completeness before transmitting', 'Skipped — rejections discovered downstream'],
          ['Submit', 'Authenticated transmission to CamInvoice', 'Retry without idempotency, creating duplicates'],
          ['Retain', 'Store document plus response together', 'Response logged but not durably stored'],
        ],
      },
    },
    {
      heading: 'Meeting the business where its systems actually are',
      content:
        'The right integration route is set by what the source system supports, and it is worth being blunt that the cheapest route is often the best one.\n\nWhere the source system exposes an API or can fire an event as an invoice is raised, the connector is event-driven and submission happens as part of the ordinary flow of business. Nobody has to remember to do anything.\n\nWhere it cannot, but can export on a schedule, the connector reads batches. This is unglamorous and entirely adequate: a business filing a few hundred documents a month gains nothing from real-time submission that it does not gain from a nightly cycle, provided the cycle is monitored and failures are visible the next morning rather than at the end of the month.\n\nWhere the source system is a spreadsheet or paper, no connector will help. That is a bookkeeping engagement before it is an integration engagement, and saying so early is more useful to the client than building something that automates the transmission of data nobody is reliably capturing.\n\nThe distinction matters commercially as well as technically. A client in the third position who is sold an integration will not get compliance out of it, and will reasonably feel misled when they discover why.',
      table: {
        caption: 'Integration route by source-system capability',
        headers: ['Source system can…', 'Route', 'Submission cadence', 'What the client must still do'],
        rows: [
          ['Expose an API or emit events', 'Event-driven connector', 'As invoices are raised', 'Monitor the exception queue'],
          ['Export on a schedule', 'Batch connector', 'Daily or per shift', 'Review the daily run'],
          ['Only produce documents by hand', 'No connector — bookkeeping first', 'n/a', 'Establish reliable capture'],
        ],
      },
    },
    {
      heading: 'Idempotency, retries and the duplicate-submission problem',
      content:
        'The single most consequential design decision in a connector of this kind is what happens when a submission\'s outcome is unknown.\n\nA network timeout does not tell you whether CamInvoice received the document. Naive retry logic resubmits, and if the first attempt did in fact land, the taxpayer now has two records of one sale — a problem that is far more troublesome to unwind than the original failure, because it must be corrected through the system\'s own procedures rather than in the client\'s database.\n\nThe defence is to make every submission carry a stable, deterministic identifier derived from the source invoice, so that a retry is recognisable as the same document rather than a new one, and to record locally that an attempt was made before making it. A connector that writes its intent before acting can always reconstruct what it was doing when it stopped. One that writes only on success cannot.\n\nRetries should also back off rather than hammer, and should distinguish between failures that are worth retrying — a timeout, a transient server error — and failures that never will be. A document rejected because a tax identifier is malformed will be rejected identically a thousand times. It belongs in an exception queue in front of a human, immediately, not in a retry loop that hides it until a deadline has passed.\n\nEnd-of-period peaks make all of this sharper. Payment-request and filing cycles concentrate a business\'s own submissions into a few days, and a connector should be built so that a slow or failed response in that window is handled exactly as it would be at any other time.',
    },
    {
      heading: 'Where the scope boundary sits',
      content:
        'CamFinTech builds the connector: the extraction adapter, the mapping, the validation, the submission client with its retry and idempotency behaviour, the retention wiring into the client\'s storage, and the operational documentation. It is charged as a fee for that build. No commission, no per-document pricing, no margin on anything a third party invoices.\n\nThe client runs it. The connector is deployed in the client\'s environment, authenticates as the client, and stores the client\'s records. We do not host or transmit client invoice traffic. This is the design seam described in our positioning, and it is a limit on what we will build rather than a limit on what we will say.\n\nThe client remains the taxpayer. Membership of the system, credentials, filings and the underlying tax positions are theirs. Where an engagement also involves registering the client\'s invoicing system with CamInvoice, the client is the applicant of record and the decision belongs to the system\'s operator, the General Department of Digital Economy. Where a client engages a system-provider member — Prakas 075 provides for these — for part of the chain, we build to that provider\'s interface — we do not stand in its place.\n\nAdvice on tax treatment is reserved work. It goes to the client\'s licensed tax agent. A connector engineer\'s opinion about how a transaction should be classified is worth exactly nothing to a client in an audit, and offering it would be a disservice dressed as helpfulness.',
    },
    {
      heading: 'Why this shape generalises',
      content:
        'CamInvoice is the current instance of a pattern rather than a one-off. A government publishes a mandatory interface; the businesses within its scope must speak it; the gap between what businesses run and what the interface expects is the work.\n\nThat pattern recurs, and it recurs on a schedule that businesses do not set. The design implication is to treat the connector as a component with a stable internal representation of a document and a replaceable outbound adapter, rather than as a script that reshapes one system\'s output into one authority\'s format. The first costs slightly more to build once. The second costs the same amount again every time a requirement changes.\n\nThat is an architectural argument, not a prediction about what will be mandated next, and it is the argument worth making to a client who is inclined to buy the cheapest possible route through the immediate deadline.',
    },
  ],
};
