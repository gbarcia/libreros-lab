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

// Styles
import './styles/globals.css';
import './styles/desk.css';
import './styles/sections.css';
import './styles/responsive.css';
import './styles/radio.css';

function App() {
  const { isMobile, isTablet } = useResponsive();
  const { activePanel, navigateTo, closePanel } = useNavigation();

  const [terminalActive, setTerminalActive] = useState(true);

  // Refs
  const deskRef = useRef(null);

  // Handle navigation (click on desk items)
  const handleNavigate = useCallback((section) => {
    navigateTo(section);
  }, [navigateTo]);

  // Handle closing panel
  const handleClosePanel = useCallback(() => {
    closePanel();
  }, [closePanel]);

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
        isActive={activePanel === 'pi'}
        onClose={handleClosePanel}
      />
      <Research
        isActive={activePanel === 'research'}
        onClose={handleClosePanel}
      />
      <Publications
        isActive={activePanel === 'publications'}
        onClose={handleClosePanel}
      />
      <Team
        isActive={activePanel === 'team'}
        onClose={handleClosePanel}
      />
      <News
        isActive={activePanel === 'news'}
        onClose={handleClosePanel}
      />
      <Contact
        isActive={activePanel === 'contact'}
        onClose={handleClosePanel}
      />
    </>
  );
}

export default App;
