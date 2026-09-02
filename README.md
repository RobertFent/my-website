# robertfent.com

Personal portfolio – a single-page React app built with [Vite](https://vite.dev), deployed to [Vercel](https://vercel.com) for free. No server, no Docker, no database.

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New Project → Import** the repo. Vercel detects Vite automatically (build `npm run build`, output `dist`). Click **Deploy**.
3. **Settings → Domains → Add** `robertfent.com` (and `www.robertfent.com`), then create the DNS records Vercel shows at Ionos. HTTPS is automatic.

Every push to `main` deploys automatically afterwards.

`vercel.json` rewrites every path to `index.html` so `/cv` works when opened directly.

## Structure

```
index.html            entry point
public/               static assets (photos, icons, CV pdf, favicon)
src/
  main.jsx            React bootstrap
  App.jsx             tiny router ("/" one-pager, "/cv" CV viewer)
  index.css           all styles
  reset.css           CSS reset + design tokens
  components/         Header, Home, About, Projects, Services, Contact, Blog, CV, Footer, Card
```

## Analytics

Vercel Web Analytics and Speed Insights are wired in via `<Analytics />` and `<SpeedInsights />` in `src/main.jsx`. Enable both in the Vercel dashboard (**Project → Analytics → Enable** and **Project → Speed Insights → Enable**), then redeploy. Both are cookieless and only collect anonymous, aggregated data.

## Notes

- The contact form opens the visitor's mail client with the message prefilled (`mailto:`), so no backend is required.
- Icons by [Icons8](https://icons8.com).
