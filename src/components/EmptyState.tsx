import React from 'react';
import './emptystate.css';

export interface EmptyStateProps {
  /** The title of the empty state */
  title: string;
  /** The description of the empty state */
  description?: string;
  /** The icon to display */
  icon?: React.ReactNode;
  /** The action to display */
  action?: React.ReactNode;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard EmptyState
 * 
 * A component for displaying empty states and errors, such as 404 pages.
 */
export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  action,
  className,
}) => {
  const baseClass = 'paul-empty-state';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {icon && <div className={`${baseClass}__icon`}>{icon}</div>}
      <h1 className={`${baseClass}__title`}>{title}</h1>
      {description && <p className={`${baseClass}__description`}>{description}</p>}
      {action && <div className={`${baseClass}__action`}>{action}</div>}
    </div>
  );
};

export default EmptyState;
