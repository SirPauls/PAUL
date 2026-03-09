import React from 'react';
import './card.css';

export interface CardProps {
  /** The content of the card */
  children: React.ReactNode;
  /** Optional header content */
  header?: React.ReactNode;
  /** Optional footer content */
  footer?: React.ReactNode;
  /** The visual style of the card */
  variant?: 'default' | 'elevated' | 'outlined';
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Card
 * 
 * A versatile container for content, with support for headers, footers, and multiple visual styles.
 */
export const Card: React.FC<CardProps> = ({
  children,
  header,
  footer,
  variant = 'default',
  className,
}) => {
  const baseClass = 'paul-card';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {header && <div className={`${baseClass}__header`}>{header}</div>}
      <div className={`${baseClass}__body`}>{children}</div>
      {footer && <div className={`${baseClass}__footer`}>{footer}</div>}
    </div>
  );
};

export default Card;
