import { forwardRef, useEffect, useRef } from 'react';
import gsap from 'gsap';

// Hands component using PNG image
const Hands = forwardRef(({ className = '', targetPosition = null }, ref) => {
  const handsRef = useRef(null);
  const containerRef = useRef(null);

  // Subtle breathing animation - gentle up and down movement
  useEffect(() => {
    if (!handsRef.current) return;

    const breathingAnimation = gsap.to(handsRef.current, {
      y: -8,
      duration: 2.5,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      repeatDelay: 0
    });

    return () => {
      breathingAnimation.kill();
    };
  }, []);

  // Animate hands toward target when clicked
  useEffect(() => {
    if (!targetPosition || !containerRef.current || !handsRef.current) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;
    const containerCenterY = containerRect.top + containerRect.height / 2;

    // Calculate offset from center to target
    const offsetX = targetPosition.x - containerCenterX;
    const offsetY = targetPosition.y - containerCenterY;

    // Animate hands toward target (horizontal only)
    const tl = gsap.timeline();

    tl.to(handsRef.current, {
      x: offsetX * 0.5,
      y: 0,
      duration: 0.4,
      ease: 'power2.out'
    });

    // Return to original position after delay
    tl.to(handsRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'power2.inOut',
      delay: 0.3
    });

  }, [targetPosition]);

  return (
    <div
      ref={(el) => {
        containerRef.current = el;
        if (ref) {
          if (typeof ref === 'function') ref(el);
          else ref.current = el;
        }
      }}
      className={`hands-container ${className}`}
    >
      <img
        ref={handsRef}
        src="/manos.png"
        alt="Hands"
        className="hands-image"
        style={{
          width: 'clamp(200px, 28vw, 320px)',
          height: 'auto',
          filter: 'drop-shadow(2px 3px 2px rgba(0,0,0,0.3))'
        }}
      />
    </div>
  );
});

Hands.displayName = 'Hands';

export default Hands;
