import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CaptionGen',
    short_name: 'CaptionGen',
    description:
      'Social Media Marketing Tools, Caption Generator & Hashtag Finder for creators & agencies.',
    start_url: '/',
    display: 'standalone',
    background_color: '#4a044e',
    theme_color: '#db2777',
    icons: [
      { src: '/icon', sizes: '192x192', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
