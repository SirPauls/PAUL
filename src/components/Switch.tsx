import React from 'react';
import './switch.css';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The label for the switch */
  label?: React.ReactNode;
  /** The size of the switch */
  size?: 'sm' | 'md' | 'lg';
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Switch
 * 
 * A high-performance, accessible switch for toggling a state.
 */
export const Switch: React.FC<SwitchProps> = ({
  label,
  size = 'md',
  className,
  ...props
}) => {
  const baseClass = 'paul-switch';
  const classes = [
    baseClass,
    `${baseClass}--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <label className={classes}>
      <input type="checkbox" role="switch" className={`${baseClass}__input`} {...props} />
      <span className={`${baseClass}__slider`} />
      {label && <span className={`${baseClass}__label`}>{label}</span>}
    </label>
  );
};

export default Switch;
