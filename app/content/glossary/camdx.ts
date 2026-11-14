import { ArticleContent } from '../types';

/*
 * X-Road, 2026-11-15: SOURCED, kept. camdx.gov.kh ("What is CamDX?") says CamDX
 * "adopts the model of X-Road of Estonia" and is "a distributed system with no
 * central database performing only data exchange"; the NIIS case study (19 April
 * 2024) says the Techo Startup Center, under the MEF, adopted X-Road after its
 * director's training visit to Estonia in June 2019. Not supported, removed:
 * "used by over 20 countries", "Estonia pioneered X-Road in 2001", "CamDX /
 * X-Road (2023)", Finland's Suomi.fi as X-Road, and "TLS encryption ... immutable
 * audit logs ... international data protection standards". NIIS confirms
 * Iceland's Straumurinn and that its members include Estonia and Finland.
 *
 * 2026-11-08 register sweep (ADR-005/006). The firm section and FAQ lines
 * here said CamFinTech "navigates the approval", "keeps them approved",
 * provides "approval-navigation", and that the build "is coordinated with
 * accredited Service Providers"; some also claimed NBC liaison, regulatory
 * goodwill, banking partners or partnership facilitation. Removed: the
 * approval decision is the operator's or regulator's, the client is the
 * applicant of record, the firm builds the client side itself (ADR-005), and
 * no partner relationship exists. Do not reintroduce any of these phrasings.
 */
