import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export function useGSAP(callback, dependencies = []) {
  const contextRef = useRef(null);

  useEffect(() => {
    // Create GSAP context for cleanup
    contextRef.current = gsap.context(() => {
      callback(gsap, ScrollTrigger);
    });

    return () => {
      // Cleanup GSAP context
      if (contextRef.current) {
        contextRef.current.revert();
      }
    };
  }, dependencies);

  return contextRef;
}

export function useScrollProgress(onProgress) {
  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: '.scroll-spacer',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        onProgress?.(self.progress * 100);
      }
    });

    return () => {
      trigger.kill();
    };
  }, [onProgress]);
}

export function useScrollAnimation(refs, config = {}) {
  useEffect(() => {
    if (!refs || Object.keys(refs).length === 0) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.scroll-spacer',
        start: 'top top',
        end: 'bottom bottom',
        scrub: config.scrub ?? 1.5,
        ...config.scrollTrigger
      }
    });

    // Setup animations based on config
    if (config.animations) {
      config.animations(timeline, refs, gsap);
    }

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [refs, config]);
}

export { gsap, ScrollTrigger };
export default useGSAP;
