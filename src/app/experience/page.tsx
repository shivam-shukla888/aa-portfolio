import type { Metadata } from "next";
import Link from "next/link";
import { experiences } from "@/data/experience";
import { skillTiers } from "@/data/skills";
import { educationList } from "@/data/education";
import { technicalTraining } from "@/data/training";
import { achievements } from "@/data/achievements";
import { extracurricularList } from "@/data/extracurricular";
import { strengths } from "@/data/strengths";
import { profile } from "@/data/profile";
import { PageBackground } from "@/components/PageBackground";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional trajectory, technical competencies, and academic background of Syyeda Aamna — Entry-Level AI/ML Engineer.",
};

export default function ExperiencePage() {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="relative min-h-[480px] lg:min-h-[520px] border-b border-[#E6E3DC] bg-[#FAF9F6] py-14 sm:py-20 overflow-hidden">
        <PageBackground variant="experience" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl">
            <div className="font-mono text-xs uppercase tracking-widest text-[#6E6D68] mb-3 font-semibold">
              Professional Background
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-normal tracking-tight text-[#111112]">
              Experience
            </h1>
            <p className="mt-4 font-display text-xl sm:text-2xl text-[#111112] leading-snug">
              Professional positions, internships, and technical competencies.
            </p>
            <p className="mt-3 font-sans text-sm text-[#6E6D68] leading-relaxed">
              Engineering responsibilities across applied machine learning, data processing workflows, and backend software development.
            </p>

            <div className="mt-8 pt-4 border-t border-[#E6E3DC] font-mono text-xs text-[#111112]">
              <span>{profile.location}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. EXPERIENCE */}
        <section className="py-16 sm:py-20 border-b border-[#E6E3DC]">
          <div className="mb-10 sm:mb-12">
            <h2 className="font-display text-5xl sm:text-6xl font-normal text-[#111112] tracking-tight">
              Experience
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-[#6E6D68]">
              Professional positions, internships, and engineering responsibilities.
            </p>
          </div>

          <div className="space-y-10">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="p-5 sm:p-8 lg:p-10 bg-[#F4F2EC] border border-[#E6E3DC] hover:border-[#111112] transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Meta column */}
                  <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#E6E3DC] pb-6 lg:pb-0 lg:pr-8">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold">
                      {exp.type}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#111112] mt-3">
                      {exp.company}
                    </h3>
                    <div className="font-mono text-sm text-[#111112] font-medium mt-1">
                      {exp.role}
                    </div>
                    <div className="mt-4 space-y-1 font-mono text-xs text-[#6E6D68]">
                      <div>{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-[#E6E3DC]">
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-[#6E6D68] mb-2 font-semibold">
                        Technologies
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[11px] px-2 py-0.5 bg-[#FAF9F6] border border-[#E6E3DC] text-[#111112]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities column */}
                  <div className="lg:col-span-7">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-[#6E6D68] mb-4 font-semibold">
                      Responsibilities
                    </h4>
                    <ul className="space-y-3.5 font-sans text-sm sm:text-base text-[#111112] leading-relaxed break-words">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-[#D45A2A] font-mono text-xs mt-1 shrink-0">
                            &bull;
                          </span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. SKILLS */}
        <section className="py-16 sm:py-20 border-b border-[#E6E3DC]">
          <div className="mb-10 sm:mb-12">
            <h2 className="font-display text-5xl sm:text-6xl font-normal text-[#111112] tracking-tight">
              Skills
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-[#6E6D68]">
              Grouped by practical evidence: Strong, Working, and Familiar.
            </p>
          </div>

          <div className="space-y-8">
            {skillTiers.map((tier) => (
              <div
                key={tier.tier}
                className="p-5 sm:p-8 bg-[#F4F2EC] border border-[#E6E3DC] hover:border-[#111112] transition-colors"
              >
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E6E3DC]">
                  <h3 className="font-mono text-sm uppercase tracking-widest text-[#D45A2A] font-bold">
                    {tier.title}
                  </h3>
                </div>
                <p className="font-sans text-xs text-[#6E6D68] mb-5 leading-relaxed">
                  {tier.description}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {tier.skills.map((skill) =>
                    skill.evidenceProjectSlug ? (
                      <Link
                        key={skill.name}
                        href={`/projects/${skill.evidenceProjectSlug}`}
                        title={`Project: ${skill.evidenceProjectTitle}`}
                        className="font-mono text-xs px-3 py-1.5 bg-[#FAF9F6] border border-[#111112] text-[#111112] hover:bg-[#111112] hover:text-[#FAF9F6] transition-colors inline-flex items-center focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
                      >
                        <span className="font-semibold">{skill.name}</span>
                      </Link>
                    ) : (
                      <span
                        key={skill.name}
                        title={skill.contextNote}
                        className="font-mono text-xs px-3 py-1.5 bg-[#FAF9F6] border border-[#E6E3DC] text-[#111112]"
                      >
                        {skill.name}
                      </span>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. EDUCATION */}
        <section className="py-16 sm:py-20 border-b border-[#E6E3DC]">
          <div className="mb-10 sm:mb-12">
            <h2 className="font-display text-5xl sm:text-6xl font-normal text-[#111112] tracking-tight">
              Education
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-[#6E6D68]">
              Formal academic degrees and qualifications.
            </p>
          </div>

          <div className="space-y-6">
            {educationList.map((edu) => (
              <div
                key={edu.id}
                className="p-5 sm:p-8 bg-[#F4F2EC] border border-[#E6E3DC] hover:border-[#111112] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#111112]">
                      {edu.degree}
                    </h3>
                    <div className="mt-2 font-mono text-xs text-[#6E6D68]">{edu.institution}</div>
                    <div className="font-mono text-xs text-[#6E6D68]">{edu.location}</div>
                    {edu.boardOrUniversity && (
                      <div className="mt-1 font-mono text-[10px] text-[#6E6D68] uppercase tracking-wider">
                        Board: {edu.boardOrUniversity}
                      </div>
                    )}
                    {edu.gradePlaceholder && (
                      <div className="mt-3 font-mono text-xs text-[#D45A2A] font-semibold bg-[#FAF9F6] border border-[#E6E3DC] px-2.5 py-1 inline-block">
                        {edu.gradePlaceholder}
                      </div>
                    )}
                  </div>
                  <div className="shrink-0 font-mono text-xs text-[#6E6D68] sm:text-right">
                    {edu.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. TECHNICAL TRAINING */}
        <section className="py-16 sm:py-20 border-b border-[#E6E3DC]">
          <div className="mb-10 sm:mb-12">
            <h2 className="font-display text-5xl sm:text-6xl font-normal text-[#111112] tracking-tight">
              Technical Training
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-[#6E6D68]">
              Structured institutional workshops and computational programs.
            </p>
          </div>

          <div className="space-y-6">
            {technicalTraining.map((item) => (
              <div
                key={item.id}
                className="p-5 sm:p-8 bg-[#F4F2EC] border border-[#E6E3DC] hover:border-[#111112] transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#E6E3DC] pb-6 lg:pb-0 lg:pr-8">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#D45A2A] font-semibold">
                      {item.type}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#111112] mt-2">
                      {item.title}
                    </h3>
                    <div className="mt-2 font-mono text-xs text-[#6E6D68]">{item.institution}</div>
                    <div className="font-mono text-xs text-[#6E6D68]">{item.year}</div>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="font-sans text-sm text-[#111112] leading-relaxed mb-5">
                      {item.description}
                    </p>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-[#6E6D68] mb-2 font-semibold">
                      Curriculum Competencies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.skillsCovered.map((s) => (
                        <span
                          key={s}
                          className="font-mono text-[11px] px-2 py-0.5 bg-[#FAF9F6] border border-[#E6E3DC] text-[#111112]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. ACHIEVEMENTS */}
        <section className="py-16 sm:py-20 border-b border-[#E6E3DC]">
          <div className="mb-10 sm:mb-12">
            <h2 className="font-display text-5xl sm:text-6xl font-normal text-[#111112] tracking-tight">
              Achievements
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-[#6E6D68]">
              Milestones in algorithmic problem solving and technical proficiency.
            </p>
          </div>

          <div className="space-y-6">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="p-5 sm:p-8 bg-[#F4F2EC] border border-[#E6E3DC] hover:border-[#111112] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#111112]">
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
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. EXTRACURRICULAR */}
        <section className="py-16 sm:py-20 border-b border-[#E6E3DC]">
          <div className="mb-10 sm:mb-12">
            <h2 className="font-display text-5xl sm:text-6xl font-normal text-[#111112] tracking-tight">
              Extracurricular
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-[#6E6D68]">
              Campus leadership, cultural club management, and event organization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {extracurricularList.map((item) => (
              <div
                key={item.id}
                className="p-5 sm:p-8 bg-[#F4F2EC] border border-[#E6E3DC] hover:border-[#111112] transition-colors"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold">
                  {item.role}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#111112] mt-2">
                  {item.organizationOrEvent}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* 7. STRENGTHS */}
        <section className="py-16 sm:py-20">
          <div className="mb-10 sm:mb-12">
            <h2 className="font-display text-5xl sm:text-6xl font-normal text-[#111112] tracking-tight">
              Strengths
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-[#6E6D68]">
              Core professional, behavioral, and organizational strengths.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {strengths.map((str) => (
              <div
                key={str}
                className="p-6 sm:p-8 bg-[#F4F2EC] border border-[#E6E3DC] hover:border-[#111112] transition-colors"
              >
                <div className="font-display text-xl sm:text-2xl font-semibold text-[#111112]">
                  {str}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact footer */}
        <div className="mb-16 p-8 bg-[#FAF9F6] border border-[#111112] flex flex-col sm:flex-row items-baseline justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-semibold text-[#111112]">
              Interested in discussing engineering roles or reviewing code?
            </h3>
            <p className="mt-1 font-sans text-xs text-[#6E6D68]">
              For work, collaboration, or questions, get in touch.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 bg-[#111112] text-[#FAF9F6] font-mono text-xs uppercase tracking-wider hover:bg-[#D45A2A] transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
