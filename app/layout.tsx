import type { Metadata, Viewport } from 'next';
import { montserrat, spaceGrotesk, notoSansKR } from './_styles/fonts'; // 4축 디자인 폰트 시스템
import './globals.css';
import { Header } from './_components/layout/header';
import { Footer } from './_components/layout/footer';
import { Providers } from './providers';

// Viewport 설정 분리 (Next.js 16 권장 패턴)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#84cc16',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://marketingpark.vercel.app'),
  title: {
    default: '(주)마케팅파크 - No.1 Creative Online Marketing',
    template: '%s | 마케팅파크',
  },
  description: '바이럴 마케팅, 언론홍보, 위기관리, 인플루언서 마케팅 전문. 삼성, CJ, 기아 등 주요 고객사 성공 사례 보유. 대표 직통 상담. Since 2014, 200+ 프로젝트 경험.',
  keywords: [
    '마케팅 에이전시',
    '바이럴 마케팅',
    '언론홍보',
    'PR 대행사',
    '위기관리',
    '네이버 마케팅',
    '온라인 마케팅',
    '인플루언서 마케팅',
    '마케팅파크',
    'SNS 마케팅',
  ],
  authors: [{ name: '(주)마케팅파크' }],
  creator: '(주)마케팅파크',
  publisher: '(주)마케팅파크',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://marketingpark.vercel.app',
    siteName: '마케팅파크',
    title: '(주)마케팅파크 - No.1 Creative Online Marketing',
    description: '바이럴 마케팅, 언론홍보, 위기관리 대응 전문. Since 2014, 200+ 프로젝트 경험',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '마케팅파크 - No.1 Creative Online Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '(주)마케팅파크 - No.1 Creative Online Marketing',
    description: '바이럴 마케팅, 언론홍보, 위기관리 대응 전문',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    other: {
      'naver-site-verification': 'naver-verification-code',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org 구조화된 데이터 (JSON-LD)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '(주)마케팅파크',
    url: 'https://marketingpark.vercel.app',
    logo: 'https://marketingpark.vercel.app/logo.png',
    description: 'No. 1 Creative Online Marketing - 바이럴 마케팅, 언론홍보, 위기관리 전문',
    foundingDate: '2014',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '통일로53길 9-21',
      addressLocality: '은평구',
      addressRegion: '서울시',
      postalCode: '03444',
      addressCountry: 'KR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+82-10-5407-3287',
      contactType: 'customer service',
      areaServed: 'KR',
      availableLanguage: 'Korean',
    },
    sameAs: [
      'https://blog.naver.com/marketingpark',
      'https://www.youtube.com/@jacky5357',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://marketingpark.vercel.app',
    name: '(주)마케팅파크',
    image: 'https://marketingpark.vercel.app/og-image.png',
    description: '바이럴 마케팅, 언론홍보, 위기관리, 인플루언서 마케팅 전문. Since 2014, 200+ 프로젝트 경험',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '통일로53길 9-21',
      addressLocality: '은평구',
      addressRegion: '서울시',
      postalCode: '03444',
      addressCountry: 'KR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.6176,
      longitude: 126.9227,
    },
    telephone: '+82-10-5407-3287',
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  };

  return (
    <html
      lang="ko"
      className={`${montserrat.variable} ${spaceGrotesk.variable} ${notoSansKR.variable} ${notoSansKR.className}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-lime-700 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
        >
          본문으로 건너뛰기
        </a>
        <Providers>
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
