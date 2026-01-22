import { forwardRef } from 'react';

// Scattered papers behind the microscope (observation notes style)
const MicroscopePapers = forwardRef(({ className = '', style = {} }, ref) => {
  return (
    <div
      ref={ref}
      className={`microscope-papers ${className}`}
      style={{
        width: 'clamp(120px, 14vw, 180px)',
        height: 'clamp(100px, 12vw, 150px)',
        position: 'absolute',
        pointerEvents: 'none',
        ...style
      }}
    >
      {/* Observation notes sheet */}
      <svg
        viewBox="0 0 100 130"
        style={{
          position: 'absolute',
          width: '55%',
          left: '0%',
          top: '10%',
          transform: 'rotate(-5deg)'
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
        {/* Lines for notes */}
        <line x1="15" y1="25" x2="80" y2="25" stroke="#ccc" strokeWidth="0.5" />
        <line x1="15" y1="38" x2="80" y2="38" stroke="#ccc" strokeWidth="0.5" />
        <line x1="15" y1="51" x2="80" y2="51" stroke="#ccc" strokeWidth="0.5" />
        <line x1="15" y1="64" x2="80" y2="64" stroke="#ccc" strokeWidth="0.5" />
        {/* Handwritten scribbles */}
        <path d="M18 23 Q25 20 35 23 T55 22" stroke="#3d3a35" strokeWidth="0.8" fill="none" opacity="0.4" />
        <path d="M18 36 Q30 33 45 36 T70 35" stroke="#3d3a35" strokeWidth="0.8" fill="none" opacity="0.4" />
        <path d="M18 49 Q22 46 32 49" stroke="#3d3a35" strokeWidth="0.8" fill="none" opacity="0.4" />
      </svg>

      {/* Cell diagram sketch */}
      <svg
        viewBox="0 0 100 130"
        style={{
          position: 'absolute',
          width: '50%',
          left: '35%',
          top: '20%',
          transform: 'rotate(8deg)'
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
        {/* Cell drawing */}
        <ellipse cx="50" cy="55" rx="28" ry="22" fill="none" stroke="#002fa7" strokeWidth="1.5" />
        <ellipse cx="50" cy="55" rx="10" ry="8" fill="#002fa7" opacity="0.2" stroke="#002fa7" strokeWidth="1" />
        {/* Organelles */}
        <circle cx="35" cy="48" r="3" fill="#c23b22" opacity="0.5" />
        <circle cx="60" cy="62" r="2.5" fill="#c23b22" opacity="0.5" />
        <circle cx="42" cy="65" r="2" fill="#c23b22" opacity="0.5" />
        {/* Label arrow */}
        <line x1="70" y1="40" x2="55" y2="50" stroke="#3d3a35" strokeWidth="0.8" />
        <text x="72" y="38" fontSize="5" fill="#3d3a35" opacity="0.6">nucleus</text>
      </svg>

      {/* Small note */}
      <svg
        viewBox="0 0 60 60"
        style={{
          position: 'absolute',
          width: '30%',
          left: '55%',
          top: '65%',
          transform: 'rotate(-12deg)'
        }}
      >
        <rect
          x="5"
          y="5"
          width="50"
          height="50"
          fill="#e3f2fd"
          stroke="#1a1815"
          strokeWidth="1.5"
        />
        {/* Magnification note */}
        <text x="12" y="25" fontSize="7" fill="#002fa7" fontFamily="IBM Plex Mono, monospace">40x</text>
        <text x="12" y="40" fontSize="5" fill="#3d3a35" opacity="0.6">sample 3</text>
      </svg>
    </div>
  );
});

MicroscopePapers.displayName = 'MicroscopePapers';

export default MicroscopePapers;
