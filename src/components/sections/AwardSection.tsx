"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/data/site";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export function AwardSection() {
  return (
    <section id="awards" className="py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mx-auto lg:mx-0 max-w-[260px] md:max-w-md w-full aspect-[3/4]"
          >
            {/* Soft Glow effect */}
            <div className="absolute inset-0 bg-black/5 blur-2xl rounded-full" />
            
            <div className="relative w-full h-full rounded-sm overflow-hidden shadow-2xl shadow-black/10 transition-transform duration-500 hover:scale-[1.02] bg-white">
              <Image
                src="/images/award.webp"
                alt="Hurun Award Certificate"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                className="object-contain p-2"
              />
            </div>
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A96E]/30 bg-[#C9A96E]/5 mb-8">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"></circle>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                </svg>
                <span className="text-[10px] font-bold tracking-widest text-[#C9A96E] uppercase">
                  Hurun India
                </span>
              </div>

              <h2 className="text-black font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.2] mb-6">
                Excellence in Lifestyle<br />Real Estate Development
              </h2>
              <p className="text-black/60 font-light text-sm sm:text-base leading-relaxed mb-6">
                {siteConfig.companyName} Wins Hurun India Award. From Vadodara to national acclaim, {siteConfig.companyName} has been honoured with the prestigious "Excellence in Lifestyle Real Estate Development - Gujarat Award 2025".
              </p>
              
              <p className="text-black/60 font-light text-sm sm:text-base leading-relaxed italic">
                "{siteConfig.companyName} has been recognized by the Hurun Report for its commitment to excellence in real estate development. This recognition reflects our focus on quality construction, thoughtful design, and consistent value creation across residential and commercial projects in Vadodara."
              </p>
            </div>

            {/* Bottom Stats */}
            <div className="flex gap-16 pt-8 border-t border-black/5 mt-8">
              <div>
                <div className="text-black font-serif text-2xl mb-1">2025</div>
                <div className="text-[10px] tracking-widest text-black/40 font-bold uppercase">Year</div>
              </div>
              <div>
                <div className="text-black font-serif text-2xl mb-1">Hurun India</div>
                <div className="text-[10px] tracking-widest text-black/40 font-bold uppercase">Organizer</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
