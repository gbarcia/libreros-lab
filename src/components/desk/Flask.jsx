import { forwardRef } from 'react';

// Erlenmeyer Flask SVG illustration
const Flask = forwardRef(({ onClick, className = '' }, ref) => {
  return (
    <div
      ref={ref}
      className={`desk-item clickable ${className}`}
      onClick={onClick}
      style={{
        width: 'clamp(60px, 8vw, 100px)',
        height: 'clamp(80px, 10vw, 130px)'
      }}
    >
      <svg
        viewBox="0 0 80 110"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Flask neck */}
        <rect
          x="30"
          y="5"
          width="20"
          height="30"
          fill="#f7f3e9"
          stroke="#1a1815"
          strokeWidth="2.5"
        />

        {/* Flask body */}
        <path
          d="M 30 35 L 10 90 Q 10 100 20 105 L 60 105 Q 70 100 70 90 L 50 35 Z"
          fill="#f7f3e9"
          stroke="#1a1815"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Liquid inside */}
        <path
          d="M 18 75 L 15 90 Q 15 98 22 102 L 58 102 Q 65 98 65 90 L 62 75 Z"
          fill="#4a6fa5"
          opacity="0.6"
        />

        {/* Measurement lines */}
        <line x1="15" y1="85" x2="25" y2="85" stroke="#1a1815" strokeWidth="1" />
        <line x1="13" y1="75" x2="20" y2="75" stroke="#1a1815" strokeWidth="1" />
        <line x1="12" y1="65" x2="18" y2="65" stroke="#1a1815" strokeWidth="1" />

        {/* Flask rim */}
        <ellipse
          cx="40"
          cy="5"
          rx="12"
          ry="3"
          fill="none"
          stroke="#1a1815"
          strokeWidth="2"
        />

        {/* Label */}
        <text
          x="40"
          y="55"
          textAnchor="middle"
          fontSize="8"
          fontFamily="IBM Plex Mono, monospace"
          fill="#1a1815"
        >
          TEAM
        </text>
      </svg>
    </div>
  );
});

Flask.displayName = 'Flask';

export default Flask;
