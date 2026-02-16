'use client';

import { motion } from 'framer-motion';

export default function SacredDivider() {
  return (
    <div className="w-full py-12 flex items-center justify-center bg-sacred-night">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="flex items-center gap-4"
      >
        <div className="h-px w-16 sm:w-20 bg-gradient-to-r from-transparent to-sacred-gold" />
        <svg
          width="32"
          height="32"
          viewBox="0 0 100 100"
          className="text-sacred-gold"
        >
          {/* Lotus-inspired shape */}
          <ellipse cx="50" cy="70" rx="30" ry="8" fill="none" stroke="currentColor" strokeWidth="2" />
          <path
            d="M50 15 C50 15 35 35 35 50 C35 60 42 65 50 65 C58 65 65 60 65 50 C65 35 50 15 50 15Z"
            fill="currentColor"
            opacity="0.8"
          />
          <path
            d="M50 25 C50 25 25 40 25 55 C25 60 35 65 50 65"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M50 25 C50 25 75 40 75 55 C75 60 65 65 50 65"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <div className="h-px w-16 sm:w-20 bg-gradient-to-l from-transparent to-sacred-gold" />
      </motion.div>
    </div>
  );
}
