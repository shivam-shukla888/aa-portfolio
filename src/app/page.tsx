import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { skillTiers } from "@/data/skills";
import { educationList } from "@/data/education";
import { technicalTraining } from "@/data/training";
import { achievements } from "@/data/achievements";
import { extracurricularList } from "@/data/extracurricular";
import { strengths } from "@/data/strengths";
import { PageBackground } from "@/components/PageBackground";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";


export default function HomePage() {
  return (
    <div className="w-full">
      {/* ═══════════════════════════════════════════════
          1. HERO SECTION (Fresher AI/ML Engineer Positioning)
      ═══════════════════════════════════════════════ */}
      <section className="relative border-b border-[#E6E3DC] pt-10 sm:pt-16 pb-14 sm:pb-20 bg-[#FAF9F6] overflow-hidden">
        <PageBackground variant="home" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="pt-4 pb-6 sm:pb-10 max-w-[820px]">

            {/* Discipline Eyebrow */}
            <div className="font-mono text-xs uppercase tracking-widest text-[#6E6D68] mb-8 sm:mb-10">
              Machine Learning &amp; Software
            </div>

            {/* Identity Lockup: small portrait inline-left of name */}
            <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-7">
              {/*
                Portrait: ~80×80px on desktop, ~64px on mobile.
                Uses a controlled square crop (object-cover, center 10%)
                to frame face + shoulders from the 1625×1250 landscape source.
                Hairline border only — no shadow, no rounded-full, no frame.
              */}
              <div
                className="
                  flex-shrink-0
                  w-[64px] h-[64px]
                  sm:w-[80px] sm:h-[80px]
                  border border-[#E6E3DC]
                  overflow-hidden
                  bg-[#F4F2EC]
                "
              >
                <Image
                  src="/aamna.jpeg"
                  alt="Syyeda Aamna"
                  width={80}
                  height={80}
                  priority
                  sizes="(max-width: 640px) 64px, 80px"
                  className="w-full h-full object-cover select-none"
                  style={{ objectPosition: "center 10%" }}
                />
              </div>

              {/* Display Headline */}
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.25rem] tracking-tight text-[#111112] font-normal leading-[0.96]">
                {profile.name}
              </h1>
            </div>

            {/* Primary Value Proposition */}
            <p className="font-display text-xl sm:text-2xl text-[#111112] leading-snug max-w-2xl">
              {profile.positioningStatement}
            </p>

            {/* Secondary Supporting Line */}
            <p className="mt-3 font-sans text-sm sm:text-base text-[#6E6D68] leading-relaxed max-w-2xl">
              {profile.secondaryStatement}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3.5 items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#D45A2A] text-[#FAF9F6] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#b8471c] transition-colors focus-visible:outline-2 focus-visible:outline-[#111112]"
              >
                <span>View Projects</span>
              </a>

              <a
                href="/Syyeda_Aamna_Resume.pdf"
                download="Syyeda_Aamna_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#111112] bg-[#FAF9F6] text-[#111112] font-mono text-xs uppercase tracking-wider hover:bg-[#111112] hover:text-[#FAF9F6] transition-colors focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
                aria-label="Download Resume (PDF)"
              >
                <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span>Download Resume</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-[#E6E3DC] text-[#111112] font-mono text-xs uppercase tracking-wider hover:bg-[#F4F2EC] transition-colors focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
              >
                <span>Contact</span>
              </Link>
            </div>

            {/* Channels in Hero */}
            <div className="mt-8 flex items-center gap-4 text-xs font-mono text-[#111112]">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#D45A2A] transition-colors focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#D45A2A] transition-colors focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <ObfuscatedEmail
                className="inline-flex items-center gap-1.5 hover:text-[#D45A2A] transition-colors focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
                showIcon={true}
                label="Email"
              />
            </div>

            {/* Location */}
            <div className="mt-8 pt-6 border-t border-[#E6E3DC] font-mono text-xs text-[#6E6D68]">
              <span className="uppercase tracking-wider">{profile.location}</span>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. PROJECTS SECTION
      ═══════════════════════════════════════════════ */}
      <section id="projects" className="py-16 sm:py-24 border-b border-[#E6E3DC] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 pb-4 border-b border-[#E6E3DC] gap-4">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#111112] tracking-tight">
                Projects
              </h2>
              <p className="mt-2 font-sans text-sm sm:text-base text-[#6E6D68] max-w-2xl leading-relaxed">
                Machine learning pipelines, Retrieval-Augmented Generation workflows, and exploratory statistical analyses with public source repositories.
              </p>
            </div>
            <Link
              href="/projects"
              className="font-mono text-xs uppercase tracking-wider text-[#D45A2A] hover:text-[#111112] inline-flex items-center font-semibold shrink-0 focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
            >
              <span>View All Projects</span>
            </Link>
          </div>

          {/* Deduplicated 3-Project Grid (Requirement 3) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="bg-[#FAF9F6] border border-[#E6E3DC] hover:border-[#111112] transition-colors flex flex-col justify-between group"
              >
                <div>
                  {/* Real Project Image with Next/Image (Requirement 12) */}
                  {project.architectureDiagram && (
                    <div className="border-b border-[#E6E3DC] bg-[#F4F2EC] p-3 aspect-16/10 relative flex items-center justify-center overflow-hidden">
                      <Image
                        src={project.architectureDiagram.src}
                        alt={project.architectureDiagram.alt}
                        width={640}
                        height={360}
                        className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-6 sm:p-7">
                    {/* Category */}
                    <div className="font-mono text-[11px] uppercase tracking-wider text-[#D45A2A] pb-3 border-b border-[#E6E3DC] mb-4">
                      {project.category}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl font-semibold text-[#111112] group-hover:text-[#D45A2A] transition-colors leading-snug">
                      <Link href={`/projects/${project.slug}`} className="focus-visible:outline-2 focus-visible:outline-[#D45A2A]">
                        {project.title}
                      </Link>
                    </h3>

                    {/* Problem */}
                    <div className="mt-3 pt-3 border-t border-[#E6E3DC]">
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-[#6E6D68] font-semibold">
                        Problem
                      </span>
                      <p className="mt-1 font-sans text-xs sm:text-sm text-[#111112] leading-relaxed">
                        {project.oneLineProblem}
                      </p>
                    </div>

                    {/* Outcomes */}
                    <div className="mt-4 pt-3 border-t border-[#E6E3DC]">
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-[#6E6D68] font-semibold mb-2">
                        Key Outcomes
                      </span>
                      <ul className="space-y-1.5 font-sans text-xs text-[#6E6D68] leading-relaxed">
                        {project.outcomeBullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#D45A2A] font-mono text-xs mt-0.5 shrink-0">&bull;</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Tech Tags & Action Buttons */}
                <div className="px-6 sm:px-7 pb-6 pt-0">
                  {/* Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 py-3 border-t border-[#E6E3DC]">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] px-2 py-0.5 bg-[#F4F2EC] border border-[#E6E3DC] text-[#111112]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="pt-3 border-t border-[#E6E3DC] flex flex-wrap items-center gap-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="px-3.5 py-1.5 bg-[#111112] text-[#FAF9F6] font-mono text-xs uppercase tracking-wider hover:bg-[#D45A2A] transition-colors focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
                    >
                      Case Study
                    </Link>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 border border-[#111112] text-[#111112] font-mono text-xs uppercase tracking-wider hover:bg-[#F4F2EC] transition-colors focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
                    >
                      GitHub
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 border border-[#D45A2A] text-[#D45A2A] font-mono text-xs uppercase tracking-wider hover:bg-[#D45A2A] hover:text-[#FAF9F6] transition-colors focus-visible:outline-2 focus-visible:outline-[#111112]"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. EXPERIENCE & SKILLS
      ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 border-b border-[#E6E3DC] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: EXPERIENCE */}
            <div className="lg:col-span-6">
              <div className="mb-8 pb-3 border-b border-[#E6E3DC]">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111112] tracking-tight">
                  Experience
                </h2>
                <p className="mt-2 font-sans text-xs sm:text-sm text-[#6E6D68]">
                  Professional positions, internships, and engineering responsibilities.
                </p>
              </div>

              {/* Vertical Timeline */}
              <div className="relative border-l border-[#E6E3DC] pl-6 ml-2 space-y-8">
                {experiences.map((exp) => (
                  <div key={exp.id} className="relative">
                    <span
                      className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#D45A2A] border-2 border-[#FAF9F6]"
                      aria-hidden="true"
                    />

                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h3 className="font-sans text-sm sm:text-base font-semibold text-[#111112]">
                        {exp.role}
                      </h3>
                      <span className="font-mono text-xs text-[#6E6D68] shrink-0">
                        {exp.period}
                      </span>
                    </div>

                    <div className="font-sans text-xs text-[#D45A2A] font-medium mt-0.5">
                      {exp.company} &mdash; <span className="text-[#6E6D68]">{exp.location}</span>
                    </div>

                    <ul className="mt-2.5 space-y-1.5 font-sans text-xs sm:text-sm text-[#111112] leading-relaxed">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#D45A2A] font-mono text-xs" aria-hidden="true">&bull;</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-[#E6E3DC]">
                <Link
                  href="/experience"
                  className="font-mono text-xs uppercase tracking-wider text-[#D45A2A] hover:text-[#111112] inline-flex items-center font-semibold focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
                >
                  <span>View Experience Timeline</span>
                </Link>
              </div>
            </div>

            {/* Right Column: SKILLS */}
            <div className="lg:col-span-6">
              <div className="mb-8 pb-3 border-b border-[#E6E3DC]">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111112] tracking-tight">
                  Skills
                </h2>
                <p className="mt-2 font-sans text-xs sm:text-sm text-[#6E6D68]">
                  Technical competencies categorized by practical verification.
                </p>
              </div>

              {/* Tiered Skills Layout */}
              <div className="space-y-6">
                {skillTiers.map((tier) => (
                  <div key={tier.tier} className="p-5 bg-[#F4F2EC] border border-[#E6E3DC]">
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#E6E3DC]">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#D45A2A] font-bold">
                        {tier.title}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-[#6E6D68] mb-3 leading-relaxed">
                      {tier.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {tier.skills.map((skill) =>
                        skill.evidenceProjectSlug ? (
                          <Link
                            key={skill.name}
                            href={`/projects/${skill.evidenceProjectSlug}`}
                            title={`View project using ${skill.name}: ${skill.evidenceProjectTitle}`}
                            className="font-mono text-xs px-2.5 py-1 bg-[#FAF9F6] border border-[#111112] text-[#111112] hover:bg-[#111112] hover:text-[#FAF9F6] transition-colors inline-flex items-center focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
                          >
                            <span>{skill.name}</span>
                          </Link>
                        ) : (
                          <span
                            key={skill.name}
                            title={skill.contextNote}
                            className="font-mono text-xs px-2.5 py-1 bg-[#FAF9F6] border border-[#E6E3DC] text-[#111112]"
                          >
                            {skill.name}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. EDUCATION & INSTITUTIONAL TRAINING
      ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 border-b border-[#E6E3DC] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Education */}
            <div className="lg:col-span-6">
              <div className="mb-8 pb-3 border-b border-[#E6E3DC]">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111112] tracking-tight">
                  Education
                </h2>
                <p className="mt-2 font-sans text-xs sm:text-sm text-[#6E6D68]">
                  Formal academic degrees and qualifications.
                </p>
              </div>

              <div className="space-y-4">
                {educationList.map((edu) => (
                  <div key={edu.id} className="p-6 bg-[#F4F2EC] border border-[#E6E3DC]">
                    <div className="flex items-center justify-between font-mono text-xs text-[#6E6D68]">
                      <span>{edu.period}</span>
                      {edu.boardOrUniversity && (
                        <span>Board: {edu.boardOrUniversity}</span>
                      )}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-[#111112] mt-1.5">
                      {edu.degree}
                    </h3>
                    <div className="font-sans text-xs text-[#111112] mt-1">
                      {edu.institution}, {edu.location}
                    </div>
                    {edu.gradePlaceholder && (
                      <div className="mt-2.5 font-mono text-xs text-[#D45A2A] font-semibold bg-[#FAF9F6] border border-[#E6E3DC] px-2.5 py-1 inline-block">
                        {edu.gradePlaceholder}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Training */}
            <div className="lg:col-span-6">
              <div className="mb-8 pb-3 border-b border-[#E6E3DC]">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111112] tracking-tight">
                  Technical Training
                </h2>
                <p className="mt-2 font-sans text-xs sm:text-sm text-[#6E6D68]">
                  Structured computational and institutional programs.
                </p>
              </div>

              <div className="space-y-4">
                {technicalTraining.map((tr) => (
                  <div key={tr.id} className="p-6 bg-[#F4F2EC] border border-[#E6E3DC]">
                    <div className="flex items-center justify-between font-mono text-xs text-[#6E6D68]">
                      <span>{tr.type} &bull; {tr.year}</span>
                      <span className="text-[#D45A2A] font-semibold">{tr.institution}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-[#111112] mt-1.5">
                      {tr.title}
                    </h3>
                    <p className="mt-2 text-xs font-sans text-[#6E6D68] leading-relaxed">
                      {tr.description}
                    </p>
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {tr.skillsCovered.map((s) => (
                        <span
                          key={s}
                          className="font-mono text-[10px] px-2 py-0.5 bg-[#FAF9F6] border border-[#E6E3DC] text-[#111112]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. ACHIEVEMENTS, EXTRACURRICULAR & STRENGTHS
      ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 border-b border-[#E6E3DC] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Achievements Summary */}
            <div className="p-6 bg-[#F4F2EC] border border-[#E6E3DC]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold">
                Achievements
              </span>
              <h3 className="font-display text-xl font-semibold text-[#111112] mt-2">
                LeetCode
              </h3>
              {achievements.map((item) => (
                <div key={item.id} className="mt-2">
                  <p className="text-xs sm:text-sm text-[#111112] leading-relaxed">
                    {item.title}
                  </p>
                  {item.link && (
                    <div className="mt-4">
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

            {/* Extracurricular Summary */}
            <div className="p-6 bg-[#F4F2EC] border border-[#E6E3DC]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold">
                Extracurricular
              </span>
              <h3 className="font-display text-xl font-semibold text-[#111112] mt-2">
                Campus Leadership
              </h3>
              <ul className="mt-2 space-y-2 text-xs sm:text-sm text-[#111112] leading-relaxed">
                {extracurricularList.map((item) => (
                  <li key={item.id}>
                    &bull; {item.role}, {item.organizationOrEvent}
                  </li>
                ))}
              </ul>
            </div>

            {/* Strengths Summary */}
            <div className="p-6 bg-[#F4F2EC] border border-[#E6E3DC]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold">
                Strengths
              </span>
              <h3 className="font-display text-xl font-semibold text-[#111112] mt-2">
                Core Competencies
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {strengths.map((str) => (
                  <span
                    key={str}
                    className="font-mono text-xs px-2.5 py-1 bg-[#FAF9F6] border border-[#E6E3DC] text-[#111112]"
                  >
                    {str}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          6. CONTACT
      ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#121214] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-tight text-[#FAF9F6]">
                Contact
              </h2>
              <p className="mt-4 font-sans text-sm text-[#A5A49D] max-w-xl leading-relaxed">
                For work, collaboration, or questions, get in touch.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <ObfuscatedEmail
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#D45A2A] text-[#FAF9F6] font-mono text-xs uppercase tracking-widest hover:bg-[#b8471c] transition-colors focus-visible:outline-2 focus-visible:outline-[#FAF9F6]"
                label="Send Email"
              />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-[#3A3A40] text-[#FAF9F6] font-mono text-xs uppercase tracking-widest hover:bg-[#1A1A1E] transition-colors focus-visible:outline-2 focus-visible:outline-[#FAF9F6]"
              >
                View Contact Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
