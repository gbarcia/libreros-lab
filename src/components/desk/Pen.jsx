import { forwardRef } from 'react';

const Pen = forwardRef(({ className = '' }, ref) => {
  return <div ref={ref} className={`pen desk-item ${className}`} />;
});

Pen.displayName = 'Pen';

export default Pen;
