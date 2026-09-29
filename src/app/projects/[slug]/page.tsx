import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import { PageBackground } from "@/components/PageBackground";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.oneLineDescription,
    openGraph: {
      title: `${project.title} | Syyeda Aamna`,
      description: project.oneLineDescription,
      images: project.architectureDiagram
        ? [{ url: project.architectureDiagram.src, alt: project.architectureDiagram.alt }]
        : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="w-full">
      {/* Editorial Hero Header */}
      <section className="relative min-h-[480px] lg:min-h-[520px] border-b border-[#E6E3DC] bg-[#FAF9F6] py-12 sm:py-16 overflow-hidden">
        <PageBackground variant="project-detail" projectNumber={project.number} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Navigation Breadcrumb */}
          <div className="mb-8 flex items-center justify-between font-mono text-xs text-[#4A4944] border-b border-[#E6E3DC] pb-4">
            <Link
              href="/projects"
              className="hover:text-[#111112] transition-colors inline-flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
            >
              &larr; Back to Projects Index
            </Link>
            <span>Project {project.number} of 0{projects.length}</span>
          </div>

          <div className="max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D45A2A] mb-3 font-semibold">
              <span>{project.number} &mdash;</span>
              <span className="text-[#4A4944]">{project.category}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#111112] leading-[1.05]">
              {project.title}
            </h1>

            <p className="mt-4 font-display text-xl sm:text-2xl text-[#111112] leading-snug">
              {project.oneLineDescription}
            </p>

            {/* Quick Action Links */}
            <div className="mt-8 pt-6 border-t border-[#E6E3DC] flex flex-wrap gap-3 items-center">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111112] text-[#FAF9F6] font-mono text-xs uppercase tracking-wider hover:bg-[#D45A2A] transition-colors focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
              >
                <span>GitHub Repository</span>
                <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>

              {/* Live Demo: Hidden if link is missing (Requirement 3 & 4) */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#D45A2A] text-[#D45A2A] font-mono text-xs uppercase tracking-wider hover:bg-[#D45A2A] hover:text-[#FAF9F6] transition-colors focus-visible:outline-2 focus-visible:outline-[#111112]"
                >
                  <span>Live Demo</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>

            {/* Case Study Table of Contents */}
            <div className="mt-10 pt-4 border-t border-[#E6E3DC] grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[10px] text-[#4A4944] tracking-widest uppercase">
              <div>01 / PROBLEM</div>
              <div>02 / DATASET</div>
              <div>03 / APPROACH</div>
              <div>04 / RESULTS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Case Study Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">

        {/* 1. Architecture Diagram / Visual Evidence (Requirement 4) */}
        {project.architectureDiagram && (
          <section className="mb-14 border border-[#E6E3DC] bg-[#F4F2EC] p-3 sm:p-5">
            <div className="w-full overflow-hidden border border-[#E6E3DC] bg-[#FAF9F6] flex items-center justify-center relative">
              <Image
                src={project.architectureDiagram.src}
                alt={project.architectureDiagram.alt}
                width={960}
                height={540}
                className="w-full h-auto object-contain max-h-[500px] mx-auto block"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
            </div>
            <div className="mt-3 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono text-[#4A4944]">
              <span>{project.architectureDiagram.caption}</span>
              <span className="text-[#D45A2A] uppercase tracking-wider font-semibold shrink-0">
                Source Repository Asset
              </span>
            </div>
          </section>
        )}

        {/* Recruiter-Minded Case Study Template (Requirement 4) */}
        <div className="space-y-14 border-t border-[#111112] pt-10">

          {/* Section 01: Problem */}
          <section>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold mb-3">
              <span>01 &mdash; PROBLEM DEFINITION</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#111112] mb-4">
              Context &amp; Operational Friction
            </h2>
            <div className="p-6 bg-[#F4F2EC] border border-[#E6E3DC] space-y-4">
              <p className="font-sans text-sm sm:text-base text-[#111112] leading-relaxed">
                {project.problem}
              </p>
              <div className="pt-3 border-t border-[#E6E3DC] font-mono text-xs text-[#D45A2A] font-medium">
                Core Goal: {project.oneLineProblem}
              </div>
            </div>
          </section>

          {/* Section 02: Dataset / Data Scope */}
          <section>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold mb-3">
              <span>02 &mdash; DATASET &amp; DATA SCOPE</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#111112] mb-4">
              Data Ingestion &amp; Preprocessing
            </h2>
            <div className="p-6 bg-[#FAF9F6] border border-[#E6E3DC]">
              <p className="font-sans text-sm sm:text-base text-[#111112] leading-relaxed">
                {project.datasetOrScope}
              </p>
            </div>
          </section>

          {/* Section 03: Approach */}
          <section>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold mb-3">
              <span>03 &mdash; ENGINEERING APPROACH</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#111112] mb-4">
              Methodology &amp; System Architecture
            </h2>
            <div className="p-6 bg-[#FAF9F6] border border-[#E6E3DC] space-y-4">
              <p className="font-sans text-sm sm:text-base text-[#111112] leading-relaxed">
                {project.approach}
              </p>
              <div className="pt-4 border-t border-[#E6E3DC]">
                <span className="block font-mono text-xs uppercase tracking-wider text-[#4A4944] font-semibold mb-2">
                  Key Implementation Facets
                </span>
                <ul className="space-y-2 font-sans text-xs sm:text-sm text-[#111112]">
                  {project.keyAspects.map((aspect, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#D45A2A] font-mono text-xs mt-0.5 shrink-0" aria-hidden="true">&bull;</span>
                      <span>{aspect}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 04: Results & Metrics Table (Requirement 4: accuracy/precision/recall/latency TODOs) */}
          <section>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold mb-3">
              <span>04 &mdash; RESULTS &amp; BENCHMARKS</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#111112] mb-4">
              Performance &amp; Evaluation Metrics
            </h2>

            <div className="border border-[#E6E3DC] overflow-hidden bg-[#FAF9F6]">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#E6E3DC] bg-[#F4F2EC] font-mono text-xs uppercase tracking-wider text-[#111112]">
                      <th className="py-3 px-4 font-semibold">Evaluation Metric</th>
                      <th className="py-3 px-4 font-semibold text-[#D45A2A]">Measured Value</th>
                      <th className="py-3 px-4 font-semibold">Benchmark Context / Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E6E3DC] font-mono text-xs">
                    {project.metricsTable.map((row) => (
                      <tr key={row.metric} className="hover:bg-[#F4F2EC]/60 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-[#111112]">{row.metric}</td>
                        <td className="py-3.5 px-4 font-bold text-[#D45A2A]">{row.value}</td>
                        <td className="py-3.5 px-4 text-[#4A4944]">{row.benchmarkOrNote}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-3 bg-[#F4F2EC] border-t border-[#E6E3DC] font-mono text-[11px] text-[#4A4944]">
                Note: Placeholder metrics (TODO) reflect empirical values awaiting candidate confirmation.
              </div>
            </div>
          </section>

          {/* Section 05: Challenges & Trade-offs (Requirement 4) */}
          <section>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold mb-3">
              <span>05 &mdash; TECHNICAL CHALLENGES</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#111112] mb-4">
              Edge Cases &amp; Engineering Roadblocks
            </h2>
            <div className="p-6 bg-[#FAF9F6] border border-[#E6E3DC]">
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-[#111112]">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#D45A2A] font-mono text-xs mt-0.5 shrink-0" aria-hidden="true">&bull;</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 06: What I'd Improve (Requirement 4) */}
          <section>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold mb-3">
              <span>06 &mdash; FUTURE ROADMAP</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#111112] mb-4">
              What I&apos;d Improve / Next Iteration
            </h2>
            <div className="p-6 bg-[#F4F2EC] border border-[#E6E3DC]">
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-[#111112]">
                {project.whatIdImprove.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#D45A2A] font-mono text-xs mt-0.5 shrink-0" aria-hidden="true">&rarr;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 07: Technologies & Repository Verification (Requirement 4) */}
          <section className="p-6 bg-[#FAF9F6] border border-[#E6E3DC]">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold mb-3">
              <span>07 &mdash; REPOSITORY &amp; ARTIFACTS</span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#111112] mb-2">
              Public Source Repository
            </h2>
            <p className="font-sans text-xs text-[#4A4944] leading-relaxed mb-4">
              Review raw implementation code, notebooks, dataset processing scripts, and commits directly on GitHub.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#111112] text-[#FAF9F6] font-mono text-xs uppercase tracking-wider hover:bg-[#D45A2A] transition-colors focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
              >
                <span>View on GitHub ↗</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#D45A2A] text-[#D45A2A] font-mono text-xs uppercase tracking-wider hover:bg-[#D45A2A] hover:text-[#FAF9F6] transition-colors focus-visible:outline-2 focus-visible:outline-[#111112]"
                >
                  <span>Launch Live Demo ↗</span>
                </a>
              )}
            </div>
          </section>
        </div>

        {/* Next Project Exploration Navigation */}
        <div className="mt-20 pt-10 border-t border-[#111112]">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold">
              Next Project &bull; {nextProject.number}
            </span>
            <Link
              href="/projects"
              className="font-mono text-xs uppercase tracking-wider text-[#4A4944] hover:text-[#111112] focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
            >
              All Projects Index &rarr;
            </Link>
          </div>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group block p-5 sm:p-6 bg-[#F4F2EC] border border-[#E6E3DC] hover:border-[#111112] transition-colors focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {nextProject.architectureDiagram && (
                <div className="md:col-span-5 border border-[#E6E3DC] bg-[#FAF9F6] p-2 aspect-16/10 relative flex items-center justify-center overflow-hidden">
                  <Image
                    src={nextProject.architectureDiagram.src}
                    alt={nextProject.architectureDiagram.alt}
                    width={480}
                    height={270}
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
              )}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#4A4944]">
                    {nextProject.category}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#111112] group-hover:text-[#D45A2A] transition-colors mt-1">
                    {nextProject.title}
                  </h3>
                  <p className="mt-2 font-sans text-xs sm:text-sm text-[#4A4944] leading-relaxed">
                    {nextProject.oneLineDescription}
                  </p>
                </div>
                <div className="mt-4 font-mono text-xs uppercase tracking-wider text-[#D45A2A] font-semibold inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                  <span>Explore Case Study</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}
