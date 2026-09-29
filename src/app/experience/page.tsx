import type { Metadata } from "next";
import Link from "next/link";
import { experiences } from "@/data/experience";
import { PageBackground } from "@/components/PageBackground";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Verified professional experience and engineering roles of Syyeda Aamna.",
};

export default function ExperiencePage() {
  return (
    <div className="w-full">
      {/* Editorial Hero Header matching Panel 05 */}
      <section className="relative min-h-[480px] lg:min-h-[520px] border-b border-[#E6E3DC] bg-[#FAF9F6] py-14 sm:py-20 overflow-hidden">
        <PageBackground variant="experience" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D45A2A] mb-3 font-semibold">
              <span>04 &mdash;</span>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-normal tracking-tight text-[#111112]">
              Experience
            </h1>
            <p className="mt-4 font-display text-xl sm:text-2xl text-[#111112] leading-snug">
              My professional journey, roles, and key contributions.
            </p>
            <p className="mt-3 font-sans text-sm text-[#6E6D68] leading-relaxed">
              Professional positions, internships, and specialized technical training strictly reflecting verified engineering responsibilities.
            </p>

            {/* Bottom-Left Pillars Rail matching Panel 05 */}
            <div className="mt-14 pt-2 font-mono text-xs uppercase tracking-widest text-[#6E6D68] space-y-1.5 border-l-2 border-[#D45A2A] pl-3.5">
              <div>PEOPLE</div>
              <div>PROJECTS</div>
              <div>PRACTICE</div>
              <div>PROGRESS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* Experience Timeline */}
        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="p-8 sm:p-10 bg-[#F4F2EC] border border-[#E6E3DC] hover:border-[#111112] transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Meta Column */}
                <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#E6E3DC] pb-6 lg:pb-0 lg:pr-8">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D45A2A] font-semibold">
                    <span>0{idx + 1}</span>
                    <span>&bull;</span>
                    <span>{exp.type}</span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#111112] mt-3">
                    {exp.company}
                  </h2>

                  <div className="font-mono text-sm text-[#111112] font-medium mt-1">
                    {exp.role}
                  </div>

                  <div className="mt-4 space-y-1 font-mono text-xs text-[#6E6D68]">
                    <div>Period: {exp.period}</div>
                    <div>Location: {exp.location}</div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-[#E6E3DC]">
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-[#6E6D68] mb-2 font-semibold">
                      Technologies Engaged
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] px-2 py-0.5 bg-[#FAF9F6] border border-[#E6E3DC] text-[#111112]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Responsibilities Column */}
                <div className="lg:col-span-7">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-[#6E6D68] mb-4 font-semibold">
                    Verified Responsibilities &amp; Workflows
                  </h3>

                  <ul className="space-y-3.5 font-sans text-sm sm:text-base text-[#111112] leading-relaxed">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#D45A2A] font-mono text-xs mt-1 shrink-0">
                          &bull;
                        </span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inquiries Footer */}
        <div className="mt-20 p-8 bg-[#FAF9F6] border border-[#111112] flex flex-col sm:flex-row items-baseline justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-semibold text-[#111112]">
              Interested in reviewing code or technical references?
            </h3>
            <p className="mt-1 font-sans text-xs text-[#6E6D68]">
              Connect directly via verified channels or explore public repositories.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 bg-[#111112] text-[#FAF9F6] font-mono text-xs uppercase tracking-wider hover:bg-[#D45A2A] transition-colors shrink-0"
          >
            Direct Contact &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
