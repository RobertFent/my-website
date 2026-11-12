/**
 * Route table: maps URLs to pages and back, per locale.
 *
 *   /                      /de                       home
 *   /cv                    /de/cv                    CV
 *   /services/<slug>       /de/leistungen/<slug>     service detail
 *   /impressum, /datenschutz                         legal (German only)
 */
import { content, LOCALES } from './content/index.js';

const BASE = { en: '', de: '/de' };
const SERVICES_SEGMENT = { en: 'services', de: 'leistungen' };
export const LEGAL_PAGES = ['impressum', 'datenschutz'];

export const homePath = (locale) => BASE[locale] || '/';

export const pathFor = ({ locale, page, id }) => {
	switch (page) {
		case 'home':
			return homePath(locale);
		case 'cv':
			return `${BASE[locale]}/cv`;
		case 'service': {
			const { slug } = content[locale].services.find((s) => s.id === id);
			return `${BASE[locale]}/${SERVICES_SEGMENT[locale]}/${slug}`;
		}
		default:
			return `/${page}`; // legal pages
	}
};

/** Parse a pathname into { locale, page, id? }. Unknown paths → 'notfound'. */
export const resolve = (pathname) => {
	const path = pathname.replace(/(.)\/+$/, '$1');
	const isDe = path === '/de' || path.startsWith('/de/');
	const locale = isDe ? 'de' : 'en';
	const rest = isDe ? path.slice(3) || '/' : path;

	if (rest === '/') return { locale, page: 'home' };
	if (rest === '/cv') return { locale, page: 'cv' };
	if (!isDe && LEGAL_PAGES.includes(rest.slice(1))) {
		return { locale: 'de', page: rest.slice(1) };
	}
	const match = rest.match(/^\/([^/]+)\/([^/]+)$/);
	if (match && match[1] === SERVICES_SEGMENT[locale]) {
		const service = content[locale].services.find((s) => s.slug === match[2]);
		if (service) return { locale, page: 'service', id: service.id };
	}
	return { locale, page: 'notfound' };
};

export const isIndexable = ({ page }) =>
	page !== 'notfound' && !LEGAL_PAGES.includes(page);

/** The same page in every locale (for hreflang + language switch), or null. */
export const alternatesFor = (route) =>
	['home', 'cv', 'service'].includes(route.page)
		? Object.fromEntries(
				LOCALES.map((locale) => [locale, pathFor({ ...route, locale })])
			)
		: null;

/** Every page that gets prerendered. */
export const allRoutes = () => [
	...LOCALES.flatMap((locale) => [
		{ locale, page: 'home' },
		{ locale, page: 'cv' },
		...content[locale].services.map((s) => ({
			locale,
			page: 'service',
			id: s.id
		}))
	]),
	...LEGAL_PAGES.map((page) => ({ locale: 'de', page }))
];

const LEGAL_META = {
	impressum: {
		title: 'Impressum – Robert Fent',
		description: 'Impressum und Anbieterkennzeichnung von robertfent.com.'
	},
	datenschutz: {
		title: 'Datenschutzerklärung – Robert Fent',
		description: 'Datenschutzerklärung von robertfent.com.'
	}
};

/** <title> and meta description for a route. */
export const metaFor = (route) => {
	const c = content[route.locale];
	if (route.page === 'service') {
		const s = c.services.find((x) => x.id === route.id);
		return { title: s.metaTitle, description: s.metaDescription };
	}
	return LEGAL_META[route.page] ?? c.meta[route.page];
};
