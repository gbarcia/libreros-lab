import { forwardRef } from 'react';

// Scattered papers beneath folder and notebook
const ScatteredPapers = forwardRef(({ className = '', style = {} }, ref) => {
  return (
    <div
      ref={ref}
      className={`scattered-papers ${className}`}
      style={{
        width: 'clamp(280px, 35vw, 450px)',
        height: 'clamp(200px, 25vw, 320px)',
        position: 'absolute',
        pointerEvents: 'none',
        ...style
      }}
    >
      {/* Paper 1 - tilted left */}
      <svg
        viewBox="0 0 100 130"
        style={{
          position: 'absolute',
          width: '35%',
          left: '5%',
          top: '20%',
          transform: 'rotate(-15deg)'
        }}
      >
        <rect
          x="5"
          y="5"
          width="90"
          height="120"
          fill="#f5f1e6"
          stroke="#1a1815"
          strokeWidth="1.5"
        />
        {/* Lines */}
        <line x1="15" y1="25" x2="80" y2="25" stroke="#ccc" strokeWidth="0.5" />
        <line x1="15" y1="40" x2="75" y2="40" stroke="#ccc" strokeWidth="0.5" />
        <line x1="15" y1="55" x2="70" y2="55" stroke="#ccc" strokeWidth="0.5" />
        <line x1="15" y1="70" x2="65" y2="70" stroke="#ccc" strokeWidth="0.5" />
        {/* Scribbles */}
        <path d="M15 25 Q30 23 45 25 T75 24" stroke="#3d3a35" strokeWidth="0.8" fill="none" opacity="0.6" />
        <path d="M15 40 Q25 38 40 40 T60 39" stroke="#3d3a35" strokeWidth="0.8" fill="none" opacity="0.6" />
      </svg>

      {/* Paper 2 - tilted right */}
      <svg
        viewBox="0 0 100 130"
        style={{
          position: 'absolute',
          width: '32%',
          left: '25%',
          top: '35%',
          transform: 'rotate(8deg)'
        }}
      >
        <rect
          x="5"
          y="5"
          width="90"
          height="120"
          fill="#f8f4e9"
          stroke="#1a1815"
          strokeWidth="1.5"
        />
        {/* Graph paper style */}
        <rect x="15" y="20" width="70" height="50" fill="none" stroke="#ddd" strokeWidth="0.5" />
        <line x1="15" y1="35" x2="85" y2="35" stroke="#ddd" strokeWidth="0.3" />
        <line x1="15" y1="50" x2="85" y2="50" stroke="#ddd" strokeWidth="0.3" />
        <line x1="40" y1="20" x2="40" y2="70" stroke="#ddd" strokeWidth="0.3" />
        <line x1="65" y1="20" x2="65" y2="70" stroke="#ddd" strokeWidth="0.3" />
        {/* Chart sketch */}
        <path d="M20 65 L35 45 L50 55 L65 30 L80 40" stroke="#002fa7" strokeWidth="1.2" fill="none" />
        <circle cx="35" cy="45" r="2" fill="#002fa7" />
        <circle cx="50" cy="55" r="2" fill="#002fa7" />
        <circle cx="65" cy="30" r="2" fill="#002fa7" />
      </svg>

      {/* Paper 3 - small note */}
      <svg
        viewBox="0 0 80 80"
        style={{
          position: 'absolute',
          width: '22%',
          left: '60%',
          top: '15%',
          transform: 'rotate(-22deg)'
        }}
      >
        <rect
          x="5"
          y="5"
          width="70"
          height="70"
          fill="#fffde7"
          stroke="#1a1815"
          strokeWidth="1.5"
        />
        {/* Handwritten notes */}
        <path d="M12 20 Q25 18 40 20 T60 19" stroke="#1a1815" strokeWidth="0.7" fill="none" opacity="0.5" />
        <path d="M12 32 Q20 30 35 32" stroke="#1a1815" strokeWidth="0.7" fill="none" opacity="0.5" />
        <path d="M12 44 Q30 42 50 44 T65 43" stroke="#1a1815" strokeWidth="0.7" fill="none" opacity="0.5" />
        <path d="M12 56 Q22 54 38 56" stroke="#1a1815" strokeWidth="0.7" fill="none" opacity="0.5" />
      </svg>

      {/* Paper 4 - folded corner */}
      <svg
        viewBox="0 0 100 130"
        style={{
          position: 'absolute',
          width: '30%',
          left: '55%',
          top: '45%',
          transform: 'rotate(18deg)'
        }}
      >
        <path
          d="M5 5 L75 5 L95 25 L95 125 L5 125 Z"
          fill="#f2ede2"
          stroke="#1a1815"
          strokeWidth="1.5"
        />
        {/* Folded corner */}
        <path
          d="M75 5 L75 25 L95 25"
          fill="#e0dbd0"
          stroke="#1a1815"
          strokeWidth="1"
        />
        {/* Red stamp/mark */}
        <circle cx="75" cy="100" r="12" fill="none" stroke="#c23b22" strokeWidth="2" opacity="0.7" />
        <text x="75" y="104" textAnchor="middle" fontSize="8" fill="#c23b22" opacity="0.7">OK</text>
      </svg>

      {/* Paper 5 - peeking from behind */}
      <svg
        viewBox="0 0 100 130"
        style={{
          position: 'absolute',
          width: '28%',
          left: '0%',
          top: '50%',
          transform: 'rotate(-5deg)'
        }}
      >
        <rect
          x="5"
          y="5"
          width="90"
          height="120"
          fill="#faf6eb"
          stroke="#1a1815"
          strokeWidth="1.5"
        />
        {/* Header line */}
        <line x1="15" y1="20" x2="85" y2="20" stroke="#002fa7" strokeWidth="1" />
        {/* Text lines */}
        <path d="M15 35 Q40 33 70 35" stroke="#3d3a35" strokeWidth="0.6" fill="none" opacity="0.4" />
        <path d="M15 48 Q35 46 60 48" stroke="#3d3a35" strokeWidth="0.6" fill="none" opacity="0.4" />
        <path d="M15 61 Q45 59 80 61" stroke="#3d3a35" strokeWidth="0.6" fill="none" opacity="0.4" />
      </svg>
    </div>
  );
});

ScatteredPapers.displayName = 'ScatteredPapers';

export default ScatteredPapers;
