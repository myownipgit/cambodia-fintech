export default function Footer() {
  return (
    <footer className="w-full border-t border-border-light dark:border-border-dark">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-text-light/80 dark:text-text-dark/80">
          © 2024–2026 CamFinTech — FinTech Consulting Cambodia. All Rights Reserved.
        </p>
        <p className="mt-2 text-xs text-text-light/60 dark:text-text-dark/60">
          <span>Empowering Cambodia&apos;s Digital Economy.</span>
          <span className="font-khmer mx-2">|</span>
          <span className="font-khmer">ផ្តល់អំណាចដល់សេដ្ឋកិច្ចឌីជីថលរបស់កម្ពុជា។</span>
        </p>
        <nav className="mt-3 flex items-center justify-center gap-4 text-xs text-text-light/60 dark:text-text-dark/60">
          <a href="/privacy" className="hover:text-primary transition-colors">
            Privacy
          </a>
          <span className="text-text-light/30 dark:text-text-dark/30">·</span>
          <a href="/terms" className="hover:text-primary transition-colors">
            Terms
          </a>
          <span className="text-text-light/30 dark:text-text-dark/30">·</span>
          <a href="/glossary" className="hover:text-primary transition-colors">
            Glossary
          </a>
        </nav>
        <p className="mt-3 text-xs text-text-light/40 dark:text-text-dark/40">
          Last updated: May 2026 · Siem Reap, Cambodia
        </p>
      </div>
    </footer>
  );
}
