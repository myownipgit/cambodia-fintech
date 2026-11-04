export type ContentType = 'learn' | 'knowledge' | 'glossary' | 'insights' | 'use-cases';
export type ContentCluster = 'infrastructure' | 'investment' | 'compliance';
export type SchemaType = 'Article' | 'TechArticle' | 'ScholarlyArticle' | 'DefinedTerm';

export interface FAQ {
  question: string;
  answer: string;
}

export interface ClaimData {
  stat: string;
  source: string;
  year?: string;
  /**
   * Optional link to the cited source. Omit rather than guess — an unlinked
   * citation renders as plain text, which is preferable to a dead or
   * approximate link on a site whose positioning rests on honesty discipline.
   */
  url?: string;
}

/**
 * Mirrors app/content/regulatory/types.ts InstrumentSource deliberately.
 *
 * The /regulatory section has had an absolute evidence bar since R1 and the
 * article corpus has not; this is the article-side half of that bar. A source
 * goes in this array only when the URL was fetched and its content confirmed to
 * be what the label says. A 200 is not enough: single-page sites return 200 for
 * any path. A home page is labelled as one. `tier` is not decoration — a reader
 * deciding whether to act on a page needs to know whether they are being sent
 * to the issuer or to someone's reading of the issuer.
 *
 * This is a reading list, not a citation apparatus: it does not show that the
 * source supports each statement on the page. A specific numeric assertion still belongs in `claims`, which carries its
 * own optional url. Do not move claims here to make a page look better sourced.
 */
export interface ArticleSource {
  /** Who published it — 'National Bank of Cambodia', 'Techo Startup Center', … */
  publisher: string;
  /** What the link actually goes to, e.g. 'Bakong White Paper (PDF)'. */
  label: string;
  url: string;
  tier: 'primary' | 'commentary';
}

export interface ArticleMeta {
  slug: string;
  title: string;
  titleKm?: string;
  description: string;
  type: ContentType;
  cluster: ContentCluster;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  schema: SchemaType;
  relatedSlugs: string[];
  /**
   * Slugs into the regulatory instrument registry.
   *
   * Instruments already point back at articles via their own `relatedContent`;
   * this is the return direction, so an article that discusses licensing can
   * send a reader to the instrument itself. Optional — most articles have no
   * instrument to name, and a link that is not earned is noise.
   */
  relatedInstruments?: string[];
  /**
   * Official sources relevant to this page. Optional, and deliberately so: a page
   * with no relevant source gets no block rather than a padded one. Primary
   * sources first.
   */
  sources?: ArticleSource[];
  /** Date every url in `sources` was last fetched and confirmed. */
  sourcesAsAt?: string;
  faqs: FAQ[];
  claims: ClaimData[];
}

export interface ArticleContent extends ArticleMeta {
  lead: string;
  leadKm?: string;
  sections: ArticleSection[];
}

export interface ArticleSection {
  heading: string;
  headingKm?: string;
  content: string;
  contentKm?: string;
  table?: TableData;
}

export interface TableData {
  caption: string;
  headers: string[];
  rows: string[][];
}
