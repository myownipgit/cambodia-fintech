import { ArticleContent } from '../types';

/*
 * CamInvoice correction, 2026-11-07 (targeted: CamInvoice sentences only; the
 * rest of this page is left for the general unsourced-figures pass).
 * - The FAQ said CamDigiKey is required for businesses interacting with
 *   CamInvoice. No source was found for it (the four MEF CamInvoice documents
 *   are Khmer scans with no usable text layer and were not checked page by page
 *   for it); CamInvoice removed from that list. Restore only from a fetched
 *   MEF/GDDE text that states it.
 * CamInvoice is an MEF system operated by the General Department of Digital
 * Economy (Prakas 075, 22 January 2025, Art. 4); its Phase 1 is business-to-
 * government. Bar for restoring: read in a fetched MEF/GDDE primary.
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
export const camdigikey: ArticleContent = {
  slug: 'camdigikey',
  title: 'What is CamDigiKey?',
  description: 'CamDigiKey is Cambodia\'s national digital identity system enabling eKYC verification, facial recognition authentication, and secure access to government and financial services.',
  type: 'glossary',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-07',
  readingTime: 3,
  schema: 'DefinedTerm',
  relatedSlugs: ['bakong', 'camdx', 'gaap'],
  relatedInstruments: ['sub-decree-207-camdigikey'],
  lead: 'CamDigiKey is Cambodia\'s national digital identity platform developed by the Ministry of Economy and Finance (MEF). It provides secure electronic Know Your Customer (eKYC) verification through facial recognition and biometric authentication, enabling citizens and businesses to access government and financial services digitally.',
  // Claims removed 2026-08-31. This array previously carried figures attributed
  // to named institutional reports with no URL, access date or page reference.
  // A verified sample was wrong more often than not — including a Cambodian FATF
  // mutual evaluation that never took place, and citations to bodies that do not
  // exist under the names given. Restore an entry only when its figure has been
  // read in a fetched primary, on the same evidence bar as app/content/regulatory,
  // and record where it was read. See vault ADR-007.
  claims: [],
  sources: [
    { publisher: 'Open Development Cambodia', label: 'Sub-Decree No. 207 on the management of the CamDigiKey platform, legal record', url: 'https://data.opendevelopmentcambodia.net/en/laws_record/sub-decree-no-207-on-the-management-of-camdigikey-platform', tier: 'primary' },
    { publisher: 'CamDigiKey', label: 'Official site (home page)', url: 'https://www.camdigikey.gov.kh', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-04',
  faqs: [
    { question: 'What is CamDigiKey and how does it work?', answer: 'CamDigiKey is Cambodia\'s national digital identity system operated by the Ministry of Economy and Finance. It works by registering citizens\' biometric data (facial recognition and fingerprints) linked to their national ID. Users can then authenticate their identity digitally for government services, banking, and commercial transactions through the CamDigiKey mobile app or integrated third-party applications.' },
    { question: 'Is CamDigiKey mandatory for businesses in Cambodia?', answer: 'CamDigiKey integration is increasingly required for businesses interacting with government platforms including CamDX, and certain NBC-regulated financial services. While not yet mandatory for all private sector activities, businesses that process government transactions or provide regulated financial services must support CamDigiKey authentication.' },
    { question: 'How can enterprises integrate with CamDigiKey?', answer: 'Enterprises integrate with CamDigiKey through the CamDX data exchange platform, which provides standardized APIs for identity verification. CamFinTech designs the eKYC workflow and compliance architecture and builds the client side of the integration; it operates no identity rail and holds no customer data.' },
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
      heading: 'Where CamFinTech\'s Work Sits',
      content: 'For an enterprise adding CamDigiKey to its customer onboarding, CamFinTech prepares the compliance work the identity flow must satisfy, including the customer due diligence a regulated institution\'s AML/CFT programme requires, and builds the client side of the integration. It is charged as a fee and handed over. The client operates it and holds its own customer data.\n\nOnboarding to CamDigiKey is decided by its operator under its own requirements, and the client is the applicant of record. CamFinTech does not host identity traffic or hold customer data.',
    },
  ],
};
