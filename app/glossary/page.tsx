import { Metadata } from 'next';
import { getArticlesByType } from '@/app/content/registry';

export const metadata: Metadata = {
  title: 'Cambodia FinTech Glossary — CamFinTech',
  description: 'Definitions of key terms in Cambodia\'s digital financial infrastructure: Bakong, CamDigiKey, CamDX, CamInvoice, KHQR, Government-as-a-Platform, and more.',
  alternates: { canonical: '/glossary' },
};

export default function GlossaryIndex() {
  const articles = getArticlesByType('glossary');

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
        <a href="/" className="hover:text-primary">CamFinTech</a> / Glossary
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">
          Cambodia FinTech Glossary
        </h1>
        <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-8">
          Key terms and definitions for Cambodia&apos;s digital financial infrastructure, covering the Government-as-a-Platform (GaaP) model, payment systems, digital identity, and regulatory frameworks.
        </p>

        {(Object.entries(clusters) as [keyof typeof clusterLabels, typeof articles][]).map(([key, items]) => (
          items.length > 0 && (
            <section key={key} className="mb-10">
              <h2 className="text-xl font-semibold text-primary mb-4">{clusterLabels[key]}</h2>
              <div className="space-y-3">
                {items.map((article) => (
                  <a
                    key={article.slug}
                    href={`/glossary/${article.slug}`}
                    className="block p-4 bg-card-light dark:bg-card-dark rounded-lg border border-border-light dark:border-border-dark hover:border-primary transition-colors"
                  >
                    <h3 className="font-medium text-text-light dark:text-text-dark">{article.title}</h3>
                    <p className="text-sm text-text-light/60 dark:text-text-dark/60 mt-1">{article.description}</p>
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
