import { forwardRef } from 'react';

// Scattered papers behind the test tubes (lab notes style)
const LabPapers = forwardRef(({ className = '', style = {} }, ref) => {
  return (
    <div
      ref={ref}
      className={`lab-papers ${className}`}
      style={{
        width: 'clamp(140px, 16vw, 200px)',
        height: 'clamp(110px, 14vw, 160px)',
        position: 'absolute',
        pointerEvents: 'none',
        ...style
      }}
    >
      {/* Lab data sheet */}
      <svg
        viewBox="0 0 100 130"
        style={{
          position: 'absolute',
          width: '50%',
          left: '5%',
          top: '5%',
          transform: 'rotate(-8deg)'
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
        {/* Grid/table */}
        <rect x="15" y="20" width="70" height="45" fill="none" stroke="#ddd" strokeWidth="0.5" />
        <line x1="15" y1="35" x2="85" y2="35" stroke="#ddd" strokeWidth="0.3" />
        <line x1="15" y1="50" x2="85" y2="50" stroke="#ddd" strokeWidth="0.3" />
        <line x1="40" y1="20" x2="40" y2="65" stroke="#ddd" strokeWidth="0.3" />
        <line x1="62" y1="20" x2="62" y2="65" stroke="#ddd" strokeWidth="0.3" />
        {/* Data points */}
        <text x="25" y="32" fontSize="6" fill="#3d3a35" opacity="0.5">2.4</text>
        <text x="48" y="32" fontSize="6" fill="#3d3a35" opacity="0.5">5.1</text>
        <text x="70" y="32" fontSize="6" fill="#3d3a35" opacity="0.5">3.8</text>
        <text x="25" y="47" fontSize="6" fill="#3d3a35" opacity="0.5">1.9</text>
        <text x="48" y="47" fontSize="6" fill="#3d3a35" opacity="0.5">4.7</text>
        <text x="70" y="47" fontSize="6" fill="#3d3a35" opacity="0.5">2.2</text>
      </svg>

      {/* Graph paper with curve */}
      <svg
        viewBox="0 0 100 130"
        style={{
          position: 'absolute',
          width: '48%',
          left: '40%',
          top: '25%',
          transform: 'rotate(12deg)'
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
        {/* Axes */}
        <line x1="20" y1="90" x2="80" y2="90" stroke="#3d3a35" strokeWidth="1" />
        <line x1="20" y1="90" x2="20" y2="25" stroke="#3d3a35" strokeWidth="1" />
        {/* Curve */}
        <path d="M25 85 Q35 80 45 60 T65 35 T80 30" stroke="#c23b22" strokeWidth="1.5" fill="none" />
        {/* Points */}
        <circle cx="45" cy="60" r="2" fill="#c23b22" />
        <circle cx="65" cy="35" r="2" fill="#c23b22" />
      </svg>

      {/* Small sticky note */}
      <svg
        viewBox="0 0 60 60"
        style={{
          position: 'absolute',
          width: '28%',
          left: '0%',
          top: '60%',
          transform: 'rotate(-18deg)'
        }}
      >
        <rect
          x="5"
          y="5"
          width="50"
          height="50"
          fill="#fffde7"
          stroke="#1a1815"
          strokeWidth="1.5"
        />
        {/* Check mark */}
        <path d="M15 30 L25 40 L45 18" stroke="#33a852" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
});

LabPapers.displayName = 'LabPapers';

export default LabPapers;
