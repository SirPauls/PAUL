import React, { useId } from 'react';
import './radio.css';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The label for the radio button */
  label?: string;
  /** Whether the radio is in an error state */
  hasError?: boolean;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Radio
 * 
 * A clean, accessible radio component for focused user choice.
 */
export const Radio: React.FC<RadioProps> = ({
  label,
  hasError = false,
  className,
  id,
  ...props
}) => {
  const baseClass = 'paul-radio';
  const generatedId = useId();
  const radioId = id || generatedId;
  const classes = [
    baseClass,
    hasError && `${baseClass}--error`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={`${baseClass}__wrapper`}>
        <input
          type="radio"
          id={radioId}
          className={`${baseClass}__input`}
          {...props}
        />
        <label htmlFor={radioId} className={`${baseClass}__label`}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default Radio;
