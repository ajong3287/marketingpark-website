// app/_components/home/trust-bar.tsx
// [엘리나이]
import Image from 'next/image';

const clientLogos = [
  { src: '/images/clients/samsung.png', alt: 'Samsung Logo' },
  { src: '/images/clients/cj.png', alt: 'CJ Logo' },
  { src: '/images/clients/kia.png', alt: 'KIA Logo' },
  { src: '/images/clients/nongshim.png', alt: 'Nongshim Logo' },
  { src: '/images/clients/miraeasset.png', alt: 'Mirae Asset Logo' },
  { src: '/images/clients/kb.png', alt: 'KB Kookmin Bank Logo' },
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold text-gray-600 mb-8">
          마케팅파크를 신뢰하는 파트너사
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
          {clientLogos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120} // Adjust width as needed
                height={60} // Adjust height as needed
                objectFit="contain"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
