import React from 'react';
import './button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Is this the principal call to action on the page? */
  variant?: 'primary' | 'secondary' | 'outlined' | 'ghost' | 'danger';
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Optional background color */
  backgroundColor?: string;
  /** Button contents */
  label: string;
  /** Is the button in a loading state? */
  isLoading?: boolean;
  /** Does the button have an error? */
  hasError?: boolean;
  /** Left icon element */
  leftIcon?: React.ReactNode;
  /** Right icon element */
  rightIcon?: React.ReactNode;
}

/** 
 * PAUL Industrial Gold Standard Button
 * 
 * The fundamental interaction element, engineered for precision and reliability.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  isLoading = false,
  hasError = false,
  leftIcon,
  rightIcon,
  disabled,
  className,
  style,
  ...props
}) => {
  const baseClass = 'paul-button';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--${size}`,
    isLoading && `${baseClass}--loading`,
    hasError && `${baseClass}--error`,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={classes}
      style={{ backgroundColor, ...style }}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className={`${baseClass}__loader`} aria-hidden="true" />
      ) : (
        <>
          {leftIcon && <span className={`${baseClass}__icon-left`}>{leftIcon}</span>}
          <span className={`${baseClass}__label`}>{label}</span>
          {rightIcon && <span className={`${baseClass}__icon-right`}>{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
