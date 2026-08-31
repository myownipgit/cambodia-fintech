import Link from "next/link";

/* Footer rebuilt 2026-08-31 (ADR-007).
 *
 * Two jobs beyond navigation:
 *
 * 1. The Publications column is the inbound link for /learn, /knowledge,
 *    /insights and /use-cases. Those four sections — 30 pages — shipped with
 *    no entry in either the nav or the footer and were reachable only from the
 *    sitemap. That is the third occurrence of the same failure; the footer is
 *    where it stops. Every content section index belongs in this list.
 *
 * 2. The legal-identity block. Publishing registered activity scope and a full
 *    Sangkat/Khan address is the Cambodian institutional convention — ABA
 *    carries its commercial bank licence number and date, Canadia its Patent
 *    TIN, and every local site gives the address to commune and district depth.
 *    Registration STATUS is deliberately absent while the OBR filing is
 *    outstanding: scope is stated, status is not.
 */

const SECTIONS = [
  { href: "/regulatory", label: "Regulatory instruments" },
  { href: "/knowledge", label: "Knowledge base" },
  { href: "/learn", label: "Explainers" },
  { href: "/insights", label: "Insights" },
  { href: "/use-cases", label: "Engagement scenarios" },
  { href: "/glossary", label: "Glossary" },
];

const PRACTICE_LINKS = [
  { href: "/#practice", label: "Practice" },
  { href: "/products/dasp", label: "Digital-asset service providers" },
  { href: "/#constitution", label: "How the firm is constituted" },
  { href: "/about", label: "About" },
  { href: "/publication", label: "The Riel Report" },
  { href: "/#contact", label: "Contact" },
];

const link =
  "hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4 transition-colors";

export default function Footer() {
  return (
    <footer className="mt-16 w-full border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 text-sm md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-navy">
              CamFinTech
            </h2>
            <p className="mt-3 max-w-md leading-relaxed text-navy/80">
              A fee-only regulatory and compliance practice in Phnom Penh, working on the
              approvals, compliance programmes and client-side integrations that connect
              institutions to the Kingdom of Cambodia&apos;s national digital infrastructure.
            </p>
            <address className="mt-5 text-xs not-italic leading-relaxed text-slate">
              30 Preah Norodom Boulevard<br />
              Sangkat Phsar Thmey 3, Khan Daun Penh<br />
              Phnom Penh 12210, Kingdom of Cambodia
            </address>
            <p className="mt-4 text-xs leading-relaxed text-slate">
              Registered activity scope, KHNSIC-2015:{" "}
              <span className="font-mono">62010</span> computer programming ·{" "}
              <span className="font-mono">62020</span> computer consultancy and systems integration ·{" "}
              <span className="font-mono">62090</span> information-technology advisory ·{" "}
              <span className="font-mono">70200</span> management consultancy ·{" "}
              <span className="font-mono">85499</span> professional training.
            </p>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-navy">
              Publications
            </h2>
            <ul className="mt-3 flex flex-col gap-2 text-navy/80">
              {SECTIONS.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className={link}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-navy">
              Practice
            </h2>
            <ul className="mt-3 flex flex-col gap-2 text-navy/80">
              {PRACTICE_LINKS.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className={link}>{s.label}</Link>
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-col gap-2 text-xs text-slate">
              <li><Link href="/privacy" className={link}>Privacy</Link></li>
              <li><Link href="/terms" className={link}>Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-xs text-slate sm:flex-row sm:items-baseline sm:justify-between">
          <p>
            Fee-only · No client funds held · No rail operated · Reserved work to licensed professionals
          </p>
          <p>© 2024–2026 CamFinTech. Established 2024, Phnom Penh.</p>
        </div>
      </div>
    </footer>
  );
}
