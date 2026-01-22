import { forwardRef } from 'react';

const ProgressBar = forwardRef(({ progress = 0 }, ref) => {
  return (
    <div
      ref={ref}
      className="progress-bar"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
    />
  );
});

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
