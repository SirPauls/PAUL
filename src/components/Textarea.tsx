import React from 'react';
import './textarea.css';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** The size of the textarea */
  size?: 'sm' | 'md' | 'lg';
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Textarea
 * 
 * A high-performance, accessible textarea for capturing multi-line user input.
 */
export const Textarea: React.FC<TextareaProps> = ({
  size = 'md',
  className,
  ...props
}) => {
  const baseClass = 'paul-textarea';
  const classes = [
    baseClass,
    `${baseClass}--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <textarea className={classes} {...props} />
  );
};

export default Textarea;
