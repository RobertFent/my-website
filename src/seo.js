/**
 * SEO helpers shared by the build (scripts/prerender.js writes the static
 * <head> of every page) and the client (applyMeta keeps the head in sync
 * after client-side navigation).
 */
import { EMAIL, NAME, content, links } from './content/index.js';
import {
	alternatesFor,
	homePath,
	isIndexable,
	metaFor,
	pathFor
} from './routes.js';

export const SITE_URL = 'https://www.robertfent.com';
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const urlFor = (path) =>
	path === '/' ? `${SITE_URL}/` : SITE_URL + path;

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/** schema.org structured data (JSON-LD) for a route. */
export const structuredData = (route) => {
	const c = content[route.locale];
	const { title, description } = metaFor(route);
	const url = urlFor(pathFor(route));
	const home = urlFor(homePath(route.locale));
	const [current] = c.about.experience;

	const person = {
		'@type': 'Person',
		'@id': PERSON_ID,
		name: NAME,
		url: `${SITE_URL}/`,
		image: `${SITE_URL}/portrait.webp`,
		description: c.hero.intro,
		jobTitle: current.role,
		email: `mailto:${EMAIL}`,
		worksFor: { '@type': 'Organization', name: current.org },
		address: { '@type': 'PostalAddress', addressCountry: 'DE' },
		alumniOf: c.about.education.map((e) => ({
			'@type': 'CollegeOrUniversity',
			name: e.org
		})),
		knowsAbout: c.skills,
		knowsLanguage: ['de', 'en'],
		sameAs: links.map((l) => l.href).filter((h) => h.startsWith('http')),
		makesOffer: c.services.map((s) => ({
			'@type': 'Offer',
			itemOffered: {
				'@type': 'Service',
				name: s.title,
				description: s.description,
				url: urlFor(
					pathFor({ locale: route.locale, page: 'service', id: s.id })
				)
			}
		}))
	};

	const website = {
		'@type': 'WebSite',
		'@id': WEBSITE_ID,
		url: `${SITE_URL}/`,
		name: NAME,
		inLanguage: ['en', 'de'],
		publisher: { '@id': PERSON_ID }
	};

	const isHome = route.page === 'home';
	const webpage = {
		'@type': isHome ? 'ProfilePage' : 'WebPage',
		'@id': `${url}#webpage`,
		url,
		name: title,
		description,
		inLanguage: route.locale,
		isPartOf: { '@id': WEBSITE_ID },
		[isHome ? 'mainEntity' : 'about']: { '@id': PERSON_ID },
		primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE }
	};

	const graph = [webpage, person, website];
	const crumbs = [{ name: c.ui.home, item: home }];

	if (route.page === 'service') {
		const s = c.services.find((x) => x.id === route.id);
		graph.push(
			{
				'@type': 'Service',
				'@id': `${url}#service`,
				name: s.title,
				description: s.intro,
				url,
				serviceType: s.title,
				provider: { '@id': PERSON_ID },
				areaServed: { '@type': 'Country', name: 'Germany' }
			},
			{
				'@type': 'FAQPage',
				'@id': `${url}#faq`,
				mainEntity: s.faq.map(({ q, a }) => ({
					'@type': 'Question',
					name: q,
					acceptedAnswer: { '@type': 'Answer', text: a }
				}))
			}
		);
		crumbs.push({ name: c.ui.services, item: `${home}#services` });
	}
	if (!isHome) crumbs.push({ name: title, item: url });
	if (crumbs.length > 1) {
		graph.push({
			'@type': 'BreadcrumbList',
			itemListElement: crumbs.map((crumb, i) => ({
				'@type': 'ListItem',
				position: i + 1,
				...crumb
			}))
		});
	}

	return { '@context': 'https://schema.org', '@graph': graph };
};

/** <link rel="alternate" hreflang> tags for a route (empty if none). */
export const hreflangTags = (route) => {
	const alternates = alternatesFor(route);
	if (!alternates) return '';
	return [
		...Object.entries(alternates).map(
			([lang, path]) =>
				`<link rel="alternate" hreflang="${lang}" href="${urlFor(path)}" />`
		),
		`<link rel="alternate" hreflang="x-default" href="${urlFor(alternates.en)}" />`
	].join('\n\t\t');
};

/** Client-side: update head tags after navigating between pages. */
export const applyMeta = (route) => {
	const { title, description } = metaFor(route);
	const url = urlFor(pathFor(route));
	document.title = title;
	document.documentElement.lang = route.locale;
	const set = (selector, value) =>
		document.querySelector(selector)?.setAttribute('content', value);
	set('meta[name="description"]', description);
	set(
		'meta[name="robots"]',
		isIndexable(route)
			? 'index, follow, max-image-preview:large'
			: 'noindex, follow'
	);
	set('meta[property="og:title"]', title);
	set('meta[property="og:description"]', description);
	set('meta[property="og:url"]', url);
	set('meta[property="og:locale"]', content[route.locale].ogLocale);
	set('meta[name="twitter:title"]', title);
	set('meta[name="twitter:description"]', description);
	document.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
};
