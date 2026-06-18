import Header from "./components/Header";
import Footer from "./components/Footer";

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.camfintech.com/#webpage",
      "url": "https://www.camfintech.com",
      "name": "CamFinTech — Cambodia DPI Approval-Navigation & Compliance",
      "isPartOf": { "@id": "https://www.camfintech.com/#website" },
      "about": { "@id": "https://www.camfintech.com/#organization" },
      "datePublished": "2024-11-25",
      "dateModified": "2026-06-18",
      "inLanguage": "en",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["#home h1", "#home h1 + p", "#problem h2 + p"],
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
          "name": "What does CamFinTech actually do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CamFinTech is a fee-only regulatory approval-navigation and compliance firm in Phnom Penh. We get Cambodian and foreign FinTechs approved onto Cambodia's Digital Public Infrastructure rails — Bakong/KHQR, CamDX/CamDigiKey, and CamInvoice — and run the compliance programme that keeps them approved. The technical build is delivered by our accredited Service Providers; we coordinate them. We never hold client funds and never operate a rail.",
          },
        },
        {
          "@type": "Question",
          "name": "Why use CamFinTech instead of a law firm or system integrator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Law firms cover legal advice and filings but don't run an end-to-end approval programme or build a risk-and-compliance function. System integrators and accredited Service Providers build the integration but don't navigate the regulator. CamFinTech owns the layer that's unowned by both — regulatory approval-navigation, AML/CFT and governance programme build, cross-rail orchestration — staffed by ex-NBC, NBFSA, TSC, SERC, and GDT specialists. We coordinate the law firm and the SP; you get one plan and one point of contact.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you help with the SERC Prakas 093 digital-asset regime?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — DASP approval-readiness is our flagship product (SRV-11). Prakas 093 has been in force since 30 December 2025. Our DASP-DX/BUILD/RUN/TRAIN programme covers the AML/CFT build, governance roster, sandbox-to-full readiness, and ongoing compliance retainer. The licensed DASP operator (you) submits and operates; the reserved legal opinion goes to a Bar lawyer we coordinate. See /products/dasp for the full product spec.",
          },
        },
        {
          "@type": "Question",
          "name": "What does 'fee-only' mean and why does it matter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fee-only means we charge professional fees for advisory and programme delivery — never commissions on transactions, never markups on the licensed lawyer's or accredited SP's invoices, never a cut of any payment flow. We never hold client funds and never operate a rail. This eliminates the conflicts of interest that arise when an advisor is also the operator or aggregator. Post-Huione, that conflict-free posture is a meaningful credibility signal to regulators and counterparties.",
          },
        },
        {
          "@type": "Question",
          "name": "Is CamInvoice B2B mandatory yet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The B2B mandate is announced and phased (~2026–2027) but not yet gazetted. We help clients get ahead of it via SRV-03 (CamInvoice Readiness) and SRV-04 (SP-Enablement), but we don't claim they're already in breach. Honesty discipline: anticipatory mandates are framed as 'get ahead of' the law, never 'you're already non-compliant.' The B2G CamInvoice mandate is gazetted and active.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <Header />

      <main className="flex-1">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          {/* Hero */}
          <section className="w-full" id="home">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16">
              <div className="flex flex-col gap-6 text-left lg:col-span-3">
                <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">
                  We get Cambodian and foreign FinTechs approved onto the government rails — and keep them compliant.
                </h1>
                <p className="text-base font-normal leading-normal sm:text-lg text-text-light/85 dark:text-text-dark/85">
                  CamFinTech is a fee-only regulatory approval-navigation and compliance firm. We navigate NBC, NBFSA, TSC, SERC, and GDT approvals for Bakong/KHQR, CamDX/CamDigiKey, and CamInvoice — raising you <em>to</em> the regulator&apos;s standard. We&apos;re your single accountable partner for the whole journey, and we coordinate our vetted legal, tax, and integration partners transparently. <strong>We never hold your funds and never operate a rail; the technical build is delivered by accredited partners we coordinate.</strong>
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold tracking-[0.015em] text-text-light transition-transform hover:scale-105"
                  >
                    <span className="truncate">Book a readiness call</span>
                  </a>
                  <a
                    href="#services"
                    className="flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary/20 px-5 text-base font-bold tracking-[0.015em] text-text-light dark:text-text-dark transition-transform hover:scale-105"
                  >
                    <span className="truncate">See what we do</span>
                  </a>
                </div>
                <p className="text-xs text-text-light/55 dark:text-text-dark/55">
                  ភាសាខ្មែរ — Khmer language edition coming soon, pending native editorial hire.
                </p>
              </div>

              {/* Trust strip */}
              <aside className="lg:col-span-2 flex flex-col gap-3 rounded-2xl border-2 border-primary/30 bg-primary/5 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">How we operate</p>
                <ul className="flex flex-col gap-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">·</span>
                    <span><strong>Fee-only.</strong> No commissions, no transaction cuts.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">·</span>
                    <span><strong>Never hold client funds.</strong> Funds flow through the licensed operator, never us.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">·</span>
                    <span><strong>Never operate a rail.</strong> You (or your sponsor member bank) remain the licensed operator.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">·</span>
                    <span><strong>Reserved work to licensed partners.</strong> Bar lawyers, GDT tax agents, accredited Service Providers.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">·</span>
                    <span><strong>Process competence, never access.</strong></span>
                  </li>
                </ul>
              </aside>
            </div>
          </section>

          {/* Problem */}
          <section className="mt-24 w-full" id="problem">
            <div className="flex flex-col items-start gap-4 max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                The problem we solve
              </h2>
              <p className="text-lg text-text-light/85 dark:text-text-dark/85 leading-relaxed">
                Cambodia&apos;s rails are powerful — but getting <em>onto</em> them defeats most applicants. Approval is opaque and multi-gated (an NBC licence, a sponsoring member bank, a separate CamDX membership), and it turns on <strong>AML/CFT, governance, capital planning, and documentation</strong> — not code.
              </p>
              <p className="text-lg text-text-light/85 dark:text-text-dark/85 leading-relaxed">
                Most FinTechs have no in-house risk or compliance function, so they put engineers on regulatory problems they were never trained for. Many applicants report being turned back as &quot;non-compliant&quot; with no further explanation. The result is delay, cost, and applications that don&apos;t clear the bar.
              </p>
              <p className="text-lg text-text-light/85 dark:text-text-dark/85 leading-relaxed">
                We are the missing risk-and-compliance function. Our people have hands-on NBC, NBFSA, TSC, SERC, and GDT experience — a competency the regulator itself documents as scarce in Cambodia.
              </p>
            </div>
          </section>

          {/* What we do / don't */}
          <section className="mt-24 w-full" id="scope">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                What we do (and don&apos;t)
              </h2>
              <p className="max-w-3xl text-base text-text-light/75 dark:text-text-dark/75">
                The boundary is explicit and transparent. We sell process competence; reserved work goes to licensed partners; the technical build goes to accredited Service Providers.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-xl border-2 border-primary/30 bg-card-light dark:bg-card-dark p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
                  We do
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>Navigate the <strong>approval</strong> for each rail (PSP/Bakong, CamDX/eKYC, CamInvoice, SERC DASP)</li>
                  <li>Build your <strong>risk &amp; compliance programme</strong> (AML/CFT, governance, MLRO support)</li>
                  <li><strong>Represent</strong> Cambodian <em>and</em> foreign FinTechs before the regulators</li>
                  <li><strong>Coordinate</strong> the accredited Service Provider who delivers the technical build</li>
                  <li>Route reserved work (legal, tax filing, pen-test) to licensed partners — transparently, never marked up</li>
                </ul>
              </div>
              <div className="rounded-xl border-2 border-text-light/15 dark:border-text-dark/15 bg-card-light/50 dark:bg-card-dark/50 p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-text-light/70 dark:text-text-dark/70">
                  <span className="material-symbols-outlined text-2xl">block</span>
                  We don&apos;t
                </h3>
                <ul className="space-y-3 text-sm text-text-light/75 dark:text-text-dark/75">
                  <li>Hold client funds or operate any rail</li>
                  <li>Write the integration code — that&apos;s our accredited partners</li>
                  <li>Lobby, trade on contacts, or sell &quot;access&quot;</li>
                  <li>Take a cut of your transactions</li>
                  <li>Promise an outcome we can&apos;t control</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Services — 4-bucket SRV grid */}
          <section className="mt-24 w-full" id="services">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                What we navigate
              </h2>
              <p className="max-w-3xl text-base text-text-light/75 dark:text-text-dark/75">
                Eleven productised service vectors across four areas — applied across regulated FinTechs (banks, MFIs, PSPs, insurers, securities/crypto, alt-lenders) and rail-using enterprises.
              </p>
            </div>

            <div className="space-y-10">
              {/* Core Rail Integrations */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider px-2 py-1 rounded bg-primary/10">Core Rail Integrations</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-border-light dark:border-border-dark p-5">
                    <p className="text-xs text-primary font-bold mb-1">SRV-01</p>
                    <h4 className="font-bold mb-2">CamDX / eKYC Enablement</h4>
                    <p className="text-sm text-text-light/75 dark:text-text-dark/75">Verify your customers digitally in seconds. We navigate the approval to connect to Cambodia&apos;s national identity system and coordinate the integration build.</p>
                  </div>
                  <div className="rounded-lg border border-border-light dark:border-border-dark p-5">
                    <p className="text-xs text-primary font-bold mb-1">SRV-02</p>
                    <h4 className="font-bold mb-2">Bakong / KHQR Integration</h4>
                    <p className="text-sm text-text-light/75 dark:text-text-dark/75">Take and send payments on Cambodia&apos;s national rails — we navigate PSP licensing or member-sponsorship and coordinate the technical build.</p>
                  </div>
                  <div className="rounded-lg border border-border-light dark:border-border-dark p-5">
                    <p className="text-xs text-primary font-bold mb-1">SRV-03</p>
                    <h4 className="font-bold mb-2">CamInvoice Readiness</h4>
                    <p className="text-sm text-text-light/75 dark:text-text-dark/75">Be ready for e-invoicing before the B2B mandate phases in. Gap assessment + costed plan against the GDT&apos;s rules.</p>
                  </div>
                  <div className="rounded-lg border border-border-light dark:border-border-dark p-5">
                    <p className="text-xs text-primary font-bold mb-1">SRV-04</p>
                    <h4 className="font-bold mb-2">CamInvoice SP-Enablement</h4>
                    <p className="text-sm text-text-light/75 dark:text-text-dark/75">Go live on e-invoicing without the headache. We coordinate accredited Service Providers to connect your ERP — every invoice clears automatically.</p>
                  </div>
                </div>
              </div>

              {/* Strategic Services */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider px-2 py-1 rounded bg-primary/10">Strategic Services</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-border-light dark:border-border-dark p-5">
                    <p className="text-xs text-primary font-bold mb-1">SRV-05</p>
                    <h4 className="font-bold mb-2">Licensing-Readiness</h4>
                    <p className="text-sm text-text-light/75 dark:text-text-dark/75">Know exactly which NBC, NBFSA, or SERC licence you need — and be ready to win it. Gap mapping + application preparation.</p>
                  </div>
                  <div className="rounded-lg border border-border-light dark:border-border-dark p-5">
                    <p className="text-xs text-primary font-bold mb-1">SRV-06</p>
                    <h4 className="font-bold mb-2">Market-Entry Consulting</h4>
                    <p className="text-sm text-text-light/75 dark:text-text-dark/75">For foreign FinTechs entering Cambodia — entity setup, licensing strategy, and a step-by-step route onto the government rails.</p>
                  </div>
                </div>
              </div>

              {/* Risk & Security */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider px-2 py-1 rounded bg-primary/10">Risk &amp; Security</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-border-light dark:border-border-dark p-5">
                    <p className="text-xs text-primary font-bold mb-1">SRV-07</p>
                    <h4 className="font-bold mb-2">AML-Programme Design</h4>
                    <p className="text-sm text-text-light/75 dark:text-text-dark/75">Build an anti-money-laundering programme regulators trust. CDD/EDD, transaction monitoring, CAFIU reporting, MLRO support.</p>
                  </div>
                  <div className="rounded-lg border border-border-light dark:border-border-dark p-5">
                    <p className="text-xs text-primary font-bold mb-1">SRV-08</p>
                    <h4 className="font-bold mb-2">Security / Pentesting</h4>
                    <p className="text-sm text-text-light/75 dark:text-text-dark/75">Pre-launch security reviews and penetration tests aligned to NBC&apos;s TCRMG expectations — routed to an accredited security firm.</p>
                  </div>
                  <div className="rounded-lg border border-border-light dark:border-border-dark p-5">
                    <p className="text-xs text-primary font-bold mb-1">SRV-09</p>
                    <h4 className="font-bold mb-2">Data-Protection Protocols</h4>
                    <p className="text-sm text-text-light/75 dark:text-text-dark/75">Get ahead of Cambodia&apos;s incoming Personal Data Protection Law. Consent, retention, processor governance, DPO-support.</p>
                  </div>
                  <div className="rounded-lg border-2 border-primary/40 bg-primary/5 p-5">
                    <p className="text-xs text-primary font-bold mb-1">SRV-11 · Flagship</p>
                    <h4 className="font-bold mb-2">DASP Approval-Readiness</h4>
                    <p className="text-sm text-text-light/75 dark:text-text-dark/75">End-to-end readiness for SERC&apos;s Prakas 093 digital-asset licensing regime (in force 30 Dec 2025). AML/CFT build, governance roster, sandbox-to-full readiness. <a href="/products/dasp" className="text-primary font-medium hover:underline">Learn more →</a></p>
                  </div>
                </div>
              </div>

              {/* Enablement */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider px-2 py-1 rounded bg-primary/10">Enablement</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-border-light dark:border-border-dark p-5">
                    <p className="text-xs text-primary font-bold mb-1">SRV-10</p>
                    <h4 className="font-bold mb-2">Operational Training</h4>
                    <p className="text-sm text-text-light/75 dark:text-text-dark/75">Hands-on training so your team can operate the rails, follow the compliance steps, and keep everything running after we&apos;ve handed over.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 text-xs text-text-light/55 dark:text-text-dark/55 italic max-w-3xl">
              Technical build delivered by our accredited partners (BanhJi, Innolab/Odoo, MAQSU, SAP/Crimson, KOSIGN, Metfone, GK-Smart). We coordinate, advise, and run the compliance programme — we don&apos;t compete on engineering. Pricing is indicative; every engagement is validated by quote.
            </p>
          </section>

          {/* Why CamFinTech */}
          <section className="mt-24 w-full" id="why-us">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-3 lg:gap-10">
              <div className="lg:col-span-1 flex flex-col gap-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Why CamFinTech
                </h2>
                <p className="text-base text-text-light/75 dark:text-text-dark/75">
                  Five things that make us the firm regulator-fluent FinTechs hire to navigate the approval and run the compliance.
                </p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-2">Regulator-fluent, not just regulation-literate</h3>
                  <p className="text-sm text-text-light/75 dark:text-text-dark/75">Our people have hands-on NBC, NBFSA, TSC, SERC, and GDT experience — a competency NBFSA&apos;s own 2024–2028 FinTech plan documents as scarce in Cambodia.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">We raise you <em>to</em> the standard</h3>
                  <p className="text-sm text-text-light/75 dark:text-text-dark/75">We make your application the one the regulator wants to approve — documented, governed, compliant — so it doesn&apos;t come back unexplained.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Capital-light and conflict-free</h3>
                  <p className="text-sm text-text-light/75 dark:text-text-dark/75">Fee-only. We never touch your money or your rail. Our incentives are simple: get you approved and keep you compliant.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">One coordinator across every rail</h3>
                  <p className="text-sm text-text-light/75 dark:text-text-dark/75">Payments, identity, and tax — navigated together, with the build handed to the right accredited partner. One plan, one point of contact.</p>
                </div>
                <div className="sm:col-span-2">
                  <h3 className="font-bold mb-2">Single accountable partner, transparently</h3>
                  <p className="text-sm text-text-light/75 dark:text-text-dark/75">Where a step needs a licensed lawyer, tax agent, or integrator, we coordinate our vetted partners and tell you exactly who does what. You&apos;re never handed a list of vendors to chase, and we never mark up their work.</p>
                </div>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section className="mt-24 w-full" id="how">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
              <p className="max-w-3xl text-base text-text-light/75 dark:text-text-dark/75">
                Five steps from &quot;interested&quot; to &quot;operating and compliant.&quot;
              </p>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { n: "1", t: "Readiness diagnostic", d: "Which rails, which licences, where you&apos;d fail today." },
                { n: "2", t: "Approval-navigation", d: "We assemble and shepherd each application. You remain the applicant of record." },
                { n: "3", t: "Compliance build", d: "AML/CFT, governance, and the controls regulators expect before go-live." },
                { n: "4", t: "Coordinated integration", d: "An accredited Service Provider builds; we manage delivery, UAT, and handover." },
                { n: "5", t: "Ongoing compliance", d: "Retainer or MLRO-support so you stay approved." },
              ].map((step) => (
                <li key={step.n} className="flex flex-col gap-2 rounded-xl border border-border-light dark:border-border-dark p-5">
                  <span className="text-2xl font-bold text-primary">{step.n}</span>
                  <h3 className="font-bold">{step.t}</h3>
                  <p className="text-sm text-text-light/75 dark:text-text-dark/75" dangerouslySetInnerHTML={{ __html: step.d }} />
                </li>
              ))}
            </ol>
          </section>

          {/* Proof / pre-logo */}
          <section className="mt-24 w-full" id="proof">
            <div className="rounded-2xl border-2 border-border-light dark:border-border-dark p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Proof and credibility</h2>
              <p className="text-sm text-text-light/80 dark:text-text-dark/80 mb-4">
                We&apos;re early. Pre-logo discipline matters: we don&apos;t publish hypothetical case studies as if they were real engagements. What we&apos;ll show you when you ask:
              </p>
              <ul className="space-y-3 text-sm text-text-light/80 dark:text-text-dark/80">
                <li>
                  <strong>Founder track record.</strong> Hands-on regulator-side experience that staffs the moat — the kind a procurement team can interrogate in a call.
                </li>
                <li>
                  <strong>Methodology walk-throughs.</strong> Our DPI onboarding architecture, the integrity STOP-screen, the build-then-retainer ladder — explained against your specific rail and use case.
                </li>
                <li>
                  <strong>Voluntary TCRMG-2026 alignment.</strong> We hold our own operations to NBC&apos;s Technology and Cyber Risk Management Guidelines — even as a non-BFI — and run our own infrastructure to that standard. Process competence isn&apos;t just what we sell.
                </li>
                <li>
                  <strong>The Riel Report.</strong> Cambodia FinTech intelligence read by the financial-services industry, regulators, and multilateral analysts — published by us at <a href="https://riel.report" className="text-primary hover:underline" rel="external">riel.report</a>.
                </li>
              </ul>
            </div>
          </section>

          {/* About snippet */}
          <section className="mt-24 w-full" id="about">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About</h2>
              </div>
              <div className="lg:col-span-2 flex flex-col gap-4">
                <p className="text-lg text-text-light/85 dark:text-text-dark/85 leading-relaxed">
                  CamFinTech is a Phnom Penh–based fee-only regulatory approval-navigation and compliance firm focused on Cambodia&apos;s Digital Public Infrastructure rails. Founded 2024 by <strong>William Mallett</strong>, Founder &amp; Managing Director.
                </p>
                <p className="text-base text-text-light/75 dark:text-text-dark/75 leading-relaxed">
                  Our moat is ex-regulator talent — NBC, NBFSA, TSC, SERC, GDT — not engineering capacity. We navigate the approval and run the compliance; accredited partners build the integration.
                </p>
                <p>
                  <a href="/about" className="text-primary font-medium hover:underline">Read more about CamFinTech &amp; William Mallett →</a>
                </p>
              </div>
            </div>
          </section>

          {/* Honesty notes */}
          <section className="mt-24 w-full" id="honesty">
            <div className="rounded-xl bg-primary/5 border border-primary/20 p-6 max-w-4xl mx-auto">
              <h2 className="text-xl font-bold mb-3">Honesty notes</h2>
              <ul className="space-y-2 text-sm text-text-light/80 dark:text-text-dark/80">
                <li>
                  <strong>Pricing is indicative.</strong> Every figure on our materials is a planning estimate, validated by quote at engagement scoping.
                </li>
                <li>
                  <strong>Some mandates are anticipatory.</strong> Mandatory B2B e-invoicing is phased (~2026–2027) and Cambodia&apos;s Personal Data Protection Law is not yet promulgated. We help you get <em>ahead</em> of these mandates; we never claim you&apos;re already in breach.
                </li>
                <li>
                  <strong>We&apos;re pre-revenue and early.</strong> No fabricated case studies, no anonymised &quot;leading bank&quot; logos. Ask us about our methodology and let our work in the discovery call speak for itself.
                </li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="mt-24 w-full" id="contact">
            <div className="rounded-xl bg-primary/10 dark:bg-primary/20 p-8 text-center sm:p-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Book a readiness call
              </h2>
              <p className="mt-4 text-base sm:text-lg text-text-light/80 dark:text-text-dark/80 max-w-2xl mx-auto">
                Tell us which rail you&apos;re navigating. We&apos;ll come back the same day, in Phnom Penh business hours.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <a
                  href="mailto:info@camfintech.com"
                  className="flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold tracking-[0.015em] text-text-light transition-transform hover:scale-105"
                >
                  Email info@camfintech.com
                </a>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 text-center md:grid-cols-2 lg:grid-cols-4 md:text-left">
              <div>
                <h3 className="font-bold mb-3">General inquiries</h3>
                <div className="flex flex-col items-center gap-2 md:items-start text-sm">
                  <a className="flex items-center gap-2 hover:text-primary transition-colors" href="mailto:info@camfintech.com">
                    <span className="material-symbols-outlined text-base">mail</span>
                    info@camfintech.com
                  </a>
                  <a className="flex items-center gap-2 hover:text-primary transition-colors" href="tel:+855762775645">
                    <span className="material-symbols-outlined text-base">call</span>
                    +855 76 277 5645
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-3">DASP / Prakas 093</h3>
                <div className="flex flex-col items-center gap-2 md:items-start text-sm">
                  <a className="flex items-center gap-2 hover:text-primary transition-colors" href="mailto:dasp@camfintech.com">
                    <span className="material-symbols-outlined text-base">mail</span>
                    dasp@camfintech.com
                  </a>
                  <a className="text-primary hover:underline text-xs" href="/products/dasp">
                    DASP approval-readiness →
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-3">Messaging</h3>
                <div className="flex flex-col items-center gap-2 md:items-start text-sm">
                  <a className="flex items-center gap-2 hover:text-primary transition-colors" href="https://wa.me/855762775645">
                    <span className="material-symbols-outlined text-base">chat</span>
                    WhatsApp
                  </a>
                  <a className="flex items-center gap-2 hover:text-primary transition-colors" href="https://t.me/+855762775645">
                    <span className="material-symbols-outlined text-base">send</span>
                    Telegram
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-3">Office</h3>
                <p className="text-sm leading-relaxed">
                  30 Preah Norodom Boulevard<br />
                  Khan Daun Penh<br />
                  Phnom Penh, Kingdom of Cambodia
                </p>
              </div>
            </div>
            <p className="mt-8 text-xs text-text-light/55 dark:text-text-dark/55 text-center max-w-3xl mx-auto">
              Partner &amp; subcontract inquiries (compliance-inside / white-label): <a href="mailto:partners@camfintech.com" className="hover:text-primary">partners@camfintech.com</a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
