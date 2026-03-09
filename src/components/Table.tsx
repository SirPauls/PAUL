import React from 'react';
import './table.css';

export interface TableColumn {
  key: string;
  title: string;
}

export interface TableProps {
  /** The columns of the table */
  columns: TableColumn[];
  /** The data for the table */
  data: Record<string, React.ReactNode>[];
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Table
 * 
 * A component for displaying data in a tabular format.
 */
export const Table: React.FC<TableProps> = ({
  columns,
  data,
  className,
}) => {
  const baseClass = 'paul-table';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <table className={classes}>
      <thead>
        <tr>
          {columns.map(col => <th key={col.key}>{col.title}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map(col => <td key={col.key}>{row[col.key]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
