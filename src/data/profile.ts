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
}

export const profile: Profile = {
  name: "Syyeda Aamna",
  displayTitle: "Machine Learning & Software",
  location: "New Delhi, India",
  email: "syyedaaamna682@gmail.com",
  phone: "+91 9639252679",
  linkedin: "https://linkedin.com/in/syyedaaamna",
  github: "https://github.com/Syyeda-Aamna",
  headline: "Machine Learning & Software Engineer",
  positioningStatement:
    "I work with Python, machine learning, data analysis, and backend development.",
  secondaryStatement:
    "B.Tech in Computer Science and Engineering from SRMS Engineering College (2022–2026).",
  shortBio:
    "Syyeda Aamna is a Machine Learning & Software professional based in New Delhi, India. Her work spans Python, machine learning, data analysis, backend development, and Generative AI, with current software engineering experience at Indraprastha Apollo Hospitals.",
  focusAreas: [
    "Machine Learning & Classification",
    "Retrieval-Augmented Generation & LangChain",
    "Data Preprocessing & Exploratory Analysis",
    "Python & FastAPI Backend Development",
    "Vector Search & FAISS Indexing",
    "SQL Databases & .NET Services",
  ],
};
