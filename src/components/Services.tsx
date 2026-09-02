import { motion, useReducedMotion } from 'framer-motion'
import { Bot, LayoutPanelTop, Server, Workflow, ArrowUpRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { services } from '../data/services'
import { Reveal } from './Reveal'

const icons: Record<string, LucideIcon> = {
  Bot,
  Server,
  Workflow,
  LayoutPanelTop,
}

export function Services() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="services" className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-text-muted dark:text-dark-text-muted">
            Services
          </h2>
          <p className="mt-3 max-w-2xl text-lg font-medium text-text dark:text-dark-text">
            What I can build for you
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary dark:text-dark-text-secondary">
            Services are based on what I've actually built and shipped. If you need something here,
            I can deliver it — backed by working, public proof in my portfolio.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-14 gap-y-12 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Bot
            return (
              <motion.div
                key={service.id}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                whileHover={reduceMotion ? undefined : { y: -3 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group flex gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-surface-dim text-text-secondary transition-colors duration-300 group-hover:border-border dark:border-dark-border-subtle dark:bg-dark-surface-dim dark:text-dark-text-secondary dark:group-hover:border-dark-border">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-text dark:text-dark-text">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                    {service.description}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {service.whatYouGet.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-text-secondary dark:text-dark-text-secondary"
                      >
                        <span className="h-1 w-1 rounded-full bg-text-muted dark:bg-dark-text-muted" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors hover:text-accent dark:text-dark-text dark:hover:text-highlight"
                  >
                    Discuss this
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}