import { forwardRef } from 'react';

// Simplified oval hands without finger details
const Hands = forwardRef(({ className = '' }, ref) => {
  return (
    <div ref={ref} className={`hands-container ${className}`}>
      {/* Left Hand - Simple oval shape */}
      <svg className="hand-svg" viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg">
        {/* Shirt cuff */}
        <rect x="15" y="100" width="70" height="30" rx="3" fill="#fff" stroke="#1a1815" strokeWidth="2.5"/>

        {/* Main hand - oval shape */}
        <ellipse
          cx="50"
          cy="55"
          rx="38"
          ry="50"
          fill="#e8c9a8"
          stroke="#1a1815"
          strokeWidth="2.5"
        />

        {/* Thumb - small oval (fill only) */}
        <ellipse
          cx="88"
          cy="70"
          rx="12"
          ry="18"
          fill="#e8c9a8"
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
          stroke="#d4b896"
          strokeWidth="1.5"
          opacity="0.5"
        />
      </svg>

      {/* Right Hand - Mirror of left */}
      <svg className="hand-svg" viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg">
        {/* Shirt cuff */}
        <rect x="15" y="100" width="70" height="30" rx="3" fill="#fff" stroke="#1a1815" strokeWidth="2.5"/>

        {/* Main hand - oval shape */}
        <ellipse
          cx="50"
          cy="55"
          rx="38"
          ry="50"
          fill="#e8c9a8"
          stroke="#1a1815"
          strokeWidth="2.5"
        />

        {/* Thumb - small oval (mirrored, fill only) */}
        <ellipse
          cx="12"
          cy="70"
          rx="12"
          ry="18"
          fill="#e8c9a8"
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
          stroke="#d4b896"
          strokeWidth="1.5"
          opacity="0.5"
        />
      </svg>
    </div>
  );
});

Hands.displayName = 'Hands';

export default Hands;
