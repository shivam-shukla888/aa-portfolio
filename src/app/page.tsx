import Link from "next/link";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { educationList } from "@/data/education";
import { verifiedTraining } from "@/data/training";
import { PageBackground } from "@/components/PageBackground";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative border-b border-[#E6E3DC] pt-10 sm:pt-16 pb-12 sm:pb-20 bg-[#FAF9F6] overflow-hidden">
        <PageBackground variant="home" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl pt-4 pb-8 sm:pb-16 flex flex-col justify-between">
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

            {/* Action Buttons */}
            <div className="mt-8 pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#featured-work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D45A2A] text-[#FAF9F6] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#b8471c] transition-colors"
              >
                <span>View My Work</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#D45A2A] text-[#111112] font-mono text-xs uppercase tracking-wider hover:bg-[#F4F2EC] transition-colors"
              >
                <span>Get in Touch</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* Metadata Indicators */}
            <div className="mt-12 pt-6 border-t border-[#E6E3DC] flex flex-wrap gap-y-2 gap-x-6 font-mono text-xs text-[#6E6D68]">
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
        </div>
      </section>

      {/* 2. SYSTEM NOTEBOOK (EDITORIAL ARCHITECTURE ARCHIVE) */}
      <section className="py-16 sm:py-24 border-b border-[#E6E3DC] bg-[#F4F2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 pb-4 border-b border-[#E6E3DC] gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D45A2A] mb-2 font-semibold">
                <span>01 &mdash; ARCHITECTURE &amp; PIPELINES</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#111112] tracking-tight">
                System Notebook
              </h2>
              <p className="mt-2 font-sans text-sm sm:text-base text-[#6E6D68] max-w-2xl leading-relaxed">
                Verified repository pipelines, model architectures, and computational workflows extracted directly from working source code.
              </p>
            </div>
            <span className="font-mono text-xs text-[#6E6D68] uppercase tracking-wider shrink-0">
              Verified Technical Archive
            </span>
          </div>

          {/* Editorial 3-Column Architecture Archive */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* System 1: RAG Pipeline */}
            <div className="p-7 sm:p-8 bg-[#FAF9F6] border border-[#E6E3DC] hover:border-[#111112] transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold pb-3 border-b border-[#E6E3DC] mb-5">
                  <span>01 &bull; Document Intelligence</span>
                  <span className="text-[#6E6D68]">FAISS Local</span>
                </div>

                <h3 className="font-display text-2xl font-semibold text-[#111112] mb-3">
                  RAG Voice &amp; Document Pipeline
                </h3>

                <p className="font-sans text-sm text-[#6E6D68] leading-relaxed mb-6">
                  End-to-end question answering over PDF documents with local vector indexing, semantic retrieval, and speech-driven querying.
                </p>

                <div className="space-y-3 font-mono text-xs text-[#111112] pt-4 border-t border-[#E6E3DC]">
                  <div>
                    <span className="text-[#6E6D68] block text-[10px] uppercase tracking-wider">Ingestion</span>
                    <span className="font-medium">PyPDFLoader &bull; RecursiveSplitter</span>
                  </div>
                  <div>
                    <span className="text-[#6E6D68] block text-[10px] uppercase tracking-wider">Embeddings &amp; Vector Store</span>
                    <span className="font-medium">all-MiniLM-L6-v2 &bull; FAISS Persistence</span>
                  </div>
                  <div>
                    <span className="text-[#6E6D68] block text-[10px] uppercase tracking-wider">Generation &amp; Citations</span>
                    <span className="font-medium text-[#D45A2A]">Gemini LLM Synthesis with Page Citations</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E6E3DC] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {["LangChain", "FAISS", "Gemini", "Speech API"].map((t) => (
                    <span key={t} className="font-mono text-[10px] px-2 py-0.5 bg-[#F4F2EC] border border-[#E6E3DC] text-[#111112]">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href="/projects/rag-voice-chatbot"
                  className="font-mono text-xs text-[#D45A2A] hover:text-[#111112] font-semibold shrink-0 ml-2"
                  aria-label="Explore RAG Voice Chatbot project"
                >
                  Explore &rarr;
                </Link>
              </div>
            </div>

            {/* System 2: Fraud Detection */}
            <div className="p-7 sm:p-8 bg-[#FAF9F6] border border-[#E6E3DC] hover:border-[#111112] transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold pb-3 border-b border-[#E6E3DC] mb-5">
                  <span>02 &bull; Anomaly Scoring</span>
                  <span className="text-[#6E6D68]">FastAPI</span>
                </div>

                <h3 className="font-display text-2xl font-semibold text-[#111112] mb-3">
                  Hybrid Fraud Detection Engine
                </h3>

                <p className="font-sans text-sm text-[#6E6D68] leading-relaxed mb-6">
                  Dual-stage risk assessment combining statistical machine learning with deterministic rule-based anomaly scoring for real-time transaction screening.
                </p>

                <div className="space-y-3 font-mono text-xs text-[#111112] pt-4 border-t border-[#E6E3DC]">
                  <div>
                    <span className="text-[#6E6D68] block text-[10px] uppercase tracking-wider">Classification Model</span>
                    <span className="font-medium">Scikit-Learn Logistic Regression</span>
                  </div>
                  <div>
                    <span className="text-[#6E6D68] block text-[10px] uppercase tracking-wider">Risk Evaluation</span>
                    <span className="font-medium">Deterministic Rule-Based Anomaly Scoring</span>
                  </div>
                  <div>
                    <span className="text-[#6E6D68] block text-[10px] uppercase tracking-wider">Interface &amp; Monitoring</span>
                    <span className="font-medium text-[#D45A2A]">FastAPI Backend &bull; React Analytics Dashboard</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E6E3DC] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {["FastAPI", "Scikit-Learn", "React", "Recharts"].map((t) => (
                    <span key={t} className="font-mono text-[10px] px-2 py-0.5 bg-[#F4F2EC] border border-[#E6E3DC] text-[#111112]">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href="/projects/ai-fraud-detection-system"
                  className="font-mono text-xs text-[#D45A2A] hover:text-[#111112] font-semibold shrink-0 ml-2"
                  aria-label="Explore AI Fraud Detection System project"
                >
                  Explore &rarr;
                </Link>
              </div>
            </div>

            {/* System 3: Netflix Data Analysis */}
            <div className="p-7 sm:p-8 bg-[#FAF9F6] border border-[#E6E3DC] hover:border-[#111112] transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold pb-3 border-b border-[#E6E3DC] mb-5">
                  <span>03 &bull; Exploratory Analysis</span>
                  <span className="text-[#6E6D68]">9,800 Records</span>
                </div>

                <h3 className="font-display text-2xl font-semibold text-[#111112] mb-3">
                  Netflix Content Analytics
                </h3>

                <p className="font-sans text-sm text-[#6E6D68] leading-relaxed mb-6">
                  Systematic exploratory data analysis examining content evolution, rating distribution patterns, and international catalog trends across ~9,800 titles.
                </p>

                <div className="space-y-3 font-mono text-xs text-[#111112] pt-4 border-t border-[#E6E3DC]">
                  <div>
                    <span className="text-[#6E6D68] block text-[10px] uppercase tracking-wider">Data Processing</span>
                    <span className="font-medium">Pandas &amp; NumPy Cleaning Pipelines</span>
                  </div>
                  <div>
                    <span className="text-[#6E6D68] block text-[10px] uppercase tracking-wider">Visual Computing</span>
                    <span className="font-medium">Matplotlib &amp; Seaborn Distributions</span>
                  </div>
                  <div>
                    <span className="text-[#6E6D68] block text-[10px] uppercase tracking-wider">Statistical Focus</span>
                    <span className="font-medium text-[#D45A2A]">Multi-Variable Rating &amp; Release Correlation</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E6E3DC] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "Pandas", "NumPy", "Matplotlib"].map((t) => (
                    <span key={t} className="font-mono text-[10px] px-2 py-0.5 bg-[#F4F2EC] border border-[#E6E3DC] text-[#111112]">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href="/projects/netflix-movie-data-analysis"
                  className="font-mono text-xs text-[#D45A2A] hover:text-[#111112] font-semibold shrink-0 ml-2"
                  aria-label="Explore Netflix Movie Data Analysis project"
                >
                  Explore &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED WORK */}
      <section id="featured-work" className="py-16 sm:py-24 border-b border-[#E6E3DC] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 pb-4 border-b border-[#E6E3DC] gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D45A2A] mb-2 font-semibold">
                <span>02 &mdash; SELECTED PROJECTS</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#111112] tracking-tight">
                Featured Work
              </h2>
              <p className="mt-2 font-sans text-sm sm:text-base text-[#6E6D68]">
                Machine learning systems, generative AI workflows, and software implementations.
              </p>
            </div>
            <Link
              href="/projects"
              className="font-mono text-xs uppercase tracking-wider text-[#D45A2A] hover:text-[#111112] inline-flex items-center gap-1.5 group font-semibold shrink-0"
            >
              <span>View All Projects</span>
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
                  <div className="p-6">
                    {/* Title + Arrow */}
                    <div className="flex items-start justify-between gap-2">
                      <Link href={`/projects/${project.slug}`}>
                        <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#111112] group-hover:text-[#D45A2A] transition-colors leading-snug">
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
                    <p className="mt-3 font-sans text-xs sm:text-sm text-[#6E6D68] leading-relaxed">
                      {project.oneLineDescription}
                    </p>
                  </div>
                </div>

                {/* Tech Pills at Bottom */}
                <div className="px-6 pb-6 pt-0">
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

      {/* 4. EXPERIENCE & SKILLS (MATCHING REFERENCE 2-COLUMN SPLIT) */}
      <section className="py-16 sm:py-24 border-b border-[#E6E3DC] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: EXPERIENCE */}
            <div className="lg:col-span-6">
              <div className="mb-8 pb-3 border-b border-[#E6E3DC]">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D45A2A] mb-2 font-semibold">
                  <span>03 &mdash; CAREER TIMELINE</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111112] tracking-tight">
                  Experience
                </h2>
                <p className="mt-2 font-sans text-xs sm:text-sm text-[#6E6D68]">
                  Verified professional roles and engineering responsibilities.
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
                        {exp.role} &mdash; <span className="text-[#111112]">{exp.company}</span>
                      </h3>
                      <span className="font-mono text-xs text-[#6E6D68] shrink-0">
                        {exp.period}
                      </span>
                    </div>

                    <div className="font-sans text-xs text-[#6E6D68] mt-0.5">
                      {exp.location}
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
                  className="font-mono text-xs uppercase tracking-wider text-[#D45A2A] hover:text-[#111112] inline-flex items-center gap-1 font-semibold"
                >
                  <span>View Full Timeline &amp; Credentials</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right Column: SKILLS */}
            <div className="lg:col-span-6">
              <div className="mb-8 pb-3 border-b border-[#E6E3DC]">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D45A2A] mb-2 font-semibold">
                  <span>04 &mdash; CORE COMPETENCIES</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111112] tracking-tight">
                  Skills
                </h2>
                <p className="mt-2 font-sans text-xs sm:text-sm text-[#6E6D68]">
                  Technical proficiencies across languages, frameworks, and tools.
                </p>
              </div>

              {/* Clean Editorial Table of Skills */}
              <div className="divide-y divide-[#E6E3DC] border-t border-b border-[#E6E3DC]">
                {skillCategories.map((group) => (
                  <div key={group.category} className="py-4 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                    <div className="w-36 shrink-0 font-mono text-xs font-semibold text-[#111112] uppercase tracking-wider">
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

      {/* 5. ACADEMIC FOUNDATIONS & SPECIALIZED TRAINING */}
      <section className="py-16 sm:py-24 border-b border-[#E6E3DC] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Education */}
            <div className="lg:col-span-6">
              <div className="mb-8 pb-3 border-b border-[#E6E3DC]">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D45A2A] mb-2 font-semibold">
                  <span>05 &mdash; ACADEMIC FOUNDATIONS</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111112] tracking-tight">
                  Education
                </h2>
                <p className="mt-2 font-sans text-xs sm:text-sm text-[#6E6D68]">
                  Formal academic degrees and qualifications.
                </p>
              </div>

              <div className="space-y-4">
                {educationList.map((edu) => (
                  <div key={edu.id} className="p-6 bg-[#F4F2EC] border border-[#E6E3DC]">
                    <div className="font-mono text-xs text-[#6E6D68]">
                      {edu.period}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-[#111112] mt-1">
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
              <div className="mb-8 pb-3 border-b border-[#E6E3DC]">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D45A2A] mb-2 font-semibold">
                  <span>06 &mdash; VERIFIED WORKSHOPS</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111112] tracking-tight">
                  Specialized Training
                </h2>
                <p className="mt-2 font-sans text-xs sm:text-sm text-[#6E6D68]">
                  Structured computational and institutional programs.
                </p>
              </div>

              <div className="space-y-4">
                {verifiedTraining.map((tr) => (
                  <div key={tr.id} className="p-6 bg-[#F4F2EC] border border-[#E6E3DC]">
                    <div className="flex items-center justify-between font-mono text-xs text-[#6E6D68]">
                      <span>{tr.type} &bull; {tr.year}</span>
                      <span className="text-[#D45A2A] font-semibold">{tr.institution}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-[#111112] mt-1">
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

      {/* 6. CONTACT CTA */}
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
