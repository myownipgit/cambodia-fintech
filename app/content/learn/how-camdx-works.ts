import { ArticleContent } from '../types';

export const howCamDXWorks: ArticleContent = {
  slug: 'how-camdx-works',
  title: 'How Does CamDX Enable Data Exchange in Cambodia?',
  description: 'CamDX is Cambodia\'s national data exchange platform built on X-Road technology, enabling secure government-to-private API integration for identity, tax, business registration, and compliance data.',
  type: 'learn',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-06-18',
  readingTime: 6,
  schema: 'Article',
  relatedSlugs: ['camdx', 'camdigikey', 'gaap'],
  lead: 'CamDX (Cambodia Data Exchange) is the national secure data exchange platform that connects government ministries, financial institutions, and licensed private-sector entities through standardized APIs. Built on Estonia\'s X-Road technology and deployed under Cambodia\'s Digital Government Policy 2022-2035, CamDX eliminates the need for point-to-point integrations between agencies. Instead, it provides a single, auditable data highway where authorized parties can query and share structured data in real time. For FinTech companies, CamDX is the infrastructure layer that makes instant KYC, real-time tax verification, and automated regulatory compliance technically possible.',
  claims: [
    { stat: 'Estonia\'s X-Road platform, the technology foundation for CamDX, processes over 1.5 billion queries annually and saves the Estonian government an estimated 1,400 working years per year in administrative efficiency.', source: 'e-Estonia Briefing Centre', year: '2024' },
    { stat: 'Cambodia\'s Digital Government Policy 2022-2035 mandates interconnection of all government databases through CamDX by 2030, covering identity, taxation, business registration, land titles, and social protection.', source: 'Royal Government of Cambodia Digital Government Policy', year: '2022' },
    { stat: 'Countries that implement centralized data exchange platforms reduce government service delivery costs by 30-50% and decrease processing times from weeks to minutes.', source: 'World Bank Digital Government Readiness Assessment', year: '2023' },
  ],
  faqs: [
    { question: 'What is the difference between CamDX and CamDigiKey?', answer: 'CamDigiKey is the digital identity and eKYC platform. CamDX is the data exchange infrastructure. CamDigiKey verifies who a person is; CamDX enables authorized parties to query government databases about that person or entity. CamDigiKey is a data provider ON CamDX, meaning a KYC query flows through CamDX to reach CamDigiKey identity services.' },
    { question: 'Can private companies connect directly to CamDX?', answer: 'Licensed financial institutions and authorized private-sector entities can connect to CamDX through the official onboarding process. This requires registration with the Digital Government Committee, deployment of a CamDX security server, and compliance with the CamDX data governance framework. CamFinTech navigates the approval for enterprises to onboard with CamDX; the security-server deployment itself is coordinated with accredited Service Providers.' },
    { question: 'Is CamDX data exchange encrypted?', answer: 'Yes. CamDX uses end-to-end encryption for all data in transit, mutual TLS authentication between security servers, and digital signatures on every message. All queries and responses are logged in a tamper-proof audit trail. The architecture ensures that even CamDX operators cannot read the content of data exchanges between parties.' },
  ],
  sections: [
    {
      heading: 'X-Road Architecture and How It Works',
      content: 'CamDX is built on X-Road, the open-source data exchange technology developed by Estonia and now maintained by the Nordic Institute for Interoperability Solutions (NIIS). X-Road operates on a federated model where each participating organization runs a security server that acts as a gateway to the CamDX network.\n\nWhen Organization A needs data from Organization B, Organization A\'s security server sends an encrypted, digitally signed request through the CamDX central routing layer to Organization B\'s security server. Organization B\'s server processes the request against its internal systems and returns the response through the same encrypted channel. Every transaction is logged on both sides with timestamps and digital signatures, creating an immutable audit trail without any central database storing the actual data.',
    },
    {
      heading: 'The Security Server Model',
      content: 'Each CamDX participant deploys a security server, either on-premises or in an approved cloud environment. The security server handles all cryptographic operations: encrypting outbound requests, verifying digital signatures on inbound requests, and maintaining the local audit log. This design means that sensitive data never passes through a central government server in cleartext.\n\nSecurity servers authenticate each other using X.509 certificates issued by the CamDX Certificate Authority. Mutual TLS ensures that both the requester and the responder verify each other\'s identity before any data is exchanged. The certificate infrastructure also enables fine-grained access control: a FinTech company might be authorized to query identity verification services but not land title records.',
      table: {
        caption: 'CamDX Security Server Components',
        headers: ['Component', 'Function', 'Technology', 'Managed By'],
        rows: [
          ['Message Transport', 'Encrypted data exchange', 'Mutual TLS 1.3', 'Security server'],
          ['Digital Signatures', 'Message integrity and non-repudiation', 'X.509 certificates, RSA/ECDSA', 'CamDX CA'],
          ['Audit Log', 'Tamper-proof transaction record', 'Hash-chained timestamped logs', 'Local participant'],
          ['Access Control', 'Service-level authorization', 'ACL policies per member/service', 'Central authority + participant'],
          ['Service Registry', 'Discovery of available APIs', 'Central directory', 'Digital Government Committee'],
        ],
      },
    },
    {
      heading: 'Government-to-Private API Services',
      content: 'CamDX exposes government data as standardized REST and SOAP API services that authorized private-sector entities can consume. Each government ministry or agency publishes its services on the CamDX service registry, specifying the data fields available, the access permissions required, and the response format.\n\nFor example, the General Department of Taxation publishes a Taxpayer Identification Number (TIN) validation service. A bank performing KYC on a business customer can query this service through CamDX to instantly verify that the business has a valid TIN and is in good standing. Without CamDX, this verification would require manual document submission and multi-day processing. CamDX reduces it to a sub-three-second API call.',
    },
    {
      heading: 'Data Sharing Framework and Governance',
      content: 'CamDX operates under a formal data governance framework established by the Digital Government Committee. This framework defines who can access what data, under which conditions, and with what audit obligations. Access is granted at the service level: an organization is authorized to consume specific services, not entire databases.\n\nThe governance model follows the principle of data minimization. Services are designed to return only the fields necessary for the requesting use case. A credit check might return a binary "approved/not approved" rather than the full financial history. Consent management is layered on top: where the data subject is an individual, CamDigiKey-based consent must be obtained before the query is executed.',
      table: {
        caption: 'CamDX Data Governance Principles',
        headers: ['Principle', 'Implementation', 'Enforcement'],
        rows: [
          ['Purpose Limitation', 'Access restricted to stated business purpose', 'Registration and audit'],
          ['Data Minimization', 'Services return only required fields', 'API design review'],
          ['Consent', 'Individual data requires CamDigiKey consent', 'Technical enforcement'],
          ['Audit Trail', 'All queries logged with timestamps', 'Automated monitoring'],
          ['Accountability', 'Each participant responsible for their data use', 'Compliance reviews'],
        ],
      },
    },
    {
      heading: 'Integration Patterns for FinTech',
      content: 'FinTech companies typically integrate with CamDX through one of three patterns. The first is direct integration, where the company deploys its own security server and connects to CamDX as a registered member. This is suitable for banks and large payment service providers with dedicated IT infrastructure.\n\nThe second pattern is indirect integration through a licensed aggregator or banking partner. Smaller FinTech firms that do not meet the requirements for direct membership can access CamDX services through their bank partner\'s security server. The third pattern is embedded integration, where CamDX queries are built into a platform product. For example, a lending platform might embed TIN verification and identity checks into its loan origination workflow, with all CamDX calls happening behind the scenes.',
    },
    {
      heading: 'Current and Planned Service Catalog',
      content: 'The CamDX service catalog is expanding as more government agencies digitize their databases and publish APIs. The initial rollout focused on identity and business registration services, which have the highest demand from the financial sector. Tax services were added in the second phase, with land title and social protection services planned for subsequent phases.\n\nEach new service on CamDX reduces a manual verification process to an API call. The compounding effect is significant: a single loan application that previously required visits to five government offices and two weeks of processing can now be fully verified through CamDX in under 30 seconds. This transformation is what makes CamDX foundational to Cambodia\'s FinTech ecosystem rather than merely convenient.',
      table: {
        caption: 'CamDX Service Catalog Rollout Phases',
        headers: ['Phase', 'Timeline', 'Services', 'Primary Users'],
        rows: [
          ['Phase 1', '2023-2024', 'Identity verification, business registration', 'Banks, MFIs, insurers'],
          ['Phase 2', '2024-2025', 'TIN validation, tax compliance status', 'Banks, accounting platforms'],
          ['Phase 3', '2025-2026', 'Land title verification, vehicle registration', 'Banks (collateral), insurers'],
          ['Phase 4', '2026-2027', 'Social protection status, education records', 'MFIs, social enterprises'],
          ['Phase 5', '2027-2030', 'Health records, judicial records (restricted)', 'Insurers, specialized services'],
        ],
      },
    },
    {
      heading: 'Comparison with Regional Data Exchange Platforms',
      content: 'Cambodia\'s decision to adopt X-Road places CamDX in the same technology family as Estonia\'s original X-Road, Finland\'s Suomi.fi, and Iceland\'s Straumurinn. Within ASEAN, Singapore\'s APEX (Application Programming Interface Exchange) serves a similar function, though it uses a centralized API gateway architecture rather than X-Road\'s federated model.\n\nThe federated approach has a key advantage: no single point of failure and no central repository of all citizens\' data. Each ministry retains control of its own data and decides how to expose it. CamDX simply provides the secure transport and access control layer. This architecture is particularly well-suited to Cambodia\'s governance structure, where ministries operate with significant autonomy.',
    },
    {
      heading: 'CamFinTech Approval-Navigation for CamDX',
      content: 'CamFinTech provides fee-only approval-navigation and compliance programme delivery for financial institutions and FinTech companies onboarding with CamDX. Our services include API-service scoping (mapping which CamDX services align with your business workflows), compliance documentation for the Digital Government Committee onboarding process, and the data-governance programme that keeps you approved.\n\nThe technical build — security-server deployment, integration code, monitoring infrastructure — is coordinated with accredited Service Providers. As the CamDX service catalog expands, we proactively advise clients on which new services warrant integration. CamFinTech is fee-only, never operates the rail, and never holds client funds.',
    },
  ],
};
