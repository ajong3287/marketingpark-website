import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 성능 최적화 설정
  compress: true, // Gzip 압축 활성화
  poweredByHeader: false, // X-Powered-By 헤더 제거 (보안)
  generateEtags: true, // ETag 생성 (캐싱 개선)

  // 이미지 최적화 설정 (향후 이미지 추가 시 사용)
  images: {
    formats: ['image/webp'], // WebP 우선 사용
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // React Strict Mode (개발 시 경고 활성화)
  reactStrictMode: true,

  // 실험적 기능
  experimental: {
    // 최적화된 패키지 임포트
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // 헤더 최적화
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
