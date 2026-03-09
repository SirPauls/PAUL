import React from 'react';
import './sidebar.css';

export interface SidebarProps {
  /** The content of the sidebar */
  children: React.ReactNode;
  /** The position of the sidebar */
  position?: 'left' | 'right';
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Sidebar
 * 
 * A flexible sidebar component for navigation and content.
 */
export const Sidebar: React.FC<SidebarProps> = ({
  children,
  position = 'left',
  className,
}) => {
  const baseClass = 'paul-sidebar';
  const classes = [
    baseClass,
    `${baseClass}--${position}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <aside className={classes}>
      {children}
    </aside>
  );
};

export default Sidebar;
