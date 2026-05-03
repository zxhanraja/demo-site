"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Track when first video is ready to play — eliminates black flash
  const [videoReady, setVideoReady] = useState(false);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const slides = siteConfig.heroSlides;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play next slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  // Start ALL videos playing immediately on mount (before preloader curtain lifts)
  // This ensures video is already in-motion when curtain animates away
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;

      const tryPlay = () => {
        video.play().catch(err => console.log("Video play error:", err));
      };

      // Mark ready as soon as the first video has enough data
      if (idx === 0) {
        const onReady = () => {
          setVideoReady(true);
          video.removeEventListener("canplay", onReady);
        };
        // If already ready, set immediately
        if (video.readyState >= 3) {
          setVideoReady(true);
        } else {
          video.addEventListener("canplay", onReady);
        }
      }

      tryPlay();
    });

    // Safety fallback: if canplay never fires (slow network), force show after 2.5s
    // so the black overlay never gets permanently stuck
    const fallbackTimer = setTimeout(() => setVideoReady(true), 2500);
    return () => clearTimeout(fallbackTimer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When slide changes, ensure the new video plays
  useEffect(() => {
    const video = videoRefs.current[currentSlide];
    if (video) {
      video.play().catch(err => console.log("Video play error:", err));
    }
  }, [currentSlide]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Dark overlay matching preloader bg — fades out once video is ready */}
      <div
        className="absolute inset-0 z-[1] bg-[#0a0a0a] transition-opacity duration-500 pointer-events-none"
        style={{ opacity: videoReady ? 0 : 1 }}
      />
      {/* Background Videos Stack */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              currentSlide === idx ? "opacity-100" : "opacity-0"
            } bg-gradient-to-br from-[#1a1a1a] via-[#2c1a1a] to-[#0a0a0a]`}
          >
            <motion.video
              ref={(el) => {
                videoRefs.current[idx] = el;
              }}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"

              animate={{ scale: currentSlide === idx ? 1 : 1.05 }}
              transition={{ duration: 15, ease: "linear" }}
              className="w-full h-full object-cover"
            >
              <source src={slide.video} type={slide.video.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
            </motion.video>
          </div>
        ))}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
      </div>

      {/* Content Area - Responsive Layout */}
      <div className="relative z-20 w-full h-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-center md:justify-end">
        <div className="max-w-3xl text-center md:text-right">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center md:items-end"
            >
              <h1 className="text-white mb-4 leading-[0.85] flex flex-col items-center md:items-end">
                <span className="text-4xl sm:text-6xl md:text-[100px] lg:text-[130px] font-sans font-extrabold uppercase tracking-tighter">
                  {slides[currentSlide].title}
                </span>
                <span className="text-4xl sm:text-6xl md:text-[110px] lg:text-[140px] font-serif italic font-light opacity-90 -mt-2 md:-mt-6">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
              
              <div className="h-[1px] w-24 bg-[var(--color-brand-gold)] mb-6 md:hidden" />

              <p className="text-white/70 font-sans text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase max-w-sm md:max-w-md leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators - Bottom Left (Responsive) */}
      <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 z-30 flex gap-4 md:gap-6">
        {slides.map((_, idx) => (
          <div 
            key={idx}
            className="group cursor-pointer py-4"
            onClick={() => setCurrentSlide(idx)}
          >
            <div className="w-8 md:w-16 h-[2px] bg-white/20 relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-[var(--color-brand-gold)] origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: currentSlide === idx ? 1 : 0 }}
                transition={{ 
                  duration: currentSlide === idx ? 8 : 0.3, 
                  ease: "linear" 
                }}
              />
            </div>
            <div className={`mt-2 text-[8px] md:text-[10px] tracking-[0.2em] transition-colors duration-300 font-bold ${currentSlide === idx ? 'text-white' : 'text-white/40'}`}>
              0{idx + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation - Bottom Right (Responsive) */}
      <div className="absolute bottom-8 md:bottom-12 right-6 md:right-12 z-30 flex gap-3 md:gap-4">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[var(--color-brand-gold)] hover:border-[var(--color-brand-gold)] hover:text-black transition-all duration-300"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={18} strokeWidth={1.5} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[var(--color-brand-gold)] hover:border-[var(--color-brand-gold)] hover:text-black transition-all duration-300"
          aria-label="Next Slide"
        >
          <ChevronRight size={18} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}

