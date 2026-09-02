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
  return (
    <section id="services" className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent dark:text-highlight">
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

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Bot
            return (
              <Reveal key={service.id} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-xl border border-border-subtle bg-surface p-7 transition-colors hover:border-border dark:border-dark-border-subtle dark:bg-dark-surface dark:hover:border-dark-border">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border-subtle bg-surface-dim text-accent dark:border-dark-border-subtle dark:bg-dark-surface-dim dark:text-highlight">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-text dark:text-dark-text">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {service.whatYouGet.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-text-secondary dark:text-dark-text-secondary"
                      >
                        <span className="h-1 w-1 rounded-full bg-accent dark:bg-highlight" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-80 dark:text-highlight"
                  >
                    Discuss this
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}