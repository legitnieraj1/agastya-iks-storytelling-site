import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Sage Who Balanced the World - Story of Sage Agastya',
  description:
    'An immersive scroll-driven narrative experience telling the story of Sage Agastya through cinematic animations and sacred Indian aesthetics.',
  keywords: ['Sage Agastya', 'Indian mythology', 'storytelling', 'interactive'],
  openGraph: {
    title: 'The Sage Who Balanced the World',
    description: 'The Story of Sage Agastya - An Interactive Journey',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0A0A0A',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&family=EB+Garamond:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-sacred-night text-sacred-white antialiased">
        {children}
      </body>
    </html>
  );
}
