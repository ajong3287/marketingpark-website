import localFont from 'next/font/local';

export const Pretendard = localFont({
  src: [
    {
      path: './font-files/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font-files/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './font-files/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './font-files/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-pretendard',
});
