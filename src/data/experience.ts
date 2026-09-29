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
    role: "Software Engineering Trainee (AI/ML & Systems) [TODO_CONFIRM_EXACT_DESIGNATION]",
    company: "Indraprastha Apollo Hospitals",
    period: "September 2026 — Present",
    location: "New Delhi, India",
    type: "employment",
    responsibilities: [
      "Engineered automated data processing scripts and backend endpoints using Python and SQL to streamline hospital data workflows, improving processing reliability [TODO_ADD_METRIC_PERCENTAGE].",
      "Assisted in deploying and validating AI/ML model integration points against existing clinical software interfaces, reducing repetitive manual record handling [TODO_ADD_METRIC_HOURS].",
      "Developed backend software services using C# and .NET to ensure stable internal database connectivity and compliant record management.",
    ],
    technologies: ["Python", "Machine Learning", "SQL", "C#", ".NET", "FastAPI"],
  },
  {
    id: "codevamp-technologies",
    role: "GEN AI Intern",
    company: "The Codevamp Technologies",
    period: "November 2025 — April 2026",
    location: "Bareilly, Uttar Pradesh, India",
    type: "internship",
    responsibilities: [
      "Engineered document retrieval and summarization pipelines using Python, LangChain, and Generative AI APIs, delivering question-answering prototypes [TODO_ADD_QUERY_ACCURACY_OR_METRIC].",
      "Cleaned, normalized, and engineered features across structured datasets using Pandas and Scikit-Learn to prepare production-ready training datasets.",
      "Conducted exploratory data analyses and built evaluation scripts to benchmark model responses across diverse text inputs.",
    ],
    technologies: [
      "Python",
      "Data Science",
      "Machine Learning",
      "Generative AI",
      "LLMs",
      "LangChain",
      "Pandas",
    ],
  },
  {
    id: "iit-kanpur",
    role: "Summer Trainee — Python for Data Science",
    company: "IIT Kanpur",
    period: "June 2025 — July 2025 [TODO_CONFIRM_MONTHS]",
    location: "Kanpur, Uttar Pradesh, India",
    type: "training",
    responsibilities: [
      "Completed intensive institutional training in Python programming and Object-Oriented Design (OOP), solving [TODO_NUMBER_OF_PROBLEMS] algorithmic and data structure problems.",
      "Implemented modular data processing pipelines and statistical visualizations on benchmark datasets utilizing NumPy, Pandas, and Matplotlib.",
      "Designed and executed end-to-end exploratory data analysis workflows, identifying anomalies and computing descriptive statistics.",
    ],
    technologies: [
      "Python",
      "OOP",
      "Data Structures",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Exploratory Data Analysis",
    ],
  },
];
