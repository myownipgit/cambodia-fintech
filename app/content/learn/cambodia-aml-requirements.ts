import { ArticleContent } from '../types';

export const cambodiaAmlRequirements: ArticleContent = {
  slug: 'cambodia-aml-requirements',
  title: 'What Are Cambodia\'s AML Requirements for FinTech?',
  description: 'A comprehensive guide to Cambodia\'s anti-money laundering requirements for FinTech companies, covering AML/CFT law, CAFIU (FIU), CDD/EDD requirements, CamDigiKey for KYC, suspicious transaction reporting, FATF mutual evaluation, and penalties for non-compliance.',
  type: 'learn',
  cluster: 'compliance',
  publishedAt: '2026-03-25',
  updatedAt: '2026-03-25',
  readingTime: 6,
  schema: 'Article',
  relatedSlugs: ['nbc', 'camdigikey', 'gdt'],
  lead: 'Cambodia\'s anti-money laundering and counter-terrorist financing (AML/CFT) framework imposes comprehensive compliance obligations on all FinTech operators licensed by the National Bank of Cambodia. Governed by the 2020 Law on Anti-Money Laundering and Combating the Financing of Terrorism and enforced by the Cambodia Financial Intelligence Unit (CAFIU), the regime requires customer due diligence, transaction monitoring, suspicious activity reporting, and ongoing risk assessment. With Cambodia\'s FATF mutual evaluation driving heightened regulatory scrutiny, FinTech firms must build robust AML compliance infrastructure from day one or face severe penalties including license revocation.',
  claims: [
    { stat: 'Cambodia\'s revised AML/CFT law of 2020 aligns with all 40 FATF Recommendations and imposes penalties of up to $2.5 million and 5-10 years imprisonment for money laundering offenses.', source: 'Law on Anti-Money Laundering and Combating the Financing of Terrorism', year: '2020' },
    { stat: 'CAFIU received over 4,200 suspicious transaction reports (STRs) from reporting entities in 2024, a 45% increase from 2023, reflecting heightened compliance awareness across the financial sector.', source: 'Cambodia Financial Intelligence Unit Annual Report', year: '2024' },
    { stat: 'Cambodia underwent its FATF-style mutual evaluation by the Asia/Pacific Group on Money Laundering (APG) in 2024, with results informing regulatory tightening across all licensed financial institutions.', source: 'Asia/Pacific Group on Money Laundering', year: '2024' },
    { stat: 'CamDigiKey digital identity verification has been integrated into KYC processes by over 25 financial institutions, reducing customer onboarding time from days to under 10 minutes.', source: 'National Bank of Cambodia', year: '2025' },
  ],
  faqs: [
    { question: 'What AML laws apply to FinTech companies in Cambodia?', answer: 'FinTech companies in Cambodia are subject to the 2020 Law on Anti-Money Laundering and Combating the Financing of Terrorism, NBC Prakas on AML/CFT for banking and financial institutions, and CAFIU reporting directives. All licensed payment service providers, e-money issuers, and other financial institutions must implement risk-based AML programs, conduct customer due diligence, monitor transactions, and report suspicious activities to CAFIU.' },
    { question: 'What is CAFIU and how does it affect FinTech firms?', answer: 'CAFIU (Cambodia Financial Intelligence Unit) is Cambodia\'s financial intelligence unit responsible for receiving, analyzing, and disseminating suspicious transaction reports. All NBC-licensed FinTech firms must register with CAFIU, appoint a compliance officer, file STRs within prescribed timelines, and respond to CAFIU information requests. CAFIU can impose administrative sanctions for non-compliance with reporting obligations.' },
    { question: 'Can CamDigiKey be used for KYC verification?', answer: 'Yes. CamDigiKey, Cambodia\'s national digital identity system, provides government-verified identity data that FinTech firms can use for electronic KYC (e-KYC). CamDigiKey integration reduces onboarding time, eliminates manual document verification, and provides a higher assurance level than traditional ID checks. Over 25 financial institutions have integrated CamDigiKey into their KYC workflows.' },
  ],
  sections: [
    {
      heading: 'Cambodia\'s AML/CFT Legal Framework',
      content: 'Cambodia\'s AML/CFT regime is anchored by the 2020 Law on Anti-Money Laundering and Combating the Financing of Terrorism, which replaced and strengthened the original 2007 law. The 2020 revision aligned Cambodia\'s framework with all 40 FATF Recommendations, expanding the scope of covered entities, strengthening penalties, and establishing clearer obligations for digital financial services.\n\nThe law designates "reporting entities" that must comply with AML/CFT requirements, including all banks, MFIs, payment service providers, e-money issuers, securities firms, casinos, real estate agents, and dealers in precious metals. For FinTech firms, this means that any entity licensed by the NBC is automatically a reporting entity subject to the full AML/CFT compliance framework. The NBC issues supplementary Prakas (regulations) that translate the law\'s requirements into specific operational mandates for financial technology operators.',
    },
    {
      heading: 'Customer Due Diligence Requirements',
      content: 'Customer due diligence (CDD) is the cornerstone of Cambodia\'s AML framework. All FinTech firms must verify customer identity before establishing a business relationship, opening an account, or processing transactions above prescribed thresholds. Standard CDD requires collecting the customer\'s full name, date of birth, national ID or passport number, residential address, and source of funds declaration.\n\nFor individual customers, identity verification must be conducted against a government-issued document. For legal entities, CDD extends to identifying beneficial owners holding 20% or more ownership interest. Enhanced due diligence (EDD) is required for politically exposed persons (PEPs), high-risk jurisdictions, complex transaction patterns, and business relationships involving correspondent banking. FinTech firms must retain CDD records for at least five years after the relationship ends.',
      table: {
        caption: 'CDD and EDD Requirements by Customer Type',
        headers: ['Customer Type', 'Standard CDD', 'Enhanced Due Diligence Trigger', 'Documentation Required', 'Review Frequency'],
        rows: [
          ['Individual (Low Risk)', 'ID + Address + Source of Funds', 'Not required', 'National ID or Passport', 'Every 3 years'],
          ['Individual (High Risk)', 'Full CDD + Enhanced Checks', 'PEP, high-risk country, unusual activity', 'ID + Proof of Address + Source of Wealth', 'Annual'],
          ['SME / Legal Entity', 'CDD + Beneficial Ownership', 'Complex structures, foreign ownership', 'Registration + Ownership + Directors', 'Every 2 years'],
          ['Large Corporate', 'Full CDD + UBO Identification', 'Layered structures, high-risk sectors', 'Full corporate chain + UBO declarations', 'Annual'],
          ['Correspondent FI', 'Full CDD + EDD mandatory', 'Always required', 'License + AML policies + management info', 'Annual'],
        ],
      },
    },
    {
      heading: 'CamDigiKey Integration for KYC',
      content: 'CamDigiKey, Cambodia\'s national digital identity platform, has become the most efficient pathway for FinTech firms to meet CDD requirements. The system provides government-verified identity data through secure API integration, enabling electronic Know Your Customer (e-KYC) processes that replace manual document collection and verification.\n\nWhen a customer authenticates via CamDigiKey during onboarding, the FinTech firm receives verified identity attributes including full legal name, date of birth, national ID number, and photograph -- all authenticated by the government\'s identity database. This eliminates the need for physical document inspection, reduces identity fraud risk, and cuts onboarding time from days to under 10 minutes. Over 25 financial institutions have integrated CamDigiKey for KYC purposes as of 2025. For FinTech firms, CamDigiKey integration also demonstrates regulatory commitment to the NBC, which actively encourages digital identity adoption as part of Cambodia\'s Government-as-a-Platform strategy.',
    },
    {
      heading: 'Transaction Monitoring and Suspicious Activity Reporting',
      content: 'All NBC-licensed FinTech firms must implement automated transaction monitoring systems capable of detecting potentially suspicious activity in real-time. The monitoring system must flag transactions that exceed prescribed thresholds (currently $10,000 or equivalent for currency transaction reports), identify patterns consistent with money laundering typologies, and detect structuring or smurfing behavior.\n\nWhen suspicious activity is identified, the firm must file a Suspicious Transaction Report (STR) with CAFIU within the prescribed timeline -- typically within 3 business days of detection, or immediately for terrorism financing concerns. CAFIU received over 4,200 STRs in 2024, a 45% increase from the prior year. FinTech firms must also implement a compliance escalation framework where frontline staff can flag concerns to the designated compliance officer, who evaluates and submits STRs. Importantly, tipping off -- informing the customer that an STR has been filed -- is a criminal offense under Cambodian law.',
    },
    {
      heading: 'FATF Mutual Evaluation and Regulatory Pressure',
      content: 'Cambodia\'s AML/CFT framework is subject to periodic assessment by the Asia/Pacific Group on Money Laundering (APG), which conducts mutual evaluations to determine compliance with FATF standards. The 2024 mutual evaluation assessed both the technical compliance of Cambodia\'s legal framework and the effectiveness of its AML/CFT implementation.\n\nThe evaluation has driven significant regulatory tightening across the financial sector. The NBC has increased examination frequency for licensed institutions, demanded enhanced transaction monitoring capabilities, and required all reporting entities to update their institutional risk assessments. For FinTech firms, this means heightened scrutiny of AML compliance programs during both licensing and ongoing supervision. Firms that entered the market with minimal compliance infrastructure are facing remediation orders, while new applicants must demonstrate more robust AML systems than were required even two years ago.',
      table: {
        caption: 'Key FATF Recommendations Applicable to FinTech',
        headers: ['FATF Rec.', 'Topic', 'Cambodia Implementation', 'FinTech Impact'],
        rows: [
          ['R.10', 'Customer Due Diligence', 'NBC Prakas on CDD, CamDigiKey integration', 'Mandatory e-KYC for all customers'],
          ['R.15', 'New Technologies', 'Regulatory sandbox, FinTech-specific guidance', 'Risk assessments for digital products'],
          ['R.16', 'Wire Transfers', 'Bakong originator/beneficiary data requirements', 'Transaction data completeness mandates'],
          ['R.20', 'Suspicious Transaction Reporting', 'CAFIU STR filing requirements', '3-day STR filing deadline'],
          ['R.35', 'Sanctions', 'UNSC sanctions list screening', 'Real-time screening of all transactions'],
        ],
      },
    },
    {
      heading: 'Penalties for Non-Compliance',
      content: 'Cambodia\'s AML/CFT penalties are severe and have been strengthened under the 2020 law. Criminal penalties for money laundering offenses include imprisonment of 5-10 years and fines up to $2.5 million for individuals, with higher penalties for organized criminal involvement. Legal entities can face fines of up to five times the laundered amount, forced dissolution, and asset confiscation.\n\nFor FinTech firms, regulatory penalties short of criminal prosecution can be equally devastating. The NBC can impose administrative fines, require immediate remediation of compliance deficiencies, restrict business activities, suspend processing capabilities, or revoke licenses entirely. CAFIU can impose sanctions for failure to file STRs, late filing, or inadequate record keeping. In practice, the most common enforcement actions against FinTech firms involve inadequate transaction monitoring systems and incomplete CDD documentation -- operational deficiencies rather than intentional violations, but penalized nonetheless.',
    },
    {
      heading: 'Building an AML Compliance Program',
      content: 'An effective AML compliance program for a Cambodian FinTech firm requires five core components. First, a documented AML/CFT policy approved by the board of directors and reviewed annually. Second, a designated compliance officer with sufficient authority, resources, and direct board reporting. Third, automated CDD and transaction monitoring systems integrated with CamDigiKey and Bakong data feeds. Fourth, regular staff training covering money laundering typologies, reporting obligations, and sanctions screening. Fifth, independent audit of the AML program at least annually.\n\nThe compliance program must be risk-based, meaning the intensity of monitoring and due diligence scales with assessed risk. Higher-risk products (cross-border transfers, anonymous prepaid instruments), higher-risk customers (PEPs, cash-intensive businesses), and higher-risk jurisdictions require proportionally more intensive controls. CamFinTech helps firms design and implement AML compliance architectures that meet NBC and CAFIU requirements while remaining operationally efficient.',
    },
    {
      heading: 'CamFinTech\'s AML Advisory Services',
      content: 'CamFinTech provides specialized AML/CFT advisory services for FinTech firms operating or entering Cambodia. Our services cover the full compliance lifecycle: institutional risk assessment development, AML/CFT policy and procedure drafting aligned with NBC Prakas requirements, CamDigiKey integration architecture for e-KYC workflows, transaction monitoring system specification and vendor selection, CAFIU registration and STR filing process setup, and staff training program development.\n\nOur advisory approach recognizes that AML compliance is not a one-time project but an ongoing operational function that must evolve with regulatory changes and business growth. CamFinTech maintains active engagement with NBC and CAFIU regulatory developments, ensuring our clients\' compliance programs remain current. For firms preparing for NBC examinations, we provide pre-examination readiness assessments that identify and remediate gaps before the regulator arrives. Our goal is to make AML compliance a competitive advantage rather than a cost burden for Cambodia\'s FinTech operators.',
    },
  ],
};
