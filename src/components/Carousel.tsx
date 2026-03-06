import React, { useState } from 'react';
import './carousel.css';

export interface CarouselItem {
  id: string;
  image: string;
  title?: string;
  description?: string;
}

export interface CarouselProps {
  /** The items to display in the carousel */
  items: CarouselItem[];
  /** Whether to auto-play the carousel */
  autoPlay?: boolean;
  /** The interval for auto-play in milliseconds */
  interval?: number;
  /** Whether to show navigation dots */
  showDots?: boolean;
  /** Whether to show navigation arrows */
  showArrows?: boolean;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Carousel
 * 
 * A high-performance, smooth-transitioning carousel for immersive visual storytelling.
 */
export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = false,
  interval = 5000,
  showDots = true,
  showArrows = true,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  React.useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  const baseClass = 'paul-carousel';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} role="region" aria-label="Image Carousel">
      <div 
        className={`${baseClass}__track`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item) => (
          <div key={item.id} className={`${baseClass}__slide`}>
            <img className={`${baseClass}__image`} src={item.image} alt={item.title || ''} />
            {(item.title || item.description) && (
              <div className={`${baseClass}__caption`}>
                {item.title && <h3 className={`${baseClass}__slide-title`}>{item.title}</h3>}
                {item.description && <p className={`${baseClass}__slide-desc`}>{item.description}</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button 
            className={`${baseClass}__arrow ${baseClass}__arrow--left`} 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button 
            className={`${baseClass}__arrow ${baseClass}__arrow--right`} 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            ›
          </button>
        </>
      )}

      {showDots && (
        <div className={`${baseClass}__dots`}>
          {items.map((_, index) => (
            <button
              key={index}
              className={[
                `${baseClass}__dot`,
                index === currentIndex && `${baseClass}__dot--active`
              ].filter(Boolean).join(' ')}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
