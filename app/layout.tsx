import type { Metadata } from "next";
import { Inter, Noto_Sans_Khmer } from "next/font/google";
import Script from "next/script";
import JsonLd from "./components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansKhmer = Noto_Sans_Khmer({
  subsets: ["khmer"],
  variable: "--font-noto-sans-khmer",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.camfintech.com"),
  title: "CamFinTech — Cambodia DPI Approval-Navigation & Compliance",
  description:
    "CamFinTech is a fee-only regulatory approval-navigation and compliance firm based in Phnom Penh. We get Cambodian and foreign FinTechs approved onto Cambodia's Digital Public Infrastructure rails — Bakong/KHQR, CamDX/CamDigiKey, CamInvoice — and keep them compliant. Technical build delivered by accredited partners.",
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
    google: '7o0E2d5vZxbjOuA08U2_OIENGsjeHYYrns52JZzcyzo',
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
    <html lang="en" className="light">
      <head>
        <JsonLd />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${notoSansKhmer.variable} bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark`}
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
