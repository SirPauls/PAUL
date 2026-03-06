import React, { useState } from 'react';
import './accordion.css';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  /** The items to display in the accordion */
  items: AccordionItem[];
  /** Allow multiple items to be open at once */
  allowMultiple?: boolean;
  /** Initial open items */
  initialOpenIds?: string[];
  /** Size variation */
  size?: 'small' | 'medium' | 'large';
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Accordion
 * 
 * A clean, accessible accordion for managing collapsible content sections.
 */
export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  initialOpenIds = [],
  size = 'medium',
  className,
}) => {
  const [openIds, setOpenIds] = useState<string[]>(initialOpenIds);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    } else {
      setOpenIds(prev => prev.includes(id) ? [] : [id]);
    }
  };

  const baseClass = 'paul-accordion';
  const classes = [baseClass, `${baseClass}--${size}`, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div 
            key={item.id} 
            className={[
              `${baseClass}__item`, 
              isOpen && `${baseClass}__item--open`,
              item.disabled && `${baseClass}__item--disabled`
            ].filter(Boolean).join(' ')}
          >
            <button
              className={`${baseClass}__header`}
              onClick={() => !item.disabled && toggleItem(item.id)}
              aria-expanded={isOpen}
              disabled={item.disabled}
            >
              <span className={`${baseClass}__title`}>{item.title}</span>
              <span className={`${baseClass}__icon`} aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div 
              className={`${baseClass}__panel`}
              hidden={!isOpen}
              role="region"
            >
              <div className={`${baseClass}__content`}>
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
