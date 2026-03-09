import React, { useState } from 'react';
import './accordion.css';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  /** Optional leading element (e.g., icon) */
  leadingElement?: React.ReactNode;
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
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Whether to show the expand/collapse icon */
  showExpandIcon?: boolean;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Accordion
 * 
 * A sleek, high-performance accordion for managing collapsible content sections.
 */
export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  initialOpenIds = [],
  size = 'md',
  showExpandIcon = true,
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
              <div className={`${baseClass}__header-left`}>
                {item.leadingElement && (
                  <span className={`${baseClass}__leading-element`}>
                    {item.leadingElement}
                  </span>
                )}
                <span className={`${baseClass}__title`}>{item.title}</span>
              </div>
              {showExpandIcon && (
                <span className={`${baseClass}__expand-icon`} aria-hidden="true">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                  >
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              )}
            </button>
            {isOpen && <div className={`${baseClass}__divider`} />}
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
