// app/page.tsx
// [엘리나이]
import HeroSection from "./_components/home/hero-section";
import TrustBar from "./_components/home/trust-bar";
import CoreServices from "./_components/home/core-services"; // Import CoreServices component
import KeyReference from "./_components/home/key-reference"; // Import KeyReference component
import FinalCta from "./_components/home/final-cta"; // Import FinalCta component

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <CoreServices /> {/* Render CoreServices component */}
      <KeyReference /> {/* Render KeyReference component */}
      <FinalCta /> {/* Render FinalCta component */}
    </>
  );
}
