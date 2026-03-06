import React, { useId } from 'react';
import './select.css';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** The options to display in the select */
  options: SelectOption[];
  /** The label for the select */
  label?: string;
  /** Whether the select is in an error state */
  hasError?: boolean;
  /** Error message to display below the select */
  errorMessage?: string;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Select
 * 
 * A robust, accessible native select component for reliable user choices.
 */
export const Select: React.FC<SelectProps> = ({
  options,
  label,
  hasError = false,
  errorMessage,
  className,
  id,
  disabled,
  ...props
}) => {
  const baseClass = 'paul-select';
  const generatedId = useId();
  const selectId = id || generatedId;
  const classes = [
    baseClass,
    hasError && `${baseClass}--error`,
    disabled && `${baseClass}--disabled`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {label && <label htmlFor={selectId} className={`${baseClass}__label`}>{label}</label>}
      <div className={`${baseClass}__wrapper`}>
        <select
          id={selectId}
          className={`${baseClass}__field`}
          disabled={disabled}
          aria-invalid={hasError}
          aria-describedby={errorMessage ? `${selectId}-error` : undefined}
          {...props}
        >
          {options.map((option) => (
            <option 
              key={option.value} 
              value={option.value} 
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        <span className={`${baseClass}__icon`} aria-hidden="true">▾</span>
      </div>
      {hasError && errorMessage && (
        <div id={`${selectId}-error`} className={`${baseClass}__error-message`} role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Select;
