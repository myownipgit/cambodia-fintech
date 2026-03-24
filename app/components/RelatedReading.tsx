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
      <h2 className="text-lg font-semibold text-text-light dark:text-text-dark mb-3">
        Related Reading
      </h2>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.slug}>
            <a
              href={`/${link.type}/${link.slug}`}
              className="flex items-center gap-2 text-text-light/80 dark:text-text-dark/80 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-primary text-lg">article</span>
              <span>{link.title}</span>
              <span className="text-xs text-text-light/40 dark:text-text-dark/40">
                {typeLabels[link.type]}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
