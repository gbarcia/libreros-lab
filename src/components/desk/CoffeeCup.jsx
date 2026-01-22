import { forwardRef } from 'react';

const CoffeeCup = forwardRef(({ className = '', style = {} }, ref) => {
  return (
    <div
      ref={ref}
      className={`coffee-cup desk-item ${className}`}
      style={{
        width: 'clamp(50px, 6vw, 80px)',
        height: 'clamp(60px, 8vw, 100px)',
        ...style
      }}
    >
      <svg
        viewBox="0 0 60 80"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Steam animation */}
        <g className="coffee-steam-svg">
          <path
            d="M 20 18 Q 18 12, 20 6"
            fill="none"
            stroke="#8a8a8a"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.4"
          >
            <animate
              attributeName="d"
              values="M 20 18 Q 18 12, 20 6;M 20 18 Q 22 12, 20 6;M 20 18 Q 18 12, 20 6"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.4;0.2;0.4"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M 30 16 Q 28 10, 30 4"
            fill="none"
            stroke="#8a8a8a"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
          >
            <animate
              attributeName="d"
              values="M 30 16 Q 28 10, 30 4;M 30 16 Q 32 10, 30 4;M 30 16 Q 28 10, 30 4"
              dur="2.5s"
              repeatCount="indefinite"
              begin="0.3s"
            />
            <animate
              attributeName="opacity"
              values="0.5;0.25;0.5"
              dur="2.5s"
              repeatCount="indefinite"
              begin="0.3s"
            />
          </path>
          <path
            d="M 40 18 Q 42 12, 40 6"
            fill="none"
            stroke="#8a8a8a"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.35"
          >
            <animate
              attributeName="d"
              values="M 40 18 Q 42 12, 40 6;M 40 18 Q 38 12, 40 6;M 40 18 Q 42 12, 40 6"
              dur="2.2s"
              repeatCount="indefinite"
              begin="0.6s"
            />
            <animate
              attributeName="opacity"
              values="0.35;0.15;0.35"
              dur="2.2s"
              repeatCount="indefinite"
              begin="0.6s"
            />
          </path>
        </g>

        {/* Cup body */}
        <path
          d="M 8 22 L 12 70 Q 14 75, 30 75 Q 46 75, 48 70 L 52 22 Z"
          fill="#f7f3e9"
          stroke="#1a1815"
          strokeWidth="2.5"
        />

        {/* Coffee inside */}
        <path
          d="M 10 26 L 13 65 Q 15 70, 30 70 Q 45 70, 47 65 L 50 26 Z"
          fill="#4a3728"
          opacity="0.9"
        />

        {/* Coffee surface highlight */}
        <ellipse cx="30" cy="26" rx="20" ry="4" fill="#5c4a3d" />
        <ellipse cx="28" cy="25" rx="8" ry="2" fill="#6d5a4a" opacity="0.5" />

        {/* Cup rim */}
        <ellipse
          cx="30"
          cy="22"
          rx="22"
          ry="5"
          fill="#f7f3e9"
          stroke="#1a1815"
          strokeWidth="2"
        />

        {/* Handle */}
        <path
          d="M 52 30 Q 62 32, 62 45 Q 62 58, 52 60"
          fill="none"
          stroke="#1a1815"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 52 32 Q 59 34, 59 45 Q 59 56, 52 58"
          fill="none"
          stroke="#f7f3e9"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Yale Y logo */}
        <text
          x="30"
          y="52"
          textAnchor="middle"
          fontSize="18"
          fontFamily="serif"
          fontWeight="bold"
          fill="#00356b"
        >
          Y
        </text>
      </svg>
    </div>
  );
});

CoffeeCup.displayName = 'CoffeeCup';

export default CoffeeCup;
