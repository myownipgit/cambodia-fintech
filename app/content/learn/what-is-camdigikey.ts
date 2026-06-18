import { ArticleContent } from '../types';

export const whatIsCamDigiKey: ArticleContent = {
  slug: 'what-is-camdigikey',
  title: 'What is CamDigiKey and Why Does It Matter for FinTech?',
  description: 'CamDigiKey is Cambodia\'s national digital identity platform providing eKYC, facial recognition, AI liveness detection, and OAuth 2.0 SSO for financial onboarding and government services.',
  type: 'learn',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-06-18',
  readingTime: 6,
  schema: 'Article',
  relatedSlugs: ['camdigikey', 'camdx', 'gaap'],
  lead: 'CamDigiKey is Cambodia\'s national digital identity and electronic Know Your Customer (eKYC) platform, operated by the Ministry of Post and Telecommunications under the Digital Government Committee. Launched as part of Cambodia\'s Digital Government Policy 2022-2035, CamDigiKey provides citizens and residents with a single, government-verified digital identity that can be used for financial account opening, government service access, and private-sector authentication via OAuth 2.0 single sign-on. For FinTech companies operating in Cambodia, CamDigiKey is rapidly becoming the mandatory gateway for customer onboarding.',
  claims: [
    { stat: 'Cambodia\'s Digital Government Policy 2022-2035 mandates digital identity coverage for 70% of the adult population by 2030, with CamDigiKey as the primary national digital ID platform.', source: 'Royal Government of Cambodia Digital Government Policy', year: '2022' },
    { stat: 'Countries with national digital ID systems reduce customer onboarding costs by 40-60% for financial institutions compared to manual KYC processes.', source: 'World Bank ID4D Global Dataset', year: '2024' },
    { stat: 'Cambodia\'s financial inclusion rate reached 73% of adults with at least one financial account in 2024, up from 59% in 2021, driven in part by simplified digital onboarding.', source: 'World Bank Global Findex Database', year: '2024' },
    { stat: 'The GSMA estimates that robust digital identity can unlock an additional 3-6% of GDP for developing economies through reduced friction in financial and government services.', source: 'GSMA Digital Identity Programme', year: '2023' },
  ],
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
      heading: 'Strategic Approval-Navigation from CamFinTech',
      content: 'CamFinTech provides fee-only approval-navigation and compliance programme delivery for enterprises adopting CamDigiKey in their customer onboarding workflows. We scope the compliance workflow, the OAuth 2.0 / CamDX integration requirements, and the user-experience constraints that Cambodian market conditions impose — then coordinate the technical build with accredited Service Providers.\n\nOur approach recognizes that CamDigiKey adoption is not merely a technical project but a strategic positioning decision. Financial institutions that move to CamDigiKey-native onboarding now will benefit from lower customer acquisition costs, faster time-to-revenue on new accounts, and regulatory goodwill as the government expands the digital identity mandate. CamFinTech navigates the approval and runs the compliance programme; the build itself sits with accredited partners. We never operate an identity rail or hold customer data.',
    },
  ],
};
