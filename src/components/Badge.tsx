import React from 'react';
import './badge.css';

export interface BadgeProps {
  /** The content of the badge */
  children: React.ReactNode;
  /** The visual style of the badge */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  /** The size of the badge */
  size?: 'small' | 'medium' | 'large';
  /** The shape of the badge */
  shape?: 'rounded' | 'pill' | 'square';
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Badge
 * 
 * A sleek, versatile badge component for displaying status or metadata.
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  shape = 'pill',
  className,
}) => {
  const baseClass = 'paul-badge';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--${size}`,
    `${baseClass}--${shape}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Badge;
