# Thota Shiva Kumar — Portfolio

A personal portfolio showcasing full-stack web development, video editing, 3D animation, and motion design. Built with React and Vite, with responsive layouts, scroll-based reveals, interactive project cards, and motion studies.

## Live portfolio

After the first successful GitHub Pages deployment, the site will be available at:

<https://shivathota1323.github.io/shiva-kumar-portfolio/>

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys the site after each push to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions** if it is not already selected.

## Run locally

```bash
npm install
npm run dev
```

Create and preview a production build:

```bash
npm run build
npm run preview
```

## Deploy to Vercel

The repository is also ready to import into Vercel:

- Framework preset: Vite
- Root directory: repository root
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none

## Résumé

- Downloadable PDF: `public/shiva-kumar-resume.pdf`
- Editable HTML version: `resume.html`
- PDF generator: `scripts/build-resume.js`
- Regenerate the PDF: `npm run build:resume`

## Project structure

- `src/App.jsx` — portfolio content, projects, and interactions
- `src/styles.css` — responsive design and animations
- `public/` — portrait, résumé PDF, and favicon
- `.github/workflows/deploy-pages.yml` — GitHub Pages deployment

Local dependencies, build output, and working files are excluded through `.gitignore`.
