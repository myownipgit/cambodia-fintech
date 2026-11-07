import { ArticleContent } from '../types';

/*
 * Figure pass 2026-11-07 (busiest-page-first, GA4 rank 4). Read in full that
 * day: the National Trade Repository's English record (unofficial translation)
 * of Prakas B14-017-161, Articles 1-36. What the page now says about process,
 * licence term and ongoing obligations is taken from that record and cites the
 * article. Removed, not hedged, so nobody restores these from git:
 *
 * - "The NBC's regulatory sandbox, launched in 2023", customer caps of
 *   2,000-5,000, a 6-12 month testing period, "approximately 15 firms" and the
 *   five-phase sandbox table. No instrument in app/content/regulatory
 *   establishes an NBC sandbox; the only sandbox read in a primary is SERC's
 *   (Notification 083/25), for digital-asset businesses. Non-existence of an
 *   NBC sandbox is NOT proved; the page simply does not describe one.
 * - "6-12 months" standard timeline and "12-18 months" sandbox graduation.
 *   Replaced by Article 11: written decision within six months of receipt,
 *   extendable by the NBC.
 * - 100% foreign ownership of PSPs, e-money issuers and banks, "the Council for
 *   the Development of Cambodia allows", the resident-director requirement,
 *   free repatriation under the Law on Foreign Exchange, and the list of
 *   source countries. No primary read. The licence-category table (with its
 *   "Foreign Ownership" and subjective "Regulatory Burden" columns and an
 *   unverified "Specialized Bank" row) went with them.
 * - NBC "Financial Technology and Innovation Department", a 2-4 week
 *   pre-consultation phase, quarterly reporting contents, "NBC-approved
 *   auditor", independent penetration testing. Not in the Prakas.
 * - "Common Pitfalls": reasons for rejection, "the NBC has become increasingly
 *   rigorous", and conditional approvals "extending timelines by 6-12 months".
 *   Unsourced, and commentary on a regulator's process (ADR-006). Rewritten
 *   as what Article 9 requires an application to contain.
 * - "the regulatory sandbox attracting international entrants" (lead).
 *
 * Deliberately NOT published although the record states them: the Article 10
 * fees, the Article 15 capital-guarantee percentage, and the daily fines in
 * Articles 12, 29 and 33. The English record is an unofficial translation with
 * a damaged text layer in places, and these have not been checked against the
 * NBC's Khmer text, as Article 13 was. Bar for restoring any figure: read in
 * the issuer's text, recorded in `claims` with the article.
 */
