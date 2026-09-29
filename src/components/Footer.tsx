import Link from "next/link";
import { profile } from "@/data/profile";
import { footerLinks } from "@/data/navigation";
import { ObfuscatedEmail } from "./ObfuscatedEmail";

export function Footer() {
  return (
    <footer className="border-t border-[#E6E3DC] bg-[#F4F2EC] text-[#111112] pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#E6E3DC]">
          {/* Column 1: Identity & Description */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block group focus-visible:outline-2 focus-visible:outline-[#D45A2A]">
                <span className="font-display text-2xl font-semibold tracking-tight text-[#111112] group-hover:text-[#D45A2A] transition-colors">
                  {profile.name}
                </span>
                <span className="block font-mono text-[11px] uppercase tracking-widest text-[#4A4944] mt-1">
                  {profile.displayTitle}
                </span>
              </Link>
              <p className="mt-4 text-sm text-[#4A4944] font-sans max-w-sm leading-relaxed">
                {profile.positioningStatement}
              </p>
            </div>

            <div className="mt-8 font-mono text-xs text-[#4A4944]">
              <div>Location: {profile.location}</div>
              <div className="mt-1">Status: Open to Entry-Level AI/ML roles</div>
            </div>
          </div>

          {/* Column 2: Navigation Directory */}
          <div className="md:col-span-3">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#111112] font-semibold mb-4">
              Navigation
            </h2>
            <ul className="space-y-2.5 font-sans text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#4A4944] hover:text-[#D45A2A] transition-colors focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Channels */}
          <div className="md:col-span-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#111112] font-semibold mb-4">
              Connect
            </h2>
            <ul className="space-y-3 font-mono text-xs">
              <li>
                <span className="text-[#4A4944] block text-[10px] uppercase tracking-wider">
                  Email
                </span>
                <ObfuscatedEmail
                  className="text-[#111112] hover:text-[#D45A2A] transition-colors break-all"
                  showAddress={true}
                />
              </li>
              <li>
                <span className="text-[#4A4944] block text-[10px] uppercase tracking-wider">
                  LinkedIn
                </span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111112] hover:text-[#D45A2A] transition-colors inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
                >
                  linkedin.com/in/syyedaaamna
                  <svg className="w-3 h-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </li>
              <li>
                <span className="text-[#4A4944] block text-[10px] uppercase tracking-wider">
                  GitHub
                </span>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111112] hover:text-[#D45A2A] transition-colors inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
                >
                  github.com/Syyeda-Aamna
                  <svg className="w-3 h-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar (Requirement 10: © 2026 Syyeda Aamna) */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-[#4A4944] gap-4">
          <div>&copy; 2026 Syyeda Aamna</div>
          <div className="flex items-center space-x-4">
            <a
              href="/Syyeda_Aamna_Resume.pdf"
              download="Syyeda_Aamna_Resume.pdf"
              className="hover:text-[#111112] transition-colors underline underline-offset-2"
            >
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
