// 4축 디자인 폰트 시스템 (2026-01-06)
import { Montserrat, Noto_Sans_KR, Space_Grotesk } from 'next/font/google';

// 1. Headline 폰트 - Montserrat (Bold/ExtraBold)
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap',
  variable: '--font-headline',
});

// 2. Subheading 폰트 - Space Grotesk (Medium/SemiBold)
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600'],
  display: 'swap',
  variable: '--font-subheading',
});

// 3. Body 폰트 - Noto Sans KR (Regular/Medium/SemiBold/Bold)
export const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-body',
});
