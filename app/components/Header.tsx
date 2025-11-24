"use client";

interface HeaderProps {
  language: "en" | "km";
  onLanguageToggle: () => void;
}

export default function Header({ language, onLanguageToggle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 py-3">
          <div className="size-6 text-text-light dark:text-text-dark">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"></path>
            </svg>
          </div>
          <h2 className="hidden text-lg font-bold leading-tight tracking-[-0.015em] sm:block">
            FinTech Consulting Cambodia
          </h2>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <a className="text-sm font-medium transition-colors hover:text-primary" href="#home">
            {language === "en" ? "Home" : "ទំព័រដើម"}
          </a>
          <a className="text-sm font-medium transition-colors hover:text-primary" href="#about">
            {language === "en" ? "About" : "អំពីយើង"}
          </a>
          <a className="text-sm font-medium transition-colors hover:text-primary" href="#services">
            {language === "en" ? "Services" : "សេវាកម្ម"}
          </a>
          <a className="text-sm font-medium transition-colors hover:text-primary" href="#why-us">
            {language === "en" ? "Why Choose Us" : "ហេតុអ្វីជ្រើសរើសយើង"}
          </a>
          <a className="text-sm font-medium transition-colors hover:text-primary" href="#use-cases">
            {language === "en" ? "Use Cases" : "ករណីសិក្សា"}
          </a>
          <a className="text-sm font-medium transition-colors hover:text-primary" href="#contact">
            {language === "en" ? "Contact" : "ទំនាក់ទំនង"}
          </a>
        </nav>
        <div className="flex items-center">
          <button
            onClick={onLanguageToggle}
            className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold tracking-[0.015em] text-text-light"
          >
            <span className="truncate">EN | ខ្មែរ</span>
          </button>
        </div>
      </div>
    </header>
  );
}
