'use client';

import { motion } from 'framer-motion';

export default function OutroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-sacred-night px-6 overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-xl"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-sacred-gold to-transparent mb-12"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="text-sacred-white/80 font-body text-lg sm:text-xl leading-relaxed mb-6"
        >
          Some stories are not just told.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
          className="text-sacred-white/80 font-body text-lg sm:text-xl leading-relaxed mb-6"
        >
          They are lived, remembered, and passed on.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          viewport={{ once: true }}
          className="text-sacred-gold font-heading text-section leading-relaxed mb-10"
        >
          Pass this one forward.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 2 }}
          viewport={{ once: true }}
          className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-sacred-gold to-transparent mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          viewport={{ once: true }}
          className="text-sacred-white/40 font-body text-sm tracking-widest uppercase"
        >
          The Sage Who Balanced the World
        </motion.p>
      </motion.div>
    </section>
  );
}