export const camdx: ArticleContent = {
  slug: 'camdx',
  title: 'What is CamDX?',
  description: 'CamDX is Cambodia\'s government data exchange platform built on Estonia\'s X-Road technology, enabling secure data sharing between government agencies and private sector.',
  type: 'glossary',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-15',
  readingTime: 3,
  schema: 'DefinedTerm',
  relatedSlugs: ['camdigikey', 'gaap', 'caminvoice'],
  lead: 'CamDX (Cambodia Data Exchange) is Cambodia\'s national data exchange platform, adopting the model of Estonia\'s X-Road. Led by the Ministry of Economy and Finance and developed by its Techo Startup Center, CamDX provides a secure, standardized infrastructure for real-time data sharing between government agencies and authorized private sector participants.',
  // Claims removed 2026-08-31. This array previously carried figures attributed
  // to named institutional reports with no URL, access date or page reference.
  // A verified sample was wrong more often than not — including a Cambodian FATF
  // mutual evaluation that never took place, and citations to bodies that do not
  // exist under the names given. Restore an entry only when its figure has been
  // read in a fetched primary, on the same evidence bar as app/content/regulatory,
  // and record where it was read. See vault ADR-007.
  claims: [],
  sources: [
    { publisher: 'Royal Government of Cambodia', label: 'Sub-Decree No. 164 on Data Exchange through CamDX, unofficial English translation (PDF)', url: 'https://camdx.gov.kh/documents/files/Unofficial%20Translation%20of%20CamDX%20Subdecree.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Decision authorising Techo Startup Center to operate CamDX (Khmer, PDF)', url: 'https://camdx.gov.kh/documents/files/20220728-Decision%20on%20TSC%20as%20operator%20of%20CamDX.pdf', tier: 'primary' },
    { publisher: 'CamDX', label: 'Cambodia Data Exchange, official site (home page)', url: 'https://camdx.gov.kh', tier: 'primary' },
    { publisher: 'Nordic Institute for Interoperability Solutions (NIIS)', label: 'Case study: CamDX is Cambodia\'s national data exchange solution, and it\'s based on X-Road, 19 April 2024', url: 'https://x-road.global/xroad-case-studies-library/2024/10/21/camdx-is-cambodias-national-data-exchange-solution-and-its-based-on-x-road', tier: 'commentary' },
  ],
  sourcesAsAt: '2026-11-15',
  faqs: [
    { question: 'What is CamDX and what technology does it use?', answer: 'CamDX (Cambodia Data Exchange) is Cambodia\'s national data exchange platform that enables secure, real-time data sharing between government agencies and authorized private sector organizations. It adopts the model of Estonia\'s X-Road, the open-source data exchange layer developed by the Nordic Institute for Interoperability Solutions. Every exchange through CamDX is encrypted, digitally signed and timestamped (Sub-Decree 164, Article 5).' },
    { question: 'How does CamDX connect to other Cambodia digital infrastructure?', answer: 'CamDX serves as the data backbone connecting Cambodia\'s Government-as-a-Platform components. CamDigiKey identity verifications flow through CamDX. CamInvoice e-invoicing data is shared via CamDX. Bakong payment confirmations can be validated through CamDX connections. This interoperability creates a unified digital ecosystem where identity, payments, invoicing, and data exchange work together seamlessly.' },
    { question: 'Can private companies access CamDX?', answer: 'Yes. Authorized private sector organizations, particularly financial institutions and regulated businesses, can connect to CamDX to access government data services. This includes identity verification via CamDigiKey, business registration data, tax compliance status, and more. CamFinTech prepares the onboarding documentation and builds the client side of the connection; the onboarding decision rests with the system\'s operator.' },
  ],
  sections: [
    {
      heading: 'X-Road Architecture and How CamDX Works',
      content: 'CamDX is built on X-Road, an open-source data exchange layer originally developed by Estonia and now maintained by the Nordic Institute for Interoperability Solutions (NIIS). The architecture uses a decentralized model where each participating organization operates its own security server that connects to the CamDX central trust infrastructure.\n\nEvery data transaction on CamDX is digitally signed, encrypted in transit, and logged with a tamper-proof audit trail. This means no data is stored centrally, and each organization retains sovereignty over its own data. When Agency A requests data from Agency B, the request flows through their respective security servers with full cryptographic verification.',
    },
    {
      heading: 'Government and Private Sector Integration',
      content: 'CamDX enables two categories of data exchange: government-to-government (G2G) and government-to-business (G2B). On the G2G side, ministries and agencies share citizen records, business registrations, tax data, and licensing information without manual document transfers.\n\nFor the private sector, CamDX provides standardized APIs that allow authorized businesses to verify customer identities, check business registration status, validate tax compliance, and access other government datasets. Financial institutions particularly benefit from real-time access to CamDigiKey identity verification and GDT tax compliance data through CamDX connections.',
      table: {
        caption: 'CamDX Data Services Available to Authorized Participants',
        headers: ['Service Category', 'Data Provider', 'Key Use Case', 'Sector'],
        rows: [
          ['Identity Verification', 'CamDigiKey / MEF', 'eKYC for Account Opening', 'Financial Services'],
          ['Business Registration', 'Ministry of Commerce', 'Company Due Diligence', 'Banking, Legal'],
          ['Tax Compliance', 'GDT', 'Vendor Verification', 'Supply Chain, Trade'],
          ['Land Title Records', 'Ministry of Land Management', 'Collateral Verification', 'Banking, Real Estate'],
          ['Customs Data', 'General Department of Customs', 'Trade Finance Validation', 'Import/Export'],
        ],
      },
    },
    {
      heading: 'Security and Compliance Framework',
      content: 'CamDX\'s security follows the X-Road design and its legal basis. Under Sub-Decree 164, every exchange is encrypted, digitally signed and timestamped (Article 5), and CamDX does not store the data exchanged or pass it on without the original data owner\'s consent (Article 6). Each member keeps its own audit log for security inspection (Article 11).\n\nAccess control operates on a consent and authorization model. Private sector participants must register with CamDX, demonstrate a legitimate business need, and receive explicit authorization for each data service they access. This ensures data minimization principles are upheld while still enabling the data fluidity that Cambodia\'s digital economy requires.',
    },
    {
      heading: 'Where CamFinTech\'s Work Sits',
      content: 'For an institution onboarding to CamDX, CamFinTech prepares the onboarding documentation and the data-governance programme the connection needs, and builds the client side of the integration. It is charged as a fee and handed over. The client operates its own connection and holds its own data.\n\nThe onboarding decision rests with the system\'s operator, and the client is the applicant of record. CamFinTech does not host or transmit the client\'s data-exchange traffic.',
    },
  ],
};
