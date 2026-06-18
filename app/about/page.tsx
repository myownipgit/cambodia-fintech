import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About — William Mallett, Founder & Managing Director, CamFinTech",
  description:
    "William Mallett founded CamFinTech to do the regulatory approval-navigation and compliance work that getting onto Cambodia's Digital Public Infrastructure rails actually requires — Bakong/KHQR, CamDX/CamDigiKey, CamInvoice. Fee-only. Never holds client funds. Never operates a rail.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — William Mallett, Founder & Managing Director, CamFinTech",
    description:
      "Fee-only regulatory approval-navigation and compliance firm in Phnom Penh. Founder William Mallett. Process competence, never access.",
    url: "https://www.camfintech.com/about",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "About William Mallett — CamFinTech",
    description:
      "Founder & Managing Director, CamFinTech. Phnom Penh. Cambodia DPI approval-navigation & compliance.",
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.camfintech.com/about#webpage",
      "url": "https://www.camfintech.com/about",
      "name": "About — William Mallett, Founder & Managing Director, CamFinTech",
      "isPartOf": { "@id": "https://www.camfintech.com/#website" },
      "about": { "@id": "https://www.camfintech.com/about#person" },
      "mainEntity": { "@id": "https://www.camfintech.com/about#person" },
      "datePublished": "2026-05-24",
      "dateModified": "2026-06-18",
      "inLanguage": "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.camfintech.com/about#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "CamFinTech",
          "item": "https://www.camfintech.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://www.camfintech.com/about",
        },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <AboutContent />
    </>
  );
}
