import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Molnár Autóbérlés Kőszeg';
export const contentType = 'image/png';
export const size = {
  width: 1200,
  height: 630,
};

export default async function TwitterImage() {
  // A Twitter/X kép ugyanaz lehet, mint az OG kép
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom right, #3b82f6, #1e3a8a)',
          color: 'white',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px',
          }}
        >
          {/* Autó ikon - egyszerű SVG */}
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: '16px' }}
          >
            <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"></path>
            <circle cx="6.5" cy="16.5" r="2.5"></circle>
            <circle cx="16.5" cy="16.5" r="2.5"></circle>
          </svg>
          <h1
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              margin: 0,
            }}
          >
            Molnár Autóbérlés
          </h1>
        </div>
        <h2
          style={{
            fontSize: '28px',
            fontWeight: 'normal',
            marginBottom: '24px',
            textAlign: 'center',
          }}
        >
          Autóbérlés egyszerűen Kőszegen
        </h2>
        <p
          style={{
            fontSize: '20px',
            textAlign: 'center',
            maxWidth: '600px',
          }}
        >
          Megbízható autók, rugalmas feltételek, professzionális szolgáltatás
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}