export interface SkillGroup {
  id: string
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Languages',
    skills: ['Python', 'C++', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: ['FastAPI', 'Flask', 'Node.js', 'Express'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Streamlit', 'Qt', 'HTML', 'CSS'],
  },
  {
    id: 'ai',
    title: 'AI & RAG',
    skills: [
      'RAG pipelines',
      'Embeddings',
      'FAISS',
      'OpenAI Agents SDK',
      'Claude API',
      'Prompt Engineering',
    ],
  },
  {
    id: 'db',
    title: 'Databases',
    skills: ['PostgreSQL', 'SQLite', 'Chroma', 'Vector Databases'],
  },
  {
    id: 'devops',
    title: 'DevOps & Testing',
    skills: ['Docker', 'GitHub Actions', 'Railway', 'Playwright', 'pytest'],
  },
]
