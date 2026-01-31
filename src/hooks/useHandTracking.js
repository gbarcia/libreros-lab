import { useState, useRef, useCallback, useEffect } from 'react';

// Camera range mapping — ignore edges where detection is noisy
const CAM_MIN = 0.1;
const CAM_MAX = 0.9;
const SMOOTH_BUFFER_SIZE = 3;

function mapRange(value, inMin, inMax) {
  return Math.max(0, Math.min(1, (value - inMin) / (inMax - inMin)));
}

export default function useHandTracking() {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fingerPosition, setFingerPosition] = useState(null);

  const videoRef = useRef(null);
  const handLandmarkerRef = useRef(null);
  const streamRef = useRef(null);
  const rafRef = useRef(null);
  const activeRef = useRef(false);
  const smoothBufferRef = useRef([]);

  const dismissError = useCallback(() => setError(null), []);

  const stopTracking = useCallback(() => {
    activeRef.current = false;
    setIsActive(false);
    setFingerPosition(null);
    smoothBufferRef.current = [];

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
    if (handLandmarkerRef.current) {
      handLandmarkerRef.current.close();
      handLandmarkerRef.current = null;
    }
  }, []);

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
        runningMode: 'VIDEO',
        numHands: 1
      });

      handLandmarkerRef.current = landmarker;

      // Open camera
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 320, height: 240 }
      });
      streamRef.current = stream;

      const video = videoRef.current;
      if (!video) throw new Error('Video element not available');
      video.srcObject = stream;
      await video.play();

      activeRef.current = true;
      setIsActive(true);
      setIsLoading(false);

      // Detection loop
      const detect = () => {
        if (!activeRef.current || !video || video.readyState < 2) {
          rafRef.current = requestAnimationFrame(detect);
          return;
        }

        const results = landmarker.detectForVideo(video, performance.now());

        if (results.landmarks && results.landmarks.length > 0) {
          const hand = results.landmarks[0];
          const indexTip = hand[8]; // Index finger tip

          // Mirror X for natural mapping
          const rawX = 1 - indexTip.x;
          const rawY = indexTip.y;

          // Map camera range to full output
          const mappedX = mapRange(rawX, CAM_MIN, CAM_MAX);
          const mappedY = mapRange(rawY, CAM_MIN, CAM_MAX);

          // Smoothing buffer
          const buffer = smoothBufferRef.current;
          buffer.push({ x: mappedX, y: mappedY });
          if (buffer.length > SMOOTH_BUFFER_SIZE) buffer.shift();

          const avgX = buffer.reduce((s, p) => s + p.x, 0) / buffer.length;
          const avgY = buffer.reduce((s, p) => s + p.y, 0) / buffer.length;

          setFingerPosition({ x: avgX, y: avgY });
        } else {
          setFingerPosition(null);
          smoothBufferRef.current = [];
        }

        rafRef.current = requestAnimationFrame(detect);
      };

      rafRef.current = requestAnimationFrame(detect);

    } catch (err) {
      setIsLoading(false);
      activeRef.current = false;
      setIsActive(false);

      if (err.name === 'NotAllowedError') {
        setError('Camera access denied. Check browser permissions.');
      } else if (err.name === 'NotFoundError') {
        setError('No camera found on this device.');
      } else if (err.name === 'NotSupportedError') {
        setError('Camera not supported in this browser.');
      } else {
        setError('Something went wrong. Try again.');
      }
    }
  }, []);

  const toggleTracking = useCallback(() => {
    if (activeRef.current) {
      stopTracking();
    } else {
      startTracking();
    }
  }, [startTracking, stopTracking]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (activeRef.current) stopTracking();
    };
  }, [stopTracking]);

  return {
    isActive,
    isLoading,
    error,
    fingerPosition,
    videoRef,
    toggleTracking,
    dismissError
  };
}
