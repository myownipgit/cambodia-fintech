import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getAllInstruments,
  getInstrumentBySlug,
  getRelatedInstruments,
} from '@/app/content/regulatory/registry';
import { BINDING_KINDS, RegulatoryInstrument } from '@/app/content/regulatory/types';
import { getArticleBySlug } from '@/app/content/registry';
import RegulatoryNotice from '@/app/components/RegulatoryNotice';
import RelatedServices from '@/app/components/RelatedServices';
import { kindLabel, forceLabel, formatIssuedFull } from '../labels';

const BASE_URL = 'https://www.camfintech.com';

interface Props {
  // params is a Promise in Next 16 — declaring it as a plain object typechecks
  // against its own wrong declaration and then serves a 404 body at HTTP 200.
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllInstruments().map((instrument) => ({ slug: instrument.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const instrument = getInstrumentBySlug(slug);
  if (!instrument) return {};

  const name = instrument.number
    ? `${instrument.number} — ${instrument.title}`
    : instrument.title;

  return {
    title: `${name} — Cambodia Regulatory Instruments`,
    description: instrument.summary,
    alternates: { canonical: `/regulatory/${instrument.slug}` },
    openGraph: {
      title: name,
      description: instrument.summary,
      url: `/regulatory/${instrument.slug}`,
      type: 'article',
    },
  };
}

const forceStatus: Partial<Record<RegulatoryInstrument['force'], string>> = {
  'in-force': 'https://schema.org/InForce',
  'partially-in-force': 'https://schema.org/PartiallyInForce',
  superseded: 'https://schema.org/NotInForce',
  draft: 'https://schema.org/NotInForce',
};

/**
 * Binding instruments are emitted as schema.org/Legislation — a real but rarely
 * used type whose vocabulary fits this content exactly, including
 * `PartiallyInForce` for phased commencement. Non-binding instruments (policy,
 * decision) are emitted as CreativeWork and carry no legislationLegalForce,
 * because describing a development policy as "in force" would misdescribe it.
 */
function buildSchema(instrument: RegulatoryInstrument) {
  const url = `${BASE_URL}/regulatory/${instrument.slug}`;
  const isBinding = (BINDING_KINDS as readonly string[]).includes(instrument.kind);

  const node: Record<string, unknown> = {
    '@type': isBinding ? 'Legislation' : 'CreativeWork',
    '@id': `${url}#instrument`,
    name: instrument.title,
    description: instrument.summary,
    url,
    inLanguage: 'en',
    creator: {
      '@type': 'GovernmentOrganization',
      name: instrument.issuer,
    },
  };

  if (isBinding) {
    node.legislationType = kindLabel[instrument.kind];
    node.legislationDate = instrument.issued;
    node.legislationPassedBy = {
      '@type': 'GovernmentOrganization',
      name: instrument.issuer,
    };
    node.legislationJurisdiction = {
      '@type': 'AdministrativeArea',
      name: 'Kingdom of Cambodia',
    };
    if (instrument.number) node.legislationIdentifier = instrument.number;
    const status = forceStatus[instrument.force];
    if (status) node.legislationLegalForce = status;
  } else {
    node.datePublished = instrument.issued;
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: instrument.title,
        isPartOf: { '@id': `${BASE_URL}/#website` },
        dateModified: instrument.asAt,
        inLanguage: 'en',
        publisher: { '@id': `${BASE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CamFinTech', item: BASE_URL },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Regulatory Instruments',
            item: `${BASE_URL}/regulatory`,
          },
          { '@type': 'ListItem', position: 3, name: instrument.title, item: url },
        ],
      },
      node,
    ],
  };
}

function FactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4 py-2 border-b border-line last:border-0">
      <dt className="text-xs font-semibold text-navy/60 uppercase tracking-wider sm:w-40 shrink-0 pt-0.5">
        {label}
      </dt>
      <dd className="text-sm text-navy/85">{children}</dd>
    </div>
  );
}

export default async function InstrumentPage({ params }: Props) {
  const { slug } = await params;
  const instrument = getInstrumentBySlug(slug);
  if (!instrument) notFound();

  const related = getRelatedInstruments(instrument.relatedInstruments);
  const articles = instrument.relatedContent
    .map((s) => getArticleBySlug(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <div className="min-h-screen bg-cloud">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(instrument)) }}
      />

      <nav className="max-w-3xl mx-auto px-4 pt-6 text-sm text-navy/60">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link
              href="/"
              className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4"
            >
              CamFinTech
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/regulatory"
              className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4"
            >
              Regulatory Instruments
            </Link>
          </li>
          <li>/</li>
          <li className="text-navy">{instrument.number ?? instrument.title}</li>
        </ol>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-8">
        <header className="mb-8">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-teal/10 text-navy rounded mb-3">
            {kindLabel[instrument.kind]}
          </span>
          {instrument.number && (
            <p className="font-mono text-sm text-navy/70 mb-1">{instrument.number}</p>
          )}
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4 leading-tight">
            {instrument.title}
          </h1>
          {instrument.titleKh && (
            <p className="font-khmer text-lg text-navy/70 mb-4">{instrument.titleKh}</p>
          )}
          <p className="text-lg text-navy/80 leading-relaxed font-medium">
            {instrument.summary}
          </p>
        </header>

        <RegulatoryNotice />

        <section className="mb-8 p-5 bg-card rounded-xl border border-line">
          <dl>
            <FactRow label="Issuer">{instrument.issuer}</FactRow>
            <FactRow label="Issued">{formatIssuedFull(instrument.issued)}</FactRow>
            {instrument.effective && (
              <FactRow label="Effective">{formatIssuedFull(instrument.effective)}</FactRow>
            )}
            <FactRow label="Legal force">
              {forceLabel[instrument.force]}
              {instrument.forceNote && (
                <span className="block text-navy/70 mt-1">{instrument.forceNote}</span>
              )}
            </FactRow>
            <FactRow label="Sectors">{instrument.sectors.join(' · ')}</FactRow>
            <FactRow label="Verified">
              <time dateTime={instrument.asAt}>{formatIssuedFull(instrument.asAt)}</time>
            </FactRow>
          </dl>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-navy mb-3">Who it binds</h2>
          <p className="text-navy/80 leading-relaxed">{instrument.binds}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-navy mb-3">What it requires</h2>
          <ul className="space-y-2">
            {instrument.requires.map((item, i) => (
              <li key={i} className="text-navy/80 leading-relaxed pl-4 border-l-2 border-line">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-navy mb-3">What it does not cover</h2>
          <p className="text-sm text-navy/60 mb-3">
            The limits of an instrument decide whether it applies to you, and are
            rarely published. These are stated from the instrument itself.
          </p>
          <ul className="space-y-2">
            {instrument.doesNotCover.map((item, i) => (
              <li key={i} className="text-navy/80 leading-relaxed pl-4 border-l-2 border-teal/40">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-navy mb-3">Sources</h2>
          <ul className="space-y-3">
            {instrument.sources.map((source) => (
              <li key={source.url} className="text-sm">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy font-medium hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4"
                >
                  {source.label}
                </a>
                <span className="block text-navy/60 mt-0.5">
                  {source.publisher} ·{' '}
                  {source.tier === 'primary'
                    ? 'primary source'
                    : 'professional legal commentary'}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {(related.length > 0 || articles.length > 0) && (
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-navy mb-3">Related</h2>
            <ul className="space-y-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/regulatory/${r.slug}`}
                    className="text-navy/80 hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4"
                  >
                    {r.number ? `${r.number} — ${r.title}` : r.title}
                  </Link>
                </li>
              ))}
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/${a.type}/${a.slug}`}
                    className="text-navy/80 hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4"
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <RelatedServices />

        <div className="mt-8 pt-6 border-t border-line">
          <Link href="/regulatory" className="text-navy hover:underline text-sm">
            &larr; All regulatory instruments
          </Link>
        </div>
      </article>
    </div>
  );
}
