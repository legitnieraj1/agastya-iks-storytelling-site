'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import IntroSection from '@/components/sections/IntroSection';
import Part1Section from '@/components/sections/Part1Section';
import Part2Section from '@/components/sections/Part2Section';
import Part3Section from '@/components/sections/Part3Section';
import Part4Section from '@/components/sections/Part4Section';
import Part5Section from '@/components/sections/Part5Section';
import Part6Section from '@/components/sections/Part6Section';
import FactsSection from '@/components/sections/FactsSection';
import OutroSection from '@/components/sections/OutroSection';
import LoadingScreen from '@/components/ui/LoadingScreen';
import ProgressIndicator from '@/components/ui/ProgressIndicator';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <main ref={containerRef} className="relative bg-sacred-night">
      <LoadingScreen />
      <ProgressIndicator scrollProgress={scrollYProgress} />

      <IntroSection />
      <Part1Section />
      <Part2Section />
      <Part3Section />
      <Part4Section />
      <Part5Section />
      <Part6Section />
      <FactsSection />
      <OutroSection />
    </main>
  );
}
