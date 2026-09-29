export const links = {
  email: "afeefaquadri@gmail.com",
  linkedin: "https://linkedin.com/in/afeefa-albeena-sheikh-298857192",
  github: "https://github.com/afeefaquadri-png",
};

export type Stage = {
  tag: string;
  title: string;
  when: string;
  body: string;
};

export const stages: Stage[] = [
  {
    tag: "T-101",
    title: "B.Tech, Chemical Engineering",
    when: "CGPA 8.87",
    body: "Mass balances, reactors, separation columns. Four years of learning how systems behave when many parts depend on each other.",
  },
  {
    tag: "T-102",
    title: "A year in industry",
    when: "1 year",
    body: "Working in industry, and slowly realising that the tools I was most curious about were the AI systems, not just using them but building them.",
  },
  {
    tag: "R-201",
    title: "AI-ML Masters Program",
    when: "From Sep 2025",
    body: "Full-stack AI and data science. Python, ML, neural networks, RAG, LangChain, prompt engineering, MLOps. I learned it by building, not by reading.",
  },
  {
    tag: "P-401",
    title: "AI Developer, Euron Systems",
    when: "Now",
    body: "Building features, fixing production bugs and shipping mobile releases across an AI-native EdTech platform.",
  },
];

export const euronWork = [
  {
    label: "AI in the mobile apps",
    body: "Bringing AI tools into the apps: a doubt-solving assistant, chat over course material, language practice and AI interview prep.",
  },
  {
    label: "One codebase, many academies",
    body: "Working on the pipeline that turns one codebase into a fully branded app for each academy. 10+ academies ship to the Play Store and App Store this way.",
  },
  {
    label: "Bugs that only live on real phones",
    body: "Tracking down the problems that never appear in a simulator: real devices, real networks, real payments, protected video and offline playback.",
  },
  {
    label: "Across the whole product",
    body: "The LMS platform, the euron.one app, HRMS and the AI marketing platform. Whatever needs fixing or building that week.",
  },
];

export type Category = "RAG" | "Agents" | "ML" | "Product";

export type Project = {
  tag: string;
  name: string;
  kind: string;
  date: string;
  body: string;
  stack: string[];
  categories: Category[];
  github: string;
  demo?: string;
  featured?: boolean;
};

const gh = (repo: string) => `${links.github}/${repo}`;

export const projects: Project[] = [
  {
    tag: "E-01",
    name: "LearnOS",
    kind: "AI-powered personalised learning",
    date: "Apr 2026",
    body: "An AI tutor for K-12 students that adapts to grade, interests and mood. Voice tutoring, sentiment read from facial expressions, and curricula generated with Claude.",
    stack: ["Next.js", "TypeScript", "Claude API", "Voice AI"],
    categories: ["Product", "Agents"],
    github: gh("AI-Powered-Personalized-Learning-OS"),
    demo: "https://dev.djz927engt7k1.amplifyapp.com/",
    featured: true,
  },
  {
    tag: "E-02",
    name: "KnowledgeForge",
    kind: "Enterprise knowledge copilot",
    date: "Mar 2026",
    body: "Ask a question, get an answer grounded in the company's own documents. RAG and document AI to break down information silos inside an organisation.",
    stack: ["Python", "FastAPI", "RAG", "AWS"],
    categories: ["RAG", "Product"],
    github: gh("Enterprise-Grade-AI-Knowledge-Copilot"),
    demo: "https://dev.d2dg07mc33522q.amplifyapp.com/home",
    featured: true,
  },
  {
    tag: "E-03",
    name: "AWS Legal RAG",
    kind: "Legal question answering",
    date: "Mar 2026",
    body: "Hybrid retrieval, 60% semantic and 40% keyword, with FAISS HNSW indexing, SHA-256 deduplication, Bedrock Titan embeddings and top-5 re-ranking.",
    stack: ["AWS Bedrock", "OpenSearch", "FAISS", "FastAPI"],
    categories: ["RAG"],
    github: gh("AWS_RAG_SYSTEM"),
    featured: true,
  },
  {
    tag: "E-04",
    name: "Guardrail",
    kind: "Agentic AI safety",
    date: "Jan 2026",
    body: "Six layers between a request and an action: policy, validation, verification, execution, filtering and logging. 9 LangChain tools with a full audit trail.",
    stack: ["LangChain", "FastAPI", "Supabase"],
    categories: ["Agents"],
    github: gh("guardrail"),
  },
  {
    tag: "E-05",
    name: "Klassify",
    kind: "ML experimentation platform",
    date: "Feb 2026",
    body: "Train and compare 10+ algorithms, with SHAP explanations for every model. Training runs in the background on Celery and Redis.",
    stack: ["FastAPI", "Celery", "Redis", "SHAP"],
    categories: ["ML"],
    github: gh("klassify"),
    demo: "https://klassify.streamlit.app/",
  },
  {
    tag: "E-06",
    name: "BazaarMind AI",
    kind: "Retail business OS",
    date: "Dec 2025",
    body: "A multi-agent system for 20+ kinds of Indian shops, with WhatsApp order automation powered by Google Gemini.",
    stack: ["Gemini", "FastAPI", "MongoDB", "Docker"],
    categories: ["Agents", "Product"],
    github: gh("bazaarmind-AI"),
    demo: "https://bazaarmind-ai.streamlit.app/",
  },
  {
    tag: "E-07",
    name: "CrewInsight",
    kind: "HR analytics",
    date: "Feb 2026",
    body: "Workforce analysis and performance tracking with AI-driven insights, for teams that want decisions backed by data.",
    stack: ["Python", "Streamlit", "scikit-learn"],
    categories: ["ML"],
    github: gh("CrewInsight-project"),
    demo: "https://crewinsight-project.streamlit.app/",
  },
  {
    tag: "E-08",
    name: "Healthcare AI Diagnosis",
    kind: "Disease prediction assistant",
    date: "Nov 2025",
    body: "GPT-4o combined with classic ML models to predict 20+ conditions, with a Next.js front end and a CSV ingestion pipeline.",
    stack: ["GPT-4o", "XGBoost", "FastAPI", "Next.js"],
    categories: ["ML", "Product"],
    github: gh("eurondoctorshelp"),
  },
  {
    tag: "E-09",
    name: "AutoML Suite v2",
    kind: "Automated model selection",
    date: "Oct 2025",
    body: "30+ models, feature engineering pipelines, hyperparameter tuning and automatic evaluation with ROC-AUC and PR curves.",
    stack: ["Python", "XGBoost", "Streamlit"],
    categories: ["ML"],
    github: gh("Advanced-Auto-ML-Suite"),
  },
];

export const toolkit = [
  {
    group: "AI",
    items: ["LangChain", "RAG", "Claude API", "AWS Bedrock", "Gemini", "GPT-4o", "HuggingFace", "LoRA / QLoRA", "Vector databases", "Multi-agent systems"],
  },
  {
    group: "Machine learning",
    items: ["scikit-learn", "XGBoost", "LightGBM", "CatBoost", "SHAP", "MLflow", "DVC"],
  },
  {
    group: "Web and mobile",
    items: ["TypeScript", "Next.js", "React", "React Native", "Node.js", "FastAPI", "Streamlit"],
  },
  {
    group: "Data and infra",
    items: ["PostgreSQL", "MongoDB", "Supabase", "OpenSearch", "FAISS", "Redis", "Celery", "Docker", "AWS"],
  },
];
