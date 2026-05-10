import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Kamal Daxini Realtor",
  description: "Read the Terms of Service for Kamal Daxini Realtor, a luxury real estate advisor in Vadodara.",
};

export default function TermsPage() {
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
          <h1 className="mb-12">Terms of Service</h1>

          <div className="space-y-12 text-[var(--color-brand-text-secondary)] font-light text-lg leading-relaxed">
            <section>
              <h2 className="text-white text-2xl mb-6 font-serif">Agreement to Terms</h2>
              <p>
                By accessing or using the Kamal Daxini Realtor website, you agree to be bound by these Terms of Service
                and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl mb-6 font-serif">Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Kamal Daxini Realtor&apos;s
                website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl mb-6 font-serif">Disclaimer</h2>
              <p>
                The materials on Kamal Daxini Realtor&apos;s website are provided on an &apos;as is&apos; basis. Kamal Daxini Realtor makes no warranties,
                expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
                implied warranties or conditions of merchantability.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl mb-6 font-serif">Limitations</h2>
              <p>
                In no event shall Kamal Daxini Realtor or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use
                the materials on Kamal Daxini Realtor&apos;s website.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl mb-6 font-serif">Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India and you
                irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
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