export const fintechLicenseCambodia: ArticleContent = {
  slug: 'fintech-license-cambodia',
  title: 'How to Get a FinTech License in Cambodia',
  description: 'How a payment or e-money business is licensed in Cambodia under NBC Prakas B14-017-161: who needs a licence, what the application must contain, the minimum capital, the six-month decision window, and the obligations that follow.',
  type: 'learn',
  cluster: 'compliance',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-07',
  readingTime: 6,
  schema: 'Article',
  relatedSlugs: ['nbc', 'gdt', 'gaap'],
  relatedInstruments: ['law-on-banking', 'prakas-b14-017-161', 'law-on-nbfsa', 'prakas-093', 'notification-083-25'],
  lead: 'A business that provides payment services in Cambodia, including issuing electronic money, must hold a licence from the National Bank of Cambodia (NBC) under Prakas B14-017-161 on the Management of Payment Service Institutions. The Prakas sets out who needs a licence, what an application must contain, the minimum capital, how long the NBC has to decide, and the obligations that follow. With the National Bank of Cambodia reporting that the number of digital payment transactions grew 78% in 2024, it is the instrument most FinTech firms entering the payments market will be licensed under. This page sets out what the Prakas says, cites the article for each point, and says where its record stops.',
  // Claims removed 2026-08-31. This array previously carried figures attributed
  // to named institutional reports with no URL, access date or page reference.
  // A verified sample was wrong more often than not — including a Cambodian FATF
  // mutual evaluation that never took place, and citations to bodies that do not
  // exist under the names given. Restore an entry only when its figure has been
  // read in a fetched primary, on the same evidence bar as app/content/regulatory,
  // and record where it was read. See vault ADR-007.
  //
  // First restoration, 2026-11-04. The lede asserted "digital payment volumes
  // exceeding $78 billion in 2024". The NBC's own annual payment-system report
  // says, on its foreword page, that the NUMBER of digital payment transactions
  // and their VALUE rose 78% and 38% respectively against 2023 — the "$78 billion"
  // was the 78% growth rate transcribed as a currency total. Fetched and read
  // 2026-11-04: "របាយការណ៍ប្រព័ន្ធទូទាត់សងប្បាក់នៅកម្ពុជា ប្រចាំឆ្នាំ២០២៤"
  // (Annual Report on the Payment System in Cambodia 2024), Khmer, p. i.
  // NBC's own copy 404s; read from the Open Development Cambodia mirror:
  // https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf
  // The report is the NBC's, not a secondary aggregator's. The GDP multiple is
  // quoted as the NBC states it. Press reports give "330% of GDP" for Bakong alone
  // in 2024; why the two differ has not been established, so do not reconcile them.
  // A search of three guessed NBC paths found no English edition, which is not proof
  // that none exists.
  claims: [
    { stat: 'A payment service institution must have minimum capital of not less than KHR 8,000,000,000, in cash. The NBC may change the requirement. The NBC list of Prakas and circulars showed no amendment to this Prakas when checked on 4 November 2026; confirm the current figure with the NBC or Cambodian counsel before relying on it.', source: 'National Bank of Cambodia, Prakas B14-017-161 P.K, Article 13, National Trade Repository record', year: '2017', url: 'https://cambodiantr.gov.kh/en/document/?title=prakas-on-the-management-of-payment-service-institution' },
    { stat: 'The number of digital payment transactions in Cambodia grew 78% during 2024 and their value grew 38%, both measured against 2023. The National Bank of Cambodia puts the total value at approximately 15 times gross domestic product.', source: 'National Bank of Cambodia, Annual Report on the Payment System in Cambodia 2024 (Khmer), foreword, p. i (Open Development Cambodia copy)', year: '2024', url: 'https://data.opendevelopmentcambodia.net/km/dataset/374d9edd-4808-4d3a-bf23-2a5088d581a2/resource/5d48e5f6-d625-47a0-a801-98e9a7dc3dea/download/psd-annual-book-2024.pdf' },
    { stat: 'The NBC notifies its decision on a payment service institution licence application in writing within six months of receiving it, and may extend the review where necessary. It first grants approval in principle with conditions and a timeline; the licence is granted once those conditions are met. A licence is valid for six years, and renewal must be applied for at least three months before expiry.', source: 'National Bank of Cambodia, Prakas B14-017-161 P.K, Articles 11 and 12, National Trade Repository record (unofficial English translation)', year: '2017', url: 'https://cambodiantr.gov.kh/en/document/?title=prakas-on-the-management-of-payment-service-institution' },

  ],
  sources: [
    { publisher: 'Cambodia National Trade Repository', label: 'Prakas on the Management of Payment Service Institution, official record', url: 'https://cambodiantr.gov.kh/en/document/?title=prakas-on-the-management-of-payment-service-institution', tier: 'primary' },
    { publisher: 'Financial Services Authority (FSA), Cambodia', label: 'Cambodia FinTech Development Policy, official portal', url: 'https://fintech.fsa.gov.kh/cambodia-fintech-development-policy?lang=en', tier: 'primary' },
    { publisher: 'National Bank of Cambodia', label: 'Official site (home page)', url: 'https://www.nbc.gov.kh', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-04',
  faqs: [
    { question: 'What types of FinTech licenses does Cambodia offer?', answer: 'For payments, one: the payment service institution licence under NBC Prakas B14-017-161, which covers payment accounts, transfers, remittance, payment initiation and issuing payment instruments including electronic money. The Prakas has no licence categories or tiers; an electronic money issuer is a payment service institution licensed to issue electronic money. Deposit-taking and lending sit under the banking and microfinance regimes, and digital assets held for investment under SERC Prakas 093, where completing SERC\'s FinTech Regulatory Sandbox is a precondition to applying (Notification 083/25).' },
    { question: 'Can foreigners own a FinTech company in Cambodia?', answer: 'This page has not verified a foreign-ownership rule for payment service institutions, so it does not state one. What the Prakas does require is NBC approval before any change in the structure of capital contributors or management (Article 25). Ownership limits, where they apply, come from investment and sector rules outside this Prakas; confirm the position for a specific structure with Cambodian counsel.' },
    { question: 'How long does it take to get a FinTech license in Cambodia?', answer: 'Under Article 11 of Prakas B14-017-161 the NBC notifies its decision in writing within six months of receiving an application, and may extend the review where necessary. Approval comes first in principle, with conditions and a timeline; the licence is granted once those conditions are met, and lapses if they are not met in time without an approved extension. The licence then runs for six years (Article 12).' },
  ],
  sections: [
    {
      heading: 'Who Needs a Licence',
      content: 'Article 8 of Prakas B14-017-161 requires any legal person that intends to provide payment services in Cambodia to obtain a licence from the NBC; banks and financial institutions that intend to provide payment services seek the NBC\'s initial approval instead. Article 6 defines payment services: placing cash on and withdrawing it from payment accounts, executing payment transactions and credit transfers, issuing payment instruments, money remittance, payment initiation, and other services the NBC defines. Issuing electronic money is reserved to banks, financial institutions and licensed payment service institutions (Article 20).\n\nArticle 4 places some activity outside the Prakas, including the provision of information-technology systems that support payment services without possessing the funds. The test is what a firm does, and in particular whether it holds payment-service users\' money, not what it calls itself.\n\nOther FinTech activity is licensed elsewhere. Deposit-taking and lending sit under the banking and microfinance regimes of the NBC. Digital assets held for investment are a securities matter for SERC under Prakas 093, and only graduates of SERC\'s FinTech Regulatory Sandbox may apply for that licence (Notification 083/25). Cryptoasset services under the NBC were added separately by Prakas B7-024-735.',
    },
    {
      heading: 'What the Application Must Contain',
      content: 'Article 9 lists the conditions an applicant must meet and the material it must file. They include a business plan with a forecast budget for the first three financial years; evidence of adequate capital; a description of how users\' funds will be safeguarded; governance arrangements and internal controls, including risk-management and accounting procedures; incident monitoring and reporting; control of access to sensitive data; business-continuity arrangements; security controls and mitigation measures; the identity of directors and of the persons responsible for management, with evidence of their fitness and experience; the identity of the statutory auditors; the articles of association and other legal documents; and the head-office address.\n\nMost of that list is operational rather than legal. A payments business is, in large part, an engineering organisation, and the Article 9 file asks it to show in writing how its systems protect users\' money and data. Preparing that file completely is the applicant\'s work; the decision is the NBC\'s.',
    },
    {
      heading: 'Decision, Approval in Principle and Licence Term',
      content: 'Under Article 11 the NBC notifies its decision in writing within six months of receiving an application, and may extend the review where necessary. A positive decision is first an approval in principle, with specific conditions and a timeline for meeting them. If the applicant does not meet them in time, and no extension has been requested and approved, the approval in principle lapses. The licence is granted once the NBC is satisfied that every condition has been met.\n\nA licence is valid for six years (Article 12). Renewal must be applied for at least three months before expiry, and is available only if the institution\'s activities comply with the applicable law and any infractions have been remedied. A renewal that adds new services, or substantially different ways of providing the same services, is treated as a new application. The NBC may suspend or revoke a licence that is not used within six months of being granted, among other grounds (Article 32).',
    },
    {
      heading: 'Capital Requirements and Financial Conditions',
      content: 'Capital is a condition of the licence rather than a formality. Under Article 13 of Prakas B14-017-161 a payment service institution must have minimum capital of not less than KHR 8,000,000,000, in cash, and its net worth may not fall below that amount (Article 14). The NBC may change the requirement, so confirm the current figure with the NBC or Cambodian counsel before relying on it for a capital plan. This page does not state figures for other licence types, because they have not been checked against their own instruments.\n\nThe same Prakas requires a licensed institution to place a capital guarantee in an account at the NBC (Article 15), and to safeguard funds received from payment service users, either in a separate trust account at a commercial bank or in secure, liquid, low-risk assets as the NBC defines them (Article 16). Funds held in trust do not belong to the institution, and on insolvency they are frozen for return to users.',
    },
    {
      heading: 'Ongoing Obligations',
      content: 'The obligations that follow the licence are set out in the same Prakas. A licensed institution submits a supervisory return to the NBC by the 10th of the following month, on the NBC\'s templates (Article 29), and keeps its records for at least five years (Article 30). The NBC conducts an annual examination of the institution and its agents on 15 days\' notice, and may examine without notice where it has reason to believe the Prakas is being breached (Article 27).\n\nFor AML/CFT, the institution must maintain an internal system to detect and monitor cash and suspicious transactions, identify users and carry out customer due diligence, report suspicious transactions to the relevant authority, and appoint a compliance officer for AML/CFT (Article 23). It must also maintain security, contingency and fraud-detection systems (Article 21) and disclose fees, terms and a dispute-resolution route to users (Article 22). Using agents, outsourcing operational functions, and changing capital contributors, management or operating procedures each require notice to or approval from the NBC (Articles 17, 18 and 25).',
    },
  ],
};
