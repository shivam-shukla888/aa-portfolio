import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";

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
    <article className="w-full py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between font-mono text-xs text-[#6E6D68] border-b border-[#E6E3DC] pb-4">
          <Link
            href="/projects"
            className="hover:text-[#111112] transition-colors inline-flex items-center gap-1.5"
          >
            &larr; Back to Projects Index
          </Link>
          <span>Project {project.number} of 0{projects.length}</span>
        </div>

        {/* Case Study Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D45A2A] mb-3 font-semibold">
            <span>{project.number}</span>
            <span>&bull;</span>
            <span>{project.category}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#111112] leading-[1.05]">
            {project.title}
          </h1>

          <p className="mt-4 font-display text-xl sm:text-2xl text-[#111112] leading-snug">
            {project.oneLineDescription}
          </p>

          <div className="mt-8 pt-6 border-t border-[#E6E3DC] flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-2.5 py-1 bg-[#F4F2EC] border border-[#E6E3DC] text-[#111112]"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111112] text-[#FAF9F6] font-mono text-xs uppercase tracking-wider hover:bg-[#D45A2A] transition-colors"
            >
              <span>GitHub Repository</span>
              <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </header>

        {/* Real Project Visual Evidence */}
        {project.visualAsset && (
          <div className="mb-14 border border-[#E6E3DC] bg-[#F4F2EC] p-2 sm:p-4">
            <div className="w-full overflow-hidden border border-[#E6E3DC] bg-[#FAF9F6] flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.visualAsset.src}
                alt={project.visualAsset.alt}
                className="w-full h-auto object-contain max-h-[480px] mx-auto block"
              />
            </div>
            <div className="mt-2.5 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] font-mono text-[#6E6D68]">
              <span>{project.visualAsset.caption}</span>
              <span className="text-[#D45A2A] uppercase tracking-wider font-semibold shrink-0">
                Verified Repository Artifact
              </span>
            </div>
          </div>
        )}

        {/* Case Study Sections */}
        <div className="space-y-12 border-t border-[#111112] pt-10">
          {/* 01 / Overview */}
          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold mb-3">
              01 / Overview
            </h2>
            <p className="font-sans text-base text-[#111112] leading-relaxed">
              {project.overview}
            </p>
          </section>

          {/* 02 / Context / Problem */}
          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold mb-3">
              02 / Context / Problem
            </h2>
            <p className="font-sans text-base text-[#111112] leading-relaxed">
              {project.problemContext}
            </p>
          </section>

          {/* 03 / Data or Scope */}
          {project.datasetOrScope && (
            <section>
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold mb-3">
                03 / Data or Scope
              </h2>
              <div className="p-5 bg-[#F4F2EC] border border-[#E6E3DC]">
                <p className="font-sans text-base text-[#111112] leading-relaxed">
                  {project.datasetOrScope}
                </p>
              </div>
            </section>
          )}

          {/* 04 / Implementation */}
          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold mb-3">
              04 / Implementation
            </h2>
            <p className="font-sans text-base text-[#111112] leading-relaxed">
              {project.implementation}
            </p>
          </section>

          {/* 05 / Technologies */}
          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold mb-3">
              05 / Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1.5 bg-[#FAF9F6] border border-[#E6E3DC] text-[#111112]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* 06 / Verified Highlights */}
          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold mb-3">
              06 / Verified Highlights
            </h2>
            <div className="p-6 bg-[#FAF9F6] border border-[#E6E3DC]">
              <ul className="space-y-2.5 font-sans text-sm text-[#111112]">
                {project.keyAspects.map((aspect, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#D45A2A] font-mono text-xs mt-0.5" aria-hidden="true">&bull;</span>
                    <span>{aspect}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 07 / Source / GitHub */}
          <section className="p-6 bg-[#F4F2EC] border border-[#E6E3DC]">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold mb-2">
              07 / Source / GitHub
            </h2>
            <p className="font-sans text-xs text-[#6E6D68] leading-relaxed mb-4">
              Explore the complete project codebase, preprocessing pipelines, and implementation files directly on GitHub.
            </p>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#111112] hover:text-[#D45A2A] break-all underline underline-offset-4"
            >
              {project.githubUrl}
            </a>
          </section>
        </div>

        {/* Next Project Exploration Loop */}
        <div className="mt-20 pt-10 border-t border-[#111112]">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold">
              Next Project &bull; 0{nextProject.number}
            </span>
            <Link
              href="/projects"
              className="font-mono text-xs uppercase tracking-wider text-[#6E6D68] hover:text-[#111112]"
            >
              All Projects Index &rarr;
            </Link>
          </div>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group block p-5 sm:p-6 bg-[#F4F2EC] border border-[#E6E3DC] hover:border-[#111112] transition-colors"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {nextProject.visualAsset && (
                <div className="md:col-span-5 border border-[#E6E3DC] bg-[#FAF9F6] p-2 aspect-16/10 flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={nextProject.visualAsset.src}
                    alt={nextProject.visualAsset.alt}
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              )}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#6E6D68]">
                    {nextProject.category}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#111112] group-hover:text-[#D45A2A] transition-colors mt-1">
                    {nextProject.title}
                  </h3>
                  <p className="mt-2 font-sans text-xs sm:text-sm text-[#6E6D68] leading-relaxed">
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
