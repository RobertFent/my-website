import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import '@fontsource-variable/inter';
import './reset.css';
import './index.css';
import App from './App.jsx';

const root = document.getElementById('root');
const app = (
	<StrictMode>
		<App />
		<Analytics />
		<SpeedInsights />
	</StrictMode>
);

// production pages are prerendered (scripts/prerender.js) → hydrate them;
// the dev server serves an empty #root → render from scratch
if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);
