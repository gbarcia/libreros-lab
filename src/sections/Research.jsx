import ContentPanel from '../components/ui/ContentPanel';
import { researchAreas, researchOverview } from '../data/research';

function Research({ isActive, onClose, isManual = false }) {
  return (
    <ContentPanel
      isActive={isActive}
      onClose={onClose}
      isManual={isManual}
      title="Research Focus"
      stamp="RESOLUTION BIOLOGY"
    >
      <p><strong>{researchOverview.title}</strong></p>

      {researchOverview.summary.split('\n\n').map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      <h4 style={{
        fontFamily: 'IBM Plex Mono, monospace',
        fontSize: '0.8rem',
        marginTop: '25px',
        marginBottom: '15px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        Research Areas
      </h4>

      <div className="research-topics">
        {researchAreas.map((area) => (
          <div key={area.id} className="research-topic">
            <h4>{area.title}</h4>
            <p>{area.description}</p>
            <div style={{
              marginTop: '10px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '5px'
            }}>
              {area.keywords.map((keyword, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '0.65rem',
                    fontFamily: 'IBM Plex Mono, monospace',
                    padding: '2px 6px',
                    background: 'var(--paper-cream)',
                    border: '1px solid var(--ink-faded)'
                  }}
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h4 style={{
        fontFamily: 'IBM Plex Mono, monospace',
        fontSize: '0.8rem',
        marginTop: '25px',
        marginBottom: '10px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        Public Health Interests
      </h4>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {researchOverview.healthInterests.map((interest, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '0.75rem',
              padding: '5px 12px',
              background: 'var(--blue-klein)',
              color: 'var(--paper-cream)',
              borderRadius: '2px'
            }}
          >
            {interest}
          </span>
        ))}
      </div>
    </ContentPanel>
  );
}

export default Research;
