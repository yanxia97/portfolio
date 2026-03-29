import { useTranslation } from 'react-i18next'
import { useInView } from '../hooks/useInView'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { publicUrl, PUBLIC_ASSETS } from '../lib/publicUrl'

export type ResumeEntry = {
  id?: string
  period: string
  title: string
  org: string
  description: string
  /** Absolute URL or path under `public/` (e.g. `logos/sjtu.png`) */
  logo?: string
  logoAlt?: string
}

function resolveLogoSrc(logo: string) {
  return /^https?:\/\//i.test(logo) ? logo : publicUrl(logo.replace(/^\//, ''))
}

export type ResumeContent = {
  education: ResumeEntry[]
  work: ResumeEntry[]
}

type Props = { content: ResumeContent }

function entryKey(prefix: string, e: ResumeEntry, i: number) {
  return e.id ?? `${prefix}-${i}-${e.period}`
}

function TimelineBlock({
  title,
  entries,
  prefix,
}: {
  title: string
  entries: ResumeEntry[]
  prefix: string
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.08 })
  const reducedMotion = usePrefersReducedMotion()
  const active = reducedMotion || inView

  return (
    <div ref={ref}>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent">
        {title}
      </h3>
      <div className="relative pl-6">
        <div
          className="absolute left-[5px] top-2 w-0.5 rounded-full bg-gradient-to-b from-accent via-accent/50 to-zinc-200 transition-transform duration-1000 ease-out motion-reduce:transition-none dark:to-zinc-700"
          style={{
            bottom: 0,
            transformOrigin: 'top',
            transform: active ? 'scaleY(1)' : 'scaleY(0)',
          }}
          aria-hidden
        />
        <ul className="relative space-y-8">
          {entries.map((e, i) => (
            <li
              key={entryKey(prefix, e, i)}
              className="relative transition-all duration-700 ease-out motion-reduce:transition-none"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? 'translateX(0)' : 'translateX(-12px)',
                transitionDelay:
                  reducedMotion || !active ? '0ms' : `${120 + i * 110}ms`,
              }}
            >
              <span
                className="absolute -left-[calc(1.5rem-5px)] top-2 z-[1] block h-3 w-3 rounded-full border-2 border-accent bg-surface shadow-sm transition-transform duration-500 motion-reduce:transition-none"
                style={{
                  transform: active ? 'scale(1)' : 'scale(0)',
                  transitionDelay:
                    reducedMotion || !active ? '0ms' : `${80 + i * 110}ms`,
                }}
                aria-hidden
              />
              {e.logo ? (
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                  <div className="flex shrink-0 justify-center sm:justify-start">
                    <div className="flex h-20 w-full max-w-[200px] items-center justify-center rounded-xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 sm:h-[5.5rem] sm:w-[7.5rem] sm:max-w-none">
                      <img
                        src={resolveLogoSrc(e.logo)}
                        alt={e.logoAlt ?? e.org}
                        className="max-h-16 w-auto max-w-full object-contain object-center sm:max-h-[4.5rem]"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-ink-muted">{e.period}</p>
                    <p className="font-semibold text-ink">{e.title}</p>
                    <p className="text-sm text-accent">{e.org}</p>
                    <p className="mt-2 whitespace-pre-line text-ink-muted leading-relaxed">
                      {e.description}
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-sm text-ink-muted">{e.period}</p>
                  <p className="font-semibold text-ink">{e.title}</p>
                  <p className="text-sm text-accent">{e.org}</p>
                  <p className="mt-2 whitespace-pre-line text-ink-muted leading-relaxed">
                    {e.description}
                  </p>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Resume({ content }: Props) {
  const { t } = useTranslation()
  const pdfHref = publicUrl(PUBLIC_ASSETS.resumePdf)

  return (
    <section
      id="resume"
      className="mx-auto max-w-4xl scroll-mt-20 bg-surface-muted/50 px-4 py-16 md:py-20"
      aria-labelledby="resume-heading"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2
          id="resume-heading"
          className="font-display text-2xl font-semibold text-ink md:text-3xl"
        >
          {t('sections.resume')}
        </h2>
        <a
          href={pdfHref}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-xl border border-zinc-300 bg-surface px-4 py-2.5 text-sm font-medium text-ink shadow-sm transition hover:border-accent hover:text-accent dark:border-zinc-600"
        >
          <svg
            className="h-4 w-4 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          {t('resume.downloadPdf')}
        </a>
      </div>
      <div className="mt-10 grid gap-12 md:grid-cols-2">
        <TimelineBlock
          title={t('resume.education')}
          entries={content.education}
          prefix="edu"
        />
        <TimelineBlock
          title={t('resume.work')}
          entries={content.work}
          prefix="work"
        />
      </div>
    </section>
  )
}
