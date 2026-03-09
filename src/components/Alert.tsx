import React from 'react';
import './alert.css';

export interface AlertProps {
  /** The type of alert to display */
  type?: 'info' | 'success' | 'warning' | 'error';
  /** The title of the alert */
  title?: string;
  /** The main content of the alert */
  children: React.ReactNode;
  /** Whether to show the leading icon */
  showIcon?: boolean;
  /** Custom leading icon */
  icon?: React.ReactNode;
  /** Whether to show the title */
  showTitle?: boolean;
  /** Whether to show the close button */
  showClose?: boolean;
  /** Callback for when the alert is closed */
  onClose?: () => void;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Alert
 * 
 * A sleek, high-performance alert component for communicating important feedback.
 */
export const Alert: React.FC<AlertProps> = ({
  type = 'info',
  title,
  children,
  showIcon = true,
  icon,
  showTitle = true,
  showClose = true,
  onClose,
  className,
}) => {
  const baseClass = 'paul-alert';
  const classes = [baseClass, `${baseClass}--${type}`, className].filter(Boolean).join(' ');

  const getDefaultIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        );
      case 'warning':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        );
      case 'error':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
          </svg>
        );
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
        );
    }
  };

  return (
    <div className={classes} role="alert">
      {showIcon && (
        <div className={`${baseClass}__icon-container`} aria-hidden="true">
          {icon || getDefaultIcon()}
        </div>
      )}
      <div className={`${baseClass}__body`}>
        {showTitle && title && <div className={`${baseClass}__title`}>{title}</div>}
        <div className={`${baseClass}__content`}>{children}</div>
      </div>
      {showClose && (
        <button 
          className={`${baseClass}__close`} 
          onClick={onClose}
          aria-label="Close alert"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;
