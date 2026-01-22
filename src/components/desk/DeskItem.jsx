import { forwardRef } from 'react';

const DeskItem = forwardRef(({
  children,
  onClick,
  position,
  rotation = 0,
  interactive = true,
  label,
  className = ''
}, ref) => {

  const style = {
    ...position,
    transform: `rotate(${rotation}deg)`
  };

  return (
    <div
      ref={ref}
      className={`desk-item ${interactive ? 'clickable' : ''} ${className}`}
      style={style}
      onClick={interactive ? onClick : undefined}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label={label}
      onKeyDown={(e) => {
        if (interactive && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      {children}
    </div>
  );
});

DeskItem.displayName = 'DeskItem';

export default DeskItem;
