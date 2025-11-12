// (Story 1.3) 메인 페이지
// [엘리나이]
import { HeroSection } from './_components/home/hero-section'; // Import as named export
import { TrustBar } from './_components/home/trust-bar'; // Import as named export
import { CoreServices } from './_components/home/core-services'; // Import as named export
import { KeyReference } from './_components/home/key-reference'; // Import as named export
import { FinalCta } from './_components/home/final-cta'; // Import as named export

export default function HomePage() { // Changed function name to HomePage
  return (
    <>
      <HeroSection />
      <TrustBar />
      <CoreServices />
      <KeyReference />
      <FinalCta />
    </>
  );
}