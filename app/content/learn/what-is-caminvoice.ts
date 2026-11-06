import { ArticleContent } from '../types';

/*
 * Rewritten 2026-11-07 (CamInvoice correction pass, same bar as
 * insights/caminvoice-rollout-impact.ts, which carries the fuller record).
 *
 * The previous version was built on a false premise and carried no fetched
 * source for any CamInvoice statement. Everything below was removed, not
 * hedged, so nobody restores it from git:
 *
 * - "operated by the General Department of Taxation (GDT)", "the GDT clearance
 *   platform", "the GDT validates and stamps each invoice", "API keys issued by
 *   the GDT", "GDT-published API specification" — FALSE as to operator. MEF
 *   Prakas 075 of 22 January 2025, Article 4, makes the MEF's General
 *   Department of Digital Economy (GDDE) the secretariat that manages, operates,
 *   supervises and monitors the system. The GDT appears in none of the four MEF
 *   documents (Prakas 075; Circulars 003, 012, 017).
 * - "mandated under Prakas No. 1125" — no such instrument found. The legal
 *   basis read is Prakas 075. Do not restore the number without the document.
 * - The large/medium/all-taxpayer phases (KHR 2bn / KHR 500m / no threshold;
 *   January 2025 / 2026 / 2027), the ~5,000 / ~25,000 / ~160,000 / ~10,000
 *   entity counts, "B2G mandatory July 2025 ... all government contracts",
 *   "state-owned enterprises", and the six-month parallel grace period — no
 *   primary. Phase 1 as the MEF defines it is business-to-government, in three
 *   steps by ministry (Circulars 003, 012, 017). The whole timeline table went.
 * - "Every commercial transaction", "across all registered taxpayers" —
 *   universality claims with no primary. Removed.
 * - Penalties (10-25% of invoice value, VAT-refund suspension, licence
 *   revocation, input-credit disallowance) — no primary. Removed, FAQ included.
 * - "The IMF estimates Cambodia loses approximately 3-5% of GDP annually to tax
 *   evasion" — unsourced. Removed.
 * - Link to the "Revenue Mobilization Strategy 2019-2023" and "Digital
 *   Government Policy 2022-2035" as the launch basis — not stated in any
 *   document read. Removed.
 * - Technical claims: UBL 2.1, the UBL field table (element paths, "real-time
 *   TIN validation via CamDX"), the clearance model and clearance code,
 *   RESTful API, synchronous/batch submission, OAuth 2.0, TLS 1.3. None read in
 *   a primary. e-invoice.gov.kh and gdde.mef.gov.kh returned 403 on 2026-11-06
 *   (browser user-agent), so the platform's own specifications could not be
 *   checked. Removed in full. The page now says only what Prakas 075 and the
 *   circulars say about how an invoice is issued.
 * - "Most major ERP systems including SAP, Oracle, and QuickBooks can be
 *   configured", "GDT has committed to a free web portal" — unsourced.
 * - "accredited Service Providers", "certified middleware providers" — no
 *   accreditation or certification scheme appears in the documents read.
 *   Prakas 075 provides for system-provider members; that is the term used.
 * - "SME Impact and CamFinTech Advisory": "verified electronic invoices become
 *   bankable assets" stated as fact, and a CamFinTech readiness/advisory offer
 *   built on the false operator. Rewritten to the integrate-only scope
 *   (ADR-005) with the taxpayer and the tax agent named.
 *
 * Sources: the four MEF documents (Khmer, scanned; Open Development Cambodia
 * mirror), fetched and read 2026-11-06. Bar for restoring a figure, threshold,
 * date or technical specification: read in a fetched primary (MEF, GDDE, or
 * the platform's own published specification), recorded in `claims` with
 * where it was read. Vendor and e-invoicing software pages do not clear it.
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
export const whatIsCamInvoice: ArticleContent = {
  slug: 'what-is-caminvoice',
  title: 'What is CamInvoice and Who Must Comply?',
  description: 'CamInvoice, the Cambodia E-Invoicing System, is a Ministry of Economy and Finance platform operated by its General Department of Digital Economy. Its first phase covers suppliers invoicing the budget entities of designated ministries.',
  type: 'learn',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-07',
  readingTime: 4,
  schema: 'Article',
  relatedSlugs: ['caminvoice', 'gdt', 'caminvoice-rollout-impact'],
  lead: 'CamInvoice, the Cambodia E-Invoicing System, is a state platform for exchanging invoices electronically between sellers and buyers. The Ministry of Economy and Finance (MEF) launched it officially on 22 January 2025 by Prakas 075, and the MEF\'s General Department of Digital Economy (GDDE) manages and operates it. An invoice that passes the system\'s validation is an original digital record, kept for 10 years. The obligation to use it is being introduced in phases. The first phase is business-to-government: suppliers invoicing the budget entities of designated ministries, added in steps. This page sets out what the MEF\'s own documents establish about who must comply and how, and where that record stops.',
  claims: [
    { stat: 'The Cambodia E-Invoicing System was officially launched on 22 January 2025, with mandatory use beginning at the Ministry of Economy and Finance and the Ministry of Environment.', source: 'Ministry of Economy and Finance, Circular 012 on mandatory e-invoicing via the Cambodia E-Invoicing System, Phase 1, Step 2 (Khmer), opening paragraph, page 1', year: '2025', url: 'https://data.opendevelopmentcambodia.net/en/dataset/bce86ad2-6baf-456a-b49f-90c0b7b61f26/resource/e8c6b0ce-8f79-427e-a7e2-56f87c89ed1e/download/1756437973985-20250714_circular_to_6_lms_in_q3_2025.pdf' },
    { stat: 'The General Department of Digital Economy of the MEF is the secretariat that manages, operates and monitors the system. An invoice validated and identified by the system is recognised as an original digital record, and is stored in digital form for 10 years.', source: 'Ministry of Economy and Finance, Prakas 075 on the launch of the Cambodia E-Invoicing System (Khmer), Article 4 (page 2) and Article 6 (page 3)', year: '2025', url: 'https://data.opendevelopmentcambodia.net/en/dataset/a57a86ff-1c53-481e-a4f0-8b32fe96b6cf/resource/e433f7a7-0bd0-4407-8d58-c5f346be20dd/download/mef_prakas-075_launching-of-cambodia-e-invoicing-system_kh_2025.pdf' },
    { stat: 'Phase 1, Step 1 applies to the central-level budget entities of two ministries (Economy and Finance; Environment) and their suppliers, covering invoices for expenditure payment requests under public procurement from fiscal year 2025.', source: 'Ministry of Economy and Finance, Circular 003 on mandatory e-invoicing via the Cambodia E-Invoicing System, Phase 1, Step 1 (Khmer), page 1', year: '2025', url: 'https://data.opendevelopmentcambodia.net/dataset/2ff2820c-df65-4d60-aa0f-806c65d82952/resource/d77ab51b-6f54-4960-b947-ffd4a4f2a5a4/download/mef_circular-003_obligation-to-use-e-invoice_kh_2025.pdf' },
    { stat: 'Phase 1, Step 2 extends the obligation to six further ministries: Agriculture, Forestry and Fisheries; Commerce; Industry, Science, Technology and Innovation; Education, Youth and Sport; Posts and Telecommunications; and Civil Service.', source: 'Ministry of Economy and Finance, Circular 012, Phase 1, Step 2 (Khmer), page 1; signed July 2025', year: '2025', url: 'https://data.opendevelopmentcambodia.net/en/dataset/bce86ad2-6baf-456a-b49f-90c0b7b61f26/resource/e8c6b0ce-8f79-427e-a7e2-56f87c89ed1e/download/1756437973985-20250714_circular_to_6_lms_in_q3_2025.pdf' },
    { stat: 'By the end of the third quarter of 2025 the system was mandatory for the central-level entities of eight ministries. Phase 1, Step 3 adds six more: Rural Development; Mines and Energy; Land Management, Urban Planning and Construction; Health; Public Works and Transport; and Labour and Vocational Training.', source: 'Ministry of Economy and Finance, Circular 017, Phase 1, Step 3 (Khmer), page 1', year: '2025', url: 'https://data.opendevelopmentcambodia.net/en/dataset/d244f7f4-ef43-43fe-8645-d79483c9b0c3/resource/7d904664-edbe-40fe-8e76-f4b119d6a51c/download/1.pdf' },
    { stat: 'Phase 1, Step 4 extends the obligation to 14 further ministries and institutions, after the first three steps had made the system mandatory for 14 ministries in 2025: Foreign Affairs and International Cooperation; Interior; Social Affairs, Veterans and Youth Rehabilitation; Water Resources and Meteorology; Information; Justice; Tourism; Culture and Fine Arts; Planning; Cults and Religion; Women\'s Affairs; the State Secretariat of Civil Aviation; the State Secretariat of Border Affairs; and the Anti-Corruption Unit.', source: 'Ministry of Economy and Finance, Circular 007 on mandatory e-invoicing via the Cambodia E-Invoicing System, Phase 1, Step 4 (Khmer), pages 1-2; signed 2026', year: '2026', url: 'https://data.opendevelopmentcambodia.net/en/dataset/9bdb6142-b119-41c4-b2ae-5bdde281a8f6/resource/549d6645-3232-4fa3-8715-a8f61c79b1f9/download/1.pdf' },
  ],
  sources: [
    { publisher: 'Ministry of Economy and Finance', label: 'Prakas 075 on the launch of the Cambodia E-Invoicing System (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/a57a86ff-1c53-481e-a4f0-8b32fe96b6cf/resource/e433f7a7-0bd0-4407-8d58-c5f346be20dd/download/mef_prakas-075_launching-of-cambodia-e-invoicing-system_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 003, mandatory e-invoicing, Phase 1 Step 1 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/dataset/2ff2820c-df65-4d60-aa0f-806c65d82952/resource/d77ab51b-6f54-4960-b947-ffd4a4f2a5a4/download/mef_circular-003_obligation-to-use-e-invoice_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 012, mandatory e-invoicing, Phase 1 Step 2 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/bce86ad2-6baf-456a-b49f-90c0b7b61f26/resource/e8c6b0ce-8f79-427e-a7e2-56f87c89ed1e/download/1756437973985-20250714_circular_to_6_lms_in_q3_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 017, mandatory e-invoicing, Phase 1 Step 3 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/d244f7f4-ef43-43fe-8645-d79483c9b0c3/resource/7d904664-edbe-40fe-8e76-f4b119d6a51c/download/1.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 007, mandatory e-invoicing, Phase 1 Step 4 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/9bdb6142-b119-41c4-b2ae-5bdde281a8f6/resource/549d6645-3232-4fa3-8715-a8f61c79b1f9/download/1.pdf', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-06',
  faqs: [
    { question: 'Who operates CamInvoice?', answer: 'The General Department of Digital Economy (GDDE) of the Ministry of Economy and Finance. MEF Prakas 075 of 22 January 2025 makes the GDDE the secretariat that manages, operates, supervises and monitors the system, and the MEF\'s implementing circulars name it as the system operator.' },
    { question: 'When does CamInvoice become mandatory for my business?', answer: 'It depends on whom you invoice. The first phase, as the MEF\'s circulars set it out, covers invoices from suppliers to the central-level budget entities of designated ministries, for expenditure payment requests under public procurement. Step 1 covered the Ministry of Economy and Finance and the Ministry of Environment from fiscal year 2025; Step 2 added six ministries, Step 3 six more, and Step 4 (2026) 14 further ministries and institutions. A business that supplies one of those ministries must register as a member of the system and invoice that ministry electronically. The documents reviewed for this page set no date or threshold for invoicing between private businesses; for anything beyond Phase 1, check the MEF\'s current circulars.' },
    { question: 'Can I use my existing accounting software with CamInvoice?', answer: 'The circulars allow two routes: creating the e-invoice on the CamInvoice platform itself, or issuing it from an invoicing system that has been registered with, and connected to, CamInvoice. Prakas 075 provides for system-provider members, the companies that supply IT systems connecting to the platform. Whether a particular accounting package can be connected is a question for its provider and the platform\'s own published requirements.' },
  ],
  sections: [
    {
      heading: 'Legal Basis and Operator',
      content: 'CamInvoice rests on MEF Prakas 075 of 22 January 2025 on the launch of the Cambodia E-Invoicing System. The Prakas describes the system as a state IT system serving as the central platform for exchanging invoices in electronic form between sellers or service providers and buyers or recipients, which also confirms receipt officially, so that a paper invoice no longer needs to be printed. An e-invoice that has passed the system\'s validation and been given its identifier is recognised as an original digital record with legal effect, and is kept in digital form for 10 years.\n\nThe Prakas places the system with the MEF\'s General Department of Digital Economy, which manages and operates it, handles membership, and maintains its rules and procedures. Its preamble refers to the existing VAT and invoicing rules, and its annex sets out what a tax invoice and a commercial invoice must contain. The implementing circulars state the purpose: to raise the transparency and accountability of public financial management, strengthen compliance with tax regulations, and prepare for ASEAN digital economic cooperation and integration.',
    },
    {
      heading: 'Who Must Comply: Phase 1',
      content: 'The first phase is business-to-government. Each step is a separate MEF circular naming the ministries whose central-level budget entities must accept e-invoices for expenditure payment requests under public procurement, and whose suppliers must therefore invoice through the system.',
      table: {
        caption: 'CamInvoice Phase 1, as set by MEF circulars',
        headers: ['Step', 'Instrument', 'Ministries added'],
        rows: [
          ['Step 1', 'MEF Circular 003 (from fiscal year 2025)', 'Economy and Finance; Environment'],
          ['Step 2', 'MEF Circular 012 (signed July 2025)', 'Agriculture, Forestry and Fisheries; Commerce; Industry, Science, Technology and Innovation; Education, Youth and Sport; Posts and Telecommunications; Civil Service'],
          ['Step 3', 'MEF Circular 017', 'Rural Development; Mines and Energy; Land Management, Urban Planning and Construction; Health; Public Works and Transport; Labour and Vocational Training'],
          ['Step 4', 'MEF Circular 007 (signed 2026)', 'Foreign Affairs and International Cooperation; Interior; Social Affairs, Veterans and Youth Rehabilitation; Water Resources and Meteorology; Information; Justice; Tourism; Culture and Fine Arts; Planning; Cults and Religion; Women\'s Affairs; State Secretariat of Civil Aviation; State Secretariat of Border Affairs; Anti-Corruption Unit'],
        ],
      },
    },
    {
      heading: 'How an Invoice Is Issued',
      content: 'The circulars allow a seller to create the e-invoice on the CamInvoice platform itself, or to issue it from an invoicing system that has been registered with and connected to the platform. Prakas 075 distinguishes user members, who are the sellers and buyers, from system-provider members, who supply the IT systems that connect to it. The ministries\' budget entities join as members and receive e-invoices through the platform, and the MEF\'s General Departments of Budget and National Treasury check that payment requests are supported by validated e-invoices.\n\nThe platform\'s technical specifications are published by its operator, not by this page. A business planning a connection should work from the GDDE\'s current requirements.',
    },
    {
      heading: 'Where the Published Record Stops',
      content: 'The documents reviewed for this page do not set a scope, turnover threshold or date for extending the obligation to invoicing between private businesses, and they do not set out penalties. Figures of that kind circulate in commentary and vendor material; they are not repeated here because they could not be traced to an issuing document. An earlier version of this page carried them, and they have been removed.\n\nAny extension beyond Phase 1 will come by a further MEF instrument. That instrument, not commentary on it, is what a business should plan against, and the MEF\'s current circulars are the place to check.',
    },
    {
      heading: 'Where CamFinTech\'s Work Sits',
      content: 'For a business that will connect an accounting or ERP system to CamInvoice, CamFinTech builds the client side of that connection: the extraction from the client\'s system, the mapping to the platform\'s requirements, validation before submission, and the handling and retention of responses. It is charged as a fee for the build and handed over. The client operates it in its own environment and holds its own invoice records; CamFinTech does not host or transmit client invoice traffic.\n\nThe obligation to invoice remains the business\'s own, as do its registration and credentials on the platform. Advice on the tax treatment of a transaction is reserved work for the client\'s licensed tax agent.',
    },
  ],
};
