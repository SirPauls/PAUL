import React, { useId } from 'react';
import './checkbox.css';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The label for the checkbox */
  label?: string;
  /** Whether the checkbox is in an error state */
  hasError?: boolean;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Checkbox
 * 
 * A clean, accessible checkbox component for reliable user selection.
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  hasError = false,
  className,
  id,
  ...props
}) => {
  const baseClass = 'paul-checkbox';
  const generatedId = useId();
  const checkboxId = id || generatedId;
  const classes = [
    baseClass,
    hasError && `${baseClass}--error`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={`${baseClass}__wrapper`}>
        <input
          type="checkbox"
          id={checkboxId}
          className={`${baseClass}__input`}
          {...props}
        />
        <label htmlFor={checkboxId} className={`${baseClass}__label`}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
