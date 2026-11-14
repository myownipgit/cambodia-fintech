import { ArticleContent } from '../types';

/*
 * CamInvoice correction, 2026-11-07 (targeted: CamInvoice sentences, rows and
 * FAQ answers only; other figures on this page are unsourced and left for the
 * general pass). Found false or untraceable, removed, not hedged:
 * - CamInvoice attributed to the General Department of Taxation ("GDT-verified",
 *   "the GDT clears every invoice", "administered by the GDT", "the GDT's system
 *   ... returns a digitally signed tax stamp") — FALSE. MEF Prakas 075 (22
 *   January 2025), Art. 4: the MEF's General Department of Digital Economy
 *   (GDDE) manages and operates the system. The GDT appears in none of the four
 *   MEF documents read (Prakas 075; Circulars 003, 012, 017).
 * - "a government-verified, tamper-proof record of every B2B transaction" —
 *   FALSE as to scope. Phase 1 is business-to-government: invoices from
 *   suppliers to the budget entities of named ministries, three steps from
 *   fiscal year 2025. No primary sets a private-sector B2B scope or date.
 * - A central registry of pledged invoices, "prevents double financing",
 *   buyer acceptance, delivery confirmation, financiers querying CamInvoice
 *   (directly or "through CamDX"), a "cryptographic reference" and a "digital
 *   stamp" — none described in any primary read; no technical primary could be
 *   read (e-invoice.gov.kh and gdde.mef.gov.kh returned 403 on 2026-11-06).
 * What the invoice-financing argument may rest on: Prakas 075 Art. 6 — a
 * validated invoice is an original digital record with legal effect, stored 10
 * years — scoped to what Phase 1 covers.
 * - "CamInvoice will make [garment] trade flow visible and verifiable for the
 *   first time" — no primary puts that trade in scope.
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

/*
 * 2026-11-08 register sweep (ADR-005/006). The firm section and FAQ lines
 * here said CamFinTech "navigates the approval", "keeps them approved",
 * provides "approval-navigation", and that the build "is coordinated with
 * accredited Service Providers"; some also claimed NBC liaison, regulatory
 * goodwill, banking partners or partnership facilitation. Removed: the
 * approval decision is the operator's or regulator's, the client is the
 * applicant of record, the firm builds the client side itself (ADR-005), and
 * no partner relationship exists. Do not reintroduce any of these phrasings.
 */
/*
 * Figure pass, 2026-11-15. Removed, not hedged (none read in a primary; do not
 * restore from git):
 * - "a large SME financing gap estimated at over $3 billion annually" (the
 *   sibling learn page said "$2.5 billion", attributed to the ADB; neither found).
 * - "relatively high interest rate environment (12-18% for SME lending)".
 * - "The garment sector ... approximately 30% of Cambodia's exports" (the learn
 *   page said ~75%; the two contradicted each other) and "generates billions in
 *   annual invoiced trade".
 * - "SME suppliers with 30-90 day terms", "concentrated buyer markets in
 *   garments, agriculture, and construction".
 * - "attractive risk-adjusted returns", "Early movers ... positioned to capture
 *   significant market share", "conditions ... that does not exist in markets
 *   without integrated digital infrastructure". Investment-pitch claims with no
 *   evidence (ADR-006).
 * - "Bakong instant settlement" / "instant disbursement and collection".
 *   Replaced by plain reference to Bakong as the national payment system.
 * Added: the double-financing answer — Law on Secured Transactions (adopted
 * 24 May 2007; Arts. 2(1)(b), 12(2), 29) and the Ministry of Commerce's
 * Secured Transactions Filing Office (SETFO 2.0, 18 March 2025), as read for
 * learn/supply-chain-finance-cambodia.ts on 2026-11-15. The older notes above
 * that "the MEF documents describe no register of pledged invoices" remain
 * true of CamInvoice; the register is the MoC filing office, not CamInvoice.
 */
