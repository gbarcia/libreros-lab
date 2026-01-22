import { forwardRef } from 'react';

// Test tubes in rack SVG illustration - angled perspective (decorative)
const TestTubes = forwardRef(({ className = '', style = {} }, ref) => {
  return (
    <div
      ref={ref}
      className={`test-tubes desk-item ${className}`}
      style={{
        width: 'clamp(70px, 9vw, 110px)',
        height: 'clamp(70px, 9vw, 110px)',
        ...style
      }}
    >
      <svg
        viewBox="0 0 80 90"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Wooden rack - back panel */}
        <rect
          x="8"
          y="55"
          width="64"
          height="8"
          fill="#5c4a3d"
          stroke="#1a1815"
          strokeWidth="1.5"
          rx="2"
        />

        {/* Wooden rack - front panel with holes */}
        <rect
          x="5"
          y="65"
          width="70"
          height="10"
          fill="#6d5a4a"
          stroke="#1a1815"
          strokeWidth="1.5"
          rx="2"
        />

        {/* Rack holes */}
        <ellipse cx="20" cy="70" rx="6" ry="3" fill="#3d322a" />
        <ellipse cx="40" cy="70" rx="6" ry="3" fill="#3d322a" />
        <ellipse cx="60" cy="70" rx="6" ry="3" fill="#3d322a" />

        {/* Wood grain on front */}
        <line x1="10" y1="68" x2="70" y2="68" stroke="#5c4a3d" strokeWidth="1" opacity="0.5" />
        <line x1="10" y1="72" x2="70" y2="72" stroke="#5c4a3d" strokeWidth="1" opacity="0.5" />

        {/* Test tube 1 - blue liquid */}
        <rect
          x="15"
          y="15"
          width="10"
          height="50"
          rx="5"
          fill="#f7f3e9"
          stroke="#1a1815"
          strokeWidth="1.5"
        />
        <rect
          x="16"
          y="30"
          width="8"
          height="33"
          rx="4"
          fill="#002fa7"
          opacity="0.7"
        />
        <ellipse cx="20" cy="15" rx="5" ry="2" fill="#f7f3e9" stroke="#1a1815" strokeWidth="1" />
        <rect x="18" y="12" width="4" height="5" fill="#f7f3e9" stroke="#1a1815" strokeWidth="1" />

        {/* Test tube 2 - green liquid (taller) */}
        <rect
          x="35"
          y="10"
          width="10"
          height="55"
          rx="5"
          fill="#f7f3e9"
          stroke="#1a1815"
          strokeWidth="1.5"
        />
        <rect
          x="36"
          y="22"
          width="8"
          height="41"
          rx="4"
          fill="#33ff33"
          opacity="0.6"
        />
        <ellipse cx="40" cy="10" rx="5" ry="2" fill="#f7f3e9" stroke="#1a1815" strokeWidth="1" />
        <rect x="38" y="7" width="4" height="5" fill="#f7f3e9" stroke="#1a1815" strokeWidth="1" />

        {/* Test tube 3 - red liquid */}
        <rect
          x="55"
          y="20"
          width="10"
          height="45"
          rx="5"
          fill="#f7f3e9"
          stroke="#1a1815"
          strokeWidth="1.5"
        />
        <rect
          x="56"
          y="38"
          width="8"
          height="25"
          rx="4"
          fill="#c23b22"
          opacity="0.7"
        />
        <ellipse cx="60" cy="20" rx="5" ry="2" fill="#f7f3e9" stroke="#1a1815" strokeWidth="1" />
        <rect x="58" y="17" width="4" height="5" fill="#f7f3e9" stroke="#1a1815" strokeWidth="1" />

        {/* Highlights on tubes */}
        <line x1="17" y1="20" x2="17" y2="55" stroke="white" strokeWidth="1.5" opacity="0.3" />
        <line x1="37" y1="15" x2="37" y2="55" stroke="white" strokeWidth="1.5" opacity="0.3" />
        <line x1="57" y1="25" x2="57" y2="55" stroke="white" strokeWidth="1.5" opacity="0.3" />

        {/* Rack base/feet */}
        <rect x="8" y="75" width="8" height="5" fill="#5c4a3d" stroke="#1a1815" strokeWidth="1" rx="1" />
        <rect x="64" y="75" width="8" height="5" fill="#5c4a3d" stroke="#1a1815" strokeWidth="1" rx="1" />
      </svg>
    </div>
  );
});

TestTubes.displayName = 'TestTubes';

export default TestTubes;
