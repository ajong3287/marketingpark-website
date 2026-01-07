import Image from 'next/image';

export const TrustBar = () => {
  const clients = [
    { name: 'Samsung', logo: '/images/clients/samsung.svg', alt: '삼성' },
    { name: 'CJ', logo: '/images/clients/cj.svg', alt: 'CJ' },
    { name: 'KIA', logo: '/images/clients/kia.svg', alt: '기아' },
    { name: 'Nongshim', logo: '/images/clients/nongshim.svg', alt: '농심' },
    { name: 'Mirae Asset', logo: '/images/clients/miraeasset.svg', alt: '미래에셋증권' },
    { name: 'KB', logo: '/images/clients/kb.svg', alt: 'KB국민은행' },
  ];

  return (
    <section className="bg-white dark:bg-gray-800 py-12 sm:py-16" aria-labelledby="clients-heading">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="clients-heading" className="text-center text-base font-semibold text-gray-600 dark:text-gray-300">(주)마케팅파크와 함께하는 주요 고객사</h2>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
              <Image
                src={client.logo}
                alt={client.alt}
                width={100}
                height={40}
                className="h-auto w-20 sm:w-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};