import React from 'react';
import './search.css';

export interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The size of the search input */
  size?: 'sm' | 'md' | 'lg';
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Search
 * 
 * A high-performance, accessible search input for finding content.
 */
export const Search: React.FC<SearchProps> = ({
  size = 'md',
  className,
  ...props
}) => {
  const baseClass = 'paul-search';
  const classes = [
    baseClass,
    `${baseClass}--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={`${baseClass}__wrapper`}>
      <div className={`${baseClass}__icon`}>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
      <input type="search" className={classes} {...props} />
    </div>
  );
};

export default Search;
