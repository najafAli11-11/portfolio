export interface Experience {
  role: string
  org: string
  dates: string
  points: string[]
  current?: boolean
}

export const experience: Experience[] = [
  {
    role: 'AI / Software Engineering Intern',
    org: 'Wicked Digital',
    dates: 'Aug 2026 — Present',
    current: true,
    points: [
      'Built Ask-My-Docs, a Retrieval-Augmented Generation (RAG) "chat with your docs" application with local embeddings, a swappable LLM backend, and grounded answers with inline citations.',
      'Contributing to an internal CRM for ~100 employees covering Microsoft Entra ID login, role-based access, deal tracking, Kanban boards, and multi-currency sales pipelines.',
    ],
  },
  {
    role: 'Backend AI Engineering Intern',
    org: 'FlyRank.ai',
    dates: 'Jul 2026 — Present',
    current: true,
    points: [
      'Built the Embeddable Widget Lead-Capture Platform — a drop-in <script> widget rendering popovers and signup forms on any site, backed by a hardened public submission endpoint (CORS, validation, rate limiting, spam filtering, IP→geo enrichment) and an owner dashboard.',
    ],
  },
  {
    role: 'Web Automation Intern',
    org: 'Sobah System Private Ltd',
    dates: 'Summer 2026',
    points: [
      'Built web-automation-lab: a resilient Playwright automation bot that completes its workflow against a configurable local "chaos engine" sandbox (popups, errors, redirects, DOM drift).',
      'Built a multi-agent web scraper that turns any website into a RAG-ready knowledge base with no per-site logic required.',
    ],
  },
]
