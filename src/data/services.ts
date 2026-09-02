export interface Service {
  id: string
  title: string
  description: string
  whatYouGet: string[]
  icon: string
}

export const services: Service[] = [
  {
    id: 'rag',
    title: 'RAG & AI Integrations',
    description:
      'Chat-with-your-docs applications and AI features built with retrieval-augmented generation — grounded answers with citations, not hallucinations.',
    whatYouGet: [
      'Document Q&A over your own content',
      'Local, private embeddings',
      'Grounded answers with cited sources',
    ],
    icon: 'Bot',
  },
  {
    id: 'backend',
    title: 'Python Backend & API Development',
    description:
      'FastAPI and Flask services — clean, tested, and production-ready REST and WebSocket backends for web apps and internal tools.',
    whatYouGet: [
      'FastAPI / Flask APIs',
      'Validation and error handling',
      'Automated tests',
    ],
    icon: 'Server',
  },
  {
    id: 'automation',
    title: 'Web Automation & Scraping',
    description:
      'Resilient Playwright bots and multi-agent scrapers that turn websites into structured, reusable knowledge — built to survive real-world disruption.',
    whatYouGet: [
      'Reliable browser automation',
      'Website-to-RAG pipelines',
      'Data extraction with provenance',
    ],
    icon: 'Workflow',
  },
  {
    id: 'fullstack',
    title: 'AI-Powered Full-Stack Tools',
    description:
      'Practical, end-to-end applications that combine a backend, a clean frontend, and AI — like screen guidance, lead capture, and brand tracking tools.',
    whatYouGet: [
      'Real-time, full-stack products',
      'React + TypeScript frontends',
      'Docker ready deployments',
    ],
    icon: 'LayoutPanelTop',
  },
]
