// app/_components/home/key-reference.tsx
// [엘리나이]
import Link from 'next/link';

export default function KeyReference() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          마케팅 인사이트, 지금 바로 확인하세요!
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          2만 명 이상의 구독자가 인정한 '마케팅길라잡이' 유튜브 채널에서 <br className="md:hidden"/>
          최신 마케팅 트렌드와 성공 전략을 만나보세요.
        </p>
        <Link
          href={process.env.NEXT_PUBLIC_YOUTUBE_URL || '#'} // Fallback to '#' if env var is not set
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-red-600 text-white hover:bg-red-700 text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          <span className="mr-2 text-2xl">▶</span> 유튜브 채널 바로가기
        </Link>
      </div>
    </section>
  );
}
