export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  oneLineDescription: string;
  overview: string;
  problemContext?: string;
  datasetOrScope?: string;
  implementation: string;
  technologies: string[];
  keyAspects: string[];
  githubUrl: string;
  liveDemoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "fraud-detection",
    slug: "ai-fraud-detection-system",
    number: "01",
    title: "AI Fraud Detection System",
    category: "Machine Learning / Full Stack",
    oneLineDescription:
      "Fraud-detection dashboard combining machine learning prediction with rule-based checks over a 6.3M-record dataset.",
    overview:
      "A full-stack fraud-detection project that combines machine learning and rule-based checks to classify suspicious transactions and present the result through an analytics dashboard.",
    problemContext:
      "The project is built around transaction-level fraud detection: users can submit transaction details, receive a fraud decision and risk score, and review fraud analytics.",
    datasetOrScope:
      "6.3M-record financial transaction dataset used for preprocessing and fraud classification.",
    implementation:
      "The project uses Python, FastAPI, Scikit-Learn, Pandas and NumPy on the backend, with a React frontend. The ML layer includes Logistic Regression and the application also includes a rule-based fraud engine, transaction monitoring, analytics and CSV report export.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Logistic Regression",
    ],
    keyAspects: [
      "Machine learning and rule-based fraud detection in one application",
      "Fraud / normal classification with a fraud risk score",
      "Transaction monitoring and analytics dashboard",
      "CSV export for analyzed transaction data",
    ],
    githubUrl: "https://github.com/Syyeda-Aamna/fraud-detection-project",
  },
  {
    id: "rag-voice-chatbot",
    slug: "rag-voice-chatbot",
    number: "02",
    title: "RAG Voice Chatbot",
    category: "Generative AI / RAG",
    oneLineDescription:
      "A PDF question-answering chatbot using RAG, FAISS, HuggingFace embeddings, Gemini and voice input.",
    overview:
      "A Retrieval-Augmented Generation chatbot that answers questions from a PDF document. It combines semantic retrieval with a generative model and supports voice-to-text input.",
    problemContext:
      "The project focuses on making a reference document queryable through natural-language questions while also allowing users to submit questions by voice.",
    datasetOrScope:
      "A PDF document is processed into text chunks and indexed as vector embeddings for retrieval.",
    implementation:
      "The Python application splits PDF text into chunks, generates embeddings with HuggingFace Sentence Transformers, stores them in FAISS, retrieves relevant context for a query, and sends that context to Gemini for response generation. The chatbot also returns source page numbers and supports voice input.",
    technologies: [
      "Python",
      "LangChain",
      "FAISS",
      "HuggingFace Sentence Transformers",
      "Gemini LLM",
      "SpeechRecognition",
      "SoundDevice",
    ],
    keyAspects: [
      "PDF question answering through a RAG pipeline",
      "Semantic vector search with FAISS",
      "HuggingFace sentence-transformer embeddings",
      "Gemini-based response generation",
      "Voice-to-text question input",
      "Source page references in responses",
    ],
    githubUrl: "https://github.com/Syyeda-Aamna/rag-voice-chatbot.git",
  },
  {
    id: "netflix-analysis",
    slug: "netflix-movie-data-analysis",
    number: "03",
    title: "Netflix Movie Data Analysis",
    category: "Data Science / EDA",
    oneLineDescription:
      "Exploratory analysis of roughly 9,800 movie records using Python, Pandas, NumPy, Matplotlib and Seaborn.",
    overview:
      "An exploratory data analysis project examining movie release patterns, genre distribution and popularity-related fields in a dataset of roughly 9,800 movies.",
    problemContext:
      "The analysis uses structured movie attributes such as release date, genre, popularity, vote count and vote average to explore patterns in the dataset.",
    datasetOrScope:
      "Approximately 9,800 movie records with fields including Release_Date, Title, Popularity, Vote_Count, Vote_Average and Genre.",
    implementation:
      "The workflow uses Pandas and NumPy for data preparation, including release-date conversion, column cleanup, vote-average categorization and genre transformation. Matplotlib and Seaborn are used for distributions, release trends, correlations and popularity analysis.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter / VS Code",
    ],
    keyAspects: [
      "Genre distribution and movie-release analysis",
      "Popularity and vote-related exploration",
      "Release year distribution visualization",
      "Correlation heatmap and popularity visualizations",
      "Genre transformation for analysis",
    ],
    githubUrl: "https://github.com/Syyeda-Aamna/netflix-movie-data-analysis.git",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
