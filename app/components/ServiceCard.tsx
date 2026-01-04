import type { ServiceCardProps } from "../types";

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-text-light/80 dark:text-text-dark/80">{description}</p>
    </div>
  );
}
