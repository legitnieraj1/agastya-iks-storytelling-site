'use client';

import { motion } from 'framer-motion';
import SequenceCanvas from '@/components/ScrollSequence/SequenceCanvas';
import CinematicText from '@/components/ui/CinematicText';
import SacredDivider from '@/components/ui/SacredDivider';
import { StoryPart } from '@/lib/types';

interface StorySectionProps {
  part: StoryPart;
}

export default function StorySection({ part }: StorySectionProps) {
  return (
    <section className="relative">
      {/* Pre-Scroll Cinematic Text */}
      <div className="min-h-screen flex items-center justify-center bg-sacred-night px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-2xl"
        >
          {part.preScrollText.map((line, index) => {
            // Second line is the title (index 1 for parts starting with title,
            // or index 0 for parts where title is first)
            const isTitle =
              line === line.toUpperCase() && line.length > 5 && !line.includes('...');

            return (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className={
                  isTitle
                    ? 'text-section font-heading text-sacred-gold mb-8 mt-4 tracking-wider'
                    : 'text-body-responsive font-body text-sacred-white/90 mb-4 leading-relaxed'
                }
              >
                {line}
              </motion.p>
            );
          })}
        </motion.div>
      </div>

      <SacredDivider />

      {/* Scroll Sequence with Text Overlays */}
      <SequenceCanvas
        sequenceFolder={part.sequenceFolder}
        totalFrames={part.totalFrames}
      >
        {part.textOverlays.map((overlay, index) => (
          <CinematicText
            key={index}
            text={overlay.text}
            frameStart={overlay.frameStart}
            frameEnd={overlay.frameEnd}
            totalFrames={part.totalFrames}
            position={overlay.position}
          />
        ))}
      </SequenceCanvas>

      <SacredDivider />

      {/* Post-Scroll Summary */}
      <div className="min-h-[60vh] flex items-center justify-center bg-sacred-night px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center max-w-2xl"
        >
          {part.postScrollText.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-body-responsive font-body text-sacred-white/90 mb-4 leading-relaxed italic"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