export const supplyChainFinance: ArticleContent = {
  slug: 'supply-chain-finance',
  title: 'What is Supply Chain Finance in Cambodia?',
  description: 'Supply chain finance gives a supplier early payment against what a buyer owes it. In Cambodia, CamInvoice can show an invoice is genuine where the system covers it, and the Ministry of Commerce filing office records who has a claim to it.',
  type: 'glossary',
  cluster: 'investment',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-15',
  readingTime: 3,
  schema: 'DefinedTerm',
  relatedSlugs: ['supply-chain-finance-cambodia', 'caminvoice', 'bakong'],
  lead: 'Supply chain finance (SCF) is the set of products, including invoice discounting, factoring and reverse factoring, that give a supplier early payment against money a buyer owes it. In Cambodia, two public systems bear on it: CamInvoice, which gives a validated invoice legal effect as an original digital record where the system covers it, and the Ministry of Commerce\'s Secured Transactions Filing Office, where claims to receivables are recorded and ranked under the Law on Secured Transactions.',
  claims: [
    { stat: 'The Law on Secured Transactions applies to the sale of accounts, meaning rights to payment for goods sold or leased or services rendered; priority between security interests in the same collateral is measured from the first notice filed or the first perfection, whichever is earlier.', source: 'Law on Secured Transactions (adopted by the National Assembly 24 May 2007), Arts. 2(1)(b), 3(11) and 12(2), English text', year: '2007', url: 'https://lib.ncdd.gov.kh/storage/app/public/library_backend/CAT_21053_1/2009-SEcured%20transaction-en.pdf' },
  ],
  sources: [
    { publisher: 'Ministry of Economy and Finance', label: 'Prakas 075 on the launch of the Cambodia E-Invoicing System (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/a57a86ff-1c53-481e-a4f0-8b32fe96b6cf/resource/e433f7a7-0bd0-4407-8d58-c5f346be20dd/download/mef_prakas-075_launching-of-cambodia-e-invoicing-system_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 003, mandatory e-invoicing, Phase 1 Step 1 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/dataset/2ff2820c-df65-4d60-aa0f-806c65d82952/resource/d77ab51b-6f54-4960-b947-ffd4a4f2a5a4/download/mef_circular-003_obligation-to-use-e-invoice_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 012, mandatory e-invoicing, Phase 1 Step 2 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/bce86ad2-6baf-456a-b49f-90c0b7b61f26/resource/e8c6b0ce-8f79-427e-a7e2-56f87c89ed1e/download/1756437973985-20250714_circular_to_6_lms_in_q3_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 017, mandatory e-invoicing, Phase 1 Step 3 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/d244f7f4-ef43-43fe-8645-d79483c9b0c3/resource/7d904664-edbe-40fe-8e76-f4b119d6a51c/download/1.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 007, mandatory e-invoicing, Phase 1 Step 4 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/9bdb6142-b119-41c4-b2ae-5bdde281a8f6/resource/549d6645-3232-4fa3-8715-a8f61c79b1f9/download/1.pdf', tier: 'primary' },
    { publisher: 'National Assembly of Cambodia', label: 'Law on Secured Transactions, 2007, English text (PDF, NCDD library copy)', url: 'https://lib.ncdd.gov.kh/storage/app/public/library_backend/CAT_21053_1/2009-SEcured%20transaction-en.pdf', tier: 'primary' },
    { publisher: 'Ministry of Commerce', label: 'Press release on the launch of SETFO 2.0, 18 March 2025 (Open Development Cambodia announcement page)', url: 'https://opendevelopmentcambodia.net/announcements/press-release-official-launch-of-the-secured-transactions-filing-office-2-0-setfo-2-0/', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-15',
  faqs: [
    { question: 'What is supply chain finance and how does it work in Cambodia?', answer: 'Supply chain finance gives a supplier early payment against an invoice its buyer has not yet paid. A financier advances part of the invoice value, and is repaid when the buyer pays at maturity. Where an invoice falls within CamInvoice\'s scope — in its first phase, invoices from suppliers to designated government ministries — the supplier issues it through the system, and under Ministry of Economy and Finance Prakas 075 a validated invoice is recognised as an original digital record and kept for 10 years. That gives the financier a firmer basis for confirming that the receivable is genuine.' },
    { question: 'How does a financier know an invoice is not already financed?', answer: 'Not from CamInvoice, which records invoices, not financiers\' claims. The Law on Secured Transactions of 2007 applies to sales and pledges of receivables and ranks competing claims by the first notice filed or the first perfection. Notices are filed at the Secured Transactions Filing Office of the Ministry of Commerce, whose current system, SETFO 2.0, was launched in March 2025. Searching that register, and filing there, is how a financier protects its position. How a particular arrangement should be documented and filed is a question for Cambodian counsel.' },
    { question: 'What returns can investors expect from Cambodia supply chain finance?', answer: 'No figure is given here. Pricing depends on the buyer\'s credit, the tenor and the financier, and no primary source on Cambodian supply chain finance pricing or volumes has been found. An investor assessing a platform should ask for its own loss and pricing history. CamFinTech provides fee-only market and regulatory assessment for investors; it operates no lending rail and holds no client funds.' },
  ],
  sections: [
    {
      heading: 'Three Risks in Financing an Invoice',
      content: 'A financier advancing money against an invoice faces three risks: that the invoice is fake or altered, that the same invoice has already been sold or pledged to someone else, and that the buyer disputes it or does not pay. Cambodia has a public answer to the first two, in different places, and the third remains a matter of the buyer\'s credit and the underlying contract.\n\nAn invoice issued through CamInvoice is validated by the system and given an identifier, and Ministry of Economy and Finance Prakas 075 recognises it as an original digital record with legal effect, kept in digital form for 10 years. That bears on the first risk. The system\'s first phase covers invoices from suppliers to the budget entities of designated ministries, so the receivables it validates today are receivables from government; for any wider scope, the MEF\'s current circulars are the place to check.\n\nThe second risk is addressed by the Law on Secured Transactions, adopted by the National Assembly on 24 May 2007. It applies to the sale of receivables as well as to pledges, and ranks competing claims to the same receivable from the first notice filed or the first perfection. Notices are filed at the Secured Transactions Filing Office in the Ministry of Commerce, whose SETFO 2.0 system was launched on 18 March 2025 with access through the CamDigiKey app.',
    },
    {
      heading: 'Product Types',
      content: 'Supply chain finance products differ by who starts the arrangement and whose credit the financier relies on. Where an invoice falls within CamInvoice\'s scope, the validated record supports each of them in the same way: as evidence that the invoice is genuine.',
      table: {
        caption: 'Common supply chain finance products',
        headers: ['Product', 'How it works', 'Whose credit the financier mainly relies on'],
        rows: [
          ['Invoice discounting / factoring', 'Supplier sells or pledges a receivable for early payment', 'The buyer\'s, and the supplier\'s'],
          ['Reverse factoring', 'Buyer confirms its suppliers\' invoices; a financier pays them early', 'The buyer\'s'],
          ['Dynamic discounting', 'Buyer pays early from its own cash in return for a discount', 'No financier involved'],
          ['Distributor finance', 'A financier funds a distributor\'s purchases from a manufacturer', 'The distributor\'s, often with manufacturer support'],
        ],
      },
    },
    {
      heading: 'Payments',
      content: 'Advances and repayments move between the accounts of the financier, the supplier and the buyer. Where those accounts are at institutions connected to Bakong, the National Bank of Cambodia\'s national payment system, payments between them can be made through it. Whether a given programme uses Bakong depends on the institutions involved.',
    },
    {
      heading: 'Where CamFinTech\'s Work Sits',
      content: 'For investors and financial institutions looking at supply chain finance in Cambodia, CamFinTech provides fee-only market and regulatory assessment, and due diligence on platform opportunities. For an institution designing a programme, it prepares the compliance architecture the programme must satisfy and builds the client side of the CamInvoice and Bakong integrations the programme draws on.\n\nThe licensing decision for any lending activity rests with the regulator, and the licence is the client\'s. CamFinTech operates no lending rail, holds no client funds and advances no credit.',
    },
  ],
};
