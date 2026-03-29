import { useTranslation } from 'react-i18next'
import contact from '../content/contact.json'

export function Contact() {
  const { t } = useTranslation()

  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl scroll-mt-20 px-4 py-16 md:py-20"
      aria-labelledby="contact-heading"
    >
      <h2
        id="contact-heading"
        className="font-display text-2xl font-semibold text-ink md:text-3xl"
      >
        {t('sections.contact')}
      </h2>
      <div className="mt-8 flex flex-col gap-4 text-ink-muted">
        <a
          href={`mailto:${contact.email}`}
          className="text-lg text-accent hover:underline"
        >
          {contact.email}
        </a>
        <div className="flex flex-wrap gap-4">
          {contact.github && (
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              GitHub
            </a>
          )}
          {contact.blog && (
            <a
              href={contact.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              Blog
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
