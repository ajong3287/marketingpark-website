import Link from 'next/link';
export const FinalCta = () => ( // Changed to named export
  <section className="bg-white py-16 sm:py-24">
    <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">모든 비즈니스는 저마다의 고민을 가지고 있습니다.</h2>
      <p className="mt-4 text-lg text-gray-600">'마케팅파크'의 전문가는 귀사의 니즈를 직접 듣고 현실적인 해답을 제안합니다.</p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link href="tel:010-5407-3287" className="w-full rounded-md border border-lime-600 px-8 py-3 text-base font-medium text-lime-700 shadow-sm hover:bg-lime-50 sm:w-auto">
          대표 직통 상담: 010-5407-3287
        </Link>
        <Link href="/contact" className="w-full rounded-md bg-lime-600 px-8 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-lime-700 sm:w-auto">
          방문 상담 신청 (간편 폼)
        </Link>
      </div>
    </div>
  </section>
);