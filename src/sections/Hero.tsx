import { useTranslation } from 'react-i18next'
import hero from '../content/hero.json'
import contact from '../content/contact.json'
import type { SupportedLng } from '../i18n/config'

type Props = {
  lang: SupportedLng
  headline: string
  tagline: string
}

export function Hero({ lang, headline, tagline }: Props) {
  const { t } = useTranslation()
  const name = hero.name[lang]

  return (
    <section
      className="mx-auto max-w-4xl px-4 py-16 text-center md:py-24"
      aria-labelledby="hero-heading"
    >
      <h1
        id="hero-heading"
        className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl"
      >
        {name}
      </h1>
      <p className="mt-2 text-lg font-medium text-accent">{headline}</p>
      <p className="mx-auto mt-4 max-w-xl text-ink-muted">{tagline}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {contact.github && (
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-ink transition hover:bg-accent hover:text-white"
            aria-label="GitHub"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        )}
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="#resume"
          className="rounded-xl bg-accent px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:bg-accent-hover"
        >
          {t('hero.ctaResume')}
        </a>
        <a
          href="#projects"
          className="rounded-xl border border-zinc-300 px-6 py-3 font-medium text-ink transition hover:bg-surface-muted dark:border-zinc-600"
        >
          {t('hero.ctaProjects')}
        </a>
      </div>
    </section>
  )
}
