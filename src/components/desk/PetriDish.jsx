import { forwardRef } from 'react';

// Petri dish SVG illustration - top-down view
const PetriDish = forwardRef(({ onClick, className = '', style = {} }, ref) => {
  return (
    <div
      ref={ref}
      className={`petri-dish desk-item clickable ${className}`}
      onClick={onClick}
      style={{
        width: 'clamp(70px, 9vw, 110px)',
        height: 'clamp(70px, 9vw, 110px)',
        ...style
      }}
    >
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Outer rim / lid edge */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="#f7f3e9"
          stroke="#1a1815"
          strokeWidth="2.5"
        />

        {/* Inner dish edge */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="#e8e0cc"
          stroke="#1a1815"
          strokeWidth="1.5"
        />

        {/* Agar/culture medium */}
        <circle
          cx="50"
          cy="50"
          r="36"
          fill="#e8c9a8"
          opacity="0.9"
        />

        {/* Bacterial colonies - scattered pattern */}
        <circle cx="35" cy="38" r="5" fill="#4a6fa5" opacity="0.7" />
        <circle cx="58" cy="42" r="6" fill="#4a6fa5" opacity="0.6" />
        <circle cx="68" cy="55" r="4" fill="#4a6fa5" opacity="0.8" />
        <circle cx="42" cy="58" r="4.5" fill="#4a6fa5" opacity="0.5" />
        <circle cx="55" cy="65" r="3.5" fill="#4a6fa5" opacity="0.7" />
        <circle cx="30" cy="52" r="3" fill="#4a6fa5" opacity="0.6" />
        <circle cx="62" cy="32" r="3" fill="#4a6fa5" opacity="0.5" />
        <circle cx="48" cy="35" r="2.5" fill="#4a6fa5" opacity="0.6" />
        <circle cx="38" cy="68" r="2" fill="#4a6fa5" opacity="0.5" />

        {/* Lid reflection highlight */}
        <path
          d="M 25 35 Q 35 25, 50 28 Q 55 29, 58 32"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    </div>
  );
});

PetriDish.displayName = 'PetriDish';

export default PetriDish;
