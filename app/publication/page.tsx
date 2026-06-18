import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Publication — The Riel Report | CamFinTech",
  description:
    "CamFinTech is the publisher of The Riel Report, a Cambodia FinTech intelligence service at riel.report read by the financial-services industry, regulators, and multilateral analysts. Separate brand at its own domain.",
  alternates: { canonical: "/publication" },
  openGraph: {
    title: "Publication — The Riel Report | CamFinTech",
    description:
      "The Riel Report is published by CamFinTech, a Phnom Penh regulatory approval-navigation and compliance firm. Cambodia FinTech intelligence at riel.report.",
    url: "https://www.camfintech.com/publication",
    type: "website",
  },
};

const publicationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.camfintech.com/publication#webpage",
      "url": "https://www.camfintech.com/publication",
      "name": "Publication — The Riel Report | CamFinTech",
      "isPartOf": { "@id": "https://www.camfintech.com/#website" },
      "about": { "@id": "https://www.camfintech.com/#organization" },
      "datePublished": "2026-06-18",
      "dateModified": "2026-06-18",
      "inLanguage": "en",
      "significantLink": "https://riel.report",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.camfintech.com/publication#breadcrumb",
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
          "name": "Publication",
          "item": "https://www.camfintech.com/publication",
        },
      ],
    },
  ],
};

export default function PublicationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationSchema) }}
      />
      <div className="relative flex min-h-screen w-full flex-col">
        <Header />

        <main className="flex-1">
          <div className="mx-auto flex max-w-3xl flex-col px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            {/* Breadcrumb */}
            <nav className="text-sm text-text-light/60 dark:text-text-dark/60 mb-6">
              <a href="/" className="hover:text-primary">CamFinTech</a>
              <span className="mx-1">/</span>
              <span>Publication</span>
            </nav>

            <header className="mb-10">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 leading-tight">
                The Riel Report
              </h1>
              <p className="text-lg text-text-light/85 dark:text-text-dark/85 leading-relaxed">
                Cambodia FinTech intelligence — published by CamFinTech, read by the financial-services industry, regulators, and multilateral analysts.
              </p>
            </header>

            <section className="mb-10">
              <p className="text-base text-text-light/85 dark:text-text-dark/85 leading-relaxed mb-4">
                CamFinTech is the publisher of <strong>The Riel Report</strong> — Cambodia&apos;s independent FinTech intelligence service. The publication covers Cambodia&apos;s financial-services market, the Digital Public Infrastructure stack (Bakong, KHQR, CamDigiKey, CamDX, CamInvoice, CamDL), the regulatory environment (NBC, MEF, SERC, NBFSA, GDT, MPTC, TRC), and Cambodia&apos;s place in regional and global FinTech trends.
              </p>
              <p className="text-base text-text-light/85 dark:text-text-dark/85 leading-relaxed mb-4">
                The Riel Report is a <strong>separate brand at its own domain</strong>. The two brands run on the same operational platform but speak in different voices to different audiences: CamFinTech.com serves commercial clients needing approval-navigation and compliance; The Riel Report serves the industry, regulator, and multilateral audience with editorial-voice analysis. The publication&apos;s credibility depends on it <em>not</em> being a sales channel — there are no CamFinTech commercial CTAs on Riel Report surfaces, and there&apos;s no replicated content here.
              </p>
              <p className="text-base text-text-light/85 dark:text-text-dark/85 leading-relaxed">
                Visit the publication directly to read briefings, subscribe, or access the public dashboard.
              </p>
            </section>

            <section className="mb-10">
              <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-8 text-center">
                <a
                  href="https://riel.report"
                  rel="external"
                  className="inline-flex h-14 min-w-[200px] items-center justify-center rounded-lg bg-primary px-8 text-base font-bold tracking-[0.015em] text-text-light hover:scale-105 transition-transform"
                >
                  Read The Riel Report →
                </a>
                <p className="mt-4 text-sm text-text-light/70 dark:text-text-dark/70">
                  <span className="font-mono">riel.report</span> — daily / weekly / monthly briefings · public dashboard · RSS · subscribe
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-3">What you&apos;ll find at riel.report</h2>
              <ul className="space-y-2 text-base text-text-light/85 dark:text-text-dark/85 leading-relaxed">
                <li><strong>Daily briefings</strong> — Mon–Fri, Cambodia FinTech news synthesised by editorial cadence (a single-top-story explainer + curated items).</li>
                <li><strong>Weekly synthesis</strong> — Sunday, 8-section curated weekly digest with deterministic source links.</li>
                <li><strong>Monthly deep report</strong> — first of the month, comprehensive analysis with branded PDF compendium.</li>
                <li><strong>Sector monthlies</strong> — sector-specific companion reports (insurance live; other sectors in progress).</li>
                <li><strong>Public dashboard</strong> — heatmap, entity directory, archived approved briefings, methodology explainer.</li>
                <li><strong>Riel Report PDF</strong> — branded monthly compendium for download.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-3">Why two brands</h2>
              <p className="text-base text-text-light/85 dark:text-text-dark/85 leading-relaxed">
                The publication&apos;s positioning value depends on its voice being insulated from commercial advocacy. Two URL homes, two voices, two audiences — cross-linked but not conflated. CamFinTech is the company; The Riel Report is the publication; both are part of one firm&apos;s strategy.
              </p>
            </section>

            <div className="mt-10 pt-6 border-t border-border-light dark:border-border-dark">
              <a href="/" className="text-primary hover:underline text-sm">
                &larr; Back to CamFinTech
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
