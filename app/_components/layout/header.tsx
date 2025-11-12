// (Story 1.2) 공통 헤더 컴포넌트
// [엘리나이]
import Link from 'next/link';
import { Youtube, Rss } from 'lucide-react'; 

const navItems = [
  { name: '회사 소개', href: '/about' },
  { name: '서비스 소개', href: '/services' },
  { name: '포트폴리오', href: '/portfolio' },
];

export const Header = () => { // Changed to named export
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold text-lime-600">
          MarketingPark
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-gray-700 transition-colors hover:text-lime-600">
              {item.name}
            </Link>
          ))}
          <Link href={process.env.NEXT_PUBLIC_BLOG_URL || '#'} target="_blank" rel="noopener noreferrer" title="마케팅파크 공식 블로그" className="text-gray-500 hover:text-lime-600">
            <Rss size={20} />
          </Link>
          <Link href={process.env.NEXT_PUBLIC_YOUTUBE_URL || '#'} target="_blank" rel="noopener noreferrer" title="마케팅길잡이 (구독자 2만명)" className="flex items-center space-x-1 text-gray-500 hover:text-lime-600">
            <Youtube size={20} />
            <span className="text-xs font-semibold">(2만+)</span>
          </Link>
        </nav>
        <div className="hidden items-center space-x-4 md:flex">
          <Link href="tel:010-5407-3287" className="text-sm font-semibold text-gray-900 hover:text-lime-600">
            대표 직통 상담: 010-5407-3287
          </Link>
          <Link href="/contact" className="rounded-md bg-lime-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-lime-700">
            방문 상담 신청
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};