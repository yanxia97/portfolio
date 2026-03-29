import { useTranslation } from 'react-i18next'

export type AboutContent = {
  bio: string
  location: string
  status: string
}

type Props = {
  content: AboutContent
  avatarUrl?: string
  avatarAlt: string
}

export function About({ content, avatarUrl, avatarAlt }: Props) {
  const { t } = useTranslation()

  return (
    <section
      id="about"
      className="mx-auto max-w-4xl scroll-mt-20 px-4 py-16 md:py-20"
      aria-labelledby="about-heading"
    >
      <h2
        id="about-heading"
        className="font-display text-2xl font-semibold text-ink md:text-3xl"
      >
        {t('sections.about')}
      </h2>
      <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
        {avatarUrl && (
          <div className="mx-auto shrink-0 md:mx-0">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-lg ring-2 ring-zinc-200 dark:border-zinc-900 dark:ring-zinc-700 md:h-44 md:w-44">
              <img
                src={avatarUrl}
                alt={avatarAlt}
                width={176}
                height={176}
                className="h-full w-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        )}
        <div className="min-w-0 flex-1 space-y-4 text-ink-muted leading-relaxed">
          <p>{content.bio}</p>
          <p className="text-sm">
            <span className="font-medium text-ink">{content.location}</span>
            {' · '}
            {content.status}
          </p>
        </div>
      </div>
    </section>
  )
}
