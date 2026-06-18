import { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Statement — CamFinTech",
  description:
    "How CamFinTech collects, uses, and protects information about visitors to camfintech.com and clients of our Cambodian FinTech consulting practice. Covers cookies, analytics, cross-border data handling, AI tooling, and your rights.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Statement — CamFinTech",
    description:
      "How CamFinTech collects, uses, and protects information about visitors and clients. Covers analytics, cross-border data, AI tooling, and your rights.",
    url: "https://www.camfintech.com/privacy",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Privacy Statement — CamFinTech",
    description:
      "How CamFinTech collects, uses, and protects information about visitors and clients of our Cambodian FinTech consulting practice.",
  },
};

const privacySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "PrivacyPolicy",
      "@id": "https://www.camfintech.com/privacy#webpage",
      "url": "https://www.camfintech.com/privacy",
      "name": "Privacy Statement — CamFinTech",
      "isPartOf": { "@id": "https://www.camfintech.com/#website" },
      "publisher": { "@id": "https://www.camfintech.com/#organization" },
      "datePublished": "2026-05-22",
      "dateModified": "2026-05-22",
      "inLanguage": "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.camfintech.com/privacy#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "CamFinTech", "item": "https://www.camfintech.com" },
        { "@type": "ListItem", "position": 2, "name": "Privacy", "item": "https://www.camfintech.com/privacy" },
      ],
    },
  ],
};

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />
      <PrivacyContent />
    </>
  );
}
