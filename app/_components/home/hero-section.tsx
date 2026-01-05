'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();

  const stats = [
    { label: '프로젝트', value: '200+' },
    { label: '고객사', value: '50+' },
    { label: '경험', value: '15년' },
  ];

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-white">
      {/* Grid 배경 패턴 */}
      <div className="absolute inset-0 grid-bg" />

      {/* Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blob 1 - Lime green */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'rgba(132, 204, 22, 0.1)' }}
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Blob 2 - Deep green */}
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'rgba(20, 83, 45, 0.1)' }}
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative container mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        {/* 헤드라인 */}
        <h1
          className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          style={{
            fontFamily: 'var(--font-headline)',
            background: 'linear-gradient(to right, var(--mp-dark), var(--mp-primary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.03em',
          }}
        >
          No. 1 Creative<br />Online Marketing
        </h1>

        {/* 서브헤드 */}
        <p
          className="mt-6 max-w-2xl text-lg text-gray-700"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          제품과 브랜드에 대한 깊은 이해와 통찰력,<br />
          "영혼 없는 물량공세식 단순 홍보"가 아닌<br />
          기획력이 반영된 콘텐츠로 최상의 결과를 제안합니다.
        </p>

        {/* 통계 (Staggered Entrance) */}
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 1 + idx * 0.1 }}
              className="text-center"
            >
              <div
                className="text-4xl font-bold"
                style={{
                  fontFamily: 'var(--font-headline)',
                  color: 'var(--mp-primary)',
                }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA 버튼 */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/services"
            className="rounded-md border border-transparent px-6 py-3 text-base font-medium text-white shadow-lg hover:shadow-xl transition-all"
            style={{
              fontFamily: 'var(--font-subheading)',
              background: 'linear-gradient(to right, var(--mp-dark), var(--mp-primary))',
            }}
          >
            서비스 자세히 보기
          </Link>
          <Link
            href="/contact"
            className="rounded-md border px-6 py-3 text-base font-medium hover:bg-gray-50 transition-all"
            style={{
              fontFamily: 'var(--font-subheading)',
              borderColor: 'var(--mp-primary)',
              color: 'var(--mp-dark)',
            }}
          >
            방문 상담 신청
          </Link>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown className="w-8 h-8" style={{ color: 'var(--mp-primary)' }} />
        </motion.div>
      </div>
    </section>
  );
};
