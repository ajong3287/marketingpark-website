// (Story 3.2 AC.1, AC.2)  상담 신청 폼 API Route (서버리스 함수)
// (Arch 5.1) Next.js API Route

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// (Arch 7) 환경 변수 사용
const resend = new Resend(process.env.RESEND_API_KEY);
const adminEmail = process.env.ADMIN_EMAIL_ADDRESS;

export async function POST(request: Request) {
  if (!adminEmail) {
    console.error('ADMIN_EMAIL_ADDRESS is not set.');
    return NextResponse.json({ status: 'error', message: 'Server configuration error.' }, { status: 500 });
  }

  try {
    // 1. 프론트엔드에서 보낸 폼 데이터(JSON)를 파싱합니다.
    const body = await request.json();
    const { companyName, contactPerson, phone, email, message } = body;

    // 2. (Arch 5.2) Resend를 사용해 이메일을 발송합니다.
    const { data, error } = await resend.emails.send({
      from: 'MarketingPark <onboarding@resend.dev>', // (주의: Resend 샌드박스는 승인된 이메일로만 발송 가능)
      to: [adminEmail], // (Arch 7) 관리자 이메일
      subject: `[마케팅파크] 신규 방문 상담 신청: ${companyName}`,
      // (PRD FR6) [cite: 808-816] 폼 데이터 포함
      html: `
        <h3>(주)마케팅파크 신규 상담 신청</h3>
        <p><strong>회사명:</strong> ${companyName}</p>
        <p><strong>담당자:</strong> ${contactPerson}</p>
        <p><strong>연락처:</strong> ${phone}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <hr />
        <p><strong>문의 내용:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(error.message);
    }

    // 3. (Story 3.2 AC.4)  성공 응답 반환
    return NextResponse.json({ status: 'success', data }, { status: 200 });

  } catch (error) {
    console.error('POST request error:', error);
    // 4. (Story 3.2 AC.3)  실패 응답 반환
    return NextResponse.json({ status: 'error', message: 'Internal server error.' }, { status: 500 });
  }
}
