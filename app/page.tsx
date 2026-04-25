import HeroSection from "@/sections/HeroSection";

import Company from "@/sections/Company";

export default function Home() {
  return (
    <div className="flex flex-col space-y-20">
      <HeroSection />
      <Company />
    </div>
  );
}
