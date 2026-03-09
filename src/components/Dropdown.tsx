import React, { useState, useRef, useEffect } from 'react';
import './dropdown.css';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  /** The options for the dropdown */
  options: DropdownOption[];
  /** The value of the dropdown */
  value?: string;
  /** Callback for when the value changes */
  onChange?: (value: string) => void;
  /** The placeholder for the dropdown */
  placeholder?: string;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Dropdown
 * 
 * A high-performance, accessible dropdown for selecting from a list of options.
 */
export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  const baseClass = 'paul-dropdown';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} ref={ref}>
      <button className={`${baseClass}__button`} onClick={() => setIsOpen(!isOpen)} aria-haspopup="listbox">
        <span>{selectedOption?.label || placeholder}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      {isOpen && (
        <ul className={`${baseClass}__list`} role="listbox">
          {options.map(opt => (
            <li 
              key={opt.value} 
              className={`${baseClass}__item ${value === opt.value ? 'active' : ''}`}
              onClick={() => {
                onChange?.(opt.value);
                setIsOpen(false);
              }}
              role="option"
              aria-selected={value === opt.value}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
