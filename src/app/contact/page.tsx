"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { PageBackground } from "@/components/PageBackground";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  const contactChannels = [
    {
      label: "Direct Email",
      value: profile.email,
      href: `mailto:${profile.email}?subject=Inquiry%20via%20Portfolio`,
      hint: "Primary channel for technical inquiries, discussions & engineering roles.",
      actionLabel: "Send Email",
      isEmail: true,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/syyedaaamna",
      href: profile.linkedin,
      hint: "Professional network profile & career updates.",
      actionLabel: "Open LinkedIn Profile",
    },
    {
      label: "GitHub",
      value: "github.com/Syyeda-Aamna",
      href: profile.github,
      hint: "Public repositories, source code implementations & commits.",
      actionLabel: "Visit GitHub Repositories",
    },
    {
      label: "Phone / Direct Line",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, "")}`,
      hint: "Direct telephone line for formal discussions.",
      actionLabel: "Call Directly",
    },
  ];

  return (
    <div className="w-full py-12 sm:py-20 relative overflow-hidden">
      <PageBackground variant="contact" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header matching Panel 06 */}
        <div className="border-b border-[#111112] pb-8 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D45A2A] mb-3 font-semibold">
            <span>05 &mdash;</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl font-normal tracking-tight text-[#111112]">
            Let&apos;s Talk
          </h1>
          <p className="mt-4 font-display text-xl sm:text-2xl text-[#111112] max-w-xl leading-snug">
            Open to opportunities, collaborations and interesting problems.
          </p>
          <p className="mt-3 font-sans text-sm text-[#6E6D68] max-w-xl leading-relaxed">
            Reach out directly through verified channels. All professional inquiries receive prompt attention without intermediate marketing layers.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactChannels.map((c) => (
            <div
              key={c.label}
              className="p-7 bg-[#F4F2EC] border border-[#E6E3DC] hover:border-[#111112] transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold">
                  {c.label}
                </span>
                <div className="mt-3 font-display text-xl sm:text-2xl font-semibold text-[#111112] break-all leading-tight">
                  {c.value}
                </div>
                <p className="mt-2 font-sans text-xs text-[#6E6D68] leading-relaxed">
                  {c.hint}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#E6E3DC] flex items-center justify-between gap-3">
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#111112] hover:text-[#D45A2A] transition-colors font-medium"
                >
                  <span>{c.actionLabel}</span>
                  <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>

                {c.isEmail && (
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="font-mono text-xs uppercase tracking-wider text-[#6E6D68] hover:text-[#111112] px-2 py-1 border border-[#E6E3DC] hover:border-[#111112] bg-[#FAF9F6] transition-colors"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Location & Status Notice */}
        <div className="mt-10 p-6 bg-[#FAF9F6] border border-[#E6E3DC]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs text-[#6E6D68]">
            <div>
              <span className="block uppercase tracking-wider text-[#111112] font-semibold mb-1">
                Geographic Location
              </span>
              <span>{profile.location}</span>
            </div>
            <div>
              <span className="block uppercase tracking-wider text-[#111112] font-semibold mb-1">
                Communication Policy
              </span>
              <span>Direct, unmediated channels. No unsolicited CRM ingestion or tracking.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
