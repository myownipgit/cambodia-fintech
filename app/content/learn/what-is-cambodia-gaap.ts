import { ArticleContent } from '../types';

/*
 * CamDigiKey operator and mandate correction, 2026-11-14 (targeted: the layers
 * table operator cells and one FAQ). Read Sub-Decree 207 (26 July 2023, Open Development
 * Cambodia English text): the MEF leads and manages CamDigiKey (Art. 4), the
 * CamDX operator operates it on the MEF's behalf (Art. 5), and the Ministry of
 * Interior supplies identification data (Art. 6). A private business that uses
 * CamDigiKey eKYC must be a CamDX member and ask the CamDX operator for
 * permission (Arts. 15-16); the account owner consents each time (Art. 18).
 * Removed, not hedged: "operated by the Ministry of Post and
 * Telecommunications", "under the Digital Government Committee", and any NBC
 * mandate requiring CamDigiKey eKYC ("progressively mandating", "phased
 * mandate ... by 2027", "rapidly becoming the mandatory gateway"). No
 * instrument read creates one. Still unsourced and left for the general pass:
 * X-Road as CamDX's technology (stated in neither Sub-Decree 164 nor the CamDX
 * guidebook), the Digital Government Policy 2022-2035 and its targets, and
 * "OAuth 2.0 single sign-on".
 *
 * CamInvoice correction, 2026-11-07 (targeted: CamInvoice sentences, rows and
 * FAQ answers only). Found false or untraceable, removed, not hedged:
 * - CamInvoice attributed to the General Department of Taxation as operator —
 *   FALSE. MEF Prakas 075 (22 January 2025), Art. 4: the MEF's General
 *   Department of Digital Economy (GDDE) manages and operates the system. The
 *   GDT appears in none of the four MEF documents read (Prakas 075; Circulars
 *   003, 012, 017).
 * - "UBL XML", "UBL 2.1", "clearance model", "tax clearance" — no technical
 *   primary could be read (e-invoice.gov.kh and gdde.mef.gov.kh returned 403 on
 *   2026-11-06). Replaced with what Prakas 075 says the system is.
 * - "mandatory CamInvoice compliance for all taxpayers" (as a Digital Government
 *   Policy Phase 2 target) — universality claim with no primary; removed. Phase 1
 *   is business-to-government (suppliers to the budget entities of named
 *   ministries).
 * - "Each repayment generates a CamInvoice receipt" in the MFI example — no
 *   primary puts loan repayments in scope; rescoped.
 * - The E-Invoicing comparison row ("CamInvoice (2025)" / Estonia "E-invoice
 *   mandate (2019)" / Singapore "InvoiceNow (2019)") — the Estonia and Singapore
 *   dates are unsourced; row removed. CamInvoice's launch (22 January 2025) is
 *   stated in the layers section instead.
 * Bar for restoring: read in a fetched primary, recorded in `claims`.
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
export const whatIsCambodiaGaaP: ArticleContent = {
  slug: 'what-is-cambodia-gaap',
  title: 'What is Cambodia\'s Government-as-a-Platform Model?',
  description: 'Cambodia\'s Government-as-a-Platform (GaaP) model is a deliberate four-layer digital architecture spanning identity (CamDigiKey), payments (Bakong), data exchange (CamDX), and invoicing (CamInvoice).',
  type: 'learn',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-14',
  readingTime: 6,
  schema: 'Article',
  relatedSlugs: ['gaap', 'bakong', 'camdigikey', 'camdx', 'caminvoice'],
  lead: 'Cambodia\'s approach to digital infrastructure is fundamentally different from the organic, market-driven evolution seen in most economies. The Royal Government of Cambodia has deliberately architected a Government-as-a-Platform (GaaP) model: a four-layer digital stack where identity (CamDigiKey), payments (Bakong), data exchange (CamDX), and invoicing (CamInvoice) are designed as interoperable public infrastructure. This is not a collection of independent government IT projects. It is a unified platform architecture where each layer amplifies the others, creating network effects that reshape how financial services, commerce, and compliance operate in Cambodia.',
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
    { question: 'What makes Cambodia\'s digital infrastructure different from other ASEAN countries?', answer: 'Most ASEAN countries built digital payment systems, identity platforms, and data exchanges independently over decades. Cambodia designed all four layers simultaneously as a unified stack under the Digital Government Policy 2022-2035. This deliberate architecture means the layers are interoperable by design, not retrofitted. A CamDigiKey identity verification can trigger a CamDX data query and initiate a Bakong payment in a single workflow.' },
    { question: 'Is Cambodia\'s GaaP model based on Estonia\'s?', answer: 'Yes, directly. Cambodia adopted Estonia\'s X-Road technology for CamDX and studied Estonia\'s digital identity and e-governance architecture extensively. However, Cambodia adapted the model for its dual-currency economy, mobile-first population, and specific regulatory requirements. The Bakong CBDC layer has no direct Estonian equivalent, as Estonia uses the euro.' },
    { question: 'How does GaaP affect foreign investment in Cambodia?', answer: 'GaaP creates both opportunities and obligations. Foreign enterprises benefit from instant digital onboarding (CamDigiKey), real-time regulatory compliance (CamDX), low-cost payments (Bakong), and electronic invoicing (CamInvoice). Which connections are obligatory differs by platform: CamInvoice is mandatory in phases for suppliers to designated ministries, CamDX membership is by application for private businesses, and using CamDigiKey eKYC requires CamDX membership and the operator\'s permission. CamFinTech prepares the readiness and compliance work for these connections and builds the client side of the integration; the approval decisions rest with each platform\'s operator and regulator.' },
  ],
  sections: [
    {
      heading: 'Deliberate Architecture vs Organic Growth',
      content: 'In most countries, digital infrastructure evolved organically. Payment systems were built by banks, identity platforms by government agencies, and data exchange by market forces, often with limited interoperability. The United Kingdom\'s Open Banking initiative, for example, was a retrofit imposed on existing bank infrastructure. India\'s UPI similarly emerged after decades of fragmented payment development.\n\nCambodia took a different path. Starting from a lower base of legacy infrastructure, the government designed CamDigiKey, Bakong, CamDX, and CamInvoice as components of a single platform architecture. Each layer has defined API interfaces to the others. This deliberate approach means Cambodia avoided the integration debt that plagues more developed economies and created a digital stack that is internally consistent from identity through to tax compliance.',
    },
    {
      heading: 'The Four Platform Layers',
      content: 'Cambodia\'s GaaP model operates as four distinct but interconnected infrastructure layers. Each layer addresses a specific function of digital governance and commerce, and each provides APIs that the other layers consume. The identity layer (CamDigiKey) answers "who are you?" The payment layer (Bakong) answers "how do you transact?" The data exchange layer (CamDX) answers "what is your verified status?" And the invoicing layer (CamInvoice) answers "what did you buy and sell?"\n\nTogether, these four layers create a complete digital operating system for Cambodia\'s economy. A single commercial transaction can touch all four: the buyer authenticates with CamDigiKey, the payment settles on Bakong, the seller\'s compliance status is verified via CamDX, and the invoice is validated by CamInvoice.',
      table: {
        caption: 'Cambodia\'s Four GaaP Infrastructure Layers',
        headers: ['Layer', 'Platform', 'Function', 'Operator', 'Technology Foundation'],
        rows: [
          ['Identity', 'CamDigiKey', 'Digital identity and eKYC', 'Ministry of Economy and Finance; operated by the CamDX operator (Sub-Decree 207)', 'Biometric AI, OAuth 2.0'],
          ['Payments', 'Bakong', 'CBDC and real-time settlement', 'National Bank of Cambodia', 'Hyperledger Iroha blockchain'],
          ['Data Exchange', 'CamDX', 'Secure inter-agency data sharing', 'Ministry of Economy and Finance; CamDX Operator (Sub-Decree 164)', 'X-Road (Estonia)'],
          ['Invoicing', 'CamInvoice', 'E-invoicing, mandatory in phases from 2025', 'Ministry of Economy and Finance (General Department of Digital Economy)', 'State e-invoice exchange platform (Prakas 075, 2025)'],
        ],
      },
    },
    {
      heading: 'Digital Government Policy 2022-2035',
      content: 'The Royal Government of Cambodia\'s Digital Government Policy 2022-2035 is the master plan that governs the GaaP architecture. The policy sets specific targets for digital identity coverage, payment system adoption, data exchange connectivity, and e-invoicing compliance over a 13-year horizon, divided into three phases.\n\nPhase 1 (2022-2025) focuses on building and launching the four core platforms. Phase 2 (2025-2030) targets universal adoption, with 70% digital identity penetration, and full KHQR merchant coverage. Phase 3 (2030-2035) aims for an AI-driven digital government with predictive services, automated compliance, and full ASEAN digital integration. The policy is backed by over USD 300 million in combined public and development partner funding.',
    },
    {
      heading: 'How the Layers Interact',
      content: 'The power of Cambodia\'s GaaP model lies in layer interaction. Consider a practical example: a microfinance institution onboarding a new borrower. The borrower authenticates via CamDigiKey (identity layer). The MFI queries CamDX to verify tax registration and check for existing obligations (data layer). The loan is disbursed via Bakong (payment layer). Repayments are collected via KHQR standing orders. Where the lender falls within CamInvoice\'s scope, its invoices pass through the invoicing layer.\n\nThis entire workflow, which traditionally involved branch visits, paper documents, and manual processing over days or weeks, executes digitally in minutes. Each layer provides verified, auditable data to the next. No manual re-entry, no document scanning, no reconciliation gaps. This is the compounding efficiency that deliberate platform architecture creates.',
    },
    {
      heading: 'Comparison with Estonia and Singapore',
      content: 'Cambodia\'s GaaP model draws most directly from Estonia, which pioneered X-Road in 2001 and built a comprehensive e-governance stack over two decades. Cambodia compressed this timeline by adopting X-Road technology directly for CamDX and learning from Estonia\'s implementation experience.\n\nSingapore offers a different comparison point. Singapore\'s GovTech agency built a platform stack including SingPass (identity), PayNow (payments), and APEX (data exchange), but these evolved semi-independently over many years. Cambodia\'s advantage is designing all layers simultaneously, but its challenge is deploying them in a developing economy with lower digital literacy. The table below summarizes key architectural differences.',
      table: {
        caption: 'GaaP Architecture Comparison: Cambodia vs Estonia vs Singapore',
        headers: ['Dimension', 'Cambodia', 'Estonia', 'Singapore'],
        rows: [
          ['Identity Platform', 'CamDigiKey (2023)', 'e-ID / Mobile-ID (2002)', 'SingPass (2003)'],
          ['Payment Layer', 'Bakong CBDC (2020)', 'Euro (ECB)', 'PayNow (2017)'],
          ['Data Exchange', 'CamDX / X-Road (2023)', 'X-Road (2001)', 'APEX (2017)'],
          ['Architecture Approach', 'Simultaneous design', 'Sequential over 20 years', 'Sequential over 15 years'],
          ['GDP per capita (2024)', '~USD 1,900', '~USD 30,000', '~USD 65,000'],
        ],
      },
    },
    {
      heading: 'Investment Opportunities at Layer Intersections',
      content: 'The most valuable business opportunities in Cambodia\'s digital economy exist at the intersections between GaaP layers, not within any single layer. Supply chain finance sits at the intersection of CamInvoice (verified invoices) and Bakong (instant settlement): an invoice validated by CamInvoice is recognised as an original digital record and kept for 10 years, which is the property invoice discounting needs. Its reach is set by the system\'s scope, which in its first phase covers suppliers to designated ministries. Compliance-as-a-service sits at the intersection of CamDigiKey (identity) and CamDX (data verification): automated KYC and ongoing monitoring become API-first products.\n\nEmbedded insurance sits at the intersection of Bakong (payment triggers) and CamDX (risk data): insurance can be attached to transactions at the point of payment with instant underwriting. These cross-layer opportunities are structurally unique to Cambodia\'s deliberate architecture. In markets with fragmented infrastructure, building these products requires stitching together multiple proprietary APIs. In Cambodia, the government has built the connective tissue.',
    },
    {
      heading: 'Implications for Enterprise Strategy',
      content: 'For enterprises operating or investing in Cambodia, the GaaP model demands a platform-native strategy. Companies that treat CamDigiKey, Bakong, CamDX, and CamInvoice as optional add-ons will face increasing friction. Companies that orient their operations around these platforms will benefit from lower costs, faster onboarding, and regulatory alignment.\n\nThe strategic question is not whether to integrate, but how deeply and how quickly. A phased plan, taking the highest-impact platform connections first and adding others as each layer matures, is usually more practical than integrating everything at once.',
    },
    {
      heading: 'Where CamFinTech\'s Work Sits',
      content: 'CamFinTech is a fee-only regulatory and compliance practice in Phnom Penh. It prepares institutions to meet the standard for connecting to the rails (the readiness assessment, the application work, and the compliance programme that holds afterwards) and builds the client side of the integration, or engages a platform specialist as a disclosed sub-contract.\n\nApproval decisions belong to each rail\'s operator and regulator, and the client is the applicant of record. CamFinTech does not host or transmit client transaction traffic, operates no rail and holds no client funds. Its value is process competence, not access.',
    },
  ],
};
