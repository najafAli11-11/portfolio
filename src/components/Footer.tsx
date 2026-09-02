import { ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'

export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8 dark:border-dark-border-subtle">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row md:px-8">
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
          © {new Date().getFullYear()} Syed Najaf Haider
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/najafAli11-11"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-md p-2 text-text-secondary transition-colors hover:text-text dark:text-dark-text-secondary dark:hover:text-dark-text"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/najaf-haider-a7a213335/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-md p-2 text-text-secondary transition-colors hover:text-text dark:text-dark-text-secondary dark:hover:text-dark-text"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="#hero"
            aria-label="Back to top"
            className="rounded-md p-2 text-text-secondary transition-colors hover:text-text dark:text-dark-text-secondary dark:hover:text-dark-text"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}