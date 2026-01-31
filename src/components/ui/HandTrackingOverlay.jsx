import { useRef, useEffect, useCallback } from 'react';
import useHandTracking from '../../hooks/useHandTracking';

// Hit-test radius in pixels
const HIT_RADIUS = 80;

function HandTrackingOverlay({ deskRef, isActive }) {
  const {
    isActive: trackingActive,
    isLoading,
    error,
    fingerPosition,
    isPinching,
    videoRef,
    toggleTracking,
    dismissError
  } = useHandTracking();

  const cursorRef = useRef(null);
  const highlightedRef = useRef(null);
  const pipVideoRef = useRef(null);
  const pinchHandledRef = useRef(false);

  // Sync external isActive prop with internal tracking state
  useEffect(() => {
    if (isActive && !trackingActive && !isLoading) {
      toggleTracking();
    } else if (!isActive && trackingActive) {
      toggleTracking();
    }
  }, [isActive]); // eslint-disable-line react-hooks/exhaustive-deps

  // Mirror PIP video from the hidden processing video
  useEffect(() => {
    if (trackingActive && videoRef.current && pipVideoRef.current) {
      pipVideoRef.current.srcObject = videoRef.current.srcObject;
    } else if (pipVideoRef.current) {
      pipVideoRef.current.srcObject = null;
    }
  }, [trackingActive, videoRef]);

  // Hit-test and cursor positioning
  useEffect(() => {
    if (!fingerPosition || !deskRef?.current || !cursorRef.current) {
      // Hide cursor when no finger
      if (cursorRef.current) {
        cursorRef.current.classList.add('hidden');
      }
      // Remove any highlight
      if (highlightedRef.current) {
        highlightedRef.current.classList.remove('hand-highlight');
        highlightedRef.current = null;
      }
      return;
    }

    const desk = deskRef.current;
    const deskRect = desk.getBoundingClientRect();

    // Map finger position to desk screen coordinates
    const screenX = deskRect.left + fingerPosition.x * deskRect.width;
    const screenY = deskRect.top + fingerPosition.y * deskRect.height;

    // Position cursor
    const cursor = cursorRef.current;
    cursor.style.left = `${screenX}px`;
    cursor.style.top = `${screenY}px`;
    cursor.classList.remove('hidden');

    // Hit-test against clickable desk items
    const items = desk.querySelectorAll('.desk-item.clickable');
    let nearest = null;
    let minDist = Infinity;

    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dist = Math.hypot(screenX - centerX, screenY - centerY);

      if (dist < minDist && dist < HIT_RADIUS) {
        minDist = dist;
        nearest = item;
      }
    });

    // Update highlight
    if (highlightedRef.current && highlightedRef.current !== nearest) {
      highlightedRef.current.classList.remove('hand-highlight');
    }
    if (nearest) {
      nearest.classList.add('hand-highlight');
      cursor.classList.add('near-item');
    } else {
      cursor.classList.remove('near-item');
    }
    highlightedRef.current = nearest;
  }, [fingerPosition, deskRef]);

  // Handle pinch → click
  useEffect(() => {
    if (isPinching && highlightedRef.current && !pinchHandledRef.current) {
      pinchHandledRef.current = true;
      highlightedRef.current.click();
    }
    if (!isPinching) {
      pinchHandledRef.current = false;
    }
  }, [isPinching]);

  // Update cursor pinching style
  useEffect(() => {
    if (cursorRef.current) {
      if (isPinching) {
        cursorRef.current.classList.add('pinching');
      } else {
        cursorRef.current.classList.remove('pinching');
      }
    }
  }, [isPinching]);

  // Cleanup highlights on unmount or deactivation
  useEffect(() => {
    return () => {
      if (highlightedRef.current) {
        highlightedRef.current.classList.remove('hand-highlight');
        highlightedRef.current = null;
      }
    };
  }, []);

  // Auto-dismiss error after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(dismissError, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, dismissError]);

  return (
    <>
      {/* Hidden video for MediaPipe processing */}
      <video
        ref={videoRef}
        className="hand-tracking-video-hidden"
        playsInline
        muted
      />

      {/* Virtual cursor */}
      {trackingActive && (
        <div ref={cursorRef} className="hand-tracking-cursor hidden" />
      )}

      {/* Camera PIP preview */}
      {trackingActive && (
        <div className="hand-tracking-pip">
          <video ref={pipVideoRef} autoPlay playsInline muted />
        </div>
      )}

      {/* Error toast */}
      {error && (
        <div className="hand-tracking-toast">
          <span>{error}</span>
          <button onClick={dismissError}>Dismiss</button>
        </div>
      )}
    </>
  );
}

export default HandTrackingOverlay;
