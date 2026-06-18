export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // Organization — DPI-aligned positioning
      {
        "@type": "Organization",
        "@id": "https://www.camfintech.com/#organization",
        "name": "CamFinTech",
        "alternateName": "CamFinTech Cambodia",
        "url": "https://www.camfintech.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.camfintech.com/opengraph-image",
          "width": 1200,
          "height": 630,
        },
        "description":
          "CamFinTech is a Phnom Penh–based fee-only regulatory approval-navigation and compliance firm. We get Cambodian and foreign FinTechs approved onto Cambodia's Digital Public Infrastructure rails — Bakong/KHQR, CamDX/CamDigiKey, and CamInvoice — and keep them compliant. Technical build is delivered by accredited Service Providers we coordinate; we never hold client funds and never operate a rail. Our moat is ex-NBC/NBFSA/TSC/SERC/GDT regulator talent, not engineering capacity.",
        "foundingDate": "2024",
        "areaServed": {
          "@type": "Country",
          "name": "Cambodia",
          "sameAs": "https://en.wikipedia.org/wiki/Cambodia",
        },
        "knowsAbout": [
          "Regulatory approval navigation Cambodia",
          "AML/CFT programme design Cambodia",
          "MLRO support Cambodia",
          "DASP licensing (SERC Prakas 093)",
          "Cross-rail orchestration",
          "Compliance-inside (B2B2B white-label compliance)",
          "Bakong payment rail",
          "Bakong CBDC",
          "KHQR Payment Protocol",
          "CamDigiKey eKYC integration",
          "CamDX data exchange membership",
          "CamInvoice readiness",
          "CamInvoice accredited Service Provider enablement",
          "Cambodia FinTech regulatory landscape",
          "National Bank of Cambodia (NBC) licensing",
          "NBFSA supervision",
          "Techo Startup Center (TSC) CamDX",
          "General Department of Taxation (GDT) compliance",
          "Securities and Exchange Regulator of Cambodia (SERC)",
          "Foreign FinTech market entry Cambodia",
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+855-76-277-5645",
            "contactType": "customer service",
            "email": "info@camfintech.com",
            "availableLanguage": ["English"],
            "areaServed": "KH",
          },
          {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "dasp@camfintech.com",
            "availableLanguage": ["English"],
            "areaServed": "KH",
            "description": "DASP / SERC Prakas 093 digital-asset licensing inquiries",
          },
          {
            "@type": "ContactPoint",
            "contactType": "technical support",
            "email": "partners@camfintech.com",
            "availableLanguage": ["English"],
            "areaServed": "KH",
            "description": "Compliance-inside / partner subcontract inquiries (SIs, core vendors, law firms)",
          },
        ],
        "founder": {
          "@id": "https://www.camfintech.com/about#person",
        },
        "sameAs": [
          "https://www.linkedin.com/company/118224010/",
          "https://www.wikidata.org/wiki/Q140279044",
        ],
      },
      // Person (Founder) — unchanged
      {
        "@type": "Person",
        "@id": "https://www.camfintech.com/about#person",
        "name": "William Mallett",
        "jobTitle": "Founder & Managing Director",
        "worksFor": {
          "@id": "https://www.camfintech.com/#organization",
        },
        "url": "https://www.camfintech.com/about",
        "sameAs": [
          "https://www.linkedin.com/in/william-mall/",
        ],
      },
      // ProfessionalService (LocalBusiness)
      {
        "@type": "ProfessionalService",
        "@id": "https://www.camfintech.com/#localbusiness",
        "name": "CamFinTech",
        "parentOrganization": {
          "@id": "https://www.camfintech.com/#organization",
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "30 Preah Norodom Boulevard, Khan Daun Penh",
          "addressLocality": "Phnom Penh",
          "addressRegion": "Phnom Penh",
          "postalCode": "12210",
          "addressCountry": "KH",
        },
        "telephone": "+855-76-277-5645",
        "email": "info@camfintech.com",
        "url": "https://www.camfintech.com",
        "priceRange": "$$",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          "opens": "09:00",
          "closes": "18:00",
        },
        "serviceType": [
          "Regulatory approval navigation",
          "AML/CFT programme design",
          "MLRO support",
          "DASP licensing readiness",
          "DPI rail integration coordination",
        ],
      },
      // WebSite
      {
        "@type": "WebSite",
        "@id": "https://www.camfintech.com/#website",
        "url": "https://www.camfintech.com",
        "name": "CamFinTech",
        "publisher": {
          "@id": "https://www.camfintech.com/#organization",
        },
        "inLanguage": "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
