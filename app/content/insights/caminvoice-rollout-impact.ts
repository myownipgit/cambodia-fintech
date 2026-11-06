import { ArticleContent } from '../types';

/*
 * Rewritten 2026-11-07 (unsourced-figures pass, same bar as
 * sme-digital-readiness.ts and app/content/regulatory).
 *
 * The previous version carried roughly 120 quantified figures and four tables.
 * None had a fetched source. Everything was removed, not hedged. What the
 * checks found, so nobody restores these from git:
 *
 * - "CamInvoice ... operated by the General Department of Taxation (GDT)" is
 *   FALSE. MEF Prakas 075 of 22 January 2025, Article 4, makes the General
 *   Department of Digital Economy (GDDE) of the Ministry of Economy and Finance
 *   the secretariat that manages, operates and monitors the system, and
 *   Circulars 003, 012 and 017 each name the GDDE as its operator. The GDT does
 *   not appear in any of the four documents. (learn/what-is-caminvoice.ts
 *   carries the same error, plus "the GDT clearance platform".)
 * - "Phase 1 targeted ~3,500 large taxpayers with turnover above KHR 2 billion
 *   ... beginning in 2024" is FALSE as to scope. Phase 1, as the MEF's own
 *   circulars define it, is business-to-government: invoices from suppliers to
 *   the budget entities of named ministries, beginning in fiscal year 2025.
 *   No turnover threshold, taxpayer count or private-sector B2B date appears in
 *   any document read. The "Phase 2: turnover above KHR 700 million, 12,000
 *   businesses, rolling out through 2025" paragraph and the Phase 3/4 bands in
 *   the cost table are untraceable and conflict with learn/what-is-caminvoice.ts
 *   (which has KHR 500 million and different years). Neither page is sourced.
 * - "Launched in phases beginning in 2024" — the system was officially launched
 *   on 22 January 2025 (Circular 012, opening paragraph).
 * - Every "Phase 1 result" — 78% compliance within six months, 22% receiving
 *   enforcement notices, a 12% rise in declared revenue, USD 45-60m of extra
 *   VAT, a 28% faster VAT refund, a 42% Phase 2 readiness rate, an extended
 *   12-month soft-enforcement period, GDT "accrediting" compliance providers —
 *   was attributed to the GDT with no source, and describes a large-taxpayer
 *   phase that the primaries do not contain. Treated as invented.
 * - The 2019-2024 tax revenue / VAT / tax-to-GDP table, and "the IMF's 2024
 *   Article IV attributed ~1.5 pp of the tax-to-GDP increase to digitization" —
 *   unsourced. Restore only from the MEF/GDT revenue outturn or the IMF text.
 * - "World Bank estimates Cambodia's VAT gap at 35-40%", the USD 19bn
 *   consumption base, the USD 650-750m uncollected VAT, and the international
 *   VAT-gap table (Brazil, Mexico, Chile, Italy, Vietnam) — unsourced.
 * - "8,200 businesses registered in the first nine months of Phase 1 ... GDT
 *   estimates ~30% registered because of CamInvoice" and the registration-
 *   trends table — unsourced, and puts unpublished numbers in the GDT's mouth.
 * - Compliance cost bands (USD 5,000-15,000, 1,000-5,000, 50-100/month, % of
 *   revenue) — unsourced.
 * - "CamFinTech models three scenarios ... USD 150/280/400 million" and
 *   "CamFinTech estimates USD 250-400 million" — first-person modelling the
 *   firm never did. Removed as a first-person evidence claim.
 * - "USD 2.8 billion SME financing gap" (ADB) — no ADB figure found (see
 *   sme-digital-readiness.ts). "ADB estimates each dollar of SME credit
 *   generates USD 2.50-3.00 in output" — unsourced. "55-65% of commercial
 *   transactions escaped formal documentation" — unsourced.
 * - ASEAN comparison dates (e-Faktur 2016, Vietnam 2022) — unsourced here.
 *
 * Sources read for this version (all Khmer, scanned; MEF documents via the
 * Open Development Cambodia mirror, fetched 2026-11-06): MEF Prakas 075 on the
 * launch of the Cambodia E-Invoicing System; MEF Circulars 003, 012 and 017 on
 * mandatory e-invoicing, Phase 1 Steps 1-3. gdde.mef.gov.kh and e-invoice.gov.kh
 * returned 403 / a bot challenge. tax.gov.kh's Prakas, notice and instruction
 * lists were searched for e-invoicing instruments and hold none.
 *
 * Bar for restoring a figure, threshold or date: read in a fetched primary
 * (MEF, GDDE, GDT, IMF/World Bank text), recorded in `claims` with where it was
 * read. Vendor and e-invoicing software pages do not clear it.
 */
