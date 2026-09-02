export interface Experience {
  role: string
  org: string
  dates: string
  points: string[]
  current?: boolean
}

export const experience: Experience[] = [
  {
    role: 'Agentic AI Development Intern',
    org: 'Panaversity',
    dates: 'Aug 2026 — Present',
    current: true,
    points: [
      'Working on agentic AI development at Panaversity — building AI agent workflows, integrating LLM-based tooling, and testing agent behavior in real-world scenarios.',
    ],
  },
  {
    role: 'AI / Software Engineering Intern',
    org: 'Wicked Digital',
    dates: 'Aug 2026 — Present',
    current: true,
    points: [
      'Built Ask-My-Docs, a Retrieval-Augmented Generation (RAG) "chat with your docs" application with local embeddings, a swappable LLM backend, and grounded answers with inline citations.',
      'Contributing to an internal CRM covering Microsoft Entra ID login, role-based access, deal tracking, Kanban boards, and multi-currency sales pipelines.',
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
