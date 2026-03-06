import React, { useState, useRef, useEffect } from 'react';
import './menu.css';

export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  divider?: boolean;
}

export interface MenuProps {
  /** The items to display in the menu */
  items: MenuItem[];
  /** The element that triggers the menu */
  trigger: React.ReactNode;
  /** Custom class name */
  className?: string;
  /** Custom alignment of the menu */
  align?: 'left' | 'right';
}

/**
 * PAUL Industrial Gold Standard Menu
 * 
 * A sleek, high-clarity menu component for focused user actions.
 */
export const Menu: React.FC<MenuProps> = ({
  items,
  trigger,
  className,
  align = 'left',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleItemClick = (item: MenuItem) => {
    if (item.disabled) return;
    if (item.onClick) item.onClick();
    setIsOpen(false);
  };

  const baseClass = 'paul-menu';
  const classes = [
    baseClass,
    isOpen && `${baseClass}--open`,
    `${baseClass}--align-${align}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} ref={menuRef}>
      <div className={`${baseClass}__trigger`} onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      
      {isOpen && (
        <ul className={`${baseClass}__list`} role="menu">
          {items.map((item) => (
            <React.Fragment key={item.id}>
              {item.divider && <li className={`${baseClass}__divider`} role="separator" />}
              <li
                className={[
                  `${baseClass}__item`,
                  item.disabled && `${baseClass}__item--disabled`
                ].filter(Boolean).join(' ')}
                onClick={() => handleItemClick(item)}
                role="menuitem"
                tabIndex={item.disabled ? -1 : 0}
              >
                {item.icon && <span className={`${baseClass}__icon`}>{item.icon}</span>}
                <span className={`${baseClass}__label`}>{item.label}</span>
              </li>
            </React.Fragment>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
