"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/products/dasp", label: "DASP" },
    { href: "/regulatory", label: "Regulatory" },
    { href: "/about", label: "About" },
    { href: "/publication", label: "Publication" },
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
          {/* Book a call CTA — replaces the EN/KM toggle (Khmer pending native editorial hire) */}
          <Link
            href="/#contact"
            className="hidden sm:flex h-10 min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-teal px-4 text-sm font-bold tracking-[0.015em] text-navy-deep hover:scale-105 transition-transform"
          >
            <span className="truncate">Book a call</span>
          </Link>

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
