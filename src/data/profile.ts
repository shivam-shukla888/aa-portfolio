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
  shortBio: string;
  focusAreas: string[];
}

export const profile: Profile = {
  name: "SYYEDA AAMNA",
  displayTitle: "AI / ML / SOFTWARE",
  location: "Bareilly, Uttar Pradesh, India",
  email: "syyedaaamna682@gmail.com",
  phone: "+91 9639252679",
  linkedin: "https://linkedin.com/in/syyedaaamna",
  github: "https://github.com/Syyeda-Aamna",
  headline: "AI/ML Developer & Software Professional",
  positioningStatement:
    "Software professional focused on AI/ML, Python, and data-driven solutions. Experienced in machine learning classification, exploratory data analysis, generative AI workflows, and software development with C# and .NET.",
  shortBio:
    "Syyeda Aamna is an AI/ML-focused software professional based in Bareilly, Uttar Pradesh, India. Her work spans machine learning model development, data preprocessing and analysis, generative AI applications, and enterprise software engineering with Python, C#, and .NET.",
  focusAreas: [
    "Machine Learning & Deep Learning",
    "Generative AI, LLMs & LangChain",
    "Data Preprocessing & Exploratory Analysis",
    "Python & C# / .NET Software Development",
    "Retrieval-Augmented Generation (RAG)",
    "SQL & Database Processing",
  ],
};
