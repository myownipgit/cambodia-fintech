import { TableData } from '@/app/content/types';

export default function DataTable({ caption, headers, rows }: TableData) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <caption className="text-left text-xs text-navy/60 mb-2">
          {caption}
        </caption>
        <thead>
          <tr className="border-b-2 border-teal/30">
            {headers.map((header, i) => (
              <th
                key={i}
                scope="col"
                className="text-left px-3 py-2 font-semibold text-navy bg-card"
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
              className="border-b border-line hover:bg-teal/5"
            >
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2 text-navy">
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
