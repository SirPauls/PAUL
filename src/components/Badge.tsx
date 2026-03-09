import React from 'react';
import './badge.css';

export interface BadgeProps {
  /** The content of the badge */
  children?: React.ReactNode;
  /** Optional leading element */
  leadingElement?: React.ReactNode;
  /** Optional trailing element */
  trailingElement?: React.ReactNode;
  /** The visual style of the badge */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  /** The size of the badge */
  size?: 'sm' | 'md';
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
  leadingElement,
  trailingElement,
  variant = 'default',
  size = 'md',
  className,
}) => {
  const baseClass = 'paul-badge';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {leadingElement && <span className={`${baseClass}__leading`}>{leadingElement}</span>}
      {children && <span className={`${baseClass}__text`}>{children}</span>}
      {trailingElement && <span className={`${baseClass}__trailing`}>{trailingElement}</span>}
    </span>
  );
};

export default Badge;
