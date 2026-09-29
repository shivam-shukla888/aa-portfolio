export interface MetricRow {
  metric: string;
  value: string;
  benchmarkOrNote: string;
}

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  oneLineProblem: string;
  oneLineDescription: string;
  overview: string;
  problem: string;
  datasetOrScope: string;
  approach: string;
  architectureDiagram?: {
    src: string;
    alt: string;
    caption: string;
  };
  technologies: string[];
  outcomeBullets: string[];
  keyAspects: string[];
  metricsTable: MetricRow[];
  challenges: string[];
  whatIdImprove: string[];
  githubUrl: string;
  liveUrl?: string; // Missing by default -> button is hidden
}

export const projects: Project[] = [
  {
    id: "fraud-detection",
    slug: "ai-fraud-detection-system",
    number: "01",
    title: "AI Powered Fraud Detection Dashboard",
    category: "Machine Learning & Fintech",
    oneLineProblem:
      "Detecting fraudulent banking transactions in real-time while balancing high classification precision with transparent, rule-based explainability.",
    oneLineDescription:
      "Fintech analytics application combining a Scikit-Learn Logistic Regression model with a deterministic rule engine to flag suspicious transactions.",
    overview:
      "A full-stack fintech analytics application developed to identify suspicious financial activity from high-volume transaction data. The system pairs a trained Logistic Regression classification model with a deterministic rule-based fraud engine to calculate fraud risk scores and trigger real-time alerts through an interactive React dashboard.",
    problem:
      "Digital banking platforms process continuous transaction streams where fraudulent events are rare (class-imbalanced) yet financially catastrophic. Pure black-box machine learning models frequently lack the instant interpretability compliance officers require, while static rule systems cannot adapt to non-linear patterns. This project resolves this tension by deploying a hybrid pipeline: a statistical ML classifier operating alongside configurable deterministic risk rules.",
    datasetOrScope:
      "Financial banking transaction dataset comprising features such as Transaction Amount, Account Age, Transaction Frequency, Geographic Distance, and Historical Fraud Flags. Preprocessed with StandardScaler and class weighting.",
    approach:
      "Architected a modular two-tier pipeline. The inference engine is powered by Python and FastAPI, executing a Scikit-Learn Logistic Regression model trained to output class probabilities. An orthogonal rule-based scoring module evaluates high-velocity threshold violations and irregular amounts. An aggregated risk metric is computed and streamed via REST endpoints to a React dashboard visualized with Recharts.",
    architectureDiagram: {
      src: "/projects/fraud-dashboard.png",
      alt: "AI Powered Fraud Detection Dashboard screenshot showing fraud risk score, transaction tables, and visual charts",
      caption: "System Architecture & Dashboard — Real-time transaction ingestion, scoring engine, and React monitoring interface",
    },
    technologies: [
      "Python",
      "FastAPI",
      "Scikit-Learn",
      "React.js",
      "Recharts",
      "Pandas",
      "NumPy",
    ],
    outcomeBullets: [
      "Built a hybrid fraud engine combining Logistic Regression with deterministic heuristic rules to flag anomalous transactions.",
      "Developed a real-time React monitoring dashboard with Recharts displaying risk score gauges and CSV export capabilities.",
      "Evaluated model classification performance on held-out transaction test sets to optimize precision and recall trade-offs.",
    ],
    keyAspects: [
      "Hybrid architecture uniting statistical ML classification with explainable rule-based heuristics",
      "FastAPI backend delivering real-time scoring endpoints with sub-100ms response targets",
      "Interactive React dashboard with dynamic charts and transaction history filtering",
      "Exportable CSV reports for compliance review and audit logging",
    ],
    metricsTable: [
      {
        metric: "Dataset Size",
        value: "6.3 Million+",
        benchmarkOrNote: "Raw transaction log records parsed and processed",
      },
      {
        metric: "Classification Algorithm",
        value: "Logistic Regression",
        benchmarkOrNote: "Class-weighted model with heuristic verification rules",
      },
      {
        metric: "Target Class",
        value: "Fraudulent Transfers",
        benchmarkOrNote: "Binary classification prioritizing anomaly sensitivity",
      },
      {
        metric: "Inference Engine",
        value: "FastAPI REST API",
        benchmarkOrNote: "Sub-100ms targeted response for transaction scoring",
      },
    ],
    challenges: [
      "Severe Class Imbalance: Legitimate transactions overwhelmingly outnumbered fraudulent examples, requiring careful loss weighting and threshold tuning.",
      "Low Latency Requirement: The scoring pipeline had to execute both the statistical inference and rule evaluations synchronously without degrading request throughput.",
      "Explainability: Ensuring flagged transactions clearly indicated whether the alert was triggered by model probability or explicit rule violation.",
    ],
    whatIdImprove: [
      "Train and benchmark non-linear gradient-boosted tree algorithms (e.g., XGBoost, LightGBM) against the baseline logistic model.",
      "Implement Kafka or Redis-based asynchronous message queueing for streaming transaction batches.",
      "Incorporate SHAP (SHapley Additive exPlanations) values in the frontend to visually break down individual feature contributions per transaction.",
    ],
    githubUrl: "https://github.com/Syyeda-Aamna/fraud-detection-project",
    // liveUrl intentionally omitted until live deployment URL is provided
  },
  {
    id: "rag-voice-chatbot",
    slug: "rag-voice-chatbot",
    number: "02",
    title: "RAG Voice Chatbot",
    category: "Generative AI & Semantic Retrieval",
    oneLineProblem:
      "Preventing LLM hallucinations during technical document queries through local vector indexing, semantic search, and hands-free voice transcription.",
    oneLineDescription:
      "Retrieval-Augmented Generation assistant using LangChain, HuggingFace embeddings, FAISS vector search, and Gemini LLM with speech input.",
    overview:
      "A Retrieval-Augmented Generation (RAG) conversational pipeline engineered in Python to answer user queries over PDF documents with grounded citations. The system indexes document chunks using HuggingFace sentence transformer embeddings in a locally persistent FAISS vector store, synthesizes responses via Google Gemini LLM, and accepts spoken queries via microphone.",
    problem:
      "Standard foundation LLMs frequently hallucinate or produce generic answers when queried on dense, proprietary technical documentation. Additionally, keyboard-only interaction introduces friction in active reading workflows. This project addresses both issues by combining a local vector-retrieval pipeline with speech-to-text audio input.",
    datasetOrScope:
      "Technical PDF document corpus chunked via LangChain's RecursiveCharacterTextSplitter with an optimized chunk size and overlap to preserve semantic context boundaries.",
    approach:
      "Implemented an end-to-end Python pipeline with LangChain. Documents are extracted via PyPDFLoader, chunked, and converted into dense vector representations with sentence-transformers/all-MiniLM-L6-v2. Embeddings are indexed in a local FAISS vector store with disk persistence. Upon receiving a text or microphone voice query (captured via sounddevice and transcribed via SpeechRecognition), the top-k relevant document passages are retrieved and injected into a constrained prompt synthesized by Google Gemini, requiring explicit page citations.",
    architectureDiagram: {
      src: "/projects/rag-pipeline.svg",
      alt: "RAG Voice Chatbot architecture diagram illustrating document chunking, FAISS vector storage, Gemini generation, and voice input",
      caption: "System Architecture — Ingestion, vector embedding persistence, FAISS retrieval, and multi-modal query execution",
    },
    technologies: [
      "Python 3.10+",
      "LangChain",
      "FAISS",
      "HuggingFace (all-MiniLM-L6-v2)",
      "Google Gemini LLM",
      "SpeechRecognition",
      "PyPDFLoader",
    ],
    outcomeBullets: [
      "Engineered an automated document indexing workflow chunking PDFs and persisting dense vector embeddings into a local FAISS store.",
      "Integrated Google Gemini LLM with strict context-injection prompts requiring verifiable source document citations.",
      "Benchmarked retrieval and generation performance across diverse technical document queries.",
    ],
    keyAspects: [
      "Local vector persistence eliminating recurring remote database hosting overhead",
      "Dense embedding mapping with sentence-transformers/all-MiniLM-L6-v2",
      "Strict context grounding preventing hallucinated responses on unseen queries",
      "Microphone audio capture pipeline with automated speech-to-text query transcription",
    ],
    metricsTable: [
      {
        metric: "Vector Store",
        value: "FAISS FlatIP",
        benchmarkOrNote: "Local dense cosine similarity search over indexed chunks",
      },
      {
        metric: "Embedding Model",
        value: "all-MiniLM-L6-v2",
        benchmarkOrNote: "HuggingFace dense sentence embeddings",
      },
      {
        metric: "Generation Model",
        value: "Google Gemini",
        benchmarkOrNote: "Context-grounded retrieval synthesis with source citations",
      },
      {
        metric: "Input Modality",
        value: "Voice & Text",
        benchmarkOrNote: "Microphone speech-to-text pipeline with real-time transcription",
      },
    ],
    challenges: [
      "Chunk Boundary Optimization: Striking the proper balance between chunk size and overlap so complex formulas and definitions were not split across chunks.",
      "Audio Capture Reliability: Handling varying microphone input levels and background noise during real-time speech capture via sounddevice.",
      "Hallucination Suppression: Formulating negative-constraint prompts instructing Gemini to explicitly refuse queries without grounding evidence in the retrieved text.",
    ],
    whatIdImprove: [
      "Integrate hybrid retrieval combining sparse BM25 keyword matching with dense FAISS vector embeddings.",
      "Implement a re-ranking stage using a Cross-Encoder (e.g., bge-reranker) to refine top-k chunk ordering prior to generation.",
      "Add a web-based user interface using Next.js / Streamlit for cross-platform access.",
    ],
    githubUrl: "https://github.com/Syyeda-Aamna/rag-voice-chatbot",
    // liveUrl intentionally omitted until live deployment URL is provided
  },
  {
    id: "netflix-analysis",
    slug: "netflix-movie-data-analysis",
    number: "03",
    title: "Netflix Movie Data Analysis",
    category: "Exploratory Data Analysis & Statistics",
    oneLineProblem:
      "Deriving actionable insights from ~9,800 heterogeneous streaming catalog records through systematic data cleaning, distribution mapping, and multi-variable correlation.",
    oneLineDescription:
      "Exploratory data analysis investigating catalog evolution, genre distributions, rating dynamics, and audience engagement across ~9,800 titles.",
    overview:
      "An exploratory data science and statistical visualization study examining content patterns across approximately 9,800 movie records in Netflix's catalog. The project inspects release timelines, genre distributions, vote counts, and correlation patterns using Python's numerical and visualization stack.",
    problem:
      "Raw streaming entertainment datasets contain inconsistencies including malformed release dates, missing attribute values, and skewed audience vote counts. Extracting reliable trends in genre popularity, content volume growth, and audience rating correlations requires rigorous data hygiene and statistical distribution mapping.",
    datasetOrScope:
      "Dataset of ~9,800 catalog movie records containing Release_Date, Title, Popularity, Vote_Count, Vote_Average, and Genre fields. Cleaned and structured using Pandas.",
    approach:
      "Conducted in Python using Jupyter and VS Code environments. Built a structured preprocessing pipeline to impute missing fields, parse datetime attributes into numerical release years, and isolate multi-genre strings. Generated exploratory distribution plots, genre frequency counts, and Pearson correlation matrices using Matplotlib and Seaborn.",
    architectureDiagram: {
      src: "/projects/netflix-genre-distribution.png",
      alt: "Netflix movie genre distribution chart showing statistical frequencies across ~9,800 records",
      caption: "Exploratory Data Visualization — Empirical genre distribution and frequency counts across the catalog",
    },
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
    ],
    outcomeBullets: [
      "Processed and cleansed ~9,800 records, standardizing date formats, handling missing entries, and decomposing genre classifications.",
      "Constructed statistical distribution visualizations for audience ratings, vote counts, and catalog growth across historical release eras.",
      "Computed multi-variable correlation heatmaps identifying relationships between popularity metrics and viewer ratings.",
    ],
    keyAspects: [
      "End-to-end exploratory pipeline handling missing value imputation and type normalization",
      "Empirical mapping of movie catalog growth over consecutive decades",
      "Genre frequency analysis identifying dominant content production trends",
      "Multi-variable correlation matrix examining vote count versus popularity dynamics",
    ],
    metricsTable: [
      {
        metric: "Catalog Records Cleaned",
        value: "~9,800",
        benchmarkOrNote: "Complete dataset parsed without row drop errors",
      },
      {
        metric: "Attribute Scope",
        value: "6 Dimensions",
        benchmarkOrNote: "Release date, title, popularity, votes, rating, genres",
      },
      {
        metric: "Statistical Methods",
        value: "Pearson Correlation",
        benchmarkOrNote: "Correlation matrix computed across numeric attributes",
      },
      {
        metric: "Visualization Stack",
        value: "Matplotlib & Seaborn",
        benchmarkOrNote: "Distributions, box plots, and correlation heatmaps",
      },
    ],
    challenges: [
      "Date Inconsistencies: Catalog records featured disparate date formats and missing month/day entries requiring regex standardization.",
      "Multi-Label Genre Fields: Multiple genres encoded into single strings required flattening and one-hot representation for accurate individual frequency calculation.",
      "Outlier Management: A small subset of viral titles had disproportionately massive vote counts, necessitating log-scale transformations for visualizations.",
    ],
    whatIdImprove: [
      "Perform natural language topic modeling (e.g., LDA or BERTopic) on movie descriptions to discover thematic clusters beyond standard genre tags.",
      "Build an interactive Streamlit or Dash web application allowing users to filter content by release decade and rating dynamically.",
      "Incorporate box-office gross revenue data to study return-on-investment patterns.",
    ],
    githubUrl: "https://github.com/Syyeda-Aamna/netflix-movie-data-analysis",
    // liveUrl intentionally omitted until live deployment URL is provided
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
