import { forwardRef } from 'react';

const ScrollIndicator = forwardRef(({ className = '' }, ref) => {
  return (
    <div ref={ref} className={`scroll-indicator ${className}`}>
      <p>Scroll to explore</p>
      <div className="scroll-arrow" />
    </div>
  );
});

ScrollIndicator.displayName = 'ScrollIndicator';

export default ScrollIndicator;
