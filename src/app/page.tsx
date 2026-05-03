import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { LegacySection } from "@/components/sections/LegacySection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { AwardSection } from "@/components/sections/AwardSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { SkylineSection } from "@/components/sections/SkylineSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "Plinth & Co Homes | Premium Real Estate in Vadodara",
  description: "Experience luxury living with Plinth & Co Homes. We offer premium apartments, penthouses, and commercial spaces in Vadodara's most sought-after locations.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <LegacySection />
      <AwardSection />
      <FeaturedProjectsSection />
      <MarqueeSection />
      <SkylineSection />
      <TestimonialsSection />
    </>
  );
}
