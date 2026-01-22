import { forwardRef, useEffect } from 'react';

const ContentPanel = forwardRef(({
  isActive,
  onClose,
  title,
  stamp,
  children,
  className = '',
  // Mobile carousel props
  isMobile = false,
  onNext,
  onPrev,
  currentIndex = 0,
  totalSections = 6
}, ref) => {

  // Close on escape key (desktop only)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isActive && !isMobile) {
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive, onClose, isMobile]);

  return (
    <div
      ref={ref}
      className={`content-panel ${isActive ? 'active' : ''} ${isMobile ? 'mobile' : ''} ${className}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="panel-title"
    >
      {/* Close button - desktop only */}
      {!isMobile && (
        <button
          className="panel-close"
          onClick={onClose}
          aria-label="Close panel"
        >
          ×
        </button>
      )}

      <div className="panel-header">
        <h2 id="panel-title">{title}</h2>
        {stamp && <span className="panel-stamp">{stamp}</span>}
      </div>

      <div className="panel-content">
        {children}
      </div>

      {/* Mobile carousel navigation */}
      {isMobile && (
        <div className="panel-nav-mobile">
          <button
            className="nav-arrow prev"
            onClick={onPrev}
            aria-label="Previous section"
          >
            ←
          </button>
          <div className="nav-dots">
            {Array.from({ length: totalSections }).map((_, i) => (
              <span
                key={i}
                className={`nav-dot ${i === currentIndex ? 'active' : ''}`}
              />
            ))}
          </div>
          <button
            className="nav-arrow next"
            onClick={onNext}
            aria-label="Next section"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
});

ContentPanel.displayName = 'ContentPanel';

export default ContentPanel;
