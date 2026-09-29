export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  oneLineDescription: string;
  overview: string;
  problemContext: string;
  datasetOrScope?: string;
  implementation: string;
  technologies: string[];
  keyAspects: string[];
  githubUrl: string;
  liveDemoUrl?: string; // intentionally undefined if not provided
}

export const projects: Project[] = [
  {
    id: "fraud-detection",
    slug: "ai-fraud-detection-system",
    number: "01",
    title: "AI Fraud Detection System",
    category: "Machine Learning / Security",
    oneLineDescription:
      "Machine learning classification system identifying fraudulent transactions across a 6.3M-record dataset.",
    overview:
      "A machine learning-based fraud detection pipeline developed in Python to identify fraudulent transactions from large-scale transactional data. The project applies data preprocessing and machine learning classification to distinguish illegitimate activity from normal transactions.",
    problemContext:
      "Financial systems handle massive transaction volumes where fraudulent events are rare but carry severe security and monetary consequences. The objective is to analyze transaction patterns and reliably classify fraudulent instances using machine learning.",
    datasetOrScope:
      "6.3M-record financial transaction dataset analyzed and processed for pattern detection and model classification.",
    implementation:
      "Implemented using Python and Scikit-Learn. The pipeline handles data preprocessing, cleaning, feature transformation, and machine learning classification algorithms to detect fraudulent transaction patterns.",
    technologies: [
      "Python",
      "Scikit-Learn",
      "Machine Learning Classification",
      "Data Preprocessing",
      "Feature Engineering",
    ],
    keyAspects: [
      "Machine learning classification model built using Python and Scikit-Learn",
      "Processed and evaluated on a 6.3M-record transactional dataset",
      "Structured data preprocessing and feature transformation",
      "Focus on fraudulent transaction identification",
    ],
    githubUrl: "https://github.com/Syyeda-Aamna/fraud-detection-project",
  },
  {
    id: "rag-voice-chatbot",
    slug: "rag-voice-chatbot",
    number: "02",
    title: "RAG Voice Chatbot",
    category: "Generative AI & NLP",
    oneLineDescription:
      "Retrieval-Augmented Generation chatbot combining semantic document retrieval with voice input support.",
    overview:
      "An intelligent conversational assistant built on Retrieval-Augmented Generation (RAG) architecture. It indexes document knowledge using HuggingFace embeddings and FAISS vector search, pairs it with Gemini LLM for synthesis, and supports voice input for spoken interaction.",
    problemContext:
      "Traditional conversational agents lack access to specific reference documents or natural spoken modalities. This project combines document retrieval with modern generative capabilities and speech input for hands-free query resolution.",
    datasetOrScope:
      "Document processing pipeline indexing textual resources into semantic vector representations for similarity retrieval.",
    implementation:
      "Developed in Python. Employs HuggingFace embeddings to convert document content into dense vector representations, FAISS for high-efficiency semantic vector similarity search, Google Gemini LLM for context-grounded response generation, and voice input processing.",
    technologies: [
      "Python",
      "HuggingFace Embeddings",
      "Gemini LLM",
      "FAISS",
      "RAG Architecture",
      "Voice Input",
      "NLP",
    ],
    keyAspects: [
      "Retrieval-Augmented Generation (RAG) pipeline built in Python",
      "Semantic document indexing and retrieval powered by FAISS",
      "Dense vector embeddings generated via HuggingFace models",
      "Synthesis and response formulation using Gemini LLM",
      "Integrated voice input support for hands-free queries",
    ],
    githubUrl: "https://github.com/Syyeda-Aamna/rag-voice-chatbot.git",
  },
  {
    id: "netflix-analysis",
    slug: "netflix-movie-data-analysis",
    number: "03",
    title: "Netflix Movie Data Analysis",
    category: "Data Science & Visualization",
    oneLineDescription:
      "Exploratory data analysis uncovering patterns and distributions across 9,000+ movie records.",
    overview:
      "An exploratory data science and visualization study analyzing content distribution, catalog trends, and attributes across more than 9,000 movie and show records in Netflix's catalog.",
    problemContext:
      "Understanding entertainment catalog characteristics requires structured data hygiene, descriptive statistics, and visualization to reveal release trends, categorization patterns, and catalog composition.",
    datasetOrScope:
      "Dataset of 9,000+ movie and title records analyzed for trends and distributions.",
    implementation:
      "Conducted using Python, Pandas, and NumPy for comprehensive data preprocessing, handling missing entries, and data transformation. Visualizations and distribution analyses were produced using Matplotlib and Seaborn.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Exploratory Data Analysis",
    ],
    keyAspects: [
      "In-depth analysis of 9,000+ catalog records",
      "Rigorous data preprocessing and cleaning with Pandas and NumPy",
      "Exploratory data analysis mapping distributions and trends",
      "Informative statistical visualizations crafted with Matplotlib and Seaborn",
    ],
    githubUrl: "https://github.com/Syyeda-Aamna/netflix-movie-data-analysis.git",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
