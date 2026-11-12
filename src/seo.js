/**
 * Per-page SEO metadata. Used at build time by scripts/prerender.js to write
 * the static <head> of every page, and at runtime by applyMeta() so the tab
 * title / canonical stay correct after client-side navigation.
 */
import { EMAIL, about, hero, links, services } from './content.js';

export const SITE_URL = 'https://www.robertfent.com';
export const SITE_NAME = 'Robert Fent';
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const pages = {
	'/': {
		title: 'Robert Fent – Fullstack Developer & DevOps Engineer',
		description:
			'Robert Fent, Fullstack Software Developer & DevOps Engineer in Germany. Maintainable software, automated infrastructure, cloud cost optimization and AI integration.'
	},
	'/cv': {
		title: 'CV – Robert Fent | Fullstack Developer & DevOps Engineer',
		description:
			'Curriculum vitae of Robert Fent: experience as Fullstack Software Developer & DevOps Engineer, M.Sc. Computer Science (OTH Regensburg). View or download as PDF.'
	}
};

export const notFound = {
	title: 'Page not found – Robert Fent',
	description: 'The page you are looking for doesn’t exist or has been moved.'
};

export const pageFor = (path) => pages[path] ?? notFound;
export const urlFor = (path) =>
	path === '/' ? `${SITE_URL}/` : SITE_URL + path;

/** schema.org structured data (JSON-LD) for a page. */
export const structuredData = (path) => {
	const sameAs = links
		.map((l) => l.href)
		.filter((href) => href.startsWith('http'));
	const [current] = about.experience;
	const person = {
		'@type': 'Person',
		'@id': `${SITE_URL}/#person`,
		name: SITE_NAME,
		url: `${SITE_URL}/`,
		image: `${SITE_URL}/portrait.webp`,
		description: hero.intro,
		jobTitle: current.role,
		email: `mailto:${EMAIL}`,
		worksFor: { '@type': 'Organization', name: current.org },
		address: { '@type': 'PostalAddress', addressCountry: 'DE' },
		alumniOf: about.education.map((e) => ({
			'@type': 'CollegeOrUniversity',
			name: e.org
		})),
		knowsAbout: about.skills,
		sameAs,
		makesOffer: services.map((s) => ({
			'@type': 'Offer',
			itemOffered: {
				'@type': 'Service',
				name: s.title,
				description: s.description,
				provider: { '@id': `${SITE_URL}/#person` }
			}
		}))
	};
	const website = {
		'@type': 'WebSite',
		'@id': `${SITE_URL}/#website`,
		url: `${SITE_URL}/`,
		name: SITE_NAME,
		inLanguage: 'en',
		publisher: { '@id': `${SITE_URL}/#person` }
	};
	const { title, description } = pageFor(path);
	const webpage = {
		'@type': path === '/' ? 'ProfilePage' : 'WebPage',
		'@id': `${urlFor(path)}#webpage`,
		url: urlFor(path),
		name: title,
		description,
		inLanguage: 'en',
		isPartOf: { '@id': `${SITE_URL}/#website` },
		[path === '/' ? 'mainEntity' : 'about']: { '@id': `${SITE_URL}/#person` },
		primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE }
	};
	const graph = [webpage, person, website];
	if (path !== '/') {
		graph.push({
			'@type': 'BreadcrumbList',
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: 'Home',
					item: `${SITE_URL}/`
				},
				{ '@type': 'ListItem', position: 2, name: title, item: urlFor(path) }
			]
		});
	}
	return { '@context': 'https://schema.org', '@graph': graph };
};

/** Client-side: update head tags after navigating between pages. */
export const applyMeta = (path) => {
	const { title, description } = pageFor(path);
	const url = urlFor(path);
	document.title = title;
	const set = (selector, value) =>
		document.querySelector(selector)?.setAttribute('content', value);
	set('meta[name="description"]', description);
	set('meta[property="og:title"]', title);
	set('meta[property="og:description"]', description);
	set('meta[property="og:url"]', url);
	set('meta[name="twitter:title"]', title);
	set('meta[name="twitter:description"]', description);
	document.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
};
