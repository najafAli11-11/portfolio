import { GraduationCap } from 'lucide-react'
import { Reveal } from './Reveal'
import { education } from '../data/education'

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent dark:text-highlight">
            Education
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-10 flex gap-4 rounded-xl border border-border-subtle bg-surface p-6 dark:border-dark-border-subtle dark:bg-dark-surface">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-surface-dim text-accent dark:border-dark-border-subtle dark:bg-dark-surface-dim dark:text-highlight">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-text dark:text-dark-text">
                {education[0].degree}
              </h3>
              <p className="mt-0.5 text-sm font-medium text-accent dark:text-highlight">
                {education[0].school} · {education[0].dates}
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                {education[0].details.map((d) => (
                  <li
                    key={d}
                    className="text-sm text-text-secondary dark:text-dark-text-secondary"
                  >
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-t border-border-subtle pt-4 dark:border-dark-border-subtle">
                <div className="flex flex-wrap gap-2">
                  {[
                    'Modern AI Python Level 1 — PIAIC',
                    'ACT AI Training — PM Youth Programme',
                    'Agent Factory & General Agents', 
                  ].map((c) => (
                    <span
                      key={c}
                      className="rounded-md border border-border-subtle px-2.5 py-1 text-xs text-text-secondary dark:border-dark-border-subtle dark:text-dark-text-secondary"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}