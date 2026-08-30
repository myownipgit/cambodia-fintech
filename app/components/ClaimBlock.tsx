import { ClaimData } from '@/app/content/types';

export default function ClaimBlock({ stat, source, year, url }: ClaimData) {
  const label = `${source}${year ? `, ${year}` : ''}`;

  return (
    <blockquote className="border-l-4 border-teal bg-card px-4 py-3 my-4 rounded-r-lg">
      <p className="text-navy">
        {stat}
      </p>
      <cite className="text-sm text-navy/60 not-italic">
        {/* Links only when a verified url is supplied; otherwise the citation
            still renders as plain text exactly as before. */}
        — {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4 transition-colors"
          >
            {label}
          </a>
        ) : label}
      </cite>
    </blockquote>
  );
}
