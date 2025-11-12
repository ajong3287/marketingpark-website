import Link from 'next/link';
export const HeroSection = () => ( // Changed to named export
  <section className="relative h-[60vh] min-h-[400px] w-full bg-lime-600 text-white">
    {/* TODO: 배경 이미지 */}
    <div className="container mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">No. 1 Creative Online Marketing</h1>
      <p className="mt-6 max-w-2xl text-lg text-lime-100">제품과 브랜드에 대한 깊은 이해와 통찰력, "영혼 없는 물량공세식 단순 홍보"가 아닌 기획력이 반영된 콘텐츠로 최상의 결과를 제안합니다.</p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/services" className="rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium text-lime-700 shadow-sm hover:bg-gray-50">서비스 자세히 보기</Link>
        <Link href="/contact" className="rounded-md border border-lime-200 px-6 py-3 text-base font-medium text-white hover:bg-white/10">방문 상담 신청</Link>
      </div>
    </div>
  </section>
);