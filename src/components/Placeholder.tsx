import React from 'react';
import './placeholder.css';

export interface PlaceholderProps {
  /** The type of placeholder to display */
  variant?: 'text' | 'rect' | 'circle';
  /** The width of the placeholder */
  width?: string | number;
  /** The height of the placeholder */
  height?: string | number;
  /** Whether to show a shimmer animation */
  shimmer?: boolean;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Placeholder
 * 
 * A sleek, versatile placeholder component for smooth skeleton loading experiences.
 */
export const Placeholder: React.FC<PlaceholderProps> = ({
  variant = 'rect',
  width,
  height,
  shimmer = true,
  className,
}) => {
  const baseClass = 'paul-placeholder';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    shimmer && `${baseClass}--shimmer`,
    className
  ].filter(Boolean).join(' ');

  const style: React.CSSProperties = {
    width: width,
    height: height,
  };

  return (
    <div 
      className={classes} 
      style={style} 
      role="status" 
      aria-label="Loading content..."
    />
  );
};

export default Placeholder;
