import type { UseCaseCardProps } from "../types";

export default function UseCaseCard({ title, challenge, solution, impact }: UseCaseCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-line bg-card p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex flex-col gap-2">
        <p>
          <strong className="text-navy">Challenge:</strong> {challenge}
        </p>
        <p>
          <strong className="text-navy">Solution:</strong> {solution}
        </p>
        <p>
          <strong className="text-navy">Impact:</strong> {impact}
        </p>
      </div>
    </div>
  );
}
