import { ArticleContent } from '../types';

/*
 * Rewritten 2026-11-07 (CamInvoice correction pass; same bar as
 * insights/caminvoice-rollout-impact.ts and app/content/regulatory).
 *
 * The previous version was a detailed technical reference, and almost none of
 * it could be traced to a source. Removed, not hedged. What the checks found:
 *
 * - "CamInvoice is the General Department of Taxation's mandatory electronic
 *   invoicing system" and every sentence giving the GDT the platform, the
 *   database, the stamp or the signing certificate — FALSE. MEF Prakas 075 of
 *   22 January 2025, Art. 4, makes the MEF's General Department of Digital
 *   Economy (GDDE) the secretariat that manages, operates and monitors it.
 * - "requires all businesses", "every B2B transaction", "fully replace paper
 *   tax invoices for all business-to-business transactions" — not supported.
 *   Phase 1, per Circulars 003/012/017, is business-to-government.
 * - The phase table and its prose: Phase 1 Jan 2025 > KHR 1bn, ~12,000
 *   businesses, 85% compliance, a 3-month grace period; Phase 2 Jan 2026 KHR
 *   250m-1bn, ~35,000; Phase 3 Jan 2027, ~470,000, a "mobile app and USSD"
 *   interface, MFI partnerships — no primary. Conflicts with the thresholds on
 *   other CamInvoice pages, which were equally unsourced.
 * - Penalties FAQ (25% of undeclared tax, CIT non-deductibility, VAT input
 *   denial, criminal referral) — no primary. Removed.
 * - "UBL 2.1" — the developer documentation read (below) says UBL and gives
 *   UBL element names, but no page read states a UBL version. Restore "2.1"
 *   only from a page that says it.
 * - A "REST API accepting JSON-encoded UBL 2.1", "v2.1", "12 months of backward
 *   compatibility", 3-second sync response, 1,000-invoice batches, 30-minute
 *   batch results, a daily 06:00 ICT registry extract — not in any page read.
 *   The documentation describes XML e-invoices and /api/v1/ paths.
 * - The architecture-layers table (99.2/99.5/99.9% SLAs, 150 TPS, TLS 1.2+,
 *   7-year retention) — no source. Prakas 075 Art. 6 says 10 years.
 * - The mandatory-fields table (9-digit TINs, "max 7 days prior", "KHR or USD
 *   only", VAT rates "0, 10 or exempt", HS codes mandatory), the "Cambodian
 *   UBL Profile" with custom extensions (Bakong payment code, sector code) —
 *   no source. The field NAMES now on the page come from the documentation's
 *   own navigation; no cardinality or validation rule is asserted.
 * - The error-code table (V-1001 … V-4002) with Q1 2025 rejection frequencies,
 *   "over 120 business rules" — no source; treated as invented.
 * - The "digital tax stamp": a 20-character CIRN, SHA-256 + "GDT RSA-2048
 *   signature", a GDT certificate on a "developer portal", offline verification
 *   — none of it appears in the pages read. The June 2024 documentation says
 *   validated invoices are attested and stored on blockchain via CamDL; that,
 *   dated, is what the page now says.
 * - Self-billing invoices (type code 389), reason-code enumerations, the GDT
 *   checking credit-note amounts — no source. The documentation lists three
 *   document types: INVOICE, CREDIT_NOTE, DEBIT_NOTE.
 * - VAT cross-matching engine, "automated inquiries", "formal GDT audit if
 *   unresolved within 30 days" — no source; it also put conduct in the GDT's
 *   mouth. Removed.
 * - The ERP table (SAP "certified SP connector", NetSuite SuiteApp, Dynamics
 *   via Power Automate, 2-12 week timelines) and "reduce integration time from
 *   8-12 weeks to 2-4 weeks" — unsourced product and outcome claims.
 * - Retry tuning (5 s / 5 min / 10 retries), "98% first-pass acceptance" —
 *   presented as system facts with no source. Generic guidance kept, unnumbered.
 *
 * Sources read for this version:
 * - MEF Prakas 075 and Circulars 003, 012, 017 (Khmer scans, Open Development
 *   Cambodia mirror, fetched 2026-11-06).
 * - The CamInvoice developer documentation at developer.e-invoice.gov.kh, read
 *   from Internet Archive snapshots (the live site returns a Cloudflare
 *   challenge, 403, to every non-browser client): the Introduction page of
 *   18 June 2024, and the Getting Started, Get New Access Token, Document Type,
 *   Document Status, Http Status code, Download Document Xml and Update
 *   Document Status pages of 22 December 2025. Everything technical on this
 *   page traces to those pages. Snapshots can lag the live documentation; the
 *   page says so.
 *
 * Bar for restoring a specific (version, limit, rate, code, field rule, SLA):
 * read on a fetched page of the operator's own documentation or an MEF/GDDE
 * instrument, recorded in `claims` with the page and snapshot date. Vendor and
 * e-invoicing software pages do not clear it.
 *
 * Updated 2026-11-07: MEF Circular 007 (signed 2026, read from the Khmer
 * original) adds Phase 1, Step 4 - 14 further ministries and institutions.
 * Phase 1 is no longer 'three steps'; do not reintroduce a fixed count.
 */
