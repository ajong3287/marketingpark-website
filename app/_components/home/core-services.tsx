import Link from 'next/link';
import { Megaphone, ShieldHalf, BotMessageSquare, MicVocal } from 'lucide-react';
export const CoreServices = () => ( // Changed to named export
  <section className="bg-gray-50 py-16 sm:py-24">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">마케팅파크는 무엇을 잘하는가?</h2>
        <p className="mt-4 text-lg text-gray-600">단순 홍보를 넘어, 종합 컨설팅 방식으로 성공적인 캠페인을 만듭니다.</p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div key={service.name} className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-600 text-white"><service.icon size={24} /></div>
            <h3 className="mt-5 text-xl font-semibold text-gray-900">{service.name}</h3>
            <p className="mt-2 text-base text-gray-600">{service.description}</p>
            <Link href={service.href} className="mt-4 inline-block text-sm font-semibold text-lime-600 hover:text-lime-700">자세히 보기 &rarr;</Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const services = [ // Moved services array inside the component or outside if it's a constant
  { name: '바이럴 마케팅', description: '기획력이 반영된 콘텐츠로 잠재 고객의 긍정 인식을 확산시킵니다.', href: '/services', icon: Megaphone },
  { name: '언론홍보 / PR', description: '100개 이상 언론사 네트워크를 통해 가장 신뢰도 높은 방식으로 홍보합니다.', href: '/services', icon: MicVocal },
  { name: '위기관리 대응', description: '부정적 여론 및 악성 댓글 확산을 방지하고 신속하게 대응합니다.', href: '/services', icon: ShieldHalf },
  { name: '인플루언서 마케팅', description: '파워블로그, 유튜브, 맘카페 등 강력한 영향력으로 입소문을 만듭니다.', href: '/services', icon: BotMessageSquare },
];