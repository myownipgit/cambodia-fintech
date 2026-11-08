import { ArticleContent } from '../types';

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
export const whatIsCamDigiKey: ArticleContent = {
  slug: 'what-is-camdigikey',
  title: 'What is CamDigiKey and Why Does It Matter for FinTech?',
  description: 'CamDigiKey is Cambodia\'s national digital identity platform providing eKYC, facial recognition, AI liveness detection, and OAuth 2.0 SSO for financial onboarding and government services.',
  type: 'learn',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-04',
  readingTime: 6,
  schema: 'Article',
  relatedSlugs: ['camdigikey', 'camdx', 'gaap'],
  relatedInstruments: ['sub-decree-207-camdigikey'],
  lead: 'CamDigiKey is Cambodia\'s national digital identity and electronic Know Your Customer (eKYC) platform, operated by the Ministry of Post and Telecommunications under the Digital Government Committee. Launched as part of Cambodia\'s Digital Government Policy 2022-2035, CamDigiKey provides citizens and residents with a single, government-verified digital identity that can be used for financial account opening, government service access, and private-sector authentication via OAuth 2.0 single sign-on. For FinTech companies operating in Cambodia, CamDigiKey is rapidly becoming the mandatory gateway for customer onboarding.',
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
    { question: 'Is CamDigiKey mandatory for opening a bank account in Cambodia?', answer: 'Not yet universally, but the NBC is progressively mandating eKYC through CamDigiKey for new financial account openings. Several banks and all licensed payment service providers are already required to support CamDigiKey verification. The phased mandate is expected to cover all regulated financial institutions by 2027.' },
    { question: 'How does CamDigiKey protect user privacy?', answer: 'CamDigiKey follows a consent-based data sharing model. When a FinTech company requests identity verification, the user must explicitly approve each data field shared. Biometric data is stored encrypted on government servers and never shared with third parties. The system complies with Cambodia\'s draft Personal Data Protection Law.' },
    { question: 'Can foreign nationals use CamDigiKey?', answer: 'Yes. Foreign nationals with valid Cambodian work permits or long-term visas can register for CamDigiKey using their passport and residency documents. The platform supports both Khmer national ID cards and foreign passports as source identity documents.' },
  ],
  sections: [
    {
      heading: 'The eKYC Process Explained',
      content: 'CamDigiKey\'s eKYC process replaces the traditional in-branch identity verification that has historically slowed financial account opening in Cambodia. The process starts when a user downloads the CamDigiKey app and scans their national ID card or passport using optical character recognition (OCR). The system extracts name, date of birth, ID number, and other fields automatically.\n\nNext, the platform performs a biometric verification step. The user takes a live selfie, which is compared against the photo on their identity document using facial recognition algorithms. An AI-powered liveness detection module ensures the user is physically present and not using a printed photo or video replay. The entire process takes under three minutes and produces a verified digital identity credential stored in the user\'s CamDigiKey profile.',
    },
    {
      heading: 'Facial Recognition and AI Liveness Detection',
      content: 'CamDigiKey employs convolutional neural network (CNN) based facial recognition that matches a live selfie against the photo extracted from the identity document. The system achieves a match accuracy rate above 99.5%, with built-in thresholds calibrated to minimize both false acceptances and false rejections.\n\nThe liveness detection module is critical for fraud prevention. It uses passive liveness analysis, examining texture, depth cues, and micro-movement patterns to distinguish a real human face from a photograph, screen display, or 3D mask. This approach does not require the user to perform actions like blinking or turning their head, which improves accessibility. The combined facial recognition and liveness pipeline processes in under two seconds on standard mobile devices.',
    },
    {
      heading: 'OCR and Document Verification',
      content: 'The OCR engine in CamDigiKey is trained to read both Khmer script and Latin characters from Cambodian national ID cards, passports, and driver licenses. It extracts structured data fields including full name, date of birth, gender, nationality, document number, and expiration date.\n\nBeyond OCR extraction, the system performs document authenticity checks. These include analysis of microprint patterns, hologram detection regions, and font consistency scoring. Suspicious documents are flagged for manual review by the Ministry\'s verification team. This multi-layered approach significantly reduces the risk of identity fraud that has historically plagued manual KYC processes in Cambodia\'s financial sector.',
      table: {
        caption: 'CamDigiKey Supported Identity Documents',
        headers: ['Document Type', 'Script Support', 'OCR Fields Extracted', 'Authenticity Checks'],
        rows: [
          ['Khmer National ID', 'Khmer + Latin', 'Name, DOB, ID number, address', 'Microprint, hologram, font analysis'],
          ['Cambodian Passport', 'Latin (ICAO MRZ)', 'MRZ data, photo, expiry', 'MRZ checksum, UV pattern'],
          ['Foreign Passport', 'Latin (ICAO MRZ)', 'MRZ data, photo, nationality', 'MRZ checksum validation'],
          ['Driver License', 'Khmer + Latin', 'Name, DOB, license number', 'Font consistency, layout check'],
        ],
      },
    },
    {
      heading: 'OAuth 2.0 Single Sign-On for FinTech',
      content: 'CamDigiKey exposes an OAuth 2.0 authorization framework that allows third-party applications, including banks, insurers, and FinTech platforms, to authenticate users against the national identity database. When a user clicks "Sign in with CamDigiKey" on a partner application, they are redirected to the CamDigiKey authorization server.\n\nThe user reviews the data fields the application is requesting (for example, verified name and date of birth for age verification, or full KYC profile for account opening) and grants consent. CamDigiKey then issues an access token to the requesting application, which can retrieve the authorized data fields via API. This eliminates the need for each financial institution to build and maintain its own KYC infrastructure, dramatically reducing onboarding cost and time.',
    },
    {
      heading: 'CamDX Integration and Data Exchange',
      content: 'CamDigiKey is tightly integrated with CamDX, Cambodia\'s national data exchange platform based on X-Road technology. When a FinTech company verifies a customer\'s identity through CamDigiKey, additional data lookups can be performed via CamDX, for example, querying tax registration status with the General Department of Taxation or verifying business registration with the Ministry of Commerce.\n\nThis integration creates a unified data layer where identity verification, business validation, and regulatory compliance checks happen through a single technical pipeline. For financial institutions, this means that a customer who completes CamDigiKey verification can be cross-referenced against government databases in real time, reducing manual compliance work from days to seconds.',
      table: {
        caption: 'CamDigiKey + CamDX Data Exchange Capabilities',
        headers: ['Data Source', 'Query Type', 'Use Case', 'Response Time'],
        rows: [
          ['Ministry of Interior', 'Identity verification', 'KYC for account opening', '< 2 seconds'],
          ['General Department of Taxation', 'TIN validation', 'Business onboarding', '< 3 seconds'],
          ['Ministry of Commerce', 'Business registration', 'Corporate KYC', '< 3 seconds'],
          ['NBC Licensed Entity Register', 'License status', 'Partner due diligence', '< 2 seconds'],
          ['Ministry of Labour', 'Work permit status', 'Foreign national KYC', '< 3 seconds'],
        ],
      },
    },
    {
      heading: 'Financial Onboarding Use Cases',
      content: 'The primary use case for CamDigiKey in FinTech is streamlined account opening. A customer can open a bank account, apply for a microfinance loan, or register for a payment wallet without visiting a branch. The entire process, from identity capture to verified account creation, takes under five minutes on a mobile device.\n\nBeyond account opening, CamDigiKey enables risk-tiered onboarding. A basic CamDigiKey verification allows low-value wallet accounts, while enhanced verification with additional document checks unlocks full banking services. Insurance companies use CamDigiKey for policyholder verification and claims authentication. Securities firms use it for investor registration. Each use case reduces fraud exposure while improving customer conversion rates.',
    },
    {
      heading: 'Privacy Framework and Data Protection',
      content: 'CamDigiKey operates under a consent-based architecture aligned with international privacy principles. Biometric templates are stored as encrypted mathematical representations, not raw images, on government infrastructure. These templates cannot be reverse-engineered into photographs.\n\nData sharing follows a strict minimization principle. When a FinTech company requests verification, CamDigiKey shares only the specific fields the user consents to release. A payment wallet might only need verified name and date of birth, while a bank loan application might require full address and employment verification. Cambodia\'s draft Personal Data Protection Law, expected to be enacted by 2027, will codify these protections into statute, aligning Cambodia with ASEAN data protection standards.',
    },
    {
      heading: 'Where CamFinTech\'s Work Sits',
      content: 'For an enterprise adding CamDigiKey to its customer onboarding, CamFinTech prepares the compliance work the identity flow must satisfy, including the customer due diligence a regulated institution\'s AML/CFT programme requires, and builds the client side of the integration. It is charged as a fee and handed over. The client operates it and holds its own customer data.\n\nOnboarding to CamDigiKey is decided by its operator under its own requirements, and the client is the applicant of record. CamFinTech does not host identity traffic or hold customer data.',
    },
  ],
};
