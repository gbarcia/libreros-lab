import { forwardRef } from 'react';

// Petri dish SVG illustration
const PetriDish = forwardRef(({ onClick, className = '', style = {} }, ref) => {
  return (
    <div
      ref={ref}
      className={`petri-dish desk-item clickable ${className}`}
      onClick={onClick}
      style={{
        width: 'clamp(70px, 9vw, 110px)',
        height: 'clamp(50px, 6vw, 80px)',
        ...style
      }}
    >
      <svg
        viewBox="0 0 100 60"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Dish bottom (3D effect) */}
        <ellipse
          cx="50"
          cy="45"
          rx="45"
          ry="12"
          fill="#e8e0cc"
          stroke="#1a1815"
          strokeWidth="2"
        />

        {/* Dish side */}
        <path
          d="M 5 35 L 5 45 A 45 12 0 0 0 95 45 L 95 35"
          fill="#f7f3e9"
          stroke="#1a1815"
          strokeWidth="2"
        />

        {/* Dish top rim */}
        <ellipse
          cx="50"
          cy="35"
          rx="45"
          ry="12"
          fill="#f7f3e9"
          stroke="#1a1815"
          strokeWidth="2"
        />

        {/* Agar/culture medium */}
        <ellipse
          cx="50"
          cy="37"
          rx="38"
          ry="9"
          fill="#e8c9a8"
          opacity="0.8"
        />

        {/* Bacterial colonies */}
        <circle cx="35" cy="35" r="4" fill="#4a6fa5" opacity="0.7" />
        <circle cx="55" cy="33" r="5" fill="#4a6fa5" opacity="0.6" />
        <circle cx="65" cy="38" r="3" fill="#4a6fa5" opacity="0.8" />
        <circle cx="42" cy="40" r="3.5" fill="#4a6fa5" opacity="0.5" />
        <circle cx="58" cy="42" r="2.5" fill="#4a6fa5" opacity="0.7" />
        <circle cx="30" cy="38" r="2" fill="#4a6fa5" opacity="0.6" />
        <circle cx="70" cy="35" r="2" fill="#4a6fa5" opacity="0.5" />

        {/* Lid reflection */}
        <ellipse
          cx="40"
          cy="25"
          rx="15"
          ry="4"
          fill="white"
          opacity="0.3"
        />
      </svg>
    </div>
  );
});

PetriDish.displayName = 'PetriDish';

export default PetriDish;
