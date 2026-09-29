"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { mainNavItems } from "@/data/navigation";
import { profile } from "@/data/profile";

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
            className="group flex flex-col focus-visible:outline-none"
            aria-label="Syyeda Aamna — Home"
          >
            <span className="font-display text-xl sm:text-2xl tracking-tight text-[#111112] font-semibold group-hover:text-[#D45A2A] transition-colors">
              {profile.name}
            </span>
            <span className="font-mono text-[10px] tracking-widest text-[#6E6D68] uppercase -mt-0.5">
              {profile.displayTitle}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8"
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
                  className={`font-mono text-xs uppercase tracking-widest py-1.5 transition-all relative ${
                    isActive
                      ? "text-[#111112] font-semibold"
                      : "text-[#6E6D68] hover:text-[#111112]"
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

          {/* Action & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("open-ask-aamna"));
                }
              }}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#D45A2A] bg-transparent text-[#111112] font-mono text-xs uppercase tracking-wider hover:bg-[#D45A2A] hover:text-[#FAF9F6] transition-colors group cursor-pointer"
              aria-label="Open Ask Aamna portfolio assistant"
            >
              <span className="font-bold text-[#D45A2A] group-hover:text-[#FAF9F6]">&gt;_</span>
              <span>ASK AAMNA</span>
              <span className="w-1.5 h-1.5 bg-[#D45A2A] group-hover:bg-[#FAF9F6]" aria-hidden="true" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 text-[#111112] hover:text-[#D45A2A] focus:outline-none"
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
          className="fixed inset-0 top-16 z-50 bg-[#FAF9F6] md:hidden flex flex-col border-t border-[#E6E3DC] px-6 py-8 overflow-y-auto animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="font-mono text-[11px] uppercase tracking-widest text-[#6E6D68] mb-6">
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
                    <span className="font-mono text-xs text-[#6E6D68]">
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
                    <span className="font-mono text-[11px] text-[#6E6D68]">
                      {item.description}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-[#E6E3DC] flex flex-col space-y-4">
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
              <span className="text-[10px] text-[#6E6D68]">Portfolio Guide &rarr;</span>
            </button>

            <div className="font-mono text-xs text-[#6E6D68] space-y-2">
              <div className="text-[10px] uppercase tracking-wider">Direct Channel</div>
              <a
                href={`mailto:${profile.email}`}
                className="text-[#111112] hover:text-[#D45A2A] break-all block"
              >
                {profile.email}
              </a>
              <div className="text-[#6E6D68]">{profile.location}</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
