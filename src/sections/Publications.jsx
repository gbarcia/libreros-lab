import ContentPanel from '../components/ui/ContentPanel';
import { publications, getFeaturedPublications } from '../data/publications';

function Publications({
  isActive,
  onClose,
  isManual = false,
  isMobile,
  onNext,
  onPrev,
  currentIndex,
  totalSections
}) {
  const featured = getFeaturedPublications();

  return (
    <ContentPanel
      isActive={isActive}
      onClose={onClose}
      isManual={isManual}
      title="Publications"
      stamp="PEER REVIEWED"
      isMobile={isMobile}
      onNext={onNext}
      onPrev={onPrev}
      currentIndex={currentIndex}
      totalSections={totalSections}
    >
      <p>
        Selected publications from Dr. Libreros' research on resolution of inflammation,
        specialized pro-resolving mediators, and neutrophil biology.
      </p>

      <h4 style={{
        fontFamily: 'IBM Plex Mono, monospace',
        fontSize: '0.8rem',
        marginTop: '25px',
        marginBottom: '15px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        Featured Publications
      </h4>

      <ul className="publication-list">
        {featured.map((pub) => (
          <li key={pub.id} className="publication-item">
            <div className="publication-title">{pub.title}</div>
            <div className="publication-authors">{pub.authors}</div>
            <div style={{ marginTop: '5px' }}>
              <span className="publication-journal">{pub.journal}</span>
              <span className="publication-year">{pub.year}</span>
            </div>
            {pub.citations > 0 && (
              <div style={{
                fontSize: '0.7rem',
                color: 'var(--ink-faded)',
                marginTop: '5px',
                fontFamily: 'IBM Plex Mono, monospace'
              }}>
                {pub.citations} citations
              </div>
            )}
            {pub.doi && (
              <a
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.7rem',
                  color: 'var(--blue-klein)',
                  fontFamily: 'IBM Plex Mono, monospace'
                }}
              >
                DOI: {pub.doi}
              </a>
            )}
          </li>
        ))}
      </ul>

      <div style={{
        marginTop: '20px',
        padding: '15px',
        background: 'var(--paper-aged)',
        border: '1px solid var(--ink-black)'
      }}>
        <p style={{ fontSize: '0.85rem', marginBottom: '10px' }}>
          <strong>View all publications:</strong>
        </p>
        <a
          href="https://orcid.org/0000-0002-2973-5014"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '0.8rem'
          }}
        >
          ORCID Profile →
        </a>
      </div>
    </ContentPanel>
  );
}

export default Publications;
