import type { SupportedLng } from '../i18n/config'

const LANG_KEY = 'portfolio-lang'

export function persistLang(lang: SupportedLng) {
  try {
    localStorage.setItem(LANG_KEY, lang)
  } catch {
    /* ignore */
  }
}

export function readStoredLang(): SupportedLng | null {
  try {
    const v = localStorage.getItem(LANG_KEY)
    if (v === 'en' || v === 'zh') return v
  } catch {
    /* ignore */
  }
  return null
}
