import Link from "next/link";
import { profile } from "@/data/profile";
import { footerLinks } from "@/data/navigation";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-[#E6E3DC] bg-[#F4F2EC] text-[#111112] pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#E6E3DC]">
          {/* Column 1: Identity & Description */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block group">
                <span className="font-display text-2xl font-semibold tracking-tight text-[#111112] group-hover:text-[#D45A2A] transition-colors">
                  {profile.name}
                </span>
                <span className="block font-mono text-[11px] uppercase tracking-widest text-[#6E6D68] mt-1">
                  {profile.displayTitle}
                </span>
              </Link>
              <p className="mt-4 text-sm text-[#6E6D68] font-sans max-w-sm leading-relaxed">
                {profile.positioningStatement}
              </p>
            </div>

            <div className="mt-8 font-mono text-xs text-[#6E6D68]">
              <div>Location: {profile.location}</div>
              <div className="mt-1">Status: Open to AI/ML & Software roles</div>
            </div>
          </div>

          {/* Column 2: Navigation Directory */}
          <div className="md:col-span-3">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#111112] font-semibold mb-4">
              Index
            </h2>
            <ul className="space-y-2.5 font-sans text-sm">
              {footerLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#6E6D68] hover:text-[#D45A2A] transition-colors"
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
              Verified Channels
            </h2>
            <ul className="space-y-3 font-mono text-xs">
              <li>
                <span className="text-[#6E6D68] block text-[10px] uppercase tracking-wider">
                  Email
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[#111112] hover:text-[#D45A2A] transition-colors break-all"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <span className="text-[#6E6D68] block text-[10px] uppercase tracking-wider">
                  LinkedIn
                </span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111112] hover:text-[#D45A2A] transition-colors inline-flex items-center gap-1"
                >
                  linkedin.com/in/syyedaaamna
                  <svg className="w-3 h-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </li>
              <li>
                <span className="text-[#6E6D68] block text-[10px] uppercase tracking-wider">
                  GitHub
                </span>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111112] hover:text-[#D45A2A] transition-colors inline-flex items-center gap-1"
                >
                  github.com/Syyeda-Aamna
                  <svg className="w-3 h-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-[#6E6D68] gap-4">
          <div>
            &copy; {currentYear} {profile.name}. Personal Portfolio. All verified facts reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-[#111112] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#111112] transition-colors">
              Terms
            </Link>
            <span className="text-[#A5A49D]">|</span>
            <span className="text-[#6E6D68]">Editorial Design System</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
