'use client';

import Link from 'next/link';
import { TrendingUp, Megaphone, Shield, Target } from 'lucide-react';

const services = [
  {
    name: '바이럴 마케팅',
    description: '기획력이 반영된 콘텐츠로 잠재 고객의 긍정 인식을 확산시킵니다.',
    href: '/services',
    icon: TrendingUp,
    gradient: 'from-lime-500 to-green-600',
    features: [
      '블로그 바이럴 (네이버, 티스토리)',
      '카페 마케팅 (맘카페, 동호회)',
      'SNS 확산 (인스타그램, 페이스북)',
    ],
  },
  {
    name: '언론홍보·PR',
    description: '100개 이상 언론사 네트워크를 통해 가장 신뢰도 높은 방식으로 홍보합니다.',
    href: '/services',
    icon: Megaphone,
    gradient: 'from-green-500 to-emerald-600',
    features: [
      '주요 언론사 보도자료 배포',
      '기사형 콘텐츠 제작',
      '브랜드 스토리텔링',
    ],
  },
  {
    name: '위기관리 대응',
    description: '부정적 여론 및 악성 댓글 확산을 방지하고 신속하게 대응합니다.',
    href: '/services',
    icon: Shield,
    gradient: 'from-emerald-500 to-teal-600',
    features: [
      '실시간 모니터링 시스템',
      '위기 대응 매뉴얼',
      '부정적 여론 관리',
    ],
  },
  {
    name: '네이버 실행 마케팅',
    description: '파워블로그, 유튜브, 맘카페 등 강력한 영향력으로 입소문을 만듭니다.',
    href: '/services',
    icon: Target,
    gradient: 'from-teal-500 to-cyan-600',
    features: [
      '네이버 검색 최적화 (SEO)',
      '파워블로그 협업',
      '지도/플레이스 등록',
    ],
  },
];

export const CoreServices = () => (
  <section className="relative py-16 sm:py-24 blob-bg">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          style={{ fontFamily: 'var(--font-headline)' }}
        >
          마케팅파크는 무엇을 잘하는가?
        </h2>
        <p
          className="mt-4 text-lg text-gray-600"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          단순 홍보를 넘어, 종합 컨설팅 방식으로 성공적인 캠페인을 만듭니다.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.name}
            className={`rounded-2xl bg-gradient-to-br ${service.gradient} p-6 shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-lime-400`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
              <service.icon size={24} />
            </div>
            <h3
              className="mt-5 text-xl font-semibold text-white"
              style={{ fontFamily: 'var(--font-subheading)' }}
            >
              {service.name}
            </h3>
            <p className="mt-2 text-base text-white/90">{service.description}</p>

            {/* 기능 리스트 */}
            <ul className="mt-4 space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm text-white/80">
                  <span className="mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={service.href}
              className="mt-6 inline-block text-sm font-semibold text-white hover:underline"
              style={{ fontFamily: 'var(--font-subheading)' }}
            >
              자세히 보기 &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);
