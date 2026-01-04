import type { Metadata } from "next";
import { Inter, Noto_Sans_Khmer } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import OmniDMChat from "./components/OmniDMChat";

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
  title: "FinTech Consulting Cambodia",
  description: "Architecting Cambodia's Digital Financial Future. Strategic advisors and technical architects specializing in Cambodia's emerging digital financial infrastructure.",
  keywords: ["FinTech", "Cambodia", "Bakong", "CamDigiKey", "CamDX", "CamInvoice", "digital payments", "consulting"],
  authors: [{ name: "CamFinTech" }],
  openGraph: {
    title: "FinTech Consulting Cambodia",
    description: "Architecting Cambodia's Digital Financial Future. We build compliant, interoperable FinTech solutions aligned with the Government-as-a-Platform model.",
    url: "https://www.camfintech.com",
    siteName: "CamFinTech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinTech Consulting Cambodia",
    description: "Architecting Cambodia's Digital Financial Future",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      'facebook-domain-verification': '9x1qhej2nne7tyd5t4w7t8hjk8wg4a',
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
        <OmniDMChat />
      </body>
    </html>
  );
}
