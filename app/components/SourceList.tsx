import type { ArticleSource } from '@/app/content/types';

/**
 * Renders official sources relevant to an article, as outbound links.
 *
 * Deliberately plain. The value here is that the links exist, resolve, and
 * declare whether they go to the issuer or to commentary — not that the block
 * looks impressive. Pages with no relevant source render nothing at all.
 */
export default function SourceList({
  sources,
  asAt,
}: {
  sources: ArticleSource[];
  asAt?: string;
}) {
  if (sources.length === 0) return null;

  return (
    <section className="my-8">
      <h2 className="text-lg font-semibold text-navy mb-3">Official sources</h2>
      <ul className="space-y-2">
        {sources.map((source) => (
          <li key={source.url} className="text-navy/80">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-line underline-offset-4 hover:decoration-teal hover:decoration-2"
            >
              {source.publisher} — {source.label}
            </a>
            {source.tier === 'commentary' && (
              <span className="ml-2 text-xs uppercase tracking-wide text-slate">
                commentary
              </span>
            )}
          </li>
        ))}
      </ul>
      {asAt && (
        <p className="mt-3 text-sm text-slate">
          Links last checked on {asAt}. Home pages are starting points, not citations for a specific statement on this page.
        </p>
      )}
    </section>
  );
}
