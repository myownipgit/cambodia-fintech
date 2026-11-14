import { ArticleContent } from '../types';

/*
 * Figure pass, 2026-11-14. Rebuilt around what each system's own instrument or
 * document says. Read for this pass: CamDX Sub-Decree No. 164 S.E of 24 August
 * 2021 (unofficial English translation, camdx.gov.kh) and the CamDX Membership
 * User Guidebook (Techo Startup Center, 2023); the NBC's Bakong white paper
 * (June 2020). Reused: Sub-Decree 207 (registry entry, verified 2026-08-31),
 * MEF Prakas 075 and Circulars (2026-11-07 note below), CamInvoice developer
 * documentation (knowledge/caminvoice-technical-compliance.ts), KHQR Prakas
 * F14-020-351.
 *
 * Removed, not hedged, so nobody restores these from git:
 * - Operators: CamDigiKey "MPTC" and "developed ... with KOICA"; CamDX "MEF /
 *   MPTC". Sub-Decree 164 Art. 7 makes the MEF the body that leads and manages
 *   CamDX, with transactions governed by a CamDX Operator (Art. 8). Sub-Decree 207 (read 2026-11-14) makes the MEF
 *   CamDigiKey's lead too (Art. 4), with the CamDX operator operating it (Art. 5).
 * - Mandates: "Financial institutions must implement CamDigiKey-based eKYC by
 *   mid-2026" (four places). The registry entry for Sub-Decree 207 records
 *   that it creates no obligation on private businesses to adopt CamDigiKey.
 *   Also "All businesses accepting digital payments must support KHQR" and
 *   "Mandatory for government services" without the Article. Art. 12 of
 *   Sub-Decree 164 is stated instead.
 * - CamDX "modeled on Estonia's X-Road", "Estonian e-Governance Academy",
 *   "SOAP and REST", "mTLS with X.509", "CamDX Certificate Authority", "12
 *   million transactions", "14 days to under 48 hours", the per-agency volume
 *   table, "logs retained for seven years". Neither the Sub-Decree nor the
 *   guidebook states any of them.
 * - Bakong: "real-time settlement (RTGS)", "over 60 financial institutions",
 *   "Tier 2 / Tier 4", "Bakong Open API" endpoints, "OAuth 2.0 with mutual
 *   TLS", "21 million transactions worth USD 26 billion", the 2020-2025 growth
 *   table, "400,000 KHQR merchants", "(CBDC)" in the comparison table.
 * - CamDigiKey "4 million identities", OIDC with PKCE, biometric/PIN factors,
 *   "ID tokens and access tokens". No primary read describes the protocol.
 * - "Data residency rules", "Personal Data Protection Law ... expected to pass
 *   in 2026", the cross-border-transfer approval provision, "broad government
 *   access ... for law enforcement". Unsourced statements about a law's content
 *   and status, and the last comments on Government conduct (ADR-006).
 * - The reliability table and paragraph (uptime, SLAs, latency, TPS, disaster
 *   recovery, "4G reaches 85%"): unsourced, and a public assessment of
 *   government systems' performance (ADR-006).
 * - The "Digital Economy Framework 2035" roadmap (Phase 2 CamHealth / CamEdu,
 *   Phase 3 smart-contract government) and "SNEC with World Bank and ADB
 *   assistance". The Policy Framework itself exists (named in Sub-Decree 164,
 *   Art. 7); none of its content was read.
 * - The international comparison table and India Stack FAQ ("1.4 billion",
 *   "15 years", "17 million", "years to scale", approach labels), and
 *   "uniquely aggressive in mandating private sector adoption" (comment on
 *   Government conduct, ADR-006).
 * - Sales lines: "Reference architecture patterns exist ... materially
 *   shortens implementation", "best solved once, centrally", "rewards a staged
 *   roadmap".
 *
 * Bar for restoring: read in a fetched primary, recorded in `claims` or here.
 *
 * Earlier note, 2026-11-07 (CamInvoice correction), kept for its record:
 *
 * CamInvoice correction, 2026-11-07 (targeted: CamInvoice sentences, rows and
 * FAQ answers only; the rest of this page is unsourced and left for the general
 * pass). Found false or untraceable, removed, not hedged:
 * - "CamInvoice is the General Department of Taxation's mandatory electronic
 *   invoicing system", GDT as operator in the layers table, "All CamInvoice
 *   data is stored on GDT servers", "designed ... in partnership with ... the
 *   General Department of Taxation" — FALSE. MEF Prakas 075 (22 January 2025),
 *   Art. 4: the MEF's General Department of Digital Economy (GDDE) manages and
 *   operates CamInvoice. The GDT appears in none of the four MEF documents read.
 * - "Large enterprises (revenue above KHR 1 billion, ~USD 250,000) by January
 *   2025, medium by January 2026, all remaining registered businesses by
 *   January 2027", "Phased mandate 2025-2027", "every enterprise ... must
 *   engage with by 2027" — FALSE as to scope. Phase 1 is business-to-government
 *   (suppliers to the budget entities of named ministries, three steps from
 *   fiscal year 2025). No turnover threshold or private-sector date in any
 *   primary read.
 * - "capturing all commercial transactions", "a typical B2B transaction ...
 *   through CamInvoice" — universality.
 * - UBL 2.1, "four document types", HS codes, "digital stamp", error codes,
 *   "API key authentication combined with digital signatures", CamInvoice
 *   latencies, the 99.0% / 99.2% / 150 TPS reliability row, "occasional
 *   processing delays during peak tax filing periods" — no technical primary
 *   could be read (e-invoice.gov.kh and gdde.mef.gov.kh returned 403 on
 *   2026-11-06); the last also comments on a government system's performance.
 * - "denial of VAT input tax deductions and penalties of up to 25%" — no primary.
 * Bar for restoring: read in a fetched MEF/GDDE primary, recorded in `claims`.
 *
 * Also removed 2026-11-07 (review pass): the 'Tax-Compliant POS Sale / KHQR +
 * CamInvoice' row (implies retail invoicing is in scope; Phase 1 is B2G); the
 * 'aggressiveness of mandates ... five-year window (2021-2027)' paragraph
 * (unsourced, and comments on the Government's conduct, ADR-006); and 'Our team
 * combines deep knowledge of NBC, GDT and MPTC requirements' (first-person
 * capability claim).
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

export const cambodiaGaapArchitecture: ArticleContent = {
  slug: 'cambodia-gaap-architecture',
  title: 'Cambodia\'s Government-as-a-Platform Architecture: A Technical Deep Dive',
  description: 'How Cambodia\'s four national digital systems, CamDigiKey, Bakong, CamDX and CamInvoice, are constituted, who leads each, what each requires of a business that connects, and where the published record stops.',
  type: 'knowledge',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-14',
  readingTime: 8,
  schema: 'TechArticle',
  relatedSlugs: ['gaap', 'bakong', 'camdigikey', 'camdx', 'caminvoice'],
  relatedInstruments: ['sub-decree-207-camdigikey'],
  lead: 'Cambodia\'s Government-as-a-Platform model rests on four national systems: CamDigiKey for digital identity, Bakong for payments, CamDX for data exchange between information systems, and CamInvoice for electronic invoicing. Each has its own legal basis. CamDigiKey is governed by Sub-Decree 207 of 2023, which gives the MEF the lead and the CamDX operator the operation. Bakong is the National Bank of Cambodia\'s payment system. CamDX is led and managed by the Ministry of Economy and Finance under Sub-Decree 164 of 2021. CamInvoice was launched by MEF Prakas 075 in January 2025 and is operated by the MEF\'s General Department of Digital Economy. This article sets out what each instrument and operator document establishes about how a business connects, and where that record stops.',
  // Claims removed 2026-08-31. Restore an entry only when its figure has been
  // read in a fetched primary, on the same evidence bar as app/content/regulatory,
  // and record where it was read.
  claims: [
    { stat: 'CamDX is the Royal Government of Cambodia\'s information technology platform for secure data exchange by API between information systems, within the public sector and with private-sector members. Exchanges are encrypted, digitally signed and timestamped, and data is not stored in CamDX\'s own system. The Ministry of Economy and Finance leads and manages CamDX; transactions are governed by the CamDX Operator.', source: 'Sub-Decree No. 164 S.E on Data Exchange through CamDX, 24 August 2021, Articles 4 to 8 (unofficial English translation)', year: '2021', url: 'https://camdx.gov.kh/documents/files/Unofficial%20Translation%20of%20CamDX%20Subdecree.pdf' },
    { stat: 'The NBC selected Hyperledger Iroha as the platform for Bakong, and undertook the project in collaboration with SORAMITSU Co., Ltd.', source: 'National Bank of Cambodia, Project Bakong: Next Generation Payment System, white paper, June 2020', year: '2020', url: 'https://bakong.nbc.gov.kh/download/NBC_BAKONG_White_Paper.pdf' },
  ],
  sources: [
    { publisher: 'Ministry of Economy and Finance', label: 'Prakas 075 on the launch of the Cambodia E-Invoicing System (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/a57a86ff-1c53-481e-a4f0-8b32fe96b6cf/resource/e433f7a7-0bd0-4407-8d58-c5f346be20dd/download/mef_prakas-075_launching-of-cambodia-e-invoicing-system_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 003, mandatory e-invoicing, Phase 1 Step 1 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/dataset/2ff2820c-df65-4d60-aa0f-806c65d82952/resource/d77ab51b-6f54-4960-b947-ffd4a4f2a5a4/download/mef_circular-003_obligation-to-use-e-invoice_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 012, mandatory e-invoicing, Phase 1 Step 2 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/bce86ad2-6baf-456a-b49f-90c0b7b61f26/resource/e8c6b0ce-8f79-427e-a7e2-56f87c89ed1e/download/1756437973985-20250714_circular_to_6_lms_in_q3_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 017, mandatory e-invoicing, Phase 1 Step 3 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/d244f7f4-ef43-43fe-8645-d79483c9b0c3/resource/7d904664-edbe-40fe-8e76-f4b119d6a51c/download/1.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 007, mandatory e-invoicing, Phase 1 Step 4 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/9bdb6142-b119-41c4-b2ae-5bdde281a8f6/resource/549d6645-3232-4fa3-8715-a8f61c79b1f9/download/1.pdf', tier: 'primary' },
    { publisher: 'Royal Government of Cambodia', label: 'Sub-Decree No. 164 S.E on Data Exchange through CamDX, 24 August 2021, unofficial English translation (PDF)', url: 'https://camdx.gov.kh/documents/files/Unofficial%20Translation%20of%20CamDX%20Subdecree.pdf', tier: 'primary' },
    { publisher: 'CamDX (Techo Startup Center)', label: 'CamDX Membership User Guidebook, 2023 (PDF)', url: 'https://camdx.gov.kh/documents/files/CamDX%20User%20Guide%20Book%20English.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Project Bakong: Next Generation Payment System, white paper, June 2020 (PDF)', url: 'https://bakong.nbc.gov.kh/download/NBC_BAKONG_White_Paper.pdf', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Prakas F14-020-351 on the KHQR Code technical specification, June 2020 (Khmer, PDF)', url: 'https://nbc.gov.kh/files/legislation/prakas/latest/km/Prakas_F14-020-351-PR_KHQR_for_Payment_in_Cambodia_appendix.pdf', tier: 'primary' },
    { publisher: 'CamInvoice', label: 'Developer documentation, Introduction (Internet Archive snapshot, 18 June 2024)', url: 'https://web.archive.org/web/20240618030344/https://developer.e-invoice.gov.kh/', tier: 'primary' },
    { publisher: 'CamInvoice', label: 'Developer documentation, Get New Access Token (Internet Archive snapshot, 22 December 2025)', url: 'https://web.archive.org/web/20251222130429/https://developer.e-invoice.gov.kh/api-reference/authentication', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-14',
  faqs: [
    { question: 'What is Government-as-a-Platform (GaaP) and how does Cambodia implement it?', answer: 'Government-as-a-Platform is a model in which the state provides shared systems, such as identity, payments, data exchange and invoicing, that other public bodies and private businesses connect to rather than each building their own. In Cambodia the four systems are CamDigiKey (digital identity, Sub-Decree 207 of 2023), Bakong (the National Bank of Cambodia\'s payment system), CamDX (data exchange between information systems, Sub-Decree 164 of 2021) and CamInvoice (electronic invoicing, MEF Prakas 075 of 2025).' },
    { question: 'Is connecting to these systems mandatory for businesses in Cambodia?', answer: 'It depends on the system. CamInvoice is mandatory in phases set by Ministry of Economy and Finance circulars: the first phase covers suppliers invoicing the budget entities of designated ministries, added in steps from fiscal year 2025, and the circulars reviewed set no date for invoicing between private businesses. CamDX membership is automatic for the public sector, which must exchange base-registry data through CamDX only, and by application for private businesses (Sub-Decree 164, Articles 10 and 12). Sub-Decree 207 governs the management of CamDigiKey and does not itself oblige a private business to adopt it.' },
    { question: 'What does a business need in order to connect?', answer: 'It differs by system. A private CamDX member applies to the CamDX Operator, must be able to install a security server in its own systems, keeps its own audit log, bears its own connection costs and reports any irregularity within 24 hours (Sub-Decree 164, Articles 11, 15, 16 and 19). A CamInvoice-connected system sends XML e-invoices through the CamInvoice API using OAuth 2.0 credentials obtained from CamInvoice support. Bakong is reached through a participating licensed institution, and QR payments follow the KHQR specification. CamDigiKey\'s technical integration terms are set by its operator.' },
  ],
  sections: [
    {
      heading: 'Four Systems, Four Legal Bases',
      content: 'The four systems were not created by one instrument. Each rests on its own legal basis, issued at a different time, and each sets its own terms for who may connect and how. They are not run by one body either: the NBC runs Bakong, while the MEF leads the other three, through the CamDX operator for CamDX and CamDigiKey and through its General Department of Digital Economy for CamInvoice. What makes them a platform is that each is national: there is one identity system, one payment system, one data exchange and one invoicing system, and a business connects to each once rather than negotiating with competing providers.\n\nFor an architect, that has a practical consequence. Integration is several separate projects with their own credentials and membership rules, and the design should keep them separable. The one built-in dependency is that CamDigiKey eKYC is reached through CamDX membership (Sub-Decree 207, Article 15).',
      table: {
        caption: 'Cambodia\'s four national systems and their legal basis',
        headers: ['Layer', 'System', 'Lead institution or operator', 'Legal basis'],
        rows: [
          ['Identity', 'CamDigiKey', 'Ministry of Economy and Finance (lead); the CamDX operator operates it on the MEF\'s behalf', 'Sub-Decree 207, 26 July 2023'],
          ['Payments', 'Bakong', 'National Bank of Cambodia', 'NBC; white paper, June 2020; KHQR Prakas F14-020-351'],
          ['Data exchange', 'CamDX', 'Ministry of Economy and Finance (lead); CamDX Operator (transactions)', 'Sub-Decree 164, 24 August 2021'],
          ['Invoicing', 'CamInvoice', 'MEF General Department of Digital Economy', 'MEF Prakas 075, 22 January 2025'],
        ],
      },
    },
    {
      heading: 'CamDigiKey: The Identity Layer',
      content: 'CamDigiKey is Cambodia\'s national digital identity platform. Sub-Decree 207 of 26 July 2023 sets out the mechanisms, principles and procedures for managing it, framed around security, accountability and transparency. The MEF leads and manages it (Article 4), the CamDX operator operates it on the MEF\'s behalf (Article 5), and the Ministry of Interior supplies the identification data used to verify new accounts (Article 6). A business that wants to use CamDigiKey eKYC must be a CamDX member and ask the CamDX operator for permission (Articles 15 and 16), and the account owner must consent each time the data is used (Article 18).\n\nTwo limits matter to a business. The Sub-Decree does not itself require a private business to adopt CamDigiKey: where a firm uses it, it is usually to meet identity-verification duties that arise elsewhere, chiefly under AML/CFT obligations. And the technical integration terms are set by the platform operator, not by the Sub-Decree, so they should be taken from the operator\'s current documentation rather than from a summary.',
    },
    {
      heading: 'Bakong: The Payment Layer',
      content: 'Bakong is the National Bank of Cambodia\'s national payment system. The NBC\'s white paper of June 2020 describes it as a next-generation payment system; the NBC selected Hyperledger Iroha as its platform and undertook the project with SORAMITSU Co., Ltd. It handles payments in both Khmer riel and US dollars between the apps of participating banks and payment service institutions, and one of its stated aims is to promote financial inclusion and make riel payments easier. The white paper does not describe Bakong as a central bank digital currency.\n\nA business does not connect to Bakong directly. It reaches Bakong through a participating licensed institution, and accepts QR payments under the KHQR standard set by NBC Prakas F14-020-351 of June 2020. Integration work is therefore with that institution, and is as much about reconciliation and settlement design as about connectivity.',
    },
    {
      heading: 'CamDX: The Data Exchange Layer',
      content: 'Sub-Decree 164 of 24 August 2021 defines CamDX as the Royal Government\'s information technology platform for secure data exchange by API between information systems, within the public sector and with private-sector members. Exchanges are encrypted, digitally signed and timestamped (Article 5), and CamDX does not store the data that passes through it, or pass it on without the consent of the original data owner (Article 6). The MEF leads and manages CamDX in line with the Cambodia Digital Economy and Society Policy Framework (Article 7), and transactions are governed by the CamDX Operator under the MEF\'s technical and financial guidance (Article 8).\n\nMembership comes in two kinds. Public bodies are members automatically and must exchange base-registry data through CamDX only. Private businesses legally registered in Cambodia join on application (Articles 10 and 12). Each member can be a data consumer, a data provider, or both. The CamDX Membership User Guidebook, published by the Techo Startup Center in 2023 and prepared by the CamDX operator, sets out the application process.',
      table: {
        caption: 'What Sub-Decree 164 requires of a private CamDX member',
        headers: ['Requirement', 'Article'],
        rows: [
          ['Apply on the CamDX Operator\'s form, be legally registered in Cambodia, and pay the application fee', '15'],
          ['Be able to install a security server in its own information systems', '16'],
          ['Guarantee the quality and security of its system, and cooperate on cyber-security incidents', '16'],
          ['Exchange and use data under applicable law or an MOU with the MEF or the CamDX Operator', '11'],
          ['Keep its own audit log, and report any irregularity within 24 hours', '11'],
          ['Bear its own connection costs; data owners may set a fee per query', '19, 20'],
        ],
      },
    },
    {
      heading: 'CamInvoice: The Invoicing Layer',
      content: 'CamInvoice, the Cambodia E-Invoicing System, rests on Ministry of Economy and Finance Prakas 075 of 22 January 2025, the date of its official launch. The Prakas describes it as a state IT system serving as the central platform for exchanging invoices in electronic form between sellers and buyers, which also confirms receipt officially. The MEF\'s General Department of Digital Economy is its secretariat: it manages and operates the system, handles membership, and maintains its rules and procedures.\n\nAn invoice that has passed the system\'s validation and been given its identifier is recognised as an original digital record with legal effect, and is kept in digital form for 10 years. The Prakas provides for two kinds of member: user members, who are the sellers and buyers, and system-provider members, who supply the IT systems that connect to the platform. Under the implementing circulars, a business can issue an e-invoice on the CamInvoice platform itself or from an invoicing system registered with and connected to it. CamInvoice\'s developer documentation describes XML e-invoices in UBL format sent through its API and validated by the system, three document types (invoice, credit note and debit note), and OAuth 2.0 authentication with access tokens that expire after 900 seconds.\n\nThe mandate is phased. Its first phase is business-to-government: suppliers invoicing the central-level budget entities of designated ministries for public procurement. Step 1 covered the MEF and the Ministry of Environment from fiscal year 2025; Step 2 added six ministries; Step 3 six more; Step 4 (2026) 14 further ministries and institutions. For any extension beyond government procurement, the MEF\'s current circulars are the place to check.',
    },
    {
      heading: 'Designing Across the Layers',
      content: 'A workflow can touch more than one layer: a supplier to a designated ministry issues its invoice through CamInvoice, is paid through the banking system on Bakong rails, and may verify a counterparty\'s registration through a CamDX service where one is available to it. Each step has its own membership, credentials and failure modes, and none of them guarantees the others.\n\nThe architecture that follows from this is modular. Keep each integration behind its own interface, so that a change in one operator\'s terms does not ripple through the rest. Carry each system\'s identifiers through the workflow, such as the CamInvoice document identifier and the payment reference, so that records can be reconciled across layers. Treat each system\'s access credentials as a separate lifecycle: CamInvoice\'s access tokens expire after 900 seconds, and a CamDX member\'s security server is its own piece of infrastructure to maintain.',
    },
    {
      heading: 'Data Held by the Platforms',
      content: 'The instruments say different things about data, and an enterprise\'s design should follow each one rather than a single assumption. CamInvoice keeps each validated invoice in digital form for 10 years (Prakas 075). CamDX, by contrast, does not store the data exchanged through it (Sub-Decree 164, Article 6); the records a CamDX member must keep are its own audit log and its own reports on data exchange (Article 11).\n\nPersonal data protection more generally, including any rule on where data must be stored or when it may leave Cambodia, is a matter for current Cambodian law and counsel. This page does not state it.',
    },
  ],
};
