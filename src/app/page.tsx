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
      <section className="border-b border-[#E6E3DC] pt-10 sm:pt-16 pb-12 sm:pb-20 bg-[#FAF9F6] bg-grid-faint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Editorial Content */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              {/* Category tracker */}
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#6E6D68] mb-4 sm:mb-6">
                <span>AI/ML</span>
                <span className="text-[#D45A2A] font-bold">&bull;</span>
                <span>DATA SCIENCE</span>
                <span className="text-[#D45A2A] font-bold">&bull;</span>
                <span>SOFTWARE</span>
              </div>

              {/* Display Headline */}
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight text-[#111112] font-normal leading-[0.98]">
                Syyeda Aamna
              </h1>

              {/* Subheading / Ethos */}
              <p className="mt-4 sm:mt-5 font-display text-xl sm:text-2xl text-[#111112] leading-snug max-w-xl">
                Building practical AI/ML solutions with a focus on real-world impact.
              </p>

              {/* Bio summary */}
              <p className="mt-4 font-sans text-sm sm:text-base text-[#6E6D68] leading-relaxed max-w-xl">
                AI/ML-focused software professional with hands-on experience in Python, Machine Learning, Data Science, Generative AI and software development.
              </p>

              {/* Action Buttons & Handwritten Annotation */}
              <div className="mt-8 pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#featured-work"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D45A2A] text-[#FAF9F6] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#b8471c] transition-colors"
                  >
                    <span>View My Work</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#111112] text-[#111112] font-mono text-xs uppercase tracking-wider hover:bg-[#F4F2EC] transition-colors"
                  >
                    <span>Get in Touch</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>

                {/* Editorial Handwritten Annotation Note */}
                <div className="hidden xl:flex items-center gap-2 pl-4 text-[#D45A2A]">
                  <svg
                    className="w-7 h-7 stroke-current shrink-0 -rotate-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                  <span className="font-display italic text-sm text-[#111112] leading-tight">
                    Turning ideas into<br />useful solutions.
                  </span>
                </div>
              </div>

              {/* Metadata Indicators */}
              <div className="mt-10 pt-6 border-t border-[#E6E3DC] flex flex-wrap gap-y-2 gap-x-6 font-mono text-xs text-[#6E6D68]">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#D45A2A] font-bold">&raquo;</span>
                  <span className="uppercase tracking-wider">BAREILLY, UTTAR PRADESH</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#D45A2A] font-bold">&raquo;</span>
                  <span className="uppercase tracking-wider">AVAILABLE FOR OPPORTUNITIES</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#D45A2A] inline-block" aria-hidden="true" />
                  <span className="uppercase tracking-wider text-[#111112]">OPEN TO COLLABORATION</span>
                </div>
              </div>
            </div>

            {/* Right Editorial Technical Composition (NO PORTRAIT PHOTO) */}
            <div className="lg:col-span-5 w-full">
              <div className="border border-[#E6E3DC] bg-[#F4F2EC] p-5 sm:p-6 relative">
                {/* Technical Dossier Top Header */}
                <div className="flex items-center justify-between border-b border-[#E6E3DC] pb-3 mb-4">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#111112] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#D45A2A]" aria-hidden="true" />
                    <span>SYSTEM NOTEBOOK // PIPELINE SUMMARY</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#6E6D68] uppercase tracking-wider">
                    FOLIO 2026
                  </span>
                </div>

                {/* Schematic Flow Container */}
                <div className="space-y-4">
                  {/* Step 1: Real RAG Pipeline Overview */}
                  <div className="p-3.5 bg-[#FAF9F6] border border-[#E6E3DC]">
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#D45A2A] font-semibold mb-1">
                      <span>RAG PIPELINE // MULTI-MODAL</span>
                      <span>LOCAL DISK</span>
                    </div>
                    <div className="font-mono text-xs text-[#111112] space-y-1">
                      <div className="text-[11px] text-[#6E6D68]">PyPDFLoader &rarr; RecursiveSplitter</div>
                      <div className="font-medium text-[#111112]">FAISS Vector Index (all-MiniLM-L6-v2)</div>
                      <div className="text-[11px] text-[#D45A2A]">Gemini LLM Synthesis + Page Citations</div>
                    </div>
                  </div>

                  {/* Step 2: Fraud Detection Hybrid Model */}
                  <div className="p-3.5 bg-[#FAF9F6] border border-[#E6E3DC]">
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#D45A2A] font-semibold mb-1">
                      <span>FRAUD DETECTION // HYBRID ENGINE</span>
                      <span>FINTECH SIMULATION</span>
                    </div>
                    <div className="font-mono text-xs text-[#111112] space-y-1">
                      <div className="text-[11px] text-[#6E6D68]">Scikit-Learn Logistic Regression</div>
                      <div className="font-medium text-[#111112]">Deterministic Rule-Based Anomaly Scoring</div>
                      <div className="text-[11px] text-[#6E6D68]">FastAPI REST Engine &bull; React Dashboard</div>
                    </div>
                  </div>

                  {/* Step 3: Netflix Data Analysis */}
                  <div className="p-3.5 bg-[#FAF9F6] border border-[#E6E3DC]">
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#D45A2A] font-semibold mb-1">
                      <span>EXPLORATORY DATA ANALYSIS</span>
                      <span>~9,800 MOVIES</span>
                    </div>
                    <div className="font-mono text-xs text-[#111112]">
                      <span className="text-[#111112] font-medium">Pandas, NumPy, Matplotlib &amp; Seaborn</span>
                      <div className="text-[11px] text-[#6E6D68] mt-0.5">Statistical distributions &amp; multi-attribute correlation</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Technical Telemetry Strip */}
                <div className="mt-4 pt-3 border-t border-[#E6E3DC] flex items-center justify-between font-mono text-[10px] text-[#6E6D68]">
                  <span className="uppercase tracking-wider">Verified Repository Artifacts</span>
                  <span className="text-[#D45A2A] font-semibold">100% REPRODUCIBLE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED WORK (MATCHING REFERENCE 3-COLUMN EDITORIAL CARDS) */}
      <section id="featured-work" className="py-14 sm:py-20 border-b border-[#E6E3DC] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#111112]">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#111112] font-bold">
              FEATURED WORK
            </h2>
            <Link
              href="/projects"
              className="font-mono text-xs uppercase tracking-wider text-[#D45A2A] hover:text-[#111112] inline-flex items-center gap-1 group font-semibold"
            >
              <span>VIEW ALL PROJECTS</span>
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          {/* 3 Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="bg-[#FAF9F6] border border-[#E6E3DC] hover:border-[#111112] transition-colors flex flex-col justify-between group"
              >
                <div>
                  {/* Real Project Image on Top */}
                  {project.visualAsset && (
                    <div className="border-b border-[#E6E3DC] bg-[#F4F2EC] p-3 aspect-16/10 flex items-center justify-center overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.visualAsset.src}
                        alt={project.visualAsset.alt}
                        className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-5">
                    {/* Title + Arrow */}
                    <div className="flex items-start justify-between gap-2">
                      <Link href={`/projects/${project.slug}`}>
                        <h3 className="font-display text-xl font-semibold text-[#111112] group-hover:text-[#D45A2A] transition-colors leading-snug">
                          {project.title}
                        </h3>
                      </Link>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-[#111112] group-hover:text-[#D45A2A] transition-colors pt-0.5"
                        aria-label={`View ${project.title}`}
                      >
                        <span className="font-mono text-base font-bold">↗</span>
                      </Link>
                    </div>

                    {/* Short Description */}
                    <p className="mt-2.5 font-sans text-xs text-[#6E6D68] leading-relaxed">
                      {project.oneLineDescription}
                    </p>
                  </div>
                </div>

                {/* Tech Pills at Bottom */}
                <div className="px-5 pb-5 pt-0">
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E6E3DC]">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] px-2 py-0.5 bg-[#F4F2EC] border border-[#E6E3DC] text-[#111112]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE & SKILLS (MATCHING REFERENCE 2-COLUMN SPLIT) */}
      <section className="py-14 sm:py-20 border-b border-[#E6E3DC] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: EXPERIENCE */}
            <div className="lg:col-span-6">
              <div className="mb-6 pb-2 border-b border-[#111112]">
                <h2 className="font-mono text-xs uppercase tracking-widest text-[#111112] font-bold">
                  EXPERIENCE
                </h2>
              </div>

              {/* Vertical Timeline */}
              <div className="relative border-l border-[#E6E3DC] pl-6 ml-2 space-y-8">
                {experiences.map((exp) => (
                  <div key={exp.id} className="relative">
                    {/* Terracotta Dot Marker on Timeline */}
                    <span
                      className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#D45A2A] border-2 border-[#FAF9F6]"
                      aria-hidden="true"
                    />

                    {/* Role & Company */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h3 className="font-sans text-sm font-semibold text-[#111112]">
                        {exp.role} &mdash; <span className="text-[#111112]">{exp.company}</span>
                      </h3>
                      <span className="font-mono text-xs text-[#6E6D68] shrink-0">
                        {exp.period}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="font-sans text-xs text-[#6E6D68] mt-0.5">
                      {exp.location}
                    </div>

                    {/* Responsibilities list */}
                    <ul className="mt-2.5 space-y-1.5 font-sans text-xs text-[#111112] leading-relaxed">
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
            </div>

            {/* Right Column: SKILLS */}
            <div className="lg:col-span-6">
              <div className="mb-6 pb-2 border-b border-[#111112]">
                <h2 className="font-mono text-xs uppercase tracking-widest text-[#111112] font-bold">
                  SKILLS
                </h2>
              </div>

              {/* Clean Editorial Table of Skills */}
              <div className="divide-y divide-[#E6E3DC] border-t border-b border-[#E6E3DC]">
                {skillCategories.map((group) => (
                  <div key={group.category} className="py-3.5 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                    <div className="w-32 shrink-0 font-mono text-xs font-semibold text-[#111112] uppercase tracking-wider">
                      {group.category}
                    </div>
                    <div className="flex-1 font-sans text-xs text-[#6E6D68] leading-relaxed">
                      {group.skills.join(", ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACADEMIC FOUNDATIONS & SPECIALIZED TRAINING */}
      <section className="py-14 sm:py-20 border-b border-[#E6E3DC] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Education */}
            <div className="lg:col-span-6">
              <div className="mb-6 pb-2 border-b border-[#111112]">
                <h2 className="font-mono text-xs uppercase tracking-widest text-[#111112] font-bold">
                  EDUCATION
                </h2>
              </div>

              <div className="space-y-4">
                {educationList.map((edu) => (
                  <div key={edu.id} className="p-5 bg-[#F4F2EC] border border-[#E6E3DC]">
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
                        Board / University: {edu.boardOrUniversity}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized Training */}
            <div className="lg:col-span-6">
              <div className="mb-6 pb-2 border-b border-[#111112]">
                <h2 className="font-mono text-xs uppercase tracking-widest text-[#111112] font-bold">
                  INSTITUTIONAL TRAINING
                </h2>
              </div>

              <div className="space-y-4">
                {verifiedTraining.map((tr) => (
                  <div key={tr.id} className="p-5 bg-[#F4F2EC] border border-[#E6E3DC]">
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

      {/* 5. CONTACT CTA */}
      <section className="py-16 sm:py-20 bg-[#121214] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold">
                Direct Inquiry
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-tight mt-2 text-[#FAF9F6]">
                Let&apos;s Talk.
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
                Send Direct Email
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-[#3A3A40] text-[#FAF9F6] font-mono text-xs uppercase tracking-widest hover:bg-[#1A1A1E] transition-colors"
              >
                View Direct Channels
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
