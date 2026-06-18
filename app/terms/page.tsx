import { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Use — CamFinTech",
  description:
    "The terms that govern your access to and use of camfintech.com. Includes IP, acceptable use, no-professional-advice disclaimer, governing law (Cambodia), and the contact route for disputes.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Use — CamFinTech",
    description:
      "Terms governing access to camfintech.com — IP, acceptable use, disclaimers, and governing law (Cambodia).",
    url: "https://www.camfintech.com/terms",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Terms of Use — CamFinTech",
    description:
      "Terms governing access to camfintech.com — IP, acceptable use, disclaimers, and Cambodian governing law.",
  },
};

const termsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TermsOfService",
      "@id": "https://www.camfintech.com/terms#webpage",
      "url": "https://www.camfintech.com/terms",
      "name": "Terms of Use — CamFinTech",
      "isPartOf": { "@id": "https://www.camfintech.com/#website" },
      "publisher": { "@id": "https://www.camfintech.com/#organization" },
      "datePublished": "2026-05-22",
      "dateModified": "2026-05-22",
      "inLanguage": "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.camfintech.com/terms#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "CamFinTech", "item": "https://www.camfintech.com" },
        { "@type": "ListItem", "position": 2, "name": "Terms", "item": "https://www.camfintech.com/terms" },
      ],
    },
  ],
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />
      <TermsContent />
    </>
  );
}
