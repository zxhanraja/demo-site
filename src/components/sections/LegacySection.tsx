"use client";

import { motion, Variants } from "framer-motion";
import { siteConfig } from "@/data/site";
import { LeadForm } from "@/components/sections/LeadForm";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export function LegacySection() {
  return (
    <section id="legacy" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">
          
          {/* Text content - Centered */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 text-center max-w-3xl mb-16"
          >
            <div>
              <span className="label text-[var(--color-brand-gold)] mb-4 block">
                The {siteConfig.companyName} Legacy
              </span>
              <h2 className="text-black font-serif leading-[1.1] mb-8">
                Designing timeless spaces<br />with Enduring Values.
              </h2>
              <p className="text-black/70 font-light text-base sm:text-lg mx-auto">
                For over three decades, {siteConfig.companyName} has established itself as a premier real 
                estate developer in Vadodara, India. We don't just build structures; we curate 
                lifestyles defined by privacy, exclusivity, and uncompromising craft. From 
                Premium Apartments, Bungalows, Ultra-luxury penthouses to premium 
                commercial spaces, our legacy is built on trust and a commitment to 
                transforming the city's skyline.
              </p>
            </div>
          </motion.div>

          {/* Form - Below text and centered */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full max-w-2xl"
          >
            <LeadForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
