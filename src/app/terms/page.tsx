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
      <PageBackground variant="terms" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="border-b border-[#111112] pb-8 mb-12">
          <h1 className="font-display text-5xl sm:text-7xl font-normal tracking-tight text-[#111112]">
            Terms of Service
          </h1>
          <p className="mt-4 font-display text-xl sm:text-2xl text-[#111112] max-w-xl leading-snug">
            Terms and conditions for using this website.
          </p>
          <p className="mt-3 font-mono text-xs text-[#6E6D68]">
            Last updated: September 2026
          </p>
        </div>

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
