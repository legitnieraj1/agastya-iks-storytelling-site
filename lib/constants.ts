import { StoryPart, Fact } from './types';

export const STORY_PARTS: StoryPart[] = [
  {
    id: 'part1',
    title: 'The Miraculous Beginning',
    preScrollText: [
      'In the age when gods walked the earth and knowledge was divine...',
      'THE MIRACULOUS BEGINNING',
      'From sacred waters emerged a being of light,',
      'Born not of flesh, but of cosmic purpose.',
      'Agastya, the one who would bridge heaven and earth.',
    ],
    postScrollText: [
      'And so, the sage was born\u2014',
      'A miracle child destined to carry the weight of wisdom itself.',
      'But the world would soon call upon him for a greater balance...',
    ],
    sequenceFolder: '/sequences/part1',
    totalFrames: 120,
    textOverlays: [
      { frameStart: 20, frameEnd: 40, text: 'Born from the sacred Kumbha...', position: 'bottom' },
      { frameStart: 60, frameEnd: 80, text: 'Master of all knowledge...', position: 'center' },
      { frameStart: 100, frameEnd: 120, text: 'The Vedas whispered his name...', position: 'bottom' },
    ],
  },
  {
    id: 'part2',
    title: 'The Call to the South',
    preScrollText: [
      'THE CALL TO THE SOUTH',
      'When Shiva wed Parvati in the frost-kissed Himalayas,',
      'All creation gathered to witness.',
      'But the Earth... began to tilt.',
    ],
    postScrollText: [
      'The sage accepted his divine calling.',
      'Southward he walked, into lands unknown,',
      'Carrying the spiritual weight of millions.',
    ],
    sequenceFolder: '/sequences/part2',
    totalFrames: 120,
    textOverlays: [
      { frameStart: 20, frameEnd: 40, text: 'The world unbalanced...', position: 'top' },
      { frameStart: 55, frameEnd: 75, text: 'Only one could restore equilibrium...', position: 'center' },
      { frameStart: 95, frameEnd: 115, text: 'Go South, Agastya. Your journey begins.', position: 'bottom' },
    ],
  },
  {
    id: 'part3',
    title: 'The Mover of Mountains',
    preScrollText: [
      'THE MOVER OF MOUNTAINS',
      'The path was blocked.',
      'Vindhya\u2014proud, towering, hungry for the sky\u2014',
      'Cast the world into eternal shadow.',
    ],
    postScrollText: [
      'Vindhya bows still, waiting for a return that will never come.',
      'Through humility, a passage was born\u2014',
      'Connecting North to South, forever.',
    ],
    sequenceFolder: '/sequences/part3',
    totalFrames: 120,
    textOverlays: [
      { frameStart: 15, frameEnd: 35, text: 'The mountain recognized its master...', position: 'center' },
      { frameStart: 50, frameEnd: 70, text: 'Stay bowed until I return...', position: 'bottom' },
      { frameStart: 90, frameEnd: 115, text: 'He never did.', position: 'center' },
    ],
  },
  {
    id: 'part4',
    title: 'The Great Protector',
    preScrollText: [
      'THE GREAT PROTECTOR',
      'Darkness lurked beneath the waves.',
      'Demons hid where gods could not reach.',
      'But Agastya... would drain the very ocean itself.',
    ],
    postScrollText: [
      'Protector. Destroyer. Liberator.',
      'The South had never known such power,',
      'Nor would it ever forget.',
    ],
    sequenceFolder: '/sequences/part4',
    totalFrames: 120,
    textOverlays: [
      { frameStart: 15, frameEnd: 35, text: 'In one gulp, the seas vanished...', position: 'top' },
      { frameStart: 50, frameEnd: 70, text: 'Demons exposed, gods victorious...', position: 'center' },
      { frameStart: 90, frameEnd: 115, text: 'Vatapi and Ilvala met their end...', position: 'bottom' },
    ],
  },
  {
    id: 'part5',
    title: 'The Gift of Language & Life',
    preScrollText: [
      'THE GIFT OF LANGUAGE & LIFE',
      'In the Pothigai Hills, he did not rest.',
      'He built. He taught. He gave.',
    ],
    postScrollText: [
      'Language. Water. Healing.',
      'The sage gave the South its very soul.',
      'His gifts flow eternal, like the Kaveri herself.',
    ],
    sequenceFolder: '/sequences/part5',
    totalFrames: 120,
    textOverlays: [
      { frameStart: 15, frameEnd: 35, text: 'Tamil\u2014the first grammar written...', position: 'top' },
      { frameStart: 55, frameEnd: 75, text: 'Kaveri\u2014the river of life summoned...', position: 'center' },
      { frameStart: 95, frameEnd: 115, text: 'Siddha medicine\u2014healing from nature itself...', position: 'bottom' },
    ],
  },
  {
    id: 'part6',
    title: 'The Eternal Guide',
    preScrollText: [
      'THE ETERNAL GUIDE',
      'Death could not claim him.',
      'For some are destined to never fade.',
    ],
    postScrollText: [
      'Look south on a clear night.',
      'You will see him still\u2014',
      'Agastya, the eternal sage,',
      'Watching over the world he balanced.',
    ],
    sequenceFolder: '/sequences/part6',
    totalFrames: 120,
    textOverlays: [
      { frameStart: 20, frameEnd: 40, text: 'Agastya became Canopus...', position: 'center' },
      { frameStart: 60, frameEnd: 80, text: 'The brightest star of the southern sky...', position: 'bottom' },
      { frameStart: 95, frameEnd: 115, text: 'Forever guiding travelers home...', position: 'center' },
    ],
  },
];

export const FACTS: Fact[] = [
  {
    id: 1,
    title: 'Immortal Sage',
    description: 'Agastya is one of the seven Chiranjivis (immortals) in Hindu tradition.',
    icon: 'lotus',
  },
  {
    id: 2,
    title: 'Star Connection',
    description: 'Canopus (Agastya Nakshatra) is the second brightest star in the night sky.',
    icon: 'star',
  },
  {
    id: 3,
    title: 'Linguistic Pioneer',
    description: 'The Agattiyam grammar he wrote is considered the foundation of Tamil literature.',
    icon: 'script',
  },
  {
    id: 4,
    title: 'Ocean Drinker',
    description: 'The story symbolizes the power of focus\u2014consuming problems whole rather than fighting them piecemeal.',
    icon: 'ocean',
  },
  {
    id: 5,
    title: 'Siddha Medicine',
    description: 'This 10,000+ year old system uses minerals, metals, and herbs\u2014a precursor to modern pharmacology.',
    icon: 'medicine',
  },
  {
    id: 6,
    title: "Vindhya's Bow",
    description: 'Geologically, the Vindhya range does "bow" eastward, creating a passage between North and South India.',
    icon: 'mountain',
  },
  {
    id: 7,
    title: 'Cultural Bridge',
    description: 'Agastya is revered equally in Shaivism, Vaishnavism, and Jainism\u2014a rare unifying figure.',
    icon: 'om',
  },
  {
    id: 8,
    title: 'Weight of Wisdom',
    description: "His 'spiritual weight' equaling all humans symbolizes the power of concentrated knowledge.",
    icon: 'balance',
  },
];
