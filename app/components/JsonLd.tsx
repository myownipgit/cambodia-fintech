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
          "url": "https://www.camfintech.com/brand/mark-navybg.svg",
          "width": 300,
          "height": 300,
        },
        "description":
          "CamFinTech is a Phnom Penh–based fee-only regulatory and compliance practice. We prepare Cambodian and foreign institutions to meet the standard for connecting to Cambodia's Digital Public Infrastructure rails — Bakong/KHQR, CamDX/CamDigiKey, and CamInvoice — and run the programmes that hold afterwards. We build the client-side integration to those rails, or direct an accredited Service Provider as a disclosed sub-contract; we never hold client funds and never operate a rail. Our moat is ex-NBC/NBFSA/TSC/SERC/GDT regulator talent paired with the engineering to deliver against it.",
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
          "Regulatory GRC advisory (governance, risk, compliance)",
          "DPI systems integration",
          "IT project management (Cambodian DPI programmes)",
          "Compliance data and analytics",
          "Professional training in FinTech regulatory compliance",
          "Bakong/KHQR integration development",
          "CamInvoice ERP integration development",
          "KHNSIC 2015 activities 62010, 62020, 62090, 70200, 85499",
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
        // Mirrors #localbusiness. The identity anchors (sameAs/founder/knowsAbout)
        // and the NAP must sit on the same node for entity resolution to work.
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
        "sameAs": [
          "https://www.linkedin.com/company/118224010/",
          "https://github.com/myownipgit/cambodia-fintech",
          // Owned sibling properties. Declaring them here is what lets a crawler
          // resolve camfintech.com, riel.report and insights.camfintech.com as one
          // entity rather than three unrelated domains.
          "https://riel.report",
          "https://insights.camfintech.com",
        ],
      },
      // Person (Founder) — unchanged
      {
        "@type": "Person",
        "@id": "https://www.camfintech.com/about#person",
        "name": "William Mallett",
        "jobTitle": "Founder & Managing Director",
        "image": "https://www.camfintech.com/images/founder-william-mallett.png",
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
        // knowsAbout deliberately stays on #organization only — parentOrganization
        // already links the nodes, and duplicating 26 entries onto every page is
        // payload for no additional signal.
        "founder": {
          "@id": "https://www.camfintech.com/about#person",
        },
        "sameAs": [
          "https://www.linkedin.com/company/118224010/",
          "https://github.com/myownipgit/cambodia-fintech",
          "https://riel.report",
          "https://insights.camfintech.com",
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "30 Preah Norodom Boulevard, Khan Daun Penh",
          "addressLocality": "Phnom Penh",
          "addressRegion": "Phnom Penh",
          "postalCode": "12210",
          "addressCountry": "KH",
        },
        // Coordinates supplied by William Mallett from Google Maps (2026-08-16),
        // rounded to 6 dp (~11 cm). Corresponds to the HQ on Preah Norodom
        // Boulevard, Khan Daun Penh.
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 11.568510,
          "longitude": 104.924645,
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
          "DPI rail integration development",
          "Management consultancy (regulatory)",
          "Governance, Risk and Compliance (GRC) advisory",
          "IT systems integration",
          "Professional training",
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
