import React from 'react';
import './menuitem.css';

export interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The content of the menu item */
  children: React.ReactNode;
  /** Optional leading icon */
  leadingIcon?: React.ReactNode;
  /** Optional trailing content (e.g., shortcut) */
  trailingText?: string;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard MenuItem
 * 
 * A high-performance, accessible menu item for use in menus and dropdowns.
 */
export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  leadingIcon,
  trailingText,
  className,
  ...props
}) => {
  const baseClass = 'paul-menu-item';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <button className={classes} {...props}>
      {leadingIcon && <span className={`${baseClass}__leading-icon`}>{leadingIcon}</span>}
      <span className={`${baseClass}__label`}>{children}</span>
      {trailingText && <span className={`${baseClass}__trailing-text`}>{trailingText}</span>}
    </button>
  );
};

export default MenuItem;
