import React from 'react';
import './circular-progress.css';

export interface CircularProgressProps {
  /** The progress value (0 to 100) */
  value?: number;
  /** Whether the progress is indeterminate */
  isIndeterminate?: boolean;
  /** The size of the circular progress */
  size?: 'small' | 'medium' | 'large';
  /** The color scheme */
  color?: 'primary' | 'secondary' | 'success' | 'error';
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard CircularProgress
 * 
 * A precise, visually engaging circular progress indicator for tracking task completion.
 */
export const CircularProgress: React.FC<CircularProgressProps> = ({
  value = 0,
  isIndeterminate = false,
  size = 'medium',
  color = 'primary',
  className,
}) => {
  const baseClass = 'paul-circular-progress';
  const classes = [
    baseClass,
    `${baseClass}--${size}`,
    `${baseClass}--${color}`,
    isIndeterminate && `${baseClass}--indeterminate`,
    className
  ].filter(Boolean).join(' ');

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className={classes} role="progressbar" aria-valuenow={isIndeterminate ? undefined : value} aria-valuemin={0} aria-valuemax={100}>
      <svg className={`${baseClass}__svg`} viewBox="0 0 40 40">
        <circle
          className={`${baseClass}__track`}
          cx="20"
          cy="20"
          r={radius}
          strokeWidth="4"
          fill="none"
        />
        <circle
          className={`${baseClass}__thumb`}
          cx="20"
          cy="20"
          r={radius}
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={isIndeterminate ? undefined : offset}
        />
      </svg>
      {!isIndeterminate && size !== 'small' && (
        <span className={`${baseClass}__text`}>{Math.round(value)}%</span>
      )}
    </div>
  );
};

export default CircularProgress;
