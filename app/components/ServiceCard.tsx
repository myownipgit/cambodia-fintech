import type { ServiceCardProps } from "../types";

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="rounded-xl border border-line bg-card p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-navy/80">{description}</p>
    </div>
  );
}
