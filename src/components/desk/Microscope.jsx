import { forwardRef } from 'react';

// Microscope SVG illustration
const Microscope = forwardRef(({ onClick, className = '', style = {} }, ref) => {
  return (
    <div
      ref={ref}
      className={`microscope desk-item clickable ${className}`}
      onClick={onClick}
      style={{
        width: 'clamp(100px, 13vw, 170px)',
        height: 'clamp(140px, 18vw, 230px)',
        ...style
      }}
    >
      <svg
        viewBox="0 0 90 130"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Base */}
        <path
          d="M 15 120 L 75 120 L 70 110 L 20 110 Z"
          fill="#3d3a35"
          stroke="#1a1815"
          strokeWidth="2"
        />

        {/* Stage */}
        <rect
          x="25"
          y="85"
          width="40"
          height="8"
          fill="#5c4a3d"
          stroke="#1a1815"
          strokeWidth="2"
        />

        {/* Stage clips */}
        <rect x="28" y="83" width="8" height="4" fill="#1a1815" />
        <rect x="54" y="83" width="8" height="4" fill="#1a1815" />

        {/* Arm */}
        <path
          d="M 55 110 L 55 70 Q 55 60 50 55 L 50 30"
          fill="none"
          stroke="#1a1815"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Body tube */}
        <rect
          x="42"
          y="15"
          width="16"
          height="45"
          rx="2"
          fill="#3d3a35"
          stroke="#1a1815"
          strokeWidth="2"
        />

        {/* Eyepiece */}
        <ellipse
          cx="50"
          cy="12"
          rx="10"
          ry="5"
          fill="#2a2a2a"
          stroke="#1a1815"
          strokeWidth="2"
        />
        <ellipse
          cx="50"
          cy="8"
          rx="8"
          ry="4"
          fill="#111"
          stroke="#1a1815"
          strokeWidth="1.5"
        />

        {/* Objective lens */}
        <rect
          x="46"
          y="60"
          width="8"
          height="15"
          fill="#3d3a35"
          stroke="#1a1815"
          strokeWidth="1.5"
        />
        <ellipse
          cx="50"
          cy="76"
          rx="5"
          ry="2"
          fill="#4a6fa5"
          stroke="#1a1815"
          strokeWidth="1"
        />

        {/* Focus knobs */}
        <circle cx="65" cy="75" r="6" fill="#5c4a3d" stroke="#1a1815" strokeWidth="1.5" />
        <circle cx="65" cy="90" r="5" fill="#5c4a3d" stroke="#1a1815" strokeWidth="1.5" />

        {/* Light source indicator with pulse rings */}
        <g className="microscope-light">
          {/* Outer pulse rings */}
          <circle cx="45" cy="100" r="3" fill="none" stroke="#33ff33" strokeWidth="0.5" opacity="0">
            <animate
              attributeName="r"
              values="3;12"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.6;0"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="45" cy="100" r="3" fill="none" stroke="#33ff33" strokeWidth="0.5" opacity="0">
            <animate
              attributeName="r"
              values="3;12"
              dur="2s"
              begin="0.7s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.6;0"
              dur="2s"
              begin="0.7s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="45" cy="100" r="3" fill="none" stroke="#33ff33" strokeWidth="0.5" opacity="0">
            <animate
              attributeName="r"
              values="3;12"
              dur="2s"
              begin="1.4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.6;0"
              dur="2s"
              begin="1.4s"
              repeatCount="indefinite"
            />
          </circle>
          {/* Core light with glow */}
          <circle cx="45" cy="100" r="4" fill="#33ff33" opacity="0.3">
            <animate
              attributeName="r"
              values="4;5;4"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="45" cy="100" r="3" fill="#33ff33" opacity="0.9">
            <animate
              attributeName="opacity"
              values="0.9;0.6;0.9"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
});

Microscope.displayName = 'Microscope';

export default Microscope;
