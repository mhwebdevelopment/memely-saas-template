import { useEffect, useRef, useCallback } from 'react';

export function useScrollAnimation() {
  const elementRef = useRef<HTMLElement>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    // Find all elements with animation classes
    const animatedElements = element.querySelectorAll(
      '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in'
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [handleIntersection]);

  return elementRef;
}