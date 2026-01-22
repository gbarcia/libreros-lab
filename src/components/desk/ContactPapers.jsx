import { forwardRef } from 'react';

// Scattered papers behind the envelope (contact section)
const ContactPapers = forwardRef(({ className = '', style = {} }, ref) => {
  return (
    <div
      ref={ref}
      className={`contact-papers ${className}`}
      style={{
        width: 'clamp(150px, 18vw, 220px)',
        height: 'clamp(120px, 15vw, 180px)',
        position: 'absolute',
        pointerEvents: 'none',
        ...style
      }}
    >
      {/* Letter/note 1 */}
      <svg
        viewBox="0 0 100 130"
        style={{
          position: 'absolute',
          width: '50%',
          left: '0%',
          top: '10%',
          transform: 'rotate(-12deg)'
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
        {/* Address lines */}
        <path d="M15 30 Q35 28 60 30" stroke="#3d3a35" strokeWidth="0.8" fill="none" opacity="0.5" />
        <path d="M15 45 Q30 43 50 45" stroke="#3d3a35" strokeWidth="0.8" fill="none" opacity="0.5" />
        <path d="M15 60 Q40 58 65 60" stroke="#3d3a35" strokeWidth="0.8" fill="none" opacity="0.5" />
        {/* Stamp placeholder */}
        <rect x="60" y="80" width="25" height="30" fill="#e8e0cc" stroke="#ccc" strokeWidth="0.5" />
      </svg>

      {/* Postcard style */}
      <svg
        viewBox="0 0 130 90"
        style={{
          position: 'absolute',
          width: '55%',
          left: '35%',
          top: '40%',
          transform: 'rotate(8deg)'
        }}
      >
        <rect
          x="5"
          y="5"
          width="120"
          height="80"
          fill="#faf6eb"
          stroke="#1a1815"
          strokeWidth="1.5"
        />
        {/* Divider line */}
        <line x1="65" y1="10" x2="65" y2="80" stroke="#ccc" strokeWidth="0.5" />
        {/* Address side */}
        <path d="M75 25 Q95 23 115 25" stroke="#3d3a35" strokeWidth="0.6" fill="none" opacity="0.4" />
        <path d="M75 38 Q90 36 110 38" stroke="#3d3a35" strokeWidth="0.6" fill="none" opacity="0.4" />
        <path d="M75 51 Q88 49 105 51" stroke="#3d3a35" strokeWidth="0.6" fill="none" opacity="0.4" />
        {/* Stamp */}
        <rect x="100" y="60" width="18" height="22" fill="#002fa7" opacity="0.3" />
      </svg>

      {/* Small note */}
      <svg
        viewBox="0 0 70 70"
        style={{
          position: 'absolute',
          width: '30%',
          left: '5%',
          top: '55%',
          transform: 'rotate(15deg)'
        }}
      >
        <rect
          x="5"
          y="5"
          width="60"
          height="60"
          fill="#fffde7"
          stroke="#1a1815"
          strokeWidth="1.5"
        />
        <path d="M12 18 Q25 16 45 18" stroke="#1a1815" strokeWidth="0.6" fill="none" opacity="0.4" />
        <path d="M12 30 Q20 28 35 30" stroke="#1a1815" strokeWidth="0.6" fill="none" opacity="0.4" />
        <path d="M12 42 Q28 40 50 42" stroke="#1a1815" strokeWidth="0.6" fill="none" opacity="0.4" />
      </svg>
    </div>
  );
});

ContactPapers.displayName = 'ContactPapers';

export default ContactPapers;
