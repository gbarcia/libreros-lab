import { useState, useRef, useCallback, useEffect } from 'react';

// Pinch thresholds (normalized coordinates)
const PINCH_CLOSE_THRESHOLD = 0.06;
const PINCH_OPEN_THRESHOLD = 0.10;
const PINCH_FRAMES_REQUIRED = 3;

// Smoothing buffer size
const SMOOTH_BUFFER_SIZE = 3;

// Camera range mapping (finger rarely reaches 0.0 or 1.0)
const CAM_MIN = 0.1;
const CAM_MAX = 0.9;

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

function mapRange(val, inMin, inMax, outMin, outMax) {
  const clamped = clamp(val, inMin, inMax);
  return outMin + ((clamped - inMin) / (inMax - inMin)) * (outMax - outMin);
}

export default function useHandTracking() {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fingerPosition, setFingerPosition] = useState(null);
  const [isPinching, setIsPinching] = useState(false);

  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const streamRef = useRef(null);
  const rafRef = useRef(null);
  const smoothBufferRef = useRef([]);
  const pinchStateRef = useRef('OPEN'); // OPEN | PINCHED | COOLDOWN
  const pinchCounterRef = useRef(0);
  const lastVideoTimeRef = useRef(-1);

  // Cleanup everything
  const cleanup = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    smoothBufferRef.current = [];
    pinchStateRef.current = 'OPEN';
    pinchCounterRef.current = 0;
    lastVideoTimeRef.current = -1;
    setFingerPosition(null);
    setIsPinching(false);
  }, []);

  // Detection loop
  const detect = useCallback(() => {
    const video = videoRef.current;
    const landmarker = landmarkerRef.current;

    if (!video || !landmarker || video.readyState < 2) {
      rafRef.current = requestAnimationFrame(detect);
      return;
    }

    // Only process new frames
    if (video.currentTime === lastVideoTimeRef.current) {
      rafRef.current = requestAnimationFrame(detect);
      return;
    }
    lastVideoTimeRef.current = video.currentTime;

    try {
      const results = landmarker.detectForVideo(video, performance.now());

      if (results.landmarks && results.landmarks.length > 0) {
        const landmarks = results.landmarks[0];
        const indexTip = landmarks[8];  // Index finger tip
        const thumbTip = landmarks[4];  // Thumb tip

        // Mirror X for natural mapping
        const mirroredX = 1 - indexTip.x;
        const y = indexTip.y;

        // Map camera range to full range
        const mappedX = mapRange(mirroredX, CAM_MIN, CAM_MAX, 0, 1);
        const mappedY = mapRange(y, CAM_MIN, CAM_MAX, 0, 1);

        // Smooth with buffer
        const buffer = smoothBufferRef.current;
        buffer.push({ x: mappedX, y: mappedY });
        if (buffer.length > SMOOTH_BUFFER_SIZE) buffer.shift();

        const avgX = buffer.reduce((s, p) => s + p.x, 0) / buffer.length;
        const avgY = buffer.reduce((s, p) => s + p.y, 0) / buffer.length;

        setFingerPosition({ x: avgX, y: avgY });

        // Pinch detection with hysteresis
        const dist = Math.hypot(thumbTip.x - indexTip.x, thumbTip.y - indexTip.y);
        const state = pinchStateRef.current;

        if (state === 'OPEN') {
          if (dist < PINCH_CLOSE_THRESHOLD) {
            pinchCounterRef.current++;
            if (pinchCounterRef.current >= PINCH_FRAMES_REQUIRED) {
              pinchStateRef.current = 'PINCHED';
              pinchCounterRef.current = 0;
              setIsPinching(true);
            }
          } else {
            pinchCounterRef.current = 0;
          }
        } else if (state === 'PINCHED') {
          // Immediately go to cooldown after triggering
          pinchStateRef.current = 'COOLDOWN';
          pinchCounterRef.current = 0;
        } else if (state === 'COOLDOWN') {
          if (dist > PINCH_OPEN_THRESHOLD) {
            pinchCounterRef.current++;
            if (pinchCounterRef.current >= PINCH_FRAMES_REQUIRED) {
              pinchStateRef.current = 'OPEN';
              pinchCounterRef.current = 0;
              setIsPinching(false);
            }
          } else {
            pinchCounterRef.current = 0;
          }
        }
      } else {
        // No hand detected
        setFingerPosition(null);
        setIsPinching(false);
        smoothBufferRef.current = [];
        pinchStateRef.current = 'OPEN';
        pinchCounterRef.current = 0;
      }
    } catch (e) {
      // Silently continue on detection errors
    }

    rafRef.current = requestAnimationFrame(detect);
  }, []);

  // Start tracking
  const startTracking = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Lazy load MediaPipe
      const { HandLandmarker, FilesetResolver } = await import('@mediapipe/tasks-vision');

      const vision = await FilesetResolver.forVisionTasks(
        'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
      );

      const landmarker = await HandLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task',
          delegate: 'GPU'
        },
        numHands: 1,
        runningMode: 'VIDEO'
      });

      landmarkerRef.current = landmarker;

      // Get camera
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 320, height: 240 }
      });
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }

      setIsLoading(false);
      setIsActive(true);

      // Start detection loop
      rafRef.current = requestAnimationFrame(detect);
    } catch (err) {
      setIsLoading(false);
      cleanup();

      if (err.name === 'NotAllowedError') {
        setError('Camera access denied. Check browser permissions.');
      } else if (err.name === 'NotFoundError') {
        setError('No camera found on this device.');
      } else if (err.name === 'NotSupportedError' || !navigator.mediaDevices) {
        setError('Camera not supported in this browser.');
      } else {
        setError('Something went wrong. Try again.');
      }
    }
  }, [detect, cleanup]);

  // Stop tracking
  const stopTracking = useCallback(() => {
    cleanup();
    setIsActive(false);
    // Keep landmarker loaded for quick restart
  }, [cleanup]);

  // Toggle
  const toggleTracking = useCallback(() => {
    if (isActive) {
      stopTracking();
    } else if (!isLoading) {
      startTracking();
    }
  }, [isActive, isLoading, startTracking, stopTracking]);

  // Dismiss error
  const dismissError = useCallback(() => {
    setError(null);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanup();
      if (landmarkerRef.current) {
        landmarkerRef.current.close();
        landmarkerRef.current = null;
      }
    };
  }, [cleanup]);

  return {
    isActive,
    isLoading,
    error,
    fingerPosition,
    isPinching,
    videoRef,
    toggleTracking,
    dismissError
  };
}
