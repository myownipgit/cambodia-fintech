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

export const supplyChainFinanceCambodia: ArticleContent = {
  slug: 'supply-chain-finance-cambodia',
  title: 'How Does Supply Chain Finance Work in Cambodia?',
  description: 'An in-depth guide to supply chain finance in Cambodia, covering CamInvoice-validated invoices for invoice financing, trade finance gaps, SME credit access, National Single Window customs data, bank partnerships, and the SCF middleware approach.',
  type: 'learn',
  cluster: 'investment',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-07',
  readingTime: 6,
  schema: 'Article',
  relatedSlugs: ['supply-chain-finance', 'caminvoice', 'bakong'],
  lead: 'Supply chain finance (SCF) represents one of the largest untapped opportunities in Cambodia\'s financial ecosystem. With an estimated $2.5 billion trade finance gap affecting small and medium enterprises, the Kingdom\'s unique government digital infrastructure -- particularly CamInvoice\'s verified invoice data and the National Single Window\'s customs records -- creates a foundation for SCF products that simply do not exist in most emerging markets. By connecting trusted government data to bank lending decisions, Cambodia is positioned to leapfrog traditional trade finance models and deliver working capital solutions to the SMEs that power its $30 billion economy.',
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
    { question: 'What is supply chain finance in Cambodia?', answer: 'Supply chain finance in Cambodia refers to financing solutions that leverage verified commercial data from government systems like CamInvoice and the National Single Window to provide working capital to SMEs. Unlike traditional bank lending, SCF uses invoice and trade data as collateral proxies, enabling faster approvals and lower interest rates for businesses in Cambodia\'s supply chains.' },
    { question: 'How does CamInvoice enable supply chain finance?', answer: 'CamInvoice, the Ministry of Economy and Finance\'s e-invoicing system, validates each invoice issued through it, and under MEF Prakas 075 a validated invoice is recognised as an original digital record with legal effect, kept for 10 years. That gives a financier a firmer basis for confirming that an invoice is genuine. It does not confirm delivery of the goods or services, and the documents reviewed describe no register of pledged invoices, so those checks remain the financier\'s. In its first phase the system covers invoices from suppliers to designated government ministries.' },
    { question: 'Can foreign companies access supply chain finance in Cambodia?', answer: 'Yes. Foreign companies operating in Cambodia can participate in SCF programs through licensed banks. Cross-border supply chain finance is also emerging through Bakong\'s international corridors. Where the invoices being financed fall within CamInvoice\'s scope, an arrangement can rely on the system\'s validated records; the lending itself sits within NBC requirements and its tax treatment with the GDT\'s.' },
  ],
  sections: [
    {
      heading: 'The Trade Finance Gap in Cambodia',
      content: 'Cambodia\'s SME sector faces a persistent and well-documented trade finance gap. The Asian Development Bank estimates this gap at $2.5 billion, meaning that billions of dollars in legitimate trade transactions go unfinanced each year. SMEs represent approximately 70% of rejected trade finance applications, primarily because they lack the formal documentation, audited financial statements, and credit histories that traditional banks require.\n\nThis gap has real economic consequences. Without working capital financing, garment factories cannot accept larger orders, rice millers cannot pre-purchase harvest volumes, and construction suppliers cannot extend credit to developers. The gap is not caused by insufficient bank liquidity -- Cambodia\'s banking sector is well-capitalized -- but by the information asymmetry between SME borrowers and institutional lenders. Government digital infrastructure is now closing that gap.',
    },
    {
      heading: 'CamInvoice as the Data Foundation',
      content: 'CamInvoice, the Cambodia E-Invoicing System, is the Ministry of Economy and Finance\'s platform for exchanging invoices electronically between sellers and buyers. It was launched on 22 January 2025 by MEF Prakas 075 and is operated by the ministry\'s General Department of Digital Economy. An invoice that passes the system\'s validation is given an identifier and recognised as an original digital record with legal effect, kept in digital form for 10 years.\n\nFor supply chain finance, that addresses part of the trust problem. When an SME offers an invoice for financing, a validated CamInvoice record gives the financier a firmer basis for confirming that the invoice is genuine and unaltered than a paper or PDF document does. Whether goods were delivered, and whether the same invoice has been pledged elsewhere, remain the financier\'s checks: the documents reviewed describe no register of pledged invoices. Scope matters too. The system\'s first phase covers invoices from suppliers to the budget entities of designated ministries, added in steps from fiscal year 2025, so the receivables it validates today are receivables from government. For any wider scope, the MEF\'s current circulars are the place to check.',
    },
    {
      heading: 'How SCF Products Work in Practice',
      content: 'Supply chain finance in Cambodia operates through several product structures, each leveraging government data differently. Reverse factoring allows large buyers to approve invoices from their SME suppliers, enabling banks to advance payment at lower rates. Dynamic discounting offers early payment in exchange for small discounts. Invoice discounting allows SMEs to sell receivables directly to financiers.\n\nThe key differentiator in Cambodia is data verification. In a typical SCF transaction, the SME supplier delivers goods to a buyer and issues the invoice — through CamInvoice, where it falls within the system\'s scope. The SCF platform checks it against the supplier\'s validated record and, for import/export transactions, National Single Window data. The bank advances 80-90% of the invoice value to the supplier within 24-48 hours. When the buyer pays at maturity, the bank deducts its financing fee and remits the balance.',
      table: {
        caption: 'SCF Product Types Available in Cambodia',
        headers: ['Product', 'How It Works', 'Typical Advance Rate', 'Data Source Used', 'Best For'],
        rows: [
          ['Reverse Factoring', 'Buyer approves invoice, bank pays supplier early', '90-95%', 'CamInvoice + Buyer Confirmation', 'Large buyer supply chains'],
          ['Invoice Discounting', 'SME sells receivables at discount', '80-85%', 'CamInvoice verification', 'Independent SMEs'],
          ['Dynamic Discounting', 'Early payment for sliding discount', '98-100%', 'CamInvoice + ERP data', 'Cash-rich buyers'],
          ['Purchase Order Finance', 'Financing against confirmed POs', '70-80%', 'CamInvoice + NSW customs', 'Export manufacturers'],
          ['Distributor Finance', 'Working capital for distributors', '75-85%', 'CamInvoice + sales history', 'FMCG distribution chains'],
        ],
      },
    },
    {
      heading: 'National Single Window and Customs Data',
      content: 'Cambodia\'s National Single Window (NSW), operated by the General Department of Customs and Excise, provides a second critical data layer for supply chain finance. The NSW consolidates import/export documentation, customs declarations, duty payments, and cargo tracking into a single digital platform.\n\nFor cross-border supply chain finance, NSW data enables financiers to verify that goods have actually been shipped, cleared customs, and arrived at their destination. This is particularly valuable for Cambodia\'s garment export sector, which accounts for approximately 75% of total exports. When combined with CamInvoice data, NSW records create an end-to-end audit trail from purchase order to customs clearance to invoice issuance, dramatically reducing the documentation burden on SME exporters seeking trade finance.',
    },
    {
      heading: 'Bank and MFI Partnerships',
      content: 'Several Cambodian banks and microfinance institutions have begun developing SCF products, though the market remains in early stages compared to the opportunity size.\n\nMicrofinance institutions, which serve the majority of Cambodia\'s rural SMEs, are emerging as important SCF distribution channels. Their existing customer relationships and local market knowledge, combined with the invoices their customers issue through CamInvoice, position them to underwrite supply chain transactions that commercial banks cannot efficiently reach. The challenge remains building the technology middleware that connects government data APIs to bank underwriting systems.',
    },
    {
      heading: 'The Technology Infrastructure Challenge',
      content: 'Despite the availability of government data, connecting government data — CamInvoice-validated invoices and NSW records — to bank lending platforms remains a significant technical challenge. Most Cambodian banks operate legacy core banking systems that cannot natively consume real-time API data. The data formats, authentication protocols, and validation logic required to securely query government systems and incorporate results into credit decisions require specialized middleware.\n\nAdditionally, SCF platforms must handle multi-currency settlement (KHR and USD), reconcile across Bakong payment rails, maintain audit trails for NBC regulatory reporting, and implement anti-fraud algorithms that detect duplicate financing of the same invoice. The technical complexity explains why the $2.5 billion trade finance gap persists despite the data availability -- the missing piece is the integration layer between government infrastructure and financial institution systems.',
    },
{
      heading: 'Market Opportunity and Growth Outlook',
      content: 'The addressable market for supply chain finance in Cambodia is substantial and growing. Cambodia\'s total trade volume exceeded $50 billion in 2025, with garments, construction materials, agricultural products, and electronics comprising the largest categories. If even 10% of eligible trade transactions were financed through SCF products, the annual financing volume would exceed $5 billion.\n\nGlobal SCF volumes reached $2.1 trillion in 2024, with Asia-Pacific accounting for 45% of flows, yet Cambodia captures less than 0.1% of regional activity. This gap represents the opportunity. Early movers in this space will benefit from data network effects that create durable competitive advantages.',
    },
  ],
};
