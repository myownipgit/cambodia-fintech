import { ClaimData } from '@/app/content/types';

export default function ClaimBlock({ stat, source, year }: ClaimData) {
  return (
    <blockquote className="border-l-4 border-primary bg-card-light dark:bg-card-dark px-4 py-3 my-4 rounded-r-lg">
      <p className="text-text-light dark:text-text-dark">
        {stat}
      </p>
      <cite className="text-sm text-text-light/60 dark:text-text-dark/60 not-italic">
        — {source}{year ? `, ${year}` : ''}
      </cite>
    </blockquote>
  );
}
