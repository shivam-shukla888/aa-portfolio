import type { Metadata } from "next";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Direct contact channels for Syyeda Aamna — Email, LinkedIn, GitHub, and Phone.",
};

export default function ContactPage() {
  const contactChannels = [
    {
      label: "Direct Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      hint: "Primary channel for technical inquiries & opportunities",
      actionLabel: "Send Email",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/syyedaaamna",
      href: profile.linkedin,
      hint: "Professional network profile & career updates",
      actionLabel: "Open LinkedIn Profile",
    },
    {
      label: "GitHub",
      value: "github.com/Syyeda-Aamna",
      href: profile.github,
      hint: "Public repositories, source code & commits",
      actionLabel: "Visit GitHub Repositories",
    },
    {
      label: "Phone / Direct Line",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, "")}`,
      hint: "Direct telephone communication",
      actionLabel: "Call Directly",
    },
  ];

  return (
    <div className="w-full py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="border-b border-[#111112] pb-8 mb-16">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D45A2A] mb-3">
            <span>Direct Channels</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight text-[#111112]">
            Contact &amp; Inquiries
          </h1>
          <p className="mt-4 font-sans text-sm sm:text-base text-[#6E6D68] max-w-xl leading-relaxed">
            Reach out directly through verified channels. All inquiries receive direct, professional attention.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactChannels.map((c) => (
            <div
              key={c.label}
              className="p-8 bg-[#F4F2EC] border border-[#E6E3DC] hover:border-[#111112] transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold">
                  {c.label}
                </span>
                <div className="mt-3 font-display text-xl sm:text-2xl font-semibold text-[#111112] break-all">
                  {c.value}
                </div>
                <p className="mt-2 font-sans text-xs text-[#6E6D68] leading-relaxed">
                  {c.hint}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E6E3DC]">
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#111112] hover:text-[#D45A2A] transition-colors"
                >
                  <span>{c.actionLabel}</span>
                  <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Location & Status Notice */}
        <div className="mt-12 p-8 bg-[#FAF9F6] border border-[#E6E3DC]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs text-[#6E6D68]">
            <div>
              <span className="block uppercase tracking-wider text-[#111112] font-semibold mb-1">
                Geographic Base
              </span>
              <span>{profile.location}</span>
            </div>
            <div>
              <span className="block uppercase tracking-wider text-[#111112] font-semibold mb-1">
                Data Notice
              </span>
              <span>Frictionless direct links. No CRM or unsolicited data collection.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
