import React from 'react';
import './segmented-control.css';

export interface SegmentedControlOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SegmentedControlProps {
  /** The options to display in the control */
  options: SegmentedControlOption[];
  /** The selected value */
  value: string;
  /** Callback for when an option is selected */
  onChange: (value: string) => void;
  /** The size of the control */
  size?: 'small' | 'medium' | 'large';
  /** Custom class name */
  className?: string;
  /** Whether the control is disabled */
  disabled?: boolean;
}

/**
 * PAUL Industrial Gold Standard SegmentedControl
 * 
 * A sleek, high-precision toggle for selecting between mutually exclusive options.
 */
export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  value,
  onChange,
  size = 'medium',
  className,
  disabled = false,
}) => {
  const baseClass = 'paul-segmented-control';
  const classes = [
    baseClass,
    `${baseClass}--${size}`,
    disabled && `${baseClass}--disabled`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} role="radiogroup">
      {options.map((option) => (
        <button
          key={option.value}
          className={[
            `${baseClass}__option`,
            option.value === value && `${baseClass}__option--active`,
            (option.disabled || disabled) && `${baseClass}__option--disabled`
          ].filter(Boolean).join(' ')}
          onClick={() => !disabled && !option.disabled && onChange(option.value)}
          disabled={disabled || option.disabled}
          role="radio"
          aria-checked={option.value === value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default SegmentedControl;
