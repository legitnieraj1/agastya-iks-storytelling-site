'use client';

import { useState, useEffect } from 'react';
import { getFramePath } from '@/lib/utils';

export function useImageSequence(folder: string, totalFrames: number) {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const loaded: HTMLImageElement[] = new Array(totalFrames);
    let completed = 0;

    const loadFrame = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new window.Image();
        img.src = getFramePath(folder, index);
        img.onload = () => {
          if (!cancelled) {
            loaded[index] = img;
            completed++;
            setProgress(completed / totalFrames);
          }
          resolve();
        };
        img.onerror = () => {
          completed++;
          if (!cancelled) {
            setProgress(completed / totalFrames);
          }
          resolve();
        };
      });
    };

    const loadAll = async () => {
      // Load in batches to avoid overwhelming the browser
      const batchSize = 10;
      for (let i = 0; i < totalFrames; i += batchSize) {
        if (cancelled) break;
        const batch = Array.from(
          { length: Math.min(batchSize, totalFrames - i) },
          (_, j) => loadFrame(i + j)
        );
        await Promise.all(batch);
      }

      if (!cancelled) {
        setImages(loaded);
        setLoading(false);
      }
    };

    loadAll();

    return () => {
      cancelled = true;
    };
  }, [folder, totalFrames]);

  return { images, loading, progress };
}
