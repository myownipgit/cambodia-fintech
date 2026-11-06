import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FAQSection from "../../components/FAQSection";
import type { FAQ } from "@/app/content/types";
import { getRelatedInstruments } from "@/app/content/regulatory/registry";

/**
 * The sources this page's regulatory statements rest on, read from the
 * instrument registry rather than restated here, so the list cannot drift from
 * /regulatory. If a statement on this page is not supported by one of these,
 * it belongs in the "not yet verified" note, not in the prose.
 */
const DASP_SOURCE_INSTRUMENTS = getRelatedInstruments(["prakas-093", "notification-083-25"]);

/**
 * Every answer below restates something already on this page — the Prakas 093
 * commencement date, the no-grace-window correction, the bright lines, the
 * STOP-gate tests, the indicative ranges. Nothing here is new, and nothing here
 * may become new: FAQPage schema asserts that this content is visible on the
 * page, so an answer that drifts from the page above is a false assertion in
 * machine-readable form. If the page changes, change these with it.
 *
 * ADR-006 applies as it does to any public copy: the decision is SERC's, the
 * client is the applicant of record, and no answer may imply otherwise.
 */
const DASP_FAQS: FAQ[] = [
  {
    question: "Who needs a DASP licence in Cambodia?",
    answer:
      "Prakas 093 entered into force on 30 December 2025. Businesses providing digital-asset services in Cambodia for investment purposes — trading platforms and brokers, wallet and custody providers, borrowing and lending, and asset management — need a DASP licence from SERC. The Prakas expressly excludes payment transactions involving digital assets. Whether a particular business model falls inside the regime is a question for the instrument and for counsel; the Prakas 093 page states what the instrument covers and what it does not.",
  },
  {
    question: "Is there a grace period for Prakas 093?",
    answer:
      "We have found no published grace window. None of the three law-firm analyses of the Prakas we have read (DFDL, Rajah & Tann, HBS Law) mentions a grace or transition period. The NBFSA has not published an English text, so we have not read the instrument itself. We will not manufacture urgency by quoting a deadline that does not exist — but the regulation is in force now, and the readiness work takes four to eight months to do properly.",
  },
  {
    question: "How long does DASP approval-readiness take?",
    answer:
      "The DASP-BUILD programme runs four to eight months: AML/CFT framework, governance documentation, MLRO function design, FATF Travel Rule integration spec, sandbox-readiness package, and the full SERC application pack. The DASP-DX diagnostic that precedes it is two to three weeks.",
  },
  {
    question: "Does CamFinTech file the application or operate the rail?",
    answer:
      "No. The licensed DASP operator is the applicant of record and submits its own application. The firm prepares the work to a standard; it never holds assets, never files on a client's behalf, and never operates a rail. The approval decision is SERC's, entirely. Reserved legal opinion routes to a Bar lawyer, and external audit to an audit firm — neither is CamFinTech-stamped.",
  },
  {
    question: "Can CamFinTech act as our MLRO?",
    answer:
      "No. The MLRO is the licensed entity's own appointment, and that role stays client-side. CamFinTech designs the function around your named officer and can train the team through DASP-TRAIN.",
  },
  {
    question: "What is the five-test integrity STOP-gate?",
    answer:
      "A screen every prospect clears before the firm accepts a DASP engagement: UBO transparency, sanctions clearance, source-of-funds defensibility, counterparty hygiene, and operational separation. The DX diagnostic is the qualifier. If a test fails we decline, and we tell you which test failed and why. The DX fee is non-refundable on STOP-gate failure — it is the work done.",
  },
  {
    question: "What does the DASP programme cost?",
    answer:
      "Indicative planning ranges: DASP-DX US$8k–25k; DASP-BUILD US$45k–75k for a wallet and US$90k–160k+ for a full exchange or custody operation; DASP-RUN US$2k–8k per month; DASP-TRAIN US$5k–15k per cohort. All figures on this page are planning estimates. Final pricing is engagement-specific and validated by quote during DX.",
  },
];

