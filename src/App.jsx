import { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import PaperTexture from './components/shared/PaperTexture';
import Masthead from './components/ui/Masthead';
import ProgressBar from './components/ui/ProgressBar';
import ScrollIndicator from './components/ui/ScrollIndicator';
import Desk from './components/desk/Desk';

// Sections
import PrincipalInvestigator from './sections/PrincipalInvestigator';
import Research from './sections/Research';
import Publications from './sections/Publications';
import Team from './sections/Team';
import News from './sections/News';
import Contact from './sections/Contact';

// Hooks
import useResponsive from './hooks/useResponsive';
import useNavigation from './hooks/useNavigation';

// Styles
import './styles/globals.css';
import './styles/desk.css';
import './styles/sections.css';
import './styles/responsive.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const { isMobile, isTablet } = useResponsive();
  const { activePanel, navigateTo, closePanel } = useNavigation();

  const [progress, setProgress] = useState(0);
  const [terminalActive, setTerminalActive] = useState(false);

  // Refs
  const mastheadRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const deskRef = useRef(null);
  const handsRef = useRef(null);

  // Handle navigation
  const handleNavigate = useCallback((section) => {
    navigateTo(section);
  }, [navigateTo]);

  // GSAP Scroll Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Progress bar
      ScrollTrigger.create({
        trigger: '.scroll-spacer',
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          setProgress(self.progress * 100);
        }
      });

      // Main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.scroll-spacer',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5
        }
      });

      // Fade out scroll indicator
      if (scrollIndicatorRef.current) {
        tl.to(scrollIndicatorRef.current, { opacity: 0, duration: 1 });
      }

      // Fade out masthead
      if (mastheadRef.current) {
        tl.to(mastheadRef.current, { y: -100, opacity: 0, duration: 2 }, '<');
      }

      // Activate terminal at 30% scroll
      tl.add(() => {
        setTerminalActive(true);
      }, 0.3);

      // Animate hands if on desktop
      if (!isMobile && !isTablet) {
        const hands = document.querySelector('.hands-container');
        if (hands) {
          tl.to(hands, {
            x: '-30vw',
            y: '-25vh',
            scale: 0.85,
            rotation: -5,
            duration: 10
          }, 'phase1');

          tl.to(hands, {
            x: '30vw',
            y: '-28vh',
            scale: 0.9,
            rotation: 3,
            duration: 10
          }, 'phase2');
        }
      }

      // Dim desk at end
      if (deskRef.current) {
        tl.to(deskRef.current, {
          opacity: 0.5,
          filter: 'blur(3px)',
          duration: 3
        }, 0.8);
      }
    });

    return () => ctx.revert();
  }, [isMobile, isTablet]);

  // Refresh ScrollTrigger on resize
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <PaperTexture />
      <ProgressBar progress={progress} />

      <div className="scene-container">
        <Masthead ref={mastheadRef} />

        <Desk
          ref={deskRef}
          onNavigate={handleNavigate}
          terminalActive={terminalActive}
          isMobile={isMobile}
          isTablet={isTablet}
        />

        <ScrollIndicator ref={scrollIndicatorRef} />

        {/* Narrative labels */}
        <div
          className={`narrative-section ${progress > 10 && progress < 40 ? 'visible' : ''}`}
          style={{ bottom: '100px' }}
        >
          EXPLORING: Research Overview
        </div>
        <div
          className={`narrative-section ${progress > 40 && progress < 70 ? 'visible' : ''}`}
          style={{ bottom: '100px' }}
        >
          EXPLORING: Publications & Team
        </div>
        <div
          className={`narrative-section ${progress > 70 ? 'visible' : ''}`}
          style={{ bottom: '100px' }}
        >
          EXPLORING: Contact Information
        </div>
      </div>

      {/* Section Panels */}
      <PrincipalInvestigator
        isActive={activePanel === 'pi'}
        onClose={closePanel}
      />
      <Research
        isActive={activePanel === 'research'}
        onClose={closePanel}
      />
      <Publications
        isActive={activePanel === 'publications'}
        onClose={closePanel}
      />
      <Team
        isActive={activePanel === 'team'}
        onClose={closePanel}
      />
      <News
        isActive={activePanel === 'news'}
        onClose={closePanel}
      />
      <Contact
        isActive={activePanel === 'contact'}
        onClose={closePanel}
      />

      {/* Scroll spacer for GSAP ScrollTrigger */}
      <div className="scroll-spacer" />
    </>
  );
}

export default App;
