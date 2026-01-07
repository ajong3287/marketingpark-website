// Phase 5C: 다단계 상담 신청 폼
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, ChevronRight, MessageCircle } from 'lucide-react';

// 서비스 타입 정의
const services = [
  { id: 'viral', name: '바이럴마케팅', description: '네이버 블로그/카페 상위노출' },
  { id: 'pr', name: '언론홍보/PR', description: '주요 언론사 보도자료 배포' },
  { id: 'crisis', name: '위기관리', description: '부정적 여론 대응 및 관리' },
  { id: 'influencer', name: '인플루언서', description: '인플루언서 마케팅 기획/실행' },
  { id: 'youtube', name: '유튜브 AI 영상', description: 'AI 기반 유튜브 영상 제작' },
  { id: 'other', name: '기타', description: '상담을 통해 맞춤 제안' },
] as const;

type ServiceId = typeof services[number]['id'];

// Zod 스키마
const multiStepSchema = z.object({
  // Step 1: 서비스 선택
  service: z.enum(['viral', 'pr', 'crisis', 'influencer', 'youtube', 'other'], {
    message: '상담 받고 싶은 서비스를 선택해 주세요.',
  }),

  // Step 2: 기본 정보
  companyName: z.string().min(1, '회사명을 입력해 주세요.'),
  contactPerson: z.string().min(1, '담당자 성함을 입력해 주세요.'),
  phone: z.string().min(10, '올바른 연락처를 입력해 주세요.').regex(/^[0-9-]+$/, '숫자와 하이픈만 입력 가능합니다.'),
  email: z.string().email('올바른 이메일 주소를 입력해 주세요.'),
  message: z.string().min(10, '문의 내용을 10자 이상 입력해 주세요.').max(1000, '문의 내용은 1000자 이하로 입력해 주세요.'),

  // Step 3: 개인정보 처리방침 동의
  privacyPolicy: z.boolean().refine(val => val === true, '개인정보 처리방침에 동의해 주세요.'),
});

type MultiStepFormData = z.infer<typeof multiStepSchema>;