export default function DaspContent() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto flex max-w-5xl flex-col px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-navy/60 mb-6">
            <Link href="/" className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4">CamFinTech</Link>
            <span className="mx-1">/</span>
            <Link href="/products/dasp" className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4">Products</Link>
            <span className="mx-1">/</span>
            <span>DASP Approval-Readiness</span>
          </nav>

          {/* Hero */}
          <header className="mb-16">
            <span className="inline-block text-xs font-bold text-navy uppercase tracking-wider px-2 py-1 rounded bg-teal/10 mb-3">
              SRV-11 · Digital-asset service providers
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 leading-tight">
              DASP Approval-Readiness
            </h1>
            <p className="text-lg text-navy/85 leading-relaxed mb-3">
              The end-to-end regulatory approval-readiness programme for SERC&apos;s <strong>Prakas 093 digital-asset licensing regime</strong> — in force since 30 December 2025.
            </p>
            <p className="text-base text-navy/75 leading-relaxed">
              The firm prepares the application, builds the AML/CFT programme, assembles the governance roster, and supports the client from sandbox readiness through to the full application. The licensed DASP operator (you) submits and operates; reserved legal opinion routes to a Bar lawyer. <strong>We never custody, never file, never operate.</strong>
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="mailto:dasp@camfintech.com" className="flex h-12 min-w-[84px] items-center justify-center rounded-lg bg-teal px-5 text-base font-bold text-navy-deep hover:scale-105 transition-transform">
                Email dasp@camfintech.com
              </a>
              <Link href="/#contact" className="flex h-12 min-w-[84px] items-center justify-center rounded-lg bg-teal/15 px-5 text-base font-bold text-navy hover:scale-105 transition-transform">
                Contact the practice
              </Link>
            </div>
          </header>

          {/* Why now */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Why now</h2>
            <div className="rounded-xl border-2 border-teal/30 bg-teal/5 p-6">
              <p className="text-base text-navy/85 leading-relaxed mb-3">
                <strong>Prakas 093 entered into force on 30 December 2025.</strong> Businesses providing digital-asset services in Cambodia for investment purposes — trading, wallet and custody, borrowing and lending, asset management — now need a DASP licence from SERC. Payment uses of digital assets are expressly outside the Prakas.
              </p>
              <p className="text-base text-navy/85 leading-relaxed mb-3">
                The requirements are prudential rather than technical. The Prakas requires AML/CFT compliance, a defined management structure, and successful testing in SERC&apos;s regulatory sandbox before an application; that build is the substantial work, and the technology is the smaller half.
              </p>
              <p className="text-base text-navy/85 leading-relaxed">
                <strong>Honesty discipline:</strong> we have found <em>no published grace window</em>. We will not manufacture urgency by claiming one. The regulation is in force; the readiness work takes 4–8 months to do properly. The cost of starting late is missing the early-mover window.
              </p>
            </div>
            <p className="mt-4 text-sm text-navy/75 leading-relaxed">
              Read the instruments rather than our summary of them:{' '}
              <Link href="/regulatory/prakas-093" className="text-navy font-medium hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4">Prakas 093</Link>{' '}
              sets the licensing regime, and{' '}
              <Link href="/regulatory/notification-083-25" className="text-navy font-medium hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4">SERC Notification 083/25</Link>{' '}
              is what makes sandbox graduation a precondition of applying at all. Both pages state what the instrument does not cover, and link to the sources they were checked against.
            </p>
          </section>

          {/* The four products */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-2">Four products, one ladder</h2>
            <p className="text-base text-navy/75 mb-8">
              Land-and-expand from diagnostic to ongoing compliance. Pricing indicative; validated by quote at engagement scoping.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="rounded-xl border border-line p-6">
                <h3 className="text-lg font-bold mb-2">DASP-DX <span className="text-xs font-normal text-navy">· Diagnostic</span></h3>
                <p className="text-sm text-navy/80 leading-relaxed mb-3">
                  Readiness diagnostic that doubles as our paid integrity STOP-gate qualifier (see below). Maps your current state against the SERC requirements; flags eligibility blockers; produces a costed remediation plan.
                </p>
                <p className="text-xs text-navy/60">Indicative range: US$8k–25k · 2–3 weeks</p>
              </div>
              <div className="rounded-xl border-2 border-teal/40 bg-teal/5 p-6">
                <h3 className="text-lg font-bold mb-2">DASP-BUILD <span className="text-xs font-normal text-navy">· Flagship</span></h3>
                <p className="text-sm text-navy/80 leading-relaxed mb-3">
                  The full programme: AML/CFT framework, governance documentation, MLRO function design, FATF Travel Rule integration spec, sandbox-readiness package, and full SERC application pack. The licensed DASP operator submits.
                </p>
                <p className="text-xs text-navy/60">Indicative range: US$45k–75k (wallet) · US$90k–160k+ (full exchange/custody) · 4–8 months</p>
              </div>
              <div className="rounded-xl border border-line p-6">
                <h3 className="text-lg font-bold mb-2">DASP-RUN <span className="text-xs font-normal text-navy">· Managed compliance</span></h3>
                <p className="text-sm text-navy/80 leading-relaxed mb-3">
                  Post-approval retainer. Quarterly compliance reviews, transaction-monitoring tuning, CAFIU reporting cadence support, regulatory-update advisory, and pre-audit readiness. Your named MLRO stays client-side; we run the function around them.
                </p>
                <p className="text-xs text-navy/60">Indicative range: US$2k–8k/month retainer</p>
              </div>
              <div className="rounded-xl border border-line p-6">
                <h3 className="text-lg font-bold mb-2">DASP-TRAIN <span className="text-xs font-normal text-navy">· Capability transfer</span></h3>
                <p className="text-sm text-navy/80 leading-relaxed mb-3">
                  Operational training for your AML/CFT, compliance, and front-office teams. CDD walkthroughs, Travel Rule operational playbooks, scenario-based training for transaction monitoring escalations.
                </p>
                <p className="text-xs text-navy/60">Indicative range: US$5k–15k per cohort</p>
              </div>
            </div>
          </section>

          {/* Integrity STOP-gate */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">The 5-test integrity STOP-gate</h2>
            <p className="text-base text-navy/85 leading-relaxed mb-4">
              Before we accept any DASP engagement, every prospect clears a five-test integrity screen. The DX diagnostic is the qualifier. If a test fails, we decline — no exceptions. The five tests:
            </p>
            <ol className="space-y-3 text-sm text-navy/85 leading-relaxed">
              <li><strong>1. UBO transparency.</strong> Beneficial-ownership traceable to a named individual with verifiable identity; no anonymous chains, no opaque holding structures.</li>
              <li><strong>2. Sanctions clearance.</strong> Principals, entity, and connected parties clear OFAC, UK, EU, UN, and Cambodian designations at engagement and re-screened quarterly.</li>
              <li><strong>3. Source-of-funds defensibility.</strong> Capital provenance can be substantiated to a documented origin. Funds traceable to a designated party, to an entity subject to a special measure, or to proceeds of technology-enabled fraud do not clear this test.</li>
              <li><strong>4. Counterparty hygiene.</strong> Current and proposed trading relationships pass a basic-due-diligence screen; no obvious facilitation of designated entities.</li>
              <li><strong>5. Operational separation.</strong> No operational ties (shared infrastructure, common officers, intermingled funds) to entities in the designated set.</li>
            </ol>
            <p className="text-sm text-navy/60 italic mt-4">
              We document the screen and its result. If we decline, we tell you which test failed and why. The DX fee is non-refundable on STOP-gate failure — it&apos;s the work done.
            </p>
          </section>

          {/* What's in / out */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">What we do — and explicit bright lines</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="rounded-xl border-2 border-teal/30 bg-card p-6">
                <h3 className="font-bold mb-3">In scope</h3>
                <ul className="space-y-2 text-sm text-navy/80">
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
              <div className="rounded-xl border-2 border-navy/15 bg-card/50 p-6">
                <h3 className="font-bold mb-3 text-navy/70">Bright lines — out of scope</h3>
                <ul className="space-y-2 text-sm text-navy/75">
                  <li><strong>Named MLRO</strong> stays client-side — the licensed entity&apos;s own appointment, not ours</li>
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
            <div className="rounded-xl bg-teal/5 border border-teal/20 p-6">
              <ul className="space-y-3 text-sm text-navy/80 leading-relaxed">
                <li>
                  <strong>15% SERC guarantee deposit:</strong> single-sourced to a DFDL alert; failed our cross-source check. We will not quote a deposit figure until counsel confirms. Treat secondary-source numbers with caution.
                </li>
                <li>
                  <strong>No grace / no application window:</strong> some commentaries refer to a &quot;grace period.&quot; None of the three law-firm analyses we rely on mentions one, and we have not read the primary text, which is not published in English. We will not manufacture urgency by quoting one.
                </li>
                <li>
                  <strong>Sandbox sequencing is settled:</strong> under SERC Notification 083/25, only graduates of the SERC FinTech Regulatory Sandbox may apply for a licence.
                </li>
                <li>
                  <strong>Application fee schedule, fit-and-proper test specifics, MLRO appointment requirements, and the Cambodian Travel Rule instrument:</strong> not yet verified against a source — to be verified with counsel during DX. We won&apos;t pretend they&apos;re settled.
                </li>
                <li>
                  <strong>Pricing is indicative.</strong> All figures on this page are planning estimates. Final pricing is engagement-specific and validated by quote during DX.
                </li>
              </ul>
            </div>
          </section>

          {/* Sources — rendered from the registry; see DASP_SOURCE_INSTRUMENTS. */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Sources</h2>
            <p className="text-sm text-navy/75 leading-relaxed mb-4">
              No English text of Prakas 093 has been published, so the statements on this page rest on law-firm analyses of it. Each source is listed against the instrument it describes, with the date it was last checked.
            </p>
            <ul className="space-y-4 text-sm text-navy/85 leading-relaxed">
              {DASP_SOURCE_INSTRUMENTS.map((inst) => (
                <li key={inst.slug}>
                  <Link href={`/regulatory/${inst.slug}`} className="font-bold text-navy hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4">
                    {inst.title}
                  </Link>
                  <span className="text-navy/60"> · checked {inst.asAt}</span>
                  <ul className="mt-1 space-y-1 pl-4">
                    {inst.sources.map((src) => (
                      <li key={src.url}>
                        <a href={src.url} rel="noopener" className="text-navy hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4">
                          {src.publisher} — {src.label}
                        </a>
                        <span className="text-navy/60"> ({src.tier})</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ — renders the visible accordion and the FAQPage JSON-LD from
              the same array, so the markup cannot drift from what a reader sees. */}
          <section className="mb-16">
            <FAQSection faqs={DASP_FAQS} pageUrl="https://www.camfintech.com/products/dasp" />
          </section>

          {/* Contact CTA */}
          <section className="mb-8" id="dasp-contact">
            <div className="rounded-xl bg-teal/10 p-8 text-center sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Ready to start the DX diagnostic?
              </h2>
              <p className="mt-4 text-base text-navy/85 max-w-2xl mx-auto">
                The diagnostic is a 2–3 week paid engagement that doubles as the integrity STOP-gate qualifier. Tell us about your DASP plans — we&apos;ll reply within 24 hours in Phnom Penh business hours.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <a href="mailto:dasp@camfintech.com" className="flex h-12 min-w-[84px] items-center justify-center rounded-lg bg-teal px-5 text-base font-bold text-navy-deep hover:scale-105 transition-transform">
                  Email dasp@camfintech.com
                </a>
                <a href="https://wa.me/855762775645" className="flex h-12 min-w-[84px] items-center justify-center rounded-lg bg-teal/15 px-5 text-base font-bold text-navy hover:scale-105 transition-transform">
                  WhatsApp +855 76 277 5645
                </a>
              </div>
            </div>
          </section>

          {/* Back link */}
          <div className="mt-8 pt-6 border-t border-line">
            <Link href="/" className="text-navy hover:underline text-sm">
              &larr; Back to all services
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
