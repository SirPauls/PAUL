import React, { useState, Children, isValidElement, cloneElement } from 'react';
import './carousel.css';

export interface CarouselProps {
  /** The content of the carousel (slides) */
  children: React.ReactNode;
  /** Whether to show navigation arrows */
  showArrows?: boolean;
  /** Whether to show pagination dots */
  showDots?: boolean;
  /** Whether to autoplay the carousel */
  autoplay?: boolean;
  /** Autoplay interval in milliseconds */
  autoplayInterval?: number;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Carousel
 * 
 * A high-performance, touch-friendly carousel for showcasing a series of content.
 */
export const Carousel: React.FC<CarouselProps> = ({
  children,
  showArrows = true,
  showDots = true,
  autoplay = false,
  autoplayInterval = 3000,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = Children.toArray(children).filter(isValidElement);

  const goTo = (index: number) => {
    setCurrentIndex((index + slides.length) % slides.length);
  };

  const prev = () => goTo(currentIndex - 1);
  const next = () => goTo(currentIndex + 1);

  useState(() => {
    if (!autoplay) return;
    const interval = setInterval(next, autoplayInterval);
    return () => clearInterval(interval);
  });

  const baseClass = 'paul-carousel';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={`${baseClass}__viewport`}>
        <div 
          className={`${baseClass}__slider`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => {
            const newProps = Object.assign({}, slide.props, { 'aria-hidden': index !== currentIndex });
            return <div key={index} className={`${baseClass}__slide`}>
              {cloneElement(slide, newProps)}
            </div>
          })}
        </div>
      </div>
      {showArrows && (
        <>
          <button className={`${baseClass}__arrow ${baseClass}__arrow--left`} onClick={prev} aria-label="Previous slide">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className={`${baseClass}__arrow ${baseClass}__arrow--right`} onClick={next} aria-label="Next slide">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </>
      )}
      {showDots && (
        <div className={`${baseClass}__dots`}>
          {slides.map((_, index) => (
            <button 
              key={index} 
              className={`${baseClass}__dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
