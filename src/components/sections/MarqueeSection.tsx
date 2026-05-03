"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { clients } from "@/data/clients";

export function MarqueeSection() {
  // Duplicate clients array to create seamless loop
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="label text-[var(--color-brand-gold)] mb-4 block uppercase tracking-widest text-sm">
          Our Clients
        </span>
        <h2 className="text-black text-3xl md:text-4xl font-light">
          Brands that trusted {siteConfig.companyName}
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Smoky fade effect */}
        <div className="absolute top-0 left-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30, // Adjust speed here
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 w-28 md:w-40 mx-6 md:mx-10 flex items-center justify-center transition-all duration-500 cursor-pointer hover:scale-105"
            >
              <div className="relative w-full h-10 md:h-14 transition-all duration-500">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
