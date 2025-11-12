// app/_components/home/hero-section.tsx
// [엘리나이]
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 md:py-32 flex items-center justify-center text-center">
      {/* Background Image/Overlay - Placeholder for now */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          No. 1 Creative Online Marketing
        </h1>
        <p className="text-lg md:text-xl mb-8">
          제품에 대한 깊은 이해, 브랜드에 대한 통찰력으로 <br className="md:hidden"/>성공적인 온라인 마케팅을 이끌어갑니다.
        </p>
        <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          상담 신청 바로가기
        </Link>
      </div>
    </section>
  );
}
