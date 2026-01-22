import { forwardRef } from 'react';

const CoffeeCup = forwardRef(({ className = '', style = {} }, ref) => {
  return (
    <div
      ref={ref}
      className={`coffee-cup desk-item ${className}`}
      style={{
        width: 'clamp(65px, 7.8vw, 104px)',
        height: 'clamp(78px, 10.4vw, 130px)',
        ...style
      }}
    >
      <svg
        viewBox="0 0 60 80"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Cup body */}
        <path
          d="M 8 22 L 12 70 Q 14 75, 30 75 Q 46 75, 48 70 L 52 22 Z"
          fill="#ffffff"
          stroke="#1a1815"
          strokeWidth="2.5"
        />

        {/* Cup interior - white/empty */}
        <path
          d="M 10 26 L 13 65 Q 15 70, 30 70 Q 45 70, 47 65 L 50 26 Z"
          fill="#f5f5f5"
        />

        {/* Interior shadow */}
        <ellipse cx="30" cy="26" rx="20" ry="4" fill="#eeeeee" />

        {/* Cup rim */}
        <ellipse
          cx="30"
          cy="22"
          rx="22"
          ry="5"
          fill="#ffffff"
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
          stroke="#ffffff"
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
