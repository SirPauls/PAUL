import React from 'react';
import './textinput.css';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The size of the text input */
  size?: 'sm' | 'md' | 'lg';
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard TextInput
 * 
 * A high-performance, accessible text input for capturing user input.
 */
export const TextInput: React.FC<TextInputProps> = ({
  size = 'md',
  className,
  ...props
}) => {
  const baseClass = 'paul-text-input';
  const classes = [
    baseClass,
    `${baseClass}--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <input type="text" className={classes} {...props} />
  );
};

export default TextInput;
