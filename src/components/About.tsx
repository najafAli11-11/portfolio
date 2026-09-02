import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent dark:text-highlight">
            About
          </h2>
          <div className="mt-4 max-w-3xl space-y-5 text-base leading-relaxed text-text-secondary dark:text-dark-text-secondary">
            <p>
              I'm a <span className="font-medium text-text dark:text-dark-text">BS Computer Science</span>{' '}
              student at Bahria University with hands-on internship experience across{' '}
              <span className="font-medium text-text dark:text-dark-text">
                Retrieval-Augmented Generation, resilient web automation, and AI integrations
              </span>
              . My work sits at the intersection of backend engineering and practical AI — building
              systems that are tested, grounded, and actually deployable.
            </p>
            <p>
              I've shipped a RAG app that answers only from retrieved content with citations, an
              embeddable lead-capture widget backed by a heavily hardened submission endpoint, and a
              multi-agent scraper with 174 automated tests. I write specs first, test what I build,
              and value clean, defensible engineering.
            </p>
            <p>
              My strongest areas are{' '}
              <span className="font-medium text-text dark:text-dark-text">
                Python backends (FastAPI/Flask), RAG pipelines, browser automation with Playwright,
                and full-stack AI tools
              </span>{' '}
              with React. I'm someone who thrives independently and in a team, and I pick up new
              tools quickly.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}