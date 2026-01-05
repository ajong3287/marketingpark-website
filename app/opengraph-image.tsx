import { ImageResponse } from 'next/og';

// Image metadata
export const alt = '(주)마케팅파크 - No.1 Creative Online Marketing';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #84cc16 0%, #65a30d 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 70px)`,
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '80px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Company Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 24,
              textShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
          >
            (주)마케팅파크
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 48,
              color: 'rgba(255,255,255,0.95)',
              marginBottom: 40,
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            No.1 Creative Online Marketing
          </div>

          {/* Services */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
              fontSize: 28,
              color: 'rgba(255,255,255,0.9)',
              textShadow: '0 2px 4px rgba(0,0,0,0.15)',
            }}
          >
            <span>바이럴 마케팅</span>
            <span>•</span>
            <span>언론홍보</span>
            <span>•</span>
            <span>위기관리</span>
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '60px',
              marginTop: 60,
              fontSize: 24,
              color: 'white',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: 42, fontWeight: 'bold' }}>200+</span>
              <span style={{ fontSize: 20, opacity: 0.9 }}>프로젝트</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: 42, fontWeight: 'bold' }}>50+</span>
              <span style={{ fontSize: 20, opacity: 0.9 }}>고객사</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: 42, fontWeight: 'bold' }}>Since 2014</span>
              <span style={{ fontSize: 20, opacity: 0.9 }}>15년 경험</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: 0,
            right: 0,
            textAlign: 'center',
            fontSize: 24,
            color: 'rgba(255,255,255,0.8)',
          }}
        >
          marketingpark.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
