import React from 'react';
import './bottom-sheet.css';
import Button from './Button';

export interface BottomSheetProps {
  /** Whether the bottom sheet is open */
  isOpen: boolean;
  /** Callback for when the bottom sheet is closed */
  onClose: () => void;
  /** The title of the bottom sheet */
  title?: string;
  /** The content of the bottom sheet */
  children: React.ReactNode;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard BottomSheet
 * 
 * A sleek, modern bottom sheet component for mobile-first user interactions.
 */
export const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className,
}) => {
  const baseClass = 'paul-bottom-sheet';
  const classes = [baseClass, isOpen && `${baseClass}--open`, className].filter(Boolean).join(' ');

  return (
    <>
      <div className={`${baseClass}__overlay`} onClick={onClose} aria-hidden="true" />
      <div className={classes} role="dialog" aria-modal="true" aria-labelledby={title ? 'bs-title' : undefined}>
        <div className={`${baseClass}__handle`} onClick={onClose} aria-hidden="true" />
        <div className={`${baseClass}__content`}>
          {title && <h2 id="bs-title" className={`${baseClass}__title`}>{title}</h2>}
          <div className={`${baseClass}__body`}>
            {children}
          </div>
          <Button 
            className={`${baseClass}__close-btn`}
            label="Close"
            variant="ghost"
            onClick={onClose}
          />
        </div>
      </div>
    </>
  );
};

export default BottomSheet;
