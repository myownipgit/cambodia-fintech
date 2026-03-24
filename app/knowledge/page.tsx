import { Metadata } from 'next';
import { getArticlesByType } from '@/app/content/registry';

export const metadata: Metadata = {
  title: 'Cambodia FinTech Knowledge Base — CamFinTech',
  description: 'Deep-dive technical documentation on Cambodia\'s digital financial infrastructure: GaaP architecture, Bakong integration, FinTech regulation, payment ecosystem, and digital identity systems.',
  alternates: { canonical: '/knowledge' },
};

export default function KnowledgeIndex() {
  const articles = getArticlesByType('knowledge');

  const clusters = {
    infrastructure: articles.filter((a) => a.cluster === 'infrastructure'),
    compliance: articles.filter((a) => a.cluster === 'compliance'),
    investment: articles.filter((a) => a.cluster === 'investment'),
  };

  const clusterLabels = {
    infrastructure: 'Digital Infrastructure',
    compliance: 'Regulation & Compliance',
    investment: 'Investment Opportunities',
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <nav className="max-w-3xl mx-auto px-4 pt-6 text-sm text-text-light/60 dark:text-text-dark/60">
        <a href="/" className="hover:text-primary">CamFinTech</a> / Knowledge Base
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">
          Knowledge Base
        </h1>
        <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-8">
          Comprehensive technical documentation on Cambodia&apos;s Government-as-a-Platform architecture, payment systems, regulatory frameworks, and strategic investment opportunities in the FinTech ecosystem.
        </p>

        {(Object.entries(clusters) as [keyof typeof clusterLabels, typeof articles][]).map(([key, items]) => (
          items.length > 0 && (
            <section key={key} className="mb-10">
              <h2 className="text-xl font-semibold text-primary mb-4">{clusterLabels[key]}</h2>
              <div className="space-y-3">
                {items.map((article) => (
                  <a
                    key={article.slug}
                    href={`/knowledge/${article.slug}`}
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
