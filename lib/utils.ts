export function preloadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}

export function getFramePath(folder: string, frameNumber: number): string {
  // Frames are 0-indexed, 3-digit zero-padded, PNG format
  const padded = String(frameNumber).padStart(3, '0');
  return `${folder}/frame_${padded}.png`;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
