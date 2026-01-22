import { forwardRef, useState } from 'react';

// Simplified oval hands without finger details
const Hands = forwardRef(({ className = '' }, ref) => {
  const [hasGloves, setHasGloves] = useState(false);

  const toggleGloves = () => setHasGloves(!hasGloves);

  // Colors
  const skinColor = '#e8c9a8';
  const skinStroke = '#d4b896';
  const gloveColor = '#5f9ea0'; // Vintage turquoise (cadet blue)
  const gloveStroke = '#4a8385';

  const handFill = hasGloves ? gloveColor : skinColor;
  const knuckleStroke = hasGloves ? gloveStroke : skinStroke;

  return (
    <div ref={ref} className={`hands-container ${className}`}>
      {/* Left Hand - Simple oval shape */}
      <svg
        className="hand-svg hand-clickable"
        viewBox="0 0 100 130"
        xmlns="http://www.w3.org/2000/svg"
        onClick={toggleGloves}
        style={{ cursor: 'pointer' }}
      >
        {/* Main hand - oval shape (drawn first, goes under cuff) */}
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

      {/* Right Hand - Mirror of left */}
      <svg
        className="hand-svg hand-clickable"
        viewBox="0 0 100 130"
        xmlns="http://www.w3.org/2000/svg"
        onClick={toggleGloves}
        style={{ cursor: 'pointer' }}
      >
        {/* Main hand - oval shape (drawn first, goes under cuff) */}
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
    </div>
  );
});

Hands.displayName = 'Hands';

export default Hands;
