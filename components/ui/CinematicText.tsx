'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface CinematicTextProps {
  text: string;
  frameStart: number;
  frameEnd: number;
  totalFrames: number;
  scrollContainerRef?: React.RefObject<HTMLDivElement | null>;
  position?: 'top' | 'center' | 'bottom';
}

export default function CinematicText({
  text,
  frameStart,
  frameEnd,
  totalFrames,
  scrollContainerRef,
  position = 'center',
}: CinematicTextProps) {
  const fallbackRef = useRef<HTMLDivElement>(null);
  const targetRef = scrollContainerRef || fallbackRef;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const normalizedStart = frameStart / totalFrames;
  const normalizedEnd = frameEnd / totalFrames;

  const opacity = useTransform(
    scrollYProgress,
    [
      Math.max(0, normalizedStart - 0.03),
      normalizedStart,
      normalizedEnd,
      Math.min(1, normalizedEnd + 0.03),
    ],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [Math.max(0, normalizedStart - 0.03), normalizedStart],
    [30, 0]
  );

  const positionClasses: Record<string, string> = {
    top: 'top-16 sm:top-20',
    center: 'top-1/2 -translate-y-1/2',
    bottom: 'bottom-16 sm:bottom-20',
  };

  return (
    <motion.div
      ref={fallbackRef}
      style={{ opacity, y }}
      className={`absolute left-0 right-0 ${positionClasses[position]} px-6 md:px-12 text-center z-10`}
    >
      <p
        className="text-sacred-white font-body text-lg sm:text-xl md:text-2xl leading-relaxed drop-shadow-2xl"
        style={{
          textShadow: '0 0 15px rgba(212, 175, 55, 0.5), 0 2px 8px rgba(0,0,0,0.8)',
        }}
      >
        {text}
      </p>
    </motion.div>
  );
}
