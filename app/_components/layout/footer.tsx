// app/_components/layout/footer.tsx
// [엘리나이]
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 회사 정보 */}
        <div>
          <h3 className="text-lg font-bold mb-4">마케팅파크</h3>
          <p className="text-gray-400 text-sm">
            주소: 서울시 은평구 통일로53길 9-21 (임시)
          </p>
          <p className="text-gray-400 text-sm">
            연락처: 02-1234-5678 (임시)
          </p>
          <p className="text-gray-400 text-sm">
            사업자등록번호: 123-45-67890 (임시)
          </p>
        </div>

        {/* 내비게이션 링크 */}
        <div>
          <h3 className="text-lg font-bold mb-4">바로가기</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white text-sm">
                회사 소개
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-400 hover:text-white text-sm">
                서비스 소개
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-gray-400 hover:text-white text-sm">
                포트폴리오
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white text-sm">
                상담 신청
              </Link>
            </li>
          </ul>
        </div>

        {/* 외부 채널 링크 */}
        <div>
          <h3 className="text-lg font-bold mb-4">소셜 미디어</h3>
          <div className="flex space-x-4">
            <a
              href={process.env.NEXT_PUBLIC_BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm"
            >
              블로그
            </a>
            <a
              href={process.env.NEXT_PUBLIC_YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-600 text-sm font-bold"
            >
              <span className="mr-1">▶</span> 유튜브
            </a>
          </div>
          <p className="text-gray-500 text-xs mt-4">
            &copy; {new Date().getFullYear()} 마케팅파크. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
