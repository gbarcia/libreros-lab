import { forwardRef, useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

// Simplified oval hands with extending arms
const Hands = forwardRef(({ className = '', targetPosition = null }, ref) => {
  const [hasGloves, setHasGloves] = useState(false);
  const leftHandRef = useRef(null);
  const rightHandRef = useRef(null);
  const leftArmRef = useRef(null);
  const rightArmRef = useRef(null);
  const containerRef = useRef(null);

  const toggleGloves = (e) => {
    e.stopPropagation();
    setHasGloves(!hasGloves);
  };

  // Animate hands toward target when clicked
  useEffect(() => {
    if (!targetPosition || !containerRef.current) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;
    const containerCenterY = containerRect.top + containerRect.height / 2;

    // Calculate offset from center to target
    const offsetX = targetPosition.x - containerCenterX;
    const offsetY = targetPosition.y - containerCenterY;

    // Arm length based on distance
    const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
    const armLength = Math.min(distance * 0.8, 400);

    // Animate both hands and arms
    const tl = gsap.timeline();

    // Move hands toward target
    tl.to([leftHandRef.current, rightHandRef.current], {
      x: offsetX * 0.6,
      y: offsetY * 0.7,
      duration: 0.4,
      ease: 'power2.out'
    });

    // Extend arms
    tl.to([leftArmRef.current, rightArmRef.current], {
      height: armLength,
      duration: 0.4,
      ease: 'power2.out'
    }, '<');

    // Return to original position after delay
    tl.to([leftHandRef.current, rightHandRef.current], {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'power2.inOut',
      delay: 0.3
    });

    tl.to([leftArmRef.current, rightArmRef.current], {
      height: 80,
      duration: 0.6,
      ease: 'power2.inOut'
    }, '<');

  }, [targetPosition]);

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
      {/* Left Arm */}
      <div className="arm-wrapper left-arm">
        <div
          ref={leftArmRef}
          className="arm"
          style={{ backgroundColor: skinColor }}
        />
        {/* Left Hand */}
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

          {/* Thumb - wider ellipse rotated for natural look */}
          <ellipse
            cx="90"
            cy="68"
            rx="18"
            ry="12"
            fill={handFill}
            transform="rotate(-25 90 68)"
          />
          {/* Thumb outer border only (outer edge) */}
          <path
            d="M 78 55 Q 105 60, 102 80 Q 98 90, 85 82"
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
      </div>

      {/* Right Arm */}
      <div className="arm-wrapper right-arm">
        <div
          ref={rightArmRef}
          className="arm"
          style={{ backgroundColor: skinColor }}
        />
        {/* Right Hand */}
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

          {/* Thumb - wider ellipse rotated for natural look (mirrored) */}
          <ellipse
            cx="10"
            cy="68"
            rx="18"
            ry="12"
            fill={handFill}
            transform="rotate(25 10 68)"
          />
          {/* Thumb outer border only (outer edge, mirrored) */}
          <path
            d="M 22 55 Q -5 60, -2 80 Q 2 90, 15 82"
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
      </div>
    </div>
  );
});

Hands.displayName = 'Hands';

export default Hands;
