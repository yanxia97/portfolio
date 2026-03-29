import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import type { SupportedLng } from '../i18n/config'
import { supportedLngs } from '../i18n/config'
import hero from '../content/hero.json'
import aboutZh from '../content/zh/about.json'
import aboutEn from '../content/en/about.json'
import resumeZh from '../content/zh/resume.json'
import resumeEn from '../content/en/resume.json'
import skillsZh from '../content/zh/skills.json'
import skillsEn from '../content/en/skills.json'
import { publicUrl, PUBLIC_ASSETS } from '../lib/publicUrl'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Resume } from '../sections/Resume'
import { Skills } from '../sections/Skills'
import { Projects } from '../sections/Projects'
import { Contact } from '../sections/Contact'

export function HomePage() {
  const { lang: langParam } = useParams<{ lang: string }>()
  const { t } = useTranslation()
  const lang = (supportedLngs.includes(langParam as SupportedLng)
    ? langParam
    : 'zh') as SupportedLng

  const about = lang === 'zh' ? aboutZh : aboutEn
  const resume = lang === 'zh' ? resumeZh : resumeEn
  const skills = lang === 'zh' ? skillsZh : skillsEn
  const name = hero.name[lang]

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{`${name} — ${t('meta.title')}`}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>
      <Hero lang={lang} headline={about.headline} tagline={about.tagline} />
      <About
        content={{ bio: about.bio, location: about.location, status: about.status }}
        avatarUrl={publicUrl(PUBLIC_ASSETS.avatar)}
        avatarAlt={name}
      />
      <Resume content={resume} />
      <Skills content={skills} />
      <Projects lang={lang} />
      <Contact />
    </>
  )
}