export const caminvoiceRolloutImpact: ArticleContent = {
  slug: 'caminvoice-rollout-impact',
  title: 'CamInvoice Rollout Impact: Scope, Phasing and What It Means for Business',
  description: 'What the Ministry of Economy and Finance has put in place for the Cambodia E-Invoicing System (CamInvoice): its legal basis, the government-procurement first phase, what it means for suppliers and smaller businesses, and what remains to be announced.',
  type: 'insights',
  cluster: 'compliance',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-07',
  readingTime: 5,
  schema: 'Article',
  relatedSlugs: ['caminvoice', 'gdt', 'what-is-caminvoice'],
  lead: 'The Cambodia E-Invoicing System, known as CamInvoice, is a state platform for exchanging invoices electronically between sellers and buyers. The Ministry of Economy and Finance (MEF) launched it officially on 22 January 2025 by Prakas, and its General Department of Digital Economy (GDDE) operates it. The rollout is phased and began with government procurement: suppliers invoicing the budget entities of designated ministries must do so through the system, ministry by ministry. This article sets out what the MEF\'s own documents establish, what that means for suppliers and for smaller businesses, and where the published record stops. It carries no revenue, compliance or cost estimates. Those that appeared in an earlier version could not be traced to a primary source and have been removed.',
  claims: [
    { stat: 'The Cambodia E-Invoicing System was officially launched on 22 January 2025, with mandatory use beginning at the Ministry of Economy and Finance and the Ministry of Environment.', source: 'Ministry of Economy and Finance, Circular 012 on mandatory e-invoicing via the Cambodia E-Invoicing System, Phase 1, Step 2 (Khmer), opening paragraph, page 1', year: '2025', url: 'https://data.opendevelopmentcambodia.net/en/dataset/bce86ad2-6baf-456a-b49f-90c0b7b61f26/resource/e8c6b0ce-8f79-427e-a7e2-56f87c89ed1e/download/1756437973985-20250714_circular_to_6_lms_in_q3_2025.pdf' },
    { stat: 'The General Department of Digital Economy of the MEF is the secretariat that manages, operates and monitors the system. An invoice validated and identified by the system is recognised as an original digital record, and is stored in digital form for 10 years.', source: 'Ministry of Economy and Finance, Prakas 075 on the launch of the Cambodia E-Invoicing System (Khmer), Article 4 (page 2) and Article 6 (page 3)', year: '2025', url: 'https://data.opendevelopmentcambodia.net/en/dataset/a57a86ff-1c53-481e-a4f0-8b32fe96b6cf/resource/e433f7a7-0bd0-4407-8d58-c5f346be20dd/download/mef_prakas-075_launching-of-cambodia-e-invoicing-system_kh_2025.pdf' },
    { stat: 'Phase 1, Step 1 applies to the central-level budget entities of two ministries (Economy and Finance; Environment) and their suppliers, covering invoices for expenditure payment requests under public procurement from fiscal year 2025.', source: 'Ministry of Economy and Finance, Circular 003 on mandatory e-invoicing via the Cambodia E-Invoicing System, Phase 1, Step 1 (Khmer), page 1', year: '2025', url: 'https://data.opendevelopmentcambodia.net/dataset/2ff2820c-df65-4d60-aa0f-806c65d82952/resource/d77ab51b-6f54-4960-b947-ffd4a4f2a5a4/download/mef_circular-003_obligation-to-use-e-invoice_kh_2025.pdf' },
    { stat: 'Phase 1, Step 2 extends the obligation to six further ministries: Agriculture, Forestry and Fisheries; Commerce; Industry, Science, Technology and Innovation; Education, Youth and Sport; Posts and Telecommunications; and Civil Service.', source: 'Ministry of Economy and Finance, Circular 012, Phase 1, Step 2 (Khmer), page 1; signed July 2025', year: '2025', url: 'https://data.opendevelopmentcambodia.net/en/dataset/bce86ad2-6baf-456a-b49f-90c0b7b61f26/resource/e8c6b0ce-8f79-427e-a7e2-56f87c89ed1e/download/1756437973985-20250714_circular_to_6_lms_in_q3_2025.pdf' },
    { stat: 'By the end of the third quarter of 2025 the system was mandatory for the central-level entities of eight ministries. Phase 1, Step 3 adds six more: Rural Development; Mines and Energy; Land Management, Urban Planning and Construction; Health; Public Works and Transport; and Labour and Vocational Training.', source: 'Ministry of Economy and Finance, Circular 017, Phase 1, Step 3 (Khmer), page 1', year: '2025', url: 'https://data.opendevelopmentcambodia.net/en/dataset/d244f7f4-ef43-43fe-8645-d79483c9b0c3/resource/7d904664-edbe-40fe-8e76-f4b119d6a51c/download/1.pdf' },
  ],
  sources: [
    { publisher: 'Ministry of Economy and Finance', label: 'Prakas 075 on the launch of the Cambodia E-Invoicing System (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/a57a86ff-1c53-481e-a4f0-8b32fe96b6cf/resource/e433f7a7-0bd0-4407-8d58-c5f346be20dd/download/mef_prakas-075_launching-of-cambodia-e-invoicing-system_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 003, mandatory e-invoicing, Phase 1 Step 1 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/dataset/2ff2820c-df65-4d60-aa0f-806c65d82952/resource/d77ab51b-6f54-4960-b947-ffd4a4f2a5a4/download/mef_circular-003_obligation-to-use-e-invoice_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 012, mandatory e-invoicing, Phase 1 Step 2 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/bce86ad2-6baf-456a-b49f-90c0b7b61f26/resource/e8c6b0ce-8f79-427e-a7e2-56f87c89ed1e/download/1756437973985-20250714_circular_to_6_lms_in_q3_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 017, mandatory e-invoicing, Phase 1 Step 3 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/d244f7f4-ef43-43fe-8645-d79483c9b0c3/resource/7d904664-edbe-40fe-8e76-f4b119d6a51c/download/1.pdf', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-06',
  faqs: [
    { question: 'Who operates CamInvoice?', answer: 'The General Department of Digital Economy (GDDE) of the Ministry of Economy and Finance. MEF Prakas 075 of 22 January 2025 makes the GDDE the secretariat that manages, operates and monitors the system, and each of the MEF\'s implementing circulars names it as the system operator. Under the circulars, the MEF\'s General Department of Budget and General Department of National Treasury check the use of e-invoices in payment requests from the ministries concerned.' },
    { question: 'When does CamInvoice become mandatory for my business?', answer: 'It depends on whom you invoice. The first phase, as the MEF\'s circulars set it out, covers invoices from companies and suppliers to the budget entities of designated ministries, added in steps: two ministries from fiscal year 2025, six more in Step 2, and six more in Step 3. A business that supplies one of those ministries must register as a member of the system and issue its invoices to that ministry electronically. The documents reviewed for this article set no date or threshold for invoicing between private businesses. For anything beyond the published circulars, rely on the MEF\'s and the GDDE\'s own announcements.' },
    { question: 'How does a business issue a CamInvoice e-invoice?', answer: 'The circulars allow two routes: creating the e-invoice on the CamInvoice platform itself, or issuing it from an invoicing system that has been registered with, and connected to, CamInvoice. Prakas 075 provides for system-provider members — companies that supply the IT systems that connect to the platform — alongside user members, who are the sellers and buyers. Which route suits a business depends mainly on whether it already keeps its accounts in a system that can be connected.' },
  ],
  sections: [
    {
      heading: 'What the Royal Government Has Put in Place',
      content: 'CamInvoice rests on MEF Prakas 075 of 22 January 2025 on the launch of the Cambodia E-Invoicing System. The Prakas describes the system as a state IT system serving as the central platform for exchanging invoices in electronic form between sellers or service providers and buyers or recipients, which also confirms receipt officially, so that a paper invoice no longer needs to be printed. An e-invoice that has passed the system\'s validation and been given its identifier is recognised as an original digital record with legal effect, and is kept in digital form for 10 years.\n\nThe Prakas places the system with the General Department of Digital Economy, which manages and operates it, handles membership, and maintains its rules and procedures. Its preamble refers to the existing VAT and invoicing rules, and its annex sets out what a tax invoice and a commercial invoice must contain. The circulars that implement it state the purpose plainly: to raise the transparency and accountability of public financial management under the fourth phase of its reform programme, strengthen compliance with tax regulations, and prepare for ASEAN digital economic cooperation and integration.',
    },
    {
      heading: 'Phase 1: Government Procurement First',
      content: 'The first phase is business-to-government. Each step is a separate MEF circular naming the ministries whose budget entities must accept only e-invoices for expenditure payments under public procurement procedures, and whose suppliers must therefore invoice electronically. Step 1 covered the Ministry of Economy and Finance and the Ministry of Environment from fiscal year 2025. Step 2, signed in July 2025, added six ministries. Step 3 added six more; its preamble records the system as already mandatory for the central-level entities of eight ministries by the end of the third quarter of 2025.\n\nThe design is deliberate. Starting with the state\'s own purchasing gives the platform a defined set of buyers, a payment process the MEF already controls, and a reason for suppliers of every size to register. The ministries\' budget entities join the system as members, appoint representatives to manage their accounts, and receive e-invoices through the platform; the General Departments of Budget and National Treasury check that payment requests are supported by validated e-invoices.',
    },
    {
      heading: 'Tax Administration and the Invoice Record',
      content: 'An e-invoicing system changes what a tax administration can see. Each validated invoice is a structured record of who sold what to whom, for how much, and when, held centrally and retained for a decade. Once both sides of a transaction are on the platform, the seller\'s output and the buyer\'s input are recorded in the same place, which is the basis for reconciling VAT declarations against invoices rather than sampling them.\n\nWhat that will mean for revenue has not been published, and this article does not estimate it. An earlier version carried revenue projections, VAT-gap figures and Phase 1 compliance results; none could be traced to an MEF, GDT or international-institution source, and they have been removed. Readers looking for revenue data should start from the MEF\'s and GDT\'s own published outturns.',
    },
    {
      heading: 'Beyond Phase 1: Business-to-Business Invoicing',
      content: 'The MEF\'s circulars describe Phase 1 as the stage that begins with invoicing between companies and ministries. The documents reviewed for this article do not set a scope, turnover threshold or date for extending the obligation to invoicing between private businesses. Figures of that kind circulate in commentary and vendor material; they are not repeated here because they could not be traced to an issuing document.\n\nThe practical consequence is that businesses should plan against the published circulars and watch for new ones, rather than against an assumed timetable. When the obligation extends beyond government suppliers, it will be by a further instrument from the MEF, and that instrument — not commentary on it — is what a business should read.',
    },
    {
      heading: 'What It Means for Suppliers and Smaller Businesses',
      content: 'For a business that supplies one of the designated ministries, the obligation is already concrete: register as a member of CamInvoice and issue invoices to that ministry electronically. That reaches suppliers of every size, not only large ones, because government buys from small firms too. For some of them, registering on the platform will be their first structured interaction with a national digital system.\n\nThe effort this involves depends less on the size of the business than on how it keeps its records. A business that already issues invoices from an accounting system faces a connection question. A business that invoices on paper or in a spreadsheet faces a process change first: each sale has to be captured in a form a system can read before it can be sent anywhere. Issuing directly on the platform is one way to start; a business that raises many invoices is likely to find a connected accounting system more practical.',
    },
    {
      heading: 'Integration with Payment Data',
      content: 'An invoice records what is owed; a payment record shows that it was paid. Where an invoice validated through CamInvoice is settled through Bakong or another KHQR-connected account, the two records together describe a transaction completely. For a small business, a history of validated invoices and matching receipts is the kind of evidence a lender can underwrite against without land title.\n\nThat linkage is a possibility, not a published programme. No document reviewed for this article provides for the sharing of CamInvoice data with lenders. Where such a link is built, it should rest on the business\'s own consent and the data-protection requirements that apply, and on the rules the MEF sets for the platform.',
    },
    {
      heading: 'Compliance Effort by Business Profile',
      content: 'The two routes the circulars allow — issuing on the CamInvoice platform, or from a registered and connected invoicing system — map onto two kinds of business. Businesses with established accounting or ERP systems will generally connect those systems, either through their software provider or through an integration built to the platform\'s specifications, so that invoices flow from the system where sales are already recorded. Businesses without such systems can start on the platform directly.\n\nNo published source sets out compliance costs by business size, and this article does not estimate them; the cost bands in an earlier version were unsourced. What can be said is where the effort sits: in clean master data (tax identification numbers, customer records, product descriptions), in the connection itself, and in the change to how staff raise and correct invoices.',
    },
    {
      heading: 'What to Watch',
      content: 'Three things will shape the rollout from here, and each will appear first in an MEF or GDDE document: further steps adding ministries and other public bodies; any instrument extending the obligation to invoicing between private businesses, with its scope and timing; and the rules for registering system providers and connecting accounting systems to the platform.\n\nThe Royal Government has built the rail and set the standard for using it. For any business, the reliable guide to when and how that standard applies is the instrument itself.',
    },
  ],
};
