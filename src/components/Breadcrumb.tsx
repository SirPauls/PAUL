import React from 'react';
import './breadcrumb.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

export interface BreadcrumbProps {
  /** The items to display in the breadcrumb */
  items: BreadcrumbItem[];
  /** Custom separator between items */
  separator?: React.ReactNode;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Breadcrumb
 * 
 * A clean, accessible breadcrumb component for intuitive navigation hierarchy.
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = '/',
  className,
}) => {
  const baseClass = 'paul-breadcrumb';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <nav className={classes} aria-label="Breadcrumb">
      <ol className={`${baseClass}__list`}>
        {items.map((item, index) => (
          <li key={index} className={`${baseClass}__item`}>
            {item.href && !item.isCurrent ? (
              <a href={item.href} className={`${baseClass}__link`}>
                {item.label}
              </a>
            ) : (
              <span 
                className={`${baseClass}__text`} 
                aria-current={item.isCurrent ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <span className={`${baseClass}__separator`} aria-hidden="true">
                {separator}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
