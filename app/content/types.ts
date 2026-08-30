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
