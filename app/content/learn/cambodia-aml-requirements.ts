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
  lead: 'Cambodia\'s anti-money laundering and counter-terrorist financing (AML/CFT) framework imposes comprehensive compliance obligations on all FinTech operators licensed by the National Bank of Cambodia. Governed by the 2020 Law on Anti-Money Laundering and Combating the Financing of Terrorism and enforced by the Cambodia Financial Intelligence Unit (CAFIU), the regime requires customer due diligence, transaction monitoring, suspicious activity reporting, and ongoing risk assessment. The obligations are statutory and carry criminal penalties, and they are assessed at licensing and in ongoing supervision -- so an AML programme is built at the start of a FinTech\'s life in Cambodia, not retrofitted to it.',
  // Claims corrected 2026-08-31 against primary sources. Four of the previous
  // four were wrong or unsourceable: money-laundering penalties were stated as
  // "$2.5 million and 5-10 years" (the statute says 2-5 years and KHR 100-400m
  // — the 5-10 year figure belongs to insider trading under the securities law);
  // an APG mutual evaluation was asserted for 2024 (Cambodia's MER was adopted
  // July 2017 and the fifth-round evaluation is scheduled for the 2029 plenary);
  // and the "4,200 STRs, 45% increase" and "over 25 institutions / under 10
  // minutes" figures could not be traced to any source. Do not reinstate a
  // number here that has not been read in a primary.
  claims: [
    { stat: 'Money laundering is punishable by imprisonment of two to five years and a fine of KHR 100 million to KHR 400 million, or up to the value of the property laundered. A legal entity faces a fine of KHR 200 million to KHR 1 billion.', source: 'Law on Anti-Money Laundering and Combating the Financing of Terrorism, penalty provisions', year: '2020' },
    { stat: 'A reporting entity that suspects funds are the proceeds of an offence, or related to terrorist financing, must report to CAFIU promptly and within 24 hours. Cash transactions above USD 10,000, including connected transactions reaching that total, are separately reportable.', source: 'Law on Anti-Money Laundering and Combating the Financing of Terrorism, Article 12', year: '2020' },
    { stat: 'Failure to file a required cash or suspicious transaction report carries imprisonment of one month to one year and a fine of KHR 50 million to KHR 200 million; a legal entity faces KHR 200 million to KHR 500 million.', source: 'Law on Anti-Money Laundering and Combating the Financing of Terrorism, penalty provisions', year: '2020' },
    { stat: 'Cambodia\'s mutual evaluation report was adopted by the Asia/Pacific Group on Money Laundering in July 2017, and the country has since been in enhanced follow-up with technical-compliance re-ratings. Its fifth-round mutual evaluation is scheduled for the 2029 plenary year.', source: 'APG, 2nd Enhanced Follow-Up Report and Global Fifth Round Mutual Evaluation Schedule', year: '2019' },
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
      content: 'CamDigiKey, Cambodia\'s national digital identity platform, has become the most efficient pathway for FinTech firms to meet CDD requirements. The system provides government-verified identity data through secure API integration, enabling electronic Know Your Customer (e-KYC) processes that replace manual document collection and verification.\n\nWhen a customer authenticates via CamDigiKey during onboarding, the FinTech firm receives verified identity attributes including full legal name, date of birth, national ID number, and photograph -- all authenticated by the government\'s identity database. This removes the need for physical document inspection and materially reduces identity-fraud risk at onboarding. For FinTech firms, CamDigiKey integration also demonstrates regulatory commitment to the NBC, which actively encourages digital identity adoption as part of Cambodia\'s Government-as-a-Platform strategy.',
    },
    {
      heading: 'Transaction Monitoring and Suspicious Activity Reporting',
      content: 'All NBC-licensed FinTech firms must implement automated transaction monitoring systems capable of detecting potentially suspicious activity in real-time. The monitoring system must flag transactions that exceed prescribed thresholds (currently $10,000 or equivalent for currency transaction reports), identify patterns consistent with money laundering typologies, and detect structuring or smurfing behavior.\n\nWhen suspicious activity is identified, the firm must report its suspicions to CAFIU promptly and within 24 hours, under Article 12 of the AML/CFT Law. The report may be transmitted by any expeditious written means; a report made by telephone must be confirmed in writing. FinTech firms must also implement a compliance escalation framework where frontline staff can flag concerns to the designated compliance officer, who evaluates and submits STRs. Importantly, tipping off -- informing the customer that an STR has been filed -- is a criminal offense under Cambodian law.',
    },
    {
      heading: 'The Mutual Evaluation Cycle and What It Assesses',
      content: 'Cambodia\'s AML/CFT framework is assessed by the Asia/Pacific Group on Money Laundering (APG), the FATF-style regional body for the Asia-Pacific. Cambodia\'s mutual evaluation report was adopted in July 2017. The country has since been in enhanced follow-up, submitting progress reports and receiving technical-compliance re-ratings where sufficient progress has been demonstrated -- the second such follow-up report was published in August 2019. Under the APG\'s published fifth-round schedule, Cambodia\'s next mutual evaluation falls in the 2029 plenary year, with technical-compliance submissions due ahead of it.\n\nA mutual evaluation assesses two distinct things, and the distinction matters for how a FinTech should prepare. Technical compliance asks whether the legal and institutional framework meets the 40 FATF Recommendations. Effectiveness asks whether the framework produces results in practice, measured against eleven Immediate Outcomes. A jurisdiction can rate well on the first and less well on the second, and the second is where a supervised institution\'s own programme quality is visible: the standard of its customer due diligence, the usefulness of the suspicious transaction reports it files, and whether its risk assessment reflects the business it actually writes.\n\nFor a FinTech, the practical implication is that an AML programme is assessed on what it produces, not on whether the policy document exists. That is the same test the NBC applies at licensing and in ongoing supervision, and it is the reason a programme built to be demonstrated -- with documented decisions, escalation records, and a risk assessment that is revisited -- is worth more than one built to be filed.',
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
      content: 'An effective AML compliance program for a Cambodian FinTech firm requires five core components. First, a documented AML/CFT policy approved by the board of directors and reviewed annually. Second, a designated compliance officer with sufficient authority, resources, and direct board reporting. Third, automated CDD and transaction monitoring systems integrated with CamDigiKey and Bakong data feeds. Fourth, regular staff training covering money laundering typologies, reporting obligations, and sanctions screening. Fifth, independent audit of the AML program at least annually.\n\nThe compliance program must be risk-based, meaning the intensity of monitoring and due diligence scales with assessed risk. Higher-risk products (cross-border transfers, anonymous prepaid instruments), higher-risk customers (PEPs, cash-intensive businesses), and higher-risk jurisdictions require proportionally more intensive controls. An AML compliance architecture has to meet NBC and CAFIU requirements without becoming operationally unworkable.',
    },
],
};
