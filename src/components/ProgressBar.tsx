import React from 'react';
import './progressbar.css';

export interface ProgressBarProps {
  /** The current value of the progress bar */
  value: number;
  /** The maximum value of the progress bar */
  max?: number;
  /** The size of the progress bar */
  size?: 'sm' | 'md' | 'lg';
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard ProgressBar
 * 
 * A component for displaying progress of a task.
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  size = 'md',
  className,
}) => {
  const baseClass = 'paul-progress-bar';
  const classes = [
    baseClass,
    `${baseClass}--${size}`,
    className
  ].filter(Boolean).join(' ');

  const percentage = (value / max) * 100;

  return (
    <div className={classes} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
      <div className={`${baseClass}__indicator`} style={{ width: `${percentage}%` }} />
    </div>
  );
};

export default ProgressBar;
