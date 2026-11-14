import { ArticleContent } from '../types';

/*
 * CamInvoice correction, 2026-11-07 (targeted: CamInvoice sentences, rows and
 * FAQ answers only; the trade-gap, advance-rate, market-size and named-bank
 * prose on this page is unsourced and left for the general pass). Found false
 * or untraceable, removed, not hedged:
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
 * - "As of 2025, CamInvoice processes over 500,000 verified invoices monthly"
 *   and "Cambodia's mandatory adoption model ensures data completeness" — no
 *   primary; the second is also false as to scope.
 * - "SCF arrangements must integrate with CamInvoice data" — no primary.
 * - The "Banks Active in Supply Chain Finance (2026)" table, whose integration
 *   column said ACLEDA was "CamInvoice API Connected", ABA "NSW + CamInvoice
 *   Integrated" and Phillip Bank a "CamInvoice Pilot" — unevidenced claims about
 *   named institutions; table removed whole (its other cells are unsourced too).
 * Bar for restoring: read in a fetched MEF/GDDE primary, or the institution's
 *   own published statement for a named-bank claim.
 *
 * Also removed 2026-11-07 (review pass): ACLEDA 'has piloted invoice financing',
 * ABA 'trade finance with digital documentation', Canadia/Phillip 'SME lending
 * with digital data verification' (unevidenced claims about named institutions),
 * and 'As CamInvoice adoption deepens ... from under $200 million to over $1
 * billion within five years' (unsourced projection).
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
 * Figure pass, 2026-11-15. New primaries read this day:
 * - Law on Secured Transactions, English text (37 pp., NCDD library copy),
 *   adopted by the National Assembly 24 May 2007 (final page). Art. 2(1)(b):
 *   applies to "the sale of accounts and secured sales contracts"; Art. 3(11):
 *   "account" = any right to payment for goods sold or leased or services
 *   rendered not evidenced by an instrument; Art. 12(2): priority measured from
 *   the first notice filed or first perfection; Art. 25: rights in accounts
 *   may be assigned, including future accounts, and the obligor need not be
 *   informed for attachment, perfection or enforcement; Art. 29: a secured
 *   transactions filing office is established in the Ministry of Commerce.
 * - Ministry of Commerce press release, 18 March 2025 (Open Development
 *   Cambodia announcement): launch of SETFO 2.0 with the Techo Startup Center;
 *   the system dates from 2008 under the Law on Secured Transactions; features
 *   include CamDigiKey registration and access, online payment, report
 *   download, verification through verify.gov.kh and CamDL for notification
 *   letters. setfo.gov.kh did not resolve from here on 2026-11-15.
 * - KPMG Cambodia technical update, September 2024 (COMMENTARY tier): CNSW
 *   official launch 7 May 2024; initiated by the GDCE and the MoC; connected to
 *   the ASEAN Single Window; 16 ministries and institutions; electronic
 *   applications for import/export licences, permits and certificates.
 *   customs.gov.kh is a JS app with no readable CNSW text; asw.asean.org 403s.
 *
 * Removed, not hedged (none read in a primary; do not restore from git):
 * - "an estimated $2.5 billion trade finance gap" attributed to the ADB (twice)
 *   and "SMEs represent approximately 70% of rejected trade finance
 *   applications". No ADB Cambodia figure was found.
 * - "the SMEs that power its $30 billion economy". World Bank 2024 GDP is
 *   USD 46.35 bn.
 * - The advance-rate table (90-95%, 80-85%, 98-100%, 70-80%, 75-85%), "the
 *   bank advances 80-90% ... within 24-48 hours", and the "Data Source Used"
 *   column pairing products with CamInvoice, ERP and NSW data.
 * - NSW "cargo tracking", financiers verifying that goods "arrived at their
 *   destination", "an end-to-end audit trail from purchase order to customs
 *   clearance to invoice issuance", and "garment ~75% of total exports".
 * - "Cambodia's banking sector is well-capitalized", "most Cambodian banks
 *   operate legacy core banking systems", "audit trails for NBC regulatory
 *   reporting", "MFIs serve the majority of Cambodia's rural SMEs" and MFIs
 *   underwriting "the invoices their customers issue through CamInvoice"
 *   (CamInvoice Phase 1 is business-to-government).
 * - "Cross-border SCF is also emerging through Bakong's international
 *   corridors". Bakong's links are QR payment links (NBC 2024 report, ch. 6).
 * - "faster approvals and lower interest rates", "simply do not exist in most
 *   emerging markets", "positioned to leapfrog", "Government digital
 *   infrastructure is now closing that gap".
 * - The market section: "total trade volume exceeded $50 billion in 2025",
 *   "10% ... would exceed $5 billion", "Global SCF volumes reached $2.1
 *   trillion in 2024, Asia-Pacific 45%", "Cambodia captures less than 0.1%",
 *   "early movers ... durable competitive advantages".
 *
 * Bar for restoring: read in a fetched issuer primary, recorded here.
 */

