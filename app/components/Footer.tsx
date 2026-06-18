export default function Footer() {
  return (
    <footer className="w-full border-t border-border-light dark:border-border-dark mt-12">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-text-light/70 dark:text-text-dark/70 mb-6 border-b border-border-light dark:border-border-dark pb-6">
          <span>Fee-only</span>
          <span className="text-text-light/30 dark:text-text-dark/30">·</span>
          <span>Never hold client funds</span>
          <span className="text-text-light/30 dark:text-text-dark/30">·</span>
          <span>Never operate the rail</span>
          <span className="text-text-light/30 dark:text-text-dark/30">·</span>
          <span>Reserved work to licensed partners</span>
          <span className="text-text-light/30 dark:text-text-dark/30">·</span>
          <span>Phnom Penh HQ</span>
        </div>

        {/* Three-column info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-bold text-text-light dark:text-text-dark mb-3">CamFinTech</h3>
            <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">
              Fee-only regulatory approval-navigation and compliance firm for Cambodia&apos;s Digital Public Infrastructure rails. Founded 2024 in Phnom Penh.
            </p>
            <p className="text-xs text-text-light/55 dark:text-text-dark/55 mt-3">
              30 Preah Norodom Boulevard<br />
              Khan Daun Penh<br />
              Phnom Penh, Kingdom of Cambodia
            </p>
          </div>

          <div>
            <h3 className="font-bold text-text-light dark:text-text-dark mb-3">Site</h3>
            <ul className="flex flex-col gap-1.5 text-text-light/70 dark:text-text-dark/70">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="/products/dasp" className="hover:text-primary transition-colors">DASP / Prakas 093</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="/publication" className="hover:text-primary transition-colors">Publication</a></li>
              <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-text-light dark:text-text-dark mb-3">Resources &amp; legal</h3>
            <ul className="flex flex-col gap-1.5 text-text-light/70 dark:text-text-dark/70">
              <li><a href="/glossary" className="hover:text-primary transition-colors">Glossary</a></li>
              <li><a href="/privacy" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="/terms" className="hover:text-primary transition-colors">Terms</a></li>
              <li className="pt-2 text-xs text-text-light/55 dark:text-text-dark/55">
                Partner inquiries:<br />
                <a href="mailto:partners@camfintech.com" className="hover:text-primary transition-colors">partners@camfintech.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Riel Report cross-link */}
        <div className="mt-8 pt-6 border-t border-border-light dark:border-border-dark text-center">
          <p className="text-sm text-text-light/75 dark:text-text-dark/75">
            CamFinTech is also the publisher of <a href="https://riel.report" rel="external" className="text-primary font-medium hover:underline">The Riel Report</a> — Cambodia FinTech intelligence at <span className="font-mono text-xs">riel.report</span>.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-text-light/55 dark:text-text-dark/55">
          <p>© 2024–2026 CamFinTech. All rights reserved.</p>
          <p className="mt-1">Pricing is indicative — every engagement is validated by quote.</p>
        </div>
      </div>
    </footer>
  );
}
