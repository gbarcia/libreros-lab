import { forwardRef } from 'react';

// Test tubes in rack SVG illustration (decorative)
const TestTubes = forwardRef(({ className = '' }, ref) => {
  return (
    <div
      ref={ref}
      className={`desk-item ${className}`}
      style={{
        width: 'clamp(60px, 8vw, 100px)',
        height: 'clamp(70px, 9vw, 110px)'
      }}
    >
      <svg
        viewBox="0 0 80 90"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Rack base */}
        <rect
          x="5"
          y="75"
          width="70"
          height="10"
          fill="#5c4a3d"
          stroke="#1a1815"
          strokeWidth="2"
          rx="2"
        />

        {/* Rack top bar */}
        <rect
          x="5"
          y="25"
          width="70"
          height="6"
          fill="#5c4a3d"
          stroke="#1a1815"
          strokeWidth="2"
          rx="1"
        />

        {/* Rack supports */}
        <rect x="8" y="31" width="4" height="44" fill="#5c4a3d" stroke="#1a1815" strokeWidth="1" />
        <rect x="68" y="31" width="4" height="44" fill="#5c4a3d" stroke="#1a1815" strokeWidth="1" />

        {/* Test tube 1 - blue liquid */}
        <rect x="18" y="10" width="10" height="55" rx="5" fill="#f7f3e9" stroke="#1a1815" strokeWidth="1.5" />
        <rect x="19" y="40" width="8" height="23" rx="4" fill="#002fa7" opacity="0.6" />

        {/* Test tube 2 - green liquid */}
        <rect x="35" y="10" width="10" height="55" rx="5" fill="#f7f3e9" stroke="#1a1815" strokeWidth="1.5" />
        <rect x="36" y="35" width="8" height="28" rx="4" fill="#33ff33" opacity="0.5" />

        {/* Test tube 3 - red liquid */}
        <rect x="52" y="10" width="10" height="55" rx="5" fill="#f7f3e9" stroke="#1a1815" strokeWidth="1.5" />
        <rect x="53" y="45" width="8" height="18" rx="4" fill="#c23b22" opacity="0.6" />

        {/* Tube rims */}
        <ellipse cx="23" cy="10" rx="5" ry="2" fill="none" stroke="#1a1815" strokeWidth="1.5" />
        <ellipse cx="40" cy="10" rx="5" ry="2" fill="none" stroke="#1a1815" strokeWidth="1.5" />
        <ellipse cx="57" cy="10" rx="5" ry="2" fill="none" stroke="#1a1815" strokeWidth="1.5" />
      </svg>
    </div>
  );
});

TestTubes.displayName = 'TestTubes';

export default TestTubes;
