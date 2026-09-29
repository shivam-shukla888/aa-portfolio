import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";
import { educationList } from "@/data/education";
import { verifiedTraining } from "@/data/training";

export const metadata: Metadata = {
  title: "About",
  description:
    "Professional background, technical focus, and verified educational credentials of Syyeda Aamna.",
};

export default function AboutPage() {
  return (
    <div className="w-full py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="border-b border-[#111112] pb-8 mb-16">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D45A2A] mb-3">
            <span>01 &mdash; Profile Dossier</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight text-[#111112]">
            About Syyeda Aamna
          </h1>
          <p className="mt-4 font-mono text-xs sm:text-sm uppercase tracking-widest text-[#6E6D68]">
            {profile.displayTitle} &bull; {profile.location}
          </p>
        </div>

        {/* Section 1: Professional Summary */}
        <section className="mb-20">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold mb-4">
            01 / Professional Positioning
          </h2>
          <div className="p-8 bg-[#F4F2EC] border border-[#E6E3DC]">
            <p className="font-display text-2xl sm:text-3xl text-[#111112] leading-relaxed">
              {profile.positioningStatement}
            </p>
            <p className="mt-6 font-sans text-sm text-[#6E6D68] leading-relaxed">
              {profile.shortBio}
            </p>
          </div>
        </section>

        {/* Section 2: Technical Focus */}
        <section className="mb-20">
          <h2 className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#D45A2A]">
            02 / Core Technical Domains
          </h2>
          <div className="border-y border-[#E6E3DC]">
            {profile.focusAreas.map((area, idx) => (
              <div
                key={area}
                className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-[#E6E3DC] py-4 last:border-b-0"
              >
                <span className="font-mono text-xs text-[#6E6D68]">
                  0{idx + 1}
                </span>
                <span className="font-sans text-sm text-[#111112]">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Verified Academic Foundation */}
        <section className="mb-20">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold mb-4">
            03 / Education
          </h2>
          <div className="divide-y divide-[#E6E3DC] border-t border-b border-[#E6E3DC]">
            {educationList.map((edu) => (
              <div key={edu.id} className="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#111112]">
                    {edu.degree}
                  </h3>
                  <div className="font-sans text-sm text-[#6E6D68] mt-1">
                    {edu.institution}, {edu.location}
                    {edu.boardOrUniversity && ` (${edu.boardOrUniversity})`}
                  </div>
                </div>
                <div className="font-mono text-xs text-[#111112] shrink-0 font-medium">
                  {edu.period}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Verified Summer Training */}
        <section className="mb-20">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold mb-4">
            04 / Institutional Training
          </h2>
          <div className="p-8 bg-[#F4F2EC] border border-[#E6E3DC]">
            {verifiedTraining.map((tr) => (
              <div key={tr.id}>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#E6E3DC] pb-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#111112]">
                      {tr.title} &bull; {tr.institution}
                    </h3>
                    <div className="font-mono text-xs text-[#D45A2A] mt-1">
                      {tr.type}
                    </div>
                  </div>
                  <div className="font-mono text-xs text-[#111112]">
                    {tr.year}
                  </div>
                </div>

                <p className="font-sans text-sm text-[#6E6D68] leading-relaxed mb-6">
                  {tr.description}
                </p>

                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-[#111112] font-semibold mb-2">
                    Curriculum Competencies Verified:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {tr.skillsCovered.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-xs px-2.5 py-1 bg-[#FAF9F6] border border-[#E6E3DC] text-[#111112]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Current Engagement & Next Steps */}
        <section className="p-8 bg-[#121214] text-[#FAF9F6]">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold mb-2">
            05 / Current Status
          </h2>
          <h3 className="font-display text-2xl font-semibold text-[#FAF9F6]">
            Active Engagement at Indraprastha Apollo Hospitals
          </h3>
          <p className="mt-3 font-sans text-sm text-[#A5A49D] leading-relaxed max-w-2xl">
            Currently working on Python and AI/ML-based solutions for real-world applications and data-driven workflows, alongside software development using C# and .NET.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/experience"
              className="inline-flex items-center px-5 py-2.5 bg-[#FAF9F6] text-[#111112] font-mono text-xs uppercase tracking-widest hover:bg-[#D45A2A] hover:text-[#FAF9F6] transition-colors"
            >
              Examine Experience Timeline
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 border border-[#3A3A40] text-[#FAF9F6] font-mono text-xs uppercase tracking-widest hover:bg-[#1A1A1E] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
