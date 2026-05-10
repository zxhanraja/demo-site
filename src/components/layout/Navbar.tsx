"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera, Briefcase, PlayCircle, Send, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { EnquiryModal } from "@/components/ui/EnquiryModal";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "PROJECTS", href: "/projects" },
  { label: "COMPLETED", href: "/completed" },
  { label: "ABOUT US", href: "/about" },
  { label: "AWARDS", href: "/awards" },
  { label: "REFERRAL", href: "/referral" },
  { label: "RENTALS", href: "/rentals" },
  { label: "CONTACT US", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Centered Logo (outside header to fix mix-blend-mode stacking context issues) */}
      {!isMenuOpen && (
        <Link 
          href="/" 
          className={`fixed top-2 md:top-0 left-1/2 -translate-x-1/2 z-[60] h-20 md:h-24 flex items-center justify-center transition-all duration-300 ${
            isScrolled ? "mix-blend-multiply" : "mix-blend-screen"
          }`}
        >
          <div className="flex flex-col items-center">
            <div className="relative w-56 md:w-80 h-16 md:h-24 transition-all duration-300">
              <Image 
                src="/logos/logo.webp" 
                alt="Kamal Daxini Logo" 
                fill
                sizes="(max-width: 768px) 224px, 320px"
                className="object-contain"
                style={{
                  filter: isScrolled ? "none" : "invert(1) hue-rotate(180deg) brightness(1.5)"
                }}
                priority
              />
            </div>
          </div>
        </Link>
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl h-20 [box-shadow:0_1px_0_0_rgba(0,0,0,0.06)]"
            : "bg-transparent h-24 backdrop-blur-none"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 h-full flex items-center justify-between relative">
          {/* Menu Trigger on Left */}
          {!isMenuOpen && (
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`group flex items-center gap-4 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-[var(--color-brand-text-primary)]'} focus:outline-none z-[60]`}
            >
              <div className="flex flex-col gap-1.5">
                <span className="w-8 h-[1px] bg-current"></span>
                <span className="w-6 h-[1px] bg-current transition-all group-hover:w-8"></span>
              </div>
              <span className="hidden md:block text-[10px] tracking-[0.3em] font-bold opacity-70 group-hover:opacity-100 transition-opacity">MENU</span>
            </button>
          )}

          {/* Right Side Tools */}
          <div className="flex items-center gap-6 md:gap-10 z-[60]">
            <button className={`hover:text-[var(--color-brand-gold)] transition-colors duration-300 ${isMenuOpen || isScrolled ? 'text-black' : 'text-white'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
            
            <button 
              onClick={() => setIsEnquiryOpen(true)}
              className={`flex items-center gap-3 group transition-colors duration-300 ${isMenuOpen || isScrolled ? 'text-black' : 'text-white'}`}
            >
              <span className="hidden md:block text-[10px] tracking-[0.3em] font-bold">ENQUIRE</span>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-current flex items-center justify-center group-hover:bg-[var(--color-brand-gold)] group-hover:border-[var(--color-brand-gold)] group-hover:text-black transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-45"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 0% 0%)" }}
            animate={{ clipPath: "circle(150% at 0% 0%)" }}
            exit={{ clipPath: "circle(0% at 0% 0%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[70] bg-[#F5F0E8] flex flex-col"
          >
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            <div className="h-20 md:h-24 px-6 md:px-12 flex items-center justify-end relative z-20 bg-[#F5F0E8]/80 backdrop-blur-sm">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center gap-3 text-black hover:text-[var(--color-brand-gold)] transition-colors duration-300"
              >
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <X size={24} strokeWidth={1.5} className="absolute transition-transform duration-500 group-hover:rotate-90" />
                </div>
                <span className="text-xs tracking-[0.3em] font-bold">CLOSE</span>
              </button>
            </div>

            <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative z-10">
              {/* Left Side: Navigation Links */}
              <div className="flex-1 overflow-y-auto hide-scrollbar flex flex-col px-6 md:px-24 pt-12 md:pt-20 pb-20 md:pb-24">
                
                <nav className="flex flex-col items-end md:items-start gap-3 md:gap-1 w-full mt-10 md:mt-0">
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.4, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="hidden md:block text-[10px] tracking-[0.5em] font-bold text-black mb-6 uppercase"
                  >
                    Navigation
                  </motion.span>
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -50, rotateX: -45 }}
                      animate={{ opacity: 1, x: 0, rotateX: 0 }}
                      transition={{ 
                        delay: 0.6 + i * 0.05, 
                        duration: 0.8, 
                        ease: [0.215, 0.61, 0.355, 1] 
                      }}
                      className="w-full flex justify-end md:justify-start"
                    >
                      {/* Mobile Link */}
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`md:hidden flex items-center justify-end gap-3 py-1.5 text-[32px] font-sans tracking-tight transition-colors duration-300 w-full uppercase ${
                          pathname === link.href 
                            ? "text-[var(--color-brand-gold)]" 
                            : "text-black/60"
                        }`}
                      >
                        {pathname === link.href && (
                          <span className="text-[26px] font-light mb-1">↗</span>
                        )}
                        <span>{link.label}</span>
                      </Link>

                      {/* Desktop Link */}
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`group relative hidden md:flex items-center gap-4 md:gap-6 py-1 md:py-1.5 text-2xl sm:text-3xl md:text-5xl font-serif tracking-tight transition-all duration-500 ${
                          pathname === link.href 
                            ? "text-[var(--color-brand-gold)]" 
                            : "text-black/30 hover:text-black"
                        }`}
                      >
                        <span className="text-[10px] md:text-sm font-sans font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
                          0{i + 1}
                        </span>
                        <span className="relative overflow-hidden flex flex-col h-[1.2em] leading-[1.2em]">
                          <span className="block h-full transition-transform duration-500 group-hover:-translate-y-full will-change-transform">
                            {link.label}
                          </span>
                          <span className="block h-full transition-transform duration-500 group-hover:-translate-y-full text-[var(--color-brand-gold)] will-change-transform">
                            {link.label}
                          </span>
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Right Side: Pure Full-Height Image */}
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                className="flex-1 relative hidden md:block overflow-hidden group/image"
              >
                <div className="absolute inset-0 transition-transform duration-1000 group-hover/image:scale-105">
                  <Image 
                    src="/images/navbg2.webp"
                    alt="Luxury Interior"
                    fill
                    loading="lazy"
                    quality={75}
                    className="object-cover"
                    sizes="(max-width: 768px) 0vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-black/5" />
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="p-6 md:px-24 md:py-8 flex flex-col sm:flex-row justify-between items-center gap-8 border-t border-black/5 relative z-20 bg-[#F5F0E8]"
            >
              <div className="flex flex-col gap-1 items-center sm:items-start">
                <p className="text-[8px] md:text-[9px] tracking-[0.3em] text-black/40 font-bold uppercase">© 2026 KAMAL DAXINI REALTOR</p>
                <div className="flex gap-6">
                  <Link href="/privacy" className="text-[8px] md:text-[9px] tracking-[0.2em] font-bold text-black/30 hover:text-black transition-colors uppercase">Privacy</Link>
                  <Link href="/terms" className="text-[8px] md:text-[9px] tracking-[0.2em] font-bold text-black/30 hover:text-black transition-colors uppercase">Terms</Link>
                </div>
              </div>

              {/* Social Icons at Bottom */}
              <div className="flex items-center gap-10">
                {[
                  { name: "INSTAGRAM", href: "#" },
                  { name: "LINKEDIN", href: "#" },
                  { name: "YOUTUBE", href: "#" }
                ].map((social) => (
                  <Link 
                    key={social.name}
                    href={social.href}
                    className="text-[9px] tracking-[0.3em] font-bold text-black/40 hover:text-[var(--color-brand-gold)] transition-all duration-300 relative group"
                  >
                    {social.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-brand-gold)] transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </>
  );
}
