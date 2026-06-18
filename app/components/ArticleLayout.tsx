import { ArticleContent } from '@/app/content/types';
import ClaimBlock from './ClaimBlock';
import DataTable from './DataTable';
import FAQSection from './FAQSection';
import RelatedServices from './RelatedServices';
import RelatedReading from './RelatedReading';
import { getArticleBySlug } from '@/app/content/registry';

const BASE_URL = 'https://www.camfintech.com';

const typeLabels = {
  learn: 'Learn',
  knowledge: 'Knowledge Base',
  glossary: 'Glossary',
  insights: 'Insights',
  'use-cases': 'Use Cases',
};

function buildSchema(article: ArticleContent) {
  const url = `${BASE_URL}/${article.type}/${article.slug}`;

  // Per-page WebPage node closes audit C2 (WebPage @id collapse) for content pages.
  const webPageNode = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: article.title,
    isPartOf: { '@id': `${BASE_URL}/#website` },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    inLanguage: 'en',
  };

  // BreadcrumbList closes audit H3 across every deep page.
  const typeLabel = typeLabels[article.type];
  const breadcrumbNode = {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'CamFinTech',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: typeLabel,
        item: `${BASE_URL}/${article.type}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: url,
      },
    ],
  };

  if (article.schema === 'DefinedTerm') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        webPageNode,
        breadcrumbNode,
        {
          '@type': 'DefinedTerm',
          '@id': `${url}#term`,
          name: article.title,
          description: article.lead,
          url,
          inDefinedTermSet: {
            '@type': 'DefinedTermSet',
            name: 'CamFinTech Glossary',
            url: `${BASE_URL}/glossary`,
          },
        },
      ],
    };
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      webPageNode,
      breadcrumbNode,
      {
        '@type': article.schema,
        '@id': `${url}#article`,
        headline: article.title,
        description: article.description,
        url,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        // Author flip Org → Person (closes audit H2). Person node defined globally in JsonLd.tsx.
        author: { '@id': `${BASE_URL}/about#person` },
        publisher: { '@id': `${BASE_URL}/#organization` },
        isPartOf: { '@id': `${BASE_URL}/#website` },
        inLanguage: 'en',
        mainEntityOfPage: { '@id': `${url}#webpage` },
      },
    ],
  };
}

export default function ArticleLayout({ article }: { article: ArticleContent }) {
  const pageUrl = `${BASE_URL}/${article.type}/${article.slug}`;
  const schema = buildSchema(article);

  const relatedLinks = article.relatedSlugs
    .map((slug) => {
      const related = getArticleBySlug(slug);
      if (!related) return null;
      return { slug: related.slug, title: related.title, type: related.type };
    })
    .filter(Boolean) as { slug: string; title: string; type: typeof article.type }[];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Breadcrumbs */}
      <nav className="max-w-3xl mx-auto px-4 pt-6 text-sm text-text-light/60 dark:text-text-dark/60">
        <ol className="flex items-center gap-1">
          <li><a href="/" className="hover:text-primary">CamFinTech</a></li>
          <li>/</li>
          <li>
            <a href={`/${article.type}`} className="hover:text-primary">
              {typeLabels[article.type]}
            </a>
          </li>
          <li>/</li>
          <li className="text-text-light dark:text-text-dark">{article.title}</li>
        </ol>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded mb-3">
            {typeLabels[article.type]}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4 leading-tight">
            {article.title}
          </h1>
          <p className="text-lg text-text-light/80 dark:text-text-dark/80 leading-relaxed font-medium">
            {article.lead}
          </p>
          <div className="flex flex-wrap items-center gap-x-2 mt-4 text-xs text-text-light/50 dark:text-text-dark/50">
            <span>Updated {new Date(article.updatedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime} min read</span>
          </div>
        </header>

        {/* Claims at top */}
        {article.claims.length > 0 && (
          <div className="mb-8">
            {article.claims.slice(0, 2).map((claim, i) => (
              <ClaimBlock key={i} {...claim} />
            ))}
          </div>
        )}

        {/* Sections */}
        {article.sections.map((section, i) => (
          <section key={i} className="mb-8" id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
            <h2 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
              {section.heading}
            </h2>
            <div className="text-text-light/80 dark:text-text-dark/80 leading-relaxed whitespace-pre-line">
              {section.content}
            </div>
            {section.table && <DataTable {...section.table} />}
          </section>
        ))}

        {/* Remaining claims */}
        {article.claims.length > 2 && (
          <div className="mb-8">
            {article.claims.slice(2).map((claim, i) => (
              <ClaimBlock key={i} {...claim} />
            ))}
          </div>
        )}

        {/* FAQ */}
        {article.faqs.length > 0 && (
          <FAQSection faqs={article.faqs} pageUrl={pageUrl} />
        )}

        {/* Related */}
        <RelatedReading links={relatedLinks} />
        <RelatedServices />

        {/* Back link */}
        <div className="mt-8 pt-6 border-t border-border-light dark:border-border-dark">
          <a href={`/${article.type}`} className="text-primary hover:underline text-sm">
            &larr; All {typeLabels[article.type]} articles
          </a>
        </div>
      </article>
    </div>
  );
}
