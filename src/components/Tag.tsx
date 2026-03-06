import React from 'react';
import './tag.css';

export interface TagProps {
  /** The label to display in the tag */
  label: string;
  /** The color scheme of the tag */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  /** The size of the tag */
  size?: 'small' | 'medium';
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Tag
 * 
 * A compact, non-interactive tag component for categorization and metadata.
 */
export const Tag: React.FC<TagProps> = ({
  label,
  color = 'default',
  size = 'medium',
  className,
}) => {
  const baseClass = 'paul-tag';
  const classes = [
    baseClass,
    `${baseClass}--${color}`,
    `${baseClass}--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {label}
    </span>
  );
};

export default Tag;
