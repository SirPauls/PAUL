import React from 'react';
import './checkbox.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** The label for the checkbox */
  label?: React.ReactNode;
  /** The size of the checkbox */
  size?: 'sm' | 'md' | 'lg';
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Checkbox
 * 
 * A high-performance, accessible checkbox for capturing user input.
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  size = 'md',
  className,
  ...props
}) => {
  const baseClass = 'paul-checkbox';
  const classes = [
    baseClass,
    `${baseClass}--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <label className={classes}>
      <input type="checkbox" className={`${baseClass}__input`} {...props} />
      <span className={`${baseClass}__control`} />
      {label && <span className={`${baseClass}__label`}>{label}</span>}
    </label>
  );
};

export default Checkbox;
