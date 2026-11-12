# robertfent.com

Personal portfolio – a single-page React app built with [Vite](https://vite.dev), deployed to [Vercel](https://vercel.com) for free. No server, no Docker, no database.

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build into dist/ (incl. prerendered HTML + sitemap)
npm run preview   # serve the production build locally
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New Project → Import** the repo. Vercel detects Vite automatically (build `npm run build`, output `dist`). Click **Deploy**.
3. **Settings → Domains → Add** `robertfent.com` (and `www.robertfent.com`), then create the DNS records Vercel shows at Ionos. HTTPS is automatic.

Every push to `master` deploys automatically afterwards.

`vercel.json` rewrites every path to `index.html` so `/cv` works when opened directly.

## Structure

```
index.html            entry point
public/               static assets (portrait, photo, icons, CV pdf, favicon)
src/
  main.jsx            React bootstrap (font, styles, Vercel analytics)
  App.jsx             tiny client-side router (pages defined in routes.js)
  routes.js           URL ↔ page mapping per language
  seo.js              metadata, hreflang and JSON-LD
  content/            copy per language (en.js, de.js) + shared facts (shared.js)
  useReveal.js        scroll-in animation hook
  index.css           all styles (design tokens at the top)
  reset.css           CSS reset
  components/         Header, Hero, Section, About, Projects, Contact, CV, LegalPage, Footer, Icon
```

To change text, edit `src/content/en.js` and `src/content/de.js` — the components only render what is in there.

## Analytics

Vercel Web Analytics and Speed Insights are wired in via `<Analytics />` and `<SpeedInsights />` in `src/main.jsx`. Enable both in the Vercel dashboard (**Project → Analytics → Enable** and **Project → Speed Insights → Enable**), then redeploy. Both are cookieless and only collect anonymous, aggregated data.

## Notes

- The contact form opens the visitor's mail client with the message prefilled (`mailto:`), so no backend is required.
- Inter is self-hosted via `@fontsource-variable/inter`, so no requests go to Google Fonts.
- Icons by [Icons8](https://icons8.com).

## Content, languages and SEO

- All copy lives in `src/content/` (`en.js`, `de.js`, shared facts in `shared.js`). The site is available in English (`/`) and German (`/de`).
- Pages and URLs are defined in `src/routes.js`: home and CV in English and German (`/`, `/cv`, `/de`, `/de/cv`) plus the German privacy policy `/datenschutz`.
- `npm run build` prerenders every page to static HTML (`scripts/prerender.js`) with its own title, description, canonical, hreflang and JSON-LD, and generates `sitemap.xml` and `llms.txt`. The browser then hydrates the page.
- The canonical domain is `https://www.robertfent.com` (the bare domain redirects there).
