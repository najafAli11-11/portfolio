import { Reveal } from './Reveal'
import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface-dim dark:bg-dark-surface-dim">
      <div className="container-narrow">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-text-muted dark:text-dark-text-muted">
            Skills
          </h2>
          <p className="mt-3 max-w-2xl text-lg font-medium text-text dark:text-dark-text">
            Technologies I actually use
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-border-subtle bg-surface p-6 transition-colors hover:border-border dark:border-dark-border-subtle dark:bg-dark-surface dark:hover:border-dark-border">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary dark:text-dark-text-secondary">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border-subtle px-2.5 py-1 text-sm text-text dark:border-dark-border-subtle dark:text-dark-text"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}