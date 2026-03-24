import { Metadata } from 'next';
import { getArticlesByType } from '@/app/content/registry';

export const metadata: Metadata = {
  title: 'Learn About Cambodia FinTech — CamFinTech',
  description: 'In-depth guides on Cambodia\'s digital financial infrastructure: Bakong payments, CamDigiKey identity, CamDX data exchange, CamInvoice compliance, KHQR, and FinTech regulation.',
  alternates: { canonical: '/learn' },
};

export default function LearnIndex() {
  const articles = getArticlesByType('learn');

  const clusters = {
    infrastructure: articles.filter((a) => a.cluster === 'infrastructure'),
    investment: articles.filter((a) => a.cluster === 'investment'),
    compliance: articles.filter((a) => a.cluster === 'compliance'),
  };

  const clusterLabels = {
    infrastructure: 'Digital Infrastructure',
    investment: 'Investment Opportunities',
    compliance: 'Regulation & Compliance',
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <nav className="max-w-3xl mx-auto px-4 pt-6 text-sm text-text-light/60 dark:text-text-dark/60">
        <a href="/" className="hover:text-primary">CamFinTech</a> / Learn
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">
          Learn About Cambodia FinTech
        </h1>
        <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-8">
          Practical guides answering the most common questions about Cambodia&apos;s digital financial ecosystem, from Bakong payment integration to CamInvoice compliance requirements.
        </p>

        {(Object.entries(clusters) as [keyof typeof clusterLabels, typeof articles][]).map(([key, items]) => (
          items.length > 0 && (
            <section key={key} className="mb-10">
              <h2 className="text-xl font-semibold text-primary mb-4">{clusterLabels[key]}</h2>
              <div className="space-y-3">
                {items.map((article) => (
                  <a
                    key={article.slug}
                    href={`/learn/${article.slug}`}
                    className="block p-4 bg-card-light dark:bg-card-dark rounded-lg border border-border-light dark:border-border-dark hover:border-primary transition-colors"
                  >
                    <h3 className="font-medium text-text-light dark:text-text-dark">{article.title}</h3>
                    <p className="text-sm text-text-light/60 dark:text-text-dark/60 mt-1">{article.description}</p>
                    <span className="text-xs text-text-light/40 dark:text-text-dark/40 mt-2 inline-block">{article.readingTime} min read</span>
                  </a>
                ))}
              </div>
            </section>
          )
        ))}
      </main>
    </div>
  );
}
