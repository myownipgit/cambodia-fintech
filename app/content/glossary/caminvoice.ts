import { ArticleContent } from '../types';

/*
 * Rewritten 2026-11-07 (CamInvoice correction pass; the fuller record is in
 * insights/caminvoice-rollout-impact.ts and learn/what-is-caminvoice.ts).
 *
 * Removed, not hedged, so nobody restores it from git:
 *
 * - "administered by the General Department of Taxation (GDT)", "operated by
 *   the GDT", "validated and timestamped by the GDT", "GDT-cleared" — FALSE.
 *   MEF Prakas 075 of 22 January 2025, Article 4: the MEF's General Department
 *   of Digital Economy (GDDE) manages, operates, supervises and monitors the
 *   system. The GDT appears in none of the four MEF documents.
 * - The phase table and FAQ timeline (large taxpayers above USD 2 million from
 *   2025; medium USD 250,000-2 million from 2026; all taxpayers 2027) and "all
 *   B2B and B2G invoices must be submitted" — no primary. Phase 1 is
 *   business-to-government in three steps by ministry (Circulars 003, 012,
 *   017). No private-sector B2B scope, threshold or date was found.
 * - "Non-compliance carries financial penalties and potential business licence
 *   implications" — no primary.
 * - UBL 2.1 XML, the clearance model, "unique cryptographic reference number",
 *   API submission — not read in any primary; e-invoice.gov.kh and
 *   gdde.mef.gov.kh returned 403 on 2026-11-06. Removed, FAQs included.
 * - "potentially unlocking billions in previously inaccessible credit" —
 *   unsourced figure and hype. The supply-chain-finance point is kept only as
 *   a possibility, with the absence of any data-sharing provision stated.
 * - "CamFinTech navigates the SP-accreditation pathway ... runs the compliance
 *   programme that keeps enterprises approved ... GDT-side certification
 *   sequencing" — agency over approval (ADR-006) and an accreditation scheme
 *   that appears in no document read. Rewritten to the integrate-only scope.
 * - The GDT Prakas index and home page were listed as this entry's sources;
 *   neither concerns CamInvoice. Replaced with the four MEF documents.
 *
 * Bar for restoring a figure, threshold, date or technical specification: read
 * in a fetched primary (MEF, GDDE, or the platform's published specification),
 * recorded in `claims` with where it was read.
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
export const caminvoice: ArticleContent = {
  slug: 'caminvoice',
  title: 'What is CamInvoice?',
  description: 'CamInvoice, the Cambodia E-Invoicing System, is the Ministry of Economy and Finance\'s platform for exchanging electronic invoices, operated by its General Department of Digital Economy and introduced first for government procurement.',
  type: 'glossary',
  cluster: 'compliance',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-07',
  readingTime: 2,
  schema: 'DefinedTerm',
  relatedSlugs: ['what-is-caminvoice', 'gdt', 'gaap', 'supply-chain-finance'],
  lead: 'CamInvoice, the Cambodia E-Invoicing System, is a state platform for exchanging invoices electronically between sellers and buyers. It was launched by Ministry of Economy and Finance (MEF) Prakas 075 of 22 January 2025 and is managed and operated by the MEF\'s General Department of Digital Economy (GDDE). An invoice validated by the system is an original digital record, kept for 10 years. Its first phase applies to suppliers invoicing the budget entities of designated ministries.',
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
    { question: 'What is CamInvoice and when does it become mandatory?', answer: 'CamInvoice is the Cambodia E-Invoicing System, launched by MEF Prakas 075 on 22 January 2025 and operated by the MEF\'s General Department of Digital Economy. Its first phase is business-to-government: suppliers invoicing the central-level budget entities of designated ministries for payment under public procurement must use it. Step 1 covered two ministries from fiscal year 2025, Steps 2 and 3 added six each, and Step 4 (Circular 007, 2026) added 14 further ministries and institutions. The documents reviewed set no date or threshold for invoicing between private businesses; check the MEF\'s current circulars.' },
    { question: 'Is CamInvoice run by the General Department of Taxation?', answer: 'No. MEF Prakas 075 makes the General Department of Digital Economy the secretariat that manages, operates and monitors the system. The GDT is the tax administration; it is not named in the Prakas or in the implementing circulars. The circulars do give strengthening compliance with tax regulations as one of the system\'s purposes.' },
    { question: 'How is a CamInvoice e-invoice issued?', answer: 'The circulars allow two routes: creating the e-invoice on the CamInvoice platform itself, or issuing it from an invoicing system that has been registered with and connected to the platform. Prakas 075 provides for system-provider members, the companies that supply the IT systems that connect to it.' },
  ],
  sections: [
    {
      heading: 'How CamInvoice Works',
      content: 'The seller issues an invoice on the platform or from a connected invoicing system. The system validates it and gives it an identifier, and the validated invoice is recognised as an original digital record with legal effect, so a paper invoice no longer needs to be printed. Receipt by the buyer is confirmed through the platform. The annex to Prakas 075 sets out what a tax invoice and a commercial invoice must contain.',
    },
    {
      heading: 'Phase 1: Government Procurement',
      content: 'The obligation is being introduced ministry by ministry. MEF Circular 003 (Step 1) covered the Ministry of Economy and Finance and the Ministry of Environment from fiscal year 2025. Circular 012 (Step 2, signed July 2025) added Agriculture, Forestry and Fisheries; Commerce; Industry, Science, Technology and Innovation; Education, Youth and Sport; Posts and Telecommunications; and Civil Service. Circular 017 (Step 3) added Rural Development; Mines and Energy; Land Management, Urban Planning and Construction; Health; Public Works and Transport; and Labour and Vocational Training. Circular 007 (Step 4, signed 2026) added 14 further ministries and institutions, among them Foreign Affairs and International Cooperation, Interior, Justice and Planning.',
    },
    {
      heading: 'Invoice Records and Supply Chain Finance',
      content: 'A validated invoice held centrally is the kind of record a lender could use as evidence of trade when financing receivables. That is a possibility, not a published programme: no document reviewed provides for sharing CamInvoice data with lenders. Where such a link is built, it should rest on the business\'s own consent, the data-protection requirements that apply, and the rules the MEF sets for the platform.',
    },
    {
      heading: 'Where CamFinTech\'s Work Sits',
      content: 'CamFinTech builds the client side of a connection between a business\'s accounting or ERP system and CamInvoice, for a fee, and hands it over. The business operates it and holds its own invoice records; CamFinTech does not host or transmit client invoice traffic. The obligation to invoice, and the business\'s membership of the platform, remain the business\'s own. Advice on tax treatment is reserved work for a licensed tax agent.',
    },
  ],
};
