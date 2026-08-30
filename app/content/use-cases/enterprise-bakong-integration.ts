import { ArticleContent } from '../types';

/**
 * Rewritten 2026-08-31 (62010 pivot, Phase A4). The original article at this URL
 * described a fabricated engagement with "a leading Cambodian retail group
 * operating 45 locations" and quantified outcomes that never happened. Nothing
 * from that framing survives. What is kept is the technical substance — KHQR
 * channel architecture, webhook settlement, reconciliation matching — reframed
 * as a scoping document. See ScenarioNotice.tsx for the standing guardrail.
 */
export const enterpriseBakongIntegration: ArticleContent = {
  slug: 'enterprise-bakong-integration',
  title: 'Scoping a Multi-Channel KHQR Acceptance Build',
  description:
    'An illustrative engagement scenario: how a multi-site Cambodian retailer accepting payments across POS, e-commerce and a mobile app would consolidate onto Bakong and KHQR — the architecture, the scope boundary between the merchant, its sponsor bank and CamFinTech, and the failure modes to design against.',
  type: 'use-cases',
  cluster: 'infrastructure',
  publishedAt: '2026-08-31',
  updatedAt: '2026-08-31',
  readingTime: 7,
  schema: 'Article',
  relatedSlugs: ['bakong', 'khqr', 'how-bakong-works', 'bakong-technical-integration'],
  lead: 'A retailer that has grown channel by channel usually ends up with one payment integration per channel: a card terminal in store, a gateway on the website, an SDK in the app. Each settles separately, reconciles separately and supports a different set of payment methods. KHQR makes consolidation possible for the first time, because a single merchant registration reaches every bank and wallet on the Bakong network. This scenario walks through how that consolidation would be scoped — what gets built, who operates it once built, and which parts are not CamFinTech\'s to touch.',
  claims: [
    {
      stat: 'Over 60 financial institutions are connected to the Bakong network, including all 58 licensed commercial banks and 8 specialized financial institutions, achieving 100% banking sector coverage.',
      source: 'National Bank of Cambodia Financial Stability Report',
      year: '2025',
    },
    {
      stat: 'Over 400,000 KHQR merchant codes were registered by Q1 2025, covering approximately 65% of formal retail establishments in Phnom Penh and 35% nationwide.',
      source: 'National Bank of Cambodia Payment Systems Report',
      year: '2025',
    },
    {
      stat: 'QR code payments accounted for approximately 45% of all point-of-sale digital transactions in Cambodia in 2024, up from 18% in 2022.',
      source: 'National Bank of Cambodia Payment Systems Report',
      year: '2024',
    },
    {
      stat: 'Merchant discount rates for KHQR transactions range from 0% to 0.5% depending on the acquiring bank, significantly lower than the 2-3% typical for international card networks.',
      source: 'National Bank of Cambodia',
      year: '2024',
    },
  ],
  faqs: [
    {
      question: 'Does a merchant need to deal with the NBC directly to accept Bakong payments?',
      answer:
        'No. Bakong is tiered: the NBC operates the core infrastructure, licensed banks and payment institutions connect to it, and merchants reach it through their bank. A merchant\'s counterparty is its sponsor bank, and the commercial terms, merchant registration and settlement account all sit with that bank. CamFinTech works alongside the merchant and whichever bank it has chosen; we are not a party to that relationship and have no role in the bank\'s or the regulator\'s decisions.',
    },
    {
      question: 'Does a single KHQR integration really reach every bank\'s customers?',
      answer:
        'That is the point of the standard. KHQR interoperability is mandated by the NBC, so a code displayed by a registered merchant can be scanned by a customer using any connected bank or wallet app. The merchant does not integrate separately with each institution. What varies between banks is not reach but the API surface a merchant integrates against, the settlement schedule, and the merchant discount rate.',
    },
    {
      question: 'Who runs the integration once it is built?',
      answer:
        'The merchant does. CamFinTech builds the client-side integration and hands it over — source, deployment and documentation. The payment traffic runs on the merchant\'s own infrastructure and settles into the merchant\'s own account at its bank. We do not host or transmit client transaction traffic, we never hold client funds, and we do not operate a payment rail. Those are hard limits on what we will build, not merely on what we advertise.',
    },
  ],
  sections: [
    {
      heading: 'The situation this scenario addresses',
      content:
        'Assume a retailer operating physical stores in several provinces, an e-commerce site, and a mobile app with a loyalty programme. Each channel was built at a different time against a different provider. In store, a card terminal from one bank accepts international cards and that bank\'s own QR code. Online, a gateway handles cards and a couple of wallets. In the app, a third SDK handles a fourth set of methods.\n\nThree costs follow from that shape, and they are the reason a consolidation project gets funded.\n\nThe first is reconciliation effort. Finance receives settlement files from several providers on different schedules in different formats, and matches them by hand against the sales records in the ERP. The work scales with the number of providers, not the number of transactions.\n\nThe second is inconsistent acceptance. A customer can pay by their preferred method in one channel and not another. Where a proprietary bank QR is the only code on the counter, every customer banking elsewhere is pushed back to cash.\n\nThe third is the absence of a single view of payment data. Nobody can answer which methods are used where, at what times, at what basket size, because the answer lives in three systems that do not share a transaction identifier.',
    },
    {
      heading: 'What the integration actually has to do',
      content:
        'The technical goal is narrow: one payment service inside the merchant\'s own estate, exposing a channel-appropriate interface at the front and speaking one bank\'s Bakong API at the back.\n\nFor in-store payments, the service generates a dynamic KHQR code carrying the exact amount, the merchant identifier and a unique transaction reference, rendered on a customer-facing display as the sale is finalised. Dynamic rather than static matters more than it sounds: a static counter-top code cannot pre-populate the amount, so the customer types it, and every mistyped amount becomes a reconciliation exception.\n\nFor e-commerce, the same service generates a code in the checkout page together with a deep link, so a customer already on a phone can jump straight into their banking app instead of scanning their own screen.\n\nFor the mobile app, there is no code to scan at all — the KHQR payload is handed to the banking app as a deep link.\n\nAll three paths converge on one transaction record, one settlement reconciliation, and one export into the ERP.',
      table: {
        caption: 'Channel architecture — one integration, three front ends',
        headers: ['Channel', 'KHQR form', 'Customer action', 'Settlement path'],
        rows: [
          ['In-store POS', 'Dynamic code on customer display', 'Scans with any connected bank app', 'Merchant account at sponsor bank'],
          ['E-commerce', 'Dynamic code plus deep link at checkout', 'Scans, or taps through on mobile', 'Merchant account at sponsor bank'],
          ['Mobile app', 'Deep-linked KHQR payload', 'One tap into their banking app', 'Merchant account at sponsor bank'],
          ['International cards', 'Existing card gateway, retained', 'Card entry or contactless', 'Card acquirer, separate settlement'],
        ],
      },
    },
    {
      heading: 'Architecture: four services, and why settlement is separate from payment',
      content:
        'A build of this kind decomposes into four services, and the separation between the third and fourth is the one that inexperienced integrations get wrong.\n\nCode generation produces EMVCo-conformant KHQR payloads. The tag structure is fixed by the standard, but merchant-specific fields, the transaction reference and the CRC have to be assembled correctly for every transaction, and a payload that a validator accepts is not the same as one that every wallet in the field renders.\n\nTransaction management holds the lifecycle. A pending record is created when a code is generated; a webhook from the bank moves it to confirmed; downstream effects — receipt, stock, loyalty accrual — hang off that transition and nothing else.\n\nSettlement monitoring is a different problem from payment confirmation, and conflating the two is the classic defect. An individual Bakong payment confirms in seconds. The money arrives in the merchant\'s account on the sponsor bank\'s batch schedule. A system that treats a payment webhook as proof of funds received will reconcile cleanly and still be wrong about cash position.\n\nReconciliation matches three sets of records against each other: the payment service\'s own transactions, the bank\'s settlement statement, and the sales records in the POS, e-commerce and ERP systems. Its output is not a number but a list of exceptions, classified by kind — timing difference, amount mismatch, missing on one side — because that classification is what determines who has to act.',
    },
    {
      heading: 'Where the scope boundary sits',
      content:
        'This is the part of the scenario that determines whether the engagement is one CamFinTech can take at all, and it is worth setting out before architecture rather than after.\n\nCamFinTech builds the client side: the payment service, the channel adapters, the reconciliation logic, the ERP export, and the tests and documentation that let the merchant\'s own team run it. The work is charged as a fee for that build. There is no commission, no share of transaction value, and no markup on anything a third party invoices.\n\nThe merchant operates what we hand over. It runs on their infrastructure, under their control, carrying their traffic. We do not host or transmit client transaction data — a multi-tenant service standing in the payment path is a different kind of business with a different licensing posture, and it is not this one.\n\nThe sponsor bank is the licensed operator. It holds the merchant relationship, provides the Bakong connectivity, sets the merchant discount rate, and settles the funds. We never hold client funds and we never operate a rail.\n\nWhere the same engagement also involves navigating an approval — a merchant registration, an accreditation, a licence application — the client is the applicant of record, and CamFinTech neither influences nor claims to influence any regulator\'s or bank\'s decision. Where we do both the build and the approval work for one client, we say so and price them as two separable scopes.',
      table: {
        caption: 'Who does what',
        headers: ['Responsibility', 'Party', 'Why'],
        rows: [
          ['Client-side integration build', 'CamFinTech', 'Fee-only engineering; handed over on completion'],
          ['Running the payment service', 'Merchant', 'Their infrastructure, their traffic, their data'],
          ['Bakong connectivity and settlement', 'Sponsor bank', 'The licensed operator of the rail'],
          ['Merchant registration and KHQR code issuance', 'Merchant, via its bank', 'Client is the applicant of record'],
          ['Tax treatment of the resulting records', 'Client\'s licensed tax agent', 'Reserved work — not ours to perform'],
        ],
      },
    },
    {
      heading: 'How the build would be sequenced',
      content:
        'The sequencing principle is to put the first channel where a defect is cheapest to discover, not where the volume is.\n\nThat means e-commerce first. It carries lower transaction volume than the shop floor, its customers are more tolerant of a payment option that is visibly new, and the whole path — code generation, webhook, settlement, reconciliation, ERP export — can be exercised end to end without anyone standing at a till waiting.\n\nPoint of sale follows, and it starts in a small number of stores rather than all of them, because the failure modes at this stage are physical rather than logical: screen placement, glare, code size, and what a cashier does when a customer\'s scan does not take. Those are learned in a shop, not in a test suite.\n\nThe mobile app comes last, because it is the smallest increment. By then the backend is proven and the app change is a deep link and a status callback.\n\nA plan of this shape typically runs across a small number of months rather than weeks, with the pace set by the sponsor bank\'s testing windows and the merchant\'s own release calendar — both of which are outside the integrator\'s control and should be scheduled as constraints rather than assumed away.',
      table: {
        caption: 'Illustrative sequencing — an ordering principle, not a delivery record',
        headers: ['Stage', 'Channel', 'What it proves', 'Chief risk being managed'],
        rows: [
          ['1', 'E-commerce', 'End-to-end path including reconciliation', 'Logical defects, found cheaply'],
          ['2', 'POS pilot, few sites', 'Behaviour on a real shop floor', 'Physical and staff-workflow defects'],
          ['3', 'POS rollout', 'Operation at estate scale', 'Support load and site variance'],
          ['4', 'Mobile app', 'Deep-link path on proven backend', 'Release-cycle coupling'],
        ],
      },
    },
    {
      heading: 'Failure modes to design against',
      content:
        'Four are worth naming at design time because each is cheap to prevent and expensive to retrofit.\n\nPolling instead of webhooks. Asking the bank\'s API repeatedly whether a payment has landed adds latency the customer experiences at the counter and generates API load that scales with waiting time rather than with sales. Where the sponsor bank offers webhook notification, the design should take it, and should still reconcile against the settlement statement rather than trusting the webhook as the only record.\n\nTreating confirmation as settlement. Covered above; it belongs on this list too, because it survives code review easily. A payment confirmed is a payment owed to you, not a payment received.\n\nStatic codes in a retail setting. They are simpler to deploy and they push amount entry onto the customer. The reconciliation exceptions that follow cost more than the dynamic implementation saved.\n\nAssuming the integration is the hard part. It generally is not. Getting staff to offer the payment method at the counter, when habit says card or cash, decides whether the build is used. That is a change-management cost and it belongs in the plan and the budget, not in a footnote.',
    },
    {
      heading: 'Why this shape generalises',
      content:
        'The specific merchant is invented; the architecture is not. Any organisation accepting payments across more than one channel in Cambodia faces the same choice between bolting KHQR on as a fourth payment method and rebuilding around it as the primary rail.\n\nThe case for the latter rests on where the infrastructure is going rather than on where it is. Interoperability means one registration reaches the whole network. Settlement is real-time at the payment layer. Cross-border corridors extend the same acceptance surface to visitors from partner countries without a second integration. Each subsequent Bakong capability tends to arrive as an addition to an interface a merchant already speaks.\n\nAn architecture organised around that rail absorbs those additions as features. One organised around cards, with KHQR attached at the side, absorbs each of them as another integration project.',
    },
  ],
};
