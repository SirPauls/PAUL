import React from 'react';
import './snackbar.css';
import Button from './Button';

export interface SnackbarProps {
  /** Whether the snackbar is open */
  isOpen: boolean;
  /** The message to display */
  message: string;
  /** The type of snackbar */
  type?: 'info' | 'success' | 'warning' | 'error';
  /** Action button label */
  actionLabel?: string;
  /** Callback for the action button */
  onAction?: () => void;
  /** Callback for when the snackbar is closed */
  onClose: () => void;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Snackbar
 * 
 * A sleek, non-intrusive notification component for brief messages.
 */
export const Snackbar: React.FC<SnackbarProps> = ({
  isOpen,
  message,
  type = 'info',
  actionLabel,
  onAction,
  onClose,
  className,
}) => {
  const baseClass = 'paul-snackbar';
  const classes = [
    baseClass,
    `${baseClass}--${type}`,
    isOpen && `${baseClass}--open`,
    className
  ].filter(Boolean).join(' ');

  if (!isOpen) return null;

  return (
    <div className={classes} role="status" aria-live="polite">
      <div className={`${baseClass}__content`}>
        <span className={`${baseClass}__message`}>{message}</span>
        {actionLabel && (
          <Button 
            variant="ghost" 
            label={actionLabel} 
            onClick={onAction} 
            className={`${baseClass}__action`}
          />
        )}
        <button className={`${baseClass}__close`} onClick={onClose} aria-label="Close notification">✕</button>
      </div>
    </div>
  );
};

export default Snackbar;
