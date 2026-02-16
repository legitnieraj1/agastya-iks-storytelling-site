'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useImageSequence } from './useImageSequence';

interface SequenceCanvasProps {
  sequenceFolder: string;
  totalFrames: number;
  children?: React.ReactNode;
}

export default function SequenceCanvas({
  sequenceFolder,
  totalFrames,
  children,
}: SequenceCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastFrameRef = useRef(-1);
  // Store logical (CSS) dimensions so renderFrame can use them
  const logicalSizeRef = useRef({ w: 0, h: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const currentFrame = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

  const { images, loading, progress } = useImageSequence(sequenceFolder, totalFrames);

  const renderFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const idx = Math.max(0, Math.min(Math.round(frameIndex), totalFrames - 1));
      if (idx === lastFrameRef.current) return;
      lastFrameRef.current = idx;

      const img = images[idx];
      if (img && img.complete && img.naturalWidth > 0) {
        // Use LOGICAL (CSS) pixel dimensions since ctx.scale(dpr) is applied
        const screenW = logicalSizeRef.current.w;
        const screenH = logicalSizeRef.current.h;
        if (screenW === 0 || screenH === 0) return;

        const screenAspect = screenW / screenH;
        const imgAspect = img.naturalWidth / img.naturalHeight;

        let drawW: number, drawH: number, drawX: number, drawY: number;

        // "cover" fit — fill the entire screen, crop overflow
        if (imgAspect > screenAspect) {
          // Image is wider than screen — fit height, crop sides
          drawH = screenH;
          drawW = drawH * imgAspect;
          drawX = (screenW - drawW) / 2;
          drawY = 0;
        } else {
          // Image is taller than screen — fit width, crop top/bottom
          drawW = screenW;
          drawH = drawW / imgAspect;
          drawX = 0;
          drawY = (screenH - drawH) / 2;
        }

        ctx.clearRect(0, 0, screenW, screenH);
        ctx.drawImage(img, drawX, drawY, drawW, drawH);
      }
    },
    [images, totalFrames]
  );

  useMotionValueEvent(currentFrame, 'change', (latest) => {
    renderFrame(latest);
  });

  // Set canvas size on mount & resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Store logical size for renderFrame
      logicalSizeRef.current = { w, h };

      // Set physical buffer size
      canvas.width = w * dpr;
      canvas.height = h * dpr;

      // Set CSS display size
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      // Scale context so we draw in logical pixels
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      // Re-render current frame after resize
      lastFrameRef.current = -1;
      renderFrame(currentFrame.get());
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [currentFrame, renderFrame]);

  // Render first frame when images load
  useEffect(() => {
    if (!loading && images.length > 0) {
      lastFrameRef.current = -1;
      renderFrame(0);
    }
  }, [loading, images, renderFrame]);

  // Clone children and inject the containerRef so CinematicText can track
  // the same scroll container that drives the frame animation.
  const childrenWithRef = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(
        child as React.ReactElement<{
          scrollContainerRef?: React.RefObject<HTMLDivElement | null>;
        }>,
        { scrollContainerRef: containerRef }
      );
    }
    return child;
  });

  return (
    <div ref={containerRef} className="relative" style={{ height: `${totalFrames * 50}px` }}>
      <div className="sticky top-0 h-dvh w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="block w-full h-full"
        />

        {/* Text Overlays — synced to same scroll container */}
        <div className="absolute inset-0 pointer-events-none">{childrenWithRef}</div>

        {/* Loading overlay */}
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-sacred-night/90">
            <div className="w-48 h-1 bg-sacred-stone/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-sacred-gold transition-all duration-300"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <p className="mt-4 text-sacred-gold font-body text-sm animate-pulse-slow">
              Loading sacred sequence...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
