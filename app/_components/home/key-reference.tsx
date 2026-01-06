'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Youtube } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const clients = [
  { name: '삼성', logo: '/images/clients/samsung.svg', industry: '전자' },
  { name: 'CJ', logo: '/images/clients/cj.svg', industry: '엔터테인먼트' },
  { name: '기아', logo: '/images/clients/kia.svg', industry: '자동차' },
  { name: '농심', logo: '/images/clients/nongshim.svg', industry: '식품' },
  { name: 'LG', logo: '/images/clients/lg.svg', industry: '전자' },
  { name: '롯데', logo: '/images/clients/lotte.svg', industry: '유통' },
];

export const KeyReference = () => {
  const prefersReducedMotion = useReducedMotion();
  const youtubeUrl = process.env.NEXT_PUBLIC_YOUTUBE_URL || '#';

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* YouTube 채널 강조 섹션 */}
        <div className="rounded-3xl p-8 sm:p-12" style={{ background: 'linear-gradient(to right, var(--mp-dark), var(--mp-primary))' }}>
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
            <div className="flex-shrink-0">
              <Youtube size={80} className="text-white" />
            </div>
            <div className="md:ml-8">
              <h2
                className="text-base font-semibold uppercase tracking-wide text-white/80"
                style={{ fontFamily: 'var(--font-subheading)' }}
              >
                핵심 홍보 레퍼런스
              </h2>
              <p
                className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                style={{ fontFamily: 'var(--font-headline)' }}
              >
                구독자 2만명+ '마케팅길라잡이'
              </p>
              <p className="mt-4 max-w-2xl text-lg text-white/90">
                대표가 직접 운영하는 유튜브 채널은 마케팅파크의 강력한 홍보 자산이자,<br />
                고객과의 신뢰를 구축하는 소통 창구입니다.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all"
                  style={{
                    fontFamily: 'var(--font-subheading)',
                    color: 'var(--mp-dark)',
                  }}
                >
                  채널 방문
                </Link>
                <Link
                  href={process.env.NEXT_PUBLIC_BLOG_URL || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-white px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-all"
                  style={{ fontFamily: 'var(--font-subheading)' }}
                >
                  블로그 보기
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 주요 고객사 섹션 */}
        <div className="mt-16 text-center">
          <h3
            className="text-2xl font-bold text-gray-900 sm:text-3xl"
            style={{ fontFamily: 'var(--font-headline)' }}
          >
            주요 고객사
          </h3>
          <p className="mt-2 text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
            대형 기업부터 중소기업까지, 다양한 업종의 성공적인 프로젝트 경험
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <motion.div
              key={client.name}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-white p-6 shadow-lg text-center border-2 border-gray-100 hover:border-lime-400"
            >
              <div className="mb-4 flex items-center justify-center h-16">
                <Image
                  src={client.logo}
                  alt={`${client.name} 로고`}
                  width={120}
                  height={60}
                  className="h-auto w-full max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                  priority={false}
                />
              </div>
              <h4 className="font-bold text-gray-900" style={{ fontFamily: 'var(--font-subheading)' }}>
                {client.name}
              </h4>
              <p className="text-xs text-gray-500 mt-1">{client.industry}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
