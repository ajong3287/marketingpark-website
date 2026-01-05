// (Story 3.1) 상담 신청 페이지 (UI)

import type { Metadata } from 'next';
import { Phone, Mail, Send } from 'lucide-react';
import { ContactForm } from '../_components/contact/contact-form'; // (다음 단계에서 생성)

// (Story 1.1 AC.3)  SEO 설정
export const metadata: Metadata = {
  title: '상담 신청',
  description: '대표 직통 상담 010-5407-3287, 이메일, 간편 폼을 통해 (주)마케팅파크의 전문적인 방문 상담을 신청하세요. 귀사의 니즈에 맞는 현실적인 해답을 제안합니다.',
  keywords: ['상담 신청', '무료 상담', '방문 상담', '대표 직통', '마케팅 컨설팅'],
  openGraph: {
    title: '상담 신청 | 마케팅파크',
    description: '대표 직통 상담 010-5407-3287. 전문적인 마케팅 컨설팅',
    url: '/contact',
  },
};

export default function ContactPage() {
  const directPhone = '010-5407-3287';
  const directEmail = process.env.ADMIN_EMAIL_ADDRESS || 'ajong3287@gmail.com';

  return (
    <>
      {/* 1. 페이지 헤더 (PRD AC.1)  */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            상담 신청
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            (Story 2.1 AC.4) 
            "모든 비즈니스는 저마다의 다른 고민을 가지고 있습니다.
            <br />
            '마케팅파크'의 전문가는 귀사의 니즈를 직접 듣고 현실적인 해답을 제안합니다."
          </p>
        </div>
      </section>

      {/* 2. (UX Spec 4.4) [cite: 831-832] 연락 허브 (전화 우선) */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-8">
            
            {/* 2.1 연락 옵션 1 & 2 (전화/이메일) */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                가장 빠른 방법
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                지금 바로 연락주시면, 대표 전문가가 직접 상담합니다.
              </p>
              
              {/* 옵션 1: 대표 직통 상담 (Primary) */}
              <div className="mt-8 rounded-lg border border-lime-600 bg-lime-50 p-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-8 w-8 flex-shrink-0 text-lime-700" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">대표 직통 상담</h3>
                    <a 
                      href={`tel:${directPhone}`} 
                      className="text-2xl font-bold text-lime-700 hover:text-lime-800"
                    >
                      {directPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* 옵션 2: 이메일 문의 (Secondary) */}
              <div className="mt-6 rounded-lg border border-gray-200 p-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-8 w-8 flex-shrink-0 text-gray-500" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">이메일 문의</h3>
                    <a 
                      href={`mailto:${directEmail}`} 
                      className="text-lg font-medium text-gray-600 hover:text-lime-700"
                    >
                      {directEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 2.2 연락 옵션 3 (간편 폼) (PRD AC.2)  */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                간편 상담 신청 (폼)
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                통화가 어려우신 경우, 아래 내용을 남겨주시면 신속하게 연락드리겠습니다.
              </p>
              
              {/* 폼 컴포넌트 호출 */}
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
