import { forwardRef, useState, useEffect, useRef } from 'react';

const Terminal = forwardRef(({ onClick, isActive = false, className = '', style = {} }, ref) => {
  const [displayText, setDisplayText] = useState('> SYSTEM STANDBY...\n> _');
  const [ledActive, setLedActive] = useState(false);
  const typingRef = useRef(null);

  const bootSequence = [
    '> INITIALIZING...',
    '> RESOLUTION BIOLOGY LAB',
    '> MODULES: LOADED',
    '> SPM DATABASE: ONLINE',
    '> LIBREROS-AI READY.',
    '> _'
  ];

  useEffect(() => {
    if (isActive && !typingRef.current) {
      typingRef.current = true;
      setLedActive(true);

      let lineIndex = 0;
      let charIndex = 0;
      let currentText = '';

      const typeNextChar = () => {
        if (lineIndex < bootSequence.length) {
          if (charIndex < bootSequence[lineIndex].length) {
            currentText += bootSequence[lineIndex][charIndex];
            setDisplayText(currentText + '█');
            charIndex++;
            setTimeout(typeNextChar, 40);
          } else {
            lineIndex++;
            charIndex = 0;
            // Only add newline if there's another line to type
            if (lineIndex < bootSequence.length) {
              currentText += '\n';
            }
            setTimeout(typeNextChar, 150);
          }
        } else {
          setDisplayText(currentText);
        }
      };

      setTimeout(typeNextChar, 500);
    }
  }, [isActive]);

  return (
    <div ref={ref} className={`terminal desk-item clickable ${className}`} onClick={onClick} style={style}>
      <div className="terminal-bezel">
        <div className="terminal-screen">
          {displayText.split('\n').map((line, i, arr) => (
            <span key={i}>
              {i === arr.length - 1 && line.endsWith('_') ? (
                <>
                  {line.slice(0, -1)}
                  <span className="terminal-cursor">_</span>
                </>
              ) : (
                line
              )}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </div>
      </div>
      <div className="terminal-controls">
        <div className="terminal-knob" />
        <div className={`terminal-led ${ledActive ? 'active' : ''}`} />
        <div className="terminal-knob" />
      </div>
    </div>
  );
});

Terminal.displayName = 'Terminal';

export default Terminal;
