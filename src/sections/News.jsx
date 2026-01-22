import ContentPanel from '../components/ui/ContentPanel';
import { news, getAwards } from '../data/news';

function News({ isActive, onClose }) {
  const awards = getAwards();

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <ContentPanel
      isActive={isActive}
      onClose={onClose}
      title="News & Awards"
      stamp="LATEST"
    >
      <h4 style={{
        fontFamily: 'IBM Plex Mono, monospace',
        fontSize: '0.8rem',
        marginBottom: '15px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: 'var(--red-stamp)'
      }}>
        Awards & Honors
      </h4>

      <ul className="news-list">
        {awards.map((item) => (
          <li key={item.id} className="news-item">
            <div className="news-date">{formatDate(item.date)}</div>
            <div className="news-content">
              <h4>{item.title}</h4>
              <p>{item.excerpt}</p>
            </div>
          </li>
        ))}
      </ul>

      <h4 style={{
        fontFamily: 'IBM Plex Mono, monospace',
        fontSize: '0.8rem',
        marginTop: '30px',
        marginBottom: '15px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        Recent News
      </h4>

      <ul className="news-list">
        {news.filter(n => n.type !== 'award').map((item) => (
          <li key={item.id} className="news-item">
            <div className="news-date">{formatDate(item.date)}</div>
            <div className="news-content">
              <h4>{item.title}</h4>
              <p>{item.excerpt}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--blue-klein)',
                    fontFamily: 'IBM Plex Mono, monospace'
                  }}
                >
                  Read more →
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </ContentPanel>
  );
}

export default News;
