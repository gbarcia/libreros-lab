import { forwardRef } from 'react';

const CoffeeCup = forwardRef(({ className = '' }, ref) => {
  return (
    <div ref={ref} className={`coffee-cup desk-item ${className}`}>
      <span className="coffee-steam">~</span>
    </div>
  );
});

CoffeeCup.displayName = 'CoffeeCup';

export default CoffeeCup;
