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
    default: "Kamal Daxini Realtor | Luxury Real Estate Advisor",
    template: "%s | Kamal Daxini Realtor",
  },
  description: "Bespoke real estate services and luxury properties curated by Kamal Daxini in Vadodara.",
  keywords: ["luxury real estate", "Vadodara", "Kamal Daxini", "realtor", "premium properties", "real estate advisor"],
  authors: [{ name: "Kamal Daxini Realtor" }],
  metadataBase: new URL("https://kamaldaxini.com"), // Updated domain placeholder
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kamaldaxini.com",
    siteName: "Kamal Daxini Realtor",
    title: "Kamal Daxini Realtor | Luxury Real Estate Advisor",
    description: "Bespoke real estate services and luxury properties curated by Kamal Daxini in Vadodara.",
    images: [
      {
        url: "/logos/logo.webp",
        width: 800,
        height: 400,
        alt: "Kamal Daxini Realtor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamal Daxini Realtor | Luxury Real Estate Advisor",
    description: "Bespoke real estate services and luxury properties curated by Kamal Daxini in Vadodara.",
  },
  icons: {
    icon: "/logos/logo.webp",
    apple: "/logos/logo.webp",
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
