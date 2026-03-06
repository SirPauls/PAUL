import React from 'react';
import './pagination.css';

export interface PaginationProps {
  /** The current active page */
  currentPage: number;
  /** The total number of pages */
  totalPages: number;
  /** Callback for when a page is changed */
  onPageChange: (page: number) => void;
  /** Whether the pagination is disabled */
  disabled?: boolean;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Pagination
 * 
 * A clean, accessible pagination component for navigating large datasets.
 */
export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  disabled = false,
  className,
}) => {
  const baseClass = 'paul-pagination';
  const classes = [
    baseClass,
    disabled && `${baseClass}--disabled`,
    className
  ].filter(Boolean).join(' ');

  const handlePageClick = (page: number) => {
    if (disabled || page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={[
            `${baseClass}__item`,
            i === currentPage && `${baseClass}__item--active`
          ].filter(Boolean).join(' ')}
          onClick={() => handlePageClick(i)}
          disabled={disabled}
          aria-current={i === currentPage ? 'page' : undefined}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <nav className={classes} aria-label="Pagination Navigation">
      <ul className={`${baseClass}__list`}>
        <li className={`${baseClass}__list-item`}>
          <button
            className={`${baseClass}__item ${baseClass}__item--prev`}
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={disabled || currentPage === 1}
            aria-label="Previous Page"
          >
            ‹
          </button>
        </li>
        {renderPageNumbers()}
        <li className={`${baseClass}__list-item`}>
          <button
            className={`${baseClass}__item ${baseClass}__item--next`}
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={disabled || currentPage === totalPages}
            aria-label="Next Page"
          >
            ›
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
