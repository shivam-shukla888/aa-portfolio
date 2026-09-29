"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { mainNavItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { ObfuscatedEmail } from "./ObfuscatedEmail";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E6E3DC] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex flex-col focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
            aria-label="Syyeda Aamna — Home"
          >
            <span className="font-display text-xl sm:text-2xl tracking-tight text-[#111112] font-semibold group-hover:text-[#D45A2A] transition-colors">
              {profile.name}
            </span>
            <span className="font-mono text-[10px] tracking-widest text-[#4A4944] uppercase -mt-0.5">
              {profile.displayTitle}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-7"
            aria-label="Main Navigation"
          >
            {mainNavItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-mono text-xs uppercase tracking-widest py-1.5 transition-all relative focus-visible:outline-2 focus-visible:outline-[#D45A2A] ${
                    isActive
                      ? "text-[#111112] font-semibold"
                      : "text-[#4A4944] hover:text-[#111112]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D45A2A]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action, Social Channels & Mobile Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Social Icons in Sticky Nav (Requirement 9) */}
            <div className="hidden sm:flex items-center space-x-1 border-r border-[#E6E3DC] pr-3 mr-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-[#4A4944] hover:text-[#111112] transition-colors focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
                aria-label="GitHub Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-[#4A4944] hover:text-[#111112] transition-colors focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <ObfuscatedEmail
                className="p-1.5 text-[#4A4944] hover:text-[#111112] transition-colors inline-flex items-center focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
                showIcon={true}
              />
            </div>

            {/* Resume Download Button in Nav (Requirement 9) */}
            <a
              href="/resume.pdf"
              download="Syyeda_Aamna_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#111112] bg-transparent text-[#111112] font-mono text-xs uppercase tracking-wider hover:bg-[#111112] hover:text-[#FAF9F6] transition-colors focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
              aria-label="Download Syyeda Aamna's Resume (PDF)"
            >
              <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              <span className="hidden sm:inline">Resume</span>
            </a>

            {/* Ask Aamna Assistant Button */}
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("open-ask-aamna"));
                }
              }}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 border border-[#D45A2A] bg-transparent text-[#111112] font-mono text-xs uppercase tracking-wider hover:bg-[#D45A2A] hover:text-[#FAF9F6] transition-colors group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
              aria-label="Open Ask Aamna portfolio assistant"
            >
              <span className="font-bold text-[#D45A2A] group-hover:text-[#FAF9F6]">&gt;_</span>
              <span>Ask Aamna</span>
              <span className="w-1.5 h-1.5 bg-[#D45A2A] group-hover:bg-[#FAF9F6]" aria-hidden="true" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 text-[#111112] hover:text-[#D45A2A] focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.75"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 z-50 bg-[#FAF9F6] lg:hidden flex flex-col border-t border-[#E6E3DC] px-6 py-8 overflow-y-auto animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="font-mono text-[11px] uppercase tracking-widest text-[#4A4944] mb-6">
            Navigation Index
          </div>

          <nav className="flex flex-col space-y-6">
            {mainNavItems.map((item, idx) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-baseline justify-between border-b border-[#E6E3DC] pb-4 group"
                >
                  <div className="flex items-baseline space-x-3">
                    <span className="font-mono text-xs text-[#4A4944]">
                      0{idx + 1}
                    </span>
                    <span
                      className={`font-display text-2xl tracking-tight ${
                        isActive
                          ? "text-[#D45A2A] font-semibold"
                          : "text-[#111112] group-hover:text-[#D45A2A]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  {item.description && (
                    <span className="font-mono text-[11px] text-[#4A4944]">
                      {item.description}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-[#E6E3DC] flex flex-col space-y-4">
            {/* Resume button in mobile menu */}
            <a
              href="/resume.pdf"
              download="Syyeda_Aamna_Resume.pdf"
              className="w-full flex items-center justify-between px-4 py-3 border border-[#111112] bg-[#FAF9F6] text-[#111112] font-mono text-xs uppercase tracking-wider hover:bg-[#111112] hover:text-[#FAF9F6] transition-colors"
            >
              <span>Download Resume (PDF)</span>
              <span aria-hidden="true">&darr;</span>
            </a>

            {/* Ask Aamna in mobile menu */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("open-ask-aamna"));
                }
              }}
              className="w-full flex items-center justify-between px-4 py-3 border border-[#D45A2A] bg-[#FAF9F6] text-[#111112] font-mono text-xs uppercase tracking-wider hover:bg-[#D45A2A] hover:text-[#FAF9F6] transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#D45A2A]">&gt;_</span>
                <span>ASK AAMNA</span>
              </div>
              <span className="text-[10px] text-[#4A4944]">Portfolio Guide &rarr;</span>
            </button>

            {/* Social channels in mobile menu */}
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#111112]">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D45A2A] transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D45A2A] transition-colors"
              >
                LinkedIn ↗
              </a>
              <ObfuscatedEmail
                className="hover:text-[#D45A2A] transition-colors"
                label="Email ↗"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
