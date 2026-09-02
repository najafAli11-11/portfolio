import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Code2, Check } from 'lucide-react'
import type { Project } from '../data/projects'
import { projects } from '../data/projects'
import { Reveal } from './Reveal'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={`flex h-full flex-col rounded-2xl border bg-surface transition-colors duration-300 hover:border-border dark:bg-dark-surface dark:hover:border-dark-border ${
        project.featured
          ? 'border-border-subtle dark:border-dark-border-subtle'
          : 'border-border-subtle dark:border-dark-border-subtle'
      }`}
    >
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-surface-dim text-text-secondary dark:border-dark-border-subtle dark:bg-dark-surface-dim dark:text-dark-text-secondary">
            <Code2 className="h-5 w-5" />
          </div>
          {project.featured && (
            <span className="rounded-full border border-border-subtle bg-surface-dim px-2.5 py-0.5 text-xs font-medium text-text-muted dark:border-dark-border-subtle dark:bg-dark-surface-dim dark:text-dark-text-muted">
              Featured
            </span>
          )}
        </div>

        <h3 className="mt-5 text-lg font-semibold text-text dark:text-dark-text">{project.name}</h3>
        <p className="mt-1 text-sm font-medium text-text-secondary dark:text-dark-text-secondary">{project.tagline}</p>

        <p className="mt-3 text-sm leading-relaxed text-text-secondary dark:text-dark-text-secondary">
          {project.description}
        </p>

        {project.highlights && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.highlights.map((h) => (
              <span
                key={h}
                className="rounded-md border border-border-subtle px-2 py-0.5 text-xs font-medium text-text-secondary dark:border-dark-border-subtle dark:text-dark-text-secondary"
              >
                {h}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded bg-surface-dim px-2 py-0.5 text-xs text-text-secondary dark:bg-dark-surface-dim dark:text-dark-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-border-subtle pt-5 dark:border-dark-border-subtle">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors hover:text-accent dark:text-dark-text dark:hover:text-highlight"
          >
            View source
            <ArrowUpRight className="h-4 w-4" />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-80 dark:text-highlight"
            >
              Live demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const more = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-text-muted dark:text-dark-text-muted">
            Projects
          </h2>
          <p className="mt-3 max-w-2xl text-lg font-medium text-text dark:text-dark-text">
            Selected work
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {more.length > 0 && (
          <>
            <Reveal delay={0.1}>
              <h3 className="mt-16 text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
                More projects
              </h3>
            </Reveal>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {more.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          </>
        )}

        <Reveal delay={0.1}>
          <div className="mt-10 flex items-center gap-2 text-sm text-text-secondary dark:text-dark-text-secondary">
            <Check className="h-4 w-4 text-emerald-500" />
            All repositories are public — browse them on GitHub to verify the work.
          </div>
        </Reveal>
      </div>
    </section>
  )
}