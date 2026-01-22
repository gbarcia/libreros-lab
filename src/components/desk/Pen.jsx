import { forwardRef } from 'react';

const Pen = forwardRef(({ className = '', style = {} }, ref) => {
  return <div ref={ref} className={`pen desk-item ${className}`} style={style} />;
});

Pen.displayName = 'Pen';

export default Pen;
