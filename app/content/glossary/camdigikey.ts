import { ArticleContent } from '../types';

export const camdigikey: ArticleContent = {
  slug: 'camdigikey',
  title: 'CamDigiKey: Cambodia\'s National Digital Identity and eKYC Platform',
  description: 'CamDigiKey is Cambodia\'s national digital identity system enabling eKYC verification, facial recognition authentication, and secure access to government and financial services.',
  type: 'glossary',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-03-25',
  readingTime: 3,
  schema: 'DefinedTerm',
  relatedSlugs: ['bakong', 'camdx', 'gaap'],
  lead: 'CamDigiKey is Cambodia\'s national digital identity platform developed by the Ministry of Economy and Finance (MEF). It provides secure electronic Know Your Customer (eKYC) verification through facial recognition and biometric authentication, enabling citizens and businesses to access government and financial services digitally.',
  claims: [
    { stat: 'CamDigiKey has registered over 5 million digital identities since its launch, covering approximately 30% of Cambodia\'s adult population.', source: 'Ministry of Economy and Finance Cambodia', year: '2025' },
    { stat: 'Digital identity verification can reduce customer onboarding costs for financial institutions by up to 70% compared to manual KYC processes.', source: 'World Bank ID4D Initiative', year: '2024' },
    { stat: 'Cambodia\'s digital identity coverage is projected to reach 70% of adults by 2028, driven by mandatory CamDigiKey integration for government services.', source: 'Asian Development Bank', year: '2025' },
  ],
  faqs: [
    { question: 'What is CamDigiKey and how does it work?', answer: 'CamDigiKey is Cambodia\'s national digital identity system operated by the Ministry of Economy and Finance. It works by registering citizens\' biometric data (facial recognition and fingerprints) linked to their national ID. Users can then authenticate their identity digitally for government services, banking, and commercial transactions through the CamDigiKey mobile app or integrated third-party applications.' },
    { question: 'Is CamDigiKey mandatory for businesses in Cambodia?', answer: 'CamDigiKey integration is increasingly required for businesses interacting with government platforms including CamDX, CamInvoice, and certain NBC-regulated financial services. While not yet mandatory for all private sector activities, businesses that process government transactions or provide regulated financial services must support CamDigiKey authentication.' },
    { question: 'How can enterprises integrate with CamDigiKey?', answer: 'Enterprises integrate with CamDigiKey through the CamDX data exchange platform, which provides standardized APIs for identity verification. CamFinTech offers technical consulting for CamDigiKey integration, including eKYC workflow design, API implementation, and compliance architecture for financial institutions and commercial platforms.' },
  ],
  sections: [
    {
      heading: 'How CamDigiKey Works',
      content: 'CamDigiKey operates as a centralized digital identity platform built on biometric verification technology. Citizens register by linking their national identification card to biometric data including facial recognition templates and fingerprint scans. The system generates a unique digital identity credential stored securely on government infrastructure.\n\nAuthentication occurs through the CamDigiKey mobile application or via API calls from integrated third-party platforms. When a service requires identity verification, CamDigiKey performs real-time biometric matching against the registered template. This enables paperless, instant KYC verification for banking, government services, and regulated commercial activities across Cambodia.',
    },
    {
      heading: 'CamDigiKey and the CamDX Ecosystem',
      content: 'CamDigiKey serves as the identity layer within Cambodia\'s broader Government-as-a-Platform architecture. It connects to CamDX (Cambodia Data Exchange) to enable secure, consent-based sharing of identity credentials between government agencies and private sector participants.\n\nWhen a bank or fintech company needs to verify a customer\'s identity, the request flows through CamDX to CamDigiKey, which returns a verified credential without exposing raw biometric data. This privacy-preserving architecture follows international standards for digital identity frameworks and positions Cambodia ahead of many regional peers in identity infrastructure maturity.',
    },
    {
      heading: 'eKYC Capabilities and Financial Inclusion',
      content: 'CamDigiKey\'s electronic Know Your Customer (eKYC) functionality is transforming financial inclusion in Cambodia. By enabling remote identity verification, CamDigiKey eliminates the need for in-person branch visits, making financial services accessible to rural populations for the first time.\n\nThe eKYC process supports multiple verification levels, from basic identity confirmation to enhanced due diligence for high-value transactions. Financial institutions connected to CamDigiKey can onboard customers in minutes rather than days, dramatically reducing operational costs while meeting NBC regulatory requirements for customer identification.',
      table: {
        caption: 'CamDigiKey eKYC Verification Levels',
        headers: ['Level', 'Verification Method', 'Use Case', 'Processing Time'],
        rows: [
          ['Basic', 'National ID + Selfie', 'Account Opening, Mobile Wallets', 'Under 2 minutes'],
          ['Standard', 'Biometric Match + Liveness Check', 'Bank Accounts, Loan Applications', 'Under 5 minutes'],
          ['Enhanced', 'Multi-factor + Document Verification', 'High-value Transactions, Foreign Exchange', 'Under 15 minutes'],
          ['Enterprise', 'Business Registration + Director Verification', 'Corporate Accounts, Trade Finance', 'Under 30 minutes'],
        ],
      },
    },
    {
      heading: 'Enterprise Integration with CamFinTech',
      content: 'CamFinTech provides comprehensive CamDigiKey integration services for enterprises operating in Cambodia. Our consulting covers the full implementation lifecycle: from regulatory requirement assessment and API architecture design to production deployment and ongoing compliance monitoring.\n\nFor financial institutions, CamFinTech designs eKYC workflows that meet NBC anti-money laundering requirements while minimizing customer friction. For commercial enterprises, we implement CamDigiKey authentication flows that enable secure digital onboarding. CamFinTech\'s deep expertise in Cambodia\'s Government-as-a-Platform ecosystem ensures seamless interoperability between CamDigiKey, Bakong, and CamDX.',
    },
  ],
};
