import React from 'react';
import './drawer.css';
import Button from './Button';

export interface DrawerProps {
  /** Whether the drawer is open */
  isOpen: boolean;
  /** Callback for when the drawer is closed */
  onClose: () => void;
  /** The side from which the drawer slides in */
  placement?: 'left' | 'right';
  /** The title of the drawer */
  title?: string;
  /** The content of the drawer */
  children: React.ReactNode;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Drawer
 * 
 * A sleek, high-utility side drawer for additional context and navigation.
 */
export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  placement = 'right',
  title,
  children,
  className,
}) => {
  const baseClass = 'paul-drawer';
  const classes = [
    baseClass,
    `${baseClass}--${placement}`,
    isOpen && `${baseClass}--open`,
    className
  ].filter(Boolean).join(' ');

  return (
    <>
      <div className={`${baseClass}__overlay`} onClick={onClose} aria-hidden="true" />
      <div className={classes} role="dialog" aria-modal="true" aria-labelledby={title ? 'drawer-title' : undefined}>
        <div className={`${baseClass}__header`}>
          {title && <h2 id="drawer-title" className={`${baseClass}__title`}>{title}</h2>}
          <button className={`${baseClass}__close`} onClick={onClose} aria-label="Close drawer">✕</button>
        </div>
        <div className={`${baseClass}__body`}>
          {children}
        </div>
        <div className={`${baseClass}__footer`}>
          <Button variant="ghost" label="Close" onClick={onClose} style={{ width: '100%' }} />
        </div>
      </div>
    </>
  );
};

export default Drawer;
