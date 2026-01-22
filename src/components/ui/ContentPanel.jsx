import { forwardRef, useEffect } from 'react';

const ContentPanel = forwardRef(({
  isActive,
  onClose,
  title,
  stamp,
  children,
  className = ''
}, ref) => {

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isActive) {
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive, onClose]);

  return (
    <div
      ref={ref}
      className={`content-panel ${isActive ? 'active' : ''} ${className}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="panel-title"
    >
      <button
        className="panel-close"
        onClick={onClose}
        aria-label="Close panel"
      >
        ×
      </button>

      <div className="panel-header">
        <h2 id="panel-title">{title}</h2>
        {stamp && <span className="panel-stamp">{stamp}</span>}
      </div>

      <div className="panel-content">
        {children}
      </div>
    </div>
  );
});

ContentPanel.displayName = 'ContentPanel';

export default ContentPanel;
