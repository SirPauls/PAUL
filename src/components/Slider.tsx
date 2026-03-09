import React from 'react';
import './slider.css';

export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The size of the slider */
  size?: 'sm' | 'md' | 'lg';
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Slider
 * 
 * A high-performance, accessible slider for selecting a value from a range.
 */
export const Slider: React.FC<SliderProps> = ({
  size = 'md',
  className,
  ...props
}) => {
  const baseClass = 'paul-slider';
  const classes = [
    baseClass,
    `${baseClass}--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <input type="range" className={classes} {...props} />
  );
};

export default Slider;
