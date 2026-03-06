import React, { useId } from 'react';
import './switch.css';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The label for the switch */
  label?: string;
  /** Whether the switch is in an error state */
  hasError?: boolean;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Switch
 * 
 * A high-precision, interactive toggle for instantaneous state changes.
 */
export const Switch: React.FC<SwitchProps> = ({
  label,
  hasError = false,
  className,
  id,
  ...props
}) => {
  const baseClass = 'paul-switch';
  const generatedId = useId();
  const switchId = id || generatedId;
  const classes = [
    baseClass,
    hasError && `${baseClass}--error`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <label htmlFor={switchId} className={`${baseClass}__wrapper`}>
        <input
          type="checkbox"
          id={switchId}
          className={`${baseClass}__input`}
          role="switch"
          {...props}
        />
        <span className={`${baseClass}__slider`} aria-hidden="true" />
        {label && <span className={`${baseClass}__label`}>{label}</span>}
      </label>
    </div>
  );
};

export default Switch;
