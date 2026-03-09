import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './contextmenu.css';

export interface ContextMenuItem {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export interface ContextMenuProps {
  /** The trigger for the context menu */
  children: React.ReactElement;
  /** The items to display in the menu */
  items: ContextMenuItem[];
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard ContextMenu
 * 
 * A high-performance, accessible context menu for revealing actions related to an element.
 */
export const ContextMenu: React.FC<ContextMenuProps> = ({
  children,
  items,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setPosition({ x: e.clientX, y: e.clientY });
      setIsOpen(true);
    };

    const handleClick = () => setIsOpen(false);

    trigger.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);

    return () => {
      trigger.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const baseClass = 'paul-context-menu';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <>
      {<div ref={triggerRef}>{children}</div>}
      {isOpen && createPortal(
        <div className={classes} style={{ top: position.y, left: position.x }}>
          <ul className={`${baseClass}__list`}>
            {items.map((item, index) => (
              <li key={index} className={`${baseClass}__item`}>
                <button 
                  onClick={item.onClick} 
                  disabled={item.disabled}
                  className={`${baseClass}__button`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>,
        document.body
      )}
    </>
  );
};

export default ContextMenu;
