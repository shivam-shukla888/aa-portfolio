import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { PageBackground } from "@/components/PageBackground";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for visitors to Syyeda Aamna's portfolio.",
};

export default function TermsPage() {
  return (
    <div className="w-full py-16 sm:py-24 relative overflow-hidden">
      {/* Panel 09 Editorial Hero Blueprint Section */}
      <section className="relative min-h-[480px] lg:min-h-[540px] flex flex-col justify-between px-6 sm:px-12 lg:px-16 pt-8 pb-12 border-b border-[#E5E4DE] overflow-hidden">
        <PageBackground variant="terms" />

        <div className="relative z-10 max-w-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-[#D45A2A] tracking-wider uppercase">08 —</span>
            <span className="font-mono text-xs text-[#6E6D68] tracking-widest uppercase">Legal Conditions</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#111112] leading-[1.05]">
            Terms of Service
          </h1>
          <p className="mt-5 font-sans text-base sm:text-lg text-[#4A4944] leading-relaxed">
            Terms and conditions for using this website.
          </p>
          <div className="mt-4 flex items-center gap-4 text-xs font-mono text-[#6E6D68]">
            <span>LAST UPDATED: SEPTEMBER 2026</span>
            <span>•</span>
            <span>JURISDICTION: OPEN ACCESS</span>
          </div>
        </div>

        {/* Panel 09 Bottom Left Technical Guide Rail */}
        <div className="relative z-10 mt-12 pt-4 border-t border-[#E5E4DE]/60 max-w-md">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10px] text-[#6E6D68] tracking-wider uppercase">
            <span>CLARITY</span>
            <span>/</span>
            <span>FAIR USE</span>
            <span>/</span>
            <span>RESPONSIBLE ACCESS</span>
            <span>/</span>
            <span>OPEN INFORMATION</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16 pt-16 relative z-10">

        <div className="space-y-10 font-sans text-sm sm:text-base text-[#111112] leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-[#111112] mb-3">
              1. Purpose of the Website
            </h2>
            <p className="text-[#6E6D68]">
              This website serves as the personal engineering and professional portfolio of Syyeda Aamna. It is published for informational and evaluation purposes by prospective employers, collaborators, and professional peers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-[#111112] mb-3">
              2. Intellectual Property &amp; Code Repositories
            </h2>
            <p className="text-[#6E6D68]">
              The textual content, editorial layout, and presentation on this portfolio are the property of Syyeda Aamna unless otherwise stated. Public software repositories linked from this site (such as on GitHub) are subject to the specific open-source or repository licenses published within those repositories.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-[#111112] mb-3">
              3. AI Assistant Usage
            </h2>
            <p className="text-[#6E6D68]">
              The &ldquo;ASK AAMNA&rdquo; AI assistant is provided as an exploratory convenience. While it is strictly constrained to verified portfolio data, AI-generated answers should be cross-referenced with the primary written case studies and repository files on this site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-[#111112] mb-3">
              4. Disclaimer
            </h2>
            <p className="text-[#6E6D68]">
              This site and its informational contents are provided on an &ldquo;as is&rdquo; basis without warranties of any kind. Syyeda Aamna does not accept liability for technical inaccuracies or third-party website contents accessed via external links.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-[#111112] mb-3">
              5. Governing Law
            </h2>
            <p className="text-[#6E6D68]">
              These terms are governed by the applicable laws of [JURISDICTION TO BE PROVIDED].
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-[#111112] mb-3">
              6. Inquiries
            </h2>
            <p className="text-[#6E6D68]">
              If you have any questions regarding these terms, please contact{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-[#111112] underline hover:text-[#D45A2A]"
              >
                {profile.email}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
