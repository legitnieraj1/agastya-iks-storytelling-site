'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';

interface ProgressIndicatorProps {
  scrollProgress: MotionValue<number>;
}

export default function ProgressIndicator({ scrollProgress }: ProgressIndicatorProps) {
  const width = useTransform(scrollProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-sacred-stone/20">
      <motion.div
        style={{ width }}
        className="h-full bg-gradient-to-r from-sacred-gold via-sacred-saffron to-sacred-red"
      />
    </div>
  );
}
