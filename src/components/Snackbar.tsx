import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './snackbar.css';

export interface SnackbarProps {
  /** Whether the snackbar is open */
  isOpen: boolean;
  /** Function to close the snackbar */
  onClose: () => void;
  /** The message to display */
  message: string;
  /** The duration in milliseconds to show the snackbar */
  duration?: number;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Snackbar
 * 
 * A component for displaying brief messages to the user.
 */
export const Snackbar: React.FC<SnackbarProps> = ({
  isOpen,
  onClose,
  message,
  duration = 3000,
  className,
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  const baseClass = 'paul-snackbar';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return createPortal(
    <div className={classes}>
      <p className={`${baseClass}__message`}>{message}</p>
      <button className={`${baseClass}__close`} onClick={onClose} aria-label="Close snackbar">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>,
    document.body
  );
};

export default Snackbar;
