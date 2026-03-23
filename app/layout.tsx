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
  title: "CamFinTech — Cambodia FinTech Consulting | Bakong, CamDigiKey, CamDX Integration",
  description: "CamFinTech is Cambodia's specialist FinTech consulting firm providing strategic advisory and technical architecture for enterprises integrating with Bakong payments, CamDigiKey digital identity, CamDX data exchange, and CamInvoice compliance on the Government-as-a-Platform (GaaP) model.",
  keywords: [
    "FinTech", "Cambodia", "Bakong", "CamDigiKey", "CamDX", "CamInvoice",
    "digital payments", "consulting", "KHQR", "Government-as-a-Platform",
    "Cambodia digital infrastructure", "Bakong CBDC", "NBC payment rail",
    "CamInvoice compliance", "Siem Reap", "fintech consulting Cambodia",
    "បាគង", "បច្ចេកវិទ្យាហិរញ្ញវត្ថុ", "កម្ពុជា",
  ],
  authors: [{ name: "CamFinTech" }],
  alternates: {
    canonical: "/",
    languages: {
      "en": "/",
      "km": "/?lang=km",
    },
  },
  openGraph: {
    title: "CamFinTech — Architecting Cambodia's Digital Financial Future",
    description: "Strategic advisors and technical architects specializing in Cambodia's Government-as-a-Platform digital infrastructure: Bakong payments, CamDigiKey identity, CamDX data exchange, and CamInvoice compliance.",
    url: "https://www.camfintech.com",
    siteName: "CamFinTech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "CamFinTech — Cambodia FinTech Consulting for Bakong, CamDigiKey, CamDX, and CamInvoice Integration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CamFinTech — Cambodia FinTech Consulting",
    description: "Architecting Cambodia's Digital Financial Future. Enterprise integration with Bakong, CamDigiKey, CamDX, and CamInvoice.",
    images: ["/images/og-image.png"],
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
        {/* OmniDM Chat Widget */}
        <Script id="omnidm-config" strategy="beforeInteractive">
          {`window.OmniDMConfig = {
            token: 'camfintech-embed-2026',
            baseUrl: 'https://automation.omnidm.ai',
            position: 'bottom-right',
            title: 'CamFinTech Assistant',
            welcomeMessage: 'សួស្តី! Welcome to CamFinTech. How can we help you with your FinTech integration today?',
            theme: {
              primaryColor: '#1B4D4D',
              accentColor: '#D4A84B',
              fontFamily: "'Inter', sans-serif",
              botBubbleColor: '#F5F5F5',
              textColor: '#1A1A1A',
              userTextColor: '#FFFFFF'
            }
          };`}
        </Script>
        <Script
          src="https://automation.omnidm.ai/static/widget/v1/omnidm-chat.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