export const caminvoiceTechnicalCompliance: ArticleContent = {
  slug: 'caminvoice-technical-compliance',
  title: 'CamInvoice Technical Compliance: API Integration and Data Specifications',
  description: 'What the CamInvoice developer documentation and the Ministry of Economy and Finance\'s instruments establish about integrating with the Cambodia E-Invoicing System: who operates it, the XML/UBL document structure, OAuth 2.0 authentication, document types and statuses, webhooks and polling, and how to approach an integration.',
  type: 'knowledge',
  cluster: 'compliance',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-07',
  readingTime: 6,
  schema: 'TechArticle',
  relatedSlugs: ['caminvoice', 'gdt', 'what-is-caminvoice'],
  lead: 'CamInvoice, the Cambodia E-Invoicing System, is operated by the General Department of Digital Economy (GDDE) of the Ministry of Economy and Finance (MEF), which launched it officially on 22 January 2025. Its first phase applies to suppliers invoicing the budget entities of designated ministries. For developers, the system publishes its own technical documentation: invoices are XML documents structured on the Universal Business Language (UBL), submitted through an API that uses OAuth 2.0 credentials, validated, and then notified to both parties by webhook or polling. This article sets out what that documentation and the MEF\'s instruments state, and how to approach an integration around them. It does not reproduce limits, error codes or field-level rules that the documentation read for it does not state. An earlier version did, and those specifics could not be traced to any source.',
  claims: [
    { stat: 'The General Department of Digital Economy of the MEF is the secretariat that manages, operates and monitors the Cambodia E-Invoicing System. An invoice validated and identified by the system is recognised as an original digital record, and is stored in digital form for 10 years.', source: 'Ministry of Economy and Finance, Prakas 075 on the launch of the Cambodia E-Invoicing System (Khmer), Article 4 (page 2) and Article 6 (page 3)', year: '2025', url: 'https://data.opendevelopmentcambodia.net/en/dataset/a57a86ff-1c53-481e-a4f0-8b32fe96b6cf/resource/e433f7a7-0bd0-4407-8d58-c5f346be20dd/download/mef_prakas-075_launching-of-cambodia-e-invoicing-system_kh_2025.pdf' },
    { stat: 'Phase 1, Step 1 applies to the central-level budget entities of two ministries (Economy and Finance; Environment) and their suppliers, covering invoices for expenditure payment requests under public procurement from fiscal year 2025.', source: 'Ministry of Economy and Finance, Circular 003 on mandatory e-invoicing via the Cambodia E-Invoicing System, Phase 1, Step 1 (Khmer), page 1', year: '2025', url: 'https://data.opendevelopmentcambodia.net/dataset/2ff2820c-df65-4d60-aa0f-806c65d82952/resource/d77ab51b-6f54-4960-b947-ffd4a4f2a5a4/download/mef_circular-003_obligation-to-use-e-invoice_kh_2025.pdf' },
    { stat: 'A CamInvoice user generates an XML e-invoice in its own system or in the free Merchant Portal and sends it to CamInvoice via the API. CamInvoice validates it through checks including XML structure validation, UBL field validation, General Department of Taxation rules validation and e-KYB validation; a validated invoice is attested and stored on blockchain via CamDL, and a webhook notification goes to both the sender\'s and the receiver\'s systems.', source: 'CamInvoice developer documentation, Introduction, "How it works" (developer.e-invoice.gov.kh, Internet Archive snapshot of 18 June 2024)', year: '2024', url: 'https://web.archive.org/web/20240618030344/https://developer.e-invoice.gov.kh/' },
    { stat: 'API credentials (a client ID and secret) are obtained from CamInvoice support; authentication is OAuth 2.0. An access token is obtained by POST to {BaseURL}/api/v1/auth/token with the client ID and secret as HTTP Basic credentials and a refresh token, is used as a Bearer token on later requests, and expires after 900 seconds (15 minutes).', source: 'CamInvoice developer documentation, Getting Started and API Reference: Get New Access Token (developer.e-invoice.gov.kh, Internet Archive snapshots of 22 December 2025)', year: '2025', url: 'https://web.archive.org/web/20251222130429/https://developer.e-invoice.gov.kh/api-reference/authentication' },
    { stat: 'CamInvoice supports three document types: INVOICE, CREDIT_NOTE and DEBIT_NOTE.', source: 'CamInvoice developer documentation, Data Types: Document Type (developer.e-invoice.gov.kh, Internet Archive snapshot of 22 December 2025)', year: '2025', url: 'https://web.archive.org/web/20251222104318/https://developer.e-invoice.gov.kh/data-type/document-type' },
    { stat: 'Document statuses: VALID, DELIVERED, ACKNOWLEDGED, IN_PROCESS, UNDER_QUERY, CONDITIONALLY_ACCEPTED, ACCEPTED, REJECTED and PAID.', source: 'CamInvoice developer documentation, Data Types: Document Status (developer.e-invoice.gov.kh, Internet Archive snapshot of 22 December 2025)', year: '2025', url: 'https://web.archive.org/web/20251222104629/https://developer.e-invoice.gov.kh/data-type/document-status' },
    { stat: 'A document\'s XML can be downloaded in UBL format by GET to {BaseURL}/api/v1/document/{document_id}/xml with a Bearer token.', source: 'CamInvoice developer documentation, API Reference: Download Document Xml (developer.e-invoice.gov.kh, Internet Archive snapshot of 22 December 2025)', year: '2025', url: 'https://web.archive.org/web/20251222110321/https://developer.e-invoice.gov.kh/api-reference/download-document-XML' },
  ],
  sources: [
    { publisher: 'Ministry of Economy and Finance', label: 'Prakas 075 on the launch of the Cambodia E-Invoicing System (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/a57a86ff-1c53-481e-a4f0-8b32fe96b6cf/resource/e433f7a7-0bd0-4407-8d58-c5f346be20dd/download/mef_prakas-075_launching-of-cambodia-e-invoicing-system_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 003, mandatory e-invoicing, Phase 1 Step 1 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/dataset/2ff2820c-df65-4d60-aa0f-806c65d82952/resource/d77ab51b-6f54-4960-b947-ffd4a4f2a5a4/download/mef_circular-003_obligation-to-use-e-invoice_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 012, mandatory e-invoicing, Phase 1 Step 2 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/bce86ad2-6baf-456a-b49f-90c0b7b61f26/resource/e8c6b0ce-8f79-427e-a7e2-56f87c89ed1e/download/1756437973985-20250714_circular_to_6_lms_in_q3_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 017, mandatory e-invoicing, Phase 1 Step 3 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/d244f7f4-ef43-43fe-8645-d79483c9b0c3/resource/7d904664-edbe-40fe-8e76-f4b119d6a51c/download/1.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 007, mandatory e-invoicing, Phase 1 Step 4 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/9bdb6142-b119-41c4-b2ae-5bdde281a8f6/resource/549d6645-3232-4fa3-8715-a8f61c79b1f9/download/1.pdf', tier: 'primary' },
    { publisher: 'CamInvoice', label: 'Developer documentation, Introduction (Internet Archive snapshot, 18 June 2024)', url: 'https://web.archive.org/web/20240618030344/https://developer.e-invoice.gov.kh/', tier: 'primary' },
    { publisher: 'CamInvoice', label: 'Developer documentation, Getting Started (Internet Archive snapshot, 22 December 2025)', url: 'https://web.archive.org/web/20251222220905/https://developer.e-invoice.gov.kh/getting-started/overview', tier: 'primary' },
    { publisher: 'CamInvoice', label: 'Developer documentation, Get New Access Token (Internet Archive snapshot, 22 December 2025)', url: 'https://web.archive.org/web/20251222130429/https://developer.e-invoice.gov.kh/api-reference/authentication', tier: 'primary' },
    { publisher: 'CamInvoice', label: 'Developer documentation, Document Status (Internet Archive snapshot, 22 December 2025)', url: 'https://web.archive.org/web/20251222104629/https://developer.e-invoice.gov.kh/data-type/document-status', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-06',
  faqs: [
    { question: 'Who operates CamInvoice?', answer: 'The General Department of Digital Economy (GDDE) of the Ministry of Economy and Finance. MEF Prakas 075 of 22 January 2025 makes the GDDE the secretariat that manages, operates and monitors the Cambodia E-Invoicing System.' },
    { question: 'What format does a CamInvoice e-invoice use?', answer: 'According to CamInvoice\'s developer documentation, an e-invoice is an XML document structured on the Universal Business Language (UBL), and the documentation specifies the structure of three document types: invoices, credit notes and debit notes. Submitted documents are checked for XML structure, UBL fields, tax rules and e-KYB before they are accepted. The pages read for this article do not state a UBL version; take that, and every field rule, from the current documentation supplied with your credentials.' },
    { question: 'How does a business system authenticate to the CamInvoice API?', answer: 'The developer documentation describes OAuth 2.0. A business obtains a client ID and secret from CamInvoice support, exchanges them for an access token at the token endpoint, and sends that token as a Bearer token on later requests. The December 2025 version of the documentation states that tokens expire after 900 seconds (15 minutes), so an integration needs to renew them rather than store one.' },
  ],
  sections: [
    {
      heading: 'Who Operates the System and Whom It Applies To',
      content: 'The Cambodia E-Invoicing System was launched by MEF Prakas 075 of 22 January 2025. Article 4 makes the MEF\'s General Department of Digital Economy (GDDE) the secretariat that manages, operates, supervises and monitors it. Article 6 gives an invoice validated and identified by the system the status of an original digital record, stored in digital form for 10 years.\n\nThe first phase is business-to-government. Under MEF Circular 003 (Step 1), suppliers invoicing the central-level budget entities of the Ministry of Economy and Finance and the Ministry of Environment, for expenditure payment requests under public procurement, do so through the system from fiscal year 2025. Circular 012 (Step 2) adds six ministries, Circular 017 (Step 3) adds six more, and Circular 007 (Step 4, 2026) adds 14 further ministries and institutions. For any obligation beyond these, the reader should check the MEF\'s current circulars rather than rely on secondary summaries.\n\nThe practical consequence for an integration: whether a business must connect at all, and from when, follows from whom it invoices. That question comes before any of the technical work below.',
    },
    {
      heading: 'How the System Works, per Its Developer Documentation',
      content: 'CamInvoice publishes technical documentation for integrators at developer.e-invoice.gov.kh. It is written on the assumption that the reader has already contacted CamInvoice and received credentials. The live site currently returns a bot challenge to automated clients, so this article reads it from Internet Archive snapshots of June 2024 and December 2025. Snapshots can lag the live documentation. Treat what follows as an orientation, and the documentation supplied with your credentials as the reference.\n\nThe Introduction page (June 2024) describes the flow. A CamInvoice user generates an XML e-invoice, either in its own system or in CamInvoice\'s free Merchant Portal, and sends it to CamInvoice via the API. CamInvoice validates it through several checks, including XML structure, UBL fields, General Department of Taxation rules, and e-KYB (electronic know-your-business). An invoice that passes is attested and stored on blockchain via CamDL. CamInvoice then notifies both the sender\'s and the receiver\'s systems by webhook.\n\nThe December 2025 version organises the documentation into Getting Started (an overview and an OAuth 2.0 integration guide), an API Reference, Receive Update Events (webhooks, including setting up and unsetting a webhook, and a polling alternative), the Invoice Structure for invoices, credit notes and debit notes, and Data Types (document status, document type, event type, HTTP status codes, tax category and tax scheme).',
    },
    {
      heading: 'Document Types and Data Structure',
      content: 'The documentation defines three document types. An INVOICE is issued by a seller to a buyer, indicating products, quantities and agreed prices. A CREDIT_NOTE records a credit given to the buyer, typically for returned goods or overpayment. A DEBIT_NOTE records additional charges or an increase in the amount owed.\n\nThe Invoice Structure section specifies each document element by element, using UBL element names. The top-level elements of an invoice, as the documentation lists them, are shown in the table. Credit and debit notes follow the same pattern, with credit-note and debit-note lines in place of invoice lines and a BillingReference to the original invoice\'s document reference. A debit note carries a RequestedMonetaryTotal rather than a LegalMonetaryTotal. Each party block includes an endpoint ID, name, postal address, tax scheme (company ID), legal entity (company ID and registration name) and contact.\n\nThe pages read for this article list these elements; they do not state field lengths, cardinality, code lists or validation rules. Those belong in the element-level pages of the current documentation, and an integration should be built against them rather than against an assumed UBL profile.',
      table: {
        caption: 'Top-level elements of a CamInvoice invoice, as listed in the developer documentation (December 2025 snapshot)',
        headers: ['Element', 'What it holds'],
        rows: [
          ['ID, IssueDate, DueDate', 'Invoice identifier and dates'],
          ['InvoiceTypeCode, DocumentCurrencyCode', 'Document type code and currency code'],
          ['AdditionalDocumentReference', 'Referenced or attached documents (embedded binary object or external URI)'],
          ['AccountingSupplierParty', 'The seller'],
          ['AccountingCustomerParty', 'The buyer'],
          ['PaymentTerms', 'Payment terms note'],
          ['AllowanceCharge', 'Document-level allowances or charges'],
          ['TaxExchangeRate', 'Source and target currency and the rate applied'],
          ['TaxTotal', 'Tax amount, with subtotals by tax category and scheme'],
          ['LegalMonetaryTotal', 'Line total, tax-exclusive and tax-inclusive amounts, allowances, charges, prepaid and payable amounts'],
          ['InvoiceLine', 'Each line: quantity, amount, allowances, tax, item and price'],
        ],
      },
    },
    {
      heading: 'Authentication and the API',
      content: 'Getting Started sets out the prerequisites. Contact CamInvoice support to obtain API credentials, a client ID and secret. Use the base URL you are given for all API requests. Implement OAuth 2.0 authentication.\n\nAn access token is obtained by POST to {BaseURL}/api/v1/auth/token. The client ID and secret are sent base64-encoded as HTTP Basic credentials, and the body carries a refresh token, which the documentation says is given when the system is first connected. The response returns a token, its type (usually Bearer) and its lifetime in seconds. The documentation states that tokens expire after 900 seconds (15 minutes). The token is then sent as a Bearer token on every request that needs authentication.\n\nThe API Reference (December 2025) has endpoints to list CamInvoice members and get a member\'s details, validate a business (taxpayer), submit and send documents, list documents and get a document\'s details, accept or reject documents, update document status, revoke a connected member, and download a document as PDF or as XML. The XML download returns the document in UBL format, from {BaseURL}/api/v1/document/{document_id}/xml. The documentation\'s HTTP status code page lists 200, 401, 403, 422 and 500.',
    },
    {
      heading: 'Document Status and Update Events',
      content: 'After submission, a document moves through statuses that both parties can see. The documentation lists the statuses below. A status update is made by PUT to {BaseURL}/api/v1/document/status with a list of document IDs and the new status. The response separates the documents that were updated from those that failed, with a message for each failure; its own example rejects a change from PAID to ACCEPTED. An integration should therefore handle partial success, and should not assume every transition is allowed.\n\nChanges reach a connected system in one of two ways: a webhook it registers (and can unset), or polling. Either way, an integration that only sends documents is half built: the documentation also provides for receiving, accepting and rejecting them.',
      table: {
        caption: 'CamInvoice document statuses (developer documentation, December 2025 snapshot)',
        headers: ['Status', 'Meaning, as documented'],
        rows: [
          ['VALID', 'Validated by CamInvoice'],
          ['DELIVERED', 'Sent to the customer on the e-invoicing network'],
          ['ACKNOWLEDGED', 'Acknowledged but not yet processed'],
          ['IN_PROCESS', 'Being processed'],
          ['UNDER_QUERY', 'Has issues or queries and is being reviewed'],
          ['CONDITIONALLY_ACCEPTED', 'Accepted with conditions to be fulfilled'],
          ['ACCEPTED', 'Fully accepted and awaiting payment'],
          ['REJECTED', 'Rejected and will not be processed further'],
          ['PAID', 'Paid in full'],
        ],
      },
    },
    {
      heading: 'Approaching an Integration',
      content: 'The documentation gives two ways in: CamInvoice\'s own Merchant Portal, or a business system connected through the API. A business that issues few invoices to a covered ministry may need nothing more than the portal. One that already keeps its accounts in an ERP or billing system will usually want that system to issue the invoice, so that its records and CamInvoice\'s agree without re-keying.\n\nFor a connected system, the work is ordinary integration engineering, shaped by what the documentation specifies:\n\n- Map the ERP\'s invoice, credit-note and debit-note data to the documented element structure, field by field, against the current element-level pages.\n- Check documents locally against the same structure before submission, so that a malformed document is caught in your system and not returned by the platform.\n- Manage tokens: obtain, cache for less than their stated lifetime, and renew.\n- Submit through a durable queue, so that no invoice is lost if a call fails, and retry transient failures with backoff.\n- Store the document identifier CamInvoice returns against the internal invoice record, and track status from webhooks or polling.\n- Handle the buyer side: documents received from suppliers, and the accept, reject and status actions on them.\n- Reconcile internal records against CamInvoice\'s document list periodically.\n\nTest against whatever non-production environment CamInvoice provides with your credentials before going live. Treat the documentation, not this article, as authoritative on every specific.',
    },
  ],
};
