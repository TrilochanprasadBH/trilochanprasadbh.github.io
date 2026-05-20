# trilochanprasadbh.github.io

Personal portfolio — built with Vite + React + TypeScript. Deployed via GitHub Actions to GitHub Pages.

**Live:** https://trilochanprasadbh.github.io/

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve the built dist/
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.

## Structure

```
src/
├── components/    UI sections (Hero, About, Experience, Projects, Skills, Education, Contact, Footer, Nav)
├── data/          resume.ts — single source of truth for content
├── hooks/         useReveal.ts — IntersectionObserver-based scroll reveal
├── styles/        global.css — design tokens + all styling
├── App.tsx
└── main.tsx
```
