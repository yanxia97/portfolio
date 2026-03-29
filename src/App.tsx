import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageRoute } from './components/LanguageRoute'
import { RootRedirect } from './components/RootRedirect'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'

function basename(): string | undefined {
  const base = import.meta.env.BASE_URL
  if (base === '/') return undefined
  return base.replace(/\/$/, '')
}

export default function App() {
  return (
    <BrowserRouter basename={basename()}>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/:lang" element={<LanguageRoute />}>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Route>
        <Route path="*" element={<RootRedirect />} />
      </Routes>
    </BrowserRouter>
  )
}
