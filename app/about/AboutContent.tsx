import Link from "next/link";

const FOUNDER_NAME = "William Mallett";
const FOUNDER_TITLE = "Founder & Managing Director";
const FOUNDER_LINKEDIN = "https://www.linkedin.com/in/william-mall/";
const COMPANY_LINKEDIN = "https://www.linkedin.com/company/118224010/";
const CONTACT_EMAIL = "info@camfintech.com";

function FounderAvatar() {
  return (
    <img
      src="/images/William_Mallett_Founder_and_Managing_Director_CAMFINTECH_CO_LTD.jpg"
      alt={`${FOUNDER_NAME}, ${FOUNDER_TITLE}, CamFinTech`}
      width={96}
      height={96}
      className="h-24 w-24 rounded-full object-cover ring-2 ring-teal/40"
    />
  );
}

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-cloud">
      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-4 pt-6 flex items-center justify-between text-sm text-navy/60">
        <nav>
          <Link href="/" className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4">CamFinTech</Link>
          <span className="mx-1">/</span>
          <span>About</span>
        </nav>
        <span className="text-xs"><span className="font-khmer">ភាសាខ្មែរ</span> — Khmer edition written by a Cambodian editor</span>
      </div>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <header className="mb-10">
          <div className="flex items-center gap-5">
            <FounderAvatar />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
                About {FOUNDER_NAME}
              </h1>
              <p className="mt-2 text-navy font-medium">{FOUNDER_TITLE}, CamFinTech</p>
            </div>
          </div>
          <p className="mt-6 text-lg text-navy/85 leading-relaxed">
            {FOUNDER_NAME} founded CamFinTech to do the regulatory approval-navigation and compliance work that getting onto Cambodia&apos;s Digital Public Infrastructure rails actually requires — the layer that&apos;s unowned by law firms, system integrators, and the rails&apos; own DIY channels.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-navy mb-3">About the practice</h2>
          <p className="text-navy/85 leading-relaxed">
            <strong>CamFinTech is a fee-only regulatory and compliance practice</strong> based in Phnom Penh. We prepare Cambodian and foreign institutions to meet the standard for connecting to Cambodia&apos;s national rails — Bakong/KHQR (payments, NBC), CamDX/CamDigiKey (identity and data exchange, TSC), CamInvoice (e-invoicing, MEF) — and run the AML/CFT and governance programmes that hold afterwards. Trading as CamFinTech (legal entity CAMFINTECH CO., LTD, registered with the Ministry of Commerce, company no. 1000648818, 9 October 2026).
          </p>
          <p className="text-navy/85 leading-relaxed mt-4">
            We&apos;re structurally different from the firms most prospects compare us against:
          </p>
          <ul className="mt-3 space-y-2 text-navy/85 text-sm leading-relaxed">
            <li><strong>We are not a law firm.</strong> Reserved legal work (opinions, regulator representation) routes to a Bar lawyer we coordinate; we run the surrounding programme.</li>
            <li><strong>We are not a rail operator.</strong> We build the client side of an integration and prepare the approval work around it; the approval decision is the regulator&apos;s, and we never host or transmit your transaction traffic. Where a platform specialist fits better, such as a CamInvoice system-provider member, we engage one as a disclosed sub-contract.</li>
            <li><strong>We are not a licensed financial operator.</strong> Fee-only. We never hold client funds and never operate a rail.</li>
          </ul>
          <p className="text-navy/85 leading-relaxed mt-4">
            <strong>Registered activity scope.</strong> CamFinTech is registered in Cambodia under KHNSIC-2015 codes <strong>62010</strong> (computer programming — integration development against the DPI rails), <strong>62020</strong> (computer consultancy, systems integration, regulatory-compliance advisory), <strong>62090</strong> (IT advisory, project management, data &amp; analytics), <strong>70200</strong> (management consultancy, GRC, DPI integration advisory), and <strong>85499</strong> (professional training in FinTech, DPI, cybersecurity, regulatory compliance). All activities are delivered under the fee-only, never-operate, reserved-work discipline described below.
          </p>
        </section>

        <section className="mb-10" id="company-registration">
          <h2 className="text-xl font-semibold text-navy mb-3">Company registration</h2>
          <p className="text-navy/85 leading-relaxed">
            <strong>CAMFINTECH CO., LTD.</strong> (ខេមហ្វីនថេក ឯ.ក) is a Private Limited Company in the Kingdom of Cambodia, trading as CamFinTech. Registered office: Room 203, 2nd Floor, BRED Bank Building, No. 30 Preah Norodom Boulevard, Village 9, Sangkat Phsar Thmey 3, Khan Daun Penh, Phnom Penh 12210. Established 2024; incorporated 9 October 2026.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-t border-line">
                  <th scope="row" className="py-2 pr-4 text-left align-top font-semibold text-navy">Ministry of Commerce</th>
                  <td className="py-2 text-navy/85">Registration no. 1000648818; certificate MOC-01140028; incorporated 9 October 2026</td>
                </tr>
                <tr className="border-t border-line">
                  <th scope="row" className="py-2 pr-4 text-left align-top font-semibold text-navy">General Department of Taxation</th>
                  <td className="py-2 text-navy/85">VAT TIN K003-902604575; certificate VATM26102085805; valid from 20 October 2026</td>
                </tr>
                <tr className="border-t border-line">
                  <th scope="row" className="py-2 pr-4 text-left align-top font-semibold text-navy">Ministry of Labour and Vocational Training</th>
                  <td className="py-2 text-navy/85">Declaration of Opening L20266200253; dated 22 October 2026</td>
                </tr>
                <tr className="border-t border-line">
                  <th scope="row" className="py-2 pr-4 text-left align-top font-semibold text-navy">National Social Security Fund</th>
                  <td className="py-2 text-navy/85">Enterprise ID 1089962-9; registered 1 November 2026</td>
                </tr>
                <tr className="border-t border-line">
                  <th scope="row" className="py-2 pr-4 text-left align-top font-semibold text-navy">Director</th>
                  <td className="py-2 text-navy/85">William Mallett</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-navy/85">Certificates available on request for procurement and due diligence.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-navy mb-3">Where the practice sits</h2>
          <p className="text-navy/85 leading-relaxed">
            CamFinTech&apos;s defensible space is the layer between &quot;the regulator&quot; and &quot;the build.&quot; Applications fail on AML/CFT, governance, capital planning, and documentation — not code. Most FinTechs put engineers on regulatory problems they were never trained for. The fix isn&apos;t more engineering — it&apos;s compliance capability built to the standard the regulator sets.
          </p>
          <p className="text-navy/85 leading-relaxed mt-3">
            The NBFSA&apos;s own 2024&ndash;2028 FinTech plan makes developing this competency locally a national priority. If the practice hires, it will look to the regulated private side, and to former-regulator advisers only after a self-imposed cooling-off period. It does not engage serving officials.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-navy mb-3">Operating discipline</h2>
          <p className="text-navy/85 leading-relaxed mb-3">
            Five rules that hold across every engagement, regardless of client or rail:
          </p>
          <ul className="space-y-2 text-navy/85 text-sm leading-relaxed">
            <li><strong>Fee-only.</strong> Professional fees for advisory and programme delivery — never commissions, never markups on partner invoices.</li>
            <li><strong>Never hold client funds.</strong> Funds flow through the licensed operator (the client&apos;s member bank, the licensed PSP), never us.</li>
            <li><strong>Never operate the rail.</strong> The client (or their sponsor) remains the licensed operator. We stay in the &quot;assist&quot; ring; reserved work routes to licensed partners.</li>
            <li><strong>Paid for process competence.</strong> Our fee reflects the work of preparing an application to standard &mdash; never influence over how it is decided. The decision rests with the regulator, and the client is the applicant of record.</li>
            <li><strong>Pricing indicative.</strong> Every figure on our materials is a planning estimate, validated by quote at engagement scoping.</li>
          </ul>
        </section>

        {/* Moved here from the homepage 2026-08-31 (ADR-007). The homepage
            previously carried two sections — "Proof and credibility" and
            "Honesty notes" — that opened by volunteering the firm's thinness
            ("We're early", "We're pre-revenue and early"). The disclosure is
            right and stays in full; leading with it on the front page is not
            how any institution in this market presents itself. Do not move
            this back, and do not delete it either. */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-navy mb-3">What the practice can show, and what it cannot</h2>
          <p className="text-navy/85 leading-relaxed">
            CamFinTech is newly established and has no completed client engagements to report. It publishes no case studies, no anonymised institutional references, and no quantified client outcomes, because it has none that could be evidenced. That will change only when a real engagement exists and the client has consented to it being described.
          </p>
          <p className="text-navy/85 leading-relaxed mt-4">
            What is available to a procurement or third-party-risk reader today:
          </p>
          <ul className="mt-3 space-y-2 text-navy/85 text-sm leading-relaxed">
            <li><strong>Founder track record.</strong> ASEAN FinTech experience, open to interrogation in a call and set out on LinkedIn.</li>
            <li><strong>Methodology walk-throughs.</strong> The onboarding architecture, the integrity screen applied before an engagement is accepted, and the build-then-retainer structure — explained against a specific rail and use case.</li>
            <li><strong>The published reference.</strong> Seventeen regulatory instrument entries, each recording the source read and the date it was read, alongside the knowledge base, explainers and engagement scenarios. It is the most direct evidence of how the practice works.</li>
            <li><strong>Voluntary TCRMG alignment.</strong> Described below.</li>
          </ul>
          <p className="text-navy/85 leading-relaxed mt-4 text-sm">
            Two further standing notes. <strong>Pricing is indicative</strong> — every figure in the firm&apos;s materials is a planning estimate, validated by quote at scoping. <strong>Some obligations are anticipatory</strong>: the published phases of CamInvoice so far cover invoices issued to government ministries, and the Personal Data Protection Law is not yet promulgated. Where a client prepares beyond what is in force, the firm says so, and does not suggest that anyone is already in breach.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-navy mb-3">Voluntary TCRMG-2026 alignment</h2>
          <p className="text-navy/85 leading-relaxed">
            We hold our own operations to NBC&apos;s Technology and Cyber Risk Management Guidelines (TCRMG 2026) standards — voluntarily, as a non-BFI. Process competence isn&apos;t just what we sell. The compliance posture documentation set is available on request for BFI procurement conversations.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-navy mb-3">Background</h2>
          <p className="text-navy/85 leading-relaxed">
            Most FinTechs in Cambodia that struggle to reach the national rails do not struggle on technology. They struggle because the requirements are prudential — compliance, governance and documentation rather than code — and that is a discipline an engineering organisation rarely has in-house. Foreign-owned operators arrive without local regulatory experience; local FinTechs put engineers on problems no engineer was trained to solve. Neither is a failing of the standard, which exists for good reason; it is a gap in who is available to meet it.
          </p>
          <p className="text-navy/85 leading-relaxed mt-4">
            That gap is why William founded CamFinTech. Fuller professional history — prior work in Cambodian and ASEAN FinTech — is maintained on <a href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer me" className="text-navy hover:underline">LinkedIn</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-navy mb-3">Connect</h2>
          <ul className="space-y-2 text-navy/80">
            <li>
              <a href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer me" className="text-navy hover:underline">
                LinkedIn — personal profile (William Mallett)
              </a>
            </li>
            <li>
              <a href={COMPANY_LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-navy hover:underline">
                LinkedIn — CamFinTech company page
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-navy hover:underline">
                Email: {CONTACT_EMAIL}
              </a>
            </li>
            <li className="pt-2 text-sm">
              See also: <a href="/privacy" className="text-navy hover:underline">Privacy</a> · <a href="/terms" className="text-navy hover:underline">Terms</a> · <a href="/publication" className="text-navy hover:underline">Publication (The Riel Report)</a>
            </li>
          </ul>
        </section>

        <div className="mt-10 pt-6 border-t border-line">
          <Link href="/" className="text-navy hover:underline text-sm">
            &larr; Back to CamFinTech
          </Link>
        </div>
      </main>
    </div>
  );
}
