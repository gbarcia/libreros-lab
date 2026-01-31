import { useRef, useCallback } from 'react';

const DEFAULT_CONFIG = {
  simWidth: 256,
  simHeight: 180,
  damping: 0.97,
  dropRadius: 3,
  dropStrength: 512
};

export default function useWaterRipple(canvasRef, config = {}) {
  const cfg = { ...DEFAULT_CONFIG, ...config };

  const prevRef = useRef(null);
  const currRef = useRef(null);
  const imageDataRef = useRef(null);
  const ctxRef = useRef(null);
  const rafRef = useRef(null);
  const activeRef = useRef(false);

  const initBuffers = useCallback(() => {
    const size = cfg.simWidth * cfg.simHeight;
    prevRef.current = new Float32Array(size);
    currRef.current = new Float32Array(size);
  }, [cfg.simWidth, cfg.simHeight]);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return false;
    canvas.width = cfg.simWidth;
    canvas.height = cfg.simHeight;
    ctxRef.current = canvas.getContext('2d');
    imageDataRef.current = ctxRef.current.createImageData(cfg.simWidth, cfg.simHeight);
    return true;
  }, [canvasRef, cfg.simWidth, cfg.simHeight]);

  const stepAndRender = useCallback(() => {
    if (!activeRef.current) return;

    const w = cfg.simWidth;
    const h = cfg.simHeight;
    const prev = prevRef.current;
    const curr = currRef.current;
    const data = imageDataRef.current.data;
    const damping = cfg.damping;

    for (let y = 1; y < h - 1; y++) {
      for (let x = 1; x < w - 1; x++) {
        const idx = y * w + x;

        // Wave equation: average of 4 neighbors minus previous
        const avg = (curr[idx - 1] + curr[idx + 1] + curr[idx - w] + curr[idx + w]) * 0.5;
        const newVal = (avg - prev[idx]) * damping;
        prev[idx] = newVal;

        // Gradient for light/shadow rendering
        const dxVal = curr[idx + 1] - curr[idx - 1];
        const dyVal = curr[idx + w] - curr[idx - w];
        const light = (dxVal - dyVal) * 0.5;

        const pidx = idx << 2;
        if (light > 0) {
          // Highlight — white
          data[pidx] = 255;
          data[pidx + 1] = 255;
          data[pidx + 2] = 255;
          data[pidx + 3] = Math.min(255, light * 1.5) | 0;
        } else {
          // Shadow — dark blue
          data[pidx] = 20;
          data[pidx + 1] = 15;
          data[pidx + 2] = 30;
          data[pidx + 3] = Math.min(255, -light * 1.0) | 0;
        }
      }
    }

    // Swap buffers
    const tmp = prevRef.current;
    prevRef.current = currRef.current;
    currRef.current = tmp;

    ctxRef.current.putImageData(imageDataRef.current, 0, 0);

    rafRef.current = requestAnimationFrame(stepAndRender);
  }, [cfg.simWidth, cfg.simHeight, cfg.damping]);

  const addDrop = useCallback((normX, normY, radius, strength) => {
    const r = radius ?? cfg.dropRadius;
    const s = strength ?? cfg.dropStrength;
    const cx = Math.floor(normX * cfg.simWidth);
    const cy = Math.floor(normY * cfg.simHeight);
    const curr = currRef.current;
    if (!curr) return;

    for (let dy = -r; dy <= r; dy++) {
      for (let dx = -r; dx <= r; dx++) {
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist >= r) continue;
        const px = cx + dx;
        const py = cy + dy;
        if (px < 0 || px >= cfg.simWidth || py < 0 || py >= cfg.simHeight) continue;
        const factor = Math.cos((dist / r) * Math.PI * 0.5);
        curr[py * cfg.simWidth + px] += s * factor;
      }
    }
  }, [cfg.simWidth, cfg.simHeight, cfg.dropRadius, cfg.dropStrength]);

  const activate = useCallback(() => {
    if (activeRef.current) return;
    initBuffers();
    if (!initCanvas()) return;
    activeRef.current = true;
    rafRef.current = requestAnimationFrame(stepAndRender);
  }, [initBuffers, initCanvas, stepAndRender]);

  const deactivate = useCallback(() => {
    activeRef.current = false;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  return {
    activate,
    deactivate,
    addDrop
  };
}
