import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

/* Homepage restructured 2026-08-31 (ADR-007).
 *
 * ADR-006 corrected what this page SAID. It did not change what the page WAS:
 * a claim-led marketing page organised as a sales argument, opening with a
 * "Book a readiness call" button. Bill's second reading — that it "lacks the
 * level of professionalism necessary in Cambodia's ultra conservative culture"
 * — is a finding about structure, and eight prior copy passes had not touched
 * the structure.
 *
 * The order and the devices below are the conventions observed across 22
 * Cambodian institutional homepages (banks, regulators, the Digital Government
 * Committee, and the professional-services firms this practice is compared
 * against). Three of them are load-bearing and should not be "improved":
 *
 *   1. The hero is an identity statement, not a value proposition, and the
 *      institution is the grammatical subject. No imperative, no second person,
 *      nothing promised to the reader. Not one site in the sample opens with a
 *      claim; the only imperative hero belonged to a firm headquartered abroad.
 *   2. There is NO button CTA and no scheduler. Across all 22 sites there was
 *      not a single "Book a call" or embedded calendar. Contact is an office
 *      you write to, and it lives at the bottom, not the top.
 *   3. The published corpus is the credibility section. For a pre-revenue firm
 *      this is what stands in for a client list, and it is exactly what the
 *      closest local analogue (BNG Legal) puts on its homepage.
 *
 * The hard rules stay visible because a client's third-party-risk function
 * needs to find them — vault 47_Firm_Regulatory_Perimeter §2: the client
 * retains full liability and TCRMG 2026 cl. 7.0.17 pushes NBC audit and access
 * rights down into their contract. They may be quietened; not removed.
 */

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.camfintech.com/#webpage",
      "url": "https://www.camfintech.com",
      "name": "CamFinTech — Regulatory and Compliance Advisers, Phnom Penh",
      "isPartOf": { "@id": "https://www.camfintech.com/#website" },
      "about": { "@id": "https://www.camfintech.com/#organization" },
      "datePublished": "2024-11-25",
      "dateModified": "2026-08-31",
      "inLanguage": "en",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["#home h1", "#practice h2 + p"],
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.camfintech.com/opengraph-image",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.camfintech.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does CamFinTech do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CamFinTech is a fee-only regulatory and compliance practice in Phnom Penh, established in 2024. It prepares Cambodian and foreign institutions to meet the standard for connecting to the Kingdom's national digital infrastructure — Bakong and KHQR, CamDX and CamDigiKey, and CamInvoice — runs the AML/CFT and governance programmes that hold afterwards, and builds the client-side integration. The firm holds no client funds and operates no rail. The approval decision rests with the regulator and the client is the applicant of record.",
          },
        },
        {
          "@type": "Question",
          "name": "How does the practice differ from a law firm or a systems integrator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A law firm provides legal advice and filings; reserved legal work belongs there and is routed there. A systems integrator builds. CamFinTech covers the layer between them — the approval programme, the risk and compliance function, and the client-side integration — and coordinates the licensed lawyer and the accredited Service Provider so that a client has one plan and one point of contact.",
          },
        },
        {
          "@type": "Question",
          "name": "What does fee-only mean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The firm charges professional fees for advisory and programme delivery. It takes no commission on transactions, no share of any payment flow, and no markup on a licensed lawyer's or an accredited Service Provider's invoice. It holds no client funds and operates no rail. This removes the conflicts of interest that arise when an adviser is also the operator or the aggregator, and it is a position a client's third-party-risk function can verify rather than take on trust.",
          },
        },
        {
          "@type": "Question",
          "name": "Does CamFinTech work on the SERC Prakas 093 digital-asset regime?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Prakas 093 has been in force since 30 December 2025. The firm's DASP work covers the AML/CFT programme build, the governance roster, and readiness from sandbox through to full application. The licensed operator submits and operates; the reserved legal opinion is routed to a Bar-admitted lawyer the firm coordinates.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the CamInvoice B2B mandate in force?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The business-to-government mandate is active. The business-to-business mandate is announced and phased but not yet gazetted, so the firm helps clients prepare ahead of it and does not suggest that anyone is already in breach.",
          },
        },
      ],
    },
  ],
};

