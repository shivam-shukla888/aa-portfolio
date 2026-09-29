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
  Dates: ${exp.period}
  Location: ${exp.location}
  Responsibilities:
  ${exp.responsibilities.map((r) => `  - ${r}`).join("\n")}
  Technologies: ${exp.technologies.join(", ")}`
    )
    .join("\n\n");

  const projectsText = projects
    .map(
      (p) => `• Project ${p.number}: ${p.title}
  Category: ${p.category}
  Description: ${p.oneLineDescription}
  Overview: ${p.overview}
  Problem / Context: ${p.problemContext}
  ${p.datasetOrScope ? `Dataset / Scope: ${p.datasetOrScope}` : ""}
  Implementation: ${p.implementation}
  Technologies: ${p.technologies.join(", ")}
  GitHub: ${p.githubUrl}`
    )
    .join("\n\n");

  const educationText = educationList
    .map(
      (edu) => `• ${edu.degree} — ${edu.institution}, ${edu.location} (${edu.period}${
        edu.boardOrUniversity ? `, ${edu.boardOrUniversity}` : ""
      })`
    )
    .join("\n");

  const trainingText = verifiedTraining
    .map(
      (tr) => `• ${tr.title} (${tr.type}) — ${tr.institution} (${tr.year})
  Focus: ${tr.skillsCovered.join(", ")}
  Description: ${tr.description}`
    )
    .join("\n");

  return `
VERIFIED PORTFOLIO KNOWLEDGE BASE FOR SYYEDA AAMNA:

OWNER DETAILS:
- Full Name: ${profile.name}
- Display Title: ${profile.displayTitle}
- Location: ${profile.location}
- Email: ${profile.email}
- Phone: ${profile.phone}
- LinkedIn: ${profile.linkedin}
- GitHub: ${profile.github}
- Headline: ${profile.headline}
- Professional Positioning: ${profile.positioningStatement}

TECHNICAL SKILLS (VERIFIED ONLY):
${skillsText}

PROFESSIONAL EXPERIENCE:
${experiencesText}

VERIFIED PROJECTS:
${projectsText}

EDUCATION:
${educationText}

VERIFIED SUMMER TRAINING:
${trainingText}
(Note: Training at IIT Kanpur is verified summer training, not an official industry certification. No other certifications are currently verified.)
`.trim();
}