export const supplyChainFinanceCambodia: ArticleContent = {
  slug: 'supply-chain-finance-cambodia',
  title: 'How Does Supply Chain Finance Work in Cambodia?',
  description: 'A guide to supply chain finance in Cambodia: the main product types, what a CamInvoice-validated invoice does and does not prove, how the Law on Secured Transactions and the Ministry of Commerce filing office protect a financier\'s claim to receivables, and what the National Single Window covers.',
  type: 'learn',
  cluster: 'investment',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-15',
  readingTime: 6,
  schema: 'Article',
  relatedSlugs: ['supply-chain-finance', 'caminvoice', 'bakong'],
  lead: 'Supply chain finance (SCF) gives a supplier early payment against what it is owed by a buyer. Every SCF arrangement has to answer three questions: is the invoice genuine, has the financier\'s claim to it been secured against other creditors, and will the buyer pay. In Cambodia, two public systems bear on the first two. CamInvoice, the Ministry of Economy and Finance\'s e-invoicing system, gives a validated invoice legal effect as an original digital record, within the scope it currently covers. The Law on Secured Transactions of 2007 applies to sales and assignments of receivables, and ranks competing claims by the first notice filed at the Ministry of Commerce\'s Secured Transactions Filing Office. The third question, the buyer\'s credit, remains the financier\'s own judgment.',
  claims: [
    { stat: 'The Law on Secured Transactions applies to the sale of accounts, meaning rights to payment for goods sold or leased or services rendered; priority between security interests in the same collateral is measured from the first notice filed or the first perfection, whichever is earlier.', source: 'Law on Secured Transactions (adopted by the National Assembly 24 May 2007), Arts. 2(1)(b), 3(11) and 12(2), English text', year: '2007', url: 'https://lib.ncdd.gov.kh/storage/app/public/library_backend/CAT_21053_1/2009-SEcured%20transaction-en.pdf' },
    { stat: 'The Ministry of Commerce launched SETFO 2.0, the second version of its Secured Transactions Filing Office system, on 18 March 2025, with registration and access through the CamDigiKey app and notification letters secured with the Cambodia Digital Ledger (CamDL).', source: 'Ministry of Commerce press release, 18 March 2025, as published by Open Development Cambodia', year: '2025', url: 'https://opendevelopmentcambodia.net/announcements/press-release-official-launch-of-the-secured-transactions-filing-office-2-0-setfo-2-0/' },
  ],
  sources: [
    { publisher: 'Ministry of Economy and Finance', label: 'Prakas 075 on the launch of the Cambodia E-Invoicing System (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/a57a86ff-1c53-481e-a4f0-8b32fe96b6cf/resource/e433f7a7-0bd0-4407-8d58-c5f346be20dd/download/mef_prakas-075_launching-of-cambodia-e-invoicing-system_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 003, mandatory e-invoicing, Phase 1 Step 1 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/dataset/2ff2820c-df65-4d60-aa0f-806c65d82952/resource/d77ab51b-6f54-4960-b947-ffd4a4f2a5a4/download/mef_circular-003_obligation-to-use-e-invoice_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 012, mandatory e-invoicing, Phase 1 Step 2 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/bce86ad2-6baf-456a-b49f-90c0b7b61f26/resource/e8c6b0ce-8f79-427e-a7e2-56f87c89ed1e/download/1756437973985-20250714_circular_to_6_lms_in_q3_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 017, mandatory e-invoicing, Phase 1 Step 3 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/d244f7f4-ef43-43fe-8645-d79483c9b0c3/resource/7d904664-edbe-40fe-8e76-f4b119d6a51c/download/1.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 007, mandatory e-invoicing, Phase 1 Step 4 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/9bdb6142-b119-41c4-b2ae-5bdde281a8f6/resource/549d6645-3232-4fa3-8715-a8f61c79b1f9/download/1.pdf', tier: 'primary' },
    { publisher: 'National Assembly of Cambodia', label: 'Law on Secured Transactions, 2007, English text (PDF, NCDD library copy)', url: 'https://lib.ncdd.gov.kh/storage/app/public/library_backend/CAT_21053_1/2009-SEcured%20transaction-en.pdf', tier: 'primary' },
    { publisher: 'Ministry of Commerce', label: 'Press release on the launch of SETFO 2.0, 18 March 2025 (Open Development Cambodia announcement page)', url: 'https://opendevelopmentcambodia.net/announcements/press-release-official-launch-of-the-secured-transactions-filing-office-2-0-setfo-2-0/', tier: 'primary' },
    { publisher: 'KPMG Cambodia', label: 'Update on the Cambodian National Single Window (CNSW): recent developments and integration status, September 2024', url: 'https://kpmg.com/kh/en/home/insights/2024/09/technical-update0.html', tier: 'commentary' },
  ],
  sourcesAsAt: '2026-11-15',
  faqs: [
    { question: 'What is supply chain finance in Cambodia?', answer: 'Supply chain finance is early payment to a supplier against money a buyer owes it, arranged through a bank, microfinance institution or other financier. The common forms are reverse factoring, where a large buyer confirms its suppliers\' invoices so a financier can pay them early; invoice discounting or factoring, where a supplier sells or pledges its receivables; and dynamic discounting, where a buyer pays early from its own cash in return for a discount. Where the financier is a bank or microfinance institution, it is licensed and supervised by the National Bank of Cambodia.' },
    { question: 'How does CamInvoice enable supply chain finance?', answer: 'CamInvoice, the Ministry of Economy and Finance\'s e-invoicing system, validates each invoice issued through it, and under MEF Prakas 075 a validated invoice is recognised as an original digital record with legal effect, kept for 10 years. That gives a financier a firmer basis for confirming that an invoice is genuine. It does not confirm delivery of the goods or services, and it is not a register of financiers\' claims. In its first phase the system covers invoices from suppliers to designated government ministries.' },
    { question: 'How does a financier protect its claim to an invoice?', answer: 'Through the Law on Secured Transactions of 2007. It applies to sales and assignments of receivables, which it calls accounts, and ranks competing security interests in the same collateral by the first notice filed or the first perfection. Notices are filed at the Secured Transactions Filing Office of the Ministry of Commerce, whose current system, SETFO 2.0, was launched in March 2025. A search of the filing office is how a financier checks whether a receivable is already claimed. Whether a given arrangement must be filed, and how, is a question for Cambodian counsel.' },
  ],
  sections: [
    {
      heading: 'What Supply Chain Finance Is',
      content: 'Supply chain finance turns a supplier\'s receivable, the money a buyer owes it, into cash before the buyer pays. It differs from ordinary lending because the financier relies mainly on the receivable and the buyer\'s willingness and ability to pay, rather than on the supplier\'s balance sheet alone. That makes it useful to small suppliers selling to larger, more creditworthy buyers. Advance rates, fees and tenors depend on the financier, the buyer and the goods, and are not given here.',
      table: {
        caption: 'Common supply chain finance structures',
        headers: ['Structure', 'How it works', 'Who initiates it'],
        rows: [
          ['Reverse factoring', 'The buyer confirms its suppliers\' invoices; a financier pays the suppliers early and is repaid by the buyer at maturity', 'Buyer'],
          ['Factoring / invoice discounting', 'The supplier sells or pledges its receivables to a financier for early payment', 'Supplier'],
          ['Dynamic discounting', 'The buyer pays early from its own cash in return for a discount that shrinks as the due date nears', 'Buyer'],
          ['Purchase order finance', 'A financier funds production against a confirmed purchase order, before an invoice exists', 'Supplier'],
          ['Distributor finance', 'A financier funds a distributor\'s purchases from a manufacturer', 'Manufacturer or distributor'],
        ],
      },
    },
    {
      heading: 'CamInvoice as Evidence of the Invoice',
      content: 'CamInvoice, the Cambodia E-Invoicing System, is the Ministry of Economy and Finance\'s platform for exchanging invoices electronically between sellers and buyers. It was launched on 22 January 2025 by MEF Prakas 075 and is operated by the ministry\'s General Department of Digital Economy. An invoice that passes the system\'s validation is given an identifier and recognised as an original digital record with legal effect, kept in digital form for 10 years.\n\nFor supply chain finance, that addresses part of the trust problem. When a supplier offers an invoice for financing, a validated CamInvoice record gives the financier a firmer basis for confirming that the invoice is genuine and unaltered than a paper or PDF document does. Whether goods were delivered remains the financier\'s check. Scope matters too. The system\'s first phase covers invoices from suppliers to the budget entities of designated ministries, added in steps from fiscal year 2025, so the receivables it validates today are receivables from government. For any wider scope, the MEF\'s current circulars are the place to check.',
    },
    {
      heading: 'Securing the Financier\'s Claim',
      content: 'A genuine invoice is not enough if the same receivable has already been sold or pledged to someone else. Cambodia\'s answer is the Law on Secured Transactions, adopted by the National Assembly on 24 May 2007. It applies to the sale of accounts, which it defines as rights to payment for goods sold or leased or for services rendered, as well as to pledges and assignments that secure an obligation. Rights in accounts can be assigned, including future accounts, and the buyer who owes the money need not be told for the financier\'s interest to attach, be perfected or be enforced.\n\nPriority between competing interests in the same receivable is measured from the first notice filed or the first perfection, whichever is earlier. Notices are filed at the Secured Transactions Filing Office, which the law establishes in the Ministry of Commerce. The Ministry\'s current system, SETFO 2.0, was launched on 18 March 2025 with the Techo Startup Center; it supports registration and access through the CamDigiKey app and online payment, and uses the Cambodia Digital Ledger for notification letters. For a financier, a search of the filing office is the check against double financing that an invoice system alone does not provide. How a particular arrangement should be documented and filed is a matter for Cambodian counsel.',
    },
    {
      heading: 'The National Single Window',
      content: 'The Cambodian National Single Window (CNSW) is a platform for submitting import and export licence, permit and certificate applications to the government electronically, in one place. According to KPMG\'s September 2024 update, it was officially launched on 7 May 2024 after a test run from 2019, was initiated by the General Department of Customs and Excise and the Ministry of Commerce, is connected to the ASEAN Single Window, and links 16 ministries and institutions.\n\nFor trade-related financing, CNSW records concern the permits and documents an exporter or importer has obtained. No primary source read describes financiers having access to CNSW data, or CNSW data confirming shipment or delivery, so this page does not claim either.',
    },
    {
      heading: 'Where the Integration Work Lies',
      content: 'A financier offering supply chain finance in Cambodia has to bring several checks together: confirming an invoice against the supplier\'s CamInvoice record where the invoice falls in scope, searching and filing at the Secured Transactions Filing Office, assessing the buyer, and settling payments in riel or US dollars through its own and its counterparties\' accounts. Each check sits with a different system and owner. Connecting them into a lending workflow is integration work on the financier\'s side; the lending decision, the licence and the funds remain the financier\'s.',
    },
    {
      heading: 'What This Page Does Not Give',
      content: 'Figures often quoted about supply chain finance in Cambodia have not been found in a primary source: the size of the SME trade finance gap, typical advance rates, the volume of supply chain finance in the country, and market projections. They are left out rather than estimated. Anyone relying on such a figure should ask for its source and page.',
    },
  ],
};
