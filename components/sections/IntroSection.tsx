'use client';

import { motion } from 'framer-motion';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

export default function IntroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-sacred-night overflow-hidden">
      {/* Ambient gold particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-sacred-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100 - Math.random() * 200],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Radial glow behind title */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)',
        }}
      />

      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 2, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="relative z-10 text-center px-6"
        style={{ perspective: '1000px' }}
      >
        <motion.h1
          initial={{ rotateX: -30 }}
          animate={{ rotateX: 0 }}
          transition={{ duration: 2, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="text-hero font-heading text-sacred-gold leading-tight text-shadow-deep"
        >
          The Sage Who
          <br />
          Balanced the World
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="mt-6 text-sacred-white/70 font-body text-lg sm:text-xl tracking-wide"
        >
          The Story of Sage Agastya
        </motion.p>
      </motion.div>

      {/* Scroll indicator at bottom */}
      <div className="absolute bottom-8 sm:bottom-12">
        <ScrollIndicator />
      </div>
    </section>
  );
}
