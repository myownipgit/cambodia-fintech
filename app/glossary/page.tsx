import Link from 'next/link';
import { Metadata } from 'next';
import { getArticlesByType } from '@/app/content/registry';
import { flattenClustersToOrderedList, buildIndexItemList } from '@/app/content/indexItemList';

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

  const itemListSchema = buildIndexItemList(
    flattenClustersToOrderedList(clusters),
    '/glossary',
    'Cambodia FinTech Glossary',
  );

  return (
    <div className="min-h-screen bg-cloud">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <nav className="max-w-3xl mx-auto px-4 pt-6 text-sm text-navy/60">
        <Link href="/" className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4">CamFinTech</Link> / Glossary
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          Cambodia FinTech Glossary
        </h1>
        <p className="text-lg text-navy/80 mb-8">
          Key terms and definitions for Cambodia&apos;s digital financial infrastructure, covering the Government-as-a-Platform (GaaP) model, payment systems, digital identity, and regulatory frameworks.
        </p>

        {(Object.entries(clusters) as [keyof typeof clusterLabels, typeof articles][]).map(([key, items]) => (
          items.length > 0 && (
            <section key={key} className="mb-10">
              <h2 className="text-xl font-semibold text-navy mb-4">{clusterLabels[key]}</h2>
              <div className="space-y-3">
                {items.map((article) => (
                  <a
                    key={article.slug}
                    href={`/glossary/${article.slug}`}
                    className="block p-4 bg-card rounded-lg border border-line hover:border-teal transition-colors"
                  >
                    <h3 className="font-medium text-navy">{article.title}</h3>
                    <p className="text-sm text-navy/60 mt-1">{article.description}</p>
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
