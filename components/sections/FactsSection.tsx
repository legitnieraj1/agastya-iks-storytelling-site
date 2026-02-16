'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FACTS } from '@/lib/constants';
import { useState, useCallback } from 'react';

const FACT_ICONS: Record<string, string> = {
  lotus: '\u{1FAB7}',
  star: '\u2728',
  script: '\uD83D\uDCDC',
  ocean: '\uD83C\uDF0A',
  medicine: '\uD83C\uDF3F',
  mountain: '\u26F0\uFE0F',
  om: '\uD83D\uDD49\uFE0F',
  balance: '\u2696\uFE0F',
};

export default function FactsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigate = useCallback(
    (newIndex: number) => {
      setDirection(newIndex > activeIndex ? 1 : -1);
      setActiveIndex(newIndex);
    },
    [activeIndex]
  );

  const goNext = () => {
    navigate(activeIndex < FACTS.length - 1 ? activeIndex + 1 : 0);
  };

  const goPrev = () => {
    navigate(activeIndex > 0 ? activeIndex - 1 : FACTS.length - 1);
  };

  return (
    <section className="min-h-screen bg-sacred-night py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-section font-heading text-sacred-gold text-center mb-16"
      >
        Did You Know?
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        {/* Mobile: Swipeable Cards */}
        <div className="md:hidden">
          <div className="relative min-h-[200px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={{ duration: 0.3 }}
                className="bg-sacred-stone/10 backdrop-blur-sm rounded-xl p-8 border border-sacred-gold/20"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-sacred-gold/10 rounded-full flex items-center justify-center text-2xl shrink-0">
                    {FACT_ICONS[FACTS[activeIndex].icon] || '\u{1FAB7}'}
                  </div>
                  <h3 className="text-xl font-heading text-sacred-gold">
                    {FACTS[activeIndex].title}
                  </h3>
                </div>
                <p className="text-sacred-white/80 font-body text-body-responsive leading-relaxed">
                  {FACTS[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {FACTS.map((_, index) => (
              <button
                key={index}
                onClick={() => navigate(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-sacred-gold w-6'
                    : 'bg-sacred-gold/30 w-2'
                }`}
                aria-label={`Go to fact ${index + 1}`}
              />
            ))}
          </div>

          {/* Nav Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={goPrev}
              className="px-6 py-2.5 bg-sacred-gold/10 text-sacred-gold border border-sacred-gold/40 rounded-full font-body text-sm hover:bg-sacred-gold/20 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={goNext}
              className="px-6 py-2.5 bg-sacred-gold text-sacred-night rounded-full font-body text-sm font-semibold hover:bg-sacred-saffron transition-colors"
            >
              Next
            </button>
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {FACTS.map((fact, index) => (
            <motion.div
              key={fact.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-sacred-stone/10 backdrop-blur-sm rounded-xl p-6 border border-sacred-gold/20 hover:border-sacred-gold/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-sacred-gold/10 rounded-full flex items-center justify-center text-xl group-hover:bg-sacred-gold/20 transition-colors">
                  {FACT_ICONS[fact.icon] || '\u{1FAB7}'}
                </div>
                <h3 className="text-base font-heading text-sacred-gold">
                  {fact.title}
                </h3>
              </div>
              <p className="text-sacred-white/70 font-body text-sm leading-relaxed">
                {fact.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
