import { forwardRef } from 'react';

// Sealed envelope SVG illustration
const Envelope = forwardRef(({ onClick, className = '', style = {} }, ref) => {
  return (
    <div
      ref={ref}
      className={`desk-item clickable ${className}`}
      onClick={onClick}
      style={{
        width: 'clamp(80px, 10vw, 130px)',
        height: 'clamp(55px, 7vw, 90px)',
        ...style
      }}
    >
      <svg
        viewBox="0 0 120 80"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Envelope body */}
        <rect
          x="5"
          y="15"
          width="110"
          height="60"
          fill="#f7f3e9"
          stroke="#1a1815"
          strokeWidth="2.5"
          rx="2"
        />

        {/* Envelope flap (closed) */}
        <path
          d="M 5 15 L 60 45 L 115 15"
          fill="#e8e0cc"
          stroke="#1a1815"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Seal */}
        <circle
          cx="60"
          cy="40"
          r="12"
          fill="#c23b22"
          stroke="#8b1a1a"
          strokeWidth="1.5"
        />

        {/* Seal pattern (Yale Y inspired) */}
        <text
          x="60"
          y="44"
          textAnchor="middle"
          fontSize="12"
          fontFamily="Playfair Display, serif"
          fontWeight="bold"
          fill="#f7f3e9"
        >
          Y
        </text>

        {/* Address lines */}
        <line x1="20" y1="55" x2="50" y2="55" stroke="#3d3a35" strokeWidth="1" />
        <line x1="20" y1="62" x2="45" y2="62" stroke="#3d3a35" strokeWidth="1" />

        {/* Stamp placeholder */}
        <rect
          x="85"
          y="50"
          width="20"
          height="18"
          fill="#e8e0cc"
          stroke="#1a1815"
          strokeWidth="1"
        />
        <text
          x="95"
          y="62"
          textAnchor="middle"
          fontSize="6"
          fontFamily="IBM Plex Mono, monospace"
          fill="#3d3a35"
        >
          USA
        </text>
      </svg>
    </div>
  );
});

Envelope.displayName = 'Envelope';

export default Envelope;
