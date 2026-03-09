import React from 'react';
import './form.css';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  /** The content of the form */
  children: React.ReactNode;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Form
 * 
 * A container for form elements, with built-in layout and spacing.
 */
export const Form: React.FC<FormProps> = ({
  children,
  className,
  ...props
}) => {
  const baseClass = 'paul-form';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <form className={classes} {...props}>
      {children}
    </form>
  );
};

export interface FormControlProps {
  /** The label for the form control */
  label?: string;
  /** The error message for the form control */
  error?: string;
  /** The content of the form control */
  children: React.ReactNode;
  /** Custom class name */
  className?: string;
}

export const FormControl: React.FC<FormControlProps> = ({
  label,
  error,
  children,
  className,
}) => {
  const baseClass = 'paul-form-control';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {label && <label className={`${baseClass}__label`}>{label}</label>}
      {children}
      {error && <p className={`${baseClass}__error`}>{error}</p>}
    </div>
  );
};
