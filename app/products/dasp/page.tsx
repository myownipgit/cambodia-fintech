import { Metadata } from "next";
import DaspContent from "./DaspContent";

export const metadata: Metadata = {
  title: "DASP Approval-Readiness — SERC Prakas 093 | CamFinTech",
  description:
    "End-to-end approval-readiness for SERC's Prakas 093 digital-asset licensing regime (in force 30 December 2025). CamFinTech's DASP-DX/BUILD/RUN/TRAIN programme covers the AML/CFT build, governance roster, and sandbox-to-full readiness. We never operate the rail; the licensed DASP operator stays the applicant of record. Reserved legal opinion routes to a Bar lawyer.",
  alternates: { canonical: "/products/dasp" },
  openGraph: {
    title: "DASP Approval-Readiness — SERC Prakas 093 | CamFinTech",
    description:
      "Get licence-ready for digital assets. The end-to-end approval-readiness programme for SERC's Prakas 093 regime — flagship product. Fee-only. AML-rigor-not-access.",
    url: "https://www.camfintech.com/products/dasp",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DASP Approval-Readiness — Prakas 093",
    description: "End-to-end DASP licensing readiness. Fee-only. Process competence, never access.",
  },
};

const daspSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.camfintech.com/products/dasp#webpage",
      "url": "https://www.camfintech.com/products/dasp",
      "name": "DASP Approval-Readiness — SERC Prakas 093 | CamFinTech",
      "isPartOf": { "@id": "https://www.camfintech.com/#website" },
      "about": { "@id": "https://www.camfintech.com/products/dasp#service" },
      "datePublished": "2026-06-18",
      "dateModified": "2026-06-18",
      "inLanguage": "en",
    },
    {
      "@type": "Service",
      "@id": "https://www.camfintech.com/products/dasp#service",
      "name": "DASP Approval-Readiness Programme (SERC Prakas 093)",
      "alternateName": ["DASP-DX", "DASP-BUILD", "DASP-RUN", "DASP-TRAIN"],
      "description":
        "End-to-end regulatory approval-readiness for SERC's Prakas 093 digital-asset licensing regime. CamFinTech navigates the application + AML/CFT programme build + governance + sandbox-to-full readiness; the licensed DASP operator (the client) submits and operates. Reserved legal opinion routes to a Bar lawyer.",
      "provider": { "@id": "https://www.camfintech.com/#organization" },
      "areaServed": { "@type": "Country", "name": "Cambodia" },
      "serviceType": "Regulatory Approval Navigation and AML/CFT Programme Build",
      "audience": {
        "@type": "Audience",
        "audienceType": "Crypto exchanges, OTC desks, custody providers, payment-on-rails firms seeking DASP licensing under SERC Prakas 093",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.camfintech.com/products/dasp#breadcrumb",
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
          "name": "Products",
          "item": "https://www.camfintech.com/products/dasp",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "DASP Approval-Readiness",
          "item": "https://www.camfintech.com/products/dasp",
        },
      ],
    },
  ],
};

export default function DaspPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(daspSchema) }}
      />
      <DaspContent />
    </>
  );
}