const RAILS = [
  { rail: "Bakong · KHQR", authority: "National Bank of Cambodia" },
  { rail: "CamDX · CamDigiKey", authority: "Techo Startup Center" },
  { rail: "CamInvoice", authority: "General Department of Taxation" },
  { rail: "Digital assets · Prakas 093", authority: "SERC" },
];

const PRACTICE = [
  {
    group: "Connection to the national rails",
    items: [
      { ref: "SRV-01", name: "CamDX and CamDigiKey enablement", body: "Approval to connect to the national data-exchange and digital-identity systems, and the client-side integration that follows." },
      { ref: "SRV-02", name: "Bakong and KHQR integration", body: "Payment Service Institution licensing or member-bank sponsorship, and connectivity to the national payment rails." },
      { ref: "SRV-03", name: "CamInvoice readiness", body: "Gap assessment and a costed plan against the General Department of Taxation's requirements, ahead of the phased business-to-business mandate." },
      { ref: "SRV-04", name: "CamInvoice service-provider enablement", body: "Connection of a client's ERP to the e-invoicing rail, delivered with an accredited Service Provider where platform depth is the better fit." },
    ],
  },
  {
    group: "Licensing and market entry",
    items: [
      { ref: "SRV-05", name: "Licensing readiness", body: "Identification of the applicable National Bank, NBFSA or SERC licence, gap mapping against its requirements, and preparation of the application." },
      { ref: "SRV-06", name: "Market entry", body: "For foreign institutions establishing in Cambodia — entity formation, licensing strategy, and the sequence of approvals that reaches the rails." },
    ],
  },
  {
    group: "Risk, compliance and security",
    items: [
      { ref: "SRV-07", name: "AML and CFT programme design", body: "Customer due diligence and enhanced due diligence, transaction monitoring, CAFIU reporting and MLRO support — built to be demonstrated in supervision, not filed." },
      { ref: "SRV-08", name: "Security review", body: "Cyber-risk advisory and pre-launch review against the National Bank's Technology and Cyber Risk Management Guidelines. Penetration testing is routed to an accredited security firm." },
      { ref: "SRV-09", name: "Data-protection governance", body: "Consent, retention, processor governance and data-protection-officer support, ahead of the Kingdom's Personal Data Protection Law." },
      { ref: "SRV-11", name: "Digital-asset service provider readiness", body: "Readiness for the SERC regime under Prakas 093, in force since 30 December 2025 — AML and CFT build, governance roster, and sandbox-to-full application preparation.", href: "/products/dasp" },
    ],
  },
  {
    group: "Capability transfer",
    items: [
      { ref: "SRV-10", name: "Professional training and handover", body: "Cohort training in digital public infrastructure, cybersecurity and regulatory compliance, so that a client's own team operates the integration and the programme after handover." },
    ],
  },
];

const SEQUENCE = [
  { n: "01", t: "Readiness diagnostic", d: "Which rails, which licences, and where a submission would fall short today." },
  { n: "02", t: "Application preparation", d: "The submission is assembled and supported to the published standard. The client is the applicant of record throughout." },
  { n: "03", t: "Compliance programme", d: "AML and CFT, governance, and the controls expected before go-live." },
  { n: "04", t: "Integration and handover", d: "The client-side integration is built by the firm, or delivered by an accredited Service Provider under its management. Either way the firm runs acceptance testing and handover." },
  { n: "05", t: "Continuing support", d: "Retainer or MLRO support, so the programme holds after the approval." },
];

