// (Story 3.2 AC.5)  상담 신청 폼 E2E 테스트
// (Arch 6) Playwright 사용

import { test, expect } from '@playwright/test';

test('Story 3.2: 상담 신청 폼 제출 E2E 테스트', async ({ page }) => {
  
  // 1. (Arrange) '상담 신청' 페이지(/contact)로 이동
  await page.goto('/contact');

  // 2. (Arrange) API Route('/contact/api/send') 요청을 가로채서(Mock)
  //    실제 이메일 발송 없이, 서버가 성공(200 OK)했다고 가정합니다.
  await page.route('/contact/api/send', (route) => {
    expect(route.request().method()).toBe('POST');
    route.fulfill({ status: 200, body: JSON.stringify({ status: 'success' }) });
  });

  // 3. (Act) 폼 필드에 유효한 데이터 입력 (PRD FR6 [cite: 808-816] 기반)
  await page.getByLabel('회사명').fill('테스트(주)');
  await page.getByLabel('담당자 성함').fill('서대표');
  await page.getByLabel('연락처').fill('010-1234-5678');
  await page.getByLabel('이메일').fill('test@ellicon.com');
  await page.getByLabel('문의 내용').fill('E2E 테스트용 문의 내용입니다. 10자 이상.');

  // 4. (Act) "상담 신청하기" 버튼 클릭
  await page.getByRole('button', { name: '상담 신청하기' }).click();

  // 5. (Assert) "성공" 메시지(Story 3.2 AC.4) 가 화면에 표시되는지 확인
  await expect(page.getByText('상담 신청이 완료되었습니다.')).toBeVisible({ timeout: 10000 });

  // 6. (Assert) 폼이 성공적으로 리셋되었는지 확인
  await expect(page.getByLabel('회사명')).toHaveValue('');
});
