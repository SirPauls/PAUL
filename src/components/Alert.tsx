import React from 'react';
import './alert.css';

export interface AlertProps {
  /** The type of alert to display */
  type?: 'info' | 'success' | 'warning' | 'error';
  /** The title of the alert */
  title?: string;
  /** The main content of the alert */
  children: React.ReactNode;
  /** Callback for when the alert is closed */
  onClose?: () => void;
  /** Whether the alert is persistent */
  persistent?: boolean;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Alert
 * 
 * A reliable, informative alert component for communicating important feedback.
 */
export const Alert: React.FC<AlertProps> = ({
  type = 'info',
  title,
  children,
  onClose,
  persistent = false,
  className,
}) => {
  const baseClass = 'paul-alert';
  const classes = [baseClass, `${baseClass}--${type}`, className].filter(Boolean).join(' ');

  const getIcon = () => {
    switch (type) {
      case 'success': return '✓';
      case 'warning': return '!';
      case 'error': return '✕';
      default: return 'ℹ';
    }
  };

  return (
    <div className={classes} role="alert">
      <div className={`${baseClass}__icon`} aria-hidden="true">
        {getIcon()}
      </div>
      <div className={`${baseClass}__body`}>
        {title && <div className={`${baseClass}__title`}>{title}</div>}
        <div className={`${baseClass}__content`}>{children}</div>
      </div>
      {!persistent && onClose && (
        <button 
          className={`${baseClass}__close`} 
          onClick={onClose}
          aria-label="Close alert"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default Alert;
