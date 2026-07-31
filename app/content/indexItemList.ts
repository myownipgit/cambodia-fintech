import { ArticleContent } from './types';

const BASE_URL = 'https://www.camfintech.com';

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
 * ItemList JSON-LD for a content index page. The `articles` list must be
 * in the same order the reader sees on the page; callers should derive it
 * from flattenClustersToOrderedList so visible order and ItemList order
 * cannot drift.
 */
export function buildIndexItemList(
  articles: ArticleContent[],
  indexPath: string,
  indexName: string,
) {
  const url = `${BASE_URL}${indexPath}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${url}#itemlist`,
    url,
    name: indexName,
    numberOfItems: articles.length,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: articles.map((article, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: article.title,
      url: `${BASE_URL}/${article.type}/${article.slug}`,
    })),
  };
}
