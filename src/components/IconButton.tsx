import React from 'react';
import './icon-button.css';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The icon to display */
  icon: React.ReactNode;
  /** Accessible label for the button */
  'aria-label': string;
  /** The visual style of the button */
  variant?: 'primary' | 'secondary' | 'outlined' | 'ghost' | 'danger';
  /** The size of the button */
  size?: 'small' | 'medium' | 'large';
  /** Whether the button is in a loading state */
  isLoading?: boolean;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard IconButton
 * 
 * A compact, focused icon-only button for streamlined user actions.
 */
export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  'aria-label': ariaLabel,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  disabled,
  className,
  ...props
}) => {
  const baseClass = 'paul-icon-button';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--${size}`,
    isLoading && `${baseClass}--loading`,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className={`${baseClass}__loader`} aria-hidden="true" />
      ) : (
        <span className={`${baseClass}__icon`}>{icon}</span>
      )}
    </button>
  );
};

export default IconButton;
