'use client';

import StorySection from './StorySection';
import { STORY_PARTS } from '@/lib/constants';

export default function Part3Section() {
  return <StorySection part={STORY_PARTS[2]} />;
}
