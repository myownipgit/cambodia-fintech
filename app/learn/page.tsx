import Link from 'next/link';
import { Metadata } from 'next';
import { getArticlesByType } from '@/app/content/registry';
import { flattenClustersToOrderedList, buildIndexItemList } from '@/app/content/indexItemList';

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

  const itemListSchema = buildIndexItemList(
    flattenClustersToOrderedList(clusters),
    '/learn',
    'Learn About Cambodia FinTech',
  );

  return (
    <div className="min-h-screen bg-cloud">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <nav className="max-w-3xl mx-auto px-4 pt-6 text-sm text-navy/60">
        <Link href="/" className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4">CamFinTech</Link> / Learn
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          Learn About Cambodia FinTech
        </h1>
        <p className="text-lg text-navy/80 mb-8">
          Practical guides answering the most common questions about Cambodia&apos;s digital financial ecosystem, from Bakong payment integration to CamInvoice compliance requirements.
        </p>

        {(Object.entries(clusters) as [keyof typeof clusterLabels, typeof articles][]).map(([key, items]) => (
          items.length > 0 && (
            <section key={key} className="mb-10">
              <h2 className="text-xl font-semibold text-navy mb-4">{clusterLabels[key]}</h2>
              <div className="space-y-3">
                {items.map((article) => (
                  <a
                    key={article.slug}
                    href={`/learn/${article.slug}`}
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
