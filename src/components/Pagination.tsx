import React from 'react';
import './pagination.css';

export interface PaginationProps {
  /** The current page number */
  currentPage: number;
  /** The total number of pages */
  totalPages: number;
  /** Callback for when the page changes */
  onPageChange: (page: number) => void;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Pagination
 * 
 * A component for navigating through pages of content.
 */
export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  const baseClass = 'paul-pagination';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={classes} aria-label="Pagination">
      <ul className={`${baseClass}__list`}>
        <li className={`${baseClass}__item`}>
          <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
        </li>
        {pageNumbers.map(page => (
          <li key={page} className={`${baseClass}__item`}>
            <button 
              onClick={() => onPageChange(page)} 
              className={currentPage === page ? 'active' : ''}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          </li>
        ))}
        <li className={`${baseClass}__item`}>
          <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>&gt;</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
