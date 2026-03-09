import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './modal.css';

export interface ModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Function to close the modal */
  onClose: () => void;
  /** The content of the modal */
  children: React.ReactNode;
  /** The title of the modal */
  title?: string;
  /** Optional footer content */
  footer?: React.ReactNode;
  /** The size of the modal */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Modal
 * 
 * A high-performance, accessible modal for displaying focused content.
 */
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  footer,
  size = 'md',
  className,
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  const baseClass = 'paul-modal';
  const classes = [
    `${baseClass}__content`,
    `${baseClass}__content--${size}`,
    className
  ].filter(Boolean).join(' ');

  return createPortal(
    <div className={`${baseClass}__overlay`} onClick={onClose} role="dialog" aria-modal="true">
      <div className={classes} onClick={(e) => e.stopPropagation()}>
        <div className={`${baseClass}__header`}>
          {title && <h2 className={`${baseClass}__title`}>{title}</h2>}
          <button className={`${baseClass}__close`} onClick={onClose} aria-label="Close modal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div className={`${baseClass}__body`}>{children}</div>
        {footer && <div className={`${baseClass}__footer`}>{footer}</div>}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
