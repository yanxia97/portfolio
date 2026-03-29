import { useTranslation } from 'react-i18next'
import projectsData from '../content/projects.json'
import type { SupportedLng } from '../i18n/config'

type Props = { lang: SupportedLng }

export function Projects({ lang }: Props) {
  const { t } = useTranslation()
  const items = projectsData.items

  return (
    <section
      id="projects"
      className="mx-auto max-w-4xl scroll-mt-20 bg-surface-muted/50 px-4 py-16 md:py-20"
      aria-labelledby="projects-heading"
    >
      <h2
        id="projects-heading"
        className="font-display text-2xl font-semibold text-ink md:text-3xl"
      >
        {t('sections.projects')}
      </h2>
      <ul className="mx-auto mt-10 grid max-w-xl gap-6">
        {items.map((p) => (
          <li
            key={p.id}
            className="flex flex-col rounded-2xl border border-zinc-200 bg-surface p-6 shadow-sm dark:border-zinc-800"
          >
            <h3 className="text-lg font-semibold text-ink">{p.name[lang]}</h3>
            <p className="mt-2 flex-1 text-sm text-ink-muted">{p.description[lang]}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-surface-muted px-2 py-0.5 text-xs text-ink-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {p.links.github && (
                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent hover:underline"
                >
                  {t('projects.github')}
                </a>
              )}
              {p.links.demo && (
                <a
                  href={p.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent hover:underline"
                >
                  {t('projects.demo')}
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
