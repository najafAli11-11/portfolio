import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './icons'

export function Hero() {
  const reduceMotion = useReducedMotion()

  const fade = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-16 md:px-8 lg:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-accent/5 blur-3xl dark:bg-accent/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-highlight/5 blur-3xl dark:bg-highlight/10"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <motion.p
            {...fade(0)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-subtle px-4 py-1.5 text-sm font-medium text-text-secondary dark:border-dark-border-subtle dark:text-dark-text-secondary"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Open to freelance work
          </motion.p>

          <motion.h1
            {...fade(0.1)}
            className="text-4xl font-semibold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl dark:text-dark-text"
          >
            Syed Najaf Haider
          </motion.h1>

          <motion.h2
            {...fade(0.2)}
            className="mt-4 text-xl font-medium text-accent sm:text-2xl dark:text-highlight"
          >
            AI-focused backend developer
          </motion.h2>

          <motion.p
            {...fade(0.3)}
            className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg dark:text-dark-text-secondary"
          >
            I build RAG pipelines, resilient automation, and full-stack AI tools that get real work
            done. Currently a BS Computer Science student with hands-on internship experience
            shipping Python backends, embeddable SaaS widgets, and intelligent systems.
          </motion.p>

          <motion.div {...fade(0.4)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              View My Work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-5 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent dark:border-dark-border dark:text-dark-text dark:hover:border-highlight dark:hover:text-highlight"
            >
              Let's Work Together
            </a>
            <a
              href="https://github.com/najafAli11-11"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-medium text-text-secondary transition-colors hover:text-text dark:text-dark-text-secondary dark:hover:text-dark-text"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            {...fade(0.5)}
            className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border-subtle pt-6 text-sm text-text-secondary dark:border-dark-border-subtle dark:text-dark-text-secondary"
          >
            <span className="flex items-center gap-2">
              <span className="font-medium text-text dark:text-dark-text">Python</span>
              <span aria-hidden="true">·</span>
              FastAPI
            </span>
            <span className="flex items-center gap-2">
              <span className="font-medium text-text dark:text-dark-text">RAG</span>
              <span aria-hidden="true">·</span>
              Embeddings
            </span>
            <span className="flex items-center gap-2">
              <span className="font-medium text-text dark:text-dark-text">React</span>
              <span aria-hidden="true">·</span>
              TypeScript
            </span>
            <span className="hidden items-center gap-2 sm:flex">
              <span className="font-medium text-text dark:text-dark-text">Playwright</span>
              <span aria-hidden="true">·</span>
              Automation
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
