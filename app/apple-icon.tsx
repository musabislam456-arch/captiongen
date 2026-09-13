import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #a21caf 0%, #db2777 50%, #f97316 100%)',
        }}
      >
        <div style={{ color: '#ffffff', fontSize: 104, fontWeight: 800, fontFamily: 'sans-serif' }}>
          #
        </div>
      </div>
    ),
    { ...size }
  );
}
