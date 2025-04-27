import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Molnár Autóbérlés Kőszeg';
export const contentType = 'image/png';
export const size = {
  width: 1200,
  height: 630,
};

export default async function TwitterImage() {
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
          backgroundColor: '#000000',
          color: 'white',
          padding: '0',
          position: 'relative',
        }}
      >
        {/* Subtle car silhouette backdrop */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: 0.1,
            backgroundImage: 'radial-gradient(circle at 70% 60%, #444 0%, #000 70%)',
            zIndex: 1,
          }}
        />
        
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            width: '80%',
            maxWidth: '900px',
            padding: '20px',
          }}
        >
          {/* Logo Typography */}
          <div style={{ 
            fontFamily: 'serif', 
            fontSize: '130px', 
            fontWeight: '400', 
            letterSpacing: '0.05em', 
            marginBottom: '20px',
            textAlign: 'center',
          }}>
            MOLNÁR
          </div>
          
          <div style={{ 
            fontSize: '40px', 
            fontWeight: '300', 
            letterSpacing: '0.2em', 
            marginBottom: '40px',
            textTransform: 'uppercase',
          }}>
            AUTÓBÉRLÉS
          </div>
          
          <div style={{
            width: '80%',
            height: '1px',
            backgroundColor: 'rgba(255,255,255,0.3)',
            margin: '10px 0 40px 0',
          }} />
          
          <div style={{
            fontSize: '24px',
            fontWeight: '300',
            letterSpacing: '0.05em',
            marginBottom: '40px',
            textAlign: 'center',
          }}>
            ELEGÁNS MEGOLDÁS • MEGBÍZHATÓ SZOLGÁLTATÁS
          </div>
          
          <div style={{
            fontSize: '30px',
            fontWeight: '400',
            letterSpacing: '0.05em',
            marginTop: '20px',
          }}>
            KŐSZEG
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Serif',
          data: await fetch(
            new URL('https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtXK-F2qC0s.woff')
          ).then((res) => res.arrayBuffer()),
          weight: 400,
          style: 'normal',
        },
      ],
    }
  );
}