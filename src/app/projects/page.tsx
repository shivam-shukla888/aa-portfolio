import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { PageBackground } from "@/components/PageBackground";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Curated technical case studies across machine learning classification, RAG architecture, and exploratory data analysis by Syyeda Aamna.",
};

export default function ProjectsPage() {
  return (
    <div className="w-full py-16 sm:py-24 relative overflow-hidden">
      <PageBackground variant="projects" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header matching Panel 03 */}
        <div className="border-b border-[#111112] pb-8 mb-16">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D45A2A] mb-3 font-semibold">
            <span>03 &mdash;</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl font-normal tracking-tight text-[#111112]">
            Projects
          </h1>
          <p className="mt-4 font-display text-xl sm:text-2xl text-[#111112] max-w-2xl leading-snug">
            A collection of AI/ML, data science and software projects built with real-world use cases.
          </p>
          <p className="mt-3 font-sans text-sm text-[#6E6D68] max-w-2xl leading-relaxed">
            Detailed case studies of machine learning systems, semantic retrieval architectures, and exploratory data analyses engineered with Python and standard scientific computing libraries.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-16">
          {projects.map((project) => (
            <article
              key={project.id}
              className="border-y border-[#E6E3DC] py-10 first:border-t-0 sm:py-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Meta Column */}
                <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#E6E3DC] pb-6 lg:pb-0 lg:pr-8">
                  <span className="font-mono text-xl font-bold text-[#D45A2A]">
                    {project.number}
                  </span>
                  <span className="block font-mono text-xs uppercase tracking-widest text-[#6E6D68] mt-1">
                    {project.category}
                  </span>

                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#111112] mt-4 leading-tight">
                    {project.title}
                  </h2>

                  <div className="mt-6 flex flex-col gap-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center justify-center px-4 py-2.5 bg-[#111112] text-[#FAF9F6] font-mono text-xs uppercase tracking-wider hover:bg-[#D45A2A] transition-colors"
                    >
                      Read Case Study &rarr;
                    </Link>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2.5 border border-[#111112] text-[#111112] font-mono text-xs uppercase tracking-wider hover:bg-[#FAF9F6] transition-colors"
                    >
                      GitHub Repository ↗
                    </a>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-8 space-y-6">
                  {project.visualAsset && (
                    <div className="border border-[#E6E3DC] bg-[#F4F2EC] p-3 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.visualAsset.src}
                        alt={project.visualAsset.alt}
                        className="w-full h-auto max-h-[360px] object-contain mx-auto block border border-[#E6E3DC] bg-[#FAF9F6]"
                      />
                    </div>
                  )}

                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-[#6E6D68] mb-2">
                      Overview &amp; Scope
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-[#111112] leading-relaxed">
                      {project.overview}
                    </p>
                  </div>

                  {project.datasetOrScope && (
                    <div className="p-4 bg-[#FAF9F6] border border-[#E6E3DC]">
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-[#D45A2A] font-semibold">
                        Dataset / Data Scope
                      </span>
                      <p className="mt-1 font-mono text-xs text-[#111112]">
                        {project.datasetOrScope}
                      </p>
                    </div>
                  )}

                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-[#6E6D68] mb-2">
                      Key Verified Implementation Facets
                    </h3>
                    <ul className="space-y-2 font-sans text-xs sm:text-sm text-[#111112]">
                      {project.keyAspects.map((aspect, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#D45A2A] font-mono text-xs mt-0.5">&bull;</span>
                          <span>{aspect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-[#6E6D68] mb-2">
                      Stack / Technologies
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
