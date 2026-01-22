import ContentPanel from '../components/ui/ContentPanel';
import { principalInvestigator, labLocation } from '../data/team';

function Contact({ isActive, onClose }) {
  const pi = principalInvestigator;
  const loc = labLocation;

  return (
    <ContentPanel
      isActive={isActive}
      onClose={onClose}
      title="Contact"
      stamp="GET IN TOUCH"
    >
      <p>
        For inquiries about research collaborations, lab opportunities, or general questions,
        please reach out using the contact information below.
      </p>

      <div className="contact-info">
        <div className="contact-block">
          <h4>Email</h4>
          <p>
            <a href={`mailto:${pi.email}`}>{pi.email}</a>
          </p>
        </div>

        <div className="contact-block">
          <h4>Phone</h4>
          <p>{pi.phone}</p>
        </div>

        <div className="contact-block">
          <h4>Lab Location</h4>
          <p>
            {loc.lab.building}<br />
            {loc.lab.address}<br />
            {loc.lab.city}, {loc.lab.state} {loc.lab.zip}
          </p>
        </div>

        <div className="contact-block">
          <h4>Office</h4>
          <p>
            {loc.office.building}<br />
            {loc.office.address}<br />
            {loc.office.city}, {loc.office.state} {loc.office.zip}
          </p>
        </div>
      </div>

      <h4 style={{
        fontFamily: 'IBM Plex Mono, monospace',
        fontSize: '0.8rem',
        marginTop: '25px',
        marginBottom: '15px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        Mailing Address
      </h4>

      <div style={{
        background: 'var(--paper-aged)',
        border: '2px solid var(--ink-black)',
        padding: '20px',
        fontFamily: 'Crimson Pro, serif'
      }}>
        <p style={{ marginBottom: '0' }}>
          <strong>{loc.mailing.program}</strong><br />
          {loc.mailing.department}<br />
          {loc.mailing.poBox}<br />
          {loc.mailing.city}, {loc.mailing.state} {loc.mailing.zip}<br />
          {loc.mailing.country}
        </p>
      </div>

      <h4 style={{
        fontFamily: 'IBM Plex Mono, monospace',
        fontSize: '0.8rem',
        marginTop: '25px',
        marginBottom: '15px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        Affiliations
      </h4>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {pi.affiliations.map((affiliation, i) => (
          <span
            key={i}
            style={{
              fontSize: '0.7rem',
              fontFamily: 'IBM Plex Mono, monospace',
              padding: '4px 8px',
              background: 'var(--paper-cream)',
              border: '1px solid var(--ink-faded)'
            }}
          >
            {affiliation}
          </span>
        ))}
      </div>

      <div style={{
        marginTop: '25px',
        textAlign: 'center',
        padding: '20px',
        background: 'var(--blue-klein)',
        color: 'var(--paper-cream)'
      }}>
        <p style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.1rem',
          marginBottom: '10px'
        }}>
          Yale School of Medicine
        </p>
        <p style={{
          fontSize: '0.8rem',
          fontFamily: 'IBM Plex Mono, monospace',
          opacity: '0.9'
        }}>
          Department of Pathology
        </p>
      </div>
    </ContentPanel>
  );
}

export default Contact;
