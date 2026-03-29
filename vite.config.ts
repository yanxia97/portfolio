import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base =
  process.env.VITE_BASE ??
  (repo ? `/${repo}/` : '/')

function normalizeBase(b: string) {
  if (!b || b === '/') return '/'
  const withSlash = b.endsWith('/') ? b : `${b}/`
  return withSlash.startsWith('/') ? withSlash : `/${withSlash}`
}

// https://vite.dev/config/
export default defineConfig({
  base: normalizeBase(base),
  plugins: [react()],
})
