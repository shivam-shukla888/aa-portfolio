import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title + " — Case Study",
    description: project.oneLineDescription,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex items-center justify-between border-b border-[#E6E3DC] pb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6E6D68]">
          <Link href="/projects" className="transition-colors hover:text-[#111112]">
            ← Projects
          </Link>
          <span>
            {project.number} / 0{projects.length}
          </span>
        </div>

        <header className="grid gap-10 border-b border-[#111112] py-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16 lg:py-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#D45A2A]">
              {project.category}
            </div>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[0.94] tracking-tight text-[#111112] sm:text-7xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl font-display text-xl italic leading-relaxed text-[#111112] sm:text-2xl">
              {project.oneLineDescription}
            </p>
          </div>

          <aside className="border-l border-[#E6E3DC] pl-6 lg:pt-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6E6D68]">
              Technologies
            </p>
            <div className="mt-4 space-y-2">
              {project.technologies.map((technology) => (
                <div key={technology} className="border-b border-[#E6E3DC] pb-2 font-mono text-xs text-[#111112]">
                  {technology}
                </div>
              ))}
            </div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-11 items-center border border-[#111112] bg-[#111112] px-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[#FAF9F6] transition-colors hover:bg-[#D45A2A]"
            >
              Open GitHub ↗
            </a>
          </aside>
        </header>

        <div className="grid gap-14 py-14 lg:grid-cols-[8rem_minmax(0,1fr)] lg:gap-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#D45A2A]">
            Case Study
          </div>

          <div className="space-y-14">
            <section>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6E6D68]">
                01 / Overview
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#111112] sm:text-lg">
                {project.overview}
              </p>
            </section>

            {project.problemContext && (
              <section>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6E6D68]">
                  02 / Context
                </p>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[#111112]">
                  {project.problemContext}
                </p>
              </section>
            )}

            {project.datasetOrScope && (
              <section className="border-y border-[#E6E3DC] py-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#D45A2A]">
                  03 / Data Scope
                </p>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#111112]">
                  {project.datasetOrScope}
                </p>
              </section>
            )}

            <section>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6E6D68]">
                04 / Implementation
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#111112]">
                {project.implementation}
              </p>
            </section>

            <section>
              <div className="border-t border-[#E6E3DC] pt-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6E6D68]">
                  05 / Verified Highlights
                </p>
                <div className="mt-5 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                  {project.keyAspects.map((aspect) => (
                    <div key={aspect} className="border-b border-[#E6E3DC] pb-4 text-sm leading-6 text-[#111112]">
                      {aspect}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="border-t border-[#111112] pt-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6E6D68]">
                06 / Source
              </p>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block break-all text-sm underline decoration-[#D45A2A] decoration-1 underline-offset-4"
              >
                {project.githubUrl}
              </a>
            </section>
          </div>
        </div>

        <footer className="border-t border-[#111112] pt-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6E6D68]">
            Next case study
          </p>
          <Link
            href={"/projects/" + nextProject.slug}
            className="mt-2 block font-display text-3xl font-semibold text-[#111112] transition-colors hover:text-[#D45A2A] sm:text-4xl"
          >
            {nextProject.title} →
          </Link>
        </footer>
      </div>
    </article>
  );
}
