// (Story 1.2) 공통 푸터 컴포넌트
// [엘리나이]
import Link from 'next/link';
import { Youtube, Rss } from 'lucide-react';
    
export const Footer = () => { // Changed to named export
  const blogUrl = process.env.NEXT_PUBLIC_BLOG_URL || '#';
  const youtubeUrl = process.env.NEXT_PUBLIC_YOUTUBE_URL || '#';

  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-lime-600">
              MarketingPark
            </Link>
            <p className="mt-4 max-w-xs text-sm text-gray-500">
              No. 1 Creative Online Marketing. <br />
              제품과 브랜드에 대한 깊은 이해와 통찰력으로 최상의 결과를 제안합니다.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href={blogUrl} target="_blank" rel="noopener noreferrer" title="마케팅파크 공식 블로그" className="text-gray-500 hover:text-lime-600">
                <Rss size={24} />
              </Link>
              <Link href={youtubeUrl} target="_blank" rel="noopener noreferrer" title="마케팅길잡이 (구독자 2만명)" className="text-gray-500 hover:text-lime-600">
                <Youtube size={24} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">사이트맵</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-lime-600">회사 소개</Link></li>
              <li><Link href="/services" className="text-sm text-gray-600 hover:text-lime-600">서비스 소개</Link></li>
              <li><Link href="/portfolio" className="text-sm text-gray-600 hover:text-lime-600">포트폴리오</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-lime-600">상담 신청</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>(주)마케팅파크 (Since 2014)</li>
              <li>대표: 서종원</li>
              <li>주소: 서울시 은평구 통일로53길 9-21 B101호</li>
              <li>대표 연락처: 010-5407-3287</li>
              <li>사업자등록번호: [TODO: 사업자등록번호]</li>
              <li>이메일: itemfree @marketingpark.co.kr</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} (주)마케팅파크. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};