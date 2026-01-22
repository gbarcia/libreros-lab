import { forwardRef } from 'react';

const CoffeeCup = forwardRef(({ className = '', style = {} }, ref) => {
  return (
    <div ref={ref} className={`coffee-cup desk-item ${className}`} style={style}>
      <span className="coffee-steam">~</span>
    </div>
  );
});

CoffeeCup.displayName = 'CoffeeCup';

export default CoffeeCup;
