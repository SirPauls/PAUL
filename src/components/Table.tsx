import React from 'react';
import './table.css';

export interface TableColumn {
  key: string;
  header: string;
  width?: string | number;
}

export interface TableProps {
  /** The columns to display in the table */
  columns: TableColumn[];
  /** The data to display in the rows */
  data: Record<string, React.ReactNode>[];
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Table
 * 
 * A clean, high-performance table component for structured data presentation.
 */
export const Table: React.FC<TableProps> = ({
  columns,
  data,
  className,
}) => {
  const baseClass = 'paul-table';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={`${baseClass}__wrapper`}>
      <table className={classes}>
        <thead className={`${baseClass}__thead`}>
          <tr className={`${baseClass}__row`}>
            {columns.map((col) => (
              <th 
                key={col.key} 
                className={`${baseClass}__header`}
                style={{ width: col.width }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={`${baseClass}__tbody`}>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={`${baseClass}__row`}>
              {columns.map((col) => (
                <td key={col.key} className={`${baseClass}__cell`}>
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
