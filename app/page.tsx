// (Story 1.3) 메인 페이지
// [엘리나이]
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { HeroSection } from './_components/home/hero-section';
import { TrustBar } from './_components/home/trust-bar';

// Below-the-fold 컴포넌트 lazy loading (성능 최적화)
const CoreServices = dynamic(() => import('./_components/home/core-services').then(mod => ({ default: mod.CoreServices })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="text-gray-400">Loading...</div></div>
});

const KeyReference = dynamic(() => import('./_components/home/key-reference').then(mod => ({ default: mod.KeyReference })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="text-gray-400">Loading...</div></div>
});

const CustomerReviews = dynamic(() => import('./_components/home/customer-reviews').then(mod => ({ default: mod.CustomerReviews })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="text-gray-400">Loading...</div></div>
});

const FinalCta = dynamic(() => import('./_components/home/final-cta').then(mod => ({ default: mod.FinalCta })), {
  loading: () => <div className="h-64 flex items-center justify-center"><div className="text-gray-400">Loading...</div></div>
});

export const metadata: Metadata = {
  title: '(주)마케팅파크 - No.1 Creative Online Marketing',
  description: '바이럴 마케팅, 언론홍보, 위기관리, 인플루언서 마케팅 전문. 삼성, CJ, 기아 등 주요 고객사 200+ 프로젝트 성공 사례. 대표 직통 상담 010-5407-3287',
  openGraph: {
    title: '(주)마케팅파크 - No.1 Creative Online Marketing',
    description: '바이럴 마케팅, 언론홍보, 위기관리 전문. Since 2014',
    url: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <CoreServices />
      <KeyReference />
      <CustomerReviews />
      <FinalCta />
    </>
  );
}