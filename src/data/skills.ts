export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    description: "Core programming languages for algorithmic logic and software implementation",
    skills: ["Python", "Java", "C#"],
  },
  {
    category: "Machine Learning & AI",
    description: "Machine learning, neural representations, and data science methodologies",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Artificial Intelligence",
      "NLP",
      "Generative AI",
      "LLMs",
      "Data Science",
      "Data Analysis",
      "Data Preprocessing",
      "Data Cleaning",
      "Feature Engineering",
      "Data Visualization",
    ],
  },
  {
    category: "ML Libraries & Frameworks",
    description: "Specialized frameworks for computational modeling, deep learning, and retrieval",
    skills: [
      "Scikit-Learn",
      "PyTorch",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "HuggingFace",
      "LangChain",
    ],
  },
  {
    category: "Backend & Systems",
    description: "Application architecture, backend services, and API interfaces",
    skills: [".NET", "ASP.NET Core", "FastAPI", "REST APIs"],
  },
  {
    category: "Databases",
    description: "Relational querying and document-oriented storage engines",
    skills: ["SQL", "MongoDB"],
  },
  {
    category: "Developer Tools",
    description: "Version control, containerization, and data analytics tools",
    skills: ["Git", "GitHub", "Docker", "Tableau", "Excel"],
  },
];
