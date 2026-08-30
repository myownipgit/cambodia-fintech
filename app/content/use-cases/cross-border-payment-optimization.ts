import { ArticleContent } from '../types';

/**
 * Rewritten 2026-08-31 (62010 pivot, Phase A4). The original article at this URL
 * described CamFinTech operating a multi-corridor routing platform that
 * compared bank FX rates and executed transactions through the best one,
 * "processing USD 285 million". That is routing client funds — squarely a rail
 * operator, which CamFinTech is not and does not intend to become. The invented
 * volumes were the lesser problem. This rewrite keeps the corridor mechanics and
 * reframes the work as client-side acceptance integration.
 */
export const crossBorderPaymentOptimization: ArticleContent = {
  slug: 'cross-border-payment-optimization',
  title: 'Scoping Cross-Border KHQR Acceptance',
  description:
    'An illustrative engagement scenario: how a Cambodian merchant would accept payments from visitors using their home payment apps over Bakong\'s bilateral corridors — what the integration covers, why foreign exchange and routing are the bank\'s job and not an integrator\'s, and how to tell a real capability from a claim.',
  type: 'use-cases',
  cluster: 'infrastructure',
  publishedAt: '2026-08-31',
  updatedAt: '2026-08-31',
  readingTime: 7,
  schema: 'Article',
  relatedSlugs: ['bakong', 'cross-border-payments-bakong', 'nbc', 'khqr'],
  lead: 'Cambodia has bilateral payment linkages that let a visitor pay a Cambodian merchant from the banking app they already use at home. For a merchant in a tourism-facing business, that is a straightforward commercial proposition: capture spending that would otherwise be a cash transaction or no transaction. It is also an area where integrators overpromise, because the parts of a cross-border payment that sound most valuable — the exchange rate, the routing, the settlement — are precisely the parts a client-side integrator has no business touching. This scenario draws that line explicitly.',
  claims: [
    {
      stat: 'Cambodia is one of only three ASEAN member states (alongside Singapore and Thailand) with operational bilateral real-time payment linkages connecting to multiple foreign payment systems.',
      source: 'BIS Committee on Payments and Market Infrastructures Report',
      year: '2025',
    },
    {
      stat: 'Cross-border digital payment volume through Bakong bilateral corridors (Thailand, Malaysia, China) reached USD 2.8 billion in 2024, reducing average remittance costs from 10% to under 5% of transaction value.',
      source: 'Asian Development Bank Remittance Cost Report',
      year: '2024',
    },
    {
      stat: 'Cambodia received approximately 1.2 million international tourist arrivals in the first half of 2025, with Chinese, Thai, and Malaysian visitors representing the primary source markets for Bakong Tourist App usage.',
      source: 'Ministry of Tourism, Cambodia',
      year: '2025',
    },
    {
      stat: 'Cross-border remittances to Cambodia totaled $3.1 billion in 2024, with Thailand and Malaysia accounting for over 60% of inbound flows from Cambodian migrant workers.',
      source: 'World Bank Migration and Remittances Data',
      year: '2024',
    },
  ],
  faqs: [
    {
      question: 'Which corridors can a merchant actually accept from today?',
      answer:
        'That question has to be answered by the merchant\'s sponsor bank, not by an integrator, and the answer changes. Bilateral linkages are agreed between the NBC and partner authorities, but whether a given corridor is live for a given merchant depends on which corridors that merchant\'s bank has enabled and for which merchant categories. Corridors with Vietnam and Laos were slated for launch during 2026; whether they are open to a particular merchant today is a question for the bank. Design the integration so that adding a corridor is a configuration change, and confirm availability commercially before promising acceptance to anyone.',
    },
    {
      question: 'Can an integrator get a merchant a better exchange rate?',
      answer:
        'No, and an integrator offering to is describing a service that requires standing in the payment path. Conversion happens at the licensed institutions on either side of the corridor, against reference rates, under their own regulatory obligations. What a merchant can influence is which bank it holds its acquiring relationship with, and that is a commercial negotiation the merchant conducts. What an integration can do is make the rate and the fee visible per transaction so the merchant can hold its bank to the terms it agreed.',
    },
    {
      question: 'Does accepting foreign payments change the merchant\'s regulatory position?',
      answer:
        'It can, and it is worth establishing before building rather than after. Accepting cross-border payments may affect a merchant\'s reporting obligations and the terms of its acquiring agreement, and merchant category matters — some categories are excluded from some corridors. These are questions for the merchant\'s bank and, where the position is unclear, its own legal or tax advisers. They are not questions an integrator should answer, and a merchant should be wary of one who volunteers to.',
    },
  ],
  sections: [
    {
      heading: 'The situation this scenario addresses',
      content:
        'Assume a merchant with a visitor-heavy customer base — a hotel group, a restaurant cluster, a retailer near a major site. Its Cambodian customers already pay by KHQR. Its foreign customers largely do not: they arrive holding a payment app that works everywhere at home and nowhere here, discover the merchant takes cards at a materially higher cost or cash only, and behave accordingly.\n\nThe bilateral corridors change the available answer. Where a corridor is live and the merchant\'s bank has enabled it, a visitor scanning the merchant\'s code with their home app can complete a payment that settles to the merchant in the ordinary way.\n\nThe merchant\'s question is therefore narrow and practical: what has to change in our systems, what has to change in our bank arrangement, and what can we honestly tell staff and customers about which apps work?\n\nThat last part is not a rhetorical flourish. The commonest failure of a cross-border acceptance rollout is not technical. It is a sign at the counter listing logos the merchant cannot actually accept, put up because someone conflated a corridor existing with a corridor being enabled on that merchant\'s account.',
    },
    {
      heading: 'What the integration covers — and what it does not',
      content:
        'The integration work is smaller than the topic suggests, which is a point worth making plainly rather than obscuring to justify a fee.\n\nOn the merchant side, cross-border acceptance is largely the same acceptance the merchant already has. The code presented to the customer is generated the same way. The confirmation arrives the same way. The settlement lands in the same account. What changes is that the payment reaches the merchant\'s bank over a corridor rather than domestically, and that the merchant\'s systems now see transactions denominated differently from the amount they requested.\n\nSo the real integration work is in the record-keeping, not the payment: capturing the corridor a transaction arrived on, the amount the customer was charged in their own currency, the rate and fees applied, and the amount actually settled — and carrying all of that into the merchant\'s accounting records so that a month-end reconciliation can be completed without guessing.\n\nWhat the integration does not cover is everything that involves the money itself. Conversion, corridor selection, and settlement are performed by licensed institutions. CamFinTech does not route payments, does not convert currency, does not hold client funds, and does not operate a rail. An integrator who offers to compare rates across banks and route each transaction through the best one is offering to become a payments business, and should be assessed as one — including whether it holds the licence that activity requires.',
      table: {
        caption: 'Division of labour in a cross-border acceptance build',
        headers: ['Function', 'Who performs it', 'Why not the integrator'],
        rows: [
          ['Corridor availability for this merchant', 'Sponsor bank', 'Commercial and regulatory, not technical'],
          ['Currency conversion', 'Licensed institutions in the corridor', 'Requires standing in the payment path'],
          ['Corridor routing of a transaction', 'The rail and the banks on it', 'Routing client funds is rail operation'],
          ['Settlement to the merchant', 'Sponsor bank', 'We never hold client funds'],
          ['Capturing corridor, rate, fees and settled amount', 'The integration', 'This is the client-side work'],
          ['Reconciling to the merchant\'s ledger', 'The integration', 'This is the client-side work'],
        ],
      },
    },
    {
      heading: 'Designing for corridors that differ from one another',
      content:
        'The engineering error to avoid is treating corridors as interchangeable because they are all reached through the same acquiring relationship.\n\nThey differ in ways that reach the merchant\'s systems. Transaction and daily limits are not uniform. Settlement timing is not uniform. The currency the customer is charged in, and therefore the rounding behaviour the merchant sees, is not uniform. Refund and reversal handling — the part every merchant discovers late — is the least uniform of all, because a reversal across a corridor is a different operation from a domestic one and is not always available on the same terms.\n\nThe design response is to model the corridor as an explicit attribute of a transaction from the first line of code, rather than inferring it later from a currency or a fee pattern. A merchant that has recorded the corridor can answer a question about a specific payment months later. One that has not is reduced to reconstruction.\n\nThe second design response is to make corridor enablement configuration rather than code. Corridors get enabled, and occasionally suspended, on a timetable set by banks and authorities. A merchant should not need a software release to reflect that, and the customer-facing surface — what staff are told, what signage says, what the checkout displays — should be driven from the same configuration so it cannot drift out of step with reality.',
    },
    {
      heading: 'Where the scope boundary sits',
      content:
        'CamFinTech builds the client side: the capture of corridor and currency data, the changes to the merchant\'s payment records, the reconciliation logic, the accounting export, and the operational tooling that lets the merchant see which corridors are enabled and what each transaction actually cost. Fee-only, handed over on completion.\n\nThe merchant operates it and holds the bank relationship. The bank enables corridors, sets terms, performs conversion and settles funds. Where a merchant needs to negotiate better terms, that is the merchant\'s negotiation with its bank; we can help it understand what to ask for and what the data shows, which is a different thing from conducting it.\n\nWe do not hold client funds, do not operate a rail, and do not host or transmit client transaction traffic. Where an engagement touches an approval or an enablement, the client is the applicant of record and we neither influence nor claim to influence the decision of any bank or regulator.\n\nOn cross-border work specifically there is one further limit worth stating, because the topic invites it. Compliance obligations attaching to cross-border flows — reporting thresholds, screening duties, the merchant\'s own obligations under its acquiring agreement — are matters for the merchant, its bank and its licensed advisers. We build systems that produce the records those obligations require. We do not interpret the obligations, and we do not represent clients to anyone.',
    },
    {
      heading: 'How the build would be sequenced',
      content:
        'Establish availability first, in writing, from the bank. Which corridors, for which merchant category, on what terms, with what limits. Nothing downstream is safe to plan before this exists, and the temptation to start building while waiting for it is exactly how a merchant ends up with signage promising acceptance it does not have.\n\nThen extend the transaction record. Corridor, customer-side currency and amount, rate, fees, settled amount. This is a data-model change and it is far cheaper before the first cross-border transaction than after a few thousand of them.\n\nThen reconciliation and reporting, so that the merchant can see the true cost per corridor and hold its bank to the agreed terms.\n\nThen the customer-facing surface, driven from the enablement configuration, and staff briefing driven from the same source.\n\nThe ordering is deliberate: the record-keeping ships before the acceptance is advertised, so the merchant is never in a position of taking payments it cannot fully account for.',
    },
    {
      heading: 'Why this shape generalises',
      content:
        'Cambodia\'s position here is unusual and worth understanding on its own terms. Multiple operational bilateral linkages is not the normal state of affairs for a market of this size, and it means acceptance infrastructure a merchant builds for domestic KHQR extends outward as corridors open, rather than requiring a separate international acceptance project.\n\nThat is the strategic case for treating the domestic rail as primary and letting cross-border arrive as configuration on top of it. It is also the reason the integration work is modest: the merchant is not building a cross-border payment capability, it is recording the additional attributes of payments arriving over a capability the rail already has.\n\nAn integrator whose proposal for this work is large should be asked precisely which of the functions in the table above it intends to perform, and under what licence.',
    },
  ],
};
