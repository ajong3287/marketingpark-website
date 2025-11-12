// app/_components/home/final-cta.tsx
// [엘리나이]
import Link from 'next/link';

export default function FinalCta() {
  return (
    <section className="bg-gray-800 text-white py-16 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          성공적인 마케팅, 마케팅파크와 함께하세요
        </h2>
        <p className="text-lg md:text-xl mb-8">
          귀사의 비즈니스에 최적화된 맞춤형 전략을 지금 바로 상담하세요.
        </p>
        <Link href="/contact" className="bg-lime-500 text-gray-900 hover:bg-lime-400 text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          무료 상담 신청
        </Link>
      </div>
    </section>
  );
}
