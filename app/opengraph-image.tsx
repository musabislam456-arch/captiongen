import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'CaptionGen — Social Media Marketing Tools';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #4a044e 0%, #a21caf 45%, #db2777 75%, #f97316 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 36 }}>
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: 26,
              background: 'rgba(255,255,255,0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 60,
              fontWeight: 800,
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.3)',
            }}
          >
            #
          </div>
          <div style={{ fontSize: 62, fontWeight: 800, color: '#ffffff', letterSpacing: -1 }}>
            CaptionGen
          </div>
        </div>
        <div style={{ fontSize: 28, color: '#fce7f3', maxWidth: 960, textAlign: 'center' }}>
          Social Media Marketing Tools, Caption Generator &amp; Hashtag Finder
        </div>
        <div style={{ marginTop: 44, display: 'flex', gap: 16 }}>
          {['Captions', 'Hashtags', 'Best Times'].map((t) => (
            <div
              key={t}
              style={{
                padding: '10px 24px',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.14)',
                color: '#ffffff',
                fontSize: 20,
                border: '1px solid rgba(255,255,255,0.3)',
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
