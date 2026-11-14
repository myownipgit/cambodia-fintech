import { ArticleContent } from '../types';

/*
 * Figure pass, 2026-11-15. Search Console: 896 impressions at 1% CTR in the
 * 3 months to 11 Nov, the highest impression count on the site. Rebuilt
 * against an English reproduction of the AML/CFT Law 2020 (Bun & Associates,
 * "Country Update - Cambodia: AML", Thomson Reuters, 5 October 2020; a law
 * firm's statement of the statute meets the CLAUDE.md bar), CAFIU's own
 * English publications (STR guideline, 30 April 2018; APG 2nd and 3rd
 * enhanced follow-up reports, August 2019 and July 2021), and Sub-Decree 207
 * for CamDigiKey. The 2020 law in Khmer is the Royal Kram of 27 June 2020
 * (Open Development Cambodia scan); article numbers are given only where the
 * reproduction states them (Arts. 6, 12, 15, 24).
 *
 * The page contradicted its own claims block, which was corrected on
 * 2026-08-31. Removed, not hedged:
 * - Penalties section: "imprisonment of 5-10 years and fines up to $2.5
 *   million", "fines of up to five times the laundered amount". The statute
 *   says 2-5 years and KHR 100-400m (legal entity KHR 200m-1bn); 5-10 years
 *   belongs to insider trading under the securities law.
 * - FATF table: "3-day STR filing deadline". Art. 12: promptly, within 24 hours.
 * - CamDigiKey FAQ: "over 25 financial institutions have integrated", flagged
 *   untraceable on 2026-08-31 and still live. Also "Mandatory e-KYC for all
 *   customers" and "higher assurance than traditional ID checks". Sub-Decree
 *   207 Art. 22: CamDigiKey eKYC is not a substitute for an ID card or passport.
 * - "beneficial owners holding 20% or more". The law requires reasonable
 *   measures to identify the ultimate beneficial owner and states no threshold.
 * - The CDD review-frequency table ("every 3 years", "every 2 years", annual)
 *   and "source of funds declaration" as standard CDD. Not in the law.
 * - "aligned with all 40 FATF Recommendations", "Regulatory sandbox,
 *   FinTech-specific guidance", "Bakong originator/beneficiary data
 *   requirements", "real-time screening of all transactions", "automated
 *   transaction monitoring ... in real-time", "the most common enforcement
 *   actions ... inadequate transaction monitoring". Unsourced.
 * - "All NBC-licensed FinTech firms must register with CAFIU, appoint a
 *   compliance officer". Not in the reproduction read; left to the NBC Prakas.
 * - "board-approved policy reviewed annually", "independent audit at least
 *   annually" as legal requirements. Restated as practice.
 *
 * Bar for restoring: read in the law, an NBC or CAFIU instrument, or a law
 * firm's statement of one, with the source recorded here.
 */

