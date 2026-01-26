import { useState, useCallback } from 'react';

/**
 * Hook for media carousel navigation
 * Handles cycling through media items with next/prev/goTo controls
 */
export default function useMediaCarousel(items = []) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    if (items.length === 0) return;
    setCurrentIndex(i => (i + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    if (items.length === 0) return;
    setCurrentIndex(i => (i - 1 + items.length) % items.length);
  }, [items.length]);

  const goTo = useCallback((index) => {
    if (index >= 0 && index < items.length) {
      setCurrentIndex(index);
    }
  }, [items.length]);

  const reset = useCallback(() => {
    setCurrentIndex(0);
  }, []);

  return {
    currentItem: items[currentIndex] || null,
    currentIndex,
    next,
    prev,
    goTo,
    reset,
    total: items.length,
    hasNext: items.length > 1,
    hasPrev: items.length > 1
  };
}
