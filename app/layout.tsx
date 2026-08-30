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
  title: "CamFinTech — Cambodia DPI Approval-Navigation & Compliance",
  description:
    "CamFinTech is a fee-only regulatory approval-navigation and compliance firm based in Phnom Penh. We get Cambodian and foreign FinTechs approved onto Cambodia's Digital Public Infrastructure rails — Bakong/KHQR, CamDX/CamDigiKey, CamInvoice — and keep them compliant. We build the client-side integration to the rails; we never hold funds or operate one.",
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
    title: "CamFinTech — Cambodia DPI Approval-Navigation & Compliance",
    description:
      "Fee-only regulatory approval-navigation and compliance firm. We get Cambodian and foreign FinTechs approved onto Cambodia's national rails — and keep them compliant.",
    url: "https://www.camfintech.com",
    siteName: "CamFinTech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CamFinTech — Cambodia DPI Approval-Navigation & Compliance",
    description:
      "Fee-only. Never hold client funds. Never operate a rail. Process competence, never access.",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
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