export const cambodiaAmlRequirements: ArticleContent = {
  slug: 'cambodia-aml-requirements',
  title: 'What Are Cambodia\'s AML Requirements for FinTech?',
  description: 'Cambodia\'s anti-money laundering requirements for FinTech firms under the AML/CFT Law of 27 June 2020: who is a reporting entity, customer due diligence, five-year record keeping, the 24-hour suspicious transaction report, the USD 10,000 cash report, tipping off, CAFIU, the APG evaluation cycle and the penalties.',
  type: 'learn',
  cluster: 'compliance',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-15',
  readingTime: 7,
  schema: 'Article',
  relatedSlugs: ['nbc', 'camdigikey', 'gdt'],
  relatedInstruments: ['sub-decree-207-camdigikey', 'prakas-b14-017-161'],
  lead: 'Cambodia\'s anti-money laundering and counter-terrorist financing (AML/CFT) obligations come from the Law on Anti-Money Laundering and Combating the Financing of Terrorism, promulgated on 27 June 2020 with immediate effect, which replaced the law of 2007. Banks, microfinance institutions, money remittance services and other financial institutions are reporting entities under it. A reporting entity must identify and verify its customers and their beneficial owners, keep records for at least five years, report cash transactions above USD 10,000, and report any suspicion to the Cambodia Financial Intelligence Unit (CAFIU) promptly and within 24 hours. Breaches carry both disciplinary sanctions, up to revocation of a licence, and criminal penalties.',
  // Claims corrected 2026-08-31 against primary sources and re-checked
  // 2026-11-15 against the Bun & Associates reproduction of the statute.
  // Do not reinstate a number here that has not been read in a primary or a
  // law firm's statement of one.
  claims: [
    { stat: 'Money laundering is punishable by imprisonment of two to five years and a fine of KHR 100 million to KHR 400 million, or up to the value of the property laundered. A legal entity faces a fine of KHR 200 million to KHR 1 billion.', source: 'Law on Anti-Money Laundering and Combating the Financing of Terrorism (27 June 2020), penalty provisions, as reproduced in Bun & Associates, Country Update - Cambodia: AML (Thomson Reuters, 5 October 2020), p. 4', year: '2020', url: 'https://backend.bun-associates.com/attributes/publication/file_1670992648.pdf' },
    { stat: 'A reporting entity that suspects funds are the proceeds of an offence, or related to terrorist financing, must report to CAFIU promptly and within 24 hours. Cash transactions above USD 10,000, including connected transactions reaching that total, are separately reportable.', source: 'Law on Anti-Money Laundering and Combating the Financing of Terrorism (27 June 2020), Article 12, as reproduced in Bun & Associates, Country Update - Cambodia: AML, p. 3', year: '2020', url: 'https://backend.bun-associates.com/attributes/publication/file_1670992648.pdf' },
    { stat: 'Failure to file a required cash or suspicious transaction report carries imprisonment of one month to one year and a fine of KHR 50 million to KHR 200 million; a legal entity faces KHR 200 million to KHR 500 million.', source: 'Law on Anti-Money Laundering and Combating the Financing of Terrorism (27 June 2020), penalty provisions, as reproduced in Bun & Associates, Country Update - Cambodia: AML, p. 4', year: '2020', url: 'https://backend.bun-associates.com/attributes/publication/file_1670992648.pdf' },
    { stat: 'Reporting entities must keep customer identification and transaction records for at least five years after the account is closed or the business relationship ends, sufficient to reconstruct individual transactions.', source: 'Law on Anti-Money Laundering and Combating the Financing of Terrorism (27 June 2020), record-keeping provision, as reproduced in Bun & Associates, Country Update - Cambodia: AML, p. 3', year: '2020', url: 'https://backend.bun-associates.com/attributes/publication/file_1670992648.pdf' },
    { stat: 'Cambodia\'s mutual evaluation report was adopted by the Asia/Pacific Group on Money Laundering in July 2017, and the country has since been in enhanced follow-up, with follow-up reports published in August 2019 and July 2021. Its fifth-round mutual evaluation is scheduled for the 2029 plenary year.', source: 'APG, 2nd and 3rd Enhanced Follow-Up Reports on Cambodia (CAFIU copies) and Global Fifth Round Mutual Evaluation Schedule', year: '2021', url: 'https://cafiu.gov.kh/api/client/upload/1722916933528-fileEn.pdf' },
  ],
  sources: [
    { publisher: 'Bun & Associates (Thomson Reuters)', label: 'Country Update - Cambodia: AML, 5 October 2020, reproducing the AML/CFT Law 2020 (PDF)', url: 'https://backend.bun-associates.com/attributes/publication/file_1670992648.pdf', tier: 'commentary' },
    { publisher: 'Open Development Cambodia', label: 'Royal Kram NS/RKM/0620/021 of 27 June 2020 promulgating the Law on Anti-Money Laundering and Combating the Financing of Terrorism (Khmer, PDF)', url: 'https://data.opendevelopmentmekong.net/dataset/332d7be7-a721-4ba3-b3e9-bdaf0c338b49/resource/01294946-1bda-4aa9-99dd-caed24414068/download/royal_kram-no_0620_021__27.06.2020.pdf', tier: 'primary' },
    { publisher: 'Cambodia Financial Intelligence Unit', label: 'Guideline on submitting Suspicious Transaction Reports, 30 April 2018, unofficial translation (PDF)', url: 'https://cafiu.gov.kh/api/client/upload/1722330496129-fileEn.pdf', tier: 'primary' },
    { publisher: 'Asia/Pacific Group on Money Laundering (CAFIU copy)', label: 'Mutual Evaluation of Cambodia: 2nd Enhanced Follow-Up Report, August 2019 (PDF)', url: 'https://cafiu.gov.kh/api/client/upload/1722916907324-fileEn.pdf', tier: 'primary' },
    { publisher: 'Asia/Pacific Group on Money Laundering (CAFIU copy)', label: 'Mutual Evaluation of Cambodia: 3rd Enhanced Follow-Up Report, July 2021 (PDF)', url: 'https://cafiu.gov.kh/api/client/upload/1722916933528-fileEn.pdf', tier: 'primary' },
    { publisher: 'Royal Government of Cambodia (Open Development Cambodia copy)', label: 'Sub-Decree No. 207 on the Management of the CamDigiKey Platform, 26 July 2023, unofficial English translation (PDF)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/214f5476-6075-405a-8226-2d02b5504b56/resource/e95ace4a-57ec-4f90-936b-6629fdd2ae0f/download/rgc_sub-decree-207_the-management-of-camdigikey-platform_en.pdf', tier: 'primary' },
    { publisher: 'Cambodia Financial Intelligence Unit', label: 'Official site (home page)', url: 'https://cafiu.gov.kh', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-15',
  faqs: [
    { question: 'What AML laws apply to FinTech companies in Cambodia?', answer: 'The Law on Anti-Money Laundering and Combating the Financing of Terrorism, promulgated on 27 June 2020 with immediate effect, replaced the law first adopted in 2007 and amended in 2013. Regulations issued under the old law remain in force until replaced, among them the 2008 Prakas on AML/CFT, the 2010 Prakas for reporting entities not regulated by the National Bank of Cambodia, and CAFIU\'s 2018 guideline on suspicious transaction reports. Banks, microfinance institutions, money remittance services, exchange offices and other financial institutions are reporting entities under the law; a FinTech firm licensed by the NBC should confirm which category it falls in and the NBC instruments that apply to it.' },
    { question: 'What is CAFIU and what does it require of a FinTech firm?', answer: 'The Cambodia Financial Intelligence Unit, established in 2008, receives, analyses and disseminates suspicious and cash transaction reports. A reporting entity must report cash transactions above USD 10,000 and any suspicion promptly, within 24 hours; give CAFIU or an investigating law enforcement agency further information on request; and comply if CAFIU directs it to hold a transaction, for up to 48 hours. Failing to provide information CAFIU requires under Article 6 of the law is itself an offence.' },
    { question: 'Can CamDigiKey be used for KYC verification?', answer: 'It can be one part of it. Under Sub-Decree 207, a business that is a member of CamDX and has the CamDX operator\'s permission can use CamDigiKey\'s eKYC, with the customer\'s consent each time. But Article 22 of the Sub-Decree says CamDigiKey eKYC cannot substitute for a national identity card or passport and is not proof of citizenship or residence. The AML/CFT law requires identity to be verified against reliable, independent sources such as a national ID card, passport or other official photo ID, so CamDigiKey works alongside those checks rather than replacing them.' },
  ],
  sections: [
    {
      heading: 'Cambodia\'s AML/CFT Legal Framework',
      content: 'The Law on Anti-Money Laundering and Combating the Financing of Terrorism was promulgated on 27 June 2020 with immediate effect. It replaced the law first adopted in 2007 and amended in 2013, but regulations issued under the old law stay in force until they are replaced. A separate law on combating the financing of proliferation of weapons of mass destruction was promulgated the same day.\n\nThe law defines the reporting entities that carry its obligations. They include banks and branches of foreign banks, non-bank financial institutions, microfinance institutions, credit cooperatives, leasing companies, investment and pension funds, exchange offices, money remittance services and trusts, among others. CAFIU is the national financial intelligence unit, and the law also provides for a council that advises it, made up of representatives of the Office of the Council of Ministers, the Ministries of Justice, Interior, and Economy and Finance, the NBC, and the head of CAFIU.',
    },
    {
      heading: 'Customer Due Diligence',
      content: 'Due diligence is risk-based: enhanced measures where risk is high, and simplified measures only where risk is assessed as low under CAFIU\'s guidance. A reporting entity must identify and verify its customer before establishing a business relationship, before an occasional transaction above the threshold set by the supervisory authority, whenever it suspects money laundering or terrorist financing regardless of the amount, and whenever it doubts identification data it already holds.\n\nAt a minimum, it records name, date of birth and address for an individual, and for a legal person its name, registration documents, tax identification number, address and telephone number. Identity is verified using reliable, independent sources such as a national ID card, passport or other official photo ID. The entity must identify the ultimate beneficial owner and take reasonable measures to verify that person\'s identity; where the beneficial owner of a legal entity cannot be determined, the person holding the senior management position is treated as the beneficial owner. It must also establish the purpose of the relationship, identify politically exposed persons, and monitor the relationship as it continues. If due diligence cannot be completed, the entity must not open the account or proceed, or must end the relationship, and should consider filing a suspicious transaction report.',
      table: {
        caption: 'When enhanced due diligence is required (AML/CFT Law 2020)',
        headers: ['Situation', 'Enhanced due diligence'],
        rows: [
          ['Business with institutions or persons in high-risk jurisdictions', 'Required'],
          ['Foreign politically exposed persons, their family members and close associates', 'Required'],
          ['Domestic and international politically exposed persons and their associates', 'Required where the relationship is assessed as high risk'],
          ['Operations or relationships assessed as high risk', 'Required'],
          ['Relationships assessed as low risk', 'Simplified measures permitted under CAFIU guidance'],
        ],
      },
    },
    {
      heading: 'Record Keeping and Wire Transfers',
      content: 'Customer identification records and transaction records must be kept for at least five years after the account is closed or the relationship ends, in a form that allows individual transactions to be reconstructed, including amounts and currencies, and they must be available to the supervisory authority. Wire transfers must carry the originator\'s name and address and, where there is an account, its number; without an account, a unique reference number.\n\nFor a FinTech firm, these are design requirements, not filing tasks. A payment flow that cannot reproduce who paid whom, how much, in which currency and when, five years after a customer leaves, does not meet the law however good its onboarding is.',
    },
    {
      heading: 'CamDigiKey and Identity Verification',
      content: 'CamDigiKey, the national digital identity platform, can support identity verification, within limits set by Sub-Decree 207. A business must be a member of CamDX and have the CamDX operator\'s permission to use CamDigiKey\'s eKYC, and the customer must consent each time their data is used. Article 22 of the Sub-Decree adds that CamDigiKey eKYC cannot substitute for a national identity card or passport and is not proof of citizenship or residence.\n\nIn compliance terms, CamDigiKey is a verification channel that sits alongside the identity checks the AML/CFT law requires. How far a particular institution may rely on it is a question for its supervisor\'s rules and its own counsel.',
    },
    {
      heading: 'Cash and Suspicious Transaction Reporting',
      content: 'Article 12 of the law sets two reporting duties. Any cash transaction above USD 10,000 must be reported to CAFIU, including several connected cash transactions whose total exceeds that amount. Separately, and whatever the amount, a reporting entity that suspects, or has reasonable grounds to suspect, that funds are the proceeds of an offence or related to terrorist financing must report its suspicion to CAFIU promptly and within 24 hours.\n\nReports go by any expeditious written means, and a report made by telephone must be confirmed in writing; CAFIU\'s 2018 guideline describes electronic reporting. After reporting, the entity must give CAFIU or an investigating law enforcement agency further information on request. Where a case is serious or urgent, CAFIU may direct the entity not to proceed with a transaction for up to 48 hours. Tipping off, meaning disclosing a report contrary to Article 15, is a criminal offence.',
    },
    {
      heading: 'The Mutual Evaluation Cycle and What It Assesses',
      content: 'Cambodia\'s AML/CFT framework is assessed by the Asia/Pacific Group on Money Laundering (APG), the FATF-style regional body for the Asia-Pacific. Cambodia\'s mutual evaluation report was adopted in July 2017. The country has since been in enhanced follow-up, submitting progress reports and receiving technical-compliance re-ratings where sufficient progress has been demonstrated; follow-up reports were published in August 2019 and July 2021. Under the APG\'s published fifth-round schedule, Cambodia\'s next mutual evaluation falls in the 2029 plenary year.\n\nA mutual evaluation assesses two distinct things, and the distinction matters for how a FinTech should prepare. Technical compliance asks whether the legal and institutional framework meets the FATF Recommendations. Effectiveness asks whether the framework produces results in practice. A jurisdiction can rate well on the first and less well on the second, and the second is where a supervised institution\'s own programme quality is visible: the standard of its customer due diligence, the usefulness of the suspicious transaction reports it files, and whether its risk assessment reflects the business it actually writes.\n\nFor a FinTech, the practical implication is that an AML programme is judged on what it produces, not on whether the policy document exists. A programme built to be demonstrated, with documented decisions, escalation records and a risk assessment that is revisited, is worth more than one built to be filed.',
    },
    {
      heading: 'Penalties for Non-Compliance',
      content: 'The law provides two tracks. Disciplinary sanctions for breaches of due diligence and reporting duties range from a warning and a reprimand, through prohibiting or limiting transactions for a period, to a fine, a proposal to demote responsible officers, and revocation of the business licence. Criminal penalties apply in parallel, and legal entities can be held criminally responsible, with additional penalties including dissolution, court surveillance, prohibition from activities and confiscation.',
      table: {
        caption: 'Criminal penalties under the AML/CFT Law 2020 (as reproduced by Bun & Associates, 2020)',
        headers: ['Offence', 'Individual', 'Legal entity'],
        rows: [
          ['Money laundering', '2 to 5 years and KHR 100m to 400m, or up to the value of the property', 'KHR 200m to 1bn, plus additional penalties'],
          ['Failing to file a cash or suspicious transaction report (Art. 12)', '1 month to 1 year and/or KHR 50m to 200m', 'KHR 200m to 500m, plus additional penalties'],
          ['Tipping off (Art. 15)', '1 month to 1 year and/or KHR 50m to 200m', 'KHR 200m to 500m, plus additional penalties'],
          ['Breach of professional secrecy (Art. 24)', '1 month to 1 year and/or KHR 50m to 200m', 'KHR 200m to 500m, plus additional penalties'],
          ['Failing to provide information to CAFIU (Art. 6)', '6 days to 1 month and/or KHR 10m to 100m', 'KHR 50m to 200m, plus additional penalties'],
        ],
      },
    },
    {
      heading: 'Building an AML Compliance Programme',
      content: 'The law requires a reporting entity to understand its money laundering and terrorist financing risks and to maintain internal controls appropriate to them, as CAFIU\'s guidance sets out. In practice a programme that meets that standard has five parts: a written AML/CFT policy that management owns; a compliance officer with the authority and resources to act; customer due diligence and transaction monitoring that match the firm\'s products, including the five-year records and wire-transfer data above; training, so that staff recognise and escalate suspicion; and periodic independent testing of whether the programme works.\n\nThe programme has to be risk-based. Higher-risk products, customers and jurisdictions call for more intensive controls; lower-risk ones may use simplified measures where CAFIU\'s guidance allows. The NBC\'s own instruments set further requirements for the institutions it licenses, and those should be read alongside the law.',
    },
  ],
};
