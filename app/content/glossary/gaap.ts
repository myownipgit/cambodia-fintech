import { ArticleContent } from '../types';

/*
 * CamInvoice correction, 2026-11-07 (targeted: CamInvoice sentences and rows
 * only). Found false or untraceable, removed, not hedged:
 * - CamInvoice attributed to the General Department of Taxation as operator —
 *   FALSE. MEF Prakas 075 (22 January 2025), Art. 4: the MEF's General
 *   Department of Digital Economy (GDDE) manages and operates the system. The
 *   GDT appears in none of the four MEF documents read (Prakas 075; Circulars
 *   003, 012, 017).
 * - "UBL XML", "UBL 2.1", "clearance model", "tax clearance" — no technical
 *   primary could be read (e-invoice.gov.kh and gdde.mef.gov.kh returned 403 on
 *   2026-11-06). Replaced with what Prakas 075 says the system is.
 * - "creating verified, tamper-proof records of business transactions" —
 *   overstated; replaced with Prakas 075 Art. 6 (validated invoice = original
 *   digital record, kept 10 years).
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
export const gaap: ArticleContent = {
  slug: 'gaap',
  title: 'What is Government-as-a-Platform in Cambodia?',
  description: 'Cambodia\'s Government-as-a-Platform (GaaP) model integrates CamDigiKey, Bakong, CamDX, and CamInvoice into a unified national digital infrastructure stack.',
  type: 'glossary',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-07',
  readingTime: 3,
  schema: 'DefinedTerm',
  relatedSlugs: ['bakong', 'camdigikey', 'camdx', 'caminvoice'],
  lead: 'Government-as-a-Platform (GaaP) is Cambodia\'s strategic approach to digital infrastructure where the government builds foundational technology layers that the private sector builds upon. Cambodia\'s GaaP model integrates four core platforms: CamDigiKey (digital identity), Bakong (instant payments), CamDX (data exchange), and CamInvoice (e-invoicing).',
  // Claims removed 2026-08-31. This array previously carried figures attributed
  // to named institutional reports with no URL, access date or page reference.
  // A verified sample was wrong more often than not — including a Cambodian FATF
  // mutual evaluation that never took place, and citations to bodies that do not
  // exist under the names given. Restore an entry only when its figure has been
  // read in a fetched primary, on the same evidence bar as app/content/regulatory,
  // and record where it was read. See vault ADR-007.
  claims: [],
  sources: [
    { publisher: 'Digital Economy and Business Committee', label: 'Official site (home page)', url: 'https://digitaleconomy.gov.kh/en', tier: 'primary' },
    { publisher: 'CamDX', label: 'Cambodia Data Exchange, official site (home page)', url: 'https://camdx.gov.kh', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Bakong, official site (home page)', url: 'https://bakong.nbc.gov.kh', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Prakas 075 on the launch of the Cambodia E-Invoicing System (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/a57a86ff-1c53-481e-a4f0-8b32fe96b6cf/resource/e433f7a7-0bd0-4407-8d58-c5f346be20dd/download/mef_prakas-075_launching-of-cambodia-e-invoicing-system_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 003, mandatory e-invoicing, Phase 1 Step 1 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/dataset/2ff2820c-df65-4d60-aa0f-806c65d82952/resource/d77ab51b-6f54-4960-b947-ffd4a4f2a5a4/download/mef_circular-003_obligation-to-use-e-invoice_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 012, mandatory e-invoicing, Phase 1 Step 2 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/bce86ad2-6baf-456a-b49f-90c0b7b61f26/resource/e8c6b0ce-8f79-427e-a7e2-56f87c89ed1e/download/1756437973985-20250714_circular_to_6_lms_in_q3_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 017, mandatory e-invoicing, Phase 1 Step 3 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/d244f7f4-ef43-43fe-8645-d79483c9b0c3/resource/7d904664-edbe-40fe-8e76-f4b119d6a51c/download/1.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 007, mandatory e-invoicing, Phase 1 Step 4 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/9bdb6142-b119-41c4-b2ae-5bdde281a8f6/resource/549d6645-3232-4fa3-8715-a8f61c79b1f9/download/1.pdf', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-06',
  faqs: [
    { question: 'What is Government-as-a-Platform in the Cambodia context?', answer: 'Government-as-a-Platform (GaaP) in Cambodia refers to the deliberate strategy of building interconnected government digital infrastructure that functions as a platform for private sector innovation. Rather than each ministry building isolated IT systems, Cambodia has created four foundational layers: CamDigiKey for identity, Bakong for payments, CamDX for data exchange, and CamInvoice for invoicing. Private businesses build products and services on top of these government-provided platforms.' },
    { question: 'How is Cambodia\'s GaaP approach different from other countries?', answer: 'Cambodia\'s GaaP model is distinctive because the infrastructure was designed as an integrated stack from the outset rather than evolving organically. CamDigiKey, Bakong, CamDX, and CamInvoice were planned to interoperate. This contrasts with countries where digital identity, payments, and data exchange evolved separately and require complex retrofitting to work together. Cambodia\'s deliberate approach creates compounding network effects.' },
    { question: 'What investment opportunities does GaaP create?', answer: 'Cambodia\'s GaaP infrastructure creates three major investment categories: supply chain finance enabled by CamInvoice\'s verified trade data and Bakong settlement, compliance-as-a-service platforms built on CamDX and CamInvoice integration, and embedded financial products distributed through KHQR payment rails and authenticated via CamDigiKey. CamFinTech navigates the regulatory approvals and compliance programmes that let investors and operators participate in these opportunities — we never operate the rails or hold client funds.' },
  ],
  sections: [
    {
      heading: 'The Four Platform Layers',
      content: 'Cambodia\'s GaaP architecture consists of four interconnected platforms, each serving a distinct function in the digital economy stack. CamDigiKey provides the identity layer, enabling verified digital authentication for citizens and businesses. Bakong provides the payment layer, enabling real-time settlement in both KHR and USD via the KHQR protocol.\n\nCamDX provides the data exchange layer, enabling secure information sharing between government and private sector through X-Road technology. CamInvoice, operated by the Ministry of Economy and Finance, provides the commercial documentation layer: an invoice it has validated is recognised as an original digital record and kept for 10 years. Together, these four platforms create a comprehensive digital infrastructure where identity, payments, data, and commerce are natively integrated.',
      table: {
        caption: 'Cambodia\'s Government-as-a-Platform Stack',
        headers: ['Platform', 'Function', 'Operator', 'Technology Base'],
        rows: [
          ['CamDigiKey', 'Digital Identity & eKYC', 'Ministry of Economy and Finance', 'Biometric Verification'],
          ['Bakong', 'Instant Payments & CBDC', 'National Bank of Cambodia', 'Hyperledger Iroha'],
          ['CamDX', 'Data Exchange', 'Ministry of Economy and Finance', 'Estonia X-Road'],
          ['CamInvoice', 'E-Invoicing', 'Ministry of Economy and Finance (General Department of Digital Economy)', 'State e-invoice exchange platform'],
        ],
      },
    },
    {
      heading: 'Deliberate Design vs. Organic Growth',
      content: 'What distinguishes Cambodia\'s approach is the deliberate, top-down design of the entire stack. In many developing and developed nations, digital identity systems, payment infrastructure, and data exchange platforms evolved independently over decades, resulting in fragmented systems that require expensive integration efforts.\n\nCambodia\'s government designed CamDigiKey, Bakong, CamDX, and CamInvoice as components of a single vision. The platforms share common standards, use CamDX as the interoperability backbone, and reference CamDigiKey as the unified identity anchor. This architectural coherence reduces integration complexity for businesses and creates compounding network effects as each platform reinforces the others.',
    },
    {
      heading: 'Investment Opportunities at Infrastructure Intersections',
      content: 'The most valuable opportunities in Cambodia\'s digital economy emerge at the intersections of GaaP platforms rather than within any single layer. Supply chain finance becomes viable when CamInvoice provides verified receivables data and Bakong enables instant disbursement. Embedded insurance becomes distributable when KHQR provides the payment touchpoint and CamDigiKey provides the identity verification.\n\nCompliance-as-a-service platforms emerge when CamDX connects tax data, identity records, and business registrations into automated compliance workflows. For strategic investors, understanding these platform intersections is essential to identifying the highest-value opportunities in Cambodia\'s rapidly maturing digital economy.',
    },
    {
      heading: 'Where CamFinTech\'s Work Sits',
      content: 'CamFinTech is a fee-only regulatory and compliance practice in Phnom Penh. It prepares institutions to meet the standard for connecting to the rails (the readiness assessment, the application work, and the compliance programme that holds afterwards) and builds the client side of the integration, or engages a platform specialist as a disclosed sub-contract.\n\nApproval decisions belong to each rail\'s operator and regulator, and the client is the applicant of record. CamFinTech does not host or transmit client transaction traffic, operates no rail and holds no client funds. Its value is process competence, not access.',
    },
  ],
};
