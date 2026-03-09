import React from 'react';
import './radiobutton.css';

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The label for the radio button */
  label?: React.ReactNode;
  /** The size of the radio button */
  size?: 'sm' | 'md' | 'lg';
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard RadioButton
 * 
 * A high-performance, accessible radio button for capturing user input.
 */
export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  size = 'md',
  className,
  ...props
}) => {
  const baseClass = 'paul-radio-button';
  const classes = [
    baseClass,
    `${baseClass}--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <label className={classes}>
      <input type="radio" className={`${baseClass}__input`} {...props} />
      <span className={`${baseClass}__control`} />
      {label && <span className={`${baseClass}__label`}>{label}</span>}
    </label>
  );
};

export default RadioButton;
