import { Navigate, useLocation } from 'react-router-dom'
import { readStoredLang } from '../lib/langStorage'

function browserDefault(): 'zh' | 'en' {
  if (typeof navigator === 'undefined') return 'zh'
  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

export function RootRedirect() {
  const location = useLocation()
  const stored = readStoredLang()
  const lang = stored ?? browserDefault()
  const hash = location.hash || ''

  return <Navigate to={`/${lang}${hash}`} replace />
}
