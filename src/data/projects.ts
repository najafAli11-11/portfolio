export interface Project {
  slug: string
  name: string
  tagline: string
  description: string
  problem: string
  features: string[]
  techStack: string[]
  highlights?: string[]
  githubUrl: string
  liveUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'web-scrapper',
    name: 'Web-Scrapper',
    tagline: 'Multi-agent web scraper → RAG pipeline',
    description:
      'A multi-agent system that turns any website into a searchable, RAG-ready knowledge base. Generic extraction by design — no per-site selectors. Schema-constrained LLM extraction, semantic chunking, local embeddings, and a chat/search/live-query interface.',
    problem:
      'Scraping the web for structured, reusable knowledge usually requires hand-written selectors and bespoke logic per site. This pipeline extracts meaningful content from any website regardless of HTML complexity or JS rendering.',
    features: [
      'Schema-constrained LLM extraction with Pydantic validation',
      'Semantic chunking along page structure, not fixed token windows',
      'Local, free embeddings (BGE-M3 with MiniLM fallback)',
      'Resumable orchestrator with SQLite URL frontier',
      'Hybrid live-query: corpus hit or single-shot scrape on miss',
      '174 automated tests across every layer',
    ],
    techStack: [
      'Python',
      'Playwright',
      'Trafilatura',
      'Chroma',
      'Streamlit',
      'litellm',
    ],
    highlights: ['174 tests', 'Resumable', 'Generic by design'],
    githubUrl: 'https://github.com/najafAli11-11/Web-Scrapper',
    featured: true,
  },
  {
    slug: 'ai-screen-assistant',
    name: 'AI Screen Assistant',
    tagline: 'Real-time, multilingual screen guidance app',
    description:
      'An AI assistant that captures the user’s screen, listens to voice questions in Urdu, English, and Hindi, and speaks step-by-step guidance — like a patient tech-savvy friend. Built for people who struggle with technology.',
    problem:
      'Millions of people — elderly parents, first-time smartphone users — get stuck on simple tasks and cannot follow written guides. No tool looked at their screen and guided them in their own language.',
    features: [
      'Real-time WebRTC screen capture',
      'Voice questions in Urdu, English, and Hindi',
      'Claude Vision multimodal screen analysis',
      'OpenAI Whisper transcription, gTTS/ElevenLabs speech',
      'Live captions, chat history, and pipeline progress',
      'Docker-ready full stack',
    ],
    techStack: ['React', 'TypeScript', 'FastAPI', 'Socket.IO', 'Claude', 'Whisper', 'Docker'],
    highlights: ['Full-stack', '3 languages'],
    githubUrl: 'https://github.com/najafAli11-11/AI-Screen-Assistant',
    featured: true,
  },
  {
    slug: 'embeddable-widget-lead-capture',
    name: 'Embeddable Widget Lead-Capture',
    tagline: 'Drop-in lead-capture platform for any website',
    description:
      'Define a widget (popover / signup form), get a one-line <script> snippet, and collect leads from any external site — validated, rate-limited, spam-filtered, and geo-enriched at the boundary.',
    problem:
      'Sites need a way to capture leads without rebuilding forms or exposing insecure endpoints. A one-line embeddable script must render on arbitrary origins while submissions stay safe and usable.',
    features: [
      'One-line <script> embed, versioned and cached',
      'Hardened public endpoint: CORS, validation, rate limiting, honeypot',
      'IP→geo enrichment with 3-provider fallback chain',
      'Idempotent submissions prevent duplicates',
      'Tenant isolation across widgets',
      '28 automated tests',
    ],
    techStack: ['JavaScript', 'Node.js', 'Express', 'HTML', 'CSS'],
    highlights: ['28 tests', 'Hardened API', 'Embeddable SDK'],
    githubUrl: 'https://github.com/najafAli11-11/Embeddable-Widget-Lead-Capture-Platform',
    featured: true,
  },
  {
    slug: 'ask-my-docs',
    name: 'Ask-My-Docs',
    tagline: 'Chat with your documents — a RAG app from scratch',
    description:
      'A local Streamlit app that answers questions about your documents, grounded with cited sources. Built from scratch to demonstrate every stage of a RAG pipeline: chunking, local embeddings, cosine retrieval, and LLM generation.',
    problem:
      'Most RAG demos are black boxes over pre-built libraries. This project rebuilds every stage by hand and proves answers stay grounded — the model only answers from retrieved chunks, never guesses.',
    features: [
      '350-word chunks with overlap for clean boundaries',
      'Local embeddings with caching (no API, always $0)',
      'Numpy or FAISS retrieval backend, identical results',
      'Swappable LLM backend via any OpenAI-compatible endpoint',
      'Optional cross-encoder reranking',
      'Conversation memory that preserves groundedness',
    ],
    techStack: ['Python', 'Streamlit', 'FAISS', 'sentence-transformers', 'NVIDIA NIM'],
    highlights: ['Built from scratch', 'Grounded answers', 'Swappable LLM'],
    githubUrl: 'https://github.com/najafAli11-11/Ask-My-Docs',
    featured: true,
  },
  {
    slug: 'aeo-visibility-tracker',
    name: 'AEO Visibility Tracker',
    tagline: 'Track brand visibility across AI answer engines',
    description:
      'A rank tracker for AI answer engines. It asks ChatGPT/Claude/Gemini-style engines the questions real customers ask, detects whether a brand (vs. competitors) is named and cited, and reports scores over time.',
    problem:
      'Brands can no longer rely on traditional SEO alone. Visibility in AI-generated answers is now critical, but nothing measured it — this tool tracks it across engines and over time.',
    features: [
      'Pluggable engine adapters (Claude, Gemini)',
      'FastAPI + async SQLAlchemy + Postgres backend',
      'React + TypeScript + Vite dashboard with Recharts',
      'Scheduled runs with retries and retention purge',
      'Detection and scoring kept network-free for testability',
    ],
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'Docker'],
    highlights: ['Full-stack', 'Scheduled', 'Pluggable engines'],
    githubUrl: 'https://github.com/najafAli11-11/AEO-Visibility-Tracker',
  },
  {
    slug: 'web-automation-lab',
    name: 'Web Automation Lab',
    tagline: 'Resilient automation bot vs. a configurable chaos engine',
    description:
      'A local Flask sandbox that injects real-world disruptions on demand (popups, errors, redirects, DOM drift) alongside a resilient Playwright bot that completes its workflow despite the chaos.',
    problem:
      'Automation bots break the moment a page throws popups, errors, or redesigns. This project builds a bot that survives real-world disruptions — and proves it by turning the chaos on.',
    features: [
      'Configurable chaos engine with 15 scenarios',
      'Resilient Playwright bot with retries and recovery',
      'Unit, contract, scenario, and E2E gauntlet tests',
      'Structured event log and run verdicts',
      'Reads only the rendered HTML, never the config',
    ],
    techStack: ['Python', 'Flask', 'Playwright', 'pytest'],
    highlights: ['15 scenarios', 'E2E tests'],
    githubUrl: 'https://github.com/najafAli11-11/web-automation-lab',
  },
]
