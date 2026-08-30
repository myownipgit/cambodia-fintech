import Link from 'next/link';
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
    <div className="min-h-screen bg-cloud">
      <nav className="max-w-3xl mx-auto px-4 pt-6 text-sm text-navy/60">
        <Link href="/" className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4">CamFinTech</Link> / Knowledge Base
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          Knowledge Base
        </h1>
        <p className="text-lg text-navy/80 mb-8">
          Comprehensive technical documentation on Cambodia&apos;s Government-as-a-Platform architecture, payment systems, regulatory frameworks, and strategic investment opportunities in the FinTech ecosystem.
        </p>

        {(Object.entries(clusters) as [keyof typeof clusterLabels, typeof articles][]).map(([key, items]) => (
          items.length > 0 && (
            <section key={key} className="mb-10">
              <h2 className="text-xl font-semibold text-navy mb-4">{clusterLabels[key]}</h2>
              <div className="space-y-3">
                {items.map((article) => (
                  <a
                    key={article.slug}
                    href={`/knowledge/${article.slug}`}
                    className="block p-4 bg-card rounded-lg border border-line hover:border-teal transition-colors"
                  >
                    <h3 className="font-medium text-navy">{article.title}</h3>
                    <p className="text-sm text-navy/60 mt-1">{article.description}</p>
                    <span className="text-xs text-navy/40 mt-2 inline-block">{article.readingTime} min read</span>
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
