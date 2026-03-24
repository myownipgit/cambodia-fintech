import { TableData } from '@/app/content/types';

export default function DataTable({ caption, headers, rows }: TableData) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <caption className="text-left text-xs text-text-light/60 dark:text-text-dark/60 mb-2">
          {caption}
        </caption>
        <thead>
          <tr className="border-b-2 border-primary/30">
            {headers.map((header, i) => (
              <th
                key={i}
                scope="col"
                className="text-left px-3 py-2 font-semibold text-text-light dark:text-text-dark bg-card-light dark:bg-card-dark"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border-light dark:border-border-dark hover:bg-primary/5"
            >
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2 text-text-light dark:text-text-dark">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
