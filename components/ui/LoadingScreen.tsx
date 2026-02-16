'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-sacred-night"
        >
          {/* Mandala spinner */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="relative w-20 h-20"
          >
            <div className="absolute inset-0 border-2 border-sacred-gold/30 rounded-full" />
            <div className="absolute inset-1 border-2 border-sacred-gold/20 rounded-full" />
            <div className="absolute inset-0 border-t-2 border-sacred-gold rounded-full" />
          </motion.div>

          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-8 text-sacred-gold font-heading text-lg tracking-widest"
          >
            Awakening the sage...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
