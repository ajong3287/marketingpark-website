// Phase 5D: 블로그/뉴스 섹션

import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, Tag, ChevronRight } from 'lucide-react';
import { getAllPosts, type BlogPost } from './_data/posts';

export const metadata: Metadata = {
  title: '블로그 | 마케팅파크',
  description: '마케팅 팁, 성공 사례, 업계 소식을 공유합니다. 바이럴 마케팅, SEO, 언론홍보 전략부터 최신 트렌드까지.',
  keywords: ['마케팅 블로그', '바이럴 마케팅 팁', 'SEO 가이드', '성공 사례', '업계 소식'],
  openGraph: {
    title: '블로그 | 마케팅파크',
    description: '마케팅 전문가의 인사이트와 성공 사례',
    url: '/blog',
  },
};

// 카테고리 색상 매핑
const categoryColors: Record<BlogPost['category'], { bg: string; text: string; border: string }> = {
  '마케팅 팁': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  '성공 사례': { bg: 'bg-lime-50', text: 'text-lime-700', border: 'border-lime-200' },
  '업계 소식': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
};

// 블로그 카드 컴포넌트
function BlogCard({ post }: { post: BlogPost }) {
  const colors = categoryColors[post.category];

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-lime-600"
    >
      {/* 카테고리 배지 */}
      <div className="mb-4 flex items-center gap-3">
        <span className={`inline-flex items-center gap-1 rounded-full border ${colors.border} ${colors.bg} px-3 py-1 text-xs font-medium ${colors.text}`}>
          <Tag size={12} />
          {post.category}
        </span>
      </div>

      {/* 제목 */}
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-lime-700 transition-colors mb-3">
        {post.title}
      </h3>

      {/* 설명 */}
      <p className="text-base text-gray-600 mb-4 line-clamp-2">
        {post.description}
      </p>

      {/* 메타 정보 */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{post.readTime} 읽기</span>
        </div>
        <div className="flex items-center gap-1">
          <span>by {post.author}</span>
        </div>
      </div>

      {/* 태그 */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="inline-block rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* 더 읽기 링크 */}
      <div className="flex items-center gap-1 text-lime-700 font-medium group-hover:gap-2 transition-all">
        <span>더 읽기</span>
        <ChevronRight size={16} />
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const allPosts = getAllPosts();
  const categories: BlogPost['category'][] = ['마케팅 팁', '성공 사례', '업계 소식'];

  return (
    <>
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-r from-lime-600 to-lime-700 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            블로그
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-lime-50">
            마케팅 전문가의 인사이트와 검증된 성공 사례를 공유합니다
          </p>
        </div>
      </section>

      {/* 카테고리 필터 (향후 확장) */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-gray-700">카테고리:</span>
            <button className="rounded-full bg-lime-600 px-4 py-2 text-sm font-medium text-white">
              전체 ({allPosts.length})
            </button>
            {categories.map((category) => {
              const count = allPosts.filter((p) => p.category === category).length;
              const colors = categoryColors[category];
              return (
                <button
                  key={category}
                  className={`rounded-full border ${colors.border} ${colors.bg} px-4 py-2 text-sm font-medium ${colors.text} hover:opacity-80 transition-opacity`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 블로그 포스트 그리드 */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 최신 포스트 (Featured) */}
          {allPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">최신 글</h2>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <BlogCard post={allPosts[0]} />
                {allPosts[1] && <BlogCard post={allPosts[1]} />}
              </div>
            </div>
          )}

          {/* 전체 포스트 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">모든 글</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {allPosts.slice(2).map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>

          {/* 빈 상태 (포스트 없을 경우) */}
          {allPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-gray-600">아직 작성된 글이 없습니다.</p>
              <p className="text-sm text-gray-500 mt-2">곧 유익한 콘텐츠로 찾아뵙겠습니다!</p>
            </div>
          )}
        </div>
      </section>

      {/* 뉴스레터 구독 (향후 확장) */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            마케팅 인사이트를 이메일로 받아보세요
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            최신 마케팅 팁과 성공 사례를 매주 보내드립니다
          </p>
          <form className="flex flex-col gap-4 sm:flex-row sm:gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="이메일 주소 입력"
              className="flex-1 rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-lime-500"
            />
            <button
              type="submit"
              className="rounded-md bg-lime-600 px-6 py-3 text-base font-medium text-white hover:bg-lime-700 transition-colors"
            >
              구독하기
            </button>
          </form>
          <p className="mt-4 text-xs text-gray-400">
            * 구독 시 개인정보 처리방침에 동의하는 것으로 간주됩니다.
          </p>
        </div>
      </section>
    </>
  );
}
