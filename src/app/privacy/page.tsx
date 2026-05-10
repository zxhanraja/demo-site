import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Kamal Daxini Realtor",
  description: "Read the Privacy Policy for Kamal Daxini Realtor. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-bg)] text-[var(--color-brand-text-primary)]">
      {/* Header / Back Link */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-24 flex items-center px-6 md:px-12 bg-[var(--color-brand-bg)]/80 backdrop-blur-md border-b border-[var(--color-brand-border)]">
        <Link href="/" className="group flex items-center gap-3 text-xs tracking-[0.3em] font-bold hover:text-[var(--color-brand-gold)] transition-colors">
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-2" />
          BACK TO HOME
        </Link>
      </nav>

      {/* Content */}
      <section className="pt-48 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="label mb-4 block">Legal</span>
          <h1 className="mb-12">Privacy Policy</h1>

          <div className="space-y-12 text-[var(--color-brand-text-secondary)] font-light text-lg leading-relaxed">
            <section>
              <h2 className="text-white text-2xl mb-6 font-serif">Introduction</h2>
              <p>
                At Kamal Daxini Realtor, we are committed to protecting your privacy and ensuring the security of your personal information.
                This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us through our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl mb-6 font-serif">Data Collection</h2>
              <p>
                We may collect personal information such as your name, email address, phone number, and preferences when you enquire about
                our projects or subscribe to our newsletter. We also collect non-personal data through cookies to improve your browsing experience.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl mb-6 font-serif">Use of Information</h2>
              <p>
                The information we collect is used primarily to provide you with personalized services, process your enquiries,
                and keep you updated on our latest developments. We do not sell or share your personal data with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl mb-6 font-serif">Security</h2>
              <p>
                We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.
                Our website uses SSL encryption to ensure a secure connection between your browser and our servers.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl mb-6 font-serif">Your Rights</h2>
              <p>
                You have the right to access, update, or request the deletion of your personal information at any time.
                Please contact us at info@kamaldaxini.com for any privacy-related requests.
              </p>
            </section>

            <div className="pt-12 border-t border-[var(--color-brand-border)]">
              <p className="text-sm opacity-50">Last Updated: May 2026</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
