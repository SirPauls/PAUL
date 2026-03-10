import React from 'react';
import './navigation.css';

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  active?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface NavigationProps {
  /** The items to display in the navigation */
  items: NavigationItem[];
  /** The orientation of the navigation */
  orientation?: 'horizontal' | 'vertical';
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Navigation
 * 
 * A flexible navigation component for building menus and navigation bars.
 */
export const Navigation: React.FC<NavigationProps> = ({
  items,
  orientation = 'horizontal',
  className,
}) => {
  const baseClass = 'paul-navigation';
  const classes = [
    baseClass,
    `${baseClass}--${orientation}`,
    className
  ].filter(Boolean).join(' ');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavigationItem) => {
    // Prevent default link behavior in Storybook
    if (item.onClick) {
      item.onClick(e);
    }
    e.preventDefault();
  };

  return (
    <nav className={classes}>
      <ul className={`${baseClass}__list`}>
        {items.map(item => (
          <li key={item.id} className={`${baseClass}__item`}>
            <a 
              href={item.href} 
              className={`${baseClass}__link ${item.active ? 'active' : ''}`}
              aria-current={item.active ? 'page' : undefined}
              onClick={(e) => handleClick(e, item)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
