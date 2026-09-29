export interface Profile {
  name: string;
  displayTitle: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  headline: string;
  positioningStatement: string;
  secondaryStatement: string;
  shortBio: string;
  focusAreas: string[];
  relocationStatus: string;
}

export const profile: Profile = {
  name: "SYYEDA AAMNA",
  displayTitle: "AI/ML ENGINEER (ENTRY-LEVEL)",
  location: "Bareilly, Uttar Pradesh, India",
  email: "syyedaaamna682@gmail.com",
  phone: "+91 9639252679",
  linkedin: "https://linkedin.com/in/syyedaaamna",
  github: "https://github.com/Syyeda-Aamna",
  headline: "Entry-Level AI/ML Engineer",
  positioningStatement:
    "Entry-level AI/ML Engineer specializing in applied machine learning pipelines, RAG systems, and data-driven backend services.",
  secondaryStatement:
    "B.Tech Computer Science graduate (2026) with hands-on experience building end-to-end ML classification, vector retrieval, and exploratory data workflows in Python.",
  shortBio:
    "Syyeda Aamna is an entry-level AI/ML engineer based in Bareilly, Uttar Pradesh, India. Her work focuses on applied machine learning pipelines, semantic retrieval (RAG), exploratory data analysis, and backend engineering with Python, FastAPI, and C# / .NET.",
  focusAreas: [
    "Applied Machine Learning & Classification",
    "Retrieval-Augmented Generation (RAG) & LangChain",
    "Data Preprocessing & Exploratory Analysis",
    "Python, FastAPI & Backend Engineering",
    "Vector Embeddings & FAISS Indexing",
    "SQL Database Processing & .NET",
  ],
  relocationStatus: "Open to Relocation & Remote Roles: [TODO_CONFIRM_RELOCATION_PREFERENCE: YES/NO]",
};
