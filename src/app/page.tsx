import Link from "next/link";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { educationList } from "@/data/education";
import { verifiedTraining } from "@/data/training";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="border-b border-[#E6E3DC] pt-16 sm:pt-24 pb-16 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-[#6E6D68] mb-6">
            <span className="w-2 h-2 bg-[#D45A2A]" aria-hidden="true" />
            <span>Curated Portfolio &bull; 2026</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-baseline">
            <div className="lg:col-span-8">
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#111112] font-semibold leading-[0.95]">
                {profile.name}
              </h1>
              <p className="mt-6 font-mono text-sm sm:text-base uppercase tracking-widest text-[#D45A2A] font-medium">
                {profile.displayTitle}
              </p>
              <p className="mt-8 font-display text-2xl sm:text-3xl text-[#111112] italic font-normal max-w-3xl leading-snug">
                &ldquo;{profile.positioningStatement}&rdquo;
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#E6E3DC] pt-6 lg:pt-0 lg:pl-8 space-y-6">
              <div className="space-y-3 font-mono text-xs text-[#6E6D68]">
                <div className="flex justify-between border-b border-[#E6E3DC] pb-2">
                  <span className="uppercase tracking-wider">Location</span>
                  <span className="text-[#111112] text-right">Bareilly, UP, India</span>
                </div>
                <div className="flex justify-between border-b border-[#E6E3DC] pb-2">
                  <span className="uppercase tracking-wider">Current Role</span>
                  <span className="text-[#111112] text-right">Trainee &bull; Apollo Hospitals</span>
                </div>
                <div className="flex justify-between border-b border-[#E6E3DC] pb-2">
                  <span className="uppercase tracking-wider">Focus</span>
                  <span className="text-[#111112] text-right">AI / ML &amp; Software</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#111112] text-[#FAF9F6] font-mono text-xs uppercase tracking-widest hover:bg-[#D45A2A] transition-colors"
                >
                  View Work
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 py-3 border border-[#111112] text-[#111112] font-mono text-xs uppercase tracking-widest hover:bg-[#F4F2EC] transition-colors"
                >
                  About Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SELECTED WORK (EDITORIAL PRESENTATION) */}
      <section className="py-20 border-b border-[#E6E3DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-[#111112]">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold">
                01 &mdash; Portfolio Index
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#111112] font-semibold tracking-tight mt-1">
                Selected Work
              </h2>
            </div>
            <Link
              href="/projects"
              className="mt-4 sm:mt-0 font-mono text-xs uppercase tracking-wider text-[#6E6D68] hover:text-[#111112] inline-flex items-center gap-1 group"
            >
              All Project Case Studies
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          <div className="divide-y divide-[#E6E3DC] border-t border-b border-[#E6E3DC]">
            {projects.map((project) => (
              <article
                key={project.id}
                className="py-10 group hover:bg-[#F4F2EC]/60 transition-colors px-2 sm:px-4"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Number & Category */}
                  <div className="lg:col-span-3">
                    <span className="font-mono text-sm font-semibold text-[#D45A2A]">
                      {project.number}
                    </span>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-[#6E6D68] mt-1">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="lg:col-span-6">
                    <Link href={`/projects/${project.slug}`} className="block group-hover:text-[#D45A2A] transition-colors">
                      <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#111112] tracking-tight">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="mt-3 font-sans text-sm text-[#6E6D68] leading-relaxed">
                      {project.oneLineDescription}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] px-2 py-0.5 bg-[#F4F2EC] border border-[#E6E3DC] text-[#111112]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Case Study & Repository Links */}
                  <div className="lg:col-span-3 flex lg:flex-col lg:items-end justify-between sm:justify-start gap-3 pt-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="font-mono text-xs uppercase tracking-wider text-[#111112] hover:text-[#D45A2A] inline-flex items-center gap-1"
                    >
                      Case Study
                      <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs uppercase tracking-wider text-[#6E6D68] hover:text-[#111112] inline-flex items-center gap-1"
                    >
                      GitHub
                      <svg className="w-3 h-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VERIFIED EXPERIENCE */}
      <section className="py-20 border-b border-[#E6E3DC] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-[#111112]">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold">
                02 &mdash; Career Timeline
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#111112] font-semibold tracking-tight mt-1">
                Verified Experience
              </h2>
            </div>
            <Link
              href="/experience"
              className="mt-4 sm:mt-0 font-mono text-xs uppercase tracking-wider text-[#6E6D68] hover:text-[#111112] inline-flex items-center gap-1 group"
            >
              Full Timeline Details
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-10 border-b border-[#E6E3DC] last:border-b-0"
              >
                <div className="lg:col-span-4">
                  <div className="font-mono text-xs text-[#6E6D68] uppercase tracking-wider">
                    {exp.period}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#111112] mt-1">
                    {exp.company}
                  </h3>
                  <div className="font-mono text-xs text-[#D45A2A] mt-1">
                    {exp.role}
                  </div>
                  <div className="font-sans text-xs text-[#6E6D68] mt-1">
                    {exp.location}
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <ul className="space-y-2.5 font-sans text-sm text-[#111112] leading-relaxed">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[#D45A2A] font-mono text-xs mt-0.5">&bull;</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] px-2 py-0.5 bg-[#F4F2EC] border border-[#E6E3DC] text-[#6E6D68]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL SKILLS (RESTRAINED TAXONOMY) */}
      <section className="py-20 border-b border-[#E6E3DC] bg-[#F4F2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 pb-4 border-b border-[#111112]">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold">
              03 &mdash; Technical Competence
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#111112] font-semibold tracking-tight mt-1">
              Verified Skills
            </h2>
            <p className="mt-2 font-sans text-xs text-[#6E6D68]">
              Structured taxonomy of verified technical capabilities. No artificial percentages or progress bars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((group) => (
              <div
                key={group.category}
                className="p-6 bg-[#FAF9F6] border border-[#E6E3DC] flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-[#111112] font-semibold border-b border-[#E6E3DC] pb-2">
                    {group.category}
                  </h3>
                  <p className="mt-2 text-xs font-sans text-[#6E6D68] leading-relaxed">
                    {group.description}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-2.5 py-1 bg-[#F4F2EC] border border-[#E6E3DC] text-[#111112]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EDUCATION & VERIFIED TRAINING */}
      <section className="py-20 border-b border-[#E6E3DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Education */}
            <div className="lg:col-span-6">
              <div className="mb-8 pb-3 border-b border-[#111112]">
                <span className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold">
                  04 &mdash; Academic Foundations
                </span>
                <h2 className="font-display text-2xl sm:text-3xl text-[#111112] font-semibold tracking-tight mt-1">
                  Education
                </h2>
              </div>

              <div className="space-y-6">
                {educationList.map((edu) => (
                  <div key={edu.id} className="p-6 bg-[#F4F2EC] border border-[#E6E3DC]">
                    <div className="font-mono text-xs text-[#6E6D68]">
                      {edu.period}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-[#111112] mt-1">
                      {edu.degree}
                    </h3>
                    <div className="font-sans text-xs text-[#111112] mt-1">
                      {edu.institution}, {edu.location}
                    </div>
                    {edu.boardOrUniversity && (
                      <div className="font-mono text-[11px] text-[#6E6D68] mt-1">
                        Affiliation: {edu.boardOrUniversity}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Training */}
            <div className="lg:col-span-6">
              <div className="mb-8 pb-3 border-b border-[#111112]">
                <span className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold">
                  05 &mdash; Specialized Training
                </span>
                <h2 className="font-display text-2xl sm:text-3xl text-[#111112] font-semibold tracking-tight mt-1">
                  Training
                </h2>
              </div>

              <div className="space-y-6">
                {verifiedTraining.map((tr) => (
                  <div key={tr.id} className="p-6 bg-[#F4F2EC] border border-[#E6E3DC]">
                    <div className="flex items-center justify-between font-mono text-xs text-[#6E6D68]">
                      <span>{tr.type} &bull; {tr.year}</span>
                      <span className="text-[#D45A2A] font-semibold">{tr.institution}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-[#111112] mt-1">
                      {tr.title}
                    </h3>
                    <p className="mt-2 text-xs font-sans text-[#6E6D68] leading-relaxed">
                      {tr.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
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

      {/* 6. CONTACT CTA */}
      <section className="py-20 bg-[#121214] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[#D45A2A]">
                06 &mdash; Contact &amp; Inquiry
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mt-2 text-[#FAF9F6]">
                Initiate a Conversation.
              </h2>
              <p className="mt-4 font-sans text-sm text-[#A5A49D] max-w-xl leading-relaxed">
                Available for engineering roles, technical collaboration, and discussions on machine learning systems and software development.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#D45A2A] text-[#FAF9F6] font-mono text-xs uppercase tracking-widest hover:bg-[#b8471c] transition-colors"
              >
                Send Email Directly
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-[#3A3A40] text-[#FAF9F6] font-mono text-xs uppercase tracking-widest hover:bg-[#1A1A1E] transition-colors"
              >
                View Full Channels
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
