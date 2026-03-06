import React from 'react';
import './dialog.css';
import Button from './Button';

export interface DialogProps {
  /** Whether the dialog is open */
  isOpen: boolean;
  /** Callback for when the dialog is closed */
  onClose: () => void;
  /** The title of the dialog */
  title: string;
  /** The content of the dialog */
  children: React.ReactNode;
  /** Primary action button label */
  primaryActionLabel?: string;
  /** Callback for the primary action */
  onPrimaryAction?: () => void;
  /** Secondary action button label */
  secondaryActionLabel?: string;
  /** Callback for the secondary action */
  onSecondaryAction?: () => void;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Dialog
 * 
 * A focused, high-clarity dialog component for critical user decisions.
 */
export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  primaryActionLabel,
  onPrimaryAction,
  secondaryActionLabel,
  onSecondaryAction,
  className,
}) => {
  const baseClass = 'paul-dialog';
  const classes = [baseClass, isOpen && `${baseClass}--open`, className].filter(Boolean).join(' ');

  if (!isOpen) return null;

  return (
    <>
      <div className={`${baseClass}__overlay`} onClick={onClose} aria-hidden="true" />
      <div className={classes} role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <div className={`${baseClass}__header`}>
          <h2 id="dialog-title" className={`${baseClass}__title`}>{title}</h2>
          <button className={`${baseClass}__close`} onClick={onClose} aria-label="Close dialog">✕</button>
        </div>
        <div className={`${baseClass}__body`}>
          {children}
        </div>
        {(primaryActionLabel || secondaryActionLabel) && (
          <div className={`${baseClass}__footer`}>
            {secondaryActionLabel && (
              <Button 
                variant="secondary" 
                label={secondaryActionLabel} 
                onClick={onSecondaryAction || onClose} 
              />
            )}
            {primaryActionLabel && (
              <Button 
                variant="primary" 
                label={primaryActionLabel} 
                onClick={onPrimaryAction} 
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Dialog;
