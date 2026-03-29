import { useTranslation } from 'react-i18next'
import { Link, useParams, useLocation } from 'react-router-dom'
import type { SupportedLng } from '../i18n/config'

export function Footer() {
  const { t } = useTranslation()
  const { lang } = useParams<{ lang: string }>()
  const location = useLocation()
  const other: SupportedLng = lang === 'en' ? 'zh' : 'en'
  const hash = location.hash || ''

  return (
    <footer className="mt-auto border-t border-zinc-200 py-8 text-center text-sm text-ink-muted dark:border-zinc-800">
      <p className="mb-2">
        © {new Date().getFullYear()} · {t('footer.rights')}
      </p>
      <Link to={`/${other}${hash}`} className="text-accent hover:underline">
        {t(`lang.${other}`)}
      </Link>
    </footer>
  )
}
