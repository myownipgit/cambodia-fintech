import { ArticleContent } from '../types';

/*
 * Figures removed 2026-11-06 (busiest-page-first pass over unsourced figures).
 *
 * This article carried 153 quantified figures and five tables. One survived,
 * because it was read in a fetched primary: the MISTI census figures in
 * `claims` below. Everything else was removed, not hedged. What the checks
 * found, so nobody restores these from git:
 *
 * - "e-Conomy SEA 2024 estimates Cambodia's internet economy at USD 3.1bn"
 *   is a false citation. The 2024 report covered six markets (ID, MY, PH,
 *   SG, TH, VN); Cambodia was first included in the 2025 edition.
 * - "The ADB estimates Cambodia's SME credit gap at USD 2.8 billion" — no ADB
 *   figure was found. The nearest is an undated USD 3.7bn from AVPN, which is
 *   not an ADB number.
 * - "World Bank 2023 Enterprise Survey: 12% of SMEs use accounting software"
 *   — the survey exists (519 firms, fielded Apr–Oct 2023) but that indicator
 *   is not among its published results. Untraceable.
 * - "99.8% of all businesses ... 58% of GDP" was close but misstated: the
 *   primary says 99.8% of non-agricultural economic entities are MSMEs. It is
 *   restated correctly below. The size table ("~520,000 registered
 *   businesses, 97% micro") conflicts with the same primary, which says only
 *   6.5% of micro enterprises are formally registered.
 * - "Global Innovation Index digital skills sub-index, 108th" — the GII has no
 *   such sub-index.
 * - FAQ answers asserting readiness rates "based on our assessment framework"
 *   described an assessment the firm has never run. Removed as a first-person
 *   evidence claim, not merely as an unsourced figure.
 * - Named-bank credit-scoring pilot results, a named local accounting product,
 *   a named ministry training programme with a funding figure, and a
 *   three-segment market sizing attributed to CamFinTech — all unsourced.
 * - CamInvoice phase thresholds and dates (large/medium/small taxpayer tiers).
 *   No primary sets any B2B scope, turnover threshold, tier or SME date.
 *
 * Corrected again 2026-11-07, after the site-wide CamInvoice pass (cc9fa22):
 * this file's first rewrite still named the GDT as CamInvoice's operator and
 * phased it by taxpayer size ("began with large taxpayers", "the GDT's rollout
 * is phased", "sending it to the GDT", the "Readiness by Compliance Tier"
 * section). All FALSE or unsupported. CamInvoice is an MEF system operated by
 * its General Department of Digital Economy (Prakas 075, 22 January 2025,
 * Art. 4); Phase 1 is business-to-government, ministry by ministry, in steps
 * set by MEF circulars. Do not state a fixed step count. The size-tier section
 * was rewritten as readiness by business size with no mandate timetable. The
 * Prakas 075 source below was fetched and read by the parallel CamInvoice pass
 * on 2026-11-06 (see learn/what-is-caminvoice.ts, which carries the full MEF
 * source set); this file relies on it only for the operator and launch date.
 * The GDT is still named where the subject is tax registration.
 *
 * Bar for restoring a figure: read in a fetched primary, recorded in `claims`
 * or `sources` with where it was read — the same bar as app/content/regulatory.
 */
