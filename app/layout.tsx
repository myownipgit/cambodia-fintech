import type { Metadata } from "next";
import { Poppins, Manrope, Kantumruy_Pro, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import JsonLd from "./components/JsonLd";
import "./globals.css";

// Brand type system — locked August 2026. See brand/README.txt.
// Poppins = Latin display/wordmark · Manrope = body · Kantumruy Pro = Khmer
// · IBM Plex Mono = data/references. Weights are pinned to what the guide
// specifies; do not widen them without a reason (each adds transfer weight).
// Poppins has NO variable master on Google Fonts — every weight is a separate
// file, so this list must cover every weight the headings actually request.
// The site renders 600 (base heading weight from globals.css), 700 (font-bold,
// ~99 sites) and 800 (font-extrabold). 900 is deliberately absent: the two
// former font-black sites were moved to font-extrabold rather than pull a
// fourth file for two elements.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const kantumruy = Kantumruy_Pro({
  subsets: ["khmer"],
  weight: ["400", "600"],
  variable: "--font-kantumruy",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.camfintech.com"),
  title: "CamFinTech — Regulatory and Compliance Advisers, Phnom Penh",
  description:
    "CamFinTech is a fee-only regulatory and compliance practice in Phnom Penh, established 2024. It prepares Cambodian and foreign institutions to meet the standard for connecting to the Kingdom of Cambodia's national digital infrastructure — Bakong and KHQR, CamDX and CamDigiKey, CamInvoice — runs the AML/CFT and governance programmes that hold afterwards, and builds the client-side integration. The firm holds no client funds and operates no rail; the approval decision rests with the regulator and the client is the applicant of record.",
  keywords: [
    "Cambodia DPI",
    "DPI Integration",
    "regulatory approval navigation",
    "AML/CFT programme design",
    "MLRO support Cambodia",
    "DASP licensing Cambodia",
    "Prakas 093",
    "SERC digital assets",
    "Bakong approval",
    "CamDigiKey eKYC integration",
    "CamDX membership",
    "CamInvoice readiness",
    "CamInvoice accredited service provider",
    "Cambodia FinTech compliance",
    "NBC licensing",
    "NBFSA compliance",
    "TSC CamDX",
    "Phnom Penh",
    "fee-only regulatory firm",
    "Cambodia compliance-as-a-service",
    "ex-regulator advisory",
  ],
  authors: [{ name: "CamFinTech" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CamFinTech — Regulatory and Compliance Advisers, Phnom Penh",
    description:
      "A fee-only regulatory and compliance practice in the Kingdom of Cambodia, established 2024. Approvals, compliance programmes and client-side integrations for the national digital rails.",
    url: "https://www.camfintech.com",
    siteName: "CamFinTech",
    // en_KH, not en_US. The site is published by a Cambodian practice for a
    // Cambodian and regional readership; declaring a US locale was a small but
    // exact instance of the thing ADR-007 exists to fix.
    locale: "en_KH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CamFinTech — Cambodia DPI Approval-Navigation & Compliance",
    description:
      "Fee-only. The firm holds no client funds and operates no rail. The approval decision rests with the regulator; the client is the applicant of record.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      'facebook-domain-verification': '9x1qhej2nne7tyd5t4w7t8hjk8wg4a',
      'msvalidate.01': '61A73473688C2DD7458E7449EB54FE91',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
        {/*
          Explicit discovery pointer to /llms.txt. The llms.txt spec recommends
          rel="describedby" for this — there is no registered rel="llms.txt",
          despite it being a common (incorrect) suggestion.
        */}
        <link rel="describedby" href="/llms.txt" type="text/markdown" />
        {/*
          The Material Symbols stylesheet was removed 2026-08-31, closing GEO
          finding H3. It was ~310 KB and render-blocking, and its icons were
          ligature TEXT: an extractor reading this page saw "check_circle",
          "expand_more" and "article" interleaved with the prose, and
          aria-hidden did not help because it removes a node from the
          accessibility tree while leaving the text in the DOM. The last four
          icons were deleted or replaced with inline SVG. Do not reintroduce an
          icon font — use inline SVG.
        */}
      </head>
      <body
        className={`${poppins.variable} ${manrope.variable} ${kantumruy.variable} ${plexMono.variable} bg-cloud font-sans text-navy`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QDZ83JQWVC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QDZ83JQWVC');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
