'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { getFramePath } from '@/lib/utils';

export function usePreloadImages(
  folder: string,
  totalFrames: number,
  threshold: number = 0.1
) {
  const { ref, inView } = useInView({ threshold, triggerOnce: true });
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!inView || loading || images.length > 0) return;

    setLoading(true);

    const loadImages = async () => {
      const loaded: HTMLImageElement[] = [];
      let completed = 0;

      const promises = Array.from({ length: totalFrames }, (_, i) => {
        const imagePath = getFramePath(folder, i);

        return new Promise<HTMLImageElement>((resolve) => {
          const img = new window.Image();
          img.src = imagePath;
          img.onload = () => {
            completed++;
            setProgress(completed / totalFrames);
            resolve(img);
          };
          img.onerror = () => {
            completed++;
            setProgress(completed / totalFrames);
            resolve(img);
          };
        });
      });

      const results = await Promise.all(promises);
      loaded.push(...results);
      setImages(loaded);
      setLoading(false);
    };

    loadImages();
  }, [inView, folder, totalFrames, loading, images.length]);

  return { ref, images, loading, progress };
}
