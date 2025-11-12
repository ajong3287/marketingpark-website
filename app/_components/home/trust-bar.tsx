export const TrustBar = () => { // Changed to named export
  const clients = ['SAMSUNG', 'CJ', 'KIA MOTORS', '농심', '미래에셋증권', 'KB국민은행']; // TODO: 실제 로고 이미지로 교체
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-base font-semibold text-gray-600">(주)마케팅파크와 함께하는 주요 고객사</h3>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div key={client} className="flex items-center justify-center">
              <span className="text-lg font-semibold text-gray-400">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};