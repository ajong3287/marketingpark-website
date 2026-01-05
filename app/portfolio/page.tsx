// (Story 2.2) 포트폴리오 페이지

import type { Metadata } from 'next';
import Link from 'next/link';
import { Building, Megaphone, ShieldHalf, Newspaper, Users } from 'lucide-react'; // (아이콘 예시)

// (Story 1.1 AC.3)  SEO 설정
export const metadata: Metadata = {
  title: '포트폴리오',
  description: '삼성, CJ, 기아, 농심, 미래에셋증권 등 주요 고객사와 함께한 (주)마케팅파크의 언론홍보, 바이럴 마케팅, 위기관리 성공 사례를 확인하세요. 200+ 프로젝트 성공 레퍼런스.',
  keywords: ['포트폴리오', '성공 사례', '레퍼런스', '주요 고객사', 'SAMSUNG', 'CJ', '기아', '농심', '미래에셋증권'],
  openGraph: {
    title: '포트폴리오 | 마케팅파크',
    description: '삼성, CJ, 기아 등 주요 고객사 성공 사례. 200+ 프로젝트 레퍼런스',
    url: '/portfolio',
  },
};

// (Story 2.2 AC.1)  주요 고객사 로고 (UX Spec 4.3) [cite: 831-832]
// (PRD 및 회사 소개서 [cite: 459, 461-683] 기반)
// TODO: (public/images/clients/ 에 실제 로고 파일 필요)
const keyClients = [
  { name: 'SAMSUNG', logo: '/images/clients/placeholder.png' },
  { name: 'CJ', logo: '/images/clients/placeholder.png' },
  { name: 'KIA MOTORS', logo: '/images/clients/placeholder.png' },
  { name: '농심', logo: '/images/clients/placeholder.png' },
  { name: '미래에셋증권', logo: '/images/clients/placeholder.png' },
  { name: 'KB국민은행', logo: '/images/clients/placeholder.png' },
];

// (Story 2.2 AC.2)  성공 사례 갤러리 (UX Spec 4.3) [cite: 831-832]
// (PRD 및 회사 소개서 [cite: 459, 461-683, 497-505, 597-603] 기반)
const portfolioItems = [
  {
    title: '머니투데이 ETF투자왕 대회',
    category: '바이럴 마케팅',
    description: '블로그 침투 및 대학생/금융 커뮤니티 확산을 통한 이슈화 및 참여 증대.',
    icon: Megaphone,
    link: '#', // (Post-MVP: 상세 페이지 링크)
  },
  {
    title: '이데일리 K바이오 글로벌 행사',
    category: '언론홍보 / PR',
    description: '행사 관련 블로그 확산을 통한 메인 키워드 노출 유지 및 이슈화 극대화.',
    icon: Newspaper,
    link: '#',
  },
  {
    title: '더 벤티 LOL 신메뉴 이벤트',
    category: '커뮤니티 바이럴',
    description: '2030 LOL 유저 타겟, 대형 커뮤니티(DC, Ruliweb) 확산을 통한 이벤트 참여율 및 이슈 극대화.',
    icon: Users,
    link: '#',
  },
  {
    title: '제주신화월드 이벤트',
    category: '인플루언서 / 카페 제휴',
    description: '카페 제휴 및 인스타그램 마케팅을 통한 이벤트 기획 및 확산, 예약 및 문의 건수 증대.',
    icon: Building,
    link: '#',
  },
  // TODO: (Story 2.2) 나머지 주요 포트폴리오(예: 서울과기대, 뤼튼 등) [cite: 521-530, 539-547]도 이 구조로 추가합니다.
];

export default function PortfolioPage() {
  return (
    <>
      {/* 1. 페이지 헤더 */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                포트폴리오
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
                (주)마케팅파크는 삼성, CJ, 기아자동차 등 [cite: 459, 461-683] 국내외 유수 기업 및 공공기관의
                <br />
                수많은 프로모션을 성공적으로 이끌어왔습니다.
              </p>
            </div>
          </section>
    
          {/* 2. (Story 2.2 AC.1)  주요 고객사 로고 */}
          <section className="bg-white py-16">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                주요 고객사
              </h2>
              <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                {keyClients.map((client) => (
                  <div key={client.name} className="flex items-center justify-center grayscale transition hover:grayscale-0">
                    <span className="text-lg font-semibold text-gray-400">
                      {/* TODO: Image 태그로 교체 */}
                      {client.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
    
          {/* 3. (Story 2.2 AC.2)  성공 사례 갤러리 */}
          <section className="bg-gray-50 py-16 sm:py-24">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  주요 성공 사례
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  '구경'하시면서  마케팅파크의 전문성을 확인해 보세요.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {portfolioItems.map((item) => (
                  <div key={item.title} className="flex flex-col rounded-lg bg-white p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-600 text-white">
                        <item.icon size={24} />
                      </div>
                    </div>
                    <div className="mt-5 flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      <p className="mt-1 text-sm font-medium text-lime-700">{item.category}</p>
                      <p className="mt-3 text-base text-gray-600">{item.description}</p>
                    </div>
                    <div className="mt-6">
                      <Link href={item.link} className="text-sm font-semibold text-lime-600 hover:text-lime-700">
                        자세히 보기 (준비중) &rarr;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
    
          {/* 4. (Story 2.2 AC.5)  최종 행동 유도 (CTA) */}
          <section className="bg-white py-16 sm:py-24 border-t">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                귀사의 성공 사례를 만들 준비가 되었습니다.
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                (주)마케팅파크의 전문가는 귀사의 니즈를 직접 듣고 [cite: 2] 현실적인 해답을 제안합니다. 
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="tel:010-5407-3287"
                  className="w-full rounded-md border border-lime-600 px-8 py-3 text-base font-medium text-lime-700 shadow-sm hover:bg-lime-50 sm:w-auto"
                >
                  대표 직통 상담: 010-5407-3287
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
    