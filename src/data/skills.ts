export interface CategorizedSkill {
  name: string;
  tier: "Strong" | "Working" | "Familiar";
  evidenceProjectSlug?: string;
  evidenceProjectTitle?: string;
  contextNote?: string;
}

export interface SkillTierGroup {
  tier: "Strong" | "Working" | "Familiar";
  title: string;
  description: string;
  skills: CategorizedSkill[];
}

export const skillTiers: SkillTierGroup[] = [
  {
    tier: "Strong",
    title: "Strong (Project Evidenced)",
    description:
      "Core technologies actively engineered and demonstrated in completed, public portfolio repositories.",
    skills: [
      {
        name: "Python",
        tier: "Strong",
        evidenceProjectSlug: "ai-fraud-detection-system",
        evidenceProjectTitle: "All Projects & Production Workflows",
      },
      {
        name: "Machine Learning (Scikit-Learn)",
        tier: "Strong",
        evidenceProjectSlug: "ai-fraud-detection-system",
        evidenceProjectTitle: "AI Fraud Detection System",
      },
      {
        name: "LangChain",
        tier: "Strong",
        evidenceProjectSlug: "rag-voice-chatbot",
        evidenceProjectTitle: "RAG Voice Chatbot",
      },
      {
        name: "FAISS Vector Search",
        tier: "Strong",
        evidenceProjectSlug: "rag-voice-chatbot",
        evidenceProjectTitle: "RAG Voice Chatbot",
      },
      {
        name: "Pandas & NumPy",
        tier: "Strong",
        evidenceProjectSlug: "netflix-movie-data-analysis",
        evidenceProjectTitle: "Netflix Movie Data Analysis",
      },
      {
        name: "Matplotlib & Seaborn",
        tier: "Strong",
        evidenceProjectSlug: "netflix-movie-data-analysis",
        evidenceProjectTitle: "Netflix Movie Data Analysis",
      },
      {
        name: "FastAPI",
        tier: "Strong",
        evidenceProjectSlug: "ai-fraud-detection-system",
        evidenceProjectTitle: "AI Fraud Detection System",
      },
      {
        name: "SQL",
        tier: "Strong",
        evidenceProjectSlug: undefined,
        evidenceProjectTitle: undefined,
        contextNote: "Applied at Indraprastha Apollo Hospitals clinical pipelines",
      },
    ],
  },
  {
    tier: "Working",
    title: "Working (Practical Experience)",
    description:
      "Technologies applied in internships, system frontends, or enterprise software development.",
    skills: [
      {
        name: "React.js",
        tier: "Working",
        contextNote: "Interactive analytics dashboard in AI Fraud Detection System",
      },
      {
        name: "Generative AI & LLMs",
        tier: "Working",
        contextNote: "Gemini API synthesis in RAG Chatbot & Codevamp internship",
      },
      {
        name: "REST APIs",
        tier: "Working",
        contextNote: "Backend endpoints with FastAPI and ASP.NET Core",
      },
      {
        name: "C# & .NET",
        tier: "Working",
        contextNote: "Enterprise software services at Indraprastha Apollo Hospitals",
      },
      {
        name: "Git & GitHub",
        tier: "Working",
        contextNote: "Version control and collaborative repository maintenance",
      },
    ],
  },
  {
    tier: "Familiar",
    title: "Familiar (Foundational / Coursework)",
    description:
      "Technologies explored through academic coursework, secondary modules, or foundational study.",
    skills: [
      {
        name: "PyTorch",
        tier: "Familiar",
        contextNote: "Deep learning fundamentals and neural network coursework",
      },
      {
        name: "Deep Learning",
        tier: "Familiar",
        contextNote: "Theoretical foundations and model architectures",
      },
      {
        name: "Docker",
        tier: "Familiar",
        contextNote: "Containerization concepts and basic Dockerfile workflows",
      },
      {
        name: "MongoDB",
        tier: "Familiar",
        contextNote: "NoSQL document storage principles",
      },
      {
        name: "Tableau",
        tier: "Familiar",
        contextNote: "Business intelligence visualization basics",
      },
      {
        name: "Java",
        tier: "Familiar",
        contextNote: "Object-oriented programming foundation (academic curriculum)",
      },
      {
        name: "Excel",
        tier: "Familiar",
        contextNote: "Tabular data inspection and preliminary reporting",
      },
    ],
  },
];

// Flat export for compatibility
export const allSkills = skillTiers.flatMap((group) => group.skills);
