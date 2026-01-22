import { useState, useCallback } from 'react';

const SECTIONS = ['pi', 'research', 'publications', 'team', 'news', 'contact'];

/**
 * Hook for carousel-style navigation through sections (mobile only)
 */
export default function useCarouselNavigation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % SECTIONS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + SECTIONS.length) % SECTIONS.length);
  }, []);

  const goTo = useCallback((index) => {
    if (index >= 0 && index < SECTIONS.length) {
      setCurrentIndex(index);
    }
  }, []);

  return {
    currentSection: SECTIONS[currentIndex],
    currentIndex,
    next,
    prev,
    goTo,
    total: SECTIONS.length,
    sections: SECTIONS
  };
}
