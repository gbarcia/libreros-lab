import { forwardRef, useState, useEffect } from 'react';

// Vintage Beeper/Pager SVG illustration
// Displays animated preview text on LCD screen
const Beeper = forwardRef(({ onClick, className = '', style = {} }, ref) => {
  const [displayText, setDisplayText] = useState('MEDIA');
  const messages = ['MEDIA', 'LAB', 'VIDEO', 'VIEW'];

  // Cycle through display messages
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % messages.length;
      setDisplayText(messages[index]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={ref}
      className={`beeper desk-item clickable ${className}`}
      onClick={onClick}
      style={{
        width: 'clamp(45px, 5.5vw, 70px)',
        height: 'clamp(72px, 9vw, 110px)',
        ...style
      }}
      aria-label="Open media gallery"
      role="button"
      tabIndex={0}
    >
      <svg
        viewBox="0 0 50 80"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Drop shadow */}
        <defs>
          <filter id="beeperShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="2" stdDeviation="1" floodOpacity="0.3" />
          </filter>
          <linearGradient id="beeperBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3a3a3a" />
            <stop offset="50%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
          <linearGradient id="screenGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0a1f0a" />
            <stop offset="100%" stopColor="#0d2a0d" />
          </linearGradient>
        </defs>

        {/* Antenna */}
        <rect
          x="36"
          y="2"
          width="5"
          height="12"
          rx="2.5"
          fill="#2a2a2a"
          stroke="#1a1815"
          strokeWidth="1"
        />
        <circle cx="38.5" cy="4" r="2" fill="#444" />

        {/* Main body */}
        <rect
          x="5"
          y="10"
          width="40"
          height="65"
          rx="4"
          ry="4"
          fill="url(#beeperBody)"
          stroke="#1a1815"
          strokeWidth="2"
          filter="url(#beeperShadow)"
        />

        {/* Body edge highlight */}
        <rect
          x="7"
          y="12"
          width="36"
          height="61"
          rx="3"
          ry="3"
          fill="none"
          stroke="#4a4a4a"
          strokeWidth="0.5"
        />

        {/* Screen bezel */}
        <rect
          x="9"
          y="16"
          width="32"
          height="22"
          rx="2"
          ry="2"
          fill="#1a1815"
        />

        {/* LCD Screen background */}
        <rect
          x="11"
          y="18"
          width="28"
          height="18"
          rx="1"
          ry="1"
          fill="url(#screenGlow)"
          className="beeper-screen"
        />

        {/* Scanlines effect */}
        <g className="beeper-scanlines" opacity="0.1">
          {[0, 2, 4, 6, 8, 10, 12, 14, 16].map(y => (
            <line
              key={y}
              x1="11"
              y1={18 + y}
              x2="39"
              y2={18 + y}
              stroke="#33cc33"
              strokeWidth="0.5"
            />
          ))}
        </g>

        {/* Screen text */}
        <text
          x="25"
          y="29"
          textAnchor="middle"
          className="beeper-screen-text"
          fontSize="7"
          fontFamily="monospace"
          fill="#33cc33"
          fontWeight="bold"
        >
          {displayText}
        </text>

        {/* Screen reflection */}
        <rect
          x="11"
          y="18"
          width="28"
          height="6"
          rx="1"
          fill="white"
          opacity="0.05"
        />

        {/* Speaker grille */}
        <g fill="#1a1815">
          <rect x="14" y="42" width="22" height="1.5" rx="0.5" />
          <rect x="14" y="45" width="22" height="1.5" rx="0.5" />
          <rect x="14" y="48" width="22" height="1.5" rx="0.5" />
        </g>

        {/* Buttons */}
        <circle cx="15" cy="58" r="3.5" fill="#444" stroke="#333" strokeWidth="1" />
        <circle cx="25" cy="58" r="3.5" fill="#444" stroke="#333" strokeWidth="1" />
        <circle cx="35" cy="58" r="3.5" fill="#444" stroke="#333" strokeWidth="1" />

        {/* Button highlights */}
        <circle cx="14" cy="57" r="1" fill="#555" opacity="0.5" />
        <circle cx="24" cy="57" r="1" fill="#555" opacity="0.5" />
        <circle cx="34" cy="57" r="1" fill="#555" opacity="0.5" />

        {/* Belt clip */}
        <rect
          x="18"
          y="68"
          width="14"
          height="8"
          rx="1"
          fill="#3a3a3a"
          stroke="#1a1815"
          strokeWidth="1"
        />
        <rect
          x="20"
          y="70"
          width="10"
          height="4"
          rx="0.5"
          fill="#2a2a2a"
        />

        {/* Brand label */}
        <text
          x="25"
          y="66"
          textAnchor="middle"
          fontSize="3.5"
          fontFamily="IBM Plex Mono, monospace"
          fill="#555"
          letterSpacing="0.5"
        >
          LIBREROS
        </text>
      </svg>
    </div>
  );
});

Beeper.displayName = 'Beeper';

export default Beeper;
