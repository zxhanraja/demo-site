"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Top Labels */}
        <span className="text-[#C9A96E] mb-6 block uppercase tracking-[0.2em] text-xs md:text-sm font-semibold">
          Real Stories
        </span>
        <h2 className="text-black text-3xl md:text-[40px] font-light mb-12 tracking-wide">
          Experience The {siteConfig.companyName} Lifestyle
        </h2>

        <div className="relative min-h-[300px] flex flex-col items-center justify-center">
          
          {/* Quote Icon */}
          <div className="mb-8 flex justify-center text-[#E3D1A5]">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 11h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z"/>
              <path d="M10 11c0 4.5-3 7-5 7"/>
              <path d="M20 11h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z"/>
              <path d="M20 11c0 4.5-3 7-5 7"/>
            </svg>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <p className="text-[#6c757d] font-light italic text-xl md:text-[22px] leading-[1.8] mb-10 max-w-3xl mx-auto px-4">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <h4 className="text-black font-bold tracking-widest uppercase text-sm md:text-sm mb-2">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-[#C9A96E] text-[11px] md:text-xs font-medium tracking-wide uppercase">
                {testimonials[currentIndex].designation} <span className="mx-1.5 opacity-50">•</span> {testimonials[currentIndex].project}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button 
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} strokeWidth={1} />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} strokeWidth={1} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
