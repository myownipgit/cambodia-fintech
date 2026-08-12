import Link from "next/link";

const FOUNDER_NAME = "William Mallett";
const FOUNDER_TITLE = "Founder & Managing Director";
const FOUNDER_LINKEDIN = "https://www.linkedin.com/in/william-mall/";
const COMPANY_LINKEDIN = "https://www.linkedin.com/company/118224010/";
const CONTACT_EMAIL = "info@camfintech.com";

function FounderAvatar() {
  return (
    <img
      src="/images/founder-william-mallett.png"
      alt={`${FOUNDER_NAME}, ${FOUNDER_TITLE}, CamFinTech`}
      width={96}
      height={96}
      className="h-24 w-24 rounded-full object-cover ring-2 ring-primary/40"
    />
  );
}

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-4 pt-6 flex items-center justify-between text-sm text-text-light/60 dark:text-text-dark/60">
        <nav>
          <Link href="/" className="hover:text-primary">CamFinTech</Link>
          <span className="mx-1">/</span>
          <span>About</span>
        </nav>
        <span className="text-xs">ភាសាខ្មែរ — Khmer edition pending native editorial hire</span>
      </div>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <header className="mb-10">
          <div className="flex items-center gap-5">
            <FounderAvatar />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark leading-tight">
                About {FOUNDER_NAME}
              </h1>
              <p className="mt-2 text-primary font-medium">{FOUNDER_TITLE}, CamFinTech</p>
            </div>
          </div>
          <p className="mt-6 text-lg text-text-light/85 dark:text-text-dark/85 leading-relaxed">
            {FOUNDER_NAME} founded CamFinTech to do the regulatory approval-navigation and compliance work that getting onto Cambodia&apos;s Digital Public Infrastructure rails actually requires — the layer that&apos;s unowned by law firms, system integrators, and the rails&apos; own DIY channels.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">About the practice</h2>
          <p className="text-text-light/85 dark:text-text-dark/85 leading-relaxed">
            <strong>CamFinTech is a fee-only regulatory approval-navigation and compliance firm</strong> based in Phnom Penh. We get Cambodian and foreign FinTechs <em>approved</em> onto Cambodia&apos;s national rails — Bakong/KHQR (payments, NBC), CamDX/CamDigiKey (identity/data exchange, TSC), CamInvoice (e-invoicing, GDT) — and run the AML/CFT and governance programmes that keep them compliant. Trading as CamFinTech (legal entity CAMFINTECH CO., LTD pending registration).
          </p>
          <p className="text-text-light/85 dark:text-text-dark/85 leading-relaxed mt-4">
            We&apos;re structurally different from the firms most prospects compare us against:
          </p>
          <ul className="mt-3 space-y-2 text-text-light/85 dark:text-text-dark/85 text-sm leading-relaxed">
            <li><strong>We are not a law firm.</strong> Reserved legal work (opinions, regulator representation) routes to a Bar lawyer we coordinate; we run the surrounding programme.</li>
            <li><strong>We are not a system integrator.</strong> The technical build is delivered by accredited Service Providers (BanhJi, Innolab/Odoo, MAQSU, SAP/Crimson, KOSIGN, Metfone, GK-Smart); we coordinate the build and own the regulatory approval.</li>
            <li><strong>We are not a licensed financial operator.</strong> Fee-only. We never hold client funds and never operate a rail.</li>
          </ul>
          <p className="text-text-light/85 dark:text-text-dark/85 leading-relaxed mt-4">
            <strong>Registered activity scope.</strong> CamFinTech is registered in Cambodia under KHNSIC-2015 codes <strong>62020</strong> (computer consultancy, systems integration, regulatory-compliance advisory), <strong>62090</strong> (IT advisory, project management, data &amp; analytics), <strong>70200</strong> (management consultancy, GRC, DPI integration advisory), and <strong>85499</strong> (professional training in FinTech, DPI, cybersecurity, regulatory compliance). All activities are delivered under the fee-only, never-build, reserved-work discipline described below — the registration is scope, not a change to how we work.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">The moat — ex-regulator talent</h2>
          <p className="text-text-light/85 dark:text-text-dark/85 leading-relaxed">
            CamFinTech&apos;s defensible space is the layer between &quot;the regulator&quot; and &quot;the build.&quot; Applications fail on AML/CFT, governance, capital planning, and documentation — not code. Most FinTechs put engineers on regulatory problems they were never trained for. The fix isn&apos;t more engineering — it&apos;s people who&apos;ve worked the regulator&apos;s side of the desk.
          </p>
          <p className="text-text-light/85 dark:text-text-dark/85 leading-relaxed mt-3">
            Our people have hands-on NBC, NBFSA, TSC, SERC, and GDT experience — a competency NBFSA&apos;s own 2024–2028 FinTech plan documents as scarce in Cambodia. We hire from the regulated-private side (mid-tier banks, MFIs, PSPs, accredited SPs) and from former-regulator advisors after a self-imposed cooling-off; we never engage current officials.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">Operating discipline</h2>
          <p className="text-text-light/85 dark:text-text-dark/85 leading-relaxed mb-3">
            Five rules that hold across every engagement, regardless of client or rail:
          </p>
          <ul className="space-y-2 text-text-light/85 dark:text-text-dark/85 text-sm leading-relaxed">
            <li><strong>Fee-only.</strong> Professional fees for advisory and programme delivery — never commissions, never markups on partner invoices.</li>
            <li><strong>Never hold client funds.</strong> Funds flow through the licensed operator (the client&apos;s member bank, the licensed PSP), never us.</li>
            <li><strong>Never operate the rail.</strong> The client (or their sponsor) remains the licensed operator. We stay in the &quot;assist&quot; ring; reserved work routes to licensed partners.</li>
            <li><strong>Process competence, never access.</strong> Post-Huione, any hint of selling relationships is a reputational risk. We market our process; we don&apos;t market our contacts.</li>
            <li><strong>Pricing indicative.</strong> Every figure on our materials is a planning estimate, validated by quote at engagement scoping.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">Voluntary TCRMG-2026 alignment</h2>
          <p className="text-text-light/85 dark:text-text-dark/85 leading-relaxed">
            We hold our own operations to NBC&apos;s Technology and Cyber Risk Management Guidelines (TCRMG 2026) standards — voluntarily, as a non-BFI. Process competence isn&apos;t just what we sell. The compliance posture documentation set is available on request for BFI procurement conversations.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">Background</h2>
          <p className="text-text-light/85 dark:text-text-dark/85 leading-relaxed">
            Most FinTechs in Cambodia don&apos;t fail to get onto the national rails because of their technology. They fail because approval turns on compliance, governance and documentation — not code — and the unwritten expectations of NBC, NBFSA, TSC and the GDT are opaque to outsiders. Foreign-owned operators are told their application is &quot;non-compliant,&quot; with little explanation of how to fix it. Local FinTechs put their engineers on regulatory problems no engineer was trained to solve.
          </p>
          <p className="text-text-light/85 dark:text-text-dark/85 leading-relaxed mt-4">
            That gap is why William founded CamFinTech. Fuller professional history — prior work in Cambodian and ASEAN FinTech — is maintained on <a href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer me" className="text-primary hover:underline">LinkedIn</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">Connect</h2>
          <ul className="space-y-2 text-text-light/80 dark:text-text-dark/80">
            <li>
              <a href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer me" className="text-primary hover:underline">
                LinkedIn — personal profile (William Mallett)
              </a>
            </li>
            <li>
              <a href={COMPANY_LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                LinkedIn — CamFinTech company page
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                Email: {CONTACT_EMAIL}
              </a>
            </li>
            <li className="pt-2 text-sm">
              See also: <a href="/privacy" className="text-primary hover:underline">Privacy</a> · <a href="/terms" className="text-primary hover:underline">Terms</a> · <a href="/publication" className="text-primary hover:underline">Publication (The Riel Report)</a>
            </li>
          </ul>
        </section>

        <div className="mt-10 pt-6 border-t border-border-light dark:border-border-dark">
          <Link href="/" className="text-primary hover:underline text-sm">
            &larr; Back to CamFinTech
          </Link>
        </div>
      </main>
    </div>
  );
}
