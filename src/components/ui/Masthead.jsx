import { forwardRef } from 'react';

const Masthead = forwardRef(({ className = '', onNavigate }, ref) => {
  const navItems = [
    { label: 'PI', section: 'pi' },
    { label: 'Research', section: 'research' },
    { label: 'Publications', section: 'publications' },
    { label: 'Team', section: 'team' },
    { label: 'News', section: 'news' },
    { label: 'Contact', section: 'contact' },
  ];

  return (
    <div ref={ref} className={`masthead ${className}`}>
      <p className="masthead-line">Yale School of Medicine</p>
      <h1><em>Libreros</em> <span>Lab</span></h1>
      <p className="masthead-subtitle">Resolution Biology Research</p>
      <nav className="masthead-nav">
        {navItems.map((item, index) => (
          <span key={item.section}>
            <button onClick={() => onNavigate?.(item.section)}>
              {item.label}
            </button>
            {index < navItems.length - 1 && <span className="nav-separator">·</span>}
          </span>
        ))}
      </nav>
    </div>
  );
});

Masthead.displayName = 'Masthead';

export default Masthead;
