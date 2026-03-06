import React, { useId } from 'react';
import './textarea.css';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** The label for the textarea */
  label?: string;
  /** Helper text to display below the textarea */
  helperText?: string;
  /** Whether the textarea is in an error state */
  hasError?: boolean;
  /** Error message to display below the textarea */
  errorMessage?: string;
  /** Custom class name */
  className?: string;
  /** Whether the textarea can be resized */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

/**
 * PAUL Industrial Gold Standard Textarea
 * 
 * A sleek, high-performance textarea for multi-line text entry.
 */
export const Textarea: React.FC<TextareaProps> = ({
  label,
  helperText,
  hasError = false,
  errorMessage,
  className,
  id,
  disabled,
  resize = 'vertical',
  ...props
}) => {
  const baseClass = 'paul-textarea';
  const generatedId = useId();
  const textareaId = id || generatedId;
  const classes = [
    baseClass,
    hasError && `${baseClass}--error`,
    disabled && `${baseClass}--disabled`,
    className
  ].filter(Boolean).join(' ');

  const style = { resize, ...props.style };

  return (
    <div className={classes}>
      {label && <label htmlFor={textareaId} className={`${baseClass}__label`}>{label}</label>}
      <div className={`${baseClass}__wrapper`}>
        <textarea
          id={textareaId}
          className={`${baseClass}__field`}
          disabled={disabled}
          aria-invalid={hasError}
          aria-describedby={errorMessage ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
          style={style}
          {...props}
        />
      </div>
      {hasError && errorMessage && (
        <div id={`${textareaId}-error`} className={`${baseClass}__error-message`} role="alert">
          {errorMessage}
        </div>
      )}
      {!hasError && helperText && (
        <div id={`${textareaId}-helper`} className={`${baseClass}__helper-text`}>
          {helperText}
        </div>
      )}
    </div>
  );
};

export default Textarea;
