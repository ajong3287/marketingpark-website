// app/_components/home/core-services.tsx
// [엘리나이]
import Link from 'next/link';

export default function CoreServices() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          마케팅파크의 핵심 서비스
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1: 바이럴 마케팅 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">바이럴 마케팅</h3>
            <p className="text-gray-700 mb-4">
              온라인 입소문을 통해 브랜드 인지도를 높이고, 잠재 고객의 구매를 유도합니다.
            </p>
            <Link href="/services" className="text-blue-600 hover:underline font-medium">
              자세히 보기 &rarr;
            </Link>
          </div>

          {/* Service 2: 언론홍보/PR */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-green-600 mb-4">언론홍보/PR</h3>
            <p className="text-gray-700 mb-4">
              신뢰도 높은 언론 매체를 통해 기업의 긍정적인 이미지를 구축하고 메시지를 확산합니다.
            </p>
            <Link href="/services" className="text-green-600 hover:underline font-medium">
              자세히 보기 &rarr;
            </Link>
          </div>

          {/* Service 3: 위기관리 대응 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-red-600 mb-4">위기관리 대응</h3>
            <p className="text-gray-700 mb-4">
              부정적인 이슈 발생 시 신속하고 체계적인 대응으로 기업의 명성을 보호합니다.
            </p>
            <Link href="/services" className="text-red-600 hover:underline font-medium">
              자세히 보기 &rarr;
            </Link>
          </div>
        </div>
        <div className="mt-12">
          <Link href="/services" className="bg-blue-600 text-white hover:bg-blue-700 text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            모든 서비스 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
