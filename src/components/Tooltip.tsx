
import React, { useState, useRef, useEffect } from 'react';
import './tooltip.css';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  content: React.ReactNode;
  position?: TooltipPosition;
  children: React.ReactElement;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'top',
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLElement>(null);

  const baseClass = 'paul-tooltip';

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const childElement = childRef.current;
    if (childElement) {
      childElement.addEventListener('mouseenter', handleMouseEnter);
      childElement.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      if (childElement) {
        childElement.removeEventListener('mouseenter', handleMouseEnter);
        childElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [childRef]);

  const tooltipClasses = [
    baseClass,
    `${baseClass}--${position}`,
    isVisible && `${baseClass}--visible`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      {<span ref={childRef}>{children}</span>}
      {isVisible && (
        <div
          ref={tooltipRef}
          className={tooltipClasses}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </>
  );
};

export default Tooltip;
