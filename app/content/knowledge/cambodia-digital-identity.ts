import { ArticleContent } from '../types';

/*
 * Rebuilt 2026-11-14 from Sub-Decree 207 on the Management of the CamDigiKey
 * Platform (26 July 2023; Open Development Cambodia's unofficial English
 * translation, Arts. 1-24 read) and Sub-Decree 164 on CamDX (24 August 2021,
 * read the same day for knowledge/cambodia-gaap-architecture.ts). The page had
 * the wrong operator in seven places and an NBC mandate that no instrument
 * read creates. Search Console: 28 impressions, 1 click, 3 months to 11 Nov.
 *
 * Contradicted by Sub-Decree 207, removed:
 * - "developed by the Ministry of Post and Telecommunications (MPTC)", "the
 *   Identity Provider ... operated by the MPTC", "MPTC Data Center", MPTC as
 *   certificate authority, "registering as a Relying Party with the MPTC",
 *   "the MPTC's target of 8 million", "MPTC's data protection guidelines",
 *   "MPTC's roadmap". The MEF leads and manages CamDigiKey (Art. 4) and the
 *   CamDX operator operates it on the MEF's behalf (Art. 5).
 * - "available only to Cambodian citizens and permanent residents who hold a
 *   Khmer ID card". Foreign nationals may open an account with a passport
 *   (Arts. 2, 5, 8).
 * - "raw biometric data ... is never stored". All data the account owner
 *   enters is stored in CamDigiKey's system (Art. 14), including face and
 *   facial-liveness data (Arts. 7-8).
 * - "becoming effectively mandatory", "the NBC's mandate requiring all
 *   financial institutions to implement CamDigiKey-based eKYC by mid-2026"
 *   (three places). No instrument read creates it; Sub-Decree 207 sets the
 *   terms on which a business MAY use CamDigiKey eKYC (Arts. 15-21).
 *
 * Unsourced, removed: KOICA technical assistance, "4 million identities",
 * "450 enrolment centres", OpenID Connect 1.0 / FIDO2 / PKCE / AAL levels,
 * ISO 27001 and ISO/IEC 24745 compliance, uptime figures, device and OS
 * requirements, latency table, "NBC Prakas" eKYC framework, the Personal Data
 * Protection Law "expected passage in 2026" and its provisions, the regional
 * interoperability table, and the 2026-2030 roadmap.
 *
 * Bar for restoring: read in a fetched primary (an MEF Prakas under Arts. 12
 * and 21, the operator's own documentation, or an NBC instrument), recorded
 * here with where it was read.
 */

