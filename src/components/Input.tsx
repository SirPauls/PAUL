import React, { useId } from 'react';
import './input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The label for the input */
  label?: string;
  /** Helper text to display below the input */
  helperText?: string;
  /** Whether the input is in an error state */
  hasError?: boolean;
  /** Error message to display below the input */
  errorMessage?: string;
  /** Left icon element */
  leftIcon?: React.ReactNode;
  /** Right icon element */
  rightIcon?: React.ReactNode;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Input
 * 
 * A sleek, high-performance input field for precise data entry.
 */
export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  hasError = false,
  errorMessage,
  leftIcon,
  rightIcon,
  className,
  id,
  disabled,
  ...props
}) => {
  const baseClass = 'paul-input';
  const generatedId = useId();
  const inputId = id || generatedId;
  const classes = [
    baseClass,
    hasError && `${baseClass}--error`,
    disabled && `${baseClass}--disabled`,
    leftIcon && `${baseClass}--has-left-icon`,
    rightIcon && `${baseClass}--has-right-icon`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {label && <label htmlFor={inputId} className={`${baseClass}__label`}>{label}</label>}
      <div className={`${baseClass}__wrapper`}>
        {leftIcon && <span className={`${baseClass}__icon ${baseClass}__icon--left`}>{leftIcon}</span>}
        <input
          id={inputId}
          className={`${baseClass}__field`}
          disabled={disabled}
          aria-invalid={hasError}
          aria-describedby={errorMessage ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        {rightIcon && <span className={`${baseClass}__icon ${baseClass}__icon--right`}>{rightIcon}</span>}
      </div>
      {hasError && errorMessage && (
        <div id={`${inputId}-error`} className={`${baseClass}__error-message`} role="alert">
          {errorMessage}
        </div>
      )}
      {!hasError && helperText && (
        <div id={`${inputId}-helper`} className={`${baseClass}__helper-text`}>
          {helperText}
        </div>
      )}
    </div>
  );
};

export default Input;
