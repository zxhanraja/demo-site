import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { LegacySection } from "@/components/sections/LegacySection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { AwardSection } from "@/components/sections/AwardSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { SkylineSection } from "@/components/sections/SkylineSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "Kamal Daxini Realtor | Luxury Real Estate Advisor in Vadodara",
  description: "Bespoke real estate services and luxury properties curated by Kamal Daxini. Experience premium living in Vadodara's most sought-after locations.",
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
