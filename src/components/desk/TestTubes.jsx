import { forwardRef } from 'react';

// Test tubes in rack SVG illustration - top-down view (decorative)
const TestTubes = forwardRef(({ className = '', style = {} }, ref) => {
  return (
    <div
      ref={ref}
      className={`test-tubes desk-item ${className}`}
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
        {/* Rack - wooden base with holes */}
        <rect
          x="5"
          y="10"
          width="90"
          height="40"
          fill="#5c4a3d"
          stroke="#1a1815"
          strokeWidth="2"
          rx="4"
        />

        {/* Wood grain lines */}
        <line x1="10" y1="20" x2="90" y2="20" stroke="#3d322a" strokeWidth="1" opacity="0.4" />
        <line x1="10" y1="30" x2="90" y2="30" stroke="#3d322a" strokeWidth="1" opacity="0.3" />
        <line x1="10" y1="40" x2="90" y2="40" stroke="#3d322a" strokeWidth="1" opacity="0.4" />

        {/* Hole 1 with tube - blue liquid */}
        <circle cx="22" cy="30" r="10" fill="#3d322a" stroke="#1a1815" strokeWidth="1" />
        <circle cx="22" cy="30" r="8" fill="#f7f3e9" stroke="#1a1815" strokeWidth="1.5" />
        <circle cx="22" cy="30" r="6" fill="#002fa7" opacity="0.7" />
        <circle cx="20" cy="28" r="2" fill="white" opacity="0.4" />

        {/* Hole 2 with tube - green liquid */}
        <circle cx="50" cy="30" r="10" fill="#3d322a" stroke="#1a1815" strokeWidth="1" />
        <circle cx="50" cy="30" r="8" fill="#f7f3e9" stroke="#1a1815" strokeWidth="1.5" />
        <circle cx="50" cy="30" r="6" fill="#33ff33" opacity="0.6" />
        <circle cx="48" cy="28" r="2" fill="white" opacity="0.4" />

        {/* Hole 3 with tube - red liquid */}
        <circle cx="78" cy="30" r="10" fill="#3d322a" stroke="#1a1815" strokeWidth="1" />
        <circle cx="78" cy="30" r="8" fill="#f7f3e9" stroke="#1a1815" strokeWidth="1.5" />
        <circle cx="78" cy="30" r="6" fill="#c23b22" opacity="0.7" />
        <circle cx="76" cy="28" r="2" fill="white" opacity="0.4" />
      </svg>
    </div>
  );
});

TestTubes.displayName = 'TestTubes';

export default TestTubes;
