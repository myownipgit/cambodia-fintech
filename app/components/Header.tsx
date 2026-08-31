"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Five items, and no CTA button. Across 22 Cambodian institutional homepages
  // there was not a single "Book a call" or embedded scheduler; contact is an
  // office you write to, reached from the nav like anything else. "Publications"
  // is what makes /learn, /knowledge, /insights and /use-cases reachable —
  // 30 pages that shipped with no inbound link from nav or footer.
  const navLinks = [
    { href: "/#practice", label: "Practice" },
    { href: "/regulatory", label: "Regulatory" },
    { href: "/#publications", label: "Publications" },
    { href: "/about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-cloud/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center py-3" aria-label="CamFinTech home">
          <Image
            src="/brand/lockup-bilingual-navybg.svg"
            alt="CamFinTech"
            width={946}
            height={300}
            priority
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-sm font-medium transition-colors hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Deliberately no CTA button here — see the navLinks comment above.
              This slot previously held "Book a call", which itself replaced the
              EN/KM toggle. Do not reinstate either without reading ADR-007. */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-navy md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="border-t border-line bg-cloud md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  className="text-base font-medium transition-colors hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4"
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
