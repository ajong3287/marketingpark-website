// (Story 2.1) 서비스 소개 페이지

import { Megaphone, ShieldHalf, BotMessageSquare, MicVocal, Newspaper, Gift } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

// (Story 1.1 AC.3)  SEO 설정
export const metadata: Metadata = {
  title: '서비스 소개 | (주)마케팅파크',
  description: '바이럴 마케팅, 언론홍보, 위기관리 대응, 인플루언서 마케팅 등 (주)마케팅파크의 전문적이고 기획력 있는 종합 컨설팅 서비스를 확인하세요.',
};

// (Story 2.1 AC.1)  서비스 카테고리 (PRD FR3 [cite: 808-816] 및 UX Spec 4.2 [cite: 831-832] 기반)
// TODO: 이 데이터는 CMS 또는 별도 JSON으로 분리할 수 있습니다.
const services = [
  {
    id: 'viral',
    name: '바이럴 마케팅',
    icon: Megaphone,
    // (UX Spec 4.2) [cite: 831-832] What/Why/How
    title: '기획력이 반영된 바이럴 마케팅',
    description: '"영혼 없는 물량공세"가 아닌, 제품의 본질(Essence)을 탐구하여 기획력이 반영된 고품질 콘텐츠를 제작합니다. [cite: 277-281]',
    features: [
      '검색 상위 노출 (블로그, 카페, 지식인) [cite: 121-125, 230-234]',
      'SNS 채널 개설 및 브랜드 블로그 운영 [cite: 147-152]',
      '실시간 모니터링 및 피드백 반영 [cite: 161-168]',
    ],
    reference: '더 벤티 LOL 이벤트 (포트폴리오 참조) [cite: 497-505]',
  },
  {
    id: 'pr',
    name: '언론홍보 / PR',
    icon: Newspaper,
    title: '가장 신뢰도 높은 언론홍보',
    description: "소비자가 가장 신뢰하는 정보인 '뉴스'를 통해, 100개 이상의 언론사 네트워크로 기업과 브랜드의 공신력을 강화합니다.",
    features: [
      '기획 기사(Feature Story) 작성 및 배포 [cite: 719-725]',
      '애드버토리얼(Advertorial) / 보도자료 배포 [cite: 719-725]',
      '메이저 3대 일간지 포함 100여 곳 네트워크 [cite: 719-725]',
    ],
    reference: '이데일리 K바이오 행사 (포트폴리오 참조) [cite: 459-467]',
  },
  {
    id: 'crisis',
    name: '위기관리 대응',
    icon: ShieldHalf,
    title: '신속하고 체계적인 위기관리',
    description: '인터넷상의 부정 의견, 악성 댓글 확산을 방지하고 잘못된 정보를 바로잡아 브랜드 이미지를 보호합니다. [cite: 981-987, 1024-1033]',
    features: [
      '실시간 모니터링 시스템 (자동+수동) [cite: 981-987]',
      '부정 콘텐츠 댓글 밀어내기 및 여론 대응 [cite: 1024-1033]',
      '대응 콘텐츠(기사, 블로그) 기획 및 상위 노출 [cite: 981-987, 999-1006]',
    ],
    reference: '이유식 성분 이슈 대응 (포트폴리오 참조) [cite: 1002-1011]',
  },
  {
    id: 'influencer',
    name: '인플루언서',
    icon: BotMessageSquare,
    title: '강력한 영향력, 체험단 마케팅',
    description: '파워블로그, 유튜브 크리에이터, 맘카페 침투 [cite: 133-138, 171-177] 등 1,000명 이상의 전문가 네트워크 [cite: 144-145]를 통해 강력한 입소문을 생성합니다.',
    features: [
      '카페 "트루리뷰" 체험단 자체 운영 [cite: 169-173]',
      '맘카페 핫딜 전문 침투 작업 [cite: 177-182]',
      `유튜브 "영상 리뷰 체험단" (구독자 2만+ '마케팅길라잡이' 채널 노하우)`,
    ],
    reference: '제주신화월드 (포트폴리오 참조) [cite: 597-603]',
  },
  // TODO: (Story 2.1) 나머지 서비스(네이버 실행 마케팅, 이벤트/경품 등)도 이 구조로 추가합니다.
];

// (가상) 첫 번째 탭을 기본으로 선택
const selectedService = services[0]; 

export default function ServicesPage() {
  return (
    <>
      {/* 1. 페이지 헤더 */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            전문 서비스
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            (주)마케팅파크는 "무엇을" 잘하는가?
            <br />
            바이럴 마케팅부터 위기관리까지, 기획력이 반영된 종합 솔루션을 만나보세요.
          </p>
        </div>
      </section>

      {/* 2. (UX Spec 4.2) [cite: 831-832] 서비스 탭 및 상세 내용 */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* 2.1 탭 메뉴 (Scollable on Mobile) */}
          <div className="mb-12 border-b border-gray-200">
            <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
              {services.map((tab) => (
                <a
                  key={tab.name}
                  href={`#${tab.id}`} // (MVP에서는 탭 이동 대신 #태그 사용 또는 단일 페이지만 표시)
                  className={
                    tab.id === selectedService.id
                      ? 'border-lime-600 text-lime-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                  }
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>

          {/* 2.2 선택된 탭 상세 내용 (MVP: 첫 번째 서비스만 우선 표시) */}
          {/* (Post-MVP: 탭 클릭 시 동적 변경 기능 추가) */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* 왼쪽: 설명 */}
            <div>
              <span className="inline-flex items-center rounded-full bg-lime-100 px-3 py-1 text-sm font-medium text-lime-700">
                {selectedService.name}
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {selectedService.title}
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                {selectedService.description}
              </p>
              <ul className="mt-8 space-y-3">
                {selectedService.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-lime-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                    </div>
                    <span className="ml-3 text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 오른쪽: 이미지 또는 관련 레퍼런스 */}
            <div className="flex items-center justify-center rounded-lg bg-gray-50 p-8 shadow-sm border border-gray-100">
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-500">관련 포트폴리오 (예시)</p>
                <p className="mt-2 text-xl font-bold text-gray-900">
                  {selectedService.reference}
                </p>
                <Link href="/portfolio" className="mt-4 inline-block text-sm font-semibold text-lime-600 hover:text-lime-700">
                  포트폴리오 더보기 &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. (Story 2.1 AC.4)  최종 행동 유도 (CTA) */}
      <section className="bg-white py-16 sm:py-24 border-t">
        <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            모든 비즈니스는 저마다의 다른 고민을 가지고 있습니다.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            (주)마케팅파크의 전문가는 귀사의 니즈를 직접 듣고 현실적인 해답을 제안합니다.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="tel:[대표님-전화번호-입력]" // TODO: 실제 전화번호로 변경
              className="w-full rounded-md border border-lime-600 px-8 py-3 text-base font-medium text-lime-700 shadow-sm hover:bg-lime-50 sm:w-auto"
            >
              대표 직통 상담: [010-XXXX-XXXX]
            </Link>
            <Link
              href="/contact"
              className="w-full rounded-md bg-lime-600 px-8 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-lime-700 sm:w-auto"
            >
              방문 상담 신청 (간편 폼)
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
