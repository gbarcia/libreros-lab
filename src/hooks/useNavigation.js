import { useState, useCallback } from 'react';

const SECTIONS = ['hero', 'pi', 'research', 'publications', 'team', 'news', 'contact'];

export function useNavigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [activePanel, setActivePanel] = useState(null);

  const navigateTo = useCallback((section) => {
    if (SECTIONS.includes(section)) {
      setActiveSection(section);
      if (section !== 'hero') {
        setActivePanel(section);
      }
    }
  }, []);

  const closePanel = useCallback(() => {
    setActivePanel(null);
  }, []);

  const goToNext = useCallback(() => {
    const currentIndex = SECTIONS.indexOf(activeSection);
    if (currentIndex < SECTIONS.length - 1) {
      navigateTo(SECTIONS[currentIndex + 1]);
    }
  }, [activeSection, navigateTo]);

  const goToPrev = useCallback(() => {
    const currentIndex = SECTIONS.indexOf(activeSection);
    if (currentIndex > 0) {
      navigateTo(SECTIONS[currentIndex - 1]);
    }
  }, [activeSection, navigateTo]);

  return {
    activeSection,
    activePanel,
    navigateTo,
    closePanel,
    goToNext,
    goToPrev,
    sections: SECTIONS
  };
}

export default useNavigation;
