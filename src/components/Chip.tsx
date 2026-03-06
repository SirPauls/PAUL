import React from 'react';
import './chip.css';

export interface ChipProps {
  /** The label to display in the chip */
  label: string;
  /** The visual style of the chip */
  variant?: 'filled' | 'outlined';
  /** The color scheme of the chip */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  /** Whether the chip is clickable */
  onClick?: () => void;
  /** Whether the chip is deletable */
  onDelete?: () => void;
  /** Optional icon to display at the start */
  icon?: React.ReactNode;
  /** Whether the chip is disabled */
  disabled?: boolean;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Chip
 * 
 * A sleek, interactive chip component for tags, filters, and small bits of information.
 */
export const Chip: React.FC<ChipProps> = ({
  label,
  variant = 'filled',
  color = 'default',
  onClick,
  onDelete,
  icon,
  disabled = false,
  className,
}) => {
  const baseClass = 'paul-chip';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--${color}`,
    onClick && `${baseClass}--clickable`,
    disabled && `${baseClass}--disabled`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} onClick={!disabled ? onClick : undefined} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined}>
      {icon && <span className={`${baseClass}__icon`}>{icon}</span>}
      <span className={`${baseClass}__label`}>{label}</span>
      {onDelete && !disabled && (
        <button 
          className={`${baseClass}__delete`} 
          onClick={(e) => { e.stopPropagation(); onDelete(); }}
          aria-label={`Delete ${label}`}
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default Chip;
