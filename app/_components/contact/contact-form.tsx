// (Story 3.1) 상담 신청 폼 컴포넌트
// (Arch 5.2) React Hook Form + Zod 사용
// (Arch 2) [cite: 1912, 2269-2280] shadcn/ui 사용 (설치 필요)

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// (Arch 7) .env.local 변수 사용
const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL_ADDRESS || 'ajong3287 @gmail.com';

// (Arch 5.2) Zod 스키마 (PRD FR6 [cite: 808-816] 기반)
const contactSchema = z.object({
  companyName: z.string().min(1, '회사명을 입력해 주세요.'),
  contactPerson: z.string().min(1, '담당자 성함을 입력해 주세요.'),
  phone: z.string().min(10, '올바른 연락처를 입력해 주세요.'),
  email: z.string().email('올바른 이메일 주소를 입력해 주세요.'),
  message: z.string().min(10, '문의 내용을 10자 이상 입력해 주세요.').max(1000),
  // TODO: (Story 3.1 AC.3)  개인정보처리방침 동의
  // privacyPolicy: z.boolean().refine(val => val === true, '개인정보처리방침에 동의해 주세요.'),
});

type ContactFormData = z.infer<typeof contactSchema>;

// UI 컴포넌트 (shadcn/ui 대체)
// TODO: (Arch 2) [cite: 1912, 2269-2280] 'npx shadcn-ui @latest init', 'add button', 'add input', 'add label', 'add textarea' 실행 필요
const Input = (props: any) => <input className="w-full rounded border border-gray-300 px-3 py-2 shadow-sm" {...props} />;
const Textarea = (props: any) => <textarea className="w-full rounded border border-gray-300 px-3 py-2 shadow-sm" {...props} />;
const Button = (props: any) => <button className="rounded-md bg-lime-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-lime-700" {...props} />;
const Label = (props: any) => <label className="block text-sm font-medium text-gray-700" {...props} />;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // (Story 3.2 AC.1)  폼 제출 로직 (Arch 5.2)
  const onSubmit = async (data: ContactFormData) => {
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

      // (Story 3.2 AC.4)  성공 피드백
      setSubmitStatus('success');
      reset(); // 폼 초기화
    } catch (error) {
      // (Story 3.2 AC.3)  실패 피드백
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="rounded-lg border-2 border-lime-600 bg-lime-50 p-8 text-center">
        <h3 className="text-2xl font-bold text-lime-700">
          (Story 3.2 AC.4) 
          상담 신청이 완료되었습니다.
        </h3>
        <p className="mt-4 text-base text-gray-700">
          빠른 시일 내에 연락드리겠습니다. 감사합니다.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* (PRD FR6) [cite: 808-816] 폼 필드 */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="companyName">회사명</Label>
          <Input id="companyName" {...register('companyName')} />
          {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>}
        </div>
        <div>
          <Label htmlFor="contactPerson">담당자 성함</Label>
          <Input id="contactPerson" {...register('contactPerson')} />
          {errors.contactPerson && <p className="mt-1 text-sm text-red-600">{errors.contactPerson.message}</p>}
        </div>
        <div>
          <Label htmlFor="phone">연락처</Label>
          <Input id="phone" type="tel" {...register('phone')} placeholder="010-0000-0000" />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">이메일</Label>
          <Input id="email" type="email" {...register('email')} placeholder="name @example.com" />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="message">문의 내용</Label>
        <Textarea id="message" rows={5} {...register('message')} placeholder="궁금하신 서비스나 방문 상담 원하시는 내용을 간략히 적어주세요." />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>
      
      {/* TODO: (AC.3)  개인정보처리방침 동의 체크박스 추가 */}

      <div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? '전송 중...' : '상담 신청하기'}
        </Button>
        {submitStatus === 'error' && (
          <p className="mt-4 text-sm text-red-600">
            (Story 3.2 AC.3) 
            전송에 실패했습니다. 전화({directPhone}) 또는 이메일({adminEmail})로 연락 부탁드립니다.
          </p>
        )}
      </div>
    </form>
  );
};
