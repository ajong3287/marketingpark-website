// app/_components/layout/header.tsx
// [엘리나이]
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-800">
        <Link href="/">
          마케팅파크
        </Link>
      </div>
      <nav className="flex space-x-6">
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          메인
        </Link>
        <Link href="/about" className="text-gray-600 hover:text-gray-900">
          회사 소개
        </Link>
        <Link href="/services" className="text-gray-600 hover:text-gray-900">
          서비스 소개
        </Link>
        <Link href="/portfolio" className="text-gray-600 hover:text-gray-900">
          포트폴리오
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-gray-900">
          상담 신청
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <a
          href={process.env.NEXT_PUBLIC_BLOG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 flex items-center"
        >
          블로그
        </a>
        <a
          href={process.env.NEXT_PUBLIC_YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-800 flex items-center font-bold"
        >
          {/* 유튜브 아이콘 또는 텍스트 */}
          <span className="mr-1">▶</span> 유튜브 (구독자 2만명)
        </a>
      </div>
    </header>
  );
}
