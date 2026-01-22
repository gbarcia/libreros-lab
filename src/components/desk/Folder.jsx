import { forwardRef } from 'react';

const Folder = forwardRef(({ onClick, className = '', style = {} }, ref) => {
  return (
    <div ref={ref} className={`folder desk-item clickable ${className}`} onClick={onClick} style={style}>
      <div className="folder-label">
        <span className="folder-label-stamp">CONFIDENTIAL</span>
        <h3>Dr. Libreros</h3>
        <p>
          Principal Investigator<br />
          Yale School of Medicine<br />
          Pathology Dept.
        </p>
      </div>
    </div>
  );
});

Folder.displayName = 'Folder';

export default Folder;
