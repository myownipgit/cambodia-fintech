import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function DaspContent() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto flex max-w-5xl flex-col px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-text-light/60 dark:text-text-dark/60 mb-6">
            <a href="/" className="hover:text-primary">CamFinTech</a>
            <span className="mx-1">/</span>
            <a href="/products/dasp" className="hover:text-primary">Products</a>
            <span className="mx-1">/</span>
            <span>DASP Approval-Readiness</span>
          </nav>

          {/* Hero */}
          <header className="mb-16">
            <span className="inline-block text-xs font-bold text-primary uppercase tracking-wider px-2 py-1 rounded bg-primary/10 mb-3">
              Flagship product · SRV-11
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 leading-tight">
              DASP Approval-Readiness
            </h1>
            <p className="text-lg text-text-light/85 dark:text-text-dark/85 leading-relaxed mb-3">
              The end-to-end regulatory approval-readiness programme for SERC&apos;s <strong>Prakas 093 digital-asset licensing regime</strong> — in force since 30 December 2025.
            </p>
            <p className="text-base text-text-light/75 dark:text-text-dark/75 leading-relaxed">
              We navigate the application, build the AML/CFT programme, assemble the governance roster, and shepherd you from sandbox to full operating licence. The licensed DASP operator (you) submits and operates; reserved legal opinion routes to a Bar lawyer. <strong>We never custody, never file, never operate.</strong>
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="mailto:dasp@camfintech.com" className="flex h-12 min-w-[84px] items-center justify-center rounded-lg bg-primary px-5 text-base font-bold text-text-light hover:scale-105 transition-transform">
                Email dasp@camfintech.com
              </a>
              <a href="/#contact" className="flex h-12 min-w-[84px] items-center justify-center rounded-lg bg-primary/15 px-5 text-base font-bold text-text-light dark:text-text-dark hover:scale-105 transition-transform">
                Book a readiness call
              </a>
            </div>
          </header>

          {/* Why now */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Why now</h2>
            <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-6">
              <p className="text-base text-text-light/85 dark:text-text-dark/85 leading-relaxed mb-3">
                <strong>Prakas 093 entered into force on 30 December 2025.</strong> Cambodia&apos;s digital-asset operators — crypto exchanges, OTC desks, custody providers, payment-on-rails firms with token components — now need DASP licensing from SERC to operate legally.
              </p>
              <p className="text-base text-text-light/85 dark:text-text-dark/85 leading-relaxed mb-3">
                The bar is high. The AML/CFT and governance build (FATF Travel Rule, MLRO function, sandbox readiness, fit-and-proper assessments) is the gating burden — not the technology. Post-Huione, SERC is unlikely to approve marginal applicants.
              </p>
              <p className="text-base text-text-light/85 dark:text-text-dark/85 leading-relaxed">
                <strong>Honesty discipline:</strong> there is <em>no published grace window</em>. We will not manufacture urgency by claiming one. The regulation is in force; the readiness work takes 4–8 months to do properly. The cost of starting late is missing the early-mover window.
              </p>
            </div>
          </section>

          {/* The four products */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-2">Four products, one ladder</h2>
            <p className="text-base text-text-light/75 dark:text-text-dark/75 mb-8">
              Land-and-expand from diagnostic to ongoing compliance. Pricing indicative; validated by quote at engagement scoping.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="rounded-xl border border-border-light dark:border-border-dark p-6">
                <h3 className="text-lg font-bold mb-2">DASP-DX <span className="text-xs font-normal text-primary">· Diagnostic</span></h3>
                <p className="text-sm text-text-light/80 dark:text-text-dark/80 leading-relaxed mb-3">
                  Readiness diagnostic that doubles as our paid integrity STOP-gate qualifier (see below). Maps your current state against the SERC requirements; flags eligibility blockers; produces a costed remediation plan.
                </p>
                <p className="text-xs text-text-light/60 dark:text-text-dark/60">Indicative range: US$8k–25k · 2–3 weeks</p>
              </div>
              <div className="rounded-xl border-2 border-primary/40 bg-primary/5 p-6">
                <h3 className="text-lg font-bold mb-2">DASP-BUILD <span className="text-xs font-normal text-primary">· Flagship</span></h3>
                <p className="text-sm text-text-light/80 dark:text-text-dark/80 leading-relaxed mb-3">
                  The full programme: AML/CFT framework, governance documentation, MLRO function design, FATF Travel Rule integration spec, sandbox-readiness package, and full SERC application pack. The licensed DASP operator submits.
                </p>
                <p className="text-xs text-text-light/60 dark:text-text-dark/60">Indicative range: US$45k–75k (wallet) · US$90k–160k+ (full exchange/custody) · 4–8 months</p>
              </div>
              <div className="rounded-xl border border-border-light dark:border-border-dark p-6">
                <h3 className="text-lg font-bold mb-2">DASP-RUN <span className="text-xs font-normal text-primary">· Managed compliance</span></h3>
                <p className="text-sm text-text-light/80 dark:text-text-dark/80 leading-relaxed mb-3">
                  Post-approval retainer. Quarterly compliance reviews, transaction-monitoring tuning, CAFIU reporting cadence support, regulatory-update advisory, and pre-audit readiness. Your named MLRO stays client-side; we run the function around them.
                </p>
                <p className="text-xs text-text-light/60 dark:text-text-dark/60">Indicative range: US$2k–8k/month retainer</p>
              </div>
              <div className="rounded-xl border border-border-light dark:border-border-dark p-6">
                <h3 className="text-lg font-bold mb-2">DASP-TRAIN <span className="text-xs font-normal text-primary">· Capability transfer</span></h3>
                <p className="text-sm text-text-light/80 dark:text-text-dark/80 leading-relaxed mb-3">
                  Operational training for your AML/CFT, compliance, and front-office teams. CDD walkthroughs, Travel Rule operational playbooks, scenario-based training for transaction monitoring escalations.
                </p>
                <p className="text-xs text-text-light/60 dark:text-text-dark/60">Indicative range: US$5k–15k per cohort</p>
              </div>
            </div>
          </section>

          {/* Integrity STOP-gate */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">The 5-test integrity STOP-gate</h2>
            <p className="text-base text-text-light/85 dark:text-text-dark/85 leading-relaxed mb-4">
              Before we accept any DASP engagement, every prospect clears a 5-test post-Huione integrity screen. The DX diagnostic is the qualifier. If a test fails, we decline — no exceptions. The five tests:
            </p>
            <ol className="space-y-3 text-sm text-text-light/85 dark:text-text-dark/85 leading-relaxed">
              <li><strong>1. UBO transparency.</strong> Beneficial-ownership traceable to a named individual with verifiable identity; no anonymous chains, no opaque holding structures.</li>
              <li><strong>2. Sanctions clearance.</strong> Principals, entity, and connected parties clear OFAC, UK, EU, UN, and Cambodian designations at engagement and re-screened quarterly.</li>
              <li><strong>3. Source-of-funds defensibility.</strong> Capital provenance can be substantiated; no Huione-adjacent, scam-centre-adjacent, or sanctioned-source funds.</li>
              <li><strong>4. Counterparty hygiene.</strong> Current and proposed trading relationships pass a basic-due-diligence screen; no obvious facilitation of designated entities.</li>
              <li><strong>5. Operational separation.</strong> No operational ties (shared infrastructure, common officers, intermingled funds) to entities in the designated set.</li>
            </ol>
            <p className="text-sm text-text-light/60 dark:text-text-dark/60 italic mt-4">
              We document the screen and its result. If we decline, we tell you which test failed and why. The DX fee is non-refundable on STOP-gate failure — it&apos;s the work done.
            </p>
          </section>

          {/* What's in / out */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">What we do — and explicit bright lines</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="rounded-xl border-2 border-primary/30 bg-card-light dark:bg-card-dark p-6">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  In scope
                </h3>
                <ul className="space-y-2 text-sm text-text-light/80 dark:text-text-dark/80">
                  <li>AML/CFT framework + policy + procedures</li>
                  <li>Risk assessment + risk appetite statement</li>
                  <li>Governance structure + board pack + MLRO function design</li>
                  <li>CDD/EDD workflows + onboarding decision matrices</li>
                  <li>Transaction monitoring rule library + tuning</li>
                  <li>FATF Travel Rule integration spec + counterparty handling</li>
                  <li>Sandbox application pack + readiness reviews</li>
                  <li>Full SERC application support (drafting, not filing)</li>
                  <li>Fit-and-proper documentation packages</li>
                  <li>Post-approval RUN retainer + audit-readiness</li>
                </ul>
              </div>
              <div className="rounded-xl border-2 border-text-light/15 dark:border-text-dark/15 bg-card-light/50 dark:bg-card-dark/50 p-6">
                <h3 className="font-bold mb-3 flex items-center gap-2 text-text-light/70 dark:text-text-dark/70">
                  <span className="material-symbols-outlined text-xl">block</span>
                  Bright lines — out of scope
                </h3>
                <ul className="space-y-2 text-sm text-text-light/75 dark:text-text-dark/75">
                  <li><strong>Named MLRO</strong> stays client-side — must be a board-appointed, senior-management, CAFIU-notified individual of the licensed entity (not outsourceable to us)</li>
                  <li><strong>Custody, filing, operating the rail</strong> stays with the licensed DASP — we never hold assets, never file submissions on your behalf, never operate</li>
                  <li><strong>Reserved legal opinion</strong> routes to a Bar lawyer we coordinate — never CamFinTech-stamped</li>
                  <li><strong>External audit</strong> routes to an audit firm — never CamFinTech-stamped</li>
                  <li><strong>Sanctions-screening platform operation</strong> — we design the policy, you operate the tool</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Honesty notes */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Honesty notes — corrections we&apos;ve made</h2>
            <div className="rounded-xl bg-primary/5 border border-primary/20 p-6">
              <ul className="space-y-3 text-sm text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                <li>
                  <strong>15% SERC guarantee deposit:</strong> single-sourced to a DFDL alert; failed our cross-source check. We will not quote a deposit figure until counsel confirms. Treat secondary-source numbers with caution.
                </li>
                <li>
                  <strong>No grace / no application window:</strong> several commentaries refer to a &quot;grace period.&quot; We checked — it doesn&apos;t appear in the gazetted instrument. We will not manufacture urgency by quoting one.
                </li>
                <li>
                  <strong>Sandbox sequencing, application fee schedule, fit-and-proper test specifics, and the Cambodian Travel Rule instrument:</strong> all currently graded [V] — to be verified with counsel during DX. We won&apos;t pretend they&apos;re settled.
                </li>
                <li>
                  <strong>Pricing is indicative.</strong> All figures on this page are planning estimates. Final pricing is engagement-specific and validated by quote during DX.
                </li>
              </ul>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="mb-8" id="dasp-contact">
            <div className="rounded-xl bg-primary/10 dark:bg-primary/20 p-8 text-center sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Ready to start the DX diagnostic?
              </h2>
              <p className="mt-4 text-base text-text-light/85 dark:text-text-dark/85 max-w-2xl mx-auto">
                The diagnostic is a 2–3 week paid engagement that doubles as the integrity STOP-gate qualifier. Tell us about your DASP plans — we&apos;ll reply within 24 hours in Phnom Penh business hours.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <a href="mailto:dasp@camfintech.com" className="flex h-12 min-w-[84px] items-center justify-center rounded-lg bg-primary px-5 text-base font-bold text-text-light hover:scale-105 transition-transform">
                  Email dasp@camfintech.com
                </a>
                <a href="https://wa.me/855762775645" className="flex h-12 min-w-[84px] items-center justify-center rounded-lg bg-primary/15 px-5 text-base font-bold text-text-light dark:text-text-dark hover:scale-105 transition-transform">
                  WhatsApp +855 76 277 5645
                </a>
              </div>
            </div>
          </section>

          {/* Back link */}
          <div className="mt-8 pt-6 border-t border-border-light dark:border-border-dark">
            <a href="/" className="text-primary hover:underline text-sm">
              &larr; Back to all services
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
