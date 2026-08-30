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
 */
export const smeComplianceAutomation: ArticleContent = {
  slug: 'sme-compliance-automation',
  title: 'Scoping an ERP-to-CamInvoice Connector',
  description:
    'An illustrative engagement scenario: how a Cambodian business would connect its existing accounting or POS system to CamInvoice — the document mapping, the submission lifecycle, idempotency and retry design, and why the connector belongs inside the client\'s estate rather than behind a vendor\'s service.',
  type: 'use-cases',
  cluster: 'compliance',
  publishedAt: '2026-08-31',
  updatedAt: '2026-08-31',
  readingTime: 8,
  schema: 'Article',
  relatedSlugs: ['caminvoice', 'gdt', 'compliance-as-a-service', 'what-is-caminvoice'],
  lead: 'CamInvoice compliance is not really an invoicing problem. Most businesses already produce invoices; what the mandate adds is that each one must be rendered in a prescribed structure, submitted to the General Department of Taxation through an API, and retained with the confirmation the GDT returns. The work is a mapping-and-lifecycle problem between a system a business already runs and an interface it does not control. This scenario sets out how that connector would be scoped, and why the least interesting architectural decision — where it runs — is the one that matters most.',
  claims: [
    {
      stat: 'Over 12,000 large enterprises were required to register for CamInvoice by January 2025, with approximately 10,200 achieving compliance by the deadline.',
      source: 'General Department of Taxation Press Release',
      year: '2025',
    },
    {
      stat: 'The GDT reported that CamInvoice processed over 8.5 million electronic invoices in its first quarter of mandatory operation (Q1 2025), representing approximately 85% compliance among Phase 1 large enterprises.',
      source: 'General Department of Taxation Quarterly Report',
      year: '2025',
    },
    {
      stat: 'Only 12% of Cambodian SMEs use any form of accounting software, with 74% relying entirely on manual paper-based record keeping.',
      source: 'World Bank Cambodia Enterprise Survey',
      year: '2023',
    },
    {
      stat: 'Cambodian SMEs spend an average of 173 hours per year on tax compliance activities, significantly above the East Asia & Pacific average of 158 hours.',
      source: 'World Bank Doing Business Indicators',
      year: '2024',
    },
  ],
  faqs: [
    {
      question: 'Does a business have to replace its accounting system to comply with CamInvoice?',
      answer:
        'Generally no. The mandate specifies the document that must reach the GDT and the channel it travels on; it does not specify what the business uses to raise the invoice in the first place. Where an existing system holds the necessary data, a connector can extract it, map it to the required structure, submit it and store the response. Replacement becomes the better option only when the source system cannot produce the data at all — most often missing tax identifiers, no line-level tax breakdown, or no stable invoice identifier to reconcile against.',
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
        'Assume a mid-sized Cambodian business — a distributor, a services firm, a restaurant group — that is VAT-registered and already inside the CamInvoice mandate or approaching its phase of it. It raises a few hundred to a few thousand invoices a month from an accounting package or a POS system it has used for years. The finance team is small. There is no in-house integration capability and no appetite to change the system everyone knows.\n\nThe compliance requirement is not negotiable and the enforcement risk is real, so the question is never whether to connect but how, and the honest answer depends almost entirely on what the existing system can already tell you.\n\nThat is why the first phase of an engagement like this is not development. It is a survey of the source system: can it emit invoice data at all, and does that data carry every field the submission requires? Businesses are frequently missing something structural — counterparty tax identifiers that were never captured, tax broken out at document level rather than line level, or invoice numbers that are reused across branches. Every one of those is a data problem that no amount of connector engineering will solve, and finding them in week one rather than week nine is most of the value of scoping properly.',
    },
    {
      heading: 'What the connector actually has to do',
      content:
        'Reduced to essentials, four things.\n\nExtract. Pull invoice data out of the source system by whatever route it supports — an API, a database view, a scheduled export, or a watched folder. This is the part that varies most between clients and the part least worth being clever about.\n\nMap. Transform the business\'s own representation of an invoice into the structure the GDT expects, including the tax identifiers of both parties, line items with their classifications, the tax computation, and the document identifiers that make the submission traceable back to the source record. Cambodia\'s e-invoicing model follows the same structured-document lineage as UBL-based systems elsewhere in the region, which means the mapping is mechanical once the source fields exist — and impossible where they do not.\n\nSubmit. Authenticate with the client\'s credentials, transmit the document, and capture whatever the GDT returns: an acceptance with its confirmation reference, or a rejection with the field that caused it.\n\nRetain. Store the submitted document and its response together, in the client\'s systems, for the statutory retention period. The connector should treat the GDT response as the authoritative record and never as a transient acknowledgement to be discarded after logging.',
      table: {
        caption: 'Connector stages and where each one typically fails',
        headers: ['Stage', 'Function', 'Most common defect'],
        rows: [
          ['Extract', 'Read invoices from the source system', 'No stable identifier, so re-reads duplicate'],
          ['Map', 'Transform to the required document structure', 'Source lacks a mandatory field entirely'],
          ['Validate', 'Check completeness before transmitting', 'Skipped — rejections discovered downstream'],
          ['Submit', 'Authenticated transmission to the GDT', 'Retry without idempotency, creating duplicates'],
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
        'The single most consequential design decision in a connector of this kind is what happens when a submission\'s outcome is unknown.\n\nA network timeout does not tell you whether the GDT received the document. Naive retry logic resubmits, and if the first attempt did in fact land, the taxpayer now has two records of one sale — a problem that is far more troublesome to unwind than the original failure, because it must be corrected through the tax authority\'s own process rather than in the client\'s database.\n\nThe defence is to make every submission carry a stable, deterministic identifier derived from the source invoice, so that a retry is recognisable as the same document rather than a new one, and to record locally that an attempt was made before making it. A connector that writes its intent before acting can always reconstruct what it was doing when it stopped. One that writes only on success cannot.\n\nRetries should also back off rather than hammer, and should distinguish between failures that are worth retrying — a timeout, a transient server error — and failures that never will be. A document rejected because a tax identifier is malformed will be rejected identically a thousand times. It belongs in an exception queue in front of a human, immediately, not in a retry loop that hides it until a deadline has passed.\n\nEnd-of-period surges make all of this sharper. Filing deadlines concentrate load across every taxpayer in the country at once, and an interface that responds comfortably mid-month is not the same interface at the deadline. A connector should be built assuming that the window in which it most matters is the window in which the far end is least responsive.',
    },
    {
      heading: 'Where the scope boundary sits',
      content:
        'CamFinTech builds the connector: the extraction adapter, the mapping, the validation, the submission client with its retry and idempotency behaviour, the retention wiring into the client\'s storage, and the operational documentation. It is charged as a fee for that build. No commission, no per-document pricing, no margin on anything a third party invoices.\n\nThe client runs it. The connector is deployed in the client\'s environment, authenticates as the client, and stores the client\'s records. We do not host or transmit client invoice traffic. This is the design seam described in our positioning, and it is a limit on what we will build rather than a limit on what we will say.\n\nThe client remains the taxpayer. Registration, credentials, filings and the underlying tax positions are theirs. Where an engagement also involves accreditation or approval, the client is the applicant of record; CamFinTech does not influence the GDT\'s decisions and does not claim to. Where a client engages an accredited service provider for part of the chain, we build to that provider\'s interface — we do not stand in its place.\n\nAdvice on tax treatment is reserved work. It goes to the client\'s licensed tax agent. A connector engineer\'s opinion about how a transaction should be classified is worth exactly nothing to a client in an audit, and offering it would be a disservice dressed as helpfulness.',
    },
    {
      heading: 'Why this shape generalises',
      content:
        'CamInvoice is the current instance of a pattern rather than a one-off. A tax authority publishes a mandatory interface; every registered business must speak it; the gap between what businesses run and what the interface expects is the work.\n\nThat pattern recurs, and it recurs on a schedule that businesses do not set. The design implication is to treat the connector as a component with a stable internal representation of a document and a replaceable outbound adapter, rather than as a script that reshapes one system\'s output into one authority\'s format. The first costs slightly more to build once. The second costs the same amount again every time a requirement changes.\n\nThat is an architectural argument, not a prediction about what will be mandated next, and it is the argument worth making to a client who is inclined to buy the cheapest possible route through the immediate deadline.',
    },
  ],
};
