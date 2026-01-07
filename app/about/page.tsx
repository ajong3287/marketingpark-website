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
      {/* 1. 페이지 헤더 (비전 & 미션 강화) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-lime-600 via-lime-700 to-lime-900 py-20 sm:py-32">
        {/* 배경 패턴 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            신뢰할 수 있는 파트너,
            <br />
            <span className="text-lime-200">(주)마케팅파크</span>
          </h1>

          {/* Vision */}
          <div className="mt-12 max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-lime-200 mb-3">Our Vision</p>
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              No.1 크리에이티브
              <br className="sm:hidden" />
              <span className="text-lime-200"> 온라인 마케팅 기업</span>
            </p>
          </div>

          {/* Mission */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold text-white mb-2">제품에 대한 깊은 이해</h3>
              <p className="text-sm text-lime-100">
                제품의 본질(Essence)을 탐구하고 Identity를 반영한 콘텐츠 제작
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="text-lg font-semibold text-white mb-2">브랜드에 대한 통찰력</h3>
              <p className="text-sm text-lime-100">
                시장 트렌드 분석과 브랜드 가치를 극대화하는 전략 수립
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-lg font-semibold text-white mb-2">기업에 대한 사명감</h3>
              <p className="text-sm text-lime-100">
                고객의 성공이 곧 우리의 성공이라는 철학으로 함께 성장
              </p>
            </div>
          </div>

          {/* 실적 강조 */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-white">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-lime-200">2014</div>
              <div className="mt-2 text-sm uppercase tracking-wide text-lime-100">Since</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-lime-200">200+</div>
              <div className="mt-2 text-sm uppercase tracking-wide text-lime-100">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-lime-200">50+</div>
              <div className="mt-2 text-sm uppercase tracking-wide text-lime-100">Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 연혁 타임라인 (Phase 4) */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              마케팅파크의 여정
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              2014년부터 지금까지, 끊임없이 성장해온 우리의 이야기
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-lime-200 hidden md:block" style={{transform: 'translateX(-50%)'}}></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {/* 2014: 설립 */}
              <div className="relative flex items-center md:justify-start">
                <div className="flex-1 md:w-1/2 md:pr-8 text-right">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="text-2xl font-bold text-lime-600 mb-2">2014</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">회사 설립</h3>
                    <p className="text-gray-600 dark:text-gray-400">서울시 은평구에서 (주)마케팅파크 설립, 바이럴마케팅 전문 기업으로 첫 발걸음</p>
                  </div>
                </div>
                <div className="absolute left-1/2 w-4 h-4 bg-lime-600 rounded-full hidden md:block" style={{transform: 'translateX(-50%)'}}></div>
                <div className="flex-1 md:w-1/2 md:pl-8"></div>
              </div>

              {/* 2015-2018: 초기 성장 */}
              <div className="relative flex items-center md:justify-end">
                <div className="flex-1 md:w-1/2 md:pr-8"></div>
                <div className="absolute left-1/2 w-4 h-4 bg-lime-600 rounded-full hidden md:block" style={{transform: 'translateX(-50%)'}}></div>
                <div className="flex-1 md:w-1/2 md:pl-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="text-2xl font-bold text-lime-600 mb-2">2015-2018</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">초기 성장기</h3>
                    <p className="text-gray-600 dark:text-gray-400">네이버 상위노출, 블로그/카페 마케팅 전문성 확보. 카페 체험단 '트루리뷰' 런칭</p>
                  </div>
                </div>
              </div>

              {/* 2019-2021: 대기업 진출 */}
              <div className="relative flex items-center md:justify-start">
                <div className="flex-1 md:w-1/2 md:pr-8 text-right">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="text-2xl font-bold text-lime-600 mb-2">2019-2021</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">대기업 프로젝트 확대</h3>
                    <p className="text-gray-600 dark:text-gray-400">삼성, CJ, 농심, 미래에셋증권, KB국민은행 등 대기업 고객사 확보. 유튜브 마케팅 강화</p>
                  </div>
                </div>
                <div className="absolute left-1/2 w-4 h-4 bg-lime-600 rounded-full hidden md:block" style={{transform: 'translateX(-50%)'}}></div>
                <div className="flex-1 md:w-1/2 md:pl-8"></div>
              </div>

              {/* 2022-2023: AI 자동화 */}
              <div className="relative flex items-center md:justify-end">
                <div className="flex-1 md:w-1/2 md:pr-8"></div>
                <div className="absolute left-1/2 w-4 h-4 bg-lime-600 rounded-full hidden md:block" style={{transform: 'translateX(-50%)'}}></div>
                <div className="flex-1 md:w-1/2 md:pl-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="text-2xl font-bold text-lime-600 mb-2">2022-2023</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">AI 기술 도입</h3>
                    <p className="text-gray-600 dark:text-gray-400">유튜브 AI 영상 제작 서비스 런칭. 맘카페 침투 작업 전문화. 서울과기대, 뤼튼 등 다양한 분야 확장</p>
                  </div>
                </div>
              </div>

              {/* 2024: 현재 */}
              <div className="relative flex items-center md:justify-start">
                <div className="flex-1 md:w-1/2 md:pr-8 text-right">
                  <div className="bg-lime-50 dark:bg-gray-800 p-6 rounded-lg border-2 border-lime-600 dark:border-lime-500">
                    <div className="text-2xl font-bold text-lime-600 mb-2">2024</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">현재</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-semibold">200+ 프로젝트 성공 달성 | 50+ 고객사 파트너십 | 종합 마케팅 컨설팅 리더</p>
                  </div>
                </div>
                <div className="absolute left-1/2 w-4 h-4 bg-lime-600 rounded-full hidden md:block" style={{transform: 'translateX(-50%)'}}></div>
                <div className="flex-1 md:w-1/2 md:pl-8"></div>
              </div>

              {/* 2025-2026: 미래 비전 */}
              <div className="relative flex items-center md:justify-end">
                <div className="flex-1 md:w-1/2 md:pr-8"></div>
                <div className="absolute left-1/2 w-4 h-4 bg-lime-300 rounded-full hidden md:block" style={{transform: 'translateX(-50%)'}}></div>
                <div className="flex-1 md:w-1/2 md:pl-8">
                  <div className="bg-gradient-to-br from-lime-50 to-lime-100 p-6 rounded-lg border border-lime-200">
                    <div className="text-2xl font-bold text-lime-700 mb-2">2025-2026</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">미래 비전</h3>
                    <p className="text-gray-700">AI 기반 마케팅 자동화 플랫폼 구축. 글로벌 마케팅 서비스 확장. No.1 크리에이티브 온라인 마케팅 기업</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 핵심 경쟁력 (AC.3) */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              마케팅파크의 핵심 경쟁력
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              우리는 "One-Stop 종합 컨설팅" [cite: 282-286] 방식으로 결과의 차이를 만듭니다.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {coreStrengths.map((strength) => (
              <div key={strength.name} className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-700 text-white">
                  <strength.icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">{strength.name}</h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 대표 프로필 (Phase 4) */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              대표 소개
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              고객과 함께 성장하는 마케팅 전문가
            </p>
          </div>

          <div className="bg-gradient-to-br from-lime-50 to-white dark:from-gray-800 dark:to-gray-800 p-8 md:p-12 rounded-2xl shadow-lg border border-lime-100 dark:border-gray-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* 프로필 정보 */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">서종원 대표</h3>
                <p className="text-xl text-lime-700 dark:text-lime-400 font-semibold mb-6">Founder & CEO</p>

                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    2014년 (주)마케팅파크를 설립한 이래, <strong className="text-lime-700 dark:text-lime-400">200개 이상의 프로젝트</strong>를 성공적으로 이끌어온
                    온라인 마케팅 전문가입니다.
                  </p>
                  <p className="leading-relaxed">
                    "제품에 대한 깊은 이해, 브랜드에 대한 통찰력, 기업에 대한 사명감"을 바탕으로
                    삼성, CJ, 농심, 미래에셋증권, KB국민은행 등 <strong className="text-lime-700 dark:text-lime-400">50개 이상의 대기업 및 중소기업</strong>과
                    파트너십을 구축했습니다.
                  </p>
                  <p className="leading-relaxed">
                    특히 <strong className="text-lime-700 dark:text-lime-400">바이럴마케팅</strong>과 <strong className="text-lime-700 dark:text-lime-400">AI 기반 콘텐츠 제작</strong> 분야에서
                    혁신적인 솔루션을 개발하여 업계를 선도하고 있습니다.
                  </p>
                </div>

                {/* 연락처 */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <p><strong className="text-gray-900 dark:text-white">Email:</strong> ajong3287@gmail.com</p>
                    <p><strong className="text-gray-900 dark:text-white">Tel:</strong> 010-5407-3287</p>
                  </div>
                </div>
              </div>

              {/* 전문 분야 & 철학 */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">전문 분야</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-lime-600 dark:text-lime-400 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">바이럴마케팅 기획 및 실행</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lime-600 dark:text-lime-400 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">네이버 검색 상위노출 최적화</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lime-600 dark:text-lime-400 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">인플루언서 마케팅 전략</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lime-600 dark:text-lime-400 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">AI 기반 콘텐츠 자동화</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lime-600 dark:text-lime-400 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">종합 마케팅 컨설팅</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-lime-600 dark:bg-lime-700 p-6 rounded-lg shadow-sm text-white">
                  <h4 className="text-lg font-semibold mb-3">경영 철학</h4>
                  <p className="text-lime-50 dark:text-lime-100 leading-relaxed italic">
                    "고객의 성공이 곧 우리의 성공입니다.
                    단순한 마케팅을 넘어 고객과 함께 성장하는 파트너가 되겠습니다."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 회사 정보 (AC.4) */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              회사 정보
            </h2>
            <div className="mt-8 text-base text-gray-600 dark:text-gray-300">
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