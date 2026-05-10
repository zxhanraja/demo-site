"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export function Preloader() {
  const [showPreloader, setShowPreloader] = useState(true);
  const container = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panels = panelsRef.current.filter(Boolean);

    // 1. Initial State
    gsap.set(panels, { yPercent: 0 });
    gsap.set(contentRef.current, { opacity: 0, y: 30 });

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => setShowPreloader(false), 400);
      },
    });

    // 2. Fade in logo + content
    tl.to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });

    // 3. Progress bar fills
    tl.to(
      barRef.current,
      {
        width: "100%",
        duration: 2,
        ease: "power2.inOut",
      },
      "-=0.5"
    );

    // 4. Counter ticks up
    const counterObj = { value: 0 };
    tl.to(
      counterObj,
      {
        value: 100,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.innerText =
              Math.round(counterObj.value).toString() + "%";
          }
        },
      },
      "<"
    );

    // 5. Staggered curtain panels slide up
    tl.to(
      panels,
      {
        yPercent: -100,
        duration: 1.2,
        stagger: { amount: 0.5, from: "start" },
        ease: "power4.inOut",
        delay: 0.2,
      }
    );

    // 6. Logo fades out during curtain reveal
    tl.to(
      contentRef.current,
      {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "power2.in",
      },
      "<"
    );
  }, { scope: container });

  if (!showPreloader) return null;

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-transparent overflow-hidden"
      style={{ pointerEvents: "all" }}
    >
      {/* Vertical Panels */}
      <div className="absolute inset-0 flex z-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            ref={(el) => { panelsRef.current[i] = el; }}
            className="h-full w-[20%] bg-white border-r border-gray-200 last:border-r-0"
          />
        ))}
      </div>

      {/* Loading Content */}
      <div
        ref={contentRef}
        className="relative z-20 w-full h-full flex flex-col items-center justify-center"
        style={{ opacity: 0 }}
      >
        <div className="text-center mb-12 flex justify-center w-full">
          <div className="relative w-80 md:w-[32rem] h-28 md:h-44">
            <Image
              src="/logos/logo.webp"
              alt="Kamal Daxini Logo"
              fill
              sizes="(max-width: 768px) 320px, 512px"
              className="object-contain mix-blend-multiply"
              priority
            />
          </div>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-[1px] bg-gray-100 relative mb-4">
          <div
            ref={barRef}
            className="absolute top-0 left-0 h-full bg-[var(--color-brand-gold)] w-0"
          />
        </div>
        <div
          ref={counterRef}
          className="text-[var(--color-brand-gold)] font-sans text-[10px] tracking-widest font-bold"
        >
          0%
        </div>
      </div>
    </div>
  );
}
