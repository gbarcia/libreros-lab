import ContentPanel from '../components/ui/ContentPanel';
import { principalInvestigator, teamMembers, administrativeSupport } from '../data/team';

function Team({ isActive, onClose }) {
  return (
    <ContentPanel
      isActive={isActive}
      onClose={onClose}
      title="Lab Team"
      stamp="LIBREROS LAB"
    >
      <p>
        The Libreros Lab is part of the Department of Pathology at Yale School of Medicine,
        within the Vascular Biology and Therapeutics Program.
      </p>

      <h4 style={{
        fontFamily: 'IBM Plex Mono, monospace',
        fontSize: '0.8rem',
        marginTop: '25px',
        marginBottom: '15px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        Principal Investigator
      </h4>

      <div className="team-grid">
        <div className="team-member">
          <div
            className="team-member-photo"
            style={{
              backgroundColor: '#e8e0cc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.6rem',
              color: '#3d3a35'
            }}
          >
            SL
          </div>
          <div className="team-member-name">
            {principalInvestigator.name}, {principalInvestigator.degree}
          </div>
          <div className="team-member-role">{principalInvestigator.title}</div>
        </div>
      </div>

      {teamMembers.length > 0 && (
        <>
          <h4 style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '0.8rem',
            marginTop: '25px',
            marginBottom: '15px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Lab Members
          </h4>

          <div className="team-grid">
            {teamMembers.map((member, i) => (
              <div key={i} className="team-member">
                <div
                  className="team-member-photo"
                  style={{
                    backgroundColor: '#e8e0cc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    color: '#3d3a35'
                  }}
                >
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="team-member-name">{member.name}</div>
                <div className="team-member-role">{member.role}</div>
              </div>
            ))}
          </div>
        </>
      )}

      <h4 style={{
        fontFamily: 'IBM Plex Mono, monospace',
        fontSize: '0.8rem',
        marginTop: '25px',
        marginBottom: '15px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        Administrative Support
      </h4>

      <div className="team-grid">
        {administrativeSupport.map((admin, i) => (
          <div key={i} className="team-member">
            <div className="team-member-name">{admin.name}</div>
            <div className="team-member-role">{admin.role}</div>
            {admin.additional && (
              <div style={{ fontSize: '0.7rem', color: 'var(--ink-faded)', marginTop: '5px' }}>
                {admin.additional}
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '25px',
        padding: '15px',
        background: 'var(--paper-aged)',
        border: '2px dashed var(--blue-klein)'
      }}>
        <h4 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '1rem',
          marginBottom: '10px'
        }}>
          Join Our Team
        </h4>
        <p style={{ fontSize: '0.9rem' }}>
          We are always looking for motivated researchers passionate about resolution biology.
          Contact Dr. Libreros for opportunities.
        </p>
      </div>
    </ContentPanel>
  );
}

export default Team;
