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
  const [terminalActive, setTerminalActive] = useState(true);
  const [manualNavigation, setManualNavigation] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pendingSectionRef = useRef(null);

  // Refs
  const mastheadRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const deskRef = useRef(null);
  const handsRef = useRef(null);

  // Handle manual navigation (click on desk items)
  const handleNavigate = useCallback((section) => {
    setManualNavigation(true);
    navigateTo(section);
  }, [navigateTo]);

  // Handle closing panel - scroll back to top to reset state
  const handleClosePanel = useCallback(() => {
    setManualNavigation(false);
    closePanel();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [closePanel]);

  // Determine which section should be active based on scroll progress
  const getSectionForProgress = useCallback((prog) => {
    if (prog < 10) return null;
    if (prog < 25) return 'pi';
    if (prog < 40) return 'research';
    if (prog < 55) return 'publications';
    if (prog < 70) return 'team';
    if (prog < 85) return 'news';
    return 'contact';
  }, []);

  // Update active section based on scroll progress (only if not manually navigating)
  // Closes current panel first, waits for transition, then opens next panel
  useEffect(() => {
    if (manualNavigation || isTransitioning) return;

    const targetSection = getSectionForProgress(progress);

    // If we need to change to a different section
    if (targetSection && targetSection !== activePanel) {
      // If there's already a panel open, close it first and queue the next one
      if (activePanel) {
        setIsTransitioning(true);
        pendingSectionRef.current = targetSection;
        closePanel();

        // Temporarily restore desk visibility during transition
        if (deskRef.current) {
          gsap.to(deskRef.current, {
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.3,
            ease: 'power2.out'
          });
        }

        // Wait for close animation + hand movement, then open next panel
        setTimeout(() => {
          if (pendingSectionRef.current) {
            navigateTo(pendingSectionRef.current);
            pendingSectionRef.current = null;
          }
          setIsTransitioning(false);

          // Let GSAP ScrollTrigger recalculate desk state
          ScrollTrigger.refresh();
        }, 600); // Delay for close animation + hands movement
      } else {
        // No panel open, just open the new one directly
        navigateTo(targetSection);
      }
    } else if (!targetSection && activePanel) {
      closePanel();
    }
  }, [progress, activePanel, navigateTo, closePanel, getSectionForProgress, manualNavigation, isTransitioning]);

  // GSAP Scroll Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Progress bar and section navigation
      ScrollTrigger.create({
        trigger: '.scroll-spacer',
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          setProgress(self.progress * 100);
        }
      });

      // Main timeline for visual animations only
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
        onClose={handleClosePanel}
        isManual={manualNavigation}
      />
      <Research
        isActive={activePanel === 'research'}
        onClose={handleClosePanel}
        isManual={manualNavigation}
      />
      <Publications
        isActive={activePanel === 'publications'}
        onClose={handleClosePanel}
        isManual={manualNavigation}
      />
      <Team
        isActive={activePanel === 'team'}
        onClose={handleClosePanel}
        isManual={manualNavigation}
      />
      <News
        isActive={activePanel === 'news'}
        onClose={handleClosePanel}
        isManual={manualNavigation}
      />
      <Contact
        isActive={activePanel === 'contact'}
        onClose={handleClosePanel}
        isManual={manualNavigation}
      />

      {/* Scroll spacer for GSAP ScrollTrigger */}
      <div className="scroll-spacer" />
    </>
  );
}

export default App;
