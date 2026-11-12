/**
 * Build-time entry: renders a route to static HTML so search engines and
 * link previews see the full content without executing JavaScript.
 */
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export { SITE_URL, hreflangTags, structuredData, urlFor } from './seo.js';
export {
	allRoutes,
	alternatesFor,
	isIndexable,
	metaFor,
	pathFor
} from './routes.js';
export { EMAIL, content, links } from './content/index.js';

export const render = (path) =>
	renderToString(
		<StrictMode>
			<App initialPath={path} />
		</StrictMode>
	);
