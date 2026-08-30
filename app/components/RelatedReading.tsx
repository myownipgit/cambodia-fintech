import { ContentType } from '@/app/content/types';

interface RelatedLink {
  slug: string;
  title: string;
  type: ContentType;
}

const typeLabels: Record<ContentType, string> = {
  learn: 'Learn',
  knowledge: 'Knowledge Base',
  glossary: 'Glossary',
  insights: 'Insights',
  'use-cases': 'Use Cases',
};

export default function RelatedReading({ links }: { links: RelatedLink[] }) {
  if (links.length === 0) return null;

  return (
    <section className="my-8">
      <h2 className="text-lg font-semibold text-navy mb-3">
        Related Reading
      </h2>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.slug}>
            <a
              href={`/${link.type}/${link.slug}`}
              className="flex items-center gap-2 text-navy/80 hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4 transition-colors"
            >
              <span className="material-symbols-outlined text-teal text-lg" aria-hidden="true">article</span>
              <span>{link.title}</span>
              <span className="text-xs text-navy/40">
                {typeLabels[link.type]}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