export const smeDigitalReadiness: ArticleContent = {
  slug: 'sme-digital-readiness',
  title: 'Cambodia SME Digital Readiness Assessment: Gaps and Opportunities',
  description: 'An assessment of Cambodia\'s SME digital readiness across payment acceptance, accounting and invoicing, social and platform commerce, access to credit, and workforce skills — and what each gap would mean as CamInvoice, now required of suppliers to government ministries, is adopted more widely.',
  type: 'insights',
  cluster: 'investment',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-07',
  readingTime: 6,
  schema: 'Article',
  relatedSlugs: ['caminvoice', 'supply-chain-finance', 'compliance-as-a-service'],
  lead: 'Micro, small and medium enterprises are most of Cambodia\'s economy. The Ministry of Industry, Science, Technology and Innovation (MISTI), drawing on the 2022 Economic Census, classifies 99.8% of the country\'s non-agricultural economic entities as MSMEs, accounting for 58% of employment and 58% of GDP — and notes that only a small fraction of micro enterprises are formally registered. Their digital readiness is uneven. Payment acceptance has moved fastest, carried by KHQR; accounting, invoicing and credit have moved much more slowly. CamInvoice, the e-invoicing system the Ministry of Economy and Finance (MEF) launched in January 2025, is so far required only of businesses invoicing designated government ministries. As it is adopted more widely and the payment rails mature, the distance between businesses that are digitally prepared and those that are not becomes a practical question rather than a statistical one. This assessment looks at that distance across five dimensions: payment acceptance, accounting and invoicing, commerce channels, access to credit, and workforce skills. It deliberately carries no survey figures of its own: published, Cambodia-specific measures of most of these dimensions are scarce, and where a figure could not be traced to a primary source it has been left out.',
  claims: [
    { stat: 'The 2022 Cambodia Economic Census recorded 753,670 non-agricultural economic entities, of which 99.8% are MSMEs. MSMEs account for 58% of employment and 58% of GDP. Only 6.5% of micro enterprises are formally registered.', source: 'Ministry of Industry, Science, Technology and Innovation (MISTI), General Department of SME and Handicraft, "The Current Situation of SMEs in Cambodia", slide 4 (presentation dated 2 December 2024, published by UN DESA)', year: '2022', url: 'https://sdgs.un.org/sites/default/files/2024-12/Session%206%20Vanthou%20Presentation.pdf' },
  ],
  sources: [
    { publisher: 'Ministry of Industry, Science, Technology and Innovation (MISTI)', label: '"The Current Situation of SMEs in Cambodia" (PDF presentation, 2 December 2024, UN DESA copy)', url: 'https://sdgs.un.org/sites/default/files/2024-12/Session%206%20Vanthou%20Presentation.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Prakas 075 on the launch of the Cambodia E-Invoicing System (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/a57a86ff-1c53-481e-a4f0-8b32fe96b6cf/resource/e433f7a7-0bd0-4407-8d58-c5f346be20dd/download/mef_prakas-075_launching-of-cambodia-e-invoicing-system_kh_2025.pdf', tier: 'primary' },
  ],
  faqs: [
    { question: 'How ready are Cambodian SMEs for CamInvoice?', answer: 'Readiness varies with size. The first phase of CamInvoice, as the MEF\'s circulars set it out, covers suppliers invoicing designated government ministries, added ministry by ministry; the documents published so far set no date or threshold for invoicing between private businesses. For a business preparing anyway, the obstacle is rarely the e-invoicing interface but what sits behind it: many micro and small enterprises keep paper or informal records, so readiness means changing how transactions are recorded, not only installing software. No published survey measures CamInvoice readiness across the SME population, so this assessment does not put a number on it.' },
    { question: 'What are the biggest barriers to SME digitization in Cambodia?', answer: 'Three recur: digital skills beyond social media and messaging; the cost of business software relative to small-business margins; and an unclear return on the effort, especially where customers still pay in cash. Most SMEs are micro enterprises, and most micro enterprises are not formally registered (MISTI, 2022 Economic Census), so for many the first step is formalisation rather than technology.' },
    { question: 'Where does the SME digitization gap create opportunities?', answer: 'Three areas follow from the gaps: services that combine CamInvoice integration with basic accounting and tax filing for businesses too small to build their own; lending that uses invoice and payment data rather than land title as the basis for credit; and Khmer-language business software and training. This assessment does not size these markets — no sourced figure supports a number.' },
  ],
  sections: [
    {
      heading: 'SME Landscape by Size and Sector',
      content: 'Cambodia\'s enterprise base is dominated by micro enterprises. MISTI\'s reading of the 2022 Economic Census counts 753,670 non-agricultural economic entities, 99.8% of them MSMEs, and notes that only 6.5% of micro enterprises are formally registered. Most are in services rather than industry. That shape matters for everything below: digital readiness tracks enterprise size and formality closely, and a policy or product designed for registered, medium-sized firms reaches only a small part of the base.\n\nSector shapes readiness too. Trade and food service face customers who increasingly expect to pay by QR code, so payment acceptance moves first there. Manufacturers that supply international buyers are pushed towards structured accounting by their customers\' requirements. Agriculture-linked businesses, though economically significant, sit furthest from digital tools of every kind.',
    },
    {
      heading: 'Payment Digitization Readiness',
      content: 'Payment acceptance is the most advanced dimension, largely because of KHQR: a single national QR standard means a small merchant can accept payment from customers of any participating institution with a printed code. Adoption is visibly highest in Phnom Penh and lower in secondary cities and rural market towns.\n\nAccepting KHQR is not the same as being digitized. Many merchants that display a QR code still take most of their revenue in cash, using digital payment when a customer asks for it. Acceptance infrastructure is therefore necessary but not sufficient; the shift in how a business actually runs depends on customer behaviour and on whether digital receipts feed into anything the merchant uses — bookkeeping, credit, or tax.',
    },
    {
      heading: 'Accounting and Invoicing System Adoption',
      content: 'Accounting is the critical gap for CamInvoice. Large enterprises, especially those in international supply chains, generally keep structured books and issue structured invoices. Below that tier, spreadsheets, paper records and informal receipts are common, and many transactions between small businesses carry little documentation at all.\n\nThat is why CamInvoice readiness is a process change before it is a software change. A business that records sales in a notebook must first capture each transaction in a form a system can read; only then does submitting it to CamInvoice become a technical question. Readiness programmes that start with the e-invoicing interface, rather than the record-keeping behind it, tend to underestimate the work.',
    },
    {
      heading: 'E-Commerce Participation and Social Commerce',
      content: 'Much of Cambodia\'s online selling happens on social channels — Facebook, Telegram and Instagram — rather than on formal marketplaces, with payment settled by KHQR transfer or cash on delivery. This layer is largely invisible in official statistics, but it is where many small merchants first sell digitally.\n\nIt is both a challenge and an opening. It is informal, hard to tax and offers limited consumer protection; it is also a large population of merchants already comfortable with digital payment, for whom a move to structured invoicing and platform tools is a shorter step than for a cash-only shop.',
    },
    {
      heading: 'Access to Digital Credit and the Financing Gap',
      content: 'Low digital readiness and limited access to credit reinforce each other. Formal lending to small businesses in Cambodia has traditionally been secured on collateral, typically land title, and microfinance institutions serve much of the segment that banks do not reach. A business without collateral and without a documented trading history has little to show a lender.\n\nInvoice and payment data could change that. A merchant whose sales run through KHQR and whose invoices are recorded in CamInvoice has, for the first time, a verifiable revenue history — the raw material for cash-flow-based lending. The linkage between those data and lenders\' credit decisions is not yet in place at scale; where it is built, it should be built with the merchant\'s consent and inside the data-protection requirements that apply.',
    },
    {
      heading: 'Digital Skills and Workforce Readiness',
      content: 'Skills are a binding constraint. Using a smartphone for social media and messaging does not translate directly into confidence with accounting or invoicing software, and the gap is widest among older owners of long-established micro businesses. Younger owners adopt business tools more readily, so time will narrow the gap — but not on the schedule a compliance mandate sets.\n\nTraining is most effective when it is tied to a concrete task the business must perform, such as issuing a compliant invoice or reconciling digital receipts, and delivered in Khmer. Capability that stays with the business after the trainer leaves is the measure that matters.',
    },
    {
      heading: 'CamInvoice Readiness by Business Size',
      content: 'CamInvoice is operated by the MEF\'s General Department of Digital Economy. Its first phase is business-to-government: suppliers invoicing designated ministries, brought in ministry by ministry. Whatever the scope becomes, the readiness problem differs by business size. Large enterprises mostly need an integration between existing accounting systems and CamInvoice. Medium-sized businesses more often need the accounting system as well. For small and micro businesses, the precondition is usually formal record-keeping itself.\n\nThe readiness gap therefore widens down the size distribution, and the support each size of business needs changes in kind, not only in volume. This is a description of preparation, not of an existing obligation. For current scope, rely on the MEF\'s published circulars; see the CamInvoice explainer for what they establish.',
    },
    {
      heading: 'Where the Opportunities Sit',
      content: 'Three opportunities follow from the gaps above. First, services that combine CamInvoice integration, basic accounting and tax filing for businesses too small to build any of these themselves. Second, credit products that underwrite small businesses on invoice and payment data rather than land title — supply chain finance is the most developed form. Third, Khmer-language business software and the training that goes with it.\n\nNone of these is sized here. The figures that previously appeared in this section could not be traced to a source, and an opportunity estimate built on untraceable inputs is not one a reader should act on. Anyone sizing these markets should start from the census and tax-registration data published by MISTI, the National Institute of Statistics and the GDT.',
    },
  ],
};
