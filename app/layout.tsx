import type { Metadata } from 'next';
import { Pretendard } from './_styles/fonts'; // Import Pretendard font
import './globals.css';
import { Header } from './_components/layout/header'; // Import Header component as named export
import { Footer } from './_components/layout/footer'; // Import Footer component as named export

export const metadata: Metadata = {
  title: '(주)마케팅파크 - No.1 Creative Online Marketing', // Updated title
  description: '바이럴 마케팅, 언론홍보, 위기관리, 인플루언서 마케팅 전문. 삼성, CJ, 기아 등 주요 고객사 성공 사례 보유. 대표 직통 상담.', // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={Pretendard.className}> {/* Apply Pretendard font */}
      <body className="flex min-h-screen flex-col bg-white text-gray-900"> {/* Updated body classes */}
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
