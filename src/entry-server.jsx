/**
 * Build-time entry: renders a route to static HTML so search engines and
 * link previews see the full content without executing JavaScript.
 */
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export { pages, pageFor, urlFor, structuredData, SITE_URL } from './seo.js';

export const render = (path) =>
	renderToString(
		<StrictMode>
			<App initialPath={path} />
		</StrictMode>
	);
