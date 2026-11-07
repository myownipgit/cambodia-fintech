import { ArticleContent } from '../types';

/*
 * CamInvoice correction, 2026-11-07 (targeted: CamInvoice sentences only).
 * Found false or untraceable, removed, not hedged:
 * - "The GDT ... oversees ... CamInvoice compliance", the GDT row's
 *   "e-invoicing" / "CamInvoice Prakas", "validates each invoice against GDT
 *   business rules" — FALSE as to operator. MEF Prakas 075 (22 January 2025),
 *   Art. 4: the MEF's General Department of Digital Economy (GDDE) operates
 *   CamInvoice. The GDT appears in none of the four MEF documents read.
 * - "All invoices issued by fintech companies to merchants, banks, or
 *   enterprises must be submitted to CamInvoice in real-time UBL 2.1 format",
 *   "any other B2B charges" — FALSE as to scope: Phase 1 is business-to-
 *   government (suppliers to the budget entities of named ministries).
 *   UBL 2.1 and the "digital tax stamp" — no technical primary could be read
 *   (e-invoice.gov.kh and gdde.mef.gov.kh returned 403 on 2026-11-06).
 * - "Invoices without valid CamInvoice stamps are not deductible for the
 *   buyer's corporate income tax" — no primary.
 * Bar for restoring: read in a fetched MEF/GDDE/GDT primary, recorded in `claims`.
 *
 * Updated 2026-11-07: MEF Circular 007 (signed 2026, read from the Khmer
 * original) adds Phase 1, Step 4 - 14 further ministries and institutions.
 * Phase 1 is no longer 'three steps'; do not reintroduce a fixed count.
 * Also later on 2026-11-07: CamInvoice's own developer documentation WAS read,
 * from Internet Archive snapshots (see knowledge/caminvoice-technical-compliance.ts
 * for URLs), so any '403 / no technical primary' note above is superseded. It
 * supports XML e-invoices in UBL format (no version stated), OAuth 2.0, and the
 * INVOICE / CREDIT_NOTE / DEBIT_NOTE types. It does NOT support 'UBL 2.1',
 * a 'clearance model', a 'digital tax stamp' or the GDT operating the system.
 */