export const cambodiaDigitalIdentity: ArticleContent = {
  slug: 'cambodia-digital-identity',
  title: 'Cambodia\'s Digital Identity Infrastructure: CamDigiKey and Beyond',
  description: 'How CamDigiKey, Cambodia\'s national digital identity platform, is constituted under Sub-Decree 207: who leads and operates it, who can open an account, what data it holds, and the terms on which a business may use its eKYC.',
  type: 'knowledge',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-14',
  readingTime: 6,
  schema: 'TechArticle',
  relatedSlugs: ['camdigikey', 'camdx', 'what-is-camdigikey'],
  relatedInstruments: ['sub-decree-207-camdigikey'],
  lead: 'CamDigiKey is Cambodia\'s national digital identity platform, and Sub-Decree 207 of 26 July 2023 is the instrument that governs it. The Ministry of Economy and Finance leads and manages it; the operator of CamDX, the national data exchange, operates it on the Ministry\'s behalf; and the Ministry of Interior supplies the identification data used to verify new accounts. Cambodian and foreign nationals can both open accounts. A business that wants to use CamDigiKey\'s electronic Know Your Customer (eKYC) checks must be a CamDX member with the operator\'s permission, and the account owner must consent each time their data is used. This article sets out what the Sub-Decree establishes, and where it leaves the detail to later rules.',
  claims: [
    { stat: 'The Ministry of Economy and Finance leads and manages CamDigiKey, and the operator of CamDX operates it on the Ministry\'s behalf, including creating accounts and deciding requests from businesses to use its eKYC authentication and data.', source: 'Sub-Decree No. 207 on the Management of the CamDigiKey Platform, 26 July 2023, Articles 4 and 5 (unofficial English translation, Open Development Cambodia)', year: '2023', url: 'https://data.opendevelopmentcambodia.net/en/dataset/214f5476-6075-405a-8226-2d02b5504b56/resource/e95ace4a-57ec-4f90-936b-6629fdd2ae0f/download/rgc_sub-decree-207_the-management-of-camdigikey-platform_en.pdf' },
    { stat: 'eKYC authentication through CamDigiKey cannot be used as a substitute for a Cambodian national identity card or a foreign passport, and is not proof of a customer\'s citizenship or residence.', source: 'Sub-Decree No. 207 on the Management of the CamDigiKey Platform, 26 July 2023, Article 22 (unofficial English translation, Open Development Cambodia)', year: '2023', url: 'https://data.opendevelopmentcambodia.net/en/dataset/214f5476-6075-405a-8226-2d02b5504b56/resource/e95ace4a-57ec-4f90-936b-6629fdd2ae0f/download/rgc_sub-decree-207_the-management-of-camdigikey-platform_en.pdf' },
  ],
  sources: [
    { publisher: 'Royal Government of Cambodia (Open Development Cambodia copy)', label: 'Sub-Decree No. 207 on the Management of the CamDigiKey Platform, 26 July 2023, unofficial English translation (PDF)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/214f5476-6075-405a-8226-2d02b5504b56/resource/e95ace4a-57ec-4f90-936b-6629fdd2ae0f/download/rgc_sub-decree-207_the-management-of-camdigikey-platform_en.pdf', tier: 'primary' },
    { publisher: 'Royal Government of Cambodia', label: 'Sub-Decree No. 164 S.E on Data Exchange through CamDX, 24 August 2021, unofficial English translation (PDF)', url: 'https://camdx.gov.kh/documents/files/Unofficial%20Translation%20of%20CamDX%20Subdecree.pdf', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-14',
  faqs: [
    { question: 'Is CamDigiKey mandatory for Cambodians, or for opening a bank account?', answer: 'Sub-Decree 207 gives Cambodian and foreign nationals the right to request an account; it does not require anyone to hold one, and no instrument read for this page requires a bank to use it. A financial institution\'s identity-verification duties come from AML/CFT law and NBC rules, and CamDigiKey eKYC is one way of meeting them. It cannot replace a national identity card or passport (Article 22). Check the current NBC instruments for any requirement specific to CamDigiKey.' },
    { question: 'Can foreign nationals use CamDigiKey?', answer: 'Yes. A foreign national with a foreign passport can request an account by providing face and facial-liveness data, passport number, Latin name, gender, date and place of birth, telephone number, nationality and current address to the CamDX operator, which reviews and authenticates the request (Sub-Decree 207, Article 8).' },
    { question: 'What data does CamDigiKey hold, and who can see it?', answer: 'The data an account owner enters is stored in CamDigiKey\'s own system (Article 14), including face and facial-liveness data supplied when the account is created (Articles 7 and 8). A business can use it only as a CamDX member with the operator\'s permission, for the purposes in its memorandum of understanding, and only with the account owner\'s consent each time; the owner has the right to know how their data is used (Articles 15 to 20).' },
    { question: 'Who decides whether a business may use CamDigiKey eKYC?', answer: 'The CamDX operator. It examines and decides requests from applied members of CamDX to use CamDigiKey\'s eKYC authentication and data, sets the application process, and may terminate a member that breaches the Sub-Decree\'s conditions (Article 5). The business is the applicant; the decision is the operator\'s.' },
  ],
  sections: [
    {
      heading: 'Who Leads and Operates CamDigiKey',
      content: 'Sub-Decree 207 divides the work between three bodies. The Ministry of Economy and Finance leads and manages CamDigiKey on behalf of the Royal Government, with the stated aim of promoting the adoption and use of eKYC across society (Article 4). The operator of CamDX operates CamDigiKey on the Ministry\'s behalf: it handles account creation, correction and deletion, decides requests from businesses to use its eKYC, secures the system, collects service fees, and helps resolve disputes (Article 5). The Ministry of Interior supplies personal identification data to verify new accounts (Article 6).\n\nThe same operator therefore runs both CamDigiKey and CamDX, under the same Ministry. For a business, that makes the two a single relationship: CamDigiKey eKYC is reached through CamDX membership.',
      table: {
        caption: 'Roles under Sub-Decree 207',
        headers: ['Body', 'Role', 'Article'],
        rows: [
          ['Ministry of Economy and Finance', 'Leads and manages CamDigiKey; issues the Prakas that set detailed procedures', '4, 12, 21'],
          ['CamDX operator', 'Operates CamDigiKey: accounts, eKYC access decisions, security, fees, disputes', '5'],
          ['Ministry of Interior', 'Supplies identification data to verify account creation', '6'],
          ['Account owner', 'Requests the account, consents to each use, may ask for correction or deletion', '7, 8, 10, 18'],
          ['Business (applied CamDX member)', 'Requests permission to use eKYC, meets minimum requirements, reports on use', '15, 16, 20'],
        ],
      },
    },
    {
      heading: 'Opening an Account',
      content: 'A Cambodian national requests an account by providing face and facial-liveness data, national identification number, name in Khmer and Latin script, gender, date and place of birth, telephone number and current address; the CamDX operator reviews, authenticates and creates the account (Article 7). A foreign national does the same with a foreign passport, giving the passport number, Latin name and nationality in place of the national identification details (Article 8). A request that does not meet these requirements may be rejected (Article 9).\n\nAfter the account is created, its owner may add further personal data voluntarily (Article 11), and may ask the operator to correct or delete their data; the operator decides those requests (Article 10). The detailed procedures are left to a Prakas of the Minister of Economy and Finance (Article 12).',
    },
    {
      heading: 'Using CamDigiKey eKYC as a Business',
      content: 'A commercial company or association that wants to use CamDigiKey\'s eKYC authentication and data must first be a member of CamDX, as an applied member, and then request permission from the CamDX operator (Articles 15 and 16). Public bodies are automatic CamDX members. Once permitted, a business can use the account data the Sub-Decree describes, but only with the account owner\'s consent each time it is used (Articles 17 and 18). Use is subject to service fees (Article 19).\n\nThe minimum requirements for an applied member mirror those for CamDX membership, with one addition: regular reporting to the operator on how the eKYC service is used.',
      table: {
        caption: 'Minimum requirements for a business using CamDigiKey eKYC (Sub-Decree 207, Article 20)',
        headers: ['Requirement'],
        rows: [
          ['Use authenticated eKYC data only for digital services and legitimate interests, in line with the memorandum of understanding with the CamDX operator and the law'],
          ['Have an information technology system that ensures quality and security'],
          ['Have network infrastructure and equipment to operate securely, safely and accurately'],
          ['Install security servers for its information technology network'],
          ['Cooperate with competent ministries and institutions on responses to attacks on information systems'],
          ['Report on its use of CamDigiKey eKYC to the CamDX operator monthly, quarterly, semi-annually and annually'],
        ],
      },
    },
    {
      heading: 'What eKYC Through CamDigiKey Does Not Prove',
      content: 'Article 22 sets a limit that matters to any compliance design. eKYC authentication through CamDigiKey cannot substitute for a Cambodian national identity card or a foreign passport, which are governed by their own laws, and using it is not proof of a customer\'s citizenship or residence.\n\nFor a bank, a payment service institution or any other business with customer due diligence duties, CamDigiKey is therefore a verification channel, not a replacement for the identity documents and checks those duties require. How far it satisfies a particular obligation is a question for the AML/CFT law, the institution\'s regulator, and the institution\'s own counsel.',
    },
    {
      heading: 'Data, Consent and Security',
      content: 'All data an account owner enters is stored in CamDigiKey\'s system (Article 14), and the Sub-Decree guarantees its security, privacy, confidentiality, integrity and accuracy, with timestamps on account creation and each eKYC authentication (Article 13). Each use of an owner\'s data needs their consent, and owners have the right to know how their data is used (Article 18). The operator is responsible for securing the system, and may have its security inspected and evaluated by professional institutions (Article 5).\n\nThis is a contrast with CamDX, which does not store the data exchanged through it (Sub-Decree 164, Article 6). An architect connecting to both should not assume the two hold data the same way. For personal data protection beyond these two instruments, current Cambodian law is the reference, and this page does not state it.',
    },
    {
      heading: 'Where the Detail Will Come From',
      content: 'Sub-Decree 207 sets the structure and leaves the working detail to the Ministry of Economy and Finance. The processes for creating, correcting and deleting accounts (Article 12) and the rules for members using eKYC (Article 21) are to be set by Prakas of the Minister, and the CamDX operator sets the application process for business access (Article 5). Technical integration terms come from the operator\'s documentation.\n\nA business planning an integration should therefore work from three layers in order: the Sub-Decree for who decides what, the Minister\'s Prakas for the procedure, and the operator\'s current documentation for the interface.',
    },
  ],
};
