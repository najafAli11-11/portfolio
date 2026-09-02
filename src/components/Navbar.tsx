import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { GithubIcon, LinkedinIcon } from './icons'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[]
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? 'border-b border-border-subtle bg-surface/85 backdrop-blur dark:border-dark-border-subtle dark:bg-dark-surface/85'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8"
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            className="text-lg font-semibold tracking-tight text-text dark:text-dark-text"
          >
            Najaf<span className="text-accent dark:text-highlight">.</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active === link.href
                    ? 'text-accent dark:text-highlight'
                    : 'text-text-secondary hover:text-text dark:text-dark-text-secondary dark:hover:text-dark-text'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <a
              href="https://github.com/najafAli11-11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-md p-2 text-text-secondary transition-colors hover:text-text dark:text-dark-text-secondary dark:hover:text-dark-text"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/najaf-haider-a7a213335/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-md p-2 text-text-secondary transition-colors hover:text-text dark:text-dark-text-secondary dark:hover:text-dark-text"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={toggle}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="rounded-md p-2 text-text-secondary transition-colors hover:text-text dark:text-dark-text-secondary dark:hover:text-dark-text"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="rounded-md p-2 text-text-secondary transition-colors hover:text-text dark:text-dark-text-secondary dark:hover:text-dark-text md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-16 z-40 bg-surface/95 backdrop-blur dark:bg-dark-surface/95 md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-8" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-3 text-lg font-medium transition-colors ${
                    active === link.href
                      ? 'text-accent dark:text-highlight'
                      : 'text-text hover:bg-surface-dim dark:text-dark-text dark:hover:bg-dark-surface-dim'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
