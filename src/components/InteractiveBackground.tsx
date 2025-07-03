import { useEffect, useRef, useCallback } from 'react';

export function InteractiveBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!backgroundRef.current) return;

    // Cancel previous animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      if (!backgroundRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate position as percentage with bounds checking
      const xPercent = Math.max(0, Math.min(100, (clientX / innerWidth) * 100));
      const yPercent = Math.max(0, Math.min(100, (clientY / innerHeight) * 100));
      
      // Update CSS custom properties for the gradient position
      backgroundRef.current.style.setProperty('--mouse-x', `${xPercent}%`);
      backgroundRef.current.style.setProperty('--mouse-y', `${yPercent}%`);
    });
  }, []);

  useEffect(() => {
    // Set initial position to center
    if (backgroundRef.current) {
      backgroundRef.current.style.setProperty('--mouse-x', '50%');
      backgroundRef.current.style.setProperty('--mouse-y', '50%');
    }

    // Add event listener with passive option for better performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleMouseMove]);

  return (
    <div
      ref={backgroundRef}
      className="fixed inset-0 pointer-events-none z-0 interactive-gradient-bg"
      style={{
        background: `
          radial-gradient(
            1200px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(127, 214, 137, 0.15) 0%,
            rgba(127, 214, 137, 0.08) 25%,
            rgba(127, 214, 137, 0.04) 50%,
            transparent 70%
          ),
          radial-gradient(
            800px circle at calc(var(--mouse-x, 50%) + 20%) calc(var(--mouse-y, 50%) - 15%),
            rgba(110, 231, 183, 0.12) 0%,
            rgba(110, 231, 183, 0.06) 30%,
            transparent 60%
          )
        `,
      }}
      role="presentation"
      aria-hidden="true"
    />
  );
}