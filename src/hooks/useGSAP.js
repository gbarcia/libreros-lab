import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useGSAP(callback, dependencies = []) {
  const contextRef = useRef(null);

  useEffect(() => {
    // Create GSAP context for cleanup
    contextRef.current = gsap.context(() => {
      callback(gsap);
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

export { gsap };
export default useGSAP;
