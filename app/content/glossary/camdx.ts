import { ArticleContent } from '../types';

export const camdx: ArticleContent = {
  slug: 'camdx',
  title: 'What is CamDX?',
  description: 'CamDX is Cambodia\'s government data exchange platform built on Estonia\'s X-Road technology, enabling secure data sharing between government agencies and private sector.',
  type: 'glossary',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-06-18',
  readingTime: 3,
  schema: 'DefinedTerm',
  relatedSlugs: ['camdigikey', 'gaap', 'caminvoice'],
  lead: 'CamDX (Cambodia Data Exchange) is Cambodia\'s national data exchange platform built on Estonia\'s proven X-Road technology. Operated by the Ministry of Economy and Finance, CamDX provides a secure, standardized infrastructure for real-time data sharing between government agencies and authorized private sector participants.',
  // Claims removed 2026-08-31. This array previously carried figures attributed
  // to named institutional reports with no URL, access date or page reference.
  // A verified sample was wrong more often than not — including a Cambodian FATF
  // mutual evaluation that never took place, and citations to bodies that do not
  // exist under the names given. Restore an entry only when its figure has been
  // read in a fetched primary, on the same evidence bar as app/content/regulatory,
  // and record where it was read. See vault ADR-007.
  claims: [],
  faqs: [
    { question: 'What is CamDX and what technology does it use?', answer: 'CamDX (Cambodia Data Exchange) is Cambodia\'s national data exchange platform that enables secure, real-time data sharing between government agencies and authorized private sector organizations. It is built on Estonia\'s X-Road technology, a proven open-source data exchange layer used by over 20 countries worldwide. X-Road ensures data integrity through cryptographic signatures and provides a complete audit trail of all data transactions.' },
    { question: 'How does CamDX connect to other Cambodia digital infrastructure?', answer: 'CamDX serves as the data backbone connecting Cambodia\'s Government-as-a-Platform components. CamDigiKey identity verifications flow through CamDX. CamInvoice e-invoicing data is shared via CamDX. Bakong payment confirmations can be validated through CamDX connections. This interoperability creates a unified digital ecosystem where identity, payments, invoicing, and data exchange work together seamlessly.' },
    { question: 'Can private companies access CamDX?', answer: 'Yes. Authorized private sector organizations, particularly financial institutions and regulated businesses, can connect to CamDX to access government data services. This includes identity verification via CamDigiKey, business registration data, tax compliance status, and more. CamFinTech navigates the approval for enterprises to onboard with CamDX and coordinates the technical work with accredited Service Providers.' },
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
      content: 'CamDX enforces strict security protocols inherited from the X-Road framework. All data exchanges use TLS encryption, and every transaction is signed with the sending organization\'s digital certificate. The platform maintains immutable audit logs that satisfy both domestic regulatory requirements and international data protection standards.\n\nAccess control operates on a consent and authorization model. Private sector participants must register with CamDX, demonstrate a legitimate business need, and receive explicit authorization for each data service they access. This ensures data minimization principles are upheld while still enabling the data fluidity that Cambodia\'s digital economy requires.',
    },
    {
      heading: 'Enterprise Approval-Navigation with CamFinTech',
      content: 'CamFinTech navigates the approval for enterprises to onboard with CamDX, and runs the compliance programme that keeps them approved. Our services cover the regulatory side of the onboarding process: data service scoping, compliance documentation preparation for MEF approval, and ongoing governance to satisfy CamDX data-minimization and consent rules.\n\nThe technical build itself — security server provisioning, API integration development, data architecture for real-time identity verification, credit assessment, and regulatory reporting — is coordinated with accredited Service Providers. CamFinTech is fee-only, never operates the rail, and never holds client funds. Our position across the GaaP ecosystem (CamDigiKey, Bakong, CamDX, CamInvoice) lets clients sequence integrations efficiently.',
    },
  ],
};
