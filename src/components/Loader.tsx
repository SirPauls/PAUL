import React from 'react';
import './loader.css';

export interface LoaderProps {
  /** The size of the loader */
  size?: 'small' | 'medium' | 'large';
  /** The color scheme */
  color?: 'primary' | 'secondary' | 'white';
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Loader
 * 
 * A sleek, high-performance loading indicator for smooth user transitions.
 */
export const Loader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = 'primary',
  className,
}) => {
  const baseClass = 'paul-loader';
  const classes = [
    baseClass,
    `${baseClass}--${size}`,
    `${baseClass}--${color}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} role="status" aria-label="Loading">
      <div className={`${baseClass}__dot`} />
      <div className={`${baseClass}__dot`} />
      <div className={`${baseClass}__dot`} />
    </div>
  );
};

export default Loader;
