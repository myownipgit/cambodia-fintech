import Link from 'next/link';
import { ArticleContent } from '@/app/content/types';
import ClaimBlock from './ClaimBlock';
import DataTable from './DataTable';
import FAQSection from './FAQSection';
import RelatedServices from './RelatedServices';
import RelatedReading from './RelatedReading';
import ScenarioNotice from './ScenarioNotice';
import { getArticleBySlug } from '@/app/content/registry';
import { getRelatedInstruments } from '@/app/content/regulatory/registry';

const BASE_URL = 'https://www.camfintech.com';

// Section names, used for breadcrumbs and the "All … articles" back link.
// `use-cases` keeps its URL segment — the three legacy /use-cases/* URLs are
// being recovered and a rename would cost their equity — but is LABELLED
// "Engagement Scenarios" everywhere a reader sees it, because the section holds
// illustrative scoping documents rather than delivery history. Do not relabel it
// back to "Use Cases": the label is half of the integrity guardrail, the other
// half being ScenarioNotice.
const typeLabels = {
  learn: 'Learn',
  knowledge: 'Knowledge Base',
  glossary: 'Glossary',
  insights: 'Insights',
  'use-cases': 'Engagement Scenarios',
};

// The header pill names the individual item, not the section, so it reads in
// the singular. Only use-cases differs from its section label.
const badgeLabels: Record<keyof typeof typeLabels, string> = {
  ...typeLabels,
  'use-cases': 'Scenario',
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

  const instruments = getRelatedInstruments(article.relatedInstruments ?? []);

  return (
    <div className="min-h-screen bg-cloud">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Breadcrumbs */}
      <nav className="max-w-3xl mx-auto px-4 pt-6 text-sm text-navy/60">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4">CamFinTech</Link></li>
          <li>/</li>
          <li>
            <a href={`/${article.type}`} className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4">
              {typeLabels[article.type]}
            </a>
          </li>
          <li>/</li>
          <li className="text-navy">{article.title}</li>
        </ol>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-teal/10 text-navy rounded mb-3">
            {badgeLabels[article.type]}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4 leading-tight">
            {article.title}
          </h1>
          <p className="text-lg text-navy/80 leading-relaxed font-medium">
            {article.lead}
          </p>
          <div className="flex flex-wrap items-center gap-x-2 mt-4 text-xs text-navy/50">
            <span>Updated {new Date(article.updatedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime} min read</span>
          </div>
        </header>

        {/* Scenario disclosure — structural, not prose. See ScenarioNotice. */}
        {article.type === 'use-cases' && <ScenarioNotice />}

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
            <h2 className="text-xl font-semibold text-navy mb-3">
              {section.heading}
            </h2>
            <div className="text-navy/80 leading-relaxed whitespace-pre-line">
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

        {/* The instruments this article discusses, where it names any. Sends a
            reader from our description of a rule to the rule itself. */}
        {instruments.length > 0 && (
          <section className="my-8">
            <h2 className="text-lg font-semibold text-navy mb-3">Regulatory instruments</h2>
            <ul className="space-y-2">
              {instruments.map((instrument) => (
                <li key={instrument.slug}>
                  <Link
                    href={`/regulatory/${instrument.slug}`}
                    className="text-navy/80 hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4"
                  >
                    {instrument.number
                      ? `${instrument.number} — ${instrument.title}`
                      : instrument.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <RelatedServices />

        {/* Back link */}
        <div className="mt-8 pt-6 border-t border-line">
          <a href={`/${article.type}`} className="text-navy hover:underline text-sm">
            &larr; All {typeLabels[article.type]} articles
          </a>
        </div>
      </article>
    </div>
  );
}
