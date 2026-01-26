import { forwardRef, useState, useCallback } from 'react';
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
import Beeper from './Beeper';
import ScatteredPapers from './ScatteredPapers';
import ContactPapers from './ContactPapers';
import LabPapers from './LabPapers';
import MicroscopePapers from './MicroscopePapers';
import Hands from '../ui/Hands';

/*
 * DESK LAYOUT - COLLISION-FREE GRID
 *
 * Designed for 1200px viewport, 70vh desk (~560px)
 *
 * 4 Columns with gaps:
 *   A: 0-20%    (0-240px)
 *   B: 22-42%   (264-504px)
 *   C: 48-68%   (576-816px)
 *   D: 75-100%  (900-1200px)
 *
 * 4 Rows (from bottom):
 *   TOP:  positioned from top (Folder, Terminal)
 *   BACK: 58-70% from bottom
 *   MID:  28-42% from bottom
 *   FRONT: 3-15% from bottom
 *
 *        A          B          C          D
 * TOP   FOLDER     ---        ---      TERMINAL
 * BACK  Flask    CoffeeCup  Pipette   Microscope
 * MID   ---      Notebook     Pen      Envelope
 * FRONT ---      PetriDish  TestTubes    ---
 */

const positions = {
  desktop: {
    // TOP - Anchor items
    folder: { top: '5%', left: '2%', zIndex: 5 },
    terminal: { top: '2%', right: '2%', zIndex: 5 },

    // BACK ROW (38-48% from bottom) - Lowered to be clearly visible
    flask: { bottom: '38%', left: '3%', zIndex: 6, transform: 'rotate(-5deg)' },
    testTubes: { bottom: '-5%', left: '68%', zIndex: 4, transform: 'rotate(3deg)' },
    pipette: { bottom: '40%', left: '58%', zIndex: 2, transform: 'rotate(-18deg)' },
    microscope: { bottom: '0%', left: '10%', zIndex: 3 },

    // MID ROW (28-42% from bottom) - Clear gap from back row
    notebook: { top: '8%', left: '18%', zIndex: 4, transform: 'rotate(4deg)' },
    pen: { bottom: '38%', left: '50%', zIndex: 2, transform: 'rotate(-32deg)' },
    envelope: { bottom: '24%', right: '5%', zIndex: 4, transform: 'rotate(7deg)' },

    // FRONT ROW (3-15% from bottom) - Clear gap from mid row
    petriDish: { bottom: '6%', left: '5%', zIndex: 1, transform: 'rotate(12deg)' },
    coffeeCup: { bottom: '42%', left: '38%', zIndex: 2 },
    beeper: { bottom: '45%', left: '28%', zIndex: 2, transform: 'rotate(-8deg)' },

    // Scattered papers beneath folder and notebook
    scatteredPapers: { top: '12%', left: '0%', zIndex: 2 },

    // Papers behind envelope (contact)
    contactPapers: { bottom: '28%', right: '2%', zIndex: 3 },

    // Papers behind test tubes
    labPapers: { bottom: '8%', left: '65%', zIndex: 3 },

    // Papers behind microscope
    microscopePapers: { bottom: '5%', left: '15%', zIndex: 2 }
  },

  tablet: {
    // 7 elements - all interactive items visible
    folder: { top: '4%', left: '3%', zIndex: 5 },
    terminal: { top: '3%', right: '3%', zIndex: 5 },
    flask: { bottom: '48%', left: '8%', zIndex: 4, transform: 'rotate(-4deg)' },
    notebook: { bottom: '25%', left: '32%', zIndex: 3, transform: 'rotate(3deg)' },
    envelope: { bottom: '40%', right: '8%', zIndex: 4, transform: 'rotate(6deg)' },
    coffeeCup: { bottom: '8%', left: '45%', zIndex: 1 },
    microscope: { bottom: '8%', right: '12%', zIndex: 3 }
  },

  mobile: {
    // Only papers as background decoration
    scatteredPapers: { top: '15%', left: '2%', zIndex: 2 },
    contactPapers: { bottom: '26%', right: '5%', zIndex: 3 },
    labPapers: { bottom: '12%', left: '68%', zIndex: 3 }
  }
};

