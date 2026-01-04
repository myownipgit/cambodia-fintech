import type { UseCaseCardProps } from "../types";

export default function UseCaseCard({ title, challenge, solution, impact }: UseCaseCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex flex-col gap-2">
        <p>
          <strong className="text-primary">Challenge:</strong> {challenge}
        </p>
        <p>
          <strong className="text-primary">Solution:</strong> {solution}
        </p>
        <p>
          <strong className="text-primary">Impact:</strong> {impact}
        </p>
      </div>
    </div>
  );
}
