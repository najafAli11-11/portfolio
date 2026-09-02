import { Mail } from 'lucide-react'
import { Reveal } from './Reveal'
import { GithubIcon, LinkedinIcon } from './icons'

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-surface-dim dark:bg-dark-surface-dim">
      <div className="container-narrow">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent dark:text-highlight">
            Contact
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 max-w-3xl">
            <h3 className="text-2xl font-semibold tracking-tight text-text dark:text-dark-text sm:text-3xl">
              Have a project in mind?
            </h3>
            <p className="mt-3 text-base leading-relaxed text-text-secondary dark:text-dark-text-secondary">
              If you need a RAG application, a Python backend, resilient automation, or an
              AI-powered tool — I'd be glad to talk it through. I respond quickly and prefer to
              scope work honestly before starting.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:najafhaider619@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent dark:border-dark-border dark:bg-dark-surface dark:text-dark-text dark:hover:border-highlight dark:hover:text-highlight"
            >
              <Mail className="h-4 w-4" />
              najafhaider619@gmail.com
            </a>
            <a
              href="https://github.com/najafAli11-11"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent dark:border-dark-border dark:bg-dark-surface dark:text-dark-text dark:hover:border-highlight dark:hover:text-highlight"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/najaf-haider-a7a213335/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent dark:border-dark-border dark:bg-dark-surface dark:text-dark-text dark:hover:border-highlight dark:hover:text-highlight"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}