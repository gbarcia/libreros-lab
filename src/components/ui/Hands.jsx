import { forwardRef, useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

// Simplified oval hands with extending arms
const Hands = forwardRef(({ className = '', targetPosition = null, isActive = false }, ref) => {
  const [hasGloves, setHasGloves] = useState(false);
  const leftHandRef = useRef(null);
  const rightHandRef = useRef(null);
  const leftArmRef = useRef(null);
  const rightArmRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const toggleGloves = (e) => {
    e.stopPropagation();
    setHasGloves(!hasGloves);
  };

  // Animate hands toward target when clicked, return when closed
  useEffect(() => {
    if (!containerRef.current) return;

    // Kill any existing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    const tl = gsap.timeline();
    animationRef.current = tl;

    if (targetPosition && isActive) {
      // Calculate position
      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;
      const containerCenterY = containerRect.top + containerRect.height / 2;

      const offsetX = targetPosition.x - containerCenterX;
      const offsetY = targetPosition.y - containerCenterY;

      // Arm length based on distance (negative Y because going up)
      const distance = Math.abs(offsetY) + 100;
      const armLength = Math.min(distance, 500);

      // Move hands toward target and extend arms
      tl.to([leftHandRef.current, rightHandRef.current], {
        x: offsetX * 0.5,
        y: offsetY * 0.8,
        duration: 0.5,
        ease: 'power2.out'
      });

      tl.to([leftArmRef.current, rightArmRef.current], {
        height: armLength,
        duration: 0.5,
        ease: 'power2.out'
      }, '<');

    } else {
      // Return to original position
      tl.to([leftHandRef.current, rightHandRef.current], {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'power2.inOut'
      });

      tl.to([leftArmRef.current, rightArmRef.current], {
        height: 60,
        duration: 0.5,
        ease: 'power2.inOut'
      }, '<');
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [targetPosition, isActive]);

  // Colors
  const skinColor = '#e8c9a8';
  const skinStroke = '#d4b896';
  const gloveColor = '#5f9ea0';
  const gloveStroke = '#4a8385';

  const handFill = hasGloves ? gloveColor : skinColor;
  const knuckleStroke = hasGloves ? gloveStroke : skinStroke;

  return (
    <div ref={(el) => {
      containerRef.current = el;
      if (ref) {
        if (typeof ref === 'function') ref(el);
        else ref.current = el;
      }
    }} className={`hands-container ${className}`}>
      {/* Left Hand with Arm */}
      <div className="hand-with-arm">
        <svg
          ref={leftHandRef}
          className="hand-svg hand-clickable"
          viewBox="0 0 100 130"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleGloves}
          style={{ cursor: 'pointer' }}
        >
          {/* Main hand - oval shape */}
          <ellipse
            cx="50"
            cy="55"
            rx="38"
            ry="50"
            fill={handFill}
            stroke="#1a1815"
            strokeWidth="2.5"
          />

          {/* Thumb - small oval (fill only) */}
          <ellipse
            cx="88"
            cy="70"
            rx="12"
            ry="18"
            fill={handFill}
          />
          {/* Thumb outer border only (right half) */}
          <path
            d="M 88 52 A 12 18 0 0 1 88 88"
            fill="none"
            stroke="#1a1815"
            strokeWidth="2.5"
          />

          {/* Subtle knuckle line */}
          <path
            d="M 20 45 Q 50 35 80 45"
            fill="none"
            stroke={knuckleStroke}
            strokeWidth="1.5"
            opacity="0.5"
          />

          {/* Shirt cuff - drawn last to appear on top */}
          <rect x="15" y="100" width="70" height="30" rx="3" fill="#fff" stroke="#1a1815" strokeWidth="2.5"/>
        </svg>
        {/* Left Arm - extends downward */}
        <div
          ref={leftArmRef}
          className="arm"
          style={{ backgroundColor: skinColor }}
        />
      </div>

      {/* Right Hand with Arm */}
      <div className="hand-with-arm">
        <svg
          ref={rightHandRef}
          className="hand-svg hand-clickable"
          viewBox="0 0 100 130"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleGloves}
          style={{ cursor: 'pointer' }}
        >
          {/* Main hand - oval shape */}
          <ellipse
            cx="50"
            cy="55"
            rx="38"
            ry="50"
            fill={handFill}
            stroke="#1a1815"
            strokeWidth="2.5"
          />

          {/* Thumb - small oval (mirrored, fill only) */}
          <ellipse
            cx="12"
            cy="70"
            rx="12"
            ry="18"
            fill={handFill}
          />
          {/* Thumb outer border only (left half) */}
          <path
            d="M 12 52 A 12 18 0 0 0 12 88"
            fill="none"
            stroke="#1a1815"
            strokeWidth="2.5"
          />

          {/* Subtle knuckle line */}
          <path
            d="M 20 45 Q 50 35 80 45"
            fill="none"
            stroke={knuckleStroke}
            strokeWidth="1.5"
            opacity="0.5"
          />

          {/* Shirt cuff - drawn last to appear on top */}
          <rect x="15" y="100" width="70" height="30" rx="3" fill="#fff" stroke="#1a1815" strokeWidth="2.5"/>
        </svg>
        {/* Right Arm - extends downward */}
        <div
          ref={rightArmRef}
          className="arm"
          style={{ backgroundColor: skinColor }}
        />
      </div>
    </div>
  );
});

Hands.displayName = 'Hands';

export default Hands;
