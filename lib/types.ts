export interface TextOverlay {
  frameStart: number;
  frameEnd: number;
  text: string;
  position?: 'top' | 'center' | 'bottom';
}

export interface StoryPart {
  id: string;
  title: string;
  preScrollText: string[];
  postScrollText: string[];
  sequenceFolder: string;
  totalFrames: number;
  textOverlays: TextOverlay[];
}

export interface Fact {
  id: number;
  title: string;
  description: string;
  icon: string;
}
