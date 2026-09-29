export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: "employment" | "internship" | "training";
  responsibilities: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "apollo-hospitals",
    role: "Trainee",
    company: "Indraprastha Apollo Hospitals",
    period: "September 2026 — Present",
    location: "New Delhi, India",
    type: "employment",
    responsibilities: [
      "Working on Python and AI/ML-based solutions for real-world applications and data-driven workflows.",
      "Applying Python, SQL, and data processing techniques.",
      "Working on software development using C# and .NET for application and backend development.",
    ],
    technologies: ["Python", "AI/ML", "SQL", "C#", ".NET", "Data Processing"],
  },
  {
    id: "codevamp-technologies",
    role: "GEN AI Intern",
    company: "The Codevamp Technologies",
    period: "November 2025 — April 2026",
    location: "Bareilly, Uttar Pradesh, India",
    type: "internship",
    responsibilities: [
      "Worked on Python-based Data Science and AI/ML projects.",
      "Worked with data cleaning, preprocessing, analysis, and model building.",
      "Worked with Generative AI, LLMs, NLP, and LangChain.",
    ],
    technologies: [
      "Python",
      "Data Science",
      "Machine Learning",
      "Generative AI",
      "LLMs",
      "NLP",
      "LangChain",
    ],
  },
  {
    id: "iit-kanpur",
    role: "Summer Trainee — Python for Data Science",
    company: "IIT Kanpur",
    period: "2025",
    location: "Kanpur, Uttar Pradesh, India",
    type: "training",
    responsibilities: [
      "Completed rigorous summer training covering Python programming fundamentals and object-oriented programming (OOP).",
      "Implemented core data structures, exception handling mechanisms, and systematic algorithmic problem-solving.",
      "Conducted exploratory data analysis, numerical computing, and visualization using NumPy, Pandas, and Matplotlib.",
    ],
    technologies: [
      "Python",
      "OOP",
      "Data Structures",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Data Analysis",
    ],
  },
];
