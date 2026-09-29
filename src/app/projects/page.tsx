import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Curated technical case studies across machine learning classification, RAG architecture, and exploratory data analysis by Syyeda Aamna.",
};

export default function ProjectsPage() {
  return (
    <div className="w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="border-b border-[#111112] pb-8 mb-16">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D45A2A] mb-3">
            <span>Engineering Case Studies</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight text-[#111112]">
            Selected Projects
          </h1>
          <p className="mt-4 font-sans text-sm sm:text-base text-[#6E6D68] max-w-2xl leading-relaxed">
            Detailed case studies of machine learning systems, semantic retrieval architectures, and large-scale data analyses engineered with Python and standard scientific computing libraries.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-16">
          {projects.map((project) => (
            <article
              key={project.id}
              className="p-8 sm:p-10 bg-[#F4F2EC] border border-[#E6E3DC] hover:border-[#111112] transition-colors"
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
                      GitHub Repository &nearr;
                    </a>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-8 space-y-6">
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
