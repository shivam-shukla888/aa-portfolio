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
  visualAsset?: {
    src: string;
    alt: string;
    caption: string;
  };
}

export const projects: Project[] = [
  {
    id: "fraud-detection",
    slug: "ai-fraud-detection-system",
    number: "01",
    title: "AI Powered Fraud Detection Dashboard",
    category: "Machine Learning & Fintech Systems",
    oneLineDescription:
      "Full-stack fintech analytics platform combining Logistic Regression with rule-based fraud detection to evaluate financial transactions.",
    overview:
      "A full-stack fintech analytics application developed to identify suspicious financial activity from high-volume transaction data. The system pairs a trained Logistic Regression classification model with a deterministic rule-based fraud engine to calculate fraud risk scores and trigger real-time alerts through an interactive React dashboard.",
    problemContext:
      "Digital banking platforms process thousands of transactions per second where fraudulent instances are rare but financially damaging. Relying solely on static rules produces false negatives on novel patterns, while relying solely on black-box ML models can make immediate explainability difficult. The project implements a hybrid approach combining algorithmic prediction with explicit rule-based checks.",
    datasetOrScope:
      "Financial transaction dataset used for training, feature extraction, and transactional behavior simulation.",
    implementation:
      "The backend is built with Python and FastAPI, executing a Scikit-Learn Logistic Regression model alongside behavior pattern detection. The frontend is built in React with Axios and Recharts, providing visual fraud analytics, risk score gauges, transaction monitoring tables, and CSV report export functionality.",
    technologies: [
      "Python",
      "FastAPI",
      "Scikit-Learn (Logistic Regression)",
      "React.js",
      "Axios",
      "Recharts",
      "Pandas & NumPy",
      "Rule-Based Fraud Engine",
    ],
    keyAspects: [
      "Hybrid fraud detection engine combining Logistic Regression with heuristic rule checks",
      "Full-stack implementation featuring FastAPI backend and React analytics frontend",
      "Real-time fraud risk scoring and transaction behavior classification",
      "Interactive data visualization using Recharts and CSV transaction export",
      "Simulates banking transaction monitoring and anomaly alerts",
    ],
    githubUrl: "https://github.com/Syyeda-Aamna/fraud-detection-project",
    visualAsset: {
      src: "/projects/fraud-dashboard.png",
      alt: "AI Powered Fraud Detection Dashboard screenshot showing fraud risk score and transaction analysis",
      caption: "Repository Screenshot — Real-Time Transaction Risk Scoring & Analytics Dashboard",
    },
  },
  {
    id: "rag-voice-chatbot",
    slug: "rag-voice-chatbot",
    number: "02",
    title: "RAG Voice Chatbot",
    category: "Generative AI & Speech Retrieval",
    oneLineDescription:
      "Retrieval-Augmented Generation assistant using HuggingFace embeddings, FAISS vector search, Gemini LLM, and speech-to-text input.",
    overview:
      "A Retrieval-Augmented Generation (RAG) conversational pipeline engineered in Python to answer user queries over PDF documents with grounded citations. The system indexes document chunks using HuggingFace sentence transformer embeddings in a locally persistent FAISS vector store, synthesizes responses via Google Gemini LLM, and accepts spoken queries via microphone.",
    problemContext:
      "Standard large language models hallucinate when asked questions about private or specific reference documents. Furthermore, manual text entry can be inconvenient. This system solves both issues by retrieving exact document context before synthesis and enabling hands-free voice transcription.",
    datasetOrScope:
      "PDF document corpus (notes.pdf) processed and chunked via LangChain RecursiveCharacterTextSplitter into dense vector embeddings.",
    implementation:
      "Developed in Python using the LangChain framework. Document text is extracted via PyPDFLoader, chunked, and converted into dense vector representations using 'sentence-transformers/all-MiniLM-L6-v2'. Vectors are indexed in FAISS with local disk persistence. Queries are synthesized using ChatGoogleGenerativeAI (Gemini) with prompts requiring source page citations. Voice input is captured via sounddevice (44.1 kHz PCM audio) and transcribed using speech_recognition.",
    technologies: [
      "Python 3.10+",
      "LangChain",
      "FAISS (Vector Store)",
      "HuggingFace (all-MiniLM-L6-v2)",
      "Google Gemini LLM",
      "SpeechRecognition & sounddevice",
      "PyPDFLoader",
    ],
    keyAspects: [
      "Complete Retrieval-Augmented Generation pipeline built with LangChain",
      "Semantic indexing using HuggingFace Sentence Transformers (all-MiniLM-L6-v2)",
      "High-efficiency similarity search with locally persisted FAISS vector index",
      "Synthesis grounded by Google Gemini LLM with source PDF page citations",
      "Integrated microphone voice capture and audio transcription pipeline",
    ],
    githubUrl: "https://github.com/Syyeda-Aamna/rag-voice-chatbot",
    visualAsset: {
      src: "/projects/rag-pipeline.svg",
      alt: "RAG Voice Chatbot architecture diagram detailing ingestion, vector storage, generation, and voice modality",
      caption: "System Architecture — Document Chunking, FAISS Vector Indexing & Voice Modality Pipeline",
    },
  },
  {
    id: "netflix-analysis",
    slug: "netflix-movie-data-analysis",
    number: "03",
    title: "Netflix Movie Data Analysis",
    category: "Exploratory Data Analysis & Statistics",
    oneLineDescription:
      "Exploratory data analysis investigating content distributions, genre popularity, and rating dynamics across ~9,800 titles.",
    overview:
      "An exploratory data science and statistical visualization study examining content patterns across approximately 9,800 movie records in Netflix's catalog. The project inspects release timelines, genre distributions, vote counts, and correlation patterns using Python's numerical and visualization stack.",
    problemContext:
      "Understanding catalog composition and viewer reception requires rigorous data hygiene, handling missing records, standardizing release dates, and mapping statistical distributions across multiple attributes.",
    datasetOrScope:
      "Dataset of ~9,800 catalog movie records containing Release_Date, Title, Popularity, Vote_Count, Vote_Average, and Genre fields.",
    implementation:
      "Conducted in Python using Jupyter/VS Code notebooks. Pandas and NumPy handle data cleaning, missing value resolution, and date-to-year extraction. Statistical plots, correlation heatmaps, genre frequency distributions, and release year distributions were generated using Matplotlib and Seaborn.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Exploratory Data Analysis (EDA)",
      "Jupyter Notebook",
    ],
    keyAspects: [
      "Empirical exploratory analysis of ~9,800 movie titles",
      "Date standardization, column filtering, and missing data imputation",
      "Multi-variable correlation analysis across popularity and audience ratings",
      "Statistical distribution mapping using Matplotlib and Seaborn visualization suites",
    ],
    githubUrl: "https://github.com/Syyeda-Aamna/netflix-movie-data-analysis",
    visualAsset: {
      src: "/projects/netflix-genre-distribution.png",
      alt: "Netflix movie genre distribution chart showing statistical frequencies across ~9,800 records",
      caption: "Repository Visualization — Empirical Genre Distribution Across ~9,800 Titles",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
