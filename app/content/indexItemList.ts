import { ArticleContent } from './types';

const BASE_URL = 'https://www.camfintech.com';

interface ListItemSchema {
  '@type': 'ListItem';
  position: number;
  name: string;
  url: string;
}

interface ItemListSchema {
  '@context': 'https://schema.org';
  '@type': 'ItemList';
  '@id': string;
  url: string;
  name: string;
  inLanguage: string;
  numberOfItems: number;
  itemListElement: ListItemSchema[];
}

/**
 * Flatten a clustered article map into the visible page order. Object.keys
 * preserves insertion order for non-integer string keys, so the resulting
 * list matches the sequence a reader sees when scrolling the index page —
 * which the ItemList JSON-LD's `position` field must reflect.
 */
export function flattenClustersToOrderedList(
  clusters: Record<string, ArticleContent[]>,
): ArticleContent[] {
  return Object.keys(clusters).flatMap((key) => clusters[key] ?? []);
}

/**
 * ItemList JSON-LD for a content index page.
 *
 * `articles` must be in the same order the reader sees on the page — derive
 * from flattenClustersToOrderedList so visible order and ItemList order cannot
 * drift.
 *
 * `indexPath` is the source of truth for both the ItemList URL and each item
 * URL. Every article's `type` must match indexPath (e.g. indexPath '/glossary'
 * requires every article.type === 'glossary'); mismatches throw at build time
 * to prevent emitting an ItemList that claims to be about one route while
 * listing items under another.
 *
 * `itemListOrder` is deliberately omitted: the visible order is cluster-grouped
 * (not ascending on any key), so no schema.org order enum accurately describes
 * it. Per schema.org, absence of `itemListOrder` means no ordering claim.
 */
export function buildIndexItemList(
  articles: ArticleContent[],
  indexPath: string,
  indexName: string,
): ItemListSchema {
  const expectedType = indexPath.replace(/^\//, '');
  const mismatched = articles.filter((a) => a.type !== expectedType);
  if (mismatched.length > 0) {
    throw new Error(
      `buildIndexItemList(indexPath="${indexPath}"): expected every article.type ` +
        `to equal "${expectedType}", but ${mismatched.length} did not: ` +
        mismatched.map((a) => `${a.slug} (type: ${a.type})`).join(', '),
    );
  }

  const url = `${BASE_URL}${indexPath}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${url}#itemlist`,
    url,
    name: indexName,
    inLanguage: 'en',
    numberOfItems: articles.length,
    itemListElement: articles.map((article, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: article.title,
      url: `${url}/${article.slug}`,
    })),
  };
}
