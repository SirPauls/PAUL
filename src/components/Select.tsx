import React from 'react';
import './select.css';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** The options for the select */
  options: SelectOption[];
  /** The size of the select */
  size?: 'sm' | 'md' | 'lg';
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Select
 * 
 * A high-performance, accessible select component for selecting from a list of options.
 */
export const Select: React.FC<SelectProps> = ({
  options,
  size = 'md',
  className,
  ...props
}) => {
  const baseClass = 'paul-select';
  const classes = [
    baseClass,
    `${baseClass}--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={`${baseClass}__wrapper`}>
      <select className={classes} {...props}>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <div className={`${baseClass}__icon`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
      </div>
    </div>
  );
};

export default Select;
