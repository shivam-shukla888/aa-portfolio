"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { PageBackground } from "@/components/PageBackground";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";

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
      hint: "Primary channel for technical inquiries, engineering opportunities, and discussions.",
      actionLabel: "Send Email",
      isEmail: true,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/syyedaaamna",
      href: profile.linkedin,
      hint: "Professional network profile & engineering connections.",
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
      label: "Telephone Line",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, "")}`,
      hint: "Direct telephone line for scheduled discussions.",
      actionLabel: "Call Directly",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="relative min-h-[480px] lg:min-h-[520px] border-b border-[#E6E3DC] bg-[#FAF9F6] py-14 sm:py-20 overflow-hidden">
        <PageBackground variant="contact" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl">
            <div className="font-mono text-xs uppercase tracking-widest text-[#6E6D68] mb-3 font-semibold">
              Get in Touch
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-normal tracking-tight text-[#111112]">
              Contact
            </h1>
            <p className="mt-4 font-display text-xl sm:text-2xl text-[#111112] leading-snug">
              For work, collaboration, or questions, get in touch.
            </p>

            <div className="mt-8 pt-4 border-t border-[#E6E3DC] font-mono text-xs text-[#6E6D68]">
              <span>Location: {profile.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
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
                  {c.isEmail ? (
                    <ObfuscatedEmail showAddress={true} />
                  ) : (
                    c.value
                  )}
                </div>
                <p className="mt-2 font-sans text-xs text-[#6E6D68] leading-relaxed">
                  {c.hint}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#E6E3DC] flex items-center justify-between gap-3">
                {c.isEmail ? (
                  <ObfuscatedEmail
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#111112] hover:text-[#D45A2A] transition-colors font-medium focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
                    label={c.actionLabel}
                  />
                ) : (
                  <a
                    href={c.href}
                    target={c.href?.startsWith("http") ? "_blank" : undefined}
                    rel={c.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#111112] hover:text-[#D45A2A] transition-colors font-medium focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
                  >
                    <span>{c.actionLabel}</span>
                  </a>
                )}

                {c.isEmail && (
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="font-mono text-xs uppercase tracking-wider text-[#6E6D68] hover:text-[#111112] px-2 py-1 border border-[#E6E3DC] hover:border-[#111112] bg-[#FAF9F6] transition-colors focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Location Notice */}
        <div className="mt-10 p-6 bg-[#FAF9F6] border border-[#E6E3DC]">
          <div className="font-mono text-xs text-[#6E6D68]">
            <span className="block uppercase tracking-wider text-[#111112] font-semibold mb-1">
              Location
            </span>
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
