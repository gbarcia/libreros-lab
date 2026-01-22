import { forwardRef } from 'react';
import Folder from './Folder';
import Terminal from './Terminal';
import Notebook from './Notebook';
import CoffeeCup from './CoffeeCup';
import Pen from './Pen';
import Flask from './Flask';
import Microscope from './Microscope';
import Envelope from './Envelope';
import TestTubes from './TestTubes';
import Pipette from './Pipette';
import PetriDish from './PetriDish';
import Hands from '../ui/Hands';

// Position system based on 4x3 zone grid
// Prevents overlapping by assigning each element to a specific zone
const positions = {
  desktop: {
    // TOP ROW (0-35% from top)
    folder: { top: '8%', left: '3%', zIndex: 5 },
    terminal: { top: '3%', right: '3%', zIndex: 5 },
    // MIDDLE ROW (35-65% from top, or 35-65% from bottom)
    flask: { bottom: '42%', left: '8%', zIndex: 4 },
    notebook: { bottom: '32%', left: '30%', zIndex: 3, transform: 'rotate(5deg)' },
    testTubes: { bottom: '52%', left: '24%', zIndex: 2, transform: 'rotate(5deg)' },
    pen: { bottom: '25%', left: '54%', zIndex: 2, transform: 'rotate(-35deg)' },
    pipette: { bottom: '48%', left: '65%', zIndex: 2, transform: 'rotate(-20deg)' },
    envelope: { bottom: '42%', right: '5%', zIndex: 4, transform: 'rotate(8deg)' },
    microscope: { bottom: '22%', right: '18%', zIndex: 3 },
    // BOTTOM ROW (65-100% from top, or 0-35% from bottom)
    coffeeCup: { bottom: '10%', left: '58%', zIndex: 1 },
    petriDish: { bottom: '6%', left: '38%', zIndex: 1, transform: 'rotate(10deg)' }
  },
  tablet: {
    // Simplified layout - 6 elements only
    folder: { top: '5%', left: '3%', zIndex: 5 },
    terminal: { top: '3%', right: '3%', zIndex: 5 },
    flask: { bottom: '38%', left: '10%', zIndex: 4, transform: 'rotate(-3deg)' },
    notebook: { bottom: '30%', left: '35%', zIndex: 3, transform: 'rotate(5deg)' },
    envelope: { bottom: '38%', right: '8%', zIndex: 4, transform: 'rotate(8deg)' },
    coffeeCup: { bottom: '12%', right: '35%', zIndex: 1 }
  },
  mobile: {
    // Minimal layout - 4 elements in 2x2 grid
    folder: { top: '5%', left: '5%', zIndex: 5 },
    terminal: { top: '3%', right: '3%', zIndex: 5 },
    flask: { bottom: '18%', left: '8%', zIndex: 4, transform: 'rotate(-3deg)' },
    envelope: { bottom: '18%', right: '8%', zIndex: 4, transform: 'rotate(8deg)' }
  }
};

const Desk = forwardRef(({
  onNavigate,
  terminalActive = false,
  isMobile = false,
  isTablet = false,
  className = ''
}, ref) => {

  // Helper to get position for current breakpoint
  const getPos = (element) => {
    if (isMobile) return positions.mobile[element] || {};
    if (isTablet) return positions.tablet[element] || {};
    return positions.desktop[element] || {};
  };

  // Determine which elements to show based on breakpoint
  const showElement = (element) => {
    if (isMobile) return !!positions.mobile[element];
    if (isTablet) return !!positions.tablet[element];
    return !!positions.desktop[element];
  };

  return (
    <div ref={ref} className={`desk ${className}`}>
      {/* === TOP ROW: Main navigation items === */}
      <Folder
        onClick={() => onNavigate?.('pi')}
        style={getPos('folder')}
      />

      <Terminal
        onClick={() => onNavigate?.('research')}
        isActive={terminalActive}
        style={getPos('terminal')}
      />

      {/* === MIDDLE ROW: Secondary items === */}
      {showElement('notebook') && (
        <Notebook
          onClick={() => onNavigate?.('publications')}
          style={getPos('notebook')}
        />
      )}

      {showElement('flask') && (
        <Flask
          onClick={() => onNavigate?.('team')}
          style={getPos('flask')}
        />
      )}

      {showElement('microscope') && (
        <Microscope
          onClick={() => onNavigate?.('news')}
          style={getPos('microscope')}
        />
      )}

      {showElement('envelope') && (
        <Envelope
          onClick={() => onNavigate?.('contact')}
          style={getPos('envelope')}
        />
      )}

      {/* === DECORATIVE ITEMS === */}
      {showElement('coffeeCup') && (
        <CoffeeCup style={getPos('coffeeCup')} />
      )}

      {showElement('pen') && (
        <Pen style={getPos('pen')} />
      )}

      {showElement('testTubes') && (
        <TestTubes style={getPos('testTubes')} />
      )}

      {showElement('pipette') && (
        <Pipette style={getPos('pipette')} />
      )}

      {showElement('petriDish') && (
        <PetriDish
          onClick={() => onNavigate?.('research')}
          style={getPos('petriDish')}
        />
      )}

      {/* Hands - only on desktop */}
      {!isMobile && !isTablet && <Hands />}
    </div>
  );
});

Desk.displayName = 'Desk';

export default Desk;
