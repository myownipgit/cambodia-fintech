export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // Organization
      {
        "@type": "Organization",
        "@id": "https://www.camfintech.com/#organization",
        "name": "CamFinTech",
        "alternateName": "FinTech Consulting Cambodia",
        "url": "https://www.camfintech.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.camfintech.com/images/og-image.png",
          "width": 1200,
          "height": 630,
        },
        "description":
          "CamFinTech is Cambodia's specialist FinTech consulting firm providing strategic advisory and technical architecture services for enterprises integrating with Cambodia's Government-as-a-Platform (GaaP) digital infrastructure, including Bakong instant payments, CamDigiKey digital identity, CamDX data exchange, and the mandatory CamInvoice electronic invoicing system.",
        "foundingDate": "2024",
        "areaServed": {
          "@type": "Country",
          "name": "Cambodia",
          "sameAs": "https://en.wikipedia.org/wiki/Cambodia",
        },
        "knowsAbout": [
          "Bakong Payment System",
          "Bakong CBDC",
          "KHQR Payment Protocol",
          "CamDigiKey Digital Identity",
          "CamDX Data Exchange Platform",
          "CamInvoice Electronic Invoicing",
          "Cambodia FinTech",
          "Government-as-a-Platform",
          "Financial Technology Consulting",
          "National Bank of Cambodia Payment Rails",
          "General Department of Taxation Cambodia",
          "Supply Chain Finance",
          "Compliance as a Service",
          "Core Banking Modernization",
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+855-76-277-5645",
          "contactType": "customer service",
          "email": "info@camfintech.com",
          "availableLanguage": ["English", "Khmer"],
        },
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
          "streetAddress": "Venus Street, near Wat Thmey",
          "addressLocality": "Siem Reap",
          "addressRegion": "Siem Reap Province",
          "postalCode": "17000",
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
      },
      // WebSite
      {
        "@type": "WebSite",
        "@id": "https://www.camfintech.com/#website",
        "url": "https://www.camfintech.com",
        "name": "CamFinTech — Cambodia FinTech Consulting",
        "publisher": {
          "@id": "https://www.camfintech.com/#organization",
        },
        "inLanguage": ["en", "km"],
      },
      // WebPage
      {
        "@type": "WebPage",
        "@id": "https://www.camfintech.com/#webpage",
        "url": "https://www.camfintech.com",
        "name": "CamFinTech — Architecting Cambodia's Digital Financial Future",
        "isPartOf": { "@id": "https://www.camfintech.com/#website" },
        "about": { "@id": "https://www.camfintech.com/#organization" },
        "datePublished": "2024-11-25",
        "dateModified": "2026-03-24",
        "inLanguage": "en",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [
            "#home h1",
            "#about h2",
            "#about h2 + p",
            "#services h2",
            "#services h2 + p",
          ],
        },
      },
      // Service: Compliance as a Service
      {
        "@type": "Service",
        "@id": "https://www.camfintech.com/#service-compliance",
        "name": "Compliance as a Service",
        "description":
          "CamFinTech helps enterprises navigate Cambodia's regulatory landscape with confidence, including CamInvoice mandate compliance, General Department of Taxation (GDT) reporting, and anti-money laundering (AML) requirements aligned with National Bank of Cambodia guidelines.",
        "provider": {
          "@id": "https://www.camfintech.com/#organization",
        },
        "areaServed": { "@type": "Country", "name": "Cambodia" },
        "serviceType": "Regulatory Compliance Consulting",
      },
      // Service: Digital Payment Gateway Integration
      {
        "@type": "Service",
        "@id": "https://www.camfintech.com/#service-payments",
        "name": "Digital Payment Gateway Integration",
        "description":
          "CamFinTech connects enterprises to Cambodia's national payment systems including KHQR standardized QR payments, Bakong instant settlement (the National Bank of Cambodia's CBDC rail), and ABA PayWay merchant processing.",
        "provider": {
          "@id": "https://www.camfintech.com/#organization",
        },
        "areaServed": { "@type": "Country", "name": "Cambodia" },
        "serviceType": "Payment System Integration",
      },
      // Service: Core Banking System Modernization
      {
        "@type": "Service",
        "@id": "https://www.camfintech.com/#service-banking",
        "name": "Core Banking System Modernization",
        "description":
          "CamFinTech upgrades legacy banking systems for Cambodia's digital-first infrastructure, migrating from mainframe architectures to microservices-based platforms that integrate natively with Bakong, CamDX, and CamDigiKey government APIs.",
        "provider": {
          "@id": "https://www.camfintech.com/#organization",
        },
        "areaServed": { "@type": "Country", "name": "Cambodia" },
        "serviceType": "Banking Technology Consulting",
      },
      // Service: Lending & Credit Scoring Solutions
      {
        "@type": "Service",
        "@id": "https://www.camfintech.com/#service-lending",
        "name": "Lending & Credit Scoring Solutions",
        "description":
          "CamFinTech deploys automated lending platforms and credit scoring engines for Cambodian financial institutions and microfinance institutions (MFIs), leveraging CamInvoice verified transaction data and CamDigiKey identity verification for faster, data-driven loan approvals.",
        "provider": {
          "@id": "https://www.camfintech.com/#organization",
        },
        "areaServed": { "@type": "Country", "name": "Cambodia" },
        "serviceType": "Lending Technology Solutions",
      },
      // Service: API Development & Management
      {
        "@type": "Service",
        "@id": "https://www.camfintech.com/#service-api",
        "name": "API Development & Management",
        "description":
          "CamFinTech builds secure, scalable APIs for financial services, enabling enterprises to connect to Cambodia's government platform ecosystem including CamDX data exchange, CamDigiKey eKYC, and Bakong payment settlement endpoints.",
        "provider": {
          "@id": "https://www.camfintech.com/#organization",
        },
        "areaServed": { "@type": "Country", "name": "Cambodia" },
        "serviceType": "API Development",
      },
      // Service: Cybersecurity & Data Privacy
      {
        "@type": "Service",
        "@id": "https://www.camfintech.com/#service-security",
        "name": "Cybersecurity & Data Privacy",
        "description":
          "CamFinTech protects enterprise assets and customer data with cybersecurity solutions aligned with Cambodian regulatory requirements, including data privacy compliance for financial institutions operating on the Government-as-a-Platform infrastructure.",
        "provider": {
          "@id": "https://www.camfintech.com/#organization",
        },
        "areaServed": { "@type": "Country", "name": "Cambodia" },
        "serviceType": "Cybersecurity Consulting",
      },
      // FAQPage
      {
        "@type": "FAQPage",
        "@id": "https://www.camfintech.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Cambodia's Government-as-a-Platform (GaaP) model?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cambodia's Government-as-a-Platform model is a deliberate architectural approach where the state builds and operates core digital rails as public utilities. These include CamDigiKey for digital identity, Bakong for instant payments via the National Bank of Cambodia, CamDX for government-private sector data exchange, and CamInvoice for mandatory electronic invoicing administered by the General Department of Taxation.",
            },
          },
          {
            "@type": "Question",
            "name": "What is Bakong and how does it work for payment integration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bakong is Cambodia's central bank digital currency (CBDC) and instant payment system operated by the National Bank of Cambodia. It enables real-time settlement through KHQR standardized QR code payments. CamFinTech helps enterprises integrate with Bakong's payment rails for both domestic and cross-border transactions.",
            },
          },
          {
            "@type": "Question",
            "name": "How can enterprises comply with the CamInvoice mandate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "CamInvoice is Cambodia's mandatory electronic invoicing system administered by the General Department of Taxation (GDT). CamFinTech develops API-first accounting tools and middleware that automate CamInvoice submission, bundling compliance with basic bookkeeping as a 'compliance-as-a-service' solution for Cambodia's 43,970+ SMEs.",
            },
          },
          {
            "@type": "Question",
            "name": "What is CamDigiKey and why is it important for FinTech?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "CamDigiKey is Cambodia's national digital identity system enabling eKYC (electronic Know Your Customer) verification. For FinTech applications, CamDigiKey provides seamless identity verification for account opening, loan applications, and insurance enrollment, eliminating manual document verification. CamFinTech integrates CamDigiKey into enterprise workflows for frictionless onboarding.",
            },
          },
          {
            "@type": "Question",
            "name": "What are the strategic investment opportunities in Cambodia's FinTech ecosystem?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "CamFinTech has identified three high-value opportunities at the intersection of Cambodia's digital infrastructure layers: (1) Automated Supply Chain Finance leveraging CamInvoice and customs data for invoice financing, (2) Compliance-as-a-Service adapter tools for SME tax compliance with the CamInvoice mandate, and (3) Embedded micro-insurance distributed through KHQR payment flows with CamDigiKey identity verification.",
            },
          },
        ],
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
