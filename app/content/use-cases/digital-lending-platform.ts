import { ArticleContent } from '../types';

/**
 * Rewritten 2026-08-31 (62010 pivot, Phase A4). The original article at this URL
 * was the worst of the four. It described a multi-tenant credit-scoring platform
 * operated by CamFinTech that aggregated borrowers' CamInvoice, credit-bureau
 * and mobile-money data — across the design seam twice over (hosting client
 * data; performing a regulated credit function) — reported a model trained on
 * "180,000 historical loan outcomes" with Gini coefficients and a "40% reduction
 * in delinquency" that never existed, and contained a live ACCESS CLAIM:
 * "maintained ongoing dialogue with the NBC's FinTech supervision team". That
 * phrase class is an existential brand liability (vault 31_Training_Strategy:35)
 * and must never reappear in any form. This rewrite is client-side adapters
 * only; the lender holds the data and owns every credit decision.
 */
export const digitalLendingPlatform: ArticleContent = {
  slug: 'digital-lending-platform',
  title: 'Scoping Digital Origination Adapters for a Lender',
  description:
    'An illustrative engagement scenario: how a licensed Cambodian lender would wire CamDigiKey identity verification and consented CamInvoice data into its own origination system — what an integrator builds, why the credit decision and the borrower data stay with the lender, and where the boundary is not negotiable.',
  type: 'use-cases',
  cluster: 'investment',
  publishedAt: '2026-08-31',
  updatedAt: '2026-08-31',
  readingTime: 8,
  schema: 'Article',
  relatedSlugs: ['camdigikey', 'caminvoice', 'cambodia-fintech-landscape', 'cambodia-digital-identity'],
  lead: 'Loan origination in Cambodia is slow for a specific and fixable reason: a large share of the elapsed time is spent establishing who the applicant is and what their business actually does, using documents collected by hand. Cambodia now has government infrastructure that answers both questions faster — verified digital identity, and structured invoice records the applicant can consent to share. This scenario sets out how a licensed lender would wire those into its existing origination flow, and is equally concerned with a boundary: the integrator builds the adapters, and the lender keeps the data and owns every decision made with it.',
  // Claims removed 2026-08-31. This array previously carried figures attributed
  // to named institutional reports with no URL, access date or page reference.
  // A verified sample was wrong more often than not — including a Cambodian FATF
  // mutual evaluation that never took place, and citations to bodies that do not
  // exist under the names given. Restore an entry only when its figure has been
  // read in a fetched primary, on the same evidence bar as app/content/regulatory,
  // and record where it was read. See vault ADR-007.
  claims: [],
  faqs: [
    {
      question: 'Does CamFinTech build credit scoring models or make lending decisions?',
      answer:
        'No. Credit assessment is the lender\'s regulated activity and its commercial judgement, and it stays there. What an integration engagement delivers is the plumbing: verified identity arriving in the application record, consented data arriving in a usable shape, and the lender\'s own policy engine receiving inputs it can rely on. Who gets a loan, on what terms, is decided by the lender under its own credit policy and its own supervision.',
    },
    {
      question: 'Where does the borrower data live?',
      answer:
        'In the lender\'s systems. The adapters run inside the lender\'s environment, authenticate as the lender, and write into the lender\'s records. CamFinTech does not host or transmit client data, and does not operate a service that aggregates borrower information across institutions. A vendor sitting in the middle of many lenders\' applicant data is a different business with a materially different regulatory and ethical posture, and it is not one we offer.',
    },
    {
      question: 'Can invoice data substitute for a credit history?',
      answer:
        'It is evidence about a business, not a credit history, and the distinction matters. Structured invoice records can show revenue pattern, customer concentration and seasonality for a business that files them — which is useful precisely where a credit bureau has nothing. But coverage is partial, it says nothing about a borrower\'s obligations elsewhere, and treating it as equivalent to repayment history would be a modelling error with real consequences for real borrowers. How much weight it carries is a decision for the lender\'s credit function.',
    },
  ],
  sections: [
    {
      heading: 'The situation this scenario addresses',
      content:
        'Assume a licensed Cambodian lender — a microfinance institution or a bank with an SME book — originating small-ticket loans at volume through a branch and field network. An application today involves a visit, copies of identity documents, photographs, an interview about income, and a package that travels to a credit officer who checks what records exist and puts the file to a committee.\n\nMost of the elapsed time is not analysis. It is collection, transport and re-keying. And most of the cost per loan sits in the same place, which is why origination cost per loan is nearly flat regardless of loan size and why small loans are hard to serve profitably.\n\nTwo pieces of national infrastructure address the two slowest steps directly. Verified digital identity removes the manual establishment of who the applicant is. Structured invoice data, where the applicant is a filing business and consents to share it, removes a large part of the manual establishment of what the business does.\n\nNeither of them makes a credit decision. They shorten the path to the point where the lender\'s own credit function can make one.',
    },
    {
      heading: 'What the adapters actually do',
      content:
        'Two adapters, and a clear-eyed view of what each is worth.\n\nThe identity adapter integrates the lender\'s application flow with CamDigiKey, so that an applicant authenticates and the lender receives a verified identity assertion which populates the application record directly. The benefit is not only speed. A verified assertion is a stronger record than an inspected photocopy, and it is a better artefact to hold when the file is examined later.\n\nThe data adapter handles consented retrieval of the applicant\'s own invoice records and delivers them to the lender in a normalised shape — periods, totals, counterparty concentration, continuity of filing. The word doing the work in that sentence is consented: the applicant is authorising the release of their own data to a lender they are asking for credit, and the consent has to be explicit, specific, recorded and revocable. An adapter that treats consent as a checkbox to be got past has built a liability rather than a capability.\n\nBoth adapters write into the lender\'s systems and nowhere else. Neither makes an assessment, applies a policy or produces a score. They terminate at the point where the lender\'s existing decisioning begins.',
      table: {
        caption: 'What each adapter delivers, and what it does not',
        headers: ['Adapter', 'Delivers', 'Explicitly does not'],
        rows: [
          ['Identity', 'Verified identity assertion in the application record', 'Judge whether the applicant is creditworthy'],
          ['Consented data', 'Normalised invoice history for the applicant', 'Score, rank or rate the applicant'],
          ['Both', 'Audit trail of what was retrieved, when, under what consent', 'Retain anything outside the lender\'s systems'],
        ],
      },
    },
    {
      heading: 'Coverage is partial, and designing around that is the real work',
      content:
        'The temptation in a project like this is to design for the applicant who has everything — a digital identity, a filing business, a bureau record — and treat everyone else as an exception. In this market that inverts the problem.\n\nDigital identity coverage is growing but not universal. Invoice records exist for businesses inside the e-invoicing mandate and filing consistently, which skews urban, formal and larger. A substantial share of a typical lender\'s applicants — rural borrowers, informal traders, seasonal businesses — will present with neither, and they are not a rounding error.\n\nSo the design requirement is a flow that degrades cleanly rather than one that fails. Where verified identity is available, use it. Where it is not, the existing manual path remains, and the system records which path was taken so the lender can see the composition of its own book. Where invoice data is available and consented, deliver it. Where it is not, deliver nothing rather than something inferred, and let the lender\'s policy decide what to do with an application carrying less evidence.\n\nThat last point deserves emphasis because it is where integrations do quiet harm. A system that substitutes a weak proxy when a strong signal is missing, without making the substitution visible, produces assessments whose reliability varies by applicant in ways nobody downstream can see. The applicants most affected are the ones with the least data — which is to say the ones with the least ability to contest the outcome. Making data availability explicit in the record is not a nicety; it is what allows a lender to supervise its own process.',
    },
    {
      heading: 'Where the scope boundary sits',
      content:
        'This scenario has the sharpest boundary of the four, and it is worth stating in full because the adjacent work is commercially attractive and we decline it.\n\nCamFinTech builds and hands over the adapters, the consent capture and its audit trail, the normalisation logic, the integration into the lender\'s origination system, and the operational tooling and documentation. Fee-only.\n\nThe lender owns everything downstream. Its credit policy, its assessment method, any model it chooses to use, the decision on any application, and the treatment of any borrower. We do not build the scoring model, we do not advise on credit policy, and we would not accept an engagement structured so that our work product effectively decides who is lent to.\n\nThe lender holds the data. Adapters run in the lender\'s environment. We do not host or transmit client data, and we do not operate any service that pools applicant information across institutions. This is the design seam, and here it carries an ethical weight beyond the regulatory one.\n\nThe lender is the licensed party. Its authorisation, its supervision, its obligations. Where an engagement touches an approval, the client is the applicant of record. CamFinTech does not represent clients to the NBC or to any other authority, does not conduct regulatory dialogue on a client\'s behalf, and does not claim influence over any supervisory outcome. Our competence is in the process and the engineering, never in access.\n\nData protection and consent obligations run to the lender as controller. We build to meet them and will say plainly when a proposed design does not; we do not assume them, and we are not the lender\'s adviser on them.',
    },
    {
      heading: 'How the build would be sequenced',
      content:
        'Identity first, alone. It is the smaller adapter, it delivers a benefit that does not depend on the second one, and it can run alongside the existing manual process so that both paths are visible before either is trusted. A lender that has run verified identity in parallel for a while knows something useful about its own applicant base that no vendor could have told it.\n\nConsent design second, and treat it as a design phase rather than a form. What is being requested, from whom, for what purpose, for how long, and how is it withdrawn. Get this wrong and the data adapter is unusable regardless of how well it is engineered.\n\nThe data adapter third, delivering to the lender\'s credit function as an additional input alongside what it already uses, not as a replacement for anything. Whether and how it changes the lender\'s policy is the lender\'s call, made on the lender\'s evidence, over whatever period its own governance requires.\n\nThroughout, the honest framing to a client is that this shortens origination and improves the quality of the record. Any claim that it improves credit outcomes would be a claim about a model we did not build, evaluated on a book we cannot see — and the lender is in a far better position to test that than we are.',
    },
    {
      heading: 'Why this shape generalises',
      content:
        'The underlying pattern is that infrastructure built for compliance turns out to be usable as infrastructure for underwriting. Identity systems built to satisfy know-your-customer duties, and invoicing systems built to close a tax gap, together produce verified facts about people and businesses that were previously expensive to establish.\n\nThat is a genuine structural opportunity in a market where a large share of businesses have never held formal credit. It is also a place to be careful, because the same properties that make this data useful for extending credit make it useful for denying it at scale and without recourse.\n\nThe architectural expression of that care is the boundary described above. The lender decides and answers for its decisions; the integrator builds adapters and hands them over; nobody in the middle accumulates a picture of borrowers that no single institution could assemble alone. That division is not merely our commercial scope. It is the arrangement we think is correct, and it is the one we would recommend to a client evaluating any vendor in this space — including when the answer is that the vendor should be someone else.',
    },
  ],
};
