import React from 'react';
import './tag.css';

export interface TagProps {
  /** The content of the tag */
  children: React.ReactNode;
  /** The visual style of the tag */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Tag
 * 
 * A component for labeling and categorizing content.
 */
export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'default',
  className,
}) => {
  const baseClass = 'paul-tag';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Tag;
