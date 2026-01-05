import Link from 'next/link';

export const FinalCta = () => (
  <section className="trust-gradient py-16 sm:py-24">
    <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      <h2
        className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        style={{ fontFamily: 'var(--font-headline)' }}
      >
        온라인 마케팅, 지금 시작하세요
      </h2>
      <p
        className="mt-4 text-lg text-white/90"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        모든 비즈니스는 저마다의 고민을 가지고 있습니다.<br />
        '마케팅파크'의 전문가는 귀사의 니즈를 직접 듣고 현실적인 해답을 제안합니다.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          href="tel:010-5407-3287"
          className="w-full rounded-md border border-white px-8 py-3 text-base font-medium text-white shadow-lg hover:bg-white/10 transition-all sm:w-auto"
          style={{ fontFamily: 'var(--font-subheading)' }}
        >
          대표 직통 상담: 010-5407-3287
        </Link>
        <Link
          href="/contact"
          className="w-full rounded-md bg-white px-8 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all sm:w-auto"
          style={{
            fontFamily: 'var(--font-subheading)',
            color: 'var(--mp-dark)',
          }}
        >
          무료 상담 신청
        </Link>
      </div>
    </div>
  </section>
);
