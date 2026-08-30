import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-line mt-12">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-navy/70 mb-6 border-b border-line pb-6">
          <span>Fee-only</span>
          <span className="text-navy/30">·</span>
          <span>Never hold client funds</span>
          <span className="text-navy/30">·</span>
          <span>Never operate the rail</span>
          <span className="text-navy/30">·</span>
          <span>Reserved work to licensed partners</span>
          <span className="text-navy/30">·</span>
          <span>Phnom Penh HQ</span>
        </div>

        {/* Three-column info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-bold text-navy mb-3">CamFinTech</h3>
            <p className="text-navy/70 leading-relaxed">
              Fee-only regulatory approval-navigation and compliance firm for Cambodia&apos;s Digital Public Infrastructure rails. Founded 2024 in Phnom Penh.
            </p>
            <p className="text-xs text-navy/55 mt-3">
              30 Preah Norodom Boulevard<br />
              Khan Daun Penh<br />
              Phnom Penh, Kingdom of Cambodia
            </p>
          </div>

          <div>
            <h3 className="font-bold text-navy mb-3">Site</h3>
            <ul className="flex flex-col gap-1.5 text-navy/70">
              <li><Link href="/" className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4 transition-colors">Home</Link></li>
              <li><Link href="/#services" className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4 transition-colors">Services</Link></li>
              <li><Link href="/products/dasp" className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4 transition-colors">DASP / Prakas 093</Link></li>
              <li><Link href="/about" className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4 transition-colors">About</Link></li>
              <li><Link href="/publication" className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4 transition-colors">Publication</Link></li>
              <li><Link href="/#contact" className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-navy mb-3">Resources &amp; legal</h3>
            <ul className="flex flex-col gap-1.5 text-navy/70">
              <li><Link href="/glossary" className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4 transition-colors">Glossary</Link></li>
              <li><Link href="/privacy" className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4 transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4 transition-colors">Terms</Link></li>
              <li className="pt-2 text-xs text-navy/55">
                Partner inquiries:<br />
                <a href="mailto:partners@camfintech.com" className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4 transition-colors">partners@camfintech.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Riel Report cross-link */}
        <div className="mt-8 pt-6 border-t border-line text-center">
          <p className="text-sm text-navy/75">
            CamFinTech is also the publisher of <a href="https://riel.report" rel="external" className="text-navy font-medium hover:underline">The Riel Report</a> — Cambodia FinTech intelligence at <span className="font-mono text-xs">riel.report</span>.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-navy/55">
          <p>© 2024–2026 CamFinTech. All rights reserved.</p>
          <p className="mt-1">Pricing is indicative — every engagement is validated by quote.</p>
        </div>
      </div>
    </footer>
  );
}
