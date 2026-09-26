<p align="center">
  <img src="src/img.jpg">
</p>


# Social Media Dashboard

[![CI](https://github.com/fadyehabamer/TailwindReact-SocialDashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/fadyehabamer/TailwindReact-SocialDashboard/actions/workflows/ci.yml)

**Live demo:** https://tailwind-react-social-dashboard.vercel.app

A static social media dashboard UI (followers per network plus an
"Overview - Today" grid) with a light/dark mode toggle. Built with React,
[Vite](https://vite.dev), Tailwind CSS 3 (class-based dark mode) and
`react-icons`. The numbers are placeholder data.

## Getting started

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev      # dev server on http://localhost:3000
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` / `npm start` | Start the Vite development server on http://localhost:3000 |
| `npm test` | Run the Vitest + Testing Library tests in watch mode; `npm test -- --run` runs them once |
| `npm run lint` | Lint with ESLint (`eslint.config.js`) |
| `npm run build` | Production build into `build/` |
| `npm run preview` | Serve the production build locally |

Tailwind is configured in `tailwind.config.cjs` (custom brand colors and
dark palette) and runs through PostCSS (`postcss.config.cjs`), which Vite
picks up automatically.

Deployed on Vercel; `vercel.json` selects the Vite preset and the `build/`
output folder.