const Desk = forwardRef(({
  onNavigate,
  terminalActive = false,
  isMobile = false,
  isTablet = false,
  className = ''
}, ref) => {
  const [handTarget, setHandTarget] = useState(null);

  const getPos = (element) => {
    if (isMobile) return positions.mobile[element] || null;
    if (isTablet) return positions.tablet[element] || null;
    return positions.desktop[element] || null;
  };

  const shouldRender = (element) => getPos(element) !== null;

  // Handle click with position tracking for hands animation
  // On mobile, items are decorative only (no clicks)
  const handleItemClick = useCallback((section, event) => {
    // Mobile: items are decorative, no navigation from desk
    if (isMobile) return;

    // Get click position for hands animation (desktop only)
    if (event && !isTablet) {
      const rect = event.currentTarget.getBoundingClientRect();
      setHandTarget({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        timestamp: Date.now() // Force re-trigger even if same element
      });
    }
    onNavigate?.(section);
  }, [onNavigate, isMobile, isTablet]);

  return (
    <div
      ref={ref}
      className={`desk ${className}`}
    >
      {/* Scattered papers - behind folder and notebook */}
      {shouldRender('scatteredPapers') && (
        <ScatteredPapers style={getPos('scatteredPapers')} />
      )}

      {/* Papers behind envelope */}
      {shouldRender('contactPapers') && (
        <ContactPapers style={getPos('contactPapers')} />
      )}

      {/* Papers behind test tubes */}
      {shouldRender('labPapers') && (
        <LabPapers style={getPos('labPapers')} />
      )}

      {/* Papers behind microscope */}
      {shouldRender('microscopePapers') && (
        <MicroscopePapers style={getPos('microscopePapers')} />
      )}

      {/* TOP ROW */}
      {shouldRender('folder') && (
        <Folder
          onClick={(e) => handleItemClick('pi', e)}
          style={getPos('folder')}
        />
      )}
      {shouldRender('terminal') && (
        <Terminal
          onClick={(e) => handleItemClick('assistant', e)}
          isActive={terminalActive}
          style={getPos('terminal')}
        />
      )}

      {/* BACK ROW */}
      {shouldRender('flask') && (
        <Flask
          onClick={(e) => handleItemClick('team', e)}
          style={getPos('flask')}
        />
      )}
      {shouldRender('testTubes') && (
        <TestTubes style={getPos('testTubes')} />
      )}
      {shouldRender('pipette') && (
        <Pipette style={getPos('pipette')} />
      )}
      {shouldRender('microscope') && (
        <Microscope
          onClick={(e) => handleItemClick('news', e)}
          style={getPos('microscope')}
        />
      )}

      {/* MID ROW */}
      {shouldRender('notebook') && (
        <Notebook
          onClick={(e) => handleItemClick('publications', e)}
          style={getPos('notebook')}
        />
      )}
      {shouldRender('pen') && (
        <Pen style={getPos('pen')} />
      )}
      {shouldRender('envelope') && (
        <Envelope
          onClick={(e) => handleItemClick('contact', e)}
          style={getPos('envelope')}
        />
      )}

      {/* FRONT ROW */}
      {shouldRender('petriDish') && (
        <PetriDish
          onClick={(e) => handleItemClick('research', e)}
          style={getPos('petriDish')}
        />
      )}
      {shouldRender('coffeeCup') && (
        <CoffeeCup style={getPos('coffeeCup')} />
      )}
      {shouldRender('beeper') && (
        <Beeper
          onClick={(e) => handleItemClick('media', e)}
          style={getPos('beeper')}
        />
      )}

      {/* Desk mat - desktop only */}
      {!isMobile && !isTablet && <div className="desk-mat" />}

      {/* Hands - desktop and mobile (static on mobile) */}
      {!isTablet && <Hands targetPosition={isMobile ? null : handTarget} />}
    </div>
  );
});

Desk.displayName = 'Desk';

export default Desk;
