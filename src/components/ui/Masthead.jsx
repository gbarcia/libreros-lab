import { forwardRef } from 'react';

const Masthead = forwardRef(({ className = '' }, ref) => {
  return (
    <div ref={ref} className={`masthead ${className}`}>
      <p className="masthead-line">Yale School of Medicine</p>
      <h1><em>Libreros</em> <span>Lab</span></h1>
      <p className="masthead-subtitle">Resolution Biology Research</p>
    </div>
  );
});

Masthead.displayName = 'Masthead';

export default Masthead;
