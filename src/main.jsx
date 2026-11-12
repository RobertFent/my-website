import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import '@fontsource-variable/inter';
import './reset.css';
import './index.css';
import App from './App.jsx';
import { resolve } from './routes.js';

const root = document.getElementById('root');
const app = (
	<StrictMode>
		<App />
		<Analytics />
		<SpeedInsights />
	</StrictMode>
);

// Production pages are prerendered (scripts/prerender.js) → hydrate them.
// Render from scratch when there is no markup (dev server) or the markup is
// for a different route (e.g. the shared English 404.html under /de/…).
const prerendered = root.dataset.path;
const matches =
	prerendered &&
	JSON.stringify(resolve(prerendered)) ===
		JSON.stringify(resolve(window.location.pathname));
if (root.firstElementChild && matches) hydrateRoot(root, app);
else createRoot(root).render(app);
