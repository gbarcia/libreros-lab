import { forwardRef } from 'react';

// Pipette SVG illustration (decorative)
const Pipette = forwardRef(({ className = '', style = {} }, ref) => {
  return (
    <div
      ref={ref}
      className={`pipette desk-item ${className}`}
      style={{
        width: 'clamp(20px, 3vw, 35px)',
        height: 'clamp(100px, 12vw, 160px)',
        ...style
      }}
    >
      <svg
        viewBox="0 0 30 140"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Bulb top */}
        <ellipse
          cx="15"
          cy="15"
          rx="12"
          ry="14"
          fill="#3d3a35"
          stroke="#1a1815"
          strokeWidth="2"
        />

        {/* Bulb highlight */}
        <ellipse
          cx="12"
          cy="12"
          rx="4"
          ry="5"
          fill="#5c4a3d"
          opacity="0.5"
        />

        {/* Neck */}
        <rect
          x="11"
          y="28"
          width="8"
          height="15"
          fill="#5c4a3d"
          stroke="#1a1815"
          strokeWidth="1.5"
        />

        {/* Main body */}
        <rect
          x="10"
          y="43"
          width="10"
          height="70"
          fill="#f7f3e9"
          stroke="#1a1815"
          strokeWidth="2"
        />

        {/* Measurement markings */}
        <line x1="10" y1="55" x2="14" y2="55" stroke="#1a1815" strokeWidth="1" />
        <line x1="10" y1="65" x2="16" y2="65" stroke="#1a1815" strokeWidth="1" />
        <line x1="10" y1="75" x2="14" y2="75" stroke="#1a1815" strokeWidth="1" />
        <line x1="10" y1="85" x2="16" y2="85" stroke="#1a1815" strokeWidth="1" />
        <line x1="10" y1="95" x2="14" y2="95" stroke="#1a1815" strokeWidth="1" />
        <line x1="10" y1="105" x2="16" y2="105" stroke="#1a1815" strokeWidth="1" />

        {/* Tip */}
        <path
          d="M 12 113 L 15 135 L 18 113 Z"
          fill="#f7f3e9"
          stroke="#1a1815"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Liquid in tip */}
        <path
          d="M 13.5 118 L 15 130 L 16.5 118 Z"
          fill="#4a6fa5"
          opacity="0.6"
        />
      </svg>
    </div>
  );
});

Pipette.displayName = 'Pipette';

export default Pipette;
