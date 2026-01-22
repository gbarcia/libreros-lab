import { useState, useEffect } from 'react';

const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1400
};

export function useResponsive() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  });

  useEffect(() => {
    let timeoutId = null;

    const handleResize = () => {
      // Debounce resize events
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const isMobile = windowSize.width <= BREAKPOINTS.mobile;
  const isTablet = windowSize.width > BREAKPOINTS.mobile && windowSize.width <= BREAKPOINTS.tablet;
  const isDesktop = windowSize.width > BREAKPOINTS.tablet;
  const isLargeDesktop = windowSize.width > BREAKPOINTS.largeDesktop;

  return {
    windowSize,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    breakpoints: BREAKPOINTS
  };
}

export default useResponsive;
