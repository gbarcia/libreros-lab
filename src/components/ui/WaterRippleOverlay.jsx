import { useRef, useEffect, useCallback } from 'react';
import useHandTracking from '../../hooks/useHandTracking';
import useWaterRipple from '../../hooks/useWaterRipple';

const MIN_DROP_DISTANCE = 0.008;
const STATIONARY_DROP_INTERVAL = 80;
const INITIAL_SPLASH_RADIUS = 6;
const INITIAL_SPLASH_STRENGTH = 1024;

export default function WaterRippleOverlay({ deskRef, isActive }) {
  const canvasRef = useRef(null);
  const lastDropRef = useRef({ x: 0, y: 0, time: 0 });
  const firstDetectionRef = useRef(true);

  const {
    isActive: trackingActive,
    isLoading,
    error,
    fingerPosition,
    videoRef,
    toggleTracking,
    dismissError
  } = useHandTracking();

  const { activate, deactivate, addDrop } = useWaterRipple(canvasRef);

  // Sync external isActive prop with internal tracking state
  useEffect(() => {
    if (isActive && !trackingActive && !isLoading) {
      toggleTracking();
    } else if (!isActive && trackingActive) {
      toggleTracking();
    }
  }, [isActive]);

  // Activate/deactivate water simulation with tracking
  useEffect(() => {
    if (trackingActive) {
      activate();
      firstDetectionRef.current = true;
    } else {
      deactivate();
    }
  }, [trackingActive, activate, deactivate]);

  // Feed finger position to water simulation
  useEffect(() => {
    if (!fingerPosition || !trackingActive) return;

    const now = performance.now();
    const last = lastDropRef.current;

    // Initial splash on first detection
    if (firstDetectionRef.current) {
      addDrop(fingerPosition.x, fingerPosition.y, INITIAL_SPLASH_RADIUS, INITIAL_SPLASH_STRENGTH);
      lastDropRef.current = { x: fingerPosition.x, y: fingerPosition.y, time: now };
      firstDetectionRef.current = false;
      return;
    }

    const dx = fingerPosition.x - last.x;
    const dy = fingerPosition.y - last.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const dt = now - last.time;

    if (dist > MIN_DROP_DISTANCE) {
      // Moving finger: distance-based drops, strength scaled by speed
      const speed = dist / Math.max(1, dt);
      const dynamicStrength = 512 * (0.3 + Math.min(0.7, speed * 50));
      addDrop(fingerPosition.x, fingerPosition.y, undefined, dynamicStrength);
      lastDropRef.current = { x: fingerPosition.x, y: fingerPosition.y, time: now };
    } else if (dt > STATIONARY_DROP_INTERVAL) {
      // Stationary finger: gentle ripples
      addDrop(fingerPosition.x, fingerPosition.y, 2, 150);
      lastDropRef.current = { ...last, time: now };
    }
  }, [fingerPosition, trackingActive, addDrop]);

  // Auto-dismiss error after 5 seconds
  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(dismissError, 5000);
    return () => clearTimeout(timer);
  }, [error, dismissError]);

  return (
    <>
      {/* Hidden video for MediaPipe processing */}
      <video
        ref={videoRef}
        className="water-tracking-video-hidden"
        playsInline
        muted
      />

      {/* Water ripple canvas */}
      <canvas
        ref={canvasRef}
        className={`water-ripple-canvas ${trackingActive ? 'active' : ''}`}
      />

      {/* Camera PIP */}
      {trackingActive && videoRef.current && videoRef.current.srcObject && (
        <div className="water-tracking-pip">
          <video
            autoPlay
            playsInline
            muted
            ref={(el) => {
              if (el && videoRef.current && videoRef.current.srcObject) {
                el.srcObject = videoRef.current.srcObject;
              }
            }}
          />
        </div>
      )}

      {/* Error toast */}
      {error && (
        <div className="water-tracking-toast">
          <span>{error}</span>
          <button onClick={dismissError}>Dismiss</button>
        </div>
      )}
    </>
  );
}
