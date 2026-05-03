import Image from "next/image";
import { siteConfig } from "@/data/site";

export function SkylineSection() {
  return (
    <section className="relative pt-16 pb-12 bg-[#050505] w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle Grid Background (Simulating Hex/Geometric grid from screenshot) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center mt-2">
        {/* Top Badge */}
        <div className="mb-8 px-6 py-2 border border-[var(--color-brand-gold)]/40 rounded-full bg-black/60 flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-[var(--color-brand-gold)] rotate-45"></div>
          <span className="text-[var(--color-brand-gold)] text-xs md:text-sm tracking-[0.2em] uppercase font-semibold">
            The Authority in Luxury
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl text-white font-light mb-6 tracking-wide leading-snug">
          Transforming the skyline of <br />
          <span className="text-[var(--color-brand-gold)]">Vadodara</span>
        </h2>

        {/* Subheading */}
        <p className="max-w-4xl mx-auto text-[#888888] text-sm md:text-base font-light leading-relaxed mb-8">
          Through disciplined planning and quality-driven execution, {siteConfig.companyName} delivers residential and<br className="hidden md:block"/>
          commercial real estate projects that contribute to Vadodara's growing urban landscape and<br className="hidden md:block"/>
          long-term development.
        </p>

        {/* Skyline Scene Container */}
        <div className="relative w-full flex flex-col items-center justify-end -mt-16 md:-mt-32">
          {/* VADODARA Background Text */}
          <div className="absolute top-[40%] md:top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[13vw] md:text-[15vw] font-black text-white/[0.02] tracking-widest whitespace-nowrap z-0 pointer-events-none select-none">
            VADODARA
          </div>

          {/* Skyline Image */}
          <div className="relative w-full max-w-6xl h-auto z-10 flex justify-center -mb-24 md:-mb-48 pointer-events-none">
            <Image
              src="/images/scene.webp"
              alt="Vadodara Skyline"
              width={1400}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Bottom Divider / Line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 relative"></div>

          {/* Bottom Locations */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-4 mb-8 relative z-20 text-[10px] md:text-xs tracking-[0.2em] text-[#888888]">
            {['NEW ALKAPURI', 'BHAYLI', 'VASNA-BHAYLI ROAD', 'GOTRI'].map((loc) => (
              <span key={loc} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[var(--color-brand-gold)] rounded-full"></div>
                <span className="hover:text-white transition-colors cursor-pointer">{loc}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
