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

const Desk = forwardRef(({
  onNavigate,
  terminalActive = false,
  isMobile = false,
  className = ''
}, ref) => {

  return (
    <div ref={ref} className={`desk ${className}`}>
      {/* Interactive Items */}
      <Folder
        onClick={() => onNavigate?.('pi')}
        style={{
          top: isMobile ? '8%' : '10%',
          left: isMobile ? '5%' : '5%'
        }}
      />

      <Terminal
        onClick={() => onNavigate?.('research')}
        isActive={terminalActive}
        style={{
          top: isMobile ? '5%' : '5%',
          right: isMobile ? '5%' : '5%'
        }}
      />

      {!isMobile && (
        <Notebook
          onClick={() => onNavigate?.('publications')}
          style={{
            bottom: '25%',
            left: '30%',
            transform: 'rotate(5deg)'
          }}
        />
      )}

      <Flask
        onClick={() => onNavigate?.('team')}
        style={{
          bottom: isMobile ? '35%' : '30%',
          left: isMobile ? '10%' : '18%',
          transform: 'rotate(-3deg)'
        }}
      />

      {!isMobile && (
        <Microscope
          onClick={() => onNavigate?.('news')}
          style={{
            bottom: '20%',
            right: '15%'
          }}
        />
      )}

      <Envelope
        onClick={() => onNavigate?.('contact')}
        style={{
          bottom: isMobile ? '30%' : '35%',
          right: isMobile ? '10%' : '8%',
          transform: 'rotate(8deg)'
        }}
      />

      {/* Decorative Items */}
      <CoffeeCup
        style={{
          bottom: isMobile ? '35%' : '15%',
          right: isMobile ? '40%' : '30%'
        }}
      />

      {!isMobile && (
        <>
          <Pen
            style={{
              bottom: '20%',
              left: '55%',
              transform: 'rotate(-35deg)'
            }}
          />
          <TestTubes
            style={{
              bottom: '40%',
              left: '45%',
              transform: 'rotate(5deg)'
            }}
          />
          <Pipette
            style={{
              bottom: '45%',
              right: '25%',
              transform: 'rotate(-20deg)'
            }}
          />
          <PetriDish
            onClick={() => onNavigate?.('research')}
            style={{
              bottom: '10%',
              left: '40%',
              transform: 'rotate(10deg)'
            }}
          />
        </>
      )}

      {/* Hands - only on desktop */}
      {!isMobile && <Hands />}
    </div>
  );
});

Desk.displayName = 'Desk';

export default Desk;
