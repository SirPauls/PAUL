import React, { useState, useRef, useEffect } from 'react';
import './combobox.css';

export interface ComboboxOption {
  value: string;
  label: string;
}

export interface ComboboxProps {
  /** The options for the combobox */
  options: ComboboxOption[];
  /** The value of the combobox */
  value?: string;
  /** Callback for when the value changes */
  onChange?: (value: string) => void;
  /** The placeholder for the input */
  placeholder?: string;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Combobox
 * 
 * A high-performance, accessible combobox for selecting from a list of options.
 */
export const Combobox: React.FC<ComboboxProps> = ({
  options,
  value,
  onChange,
  placeholder,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
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

  const filteredOptions = options.filter(opt => 
    opt.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  const baseClass = 'paul-combobox';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} ref={ref}>
      <input 
        type="text" 
        className={`${baseClass}__input`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsOpen(true)}
        placeholder={placeholder}
      />
      <button className={`${baseClass}__button`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle options">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      {isOpen && (
        <ul className={`${baseClass}__list`}>
          {filteredOptions.map(opt => (
            <li 
              key={opt.value} 
              className={`${baseClass}__item ${value === opt.value ? 'active' : ''}`}
              onClick={() => {
                onChange?.(opt.value);
                setInputValue(opt.label);
                setIsOpen(false);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Combobox;
