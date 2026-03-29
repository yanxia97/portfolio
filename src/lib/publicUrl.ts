/** Resolve a file under `public/` with Vite `base` (GitHub Pages subpath). */
export function publicUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  const p = path.replace(/^\//, '')
  return `${base}${p}`.replace(/\/{2,}/g, '/')
}

export const PUBLIC_ASSETS = {
  avatar: 'yanxia.jpg',
  resumePdf: '严夏.pdf',
} as const
