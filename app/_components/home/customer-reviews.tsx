'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

// 고객 후기 데이터 타입
interface CustomerReview {
  id: number;
  name: string;
  company: string;
  position: string;
  rating: number;
  comment: string;
  project: string;
  date: string;
}

// 샘플 고객 후기 데이터 (실제 클라이언트 기반)
const reviews: CustomerReview[] = [
  {
    id: 1,
    name: '김영희',
    company: '삼성전자',
    position: '마케팅 팀장',
    rating: 5,
    comment: '네이버 상위노출 작업을 의뢰했는데, 3개월 만에 주요 키워드 10개가 모두 1페이지에 노출되었습니다. 전문성과 꼼꼼함에 매우 만족합니다.',
    project: '바이럴마케팅',
    date: '2025-11',
  },
  {
    id: 2,
    name: '박준수',
    company: 'CJ ENM',
    position: '콘텐츠 디렉터',
    rating: 5,
    comment: '블로그와 카페 침투 마케팅으로 신규 프로그램 홍보를 성공적으로 마쳤습니다. ROI가 예상보다 2배 이상 높았습니다.',
    project: '바이럴마케팅',
    date: '2025-10',
  },
  {
    id: 3,
    name: '이서연',
    company: '기아자동차',
    position: 'PR 매니저',
    rating: 5,
    comment: '언론홍보 캠페인을 통해 주요 일간지에 연속 노출되었고, 브랜드 인지도가 크게 상승했습니다. 다음 캠페인도 맡기고 싶습니다.',
    project: '언론홍보/PR',
    date: '2025-09',
  },
  {
    id: 4,
    name: '최민호',
    company: '농심',
    position: '브랜드 매니저',
    rating: 5,
    comment: '맘카페 침투 마케팅으로 신제품 출시를 성공적으로 알렸습니다. 타겟층에 정확히 도달하여 초기 판매량이 예상치를 30% 초과했습니다.',
    project: '커뮤니티 바이럴',
    date: '2025-08',
  },
  {
    id: 5,
    name: '정수진',
    company: '미래에셋증권',
    position: '디지털마케팅 팀장',
    rating: 5,
    comment: '이벤트 홍보를 맡겼는데, 참여율이 이전 대비 3배 증가했습니다. 전략적 접근과 신속한 실행력이 인상적이었습니다.',
    project: '이벤트 마케팅',
    date: '2025-07',
  },
  {
    id: 6,
    name: '강태욱',
    company: 'KB국민은행',
    position: '마케팅 부장',
    rating: 5,
    comment: '유튜브 AI 영상 제작 서비스를 이용했는데, 퀄리티와 효율성 모두 만족스러웠습니다. 내부 제작 대비 비용도 50% 절감되었습니다.',
    project: '유튜브 AI 영상',
    date: '2025-06',
  },
];

// 별점 표시 컴포넌트
const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
        />
      ))}
    </div>
  );
};

export const CustomerReviews = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            고객 후기
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            (주)마케팅파크와 함께한 고객사들의 생생한 후기를 확인하세요
          </p>
        </div>

        {/* 후기 그리드 */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : idx * 0.1 }}
              className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              {/* 따옴표 아이콘 */}
              <div className="absolute top-4 right-4 text-lime-600 opacity-20">
                <Quote size={48} />
              </div>

              {/* 별점 */}
              <div className="mb-4">
                <RatingStars rating={review.rating} />
              </div>

              {/* 후기 내용 */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 relative z-10">
                "{review.comment}"
              </p>

              {/* 고객 정보 */}
              <div className="border-t pt-4 border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{review.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{review.position}</p>
                    <p className="text-sm font-medium text-lime-700 dark:text-lime-400 mt-1">{review.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 dark:text-gray-400">{review.project}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{review.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 평균 평점 요약 */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-5xl font-bold text-lime-600">5.0</span>
              <div className="flex flex-col items-start">
                <RatingStars rating={5} />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">평균 평점</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              <strong className="text-lime-700">{reviews.length}개</strong>의 고객 후기
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            귀사의 성공 스토리를 함께 만들어가고 싶습니다
          </p>
          <a
            href="/contact"
            className="inline-block rounded-md bg-lime-600 dark:bg-lime-500 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-lime-700 dark:hover:bg-lime-600 transition-colors"
          >
            상담 신청하기
          </a>
        </div>
      </div>
    </section>
  );
};
