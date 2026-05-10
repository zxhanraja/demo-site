import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Camera, Briefcase, PlayCircle, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F9F9F7] border-t border-black/5 pt-24 pb-20 relative overflow-hidden">
      {/* Watermark Background - Solid Bold Style */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="font-sans text-[22vw] font-[900] tracking-[-0.05em] text-[#000000]/[0.06] whitespace-nowrap leading-[0.85]">
          {siteConfig.companyName.toUpperCase()}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-24">
          
          {/* Column 1 - Brand/Logo */}
          <div className="space-y-12">
            <Link href="/" className="inline-block">
              <div className="relative w-96 h-36">
                <Image 
                  src="/logos/logo.webp" 
                  alt={`${siteConfig.companyName} Logo`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 192px, 192px"
                  className="object-contain object-left mix-blend-multiply"
                />
              </div>
            </Link>
            <div className="space-y-2 text-black/50 font-light text-[11px] tracking-wider">
              <p>{siteConfig.email}</p>
              <p>{siteConfig.phone}</p>
            </div>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h4 className="text-[#C9A96E] text-[11px] tracking-[0.2em] font-bold uppercase mb-8">Company</h4>
            <ul className="space-y-4 text-[10px] tracking-[0.1em] font-bold text-black/60 uppercase">
              <li><Link href="/projects" className="hover:text-black transition-colors">Projects</Link></li>
              <li><Link href="/about" className="hover:text-black transition-colors">About Us</Link></li>
              <li><Link href="/awards" className="hover:text-black transition-colors">Awards</Link></li>
              <li><Link href="/about" className="hover:text-black transition-colors">Kamal Daxini</Link></li>
              <li><Link href="/rentals" className="hover:text-black transition-colors">Rentals</Link></li>
            </ul>
          </div>

          {/* Column 3 - More */}
          <div>
            <h4 className="text-[#C9A96E] text-[11px] tracking-[0.2em] font-bold uppercase mb-8">More</h4>
            <ul className="space-y-4 text-[10px] tracking-[0.1em] font-bold text-black/60 uppercase">
              <li><Link href="/preleased" className="hover:text-black transition-colors">Preleased</Link></li>
              <li><Link href="/blog" className="hover:text-black transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-black transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4 - Explore Projects */}
          <div className="lg:col-span-1">
            <h4 className="text-[#C9A96E] text-[11px] tracking-[0.2em] font-bold uppercase mb-8">Explore Projects</h4>
            <ul className="space-y-4 text-[10px] tracking-[0.1em] font-bold text-black/60 uppercase">
              <li><Link href="/projects?type=3bhk" className="hover:text-black transition-colors">3 BHK Flats</Link></li>
              <li><Link href="/projects?type=4bhk" className="hover:text-black transition-colors">4 BHK Flats</Link></li>
              <li><Link href="/projects?type=5bhk" className="hover:text-black transition-colors">5 BHK Flats</Link></li>
              <li><Link href="/penthouses" className="hover:text-black transition-colors">Penthouses</Link></li>
              <li><Link href="/bungalows" className="hover:text-black transition-colors">Bungalows</Link></li>
              <li><Link href="/shops" className="hover:text-black transition-colors">Shops</Link></li>
              <li><Link href="/showrooms" className="hover:text-black transition-colors">Showrooms</Link></li>
              <li><Link href="/offices" className="hover:text-black transition-colors">Offices</Link></li>
            </ul>
          </div>

          {/* Column 5 - Connect */}
          <div>
            <h4 className="text-[#C9A96E] text-[11px] tracking-[0.2em] font-bold uppercase mb-8">Connect</h4>
            <div className="grid grid-cols-3 gap-4 max-w-[160px]">
              {/* Instagram */}
              <a href="#" className="w-11 h-11 rounded-full border border-black/5 flex items-center justify-center text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all bg-white shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* Facebook */}
              <a href="#" className="w-11 h-11 rounded-full border border-black/5 flex items-center justify-center text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all bg-white shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-11 h-11 rounded-full border border-black/5 flex items-center justify-center text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all bg-white shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="w-11 h-11 rounded-full border border-black/5 flex items-center justify-center text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all bg-white shadow-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-11 h-11 rounded-full border border-black/5 flex items-center justify-center text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all bg-white shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.1em] font-bold text-black/50 uppercase">
          <p>© {new Date().getFullYear()} {siteConfig.companyName.toUpperCase()} REALTOR.</p>
          <div className="flex space-x-8">
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
