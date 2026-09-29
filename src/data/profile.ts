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
  name: "Syyeda Aamna",
  displayTitle: "Machine Learning & Software",
  location: "Bareilly, Uttar Pradesh, India",
  email: "syyedaaamna682@gmail.com",
  phone: "+91 9639252679",
  linkedin: "https://linkedin.com/in/syyedaaamna",
  github: "https://github.com/Syyeda-Aamna",
  headline: "Machine Learning & Software Engineer",
  positioningStatement:
    "I work with Python, machine learning, data analysis, and backend development.",
  secondaryStatement:
    "B.Tech in Computer Science (2022–2026) with projects in fraud detection, retrieval-augmented generation, and exploratory data analysis.",
  shortBio:
    "Syyeda Aamna is a Computer Science student and software developer based in Bareilly, Uttar Pradesh, India. Her work focuses on applied machine learning, semantic retrieval, and backend development with Python, FastAPI, and .NET.",
  focusAreas: [
    "Machine Learning & Classification",
    "Retrieval-Augmented Generation & LangChain",
    "Data Preprocessing & Exploratory Analysis",
    "Python & FastAPI Backend Development",
    "Vector Search & FAISS Indexing",
    "SQL Databases & .NET Services",
  ],
  relocationStatus: "Open to relocation and remote opportunities",
};
