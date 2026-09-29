import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { educationList } from "@/data/education";
import { skillCategories } from "@/data/skills";
import { verifiedTraining } from "@/data/training";

export function getPortfolioSystemContext(): string {
  const skillsText = skillCategories
    .map((cat) => `• ${cat.category}: ${cat.skills.join(", ")}`)
    .join("\n");

  const experiencesText = experiences
    .map(
      (exp) => `• Role: ${exp.role} at ${exp.company}
  Period: ${exp.period} (${exp.location})
  Summary: ${exp.responsibilities.join(" ")}
  Technologies: ${exp.technologies.join(", ")}`
    )
    .join("\n\n");

  const projectsText = projects
    .map(
      (p) => `• Project ${p.number}: ${p.title}
  One-line: ${p.oneLineDescription}
  Overview: ${p.overview}
  Problem: ${p.problemContext}
  ${p.datasetOrScope ? `Data Scope: ${p.datasetOrScope}` : ""}
  Implementation: ${p.implementation}
  Tech: ${p.technologies.join(", ")}
  Highlights: ${p.keyAspects.join("; ")}
  GitHub: ${p.githubUrl}`
    )
    .join("\n\n");

  const educationText = educationList
    .map(
      (edu) => `• ${edu.degree} — ${edu.institution}, ${edu.location} (${edu.period}${
        edu.boardOrUniversity ? `, Board: ${edu.boardOrUniversity}` : ""
      })`
    )
    .join("\n");

  const trainingText = verifiedTraining
    .map(
      (tr) => `• ${tr.title} (${tr.type}) — ${tr.institution} (${tr.year})
  Curriculum: ${tr.skillsCovered.join(", ")}
  Summary: ${tr.description}`
    )
    .join("\n");

  return `
VERIFIED PORTFOLIO KNOWLEDGE BASE FOR SYYEDA AAMNA:

OWNER DETAILS:
- Name: ${profile.name}
- Title: ${profile.displayTitle}
- Location: ${profile.location}
- Email: ${profile.email}
- Phone: ${profile.phone}
- LinkedIn: ${profile.linkedin}
- GitHub: ${profile.github}
- Positioning: ${profile.positioningStatement}

TECHNICAL SKILLS:
${skillsText}

EXPERIENCE & ENGAGEMENTS:
${experiencesText}

VERIFIED PROJECTS & IMPLEMENTATION DETAILS:
${projectsText}

ACADEMIC BACKGROUND:
${educationText}

SPECIALIZED TRAINING:
${trainingText}
`.trim();
}
