// Phase 5D: 블로그 상세 페이지

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { getPostBySlug, getAllPosts, type BlogPost } from '../_data/posts';

// 카테고리 색상 매핑
const categoryColors: Record<BlogPost['category'], { bg: string; text: string; border: string }> = {
  '마케팅 팁': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  '성공 사례': { bg: 'bg-lime-50', text: 'text-lime-700', border: 'border-lime-200' },
  '업계 소식': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
};

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: '포스트를 찾을 수 없습니다',
    };
  }

  return {
    title: `${post.title} | 블로그`,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

// Static params for build
export function generateStaticParams() {
  const allPosts = getAllPosts();
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const colors = categoryColors[post.category];

  return (
    <>
      {/* 포스트 헤더 */}
      <section className="bg-gray-50 py-12 sm:py-16 border-b">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* 뒤로 가기 링크 */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-lime-700 hover:text-lime-800 mb-6"
          >
            <ChevronLeft size={16} />
            <span className="text-sm font-medium">블로그 목록으로</span>
          </Link>

          {/* 카테고리 배지 */}
          <div className="mb-4">
            <span
              className={`inline-flex items-center gap-1 rounded-full border ${colors.border} ${colors.bg} px-3 py-1 text-xs font-medium ${colors.text}`}
            >
              <Tag size={12} />
              {post.category}
            </span>
          </div>

          {/* 제목 */}
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            {post.title}
          </h1>

          {/* 설명 */}
          <p className="text-lg text-gray-600 mb-6">{post.description}</p>

          {/* 메타 정보 */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{post.readTime} 읽기</span>
            </div>
            <div className="flex items-center gap-1">
              <span>작성자: {post.author}</span>
            </div>
          </div>

          {/* 태그 */}
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-md bg-white border border-gray-200 px-3 py-1 text-sm text-gray-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 포스트 본문 */}
      <article className="py-12 sm:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none">
            {/* Markdown 콘텐츠 (현재는 HTML로 직접 렌더링) */}
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split('\n')
                  .map((line) => {
                    // 간단한 마크다운 변환 (헤딩, 리스트)
                    if (line.startsWith('# ')) {
                      return `<h1>${line.slice(2)}</h1>`;
                    } else if (line.startsWith('## ')) {
                      return `<h2>${line.slice(3)}</h2>`;
                    } else if (line.startsWith('### ')) {
                      return `<h3>${line.slice(4)}</h3>`;
                    } else if (line.startsWith('- ')) {
                      return `<li>${line.slice(2)}</li>`;
                    } else if (line.startsWith('**') && line.endsWith('**')) {
                      return `<strong>${line.slice(2, -2)}</strong>`;
                    } else if (line.trim() === '') {
                      return '<br />';
                    } else {
                      return `<p>${line}</p>`;
                    }
                  })
                  .join(''),
              }}
            />
          </div>

          {/* 공유 버튼 (향후 확장) */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">공유하기:</span>
              <div className="flex gap-3">
                <button className="rounded-full bg-gray-100 p-2 hover:bg-gray-200 transition-colors">
                  <span className="text-sm">Facebook</span>
                </button>
                <button className="rounded-full bg-gray-100 p-2 hover:bg-gray-200 transition-colors">
                  <span className="text-sm">Twitter</span>
                </button>
                <button className="rounded-full bg-gray-100 p-2 hover:bg-gray-200 transition-colors">
                  <span className="text-sm">LinkedIn</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* 이전/다음 포스트 네비게이션 */}
      {(prevPost || nextPost) && (
        <section className="bg-gray-50 py-12 border-t">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* 이전 포스트 */}
              {prevPost && (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-6 hover:border-lime-600 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <ChevronLeft size={16} />
                    <span>이전 글</span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-lime-700 transition-colors">
                    {prevPost.title}
                  </h3>
                </Link>
              )}

              {/* 다음 포스트 */}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-6 hover:border-lime-600 hover:shadow-md transition-all md:items-end md:text-right"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>다음 글</span>
                    <ChevronRight size={16} />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-lime-700 transition-colors">
                    {nextPost.title}
                  </h3>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA (상담 신청) */}
      <section className="bg-gradient-to-r from-lime-600 to-lime-700 py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            귀사의 마케팅 전략, 함께 고민해드립니다
          </h2>
          <p className="text-lg text-lime-50 mb-8">
            200+ 프로젝트 경험을 바탕으로 검증된 전략을 제공합니다
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-md bg-white px-8 py-3 text-base font-medium text-lime-700 hover:bg-gray-100 transition-colors"
          >
            무료 상담 신청하기
          </Link>
        </div>
      </section>
    </>
  );
}
