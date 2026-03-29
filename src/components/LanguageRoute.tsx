import { useEffect } from 'react'
import { Navigate, Outlet, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { SupportedLng } from '../i18n/config'
import { supportedLngs } from '../i18n/config'
import { persistLang } from '../lib/langStorage'

export function LanguageRoute() {
  const { lang } = useParams<{ lang: string }>()
  const { i18n } = useTranslation()

  useEffect(() => {
    const l = lang as SupportedLng
    if (supportedLngs.includes(l)) {
      void i18n.changeLanguage(l)
      persistLang(l)
    }
  }, [lang, i18n])

  if (!lang || !supportedLngs.includes(lang as SupportedLng)) {
    const hash = typeof window !== 'undefined' ? window.location.hash : ''
    return <Navigate to={`/zh${hash}`} replace />
  }

  return <Outlet />
}
