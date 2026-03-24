export type ContentType = 'learn' | 'knowledge' | 'glossary' | 'insights' | 'use-cases';
export type ContentCluster = 'infrastructure' | 'investment' | 'compliance';
export type SchemaType = 'Article' | 'ScholarlyArticle' | 'DefinedTerm';

export interface FAQ {
  question: string;
  answer: string;
}

export interface ClaimData {
  stat: string;
  source: string;
  year?: string;
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
