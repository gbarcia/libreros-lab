import { forwardRef } from 'react';

const Notebook = forwardRef(({ onClick, className = '', style = {} }, ref) => {
  return (
    <div ref={ref} className={`notebook desk-item clickable ${className}`} onClick={onClick} style={style}>
      <div className="notebook-spine" />
      <div className="notebook-text">
        Publications:<br /><br />
        Blood 2023<br />
        Science Advances<br />
        Nature Comms...
      </div>
    </div>
  );
});

Notebook.displayName = 'Notebook';

export default Notebook;
