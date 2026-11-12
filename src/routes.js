/**
 * Route table: maps URLs to pages and back, per locale.
 *
 *   /                      /de                       home
 *   /cv                    /de/cv                    CV
 *   /datenschutz                                     privacy policy (German only)
 */
import { content, LOCALES } from './content/index.js';

const BASE = { en: '', de: '/de' };
export const LEGAL_PAGES = ['datenschutz'];

export const homePath = (locale) => BASE[locale] || '/';

export const pathFor = ({ locale, page }) => {
	switch (page) {
		case 'home':
			return homePath(locale);
		case 'cv':
			return `${BASE[locale]}/cv`;
		default:
			return `/${page}`; // legal page
	}
};

/** Parse a pathname into { locale, page }. Unknown paths → 'notfound'. */
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
	return { locale, page: 'notfound' };
};

export const isIndexable = ({ page }) =>
	page !== 'notfound' && !LEGAL_PAGES.includes(page);

/** The same page in every locale (for hreflang + language switch), or null. */
export const alternatesFor = (route) =>
	['home', 'cv'].includes(route.page)
		? Object.fromEntries(
				LOCALES.map((locale) => [locale, pathFor({ ...route, locale })])
			)
		: null;

/** Every page that gets prerendered. */
export const allRoutes = () => [
	...LOCALES.flatMap((locale) => [
		{ locale, page: 'home' },
		{ locale, page: 'cv' }
	]),
	...LEGAL_PAGES.map((page) => ({ locale: 'de', page }))
];

const LEGAL_META = {
	datenschutz: {
		title: 'Datenschutzerklärung – Robert Fent',
		description: 'Datenschutzerklärung von robertfent.com.'
	}
};

/** <title> and meta description for a route. */
export const metaFor = (route) =>
	LEGAL_META[route.page] ?? content[route.locale].meta[route.page];
