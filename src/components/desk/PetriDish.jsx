import { forwardRef } from 'react';

// Petri dish SVG illustration - top-down view with animated colonies
const PetriDish = forwardRef(({ onClick, className = '', style = {} }, ref) => {
  return (
    <div
      ref={ref}
      className={`petri-dish desk-item clickable petri-animate ${className}`}
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

        {/* Agar/culture medium - gray */}
        <circle
          cx="50"
          cy="50"
          r="36"
          fill="#a8a8a8"
          opacity="0.9"
        />

        {/* Bacterial colonies - animated growth */}
        <circle cx="35" cy="38" r="5" fill="#4a6fa5" opacity="0.7">
          <animate attributeName="r" values="5;6;5" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0.9;0.7" dur="3s" repeatCount="indefinite" />
        </circle>

        <circle cx="58" cy="42" r="6" fill="#4a6fa5" opacity="0.6">
          <animate attributeName="r" values="6;7.5;6" dur="4s" repeatCount="indefinite" begin="0.5s" />
          <animate attributeName="opacity" values="0.6;0.8;0.6" dur="4s" repeatCount="indefinite" begin="0.5s" />
        </circle>

        <circle cx="68" cy="55" r="4" fill="#4a6fa5" opacity="0.8">
          <animate attributeName="r" values="4;5;4" dur="2.5s" repeatCount="indefinite" begin="1s" />
        </circle>

        <circle cx="42" cy="58" r="4.5" fill="#4a6fa5" opacity="0.5">
          <animate attributeName="r" values="4.5;6;4.5" dur="3.5s" repeatCount="indefinite" begin="0.3s" />
          <animate attributeName="opacity" values="0.5;0.75;0.5" dur="3.5s" repeatCount="indefinite" begin="0.3s" />
        </circle>

        <circle cx="55" cy="65" r="3.5" fill="#4a6fa5" opacity="0.7">
          <animate attributeName="r" values="3.5;4.5;3.5" dur="2.8s" repeatCount="indefinite" begin="0.8s" />
        </circle>

        <circle cx="30" cy="52" r="3" fill="#4a6fa5" opacity="0.6">
          <animate attributeName="r" values="3;4;3" dur="3.2s" repeatCount="indefinite" begin="1.2s" />
        </circle>

        <circle cx="62" cy="32" r="3" fill="#4a6fa5" opacity="0.5">
          <animate attributeName="r" values="3;4.5;3" dur="4.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.7;0.5" dur="4.5s" repeatCount="indefinite" />
        </circle>

        <circle cx="48" cy="35" r="2.5" fill="#4a6fa5" opacity="0.6">
          <animate attributeName="r" values="2.5;3.5;2.5" dur="2.2s" repeatCount="indefinite" begin="0.6s" />
        </circle>

        <circle cx="38" cy="68" r="2" fill="#4a6fa5" opacity="0.5">
          <animate attributeName="r" values="2;3;2" dur="3s" repeatCount="indefinite" begin="1.5s" />
        </circle>

        {/* New budding colonies - appear and grow */}
        <circle cx="52" cy="50" r="0" fill="#5a8fc5" opacity="0">
          <animate attributeName="r" values="0;2;2.5;0" dur="6s" repeatCount="indefinite" begin="2s" />
          <animate attributeName="opacity" values="0;0.6;0.4;0" dur="6s" repeatCount="indefinite" begin="2s" />
        </circle>

        <circle cx="45" cy="45" r="0" fill="#5a8fc5" opacity="0">
          <animate attributeName="r" values="0;1.5;2;0" dur="5s" repeatCount="indefinite" begin="3.5s" />
          <animate attributeName="opacity" values="0;0.5;0.3;0" dur="5s" repeatCount="indefinite" begin="3.5s" />
        </circle>

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
