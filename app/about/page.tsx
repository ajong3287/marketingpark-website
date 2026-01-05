// (Story 1.4) 회사 소개 페이지

import { Building, Target, Zap, Rocket } from 'lucide-react';
import type { Metadata } from 'next';

// (Story 1.1 AC.3)  SEO 설정
export const metadata: Metadata = {
  title: '회사 소개',
  description: '2014년부터 축적된 (주)마케팅파크의 비전, 연혁, 그리고 "종합 컨설팅 방식"의 핵심 경쟁력을 확인하세요. 200+ 프로젝트, 50+ 고객사, 15년 경험.',
  keywords: ['마케팅파크 소개', '회사 소개', '비전', '연혁', '핵심 경쟁력'],
  openGraph: {
    title: '회사 소개 | 마케팅파크',
    description: '2014년부터 축적된 노하우와 종합 컨설팅 방식',
    url: '/about',
  },
};

// (Story 1.4 AC.3)  핵심 경쟁력 데이터 (PRD 2.1 FR2 [cite: 808-816] 및 회사 소개서 [cite: 265-286] 기반)
const coreStrengths = [
  {
    name: '다양한 아이템 보유',
    description: '네이버 상위 노출, 인플루언서, 위기 대응 등 시장이 요구하는 모든 마케팅 아이템을 보유하고 있습니다.',
    icon: Zap,
  },
  {
    name: '보장형 서비스 진행',
    description: '블로그/쇼핑 등 주요 카테고리의 상위 노출을 보장하며, 미달성 시 연장하는 신뢰의 서비스를 제공합니다.',
    icon: Target,
  },
  {
    name: '기획력이 반영된 콘텐츠',
    description: '"영혼 없는 물량공세"가 아닌, 제품의 본질(Essence)을 탐구하여 기획력이 반영된 고품질 콘텐츠를 제작합니다.',
    icon: Rocket,
  },
  {
    name: 'One-Stop 종합 컨설팅',
    description: '키워드 설정부터 매체 선정, 콘텐츠 제작까지 모든 과정을 아우르는 종합 컨설팅 방식으로 프로젝트를 진행합니다.',
    icon: Building,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. 페이지 헤더 (비전) */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            신뢰할 수 있는 파트너,
            <br />
            <span className="text-lime-600">(주)마케팅파크</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            (Story 1.4 AC.2) 
            "제품에 대한 깊은 이해, 브랜드에 대한 통찰력, 기업에 대한 사명감."
            2014년부터  (주)마케팅파크는 이 철학을 바탕으로 수많은 프로모션을 성공적으로 이끌어 왔습니다.
          </p>
        </div>
      </section>

      {/* 2. 핵심 경쟁력 (AC.3) */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              마케팅파크의 핵심 경쟁력
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              우리는 "One-Stop 종합 컨설팅" [cite: 282-286] 방식으로 결과의 차이를 만듭니다.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {coreStrengths.map((strength) => (
              <div key={strength.name} className="rounded-lg bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-600 text-white">
                  <strength.icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900">{strength.name}</h3>
                <p className="mt-2 text-base text-gray-600">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 회사 정보 (AC.4) */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              회사 정보
            </h2>
            <div className="mt-8 text-base text-gray-600">
              <p>
                (주)마케팅파크 (MarketingPark Co., Ltd.)
              </p>
              <p className="mt-2">
                (Story 1.4 AC.4) 
                주소: 서울시 은평구 통일로53길 9-21 B101호
              </p>
              <p className="mt-2">
                대표 연락처: 010-5407-3287
              </p>
              <p className="mt-2">
                이메일: ajong3287@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}