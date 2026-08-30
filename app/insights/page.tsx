import Link from 'next/link';
import { Metadata } from 'next';
import { getArticlesByType } from '@/app/content/registry';

export const metadata: Metadata = {
  title: 'Cambodia FinTech Insights — CamFinTech',
  description: 'Original research and data analysis on Cambodia\'s digital payment growth, SME readiness, ASEAN FinTech comparison, Bakong adoption metrics, and CamInvoice rollout impact.',
  alternates: { canonical: '/insights' },
};

export default function InsightsIndex() {
  const articles = getArticlesByType('insights');

  return (
    <div className="min-h-screen bg-cloud">
      <nav className="max-w-3xl mx-auto px-4 pt-6 text-sm text-navy/60">
        <Link href="/" className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4">CamFinTech</Link> / Insights
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          Insights &amp; Research
        </h1>
        <p className="text-lg text-navy/80 mb-8">
          Original analysis and data-driven research on Cambodia&apos;s FinTech ecosystem, digital payment trends, and strategic investment opportunities across ASEAN.
        </p>

        <div className="space-y-3">
          {articles.map((article) => (
            <a
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="block p-4 bg-card rounded-lg border border-line hover:border-teal transition-colors"
            >
              <h3 className="font-medium text-navy">{article.title}</h3>
              <p className="text-sm text-navy/60 mt-1">{article.description}</p>
              <span className="text-xs text-navy/40 mt-2 inline-block">{article.readingTime} min read</span>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
