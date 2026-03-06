import React from 'react';
import './linear-progress.css';

export interface LinearProgressProps {
  /** The progress value (0 to 100) */
  value?: number;
  /** Whether the progress is indeterminate */
  isIndeterminate?: boolean;
  /** The color scheme */
  color?: 'primary' | 'secondary' | 'success' | 'error';
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard LinearProgress
 * 
 * A sleek, precise linear progress indicator for tracking task progression.
 */
export const LinearProgress: React.FC<LinearProgressProps> = ({
  value = 0,
  isIndeterminate = false,
  color = 'primary',
  className,
}) => {
  const baseClass = 'paul-linear-progress';
  const classes = [
    baseClass,
    `${baseClass}--${color}`,
    isIndeterminate && `${baseClass}--indeterminate`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} role="progressbar" aria-valuenow={isIndeterminate ? undefined : value} aria-valuemin={0} aria-valuemax={100}>
      <div className={`${baseClass}__track`}>
        <div 
          className={`${baseClass}__thumb`}
          style={{ width: isIndeterminate ? undefined : `${value}%` }}
        />
      </div>
    </div>
  );
};

export default LinearProgress;
