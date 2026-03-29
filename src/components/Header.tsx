import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useParams, useLocation } from 'react-router-dom'
import type { SupportedLng } from '../i18n/config'

const navIds = [
  { id: 'about', key: 'nav.about' },
  { id: 'resume', key: 'nav.resume' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'contact', key: 'nav.contact' },
] as const

export function Header() {
  const { t } = useTranslation()
  const { lang } = useParams<{ lang: string }>()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const other: SupportedLng = lang === 'en' ? 'zh' : 'en'
  const hash = location.hash || ''
  const switchHref = `/${other}${hash}`

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-surface/90 backdrop-blur-md dark:border-zinc-800/80">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3">
        <a
          href={`#top`}
          className="font-display text-lg font-semibold text-ink hover:text-accent"
          onClick={() => setOpen(false)}
        >
          Portfolio
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navIds.map(({ id, key }) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-lg px-3 py-2 text-sm text-ink-muted transition hover:bg-surface-muted hover:text-ink"
            >
              {t(key)}
            </a>
          ))}
          <Link
            to={switchHref}
            className="ml-2 rounded-lg border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-600"
            state={{ fromHash: hash }}
          >
            {t(`lang.${other}`)}
          </Link>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Link
            to={switchHref}
            className="rounded-lg border border-zinc-300 px-2 py-1.5 text-sm dark:border-zinc-600"
          >
            {t(`lang.${other}`)}
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-ink-muted hover:bg-surface-muted"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">Menu</span>
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {open && (
        <div
          id="mobile-nav"
          className="border-t border-zinc-200 px-4 py-3 dark:border-zinc-800 md:hidden"
        >
          {navIds.map(({ id, key }) => (
            <a
              key={id}
              href={`#${id}`}
              className="block rounded-lg px-3 py-2 text-ink-muted hover:bg-surface-muted"
              onClick={() => setOpen(false)}
            >
              {t(key)}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
