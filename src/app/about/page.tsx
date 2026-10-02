import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";
import { educationList } from "@/data/education";
import { technicalTraining } from "@/data/training";
import { achievements } from "@/data/achievements";
import { extracurricularList } from "@/data/extracurricular";
import { strengths } from "@/data/strengths";
import { PageBackground } from "@/components/PageBackground";

export const metadata: Metadata = {
  title: "About",
  description:
    "Professional background, technical focus, and educational qualifications of Syyeda Aamna — Machine Learning & Software Engineer.",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="relative min-h-[480px] lg:min-h-[520px] border-b border-[#E6E3DC] bg-[#FAF9F6] py-14 sm:py-20 overflow-hidden">
        <PageBackground variant="about" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl">
            <div className="font-mono text-xs uppercase tracking-widest text-[#6E6D68] mb-3 font-semibold">
              Profile &amp; Background
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-normal tracking-tight text-[#111112]">
              About
            </h1>
            <p className="mt-4 font-display text-xl sm:text-2xl text-[#111112] leading-snug">
              Applied machine learning focus, academic foundations, and engineering background.
            </p>
            <p className="mt-3 font-mono text-xs sm:text-sm text-[#6E6D68]">
              {profile.displayTitle} &mdash; {profile.location}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Section 1: Background */}
        <section className="mb-20">
          <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#111112] tracking-tight mb-6">
            Background
          </h2>
          <div className="p-8 bg-[#F4F2EC] border border-[#E6E3DC] space-y-4">
            <p className="font-display text-2xl sm:text-3xl text-[#111112] leading-relaxed">
              {profile.positioningStatement}
            </p>
            <p className="font-sans text-base text-[#6E6D68] leading-relaxed">
              {profile.secondaryStatement}
            </p>
            <p className="font-sans text-sm text-[#6E6D68] leading-relaxed">
              {profile.shortBio}
            </p>
          </div>
        </section>

        {/* Section 2: Technical Focus */}
        <section className="mb-20">
          <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#111112] tracking-tight mb-6">
            Technical Focus
          </h2>
          <div className="border-y border-[#E6E3DC]">
            {profile.focusAreas.map((area) => (
              <div
                key={area}
                className="py-4 border-b border-[#E6E3DC] last:border-b-0 font-sans text-sm text-[#111112]"
              >
                {area}
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Education */}
        <section className="mb-20">
          <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#111112] tracking-tight mb-6">
            Education
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
                  {edu.gradePlaceholder && (
                    <div className="mt-2 font-mono text-xs text-[#D45A2A] font-semibold">
                      {edu.gradePlaceholder}
                    </div>
                  )}
                </div>
                <div className="font-mono text-xs text-[#111112] shrink-0 font-medium">
                  {edu.period}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Technical Training */}
        <section className="mb-20">
          <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#111112] tracking-tight mb-6">
            Technical Training
          </h2>
          <div className="p-8 bg-[#F4F2EC] border border-[#E6E3DC]">
            {technicalTraining.map((tr) => (
              <div key={tr.id}>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#E6E3DC] pb-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#111112]">
                      {tr.title} &mdash; {tr.institution}
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
                    Curriculum Competencies
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

        {/* Section 5: Achievements */}
        <section className="mb-20">
          <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#111112] tracking-tight mb-6">
            Achievements
          </h2>
          <div className="p-8 bg-[#F4F2EC] border border-[#E6E3DC]">
            {achievements.map((item) => (
              <div key={item.id} className="space-y-2">
                <h3 className="font-display text-xl font-semibold text-[#111112]">
                  {item.title}
                </h3>
                {item.link && (
                  <div className="pt-1">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-[#D45A2A] hover:underline inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
                    >
                      <span>{item.linkText || item.link}</span>
                      <svg className="w-3 h-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Extracurricular */}
        <section className="mb-20">
          <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#111112] tracking-tight mb-6">
            Extracurricular
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {extracurricularList.map((item) => (
              <div
                key={item.id}
                className="p-6 bg-[#F4F2EC] border border-[#E6E3DC]"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold">
                  {item.role}
                </span>
                <h3 className="font-display text-lg font-semibold text-[#111112] mt-2">
                  {item.organizationOrEvent}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Strengths */}
        <section className="mb-20">
          <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#111112] tracking-tight mb-6">
            Strengths
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {strengths.map((str) => (
              <div
                key={str}
                className="p-6 bg-[#F4F2EC] border border-[#E6E3DC]"
              >
                <div className="font-display text-xl font-semibold text-[#111112]">
                  {str}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Current Work */}
        <section className="p-8 bg-[#121214] text-[#FAF9F6]">
          <h2 className="font-display text-2xl font-normal text-[#FAF9F6]">
            Current Work &mdash; Indraprastha Apollo Hospitals
          </h2>
          <p className="mt-3 font-sans text-sm text-[#A5A49D] leading-relaxed max-w-2xl">
            Developing data processing scripts and backend services using Python, SQL, and C#/.NET to automate internal clinical data workflows.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/experience"
              className="inline-flex items-center px-5 py-2.5 bg-[#FAF9F6] text-[#111112] font-mono text-xs uppercase tracking-widest hover:bg-[#D45A2A] hover:text-[#FAF9F6] transition-colors focus-visible:outline-2 focus-visible:outline-[#FAF9F6]"
            >
              View Experience
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 border border-[#3A3A40] text-[#FAF9F6] font-mono text-xs uppercase tracking-widest hover:bg-[#1A1A1E] transition-colors focus-visible:outline-2 focus-visible:outline-[#FAF9F6]"
            >
              Contact
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