// Step Indicator 컴포넌트
const StepIndicator = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div key={step} className="flex items-center flex-1">
            <div className="flex items-center gap-2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                  step < currentStep
                    ? 'border-lime-600 bg-lime-600 text-white'
                    : step === currentStep
                    ? 'border-lime-600 text-lime-600'
                    : 'border-gray-300 text-gray-300'
                }`}
              >
                {step < currentStep ? <Check size={20} /> : step}
              </div>
              <span className={`hidden sm:block text-sm font-medium ${
                step <= currentStep ? 'text-gray-900' : 'text-gray-400'
              }`}>
                {step === 1 ? '서비스 선택' : step === 2 ? '정보 입력' : '확인'}
              </span>
            </div>
            {step < totalSteps && (
              <div className={`flex-1 h-0.5 mx-4 ${step < currentStep ? 'bg-lime-600' : 'bg-gray-300'}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const MultiStepContactForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const { register, handleSubmit, formState: { errors }, watch, trigger, reset } = useForm<MultiStepFormData>({
    resolver: zodResolver(multiStepSchema),
    mode: 'onChange',
  });

  const selectedService = watch('service');

  // 다음 단계로 이동
  const handleNext = async () => {
    let isValid = false;

    if (currentStep === 1) {
      isValid = await trigger('service');
    } else if (currentStep === 2) {
      isValid = await trigger(['companyName', 'contactPerson', 'phone', 'email', 'message']);
    }

    if (isValid) {
      setCurrentStep(currentStep + 1);
    }
  };

  // 이전 단계로 이동
  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  // 폼 제출
  const onSubmit = async (data: MultiStepFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/contact/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      setSubmitStatus('success');
      reset();
      setCurrentStep(1);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 성공 메시지
  if (submitStatus === 'success') {
    return (
      <div className="rounded-lg border-2 border-lime-600 bg-lime-50 p-8 text-center">
        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lime-600">
            <Check size={32} className="text-white" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-lime-700">
          상담 신청이 완료되었습니다!
        </h3>
        <p className="mt-4 text-base text-gray-700">
          빠른 시일 내에 연락드리겠습니다.
          <br />
          감사합니다.
        </p>
        <div className="mt-6">
          <button
            onClick={() => setSubmitStatus(null)}
            className="rounded-md bg-lime-600 px-6 py-2 text-sm font-medium text-white hover:bg-lime-700"
          >
            새 상담 신청하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* 카카오톡 채널 바로가기 (상단) */}
      <div className="mb-6 rounded-lg border border-yellow-400 bg-yellow-50 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MessageCircle className="h-6 w-6 text-yellow-600" />
            <div>
              <h4 className="font-semibold text-gray-900">더 빠른 상담을 원하시나요?</h4>
              <p className="text-sm text-gray-600">카카오톡 채널로 즉시 상담받으세요</p>
            </div>
          </div>
          <a
            href="http://pf.kakao.com/_fIBxmxj/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-yellow-400 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-yellow-500"
          >
            카카오톡 상담
            <ChevronRight size={16} />
          </a>
        </div>
      </div>

      {/* Step Indicator */}
      <StepIndicator currentStep={currentStep} totalSteps={3} />

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1: 서비스 선택 */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                어떤 서비스가 필요하신가요?
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className={`relative flex cursor-pointer rounded-lg border p-4 hover:bg-gray-50 ${
                      selectedService === service.id
                        ? 'border-lime-600 bg-lime-50'
                        : 'border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      value={service.id}
                      {...register('service')}
                      className="sr-only"
                    />
                    <div className="flex flex-1 items-center">
                      <div className="flex-1">
                        <span className="block text-base font-semibold text-gray-900">
                          {service.name}
                        </span>
                        <span className="mt-1 block text-sm text-gray-600">
                          {service.description}
                        </span>
                      </div>
                      {selectedService === service.id && (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-600">
                          <Check size={16} className="text-white" />
                        </div>
                      )}
                    </div>
                  </label>
                ))}
              </div>
              {errors.service && (
                <p className="mt-2 text-sm text-red-600">{errors.service.message}</p>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 rounded-md bg-lime-600 px-6 py-3 text-base font-medium text-white hover:bg-lime-700"
              >
                다음 단계
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: 정보 입력 */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                연락처 정보를 입력해 주세요
              </h3>
              <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                    회사명 <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="companyName"
                    {...register('companyName')}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500"
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
                    담당자 성함 <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="contactPerson"
                    {...register('contactPerson')}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500"
                  />
                  {errors.contactPerson && (
                    <p className="mt-1 text-sm text-red-600">{errors.contactPerson.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    연락처 <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    placeholder="010-0000-0000"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    이메일 <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="name@example.com"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  문의 내용 <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message')}
                  placeholder="궁금하신 서비스나 방문 상담 원하시는 내용을 간략히 적어주세요."
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrevious}
                className="rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                이전 단계
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 rounded-md bg-lime-600 px-6 py-3 text-base font-medium text-white hover:bg-lime-700"
              >
                다음 단계
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: 확인 및 제출 */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                입력하신 정보를 확인해 주세요
              </h3>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-gray-500">선택 서비스</p>
                    <p className="mt-1 text-base text-gray-900">
                      {services.find(s => s.id === selectedService)?.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">회사명</p>
                    <p className="mt-1 text-base text-gray-900">{watch('companyName')}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">담당자</p>
                    <p className="mt-1 text-base text-gray-900">{watch('contactPerson')}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">연락처</p>
                    <p className="mt-1 text-base text-gray-900">{watch('phone')}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-sm font-medium text-gray-500">이메일</p>
                    <p className="mt-1 text-base text-gray-900">{watch('email')}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-sm font-medium text-gray-500">문의 내용</p>
                    <p className="mt-1 text-base text-gray-900 whitespace-pre-wrap">
                      {watch('message')}
                    </p>
                  </div>
                </div>
              </div>

              {/* 개인정보 처리방침 동의 */}
              <div className="mt-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('privacyPolicy')}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-lime-600 focus:ring-lime-500"
                  />
                  <span className="text-sm text-gray-700">
                    <span className="font-medium">[필수]</span> 개인정보 수집 및 이용에 동의합니다.
                    <br />
                    <span className="text-xs text-gray-500">
                      수집 항목: 회사명, 담당자명, 연락처, 이메일, 문의내용 | 이용 목적: 상담 응대 및 서비스 안내 | 보유 기간: 상담 완료 후 1년
                    </span>
                  </span>
                </label>
                {errors.privacyPolicy && (
                  <p className="mt-2 text-sm text-red-600">{errors.privacyPolicy.message}</p>
                )}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrevious}
                className="rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                이전 단계
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md bg-lime-600 px-8 py-3 text-base font-medium text-white hover:bg-lime-700 disabled:bg-gray-400"
              >
                {isSubmitting ? '전송 중...' : '상담 신청하기'}
              </button>
            </div>

            {submitStatus === 'error' && (
              <div className="rounded-lg border border-red-300 bg-red-50 p-4">
                <p className="text-sm text-red-800">
                  전송에 실패했습니다. 전화(010-5407-3287) 또는 이메일(ajong3287@gmail.com)로 연락 부탁드립니다.
                </p>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
};