/*
 * Figure pass 2026-11-07/08 (busiest-page-first, GA4 rank 5). The page was
 * rebuilt around what has been read in a primary: Prakas B14-017-161 (NTR
 * English record, Arts 1-36, read 2026-11-07), the AML/CFT Law Article 12
 * facts and APG record already verified (memory: project_corpus_evidence_bar),
 * the registry's Law on the NBFSA and Law on Banking entries, and the 20% rate
 * (Law on Taxation Art. 20, recorded in regulatory/instruments/prakas-192).
 * Removed, not hedged, so nobody restores these from git:
 *
 * - Lead: "the landmark Prakas on Payment Service Providers in 2019" — that
 *   instrument appears nowhere; the payments Prakas is B14-017-161 of June
 *   2017. "One of ASEAN's most structured" and "increasingly rigorous" went too.
 * - Regulator table: NBC "CBDC" (the NBC's white paper calls Bakong a payment
 *   system, not a CBDC), "Prakas on PSPs", and SERC/IRC as MEF bodies — the Law
 *   on the NBFSA (NS/RKM/0121/003) places securities and insurance under the
 *   Non-Bank Financial Services Authority. The amendment years "(1996, amended
 *   2023)" and "(1999, amended 2023)" — no primary; the PSI Prakas preamble
 *   cites the 1996 NBC law, its 2006 amendment, and the 1999 banking law.
 * - FAQs: 100% foreign ownership, resident director, physical office;
 *   "6-12 months" and a three-phase 2-3/3-6/1-3 month timeline with an "NBC
 *   Board of Directors" vote; unlicensed-operation penalties of KHR 200m and 5
 *   years, "asset seizure", "permanent disqualification" and "over 15
 *   unauthorized platforms shut down since 2022". Replaced by Arts 11 and 31.
 * - CDC investment incentives ("tax holidays of up to 6 years", "Foreign
 *   Investment Law" — the statute is named otherwise). Not read.
 * - AML: "(2020, amended 2023)", "transposes the FATF Forty", EDD above KHR 40m,
 *   SDD below KHR 4m, the CDD table with review frequencies. Not in any text read.
 * - Technology: "Prakas on Technology Risk Management (B7-020-275)" — number
 *   not in the registry, treat as unverified — and every specific hung on it:
 *   CISO, annual pen-testing, SIEM, AES-256/TLS 1.2, MFA, 30/90-day remediation,
 *   and a data-residency rule ("all customer data ... physically located within
 *   Cambodia", exemptions "rarely issued"). No primary. Replaced by PSI Art. 21.
 * - Tax: the VAT, withholding, minimum-tax, salary and patent rates and due
 *   dates, and "the GDT has allocated specific TIN ranges for NBC-licensed PSPs".
 *   Only the 20% rate survives, because the registry records its article.
 * - Digital lending: "Prakas on Lending by Technology (2023)", a PSP "digital
 *   lending endorsement", 7-day cooling-off, 18%/36% rate caps, credit-model
 *   registration, the SMS marketing ban. No primary. Replaced by PSI Art. 7.
 * - Sandbox: NBC sandbox launched 2023, 12 months, 5,000 users, 50% capital,
 *   "8 admitted, 5 graduated". No instrument read establishes an NBC sandbox
 *   (non-existence not proved). SERC's sandbox (Notification 083/25) is stated.
 * - FX: "Prakas on Foreign Exchange Reporting", USD 10,000 FX reporting to a
 *   Statistics Department, de-dollarisation targets, 12.5%/7.0% reserve ratios,
 *   USD 100,000 capital-account approval, PSP corridor "endorsements", the
 *   Bank of Thailand requirement, and the whole FX table. No primary.
 * - Consumer protection: "2024 Prakas on Financial Consumer Protection",
 *   24-hour / 15-day complaint timelines, an NBC "Financial Consumer Protection
 *   Unit", and the draft data-protection law's thresholds and dates. Replaced
 *   by PSI Art. 22. The status of a personal-data law is not stated.
 * - Roadmap: the 9-18 month, five-phase month-by-month plan and "the single
 *   largest determinant of total approval time".
 *
 * Bar for restoring any of it: read in the issuer's text, recorded in `claims`
 * or `sources` with the article — the app/content/regulatory bar.
 */
