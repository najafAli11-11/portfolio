import { Reveal } from './Reveal'
import { experience } from '../data/experience'

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-surface-dim dark:bg-dark-surface-dim">
      <div className="container-narrow">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent dark:text-highlight">
            Experience
          </h2>
          <p className="mt-3 max-w-2xl text-lg font-medium text-text dark:text-dark-text">
            Internships & professional work
          </p>
        </Reveal>

        <div className="mt-12 space-y-0">
          {experience.map((item, i) => (
            <Reveal key={`${item.org}-${item.role}`} delay={i * 0.08}>
              <div className="relative flex gap-6 pb-12 last:pb-0 md:gap-10">
                {i < experience.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute left-[5px] top-10 bottom-0 w-px bg-border dark:bg-dark-border md:left-[7.5px]"
                  />
                )}
                <div className="flex flex-col items-center">
                  <span
                    className={`block h-[11px] w-[11px] shrink-0 rounded-full border-2 md:h-[16px] md:w-[16px] ${
                      item.current
                        ? 'border-accent bg-accent/30 dark:border-highlight dark:bg-highlight/30'
                        : 'border-border bg-surface dark:border-dark-border dark:bg-dark-surface'
                    }`}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-base font-semibold text-text dark:text-dark-text">
                      {item.role}
                    </h3>
                    <span className="text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
                      {item.dates}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-accent dark:text-highlight">
                    {item.org}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="text-sm leading-relaxed text-text-secondary dark:text-dark-text-secondary"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}