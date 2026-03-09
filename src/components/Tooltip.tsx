import React, { useState, useRef, useEffect, useId, cloneElement } from 'react';
import './tooltip.css';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  /** The content to display inside the tooltip */
  content: React.ReactNode;
  /** The element that triggers the tooltip */
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  /** The position of the tooltip relative to the trigger */
  position?: TooltipPosition;
  /** Delay in milliseconds before showing the tooltip */
  delay?: number;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Tooltip
 * 
 * A sleek, informative tooltip for providing contextual help.
 */
export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  delay = 200,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tooltipId = useId();

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsVisible(false);
  };

  const onMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    showTooltip();
    children.props.onMouseEnter?.(e);
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    hideTooltip();
    children.props.onMouseLeave?.(e);
  };

  const onFocus = (e: React.FocusEvent<HTMLElement>) => {
    showTooltip();
    children.props.onFocus?.(e);
  };

  const onBlur = (e: React.FocusEvent<HTMLElement>) => {
    hideTooltip();
    children.props.onBlur?.(e);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const baseClass = 'paul-tooltip';
  const classes = [
    baseClass,
    className
  ].filter(Boolean).join(' ');

  // Clone the child to pass event handlers and aria attributes
  // ensuring we don't break the layout with a wrapper div
  // eslint-disable-next-line react-hooks/refs
  const trigger = cloneElement(children, {
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    'aria-describedby': isVisible ? tooltipId : undefined,
    className: `${children.props.className || ''} ${classes}`.trim(),
  });

  return (
    <>
      {trigger}
      {isVisible && (
        <div 
          id={tooltipId}
          className={`${baseClass}__content ${baseClass}__content--${position}`}
          role="tooltip"
        >
          {content}
          <div className={`${baseClass}__arrow ${baseClass}__arrow--${position}`} />
        </div>
      )}
    </>
  );
};

export default Tooltip;
