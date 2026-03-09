import React from 'react';
import './button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The visual style of the button */
  variant?: 'primary' | 'secondary' | 'outlined' | 'ghost' | 'danger';
  /** How large should the button be? */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Button contents */
  label?: string;
  /** Is the button in a loading state? */
  isLoading?: boolean;
  /** Left icon element */
  leftIcon?: React.ReactNode;
  /** Right icon element */
  rightIcon?: React.ReactNode;
  /** Icon only button */
  iconOnly?: React.ReactNode;
}

/** 
 * PAUL Industrial Gold Standard Button
 * 
 * A sleek, high-performance button engineered for precision and reliability.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  label,
  isLoading = false,
  leftIcon,
  rightIcon,
  iconOnly,
  disabled,
  className,
  ...props
}) => {
  const baseClass = 'paul-button';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--${size}`,
    isLoading && `${baseClass}--loading`,
    iconOnly && `${baseClass}--icon-only`,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className={`${baseClass}__loader`} aria-hidden="true" />
      ) : iconOnly ? (
        <span className={`${baseClass}__icon-center`}>{iconOnly}</span>
      ) : (
        <>
          {leftIcon && <span className={`${baseClass}__icon-left`}>{leftIcon}</span>}
          {label && <span className={`${baseClass}__label`}>{label}</span>}
          {rightIcon && <span className={`${baseClass}__icon-right`}>{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
