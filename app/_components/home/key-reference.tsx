import Link from 'next/link';
import { Youtube } from 'lucide-react';
export const KeyReference = () => { // Changed to named export
  const youtubeUrl = process.env.NEXT_PUBLIC_YOUTUBE_URL || '#';
  return (
    <section className="bg-lime-800 py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
          <div className="flex-shrink-0"><Youtube size={80} className="text-white" /></div>
          <div className="md:ml-8">
            <h2 className="text-base font-semibold uppercase tracking-wide text-lime-300">핵심 홍보 레퍼런스</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">구독자 2만명+ '마케팅길라잡이'</p>
            <p className="mt-4 max-w-2xl text-lg text-lime-100">대표가 직접 운영하는 유튜브 채널은 마케팅파크의 강력한 홍보 자산이자, 고객과의 신뢰를 구축하는 소통 창구입니다.</p>
            <div className="mt-8">
              <Link href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium text-lime-700 shadow-sm hover:bg-gray-50">유튜브 채널 바로가기</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};