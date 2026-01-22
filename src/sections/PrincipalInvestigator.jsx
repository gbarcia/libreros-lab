import ContentPanel from '../components/ui/ContentPanel';
import { principalInvestigator } from '../data/team';

function PrincipalInvestigator({
  isActive,
  onClose,
  isManual = false,
  isMobile,
  onNext,
  onPrev,
  currentIndex,
  totalSections
}) {
  const pi = principalInvestigator;

  return (
    <ContentPanel
      isActive={isActive}
      onClose={onClose}
      isManual={isManual}
      title="Principal Investigator"
      stamp="YALE PATHOLOGY"
      isMobile={isMobile}
      onNext={onNext}
      onPrev={onPrev}
      currentIndex={currentIndex}
      totalSections={totalSections}
    >
      <div className="section-pi">
        {/* Photo placeholder */}
        <div
          className="pi-photo"
          style={{
            backgroundColor: '#e8e0cc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '0.6rem',
            color: '#3d3a35'
          }}
        >
          [Photo]
        </div>

        <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '5px' }}>
          {pi.name}, {pi.degree}
        </h3>
        <p style={{ color: 'var(--blue-klein)', marginBottom: '15px' }}>
          {pi.title}, {pi.department}
        </p>

        <div className="pi-credentials">
          {pi.awards.map((award, i) => (
            <span key={i} className="pi-credential">
              {award.name} ({award.year || 'NIH'})
            </span>
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
          Biography
        </h4>

        {pi.bio.split('\n\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}

        <h4 style={{
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '0.8rem',
          marginTop: '25px',
          marginBottom: '10px',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Education
        </h4>

        <ul style={{ listStyle: 'none' }}>
          {pi.education.map((edu, i) => (
            <li key={i} style={{ marginBottom: '8px', paddingLeft: '15px', borderLeft: '2px solid var(--blue-klein)' }}>
              <strong>{edu.degree}</strong> — {edu.institution}
              {edu.field && <><br /><em>{edu.field}</em></>}
              {edu.mentor && <><br /><span style={{ fontSize: '0.85rem' }}>Mentor: {edu.mentor}</span></>}
            </li>
          ))}
        </ul>

        <h4 style={{
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '0.8rem',
          marginTop: '25px',
          marginBottom: '10px',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Contact
        </h4>

        <p>
          <strong>Email:</strong> <a href={`mailto:${pi.email}`}>{pi.email}</a><br />
          <strong>Phone:</strong> {pi.phone}<br />
          <strong>ORCID:</strong> <a href={`https://orcid.org/${pi.orcid}`} target="_blank" rel="noopener noreferrer">{pi.orcid}</a>
        </p>
      </div>
    </ContentPanel>
  );
}

export default PrincipalInvestigator;
