"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    let pulseTimer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      // Show only after user scrolls past 90% of hero (100vh)
      const pastHero = window.scrollY > window.innerHeight * 0.9;
      setVisible(pastHero);

      // Stop pulse ring 5s after first appearance
      if (pastHero) {
        pulseTimer = setTimeout(() => setPulse(false), 5000);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check immediately in case page loaded mid-scroll
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(pulseTimer);
    };
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hello! I'm interested in your properties."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[9000] flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95"
      style={{
        transition: "opacity 0.4s ease, transform 0.3s ease",
        opacity: visible ? 1 : 0,
        transform: `translateY(${visible ? "0" : "20px"}) scale(1)`,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Pulse ring — only while pulse is true */}
      {pulse && visible && (
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      )}

      {/* WhatsApp SVG */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 relative z-10"
      >
        <path
          d="M16 2C8.268 2 2 8.268 2 16c0 2.478.676 4.797 1.853 6.785L2 30l7.43-1.82A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
          fill="white"
        />
        <path
          d="M23.007 19.394c-.31-.155-1.833-.904-2.118-.006-.283.896-1.11 1.12-1.9.52a9.478 9.478 0 01-2.724-2.488c-.658-.9-.363-1.404.17-1.94.49-.49.7-1.14.17-1.8l-.87-1.2c-.31-.43-.82-.69-1.35-.51-.98.33-2.16 1.24-2.34 2.86-.18 1.62.76 3.49 2.25 5.01 1.49 1.52 3.65 2.82 5.93 2.82 1.06 0 2.46-.62 2.97-1.76.3-.67.12-1.2-.19-1.51z"
          fill="#25D366"
        />
      </svg>
    </a>
  );
}
