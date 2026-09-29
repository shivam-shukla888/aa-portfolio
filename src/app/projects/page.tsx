import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { PageBackground } from "@/components/PageBackground";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Applied AI/ML engineering projects, semantic retrieval architectures, and exploratory data analyses by Syyeda Aamna.",
};

export default function ProjectsPage() {
  return (
    <div className="w-full">
      {/* Editorial Hero Header */}
      <section className="relative min-h-[480px] lg:min-h-[520px] border-b border-[#E6E3DC] bg-[#FAF9F6] py-14 sm:py-20 overflow-hidden">
        <PageBackground variant="projects" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl">
            <div className="font-mono text-xs uppercase tracking-widest text-[#6E6D68] mb-3 font-semibold">
              Selected Work
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-normal tracking-tight text-[#111112]">
              Projects
            </h1>
            <p className="mt-4 font-display text-xl sm:text-2xl text-[#111112] leading-snug">
              Machine learning pipelines, Retrieval-Augmented Generation workflows, and exploratory statistical analyses.
            </p>
            <p className="mt-3 font-sans text-sm text-[#6E6D68] leading-relaxed">
              Technical case studies documenting problem definitions, dataset specifications, architecture designs, evaluation metrics, and source code.
            </p>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="space-y-16">
          {projects.map((project) => (
            <article
              key={project.id}
              className="border-y border-[#E6E3DC] py-10 first:border-t-0 sm:py-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Meta Column */}
                <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#E6E3DC] pb-6 lg:pb-0 lg:pr-8">
                  <span className="block font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold">
                    {project.category}
                  </span>

                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#111112] mt-3 leading-tight">
                    {project.title}
                  </h2>

                  <div className="mt-6 flex flex-col gap-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center justify-center px-4 py-2.5 bg-[#111112] text-[#FAF9F6] font-mono text-xs uppercase tracking-wider hover:bg-[#D45A2A] transition-colors focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
                    >
                      Read Case Study
                    </Link>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2.5 border border-[#111112] text-[#111112] font-mono text-xs uppercase tracking-wider hover:bg-[#FAF9F6] transition-colors focus-visible:outline-2 focus-visible:outline-[#D45A2A]"
                    >
                      GitHub Repository
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2.5 border border-[#D45A2A] text-[#D45A2A] font-mono text-xs uppercase tracking-wider hover:bg-[#D45A2A] hover:text-[#FAF9F6] transition-colors focus-visible:outline-2 focus-visible:outline-[#111112]"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-8 space-y-6">
                  {project.architectureDiagram && (
                    <div className="border border-[#E6E3DC] bg-[#F4F2EC] p-3 overflow-hidden relative">
                      <Image
                        src={project.architectureDiagram.src}
                        alt={project.architectureDiagram.alt}
                        width={800}
                        height={450}
                        className="w-full h-auto max-h-[360px] object-contain mx-auto block border border-[#E6E3DC] bg-[#FAF9F6]"
                        sizes="(max-width: 1024px) 100vw, 768px"
                      />
                    </div>
                  )}

                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-[#4A4944] mb-2 font-semibold">
                      Problem Context
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-[#111112] leading-relaxed">
                      {project.oneLineProblem}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-[#4A4944] mb-2 font-semibold">
                      Engineering Outcomes
                    </h3>
                    <ul className="space-y-2 font-sans text-xs sm:text-sm text-[#111112]">
                      {project.outcomeBullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#D45A2A] font-mono text-xs mt-0.5 shrink-0">&bull;</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-[#4A4944] mb-2 font-semibold">
                      Technologies &amp; Libraries
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-2.5 py-1 bg-[#FAF9F6] border border-[#E6E3DC] text-[#111112]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