const CORPUS = [
  { href: "/regulatory", name: "Regulatory instruments", count: "17 instruments", note: "Laws, sub-decrees and Prakas governing Cambodian financial technology. Each entry records the source that was read and the date it was read, and states what the instrument does not cover." },
  { href: "/knowledge", name: "Knowledge base", count: "8 papers", note: "Extended technical and regulatory references on the rails and the approvals that reach them." },
  { href: "/learn", name: "Explainers", count: "12 articles", note: "Shorter reference pieces on how each rail works and what it requires." },
  { href: "/insights", name: "Insights", count: "6 analyses", note: "Analysis of the Cambodian market and its digital-infrastructure programme." },
  { href: "/use-cases", name: "Engagement scenarios", count: "4 scenarios", note: "Illustrative scoping documents showing how an engagement is structured and where the boundaries fall. Not client engagements." },
  { href: "/glossary", name: "Glossary", count: "10 entries", note: "Definitions of the institutions, rails and instruments referred to throughout." },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <Header />

      <main className="flex-1">
        <div className="mx-auto flex max-w-6xl flex-col px-4 py-14 sm:px-6 sm:py-20 lg:px-8">

          {/* 1 — Identity. Name, then what the firm is, then where and since when.
              No claim, no CTA. See the header comment before changing this. */}
          <section className="w-full border-b border-line pb-14" id="home">
            <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-navy">
              CamFinTech
            </p>
            <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-[1.2] tracking-[-0.02em] text-navy sm:text-4xl lg:text-[2.75rem]">
              Regulatory and compliance advisers to institutions connecting to the Kingdom of Cambodia&apos;s national digital infrastructure.
            </h1>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.12em] text-slate">
              Phnom Penh &middot; Established 2024 &middot; Fee-only
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-x-10 gap-y-4 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {RAILS.map((r) => (
                <div key={r.rail}>
                  <dt className="font-display text-sm font-bold text-navy">{r.rail}</dt>
                  <dd className="mt-1 text-sm text-slate">{r.authority}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* 2 — Statement of practice, signed. The "President's message" convention
              observed at PPCBank and the Royal University of Phnom Penh: a named
              officeholder, a photograph, and a short statement in the firm's voice. */}
          <section className="mt-16 w-full" id="statement">
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-slate">
              Statement of practice
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-14">
              <div className="lg:col-span-2 flex flex-col gap-5">
                <p className="text-lg leading-relaxed text-navy">
                  The Royal Government built the rails. Bakong settles at national scale, CamDX carries data between ministries and licensed institutions, and CamInvoice is bringing invoicing into a single system. The standard for connecting to any of them is set by the National Bank of Cambodia, the NBFSA and SERC, the Techo Startup Center and the General Department of Taxation.
                </p>
                <p className="leading-relaxed text-navy/85">
                  Meeting that standard is mostly not an engineering exercise. The requirements are prudential — AML and CFT programme design, governance, capital planning, documentation — assessed by more than one authority and often alongside a sponsoring member bank. Most financial technology firms are engineering organisations and hold no risk or compliance function, so the work falls to people trained for something else.
                </p>
                <p className="leading-relaxed text-navy/85">
                  This practice supplies that function, and hands it over. Our people have worked inside the regulators, and we would rather leave the competence inside a client&apos;s team than remain necessary to it. Compliance capability held in Cambodia is worth more to this market than compliance capability flown in.
                </p>
                <div className="mt-2 border-l-2 border-teal pl-5">
                  <p className="font-display text-sm font-bold text-navy">William Mallett</p>
                  <p className="text-sm text-slate">Founder &amp; Managing Director</p>
                  <p className="mt-2 text-sm">
                    <Link href="/about" className="text-navy underline decoration-teal decoration-2 underline-offset-4">
                      About the practice and its founder
                    </Link>
                  </p>
                </div>
              </div>
              <div className="lg:col-span-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/founder-william-mallett.png"
                  alt="William Mallett, Founder and Managing Director of CamFinTech"
                  width={397}
                  height={500}
                  className="w-40 rounded-lg border border-line object-cover lg:w-full lg:max-w-[220px]"
                />
              </div>
            </div>
          </section>

          {/* 3 — Practice. Stated flatly, in four groups. The SRV references are
              kept as a quiet monospace reference for correspondence and RFPs;
              "eleven productised service vectors" was internal taxonomy and is gone. */}
          <section className="mt-20 w-full border-t border-line pt-14" id="practice">
            <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Practice
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-navy/85">
              The firm works across the approvals, the compliance programmes and the client-side integrations that connect a regulated institution or a rail-using enterprise to Cambodia&apos;s digital public infrastructure.
            </p>

            <div className="mt-10 flex flex-col gap-10">
              {PRACTICE.map((g) => (
                <div key={g.group}>
                  <h3 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-slate">
                    {g.group}
                  </h3>
                  <div className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
                    {g.items.map((it) => (
                      <div key={it.ref} className="bg-card p-5">
                        <p className="font-mono text-[0.7rem] tracking-wider text-slate">{it.ref}</p>
                        <h4 className="mt-1 font-display font-bold text-navy">{it.name}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-navy/80">
                          {it.body}
                          {it.href && (
                            <>
                              {" "}
                              <Link href={it.href} className="text-navy underline decoration-teal decoration-2 underline-offset-4">
                                Full specification
                              </Link>
                            </>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-slate">
                How an engagement proceeds
              </h3>
              <ol className="mt-4 divide-y divide-line border-y border-line">
                {SEQUENCE.map((s) => (
                  <li key={s.n} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
                    <span className="font-mono text-xs text-slate sm:w-10 sm:shrink-0 sm:pt-1">{s.n}</span>
                    <span className="font-display font-bold text-navy sm:w-56 sm:shrink-0">{s.t}</span>
                    <span className="text-sm leading-relaxed text-navy/80">{s.d}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate">
                Where an accredited Service Provider is the better fit for a build — BanhJi, Innolab and Odoo, MAQSU, SAP and Crimson, KOSIGN, Metfone, GK-Smart — the firm engages them as a disclosed sub-contract and remains accountable for the programme. Their work is never marked up, and the firm does not compete for their clients. Pricing is indicative until validated by quote.
              </p>
            </div>
          </section>

          {/* 4 — Constitution and limits. Each limit names the party the work
              properly belongs to (ADR-006 rule 4). These are not refusals, and
              they are not decoration: a client's third-party-risk function needs
              to find them. */}
          <section className="mt-20 w-full border-t border-line pt-14" id="constitution">
            <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              How the firm is constituted
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-navy/85">
              Set out in full, including its boundaries. Several things a client needs belong to a licensed professional, to the operator, or to the regulator, and the firm would rather name them than blur them.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="rounded-lg bg-teal/5 p-6">
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-navy">
                  Standing commitments
                </h3>
                <dl className="mt-4 flex flex-col gap-4 text-sm">
                  <div>
                    <dt className="font-display font-bold text-navy">Fee-only</dt>
                    <dd className="text-navy/80">Professional fees for advisory and delivery. No commissions, no share of transaction value, no markup on a partner&apos;s invoice.</dd>
                  </div>
                  <div>
                    <dt className="font-display font-bold text-navy">No client funds</dt>
                    <dd className="text-navy/80">Funds move through the licensed operator. They do not move through this firm.</dd>
                  </div>
                  <div>
                    <dt className="font-display font-bold text-navy">No rail operation</dt>
                    <dd className="text-navy/80">The client, or its sponsoring member bank, is and remains the licensed operator.</dd>
                  </div>
                  <div>
                    <dt className="font-display font-bold text-navy">Reserved work to licensed professionals</dt>
                    <dd className="text-navy/80">Bar-admitted counsel, licensed tax agents, accredited security firms. Coordinated openly, never marked up.</dd>
                  </div>
                  <div>
                    <dt className="font-display font-bold text-navy">Paid for process competence</dt>
                    <dd className="text-navy/80">The fee reflects the work of preparing a submission to standard — never influence over how it is decided.</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-lg border border-line p-6">
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-navy">
                  Where the boundaries fall
                </h3>
                <dl className="mt-4 flex flex-col gap-4 text-sm">
                  <div>
                    <dt className="font-display font-bold text-navy">The approval decision</dt>
                    <dd className="text-navy/80">The regulator&apos;s, entirely. The client is the applicant of record; the firm prepares the work rather than presses the case.</dd>
                  </div>
                  <div>
                    <dt className="font-display font-bold text-navy">Custody and operation of the rail</dt>
                    <dd className="text-navy/80">The licensed operator&apos;s — the client, or its sponsoring member bank.</dd>
                  </div>
                  <div>
                    <dt className="font-display font-bold text-navy">Transaction traffic</dt>
                    <dd className="text-navy/80">The client&apos;s. The firm builds the integration; the client runs it, on the client&apos;s infrastructure.</dd>
                  </div>
                  <div>
                    <dt className="font-display font-bold text-navy">Legal opinions and tax filings</dt>
                    <dd className="text-navy/80">Bar-admitted counsel&apos;s and licensed agents&apos;. The firm runs the surrounding programme.</dd>
                  </div>
                  <div>
                    <dt className="font-display font-bold text-navy">Any share of transaction value</dt>
                    <dd className="text-navy/80">Outside the fee basis, so that advice does not depend on what a client processes.</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Conflict disclosure. Load-bearing — the firm both builds and
                prepares approvals, which is a fair thing for a sceptical reader
                to question, so it is answered here rather than in the
                engagement letter. Do not remove. */}
            <div className="mt-8 rounded-lg border border-line bg-card p-6">
              <h3 className="font-display font-bold text-navy">Where both are delivered, it is disclosed</h3>
              <p className="mt-3 max-w-4xl text-sm leading-relaxed text-navy/85">
                The firm may build a client&apos;s integration and prepare its approval on the same engagement, and a reader is entitled to ask about that. The client is always the applicant of record: the licence, the filing and the operator role are the client&apos;s. The firm does not influence a regulator&apos;s decision and does not claim to; its work is meeting the published bar. Where both scopes are delivered, that is disclosed in the engagement letter and priced separately, so either can be taken elsewhere without penalty.
              </p>
            </div>
          </section>

          {/* 5 — Published work. For a practice with no client list this is the
              credibility section, and it is the convention the local market
              rewards most. It is also what makes the corpus reachable. */}
          <section className="mt-20 w-full border-t border-line pt-14" id="publications">
            <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Published reference
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-navy/85">
              The firm maintains a public reference on Cambodian financial-technology regulation and the national rails. It is open, it is dated, and it is the most direct way to assess how the practice works before speaking to anyone.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
              {CORPUS.map((c) => (
                <Link key={c.href} href={c.href} className="group bg-card p-6 transition-colors hover:bg-teal/5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display font-bold text-navy underline decoration-teal decoration-2 underline-offset-4">
                      {c.name}
                    </h3>
                    <span className="font-mono text-[0.7rem] whitespace-nowrap text-slate">{c.count}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-navy/80">{c.note}</p>
                </Link>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate">
              The firm also publishes <a href="https://riel.report" rel="external" className="text-navy underline decoration-teal decoration-2 underline-offset-4">The Riel Report</a>, an independent record of Cambodian financial-technology developments.
            </p>
          </section>

          {/* 6 — Why the work exists now. Sourced to the Royal Government's own
              assessment. NRA II was fetched from cafiu.gov.kh on 2026-08-31 and
              the quotation below is verbatim from its Conclusion (p.15,
              sanitized version). Do NOT reintroduce a "post-Huione"-style frame
              here: naming a designated company as an era-marker for national
              embarrassment is a positioning no Cambodian professional firm uses,
              and the argument is stronger from the government's own text. */}
          <section className="mt-20 w-full border-t border-line pt-14" id="context">
            <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Why this work, and why now
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
              <blockquote className="lg:col-span-3 border-l-2 border-teal pl-6">
                <p className="text-lg leading-relaxed text-navy">
                  &ldquo;&hellip;significant progress in its Anti-Money Laundering and Countering the Financing of Terrorism (AML/CFT) framework, with strengthened laws and better inter-agency coordination. However, it also highlights a critical gap between legislative development and operational implementation across various sectors. Key deficiencies include inconsistent beneficial ownership verification, limited data integration, and uneven quality in suspicious transaction reporting.&rdquo;
                </p>
                <footer className="mt-4 text-sm text-slate">
                  Cambodia&apos;s 2nd National Risk Assessment Report on Money Laundering and Terrorist Financing (NRA&nbsp;II), Conclusion. Phnom Penh, 24 December 2025.
                </footer>
              </blockquote>
              <div className="lg:col-span-2 flex flex-col gap-4">
                <p className="leading-relaxed text-navy/85">
                  That is the Royal Government&apos;s own assessment of where the work lies, and it describes this practice&apos;s subject exactly: the distance between a framework that exists and a programme that operates.
                </p>
                <p className="leading-relaxed text-navy/85">
                  NRA&nbsp;II also sets capacity building among its recommended actions — specialised training and a wider understanding of AML and CFT obligations across sectors. That is the part of this practice we care most about, and the reason every engagement is written to end in a handover.
                </p>
              </div>
            </div>
          </section>

          {/* 7 — Contact. A formal block, at the bottom, with no button and no
              response-time promise. Across 22 Cambodian institutional sites
              there was not one scheduler or "Book a call". */}
          <section className="mt-20 w-full border-t border-line pt-14" id="contact">
            <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Contact
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-slate">Office</h3>
                <address className="mt-3 text-sm not-italic leading-relaxed text-navy">
                  30 Preah Norodom Boulevard<br />
                  Sangkat Phsar Thmey 3<br />
                  Khan Daun Penh<br />
                  Phnom Penh 12210<br />
                  Kingdom of Cambodia
                </address>
              </div>
              <div>
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-slate">General</h3>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-navy">
                  <li><a className="underline decoration-teal decoration-2 underline-offset-4" href="mailto:info@camfintech.com">info@camfintech.com</a></li>
                  <li><a className="underline decoration-teal decoration-2 underline-offset-4" href="tel:+855762775645">+855 76 277 5645</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-slate">Specific enquiries</h3>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-navy">
                  <li><a className="underline decoration-teal decoration-2 underline-offset-4" href="mailto:dasp@camfintech.com">dasp@camfintech.com</a> <span className="text-slate">&mdash; Prakas 093</span></li>
                  <li><a className="underline decoration-teal decoration-2 underline-offset-4" href="mailto:partners@camfintech.com">partners@camfintech.com</a> <span className="text-slate">&mdash; partners and sub-contract</span></li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-slate">Messaging</h3>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-navy">
                  <li><a className="underline decoration-teal decoration-2 underline-offset-4" href="https://t.me/+855762775645" rel="external">Telegram</a></li>
                  <li><a className="underline decoration-teal decoration-2 underline-offset-4" href="https://wa.me/855762775645" rel="external">WhatsApp</a></li>
                </ul>
                {/* The Khmer note reframed 2026-08-31. It previously read
                    "Khmer language edition coming soon, pending native editorial
                    hire" — which published an unfilled internal hire as an
                    apology. The same fact stated as a standard is an asset in
                    this market, where a mistranslated requirement would be a
                    competence disproof. See ADR-007 on the Khmer decision. */}
                <p className="mt-5 text-xs leading-relaxed text-slate">
                  Correspondence in English. <span className="font-khmer">ភាសាខ្មែរ</span> — the Khmer edition is written by a Cambodian editor rather than translated, and is published when it is ready.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
