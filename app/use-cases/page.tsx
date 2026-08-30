import Link from 'next/link';
import { Metadata } from 'next';
import { getArticlesByType } from '@/app/content/registry';

// The URL segment stays /use-cases — the legacy URLs are being recovered and a
// rename would cost their equity — but every label a reader sees says
// "Engagement Scenarios". See app/components/ArticleLayout.tsx.
export const metadata: Metadata = {
  title: 'Engagement Scenarios — CamFinTech',
  description:
    'Illustrative scoping documents for Cambodian DPI integration work: multi-channel KHQR acceptance, ERP-to-CamInvoice connectors, cross-border acceptance, and digital origination adapters. These describe how engagements would be scoped, not work delivered.',
  alternates: { canonical: '/use-cases' },
};

export default function UseCasesIndex() {
  const articles = getArticlesByType('use-cases');

  return (
    <div className="min-h-screen bg-cloud">
      <nav className="max-w-3xl mx-auto px-4 pt-6 text-sm text-navy/60">
        <Link href="/" className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4">CamFinTech</Link> / Engagement Scenarios
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          Engagement Scenarios
        </h1>
        <p className="text-lg text-navy/80 mb-6">
          How integration work against Cambodia&apos;s digital public infrastructure would be scoped — the architecture, the sequencing, and the boundary between what we build, what the client operates, and what stays with the licensed parties.
        </p>

        <aside
          className="mb-8 border-l-4 border-teal bg-teal/10 px-4 py-3 rounded-r"
          aria-label="Scenario disclosure"
        >
          <p className="text-sm font-semibold text-navy-deep mb-1">
            Illustrative scenarios — not client engagements
          </p>
          <p className="text-sm text-navy/80 leading-relaxed">
            CamFinTech is pre-revenue and has no client engagements to report. Nothing on these pages describes work we have delivered. Each one sets out how work of that kind would be scoped and built, with every cited figure attributed to a published source.
          </p>
        </aside>

        <div className="space-y-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/use-cases/${article.slug}`}
              className="block p-4 bg-card rounded-lg border border-line hover:border-teal transition-colors"
            >
              <h3 className="font-medium text-navy">{article.title}</h3>
              <p className="text-sm text-navy/60 mt-1">{article.description}</p>
              <span className="text-xs text-navy/40 mt-2 inline-block">{article.readingTime} min read</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
