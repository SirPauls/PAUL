import React from 'react';
import './breadcrumbs.css';

export interface BreadcrumbItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
  active?: boolean;
}

export interface BreadcrumbsProps {
  /** The breadcrumb items to display */
  items: BreadcrumbItem[];
  /** Custom separator between items */
  separator?: React.ReactNode;
  /** Maximum number of items to show before collapsing */
  maxItems?: number;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Breadcrumbs
 * 
 * A sleek, high-performance breadcrumb component for intuitive site navigation.
 */
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator,
  maxItems = 4,
  className,
}) => {
  const baseClass = 'paul-breadcrumbs';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  const defaultSeparator = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );

  const renderItem = (item: BreadcrumbItem) => (
    <li key={item.id} className={`${baseClass}__item`}>
      {item.href && !item.active ? (
        <a href={item.href} className={`${baseClass}__link`}>
          {item.icon && <span className={`${baseClass}__icon`}>{item.icon}</span>}
          {item.label}
        </a>
      ) : (
        <span className={`${baseClass}__text ${item.active ? `${baseClass}__text--active` : ''}`} aria-current={item.active ? 'page' : undefined}>
          {item.icon && <span className={`${baseClass}__icon`}>{item.icon}</span>}
          {item.label}
        </span>
      )}
    </li>
  );

  const renderCollapsed = () => {
    const firstItem = items[0];
    const lastItem = items[items.length - 1];

    return (
      <>
        {renderItem(firstItem)}
        <li className={`${baseClass}__separator-container`} aria-hidden="true">
          <span className={`${baseClass}__separator`}>
            {separator || defaultSeparator}
          </span>
        </li>
        <li className={`${baseClass}__item`}>
          <button className={`${baseClass}__expand`} aria-label="Show more breadcrumbs">
            ...
          </button>
        </li>
        <li className={`${baseClass}__separator-container`} aria-hidden="true">
          <span className={`${baseClass}__separator`}>
            {separator || defaultSeparator}
          </span>
        </li>
        {renderItem(lastItem)}
      </>
    );
  };

  return (
    <nav className={classes} aria-label="Breadcrumb">
      <ol className={`${baseClass}__list`}>
        {items.length <= maxItems ? (
          items.map((item, index) => (
            <React.Fragment key={item.id}>
              {renderItem(item)}
              {index < items.length - 1 && (
                <li className={`${baseClass}__separator-container`} aria-hidden="true">
                  <span className={`${baseClass}__separator`}>
                    {separator || defaultSeparator}
                  </span>
                </li>
              )}
            </React.Fragment>
          ))
        ) : (
          renderCollapsed()
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
