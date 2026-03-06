import React, { useState, useRef, useEffect } from 'react';
import './dropdown.css';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  /** The options to display in the dropdown */
  options: DropdownOption[];
  /** The selected value */
  value?: string;
  /** Callback for when an option is selected */
  onChange?: (value: string) => void;
  /** The placeholder text */
  placeholder?: string;
  /** Whether the dropdown is disabled */
  disabled?: boolean;
  /** Whether the dropdown is in an error state */
  hasError?: boolean;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Dropdown
 * 
 * A sleek, accessible dropdown component for robust user selection.
 */
export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  hasError = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: DropdownOption) => {
    if (option.disabled) return;
    if (onChange) onChange(option.value);
    setIsOpen(false);
  };

  const baseClass = 'paul-dropdown';
  const classes = [
    baseClass,
    isOpen && `${baseClass}--open`,
    disabled && `${baseClass}--disabled`,
    hasError && `${baseClass}--error`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} ref={dropdownRef}>
      <button
        className={`${baseClass}__trigger`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={`${baseClass}__label`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className={`${baseClass}__icon`}>{isOpen ? '▴' : '▾'}</span>
      </button>
      
      {isOpen && (
        <ul className={`${baseClass}__menu`} role="listbox">
          {options.map((option) => (
            <li
              key={option.value}
              className={[
                `${baseClass}__option`,
                option.value === value && `${baseClass}__option--selected`,
                option.disabled && `${baseClass}__option--disabled`
              ].filter(Boolean).join(' ')}
              onClick={() => handleSelect(option)}
              role="option"
              aria-selected={option.value === value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
