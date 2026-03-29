import { useTranslation } from 'react-i18next'

export type SkillsContent = {
  categories: { name: string; items: string[] }[]
}

type Props = { content: SkillsContent }

export function Skills({ content }: Props) {
  const { t } = useTranslation()

  return (
    <section
      id="skills"
      className="mx-auto max-w-4xl scroll-mt-20 px-4 py-16 md:py-20"
      aria-labelledby="skills-heading"
    >
      <h2
        id="skills-heading"
        className="font-display text-2xl font-semibold text-ink md:text-3xl"
      >
        {t('sections.skills')}
      </h2>
      <div className="mt-10 space-y-8">
        {content.categories.map((cat) => (
          <div key={cat.name}>
            <h3 className="mb-3 text-sm font-semibold text-ink-muted">{cat.name}</h3>
            <ul className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-surface-muted px-4 py-1.5 text-sm text-ink ring-1 ring-zinc-200 dark:ring-zinc-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
