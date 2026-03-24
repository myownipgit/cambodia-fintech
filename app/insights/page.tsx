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
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <nav className="max-w-3xl mx-auto px-4 pt-6 text-sm text-text-light/60 dark:text-text-dark/60">
        <a href="/" className="hover:text-primary">CamFinTech</a> / Insights
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">
          Insights &amp; Research
        </h1>
        <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-8">
          Original analysis and data-driven research on Cambodia&apos;s FinTech ecosystem, digital payment trends, and strategic investment opportunities across ASEAN.
        </p>

        <div className="space-y-3">
          {articles.map((article) => (
            <a
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="block p-4 bg-card-light dark:bg-card-dark rounded-lg border border-border-light dark:border-border-dark hover:border-primary transition-colors"
            >
              <h3 className="font-medium text-text-light dark:text-text-dark">{article.title}</h3>
              <p className="text-sm text-text-light/60 dark:text-text-dark/60 mt-1">{article.description}</p>
              <span className="text-xs text-text-light/40 dark:text-text-dark/40 mt-2 inline-block">{article.readingTime} min read</span>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
