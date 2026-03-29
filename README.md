# Portfolio

Personal portfolio (bilingual zh/en), built with **Vite + React + TypeScript + Tailwind CSS**, deployable to **GitHub Pages**.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) — you will be redirected to `/zh` or `/en` based on browser language or saved preference.

## Content

Edit JSON under `src/content/`:

| Path | Purpose |
|------|---------|
| `hero.json` | Display name (zh/en) |
| `zh/about.json`, `en/about.json` | Headline, tagline, bio, location, status |
| `zh/resume.json`, `en/resume.json` | Education & work timeline |
| `zh/skills.json`, `en/skills.json` | Skill categories |
| `projects.json` | Project cards (bilingual fields) |
| `contact.json` | Email, GitHub, blog |

Static files in `public/`:

- `yanxia.jpg` — profile photo (referenced in code as `PUBLIC_ASSETS.avatar`)
- `严夏.pdf` — downloadable résumé (`PUBLIC_ASSETS.resumePdf`)
- `logos/umich-logo.svg` — University of Michigan wordmark (Wikimedia Commons, current upload path `commons/c/c1/…`)
- `logos/sjtu-logo.png` — SJTU color logo (red, from [weijianwen/SJTU-logo-banner](https://github.com/weijianwen/SJTU-logo-banner) PNG; replace with official assets if required)

UI strings (nav, footer, etc.) live in `src/locales/zh.json` and `en.json`. Timeline entries live in `src/content/zh/resume.json` and `en/resume.json`; each item can include a stable `id` and animates when scrolled into view. Optional `logo` may be an `https://` URL or a path under `public/` (e.g. `logos/sjtu.png`); use `logoAlt` for accessibility.

## GitHub Pages

1. Repo **Settings → Pages**: **Source** = **GitHub Actions**.
2. Push to `main`; the workflow builds with `base` set to `/<repository-name>/` automatically.
3. Site URL: `https://<user>.github.io/<repo>/` (e.g. `/portfolio/zh`).

For a **user site** (`username.github.io`), set `VITE_BASE=/` in the workflow build step or adjust `vite.config.ts` so `base` is `/`.

## SPA routing

`404.html` is a copy of `index.html` so refreshing on `/repo/zh` works on GitHub Pages.
