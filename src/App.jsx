import { useState, useRef, useCallback } from 'react';

// Components
import PaperTexture from './components/shared/PaperTexture';
import Masthead from './components/ui/Masthead';
import Desk from './components/desk/Desk';
import Radio from './components/ui/Radio';

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
import useCarouselNavigation from './hooks/useCarouselNavigation';

// Styles
import './styles/globals.css';
import './styles/desk.css';
import './styles/sections.css';
import './styles/responsive.css';
import './styles/radio.css';

function App() {
  const { isMobile, isTablet } = useResponsive();
  const { activePanel, navigateTo, closePanel } = useNavigation();
  const carousel = useCarouselNavigation();

  const [terminalActive, setTerminalActive] = useState(true);

  // Refs
  const deskRef = useRef(null);

  // Handle navigation (click on desk items) - desktop only
  const handleNavigate = useCallback((section) => {
    navigateTo(section);
  }, [navigateTo]);

  // Handle closing panel - desktop only
  const handleClosePanel = useCallback(() => {
    closePanel();
  }, [closePanel]);

  // Determine which panel is active
  // Mobile: always show carousel section, Desktop: show clicked panel
  const getActivePanel = (section) => {
    if (isMobile) {
      return carousel.currentSection === section;
    }
    return activePanel === section;
  };

  return (
    <>
      <PaperTexture />
      <Radio />

      <div className="scene-container">
        <Masthead onNavigate={handleNavigate} />

        <Desk
          ref={deskRef}
          onNavigate={handleNavigate}
          terminalActive={terminalActive}
          isMobile={isMobile}
          isTablet={isTablet}
        />
      </div>

      {/* Section Panels */}
      <PrincipalInvestigator
        isActive={getActivePanel('pi')}
        onClose={handleClosePanel}
        isMobile={isMobile}
        onNext={carousel.next}
        onPrev={carousel.prev}
        currentIndex={carousel.currentIndex}
        totalSections={carousel.total}
      />
      <Research
        isActive={getActivePanel('research')}
        onClose={handleClosePanel}
        isMobile={isMobile}
        onNext={carousel.next}
        onPrev={carousel.prev}
        currentIndex={carousel.currentIndex}
        totalSections={carousel.total}
      />
      <Publications
        isActive={getActivePanel('publications')}
        onClose={handleClosePanel}
        isMobile={isMobile}
        onNext={carousel.next}
        onPrev={carousel.prev}
        currentIndex={carousel.currentIndex}
        totalSections={carousel.total}
      />
      <Team
        isActive={getActivePanel('team')}
        onClose={handleClosePanel}
        isMobile={isMobile}
        onNext={carousel.next}
        onPrev={carousel.prev}
        currentIndex={carousel.currentIndex}
        totalSections={carousel.total}
      />
      <News
        isActive={getActivePanel('news')}
        onClose={handleClosePanel}
        isMobile={isMobile}
        onNext={carousel.next}
        onPrev={carousel.prev}
        currentIndex={carousel.currentIndex}
        totalSections={carousel.total}
      />
      <Contact
        isActive={getActivePanel('contact')}
        onClose={handleClosePanel}
        isMobile={isMobile}
        onNext={carousel.next}
        onPrev={carousel.prev}
        currentIndex={carousel.currentIndex}
        totalSections={carousel.total}
      />
    </>
  );
}

export default App;
