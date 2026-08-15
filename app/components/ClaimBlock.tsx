import { ClaimData } from '@/app/content/types';

export default function ClaimBlock({ stat, source, year, url }: ClaimData) {
  const label = `${source}${year ? `, ${year}` : ''}`;

  return (
    <blockquote className="border-l-4 border-primary bg-card-light dark:bg-card-dark px-4 py-3 my-4 rounded-r-lg">
      <p className="text-text-light dark:text-text-dark">
        {stat}
      </p>
      <cite className="text-sm text-text-light/60 dark:text-text-dark/60 not-italic">
        {/* Links only when a verified url is supplied; otherwise the citation
            still renders as plain text exactly as before. */}
        — {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-primary transition-colors"
          >
            {label}
          </a>
        ) : label}
      </cite>
    </blockquote>
  );
}
