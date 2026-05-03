import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/ui/Preloader";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Plinth & Co Homes | Luxury Real Estate Developer",
    template: "%s | Plinth & Co Homes",
  },
  description: "Premium apartments, penthouses & commercial spaces crafted for modern living in Vadodara.",
  keywords: ["luxury real estate", "Vadodara", "premium apartments", "penthouses", "Plinth and Co", "real estate developer"],
  authors: [{ name: "Plinth & Co Homes" }],
  metadataBase: new URL("https://plinthandco.com"), // Apna actual domain yahan lagao
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://plinthandco.com",
    siteName: "Plinth & Co Homes",
    title: "Plinth & Co Homes | Luxury Real Estate Developer",
    description: "Premium apartments, penthouses & commercial spaces crafted for modern living in Vadodara.",
    images: [
      {
        url: "/images/logo.webp",
        width: 800,
        height: 400,
        alt: "Plinth & Co Homes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plinth & Co Homes | Luxury Real Estate Developer",
    description: "Premium apartments, penthouses & commercial spaces crafted for modern living in Vadodara.",
  },
  icons: {
    icon: "/logos/logo2.svg",
    apple: "/logos/logo2.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-brand-bg)] text-[var(--color-brand-text-primary)]">
        <Preloader />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