export const cambodiaFintechRegulation: ArticleContent = {
  slug: 'cambodia-fintech-regulation',
  title: 'Cambodia FinTech Regulation: Complete Licensing and Compliance Framework',
  description: 'A reference to Cambodia\'s FinTech regulatory framework: which authority covers which activity, the NBC payment service institution licence, AML/CFT reporting, tax registration and CamInvoice, and the obligations a licensed firm carries, each tied to the instrument that sets it.',
  type: 'knowledge',
  cluster: 'compliance',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-08',
  readingTime: 7,
  schema: 'TechArticle',
  relatedSlugs: ['nbc', 'gdt', 'fintech-license-cambodia', 'cambodia-aml-requirements'],
  relatedInstruments: ['law-on-banking', 'law-on-nbfsa', 'prakas-b14-017-161', 'prakas-093', 'notification-083-25', 'prakas-b7-024-735'],
  lead: 'Cambodian FinTech regulation is divided by activity. Payments and electronic money are licensed by the National Bank of Cambodia (NBC) under Prakas B14-017-161 of June 2017 on the Management of Payment Service Institutions, made under the 1999 Law on Banking and Financial Institutions. Securities, insurance, trusts and the other non-bank sectors sit under the Non-Bank Financial Services Authority (NBFSA) established by its 2021 law, with the Securities and Exchange Regulator of Cambodia (SERC) responsible for digital assets held for investment and the Insurance Regulator of Cambodia (IRC) for insurance. Tax registration and compliance are matters for the General Department of Taxation (GDT); CamInvoice is a Ministry of Economy and Finance system. This reference sets out what each instrument requires, cites the article where one has been read, and says where the record stops.',
  // Four further claims removed 2026-08-31 as unsourceable: PSP licence and
  // registered-user counts, fintech FDI, a CamInvoice VAT-efficiency figure, and
  // banking-sector entity counts. Only the entry below is traced to a primary.
  claims: [
    { stat: 'A payment service institution must have minimum capital of not less than KHR 8,000,000,000, in cash. The NBC may change the requirement. The NBC list of Prakas and circulars showed no amendment to this Prakas when checked on 4 November 2026; confirm the current figure with the NBC or Cambodian counsel before relying on it.', source: 'National Bank of Cambodia, Prakas B14-017-161 P.K, Article 13, National Trade Repository record', year: '2017', url: 'https://cambodiantr.gov.kh/en/document/?title=prakas-on-the-management-of-payment-service-institution' },
    // Corrected 2026-08-31. This previously asserted a "Largely Compliant" rating
    // on 32 of 40 FATF recommendations in a "2024 mutual evaluation, up from 18 in
    // the 2017 assessment". There was no 2024 Cambodian mutual evaluation, and
    // neither rating count could be traced to any source. The APG's 2nd Enhanced
    // Follow-Up Report states in terms that the MER was adopted in July 2017.
    { stat: 'Cambodia\'s mutual evaluation report was adopted by the Asia/Pacific Group on Money Laundering in July 2017. The country has since been in enhanced follow-up, receiving technical-compliance re-ratings where progress has been demonstrated; its fifth-round mutual evaluation is scheduled for the 2029 plenary year.', source: 'APG, 2nd Enhanced Follow-Up Report and Global Fifth Round Mutual Evaluation Schedule', year: '2019' },
  ],
  sources: [
    { publisher: 'Ministry of Economy and Finance', label: 'Prakas 075 on the launch of the Cambodia E-Invoicing System (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/a57a86ff-1c53-481e-a4f0-8b32fe96b6cf/resource/e433f7a7-0bd0-4407-8d58-c5f346be20dd/download/mef_prakas-075_launching-of-cambodia-e-invoicing-system_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 003, mandatory e-invoicing, Phase 1 Step 1 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/dataset/2ff2820c-df65-4d60-aa0f-806c65d82952/resource/d77ab51b-6f54-4960-b947-ffd4a4f2a5a4/download/mef_circular-003_obligation-to-use-e-invoice_kh_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 012, mandatory e-invoicing, Phase 1 Step 2 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/bce86ad2-6baf-456a-b49f-90c0b7b61f26/resource/e8c6b0ce-8f79-427e-a7e2-56f87c89ed1e/download/1756437973985-20250714_circular_to_6_lms_in_q3_2025.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 017, mandatory e-invoicing, Phase 1 Step 3 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/d244f7f4-ef43-43fe-8645-d79483c9b0c3/resource/7d904664-edbe-40fe-8e76-f4b119d6a51c/download/1.pdf', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Circular 007, mandatory e-invoicing, Phase 1 Step 4 (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/9bdb6142-b119-41c4-b2ae-5bdde281a8f6/resource/549d6645-3232-4fa3-8715-a8f61c79b1f9/download/1.pdf', tier: 'primary' },
    { publisher: 'Cambodia National Trade Repository', label: 'Prakas on the Management of Payment Service Institution, official record (unofficial English translation)', url: 'https://cambodiantr.gov.kh/en/document/?title=prakas-on-the-management-of-payment-service-institution', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-07',
  faqs: [
    { question: 'Can a foreign company obtain a fintech license in Cambodia?', answer: 'This page has not verified a foreign-ownership rule for payment service institutions, so it does not state one. The payment service institution licence is granted to a legal person (Prakas B14-017-161, Article 8), and any later change in the structure of capital contributors or management needs the NBC\'s prior approval (Article 25). Ownership limits, where they apply, come from investment and sector rules outside that Prakas; confirm the position for a specific structure with Cambodian counsel.' },
    { question: 'What are the penalties for operating a fintech service without a license?', answer: 'Prakas B14-017-161 requires any legal person intending to provide payment services in Cambodia to hold an NBC licence (Article 8), and provides that anyone who fails to comply with it is subject to the sanctions in Articles 52 and 54 of the Law on Banking and Financial Institutions (Article 31). The NBC may also suspend or revoke a licence on the grounds set out in Article 32. This page does not restate the statutory penalty amounts, which have not been checked against the law\'s text.' },
    { question: 'How long does the NBC licensing process take?', answer: 'Under Article 11 of Prakas B14-017-161 the NBC notifies its decision in writing within six months of receiving an application, and may extend the review where necessary. Approval is first given in principle, with conditions and a timeline for meeting them; the licence is granted once they are met. A licence is valid for six years (Article 12). How long a firm takes to prepare a complete application before that window opens depends on the firm.' },
  ],
  sections: [
    {
      heading: 'Regulatory Architecture Overview',
      content: 'The National Bank of Cambodia is both the central bank and the prudential regulator of banks, financial institutions and payment service institutions. Its authority rests on the 1996 Law on the Organization and Conduct of the National Bank of Cambodia and the 1999 Law on Banking and Financial Institutions, both cited in the preamble of the payments Prakas. For FinTech firms, the operative rules are the Prakas the NBC issues under them.\n\nNon-bank financial services were brought under one authority by the 2021 Law on the NBFSA, which covers insurance and private pensions, securities and exchange, social security, trusts, accounting and auditing, and real estate and pawnshops. Within it, SERC regulates securities activity, including digital assets held for investment under Prakas 093, and the IRC supervises insurance. The GDT handles tax registration and compliance. CamInvoice, the Cambodia E-Invoicing System, is a separate MEF system, operated by the ministry\'s General Department of Digital Economy. The Cambodia Financial Intelligence Unit (CAFIU) receives suspicious transaction reports under the AML/CFT Law.',
      table: {
        caption: 'Cambodian authorities and the FinTech activity each covers',
        headers: ['Authority', 'FinTech activity', 'Instrument read for this page'],
        rows: [
          ['NBC', 'Payment services, electronic money; NBC-regulated cryptoasset activity', 'Law on Banking and Financial Institutions (1999); Prakas B14-017-161; Prakas B7-024-735'],
          ['NBFSA / SERC', 'Securities; digital assets held for investment', 'Law on the NBFSA (2021); Prakas 093; Notification 083/25'],
          ['NBFSA / IRC', 'Insurance, including digital distribution', 'Law on the NBFSA (2021)'],
          ['GDT', 'Tax registration and compliance', 'Law on Taxation'],
          ['MEF / GDDE', 'CamInvoice e-invoicing', 'Prakas 075 and implementing circulars'],
          ['CAFIU', 'Suspicious and cash transaction reports', 'AML/CFT Law (2020), Article 12'],
        ],
      },
    },
    {
      // Corrected 2026-11-04 against the National Trade Repository's English text of
      // Prakas B14-017-161. This section previously described three licence categories
      // with separate capital figures and a count of licences issued, citing a Prakas
      // numbered B7-019-344. That number is not in the verified registry, and the
      // 2017 Prakas contains no categories: it has one payment service institution
      // licence. Amendment check recorded in regulatory/instruments/prakas-b14-017-161.ts.
      heading: 'Payment Service Institution Licensing',
      content: 'Prakas B14-017-161 on the Management of Payment Service Institutions requires any legal person intending to provide payment services in Cambodia to obtain a licence from the NBC (Article 8). It does not divide that licence into categories. An electronic money issuer is defined as a payment service institution licensed to issue electronic money under the same Prakas, and only banks, financial institutions and licensed payment service institutions may issue electronic money (Article 20).\n\nThe services covered include placing cash on and withdrawing it from a payment account, executing payment transactions and credit transfers, issuing payment instruments, money remittance and payment initiation (Article 6). The Prakas does not cover the provision of information-technology systems that support payment services without possessing the funds (Article 4). An application must set out, among other things, a business plan, evidence of adequate capital, safeguarding procedures, governance and internal controls, business continuity arrangements and security controls (Article 9).\n\nThe NBC is to give written notice of its decision within six months of receiving an application and may extend that period (Article 11). A licence is valid for six years, and a renewal application is due at least three months before expiry (Article 12).',
    },
    {
      heading: 'Capital Requirements and Financial Obligations',
      content: 'Article 13 of Prakas B14-017-161 requires a payment service institution to have minimum capital of not less than KHR 8,000,000,000, in cash, and its net worth may not fall below that amount (Article 14). It must also place a capital guarantee in an account at the NBC (Article 15), and pay an annual licence fee (Article 10). The NBC may change the capital requirement, so confirm the current figure with the NBC or Cambodian counsel before planning against it.\n\nFunds received from payment service users must be safeguarded in a separate trust account at a commercial bank, or in secure, liquid, low-risk assets as the NBC defines them (Article 16). Those funds do not belong to the institution, and on insolvency they are frozen for return to users.\n\nForeign capital raises a separate set of investment-law questions, including registration and any incentives, that this page does not cover; they are for Cambodian counsel.',
    },
    {
      heading: 'Anti-Money Laundering and Counter-Terrorism Financing',
      content: 'Cambodia\'s AML/CFT obligations are set by the 2020 Law on Anti-Money Laundering and Combating the Financing of Terrorism. The payments Prakas adds its own requirements for licensed institutions: an internal system to detect and monitor cash and suspicious transactions, procedures to identify users and carry out customer due diligence, reporting of suspicious transactions to the relevant authority, and a designated AML/CFT compliance officer (Prakas B14-017-161, Article 23).\n\nUnder Article 12 of the AML/CFT Law, a reporting entity that suspects funds are the proceeds of an offence or are related to terrorist financing must report to CAFIU promptly and within 24 hours; cash transactions above USD 10,000, including connected transactions reaching that total, are separately reportable. Intentional failure to file a required report carries imprisonment of one month to one year and a fine of KHR 50 million to KHR 200 million for a natural person, and a fine of KHR 200 million to KHR 500 million for a legal entity.\n\nThis page does not set out due-diligence tiers or thresholds beyond those, because none has been read in an instrument. The detail of customer due diligence should be taken from the current AML/CFT rules and confirmed with counsel.',
    },
    {
      heading: 'Technology and Operational Resilience',
      content: 'The payments Prakas sets the baseline for a licensed institution\'s systems. Article 21 requires it to maintain a security system that sustains public confidence in its services; employ enough people with the right expertise, and the technical equipment, to run the system safely and efficiently; document clear operating procedures and technical specifications; adopt resilient internal controls; test the system, including emergency testing, regularly; maintain a contingency plan with data recovery; and run fraud-detection and risk-identification methods. Outsourcing an operational function of a payment service requires NBC approval, and the institution remains fully liable for what it outsources (Articles 18 and 19).\n\nThe NBC may also issue technology-risk requirements of its own. This page does not describe them, because the instrument has not been read for it; specific controls, data-location rules and remediation deadlines should be taken from the NBC\'s current text.',
    },
    {
      heading: 'Tax Compliance and CamInvoice Integration',
      content: 'A FinTech company operating in Cambodia registers with the GDT and carries the ordinary obligations of a Cambodian legal person, including income tax, value-added tax where its supplies are taxable, withholding on certain payments and tax on salaries. The ordinary income-tax rate on the taxable income of legal persons is 20% (Law on Taxation, Article 20). Other rates, the treatment of particular financial services for VAT, and filing dates are not restated here; take them from the GDT or a licensed tax agent.\n\nCamInvoice, the Ministry of Economy and Finance\'s e-invoicing system, launched on 22 January 2025, adds a further layer for some firms. Its first phase is business-to-government: a business that invoices the budget entities of one of the designated ministries for public procurement must issue those invoices through the system, either on the CamInvoice platform or from an invoicing system registered with and connected to it. An invoice the system has validated is recognised as an original digital record and kept for 10 years. A fintech company that does not supply those ministries should check the MEF\'s current circulars for any extension of scope.\n\nTax filing and tax advice are reserved to licensed tax agents. Building the billing integration that feeds CamInvoice is engineering work for the firm or its integrator.',
    },
    {
      heading: 'Digital Lending',
      content: 'Credit is not a payment service. A payment service institution may grant credit only where it is ancillary to, and granted exclusively in connection with, the execution of a payment transaction, and repaid within 180 days (Prakas B14-017-161, Article 7). A business whose product is lending itself falls under the NBC\'s banking or microfinance regimes rather than the payments Prakas.\n\nThis page does not set out rate caps, disclosure formats, cooling-off periods or credit-model rules for digital lenders. None has been read in an instrument for it, and a reader planning a lending product should take those requirements from the NBC\'s current rules and Cambodian counsel.',
    },
    {
      heading: 'Sandbox and Innovation Testing',
      content: 'The one regulatory sandbox established in an instrument read for this page is SERC\'s FinTech Regulatory Sandbox. For digital-asset businesses it is a precondition rather than an alternative: under Notification 083/25, only individuals or entities that have successfully completed it may apply for a digital asset business licence under Prakas 093. The notification does not set out how a firm is admitted, or how long testing takes.\n\nThis page does not describe an NBC sandbox. Where a business model does not fit the payments Prakas, the activity test in Articles 4 and 6 is the place to start, followed by a direct question to the regulator concerned.',
    },
    {
      heading: 'Foreign Exchange and Cross-Border Payments',
      content: 'A payment service institution may provide domestic and overseas transfers under its licence (Prakas B14-017-161, Article 6), and may offer foreign-exchange services as an ancillary activity with the NBC\'s approval (Article 7). Cash transactions above USD 10,000 are reportable to CAFIU under Article 12 of the AML/CFT Law.\n\nThe NBC has linked Bakong and KHQR to QR payment systems in several neighbouring markets; those are QR payment links, not remittance licences. This page does not set out foreign-exchange reporting thresholds, reserve requirements or corridor-specific conditions, none of which has been read in an instrument for it.',
    },
    {
      heading: 'Consumer Protection and Dispute Resolution',
      content: 'Article 22 of the payments Prakas sets the consumer-protection baseline for a licensed institution. Before providing a service, it must disclose the service charges and other fees, the types of service, the exchange rate used, how and where the service can be accessed, and the time for handling complaints, in clear and understandable terms. It must publish terms and conditions setting out the responsibilities of all parties, issue a receipt on completion of each transaction and keep the records for inspection, and establish a dispute-resolution framework disclosed to users. Records are kept for at least five years (Article 30), and the professional-secrecy provision of Article 47 of the Law on Banking and Financial Institutions applies (Article 26).\n\nThis page does not describe a separate consumer-protection Prakas or the status of a personal-data protection law; confirm both with counsel before relying on either.',
    },
    {
      heading: 'Sequencing Market Entry',
      content: 'The order of work follows from the instruments. A Cambodian legal person must exist before it can apply, so incorporation with the Ministry of Commerce and registration with the GDT come first. The capital must be in place in cash. The Article 9 file — business plan, safeguarding, governance and internal controls, business continuity, security, and the people responsible — is then prepared and submitted, and the NBC\'s six-month window under Article 11 runs from receipt. Approval in principle comes with conditions and a timeline, and the licence follows once they are met. Integration with Bakong and KHQR, and with CamInvoice where the firm is within its scope, follows the licence. The NBC may suspend or revoke a licence not used within six months of being granted (Article 32).\n\nTwo things are within the applicant\'s control and cheaper to get right early than to fix late: submitting only a genuinely complete application, and treating AML/CFT as a programme that must exist and be evidenced rather than a document produced at the end. The decision is the NBC\'s.',
    },
  ],
};
