/**
 * Post-build step: renders every route (see src/routes.js) to static HTML with
 * its own <head> (lang, title, description, canonical, hreflang, Open Graph,
 * JSON-LD) so crawlers and link previews get real content without running
 * JavaScript. Also writes sitemap.xml and llms.txt.
 *
 * Output (served by Vercel with cleanUrls), e.g.:
 *   dist/index.html            → /
 *   dist/de.html               → /de
 *   dist/de/cv.html            → /de/cv
 *   dist/404.html              → every unknown URL, with HTTP status 404
 */
import {
	mkdirSync,
	readdirSync,
	readFileSync,
	rmSync,
	writeFileSync
} from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');

const {
	render,
	SITE_URL,
	urlFor,
	hreflangTags,
	structuredData,
	allRoutes,
	alternatesFor,
	isIndexable,
	metaFor,
	pathFor,
	EMAIL,
	content,
	links
} = await import(join(ssrDir, 'entry-server.js'));

const template = readFileSync(join(dist, 'index.html'), 'utf8');

const escape = (value) =>
	value
		.replace(/&/g, '&amp;')
		.replace(/"/g, '&quot;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');

/** Replace an attribute value of the first tag matching `tagPattern`. */
const setAttr = (html, tagPattern, attr, value) => {
	const re = new RegExp(`(<${tagPattern}[^>]*?\\s${attr}=")[^"]*(")`, 's');
	if (!re.test(html)) throw new Error(`prerender: no tag for ${tagPattern}`);
	return html.replace(re, `$1${escape(value)}$2`);
};
const meta = (key) => `meta\\s+(?:name|property)="${key}"`;

// preload the latin Inter subset — it's needed for first paint on every page
const latinFont = readdirSync(join(dist, 'assets')).find((f) =>
	/^inter-latin-wght-normal-.*\.woff2$/.test(f)
);
const fontPreload = latinFont
	? `<link rel="preload" as="font" type="font/woff2" href="/assets/${latinFont}" crossorigin />`
	: '';

// inline the (small) stylesheet so first paint doesn't wait for a CSS request
const inlineCss = (html) =>
	html.replace(
		/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/,
		(_, href) => `<style>${readFileSync(join(dist, href), 'utf8')}</style>`
	);

const buildPage = (route, path) => {
	const { title, description } = metaFor(route);
	const url = urlFor(path);
	const indexable = isIndexable(route);
	let html = template;

	html = html.replace(/<html lang="[^"]*"/, `<html lang="${route.locale}"`);
	html = html.replace(
		/<title>[^<]*<\/title>/,
		`<title>${escape(title)}</title>`
	);
	html = setAttr(html, meta('description'), 'content', description);
	html = setAttr(html, meta('og:title'), 'content', title);
	html = setAttr(html, meta('og:description'), 'content', description);
	html = setAttr(html, meta('og:url'), 'content', url);
	html = setAttr(
		html,
		meta('og:locale'),
		'content',
		content[route.locale].ogLocale
	);
	html = setAttr(html, meta('twitter:title'), 'content', title);
	html = setAttr(html, meta('twitter:description'), 'content', description);
	html = setAttr(html, 'link\\s+rel="canonical"', 'href', url);

	if (!indexable) {
		html = setAttr(html, meta('robots'), 'content', 'noindex, follow');
		html = html.replace(/\s*<link\s+rel="canonical"[^>]*>/, '');
	}

	// the hero portrait only exists on the home pages
	if (route.page !== 'home') {
		html = html.replace(/\s*<link\s+rel="preload"\s+as="image"[^>]*>/, '');
	}

	const jsonLd = indexable
		? `<script type="application/ld+json">${JSON.stringify(
				structuredData(route)
			).replace(/</g, '\\u003c')}</script>`
		: '';
	html = html.replace(
		'<!--structured-data-->',
		[hreflangTags(route), fontPreload, jsonLd].filter(Boolean).join('\n\t\t')
	);

	// remove the dev-only comment block
	html = html.replace(/\s*<!--\s*The values below[\s\S]*?-->/, '');

	const root = '<div id="root"><!--app-html--></div>';
	if (!html.includes(root)) throw new Error('prerender: #root not found');
	return inlineCss(html).replace(
		root,
		`<div id="root" data-path="${escape(path)}">${render(path)}</div>`
	);
};

const write = (path, html) => {
	const file = path === '/' ? 'index.html' : `${path.slice(1)}.html`;
	mkdirSync(dirname(join(dist, file)), { recursive: true });
	writeFileSync(join(dist, file), html);
};

const routes = allRoutes();
for (const route of routes) {
	const path = pathFor(route);
	write(path, buildPage(route, path));
}
write('/404', buildPage({ locale: 'en', page: 'notfound' }, '/404'));

// sitemap.xml with hreflang alternates; home pages list their photos so they
// can show up in image search for the name
const today = new Date().toISOString().slice(0, 10);
const images = ['/portrait.webp', '/about.webp', '/og-image.jpg'];
const sitemapEntry = (route) => {
	const alternates = alternatesFor(route) ?? {};
	return [
		'\t<url>',
		`\t\t<loc>${urlFor(pathFor(route))}</loc>`,
		`\t\t<lastmod>${today}</lastmod>`,
		...Object.entries(alternates).map(
			([lang, path]) =>
				`\t\t<xhtml:link rel="alternate" hreflang="${lang}" href="${urlFor(path)}" />`
		),
		...(alternates.en
			? [
					`\t\t<xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(alternates.en)}" />`
				]
			: []),
		...(route.page === 'home'
			? images.map(
					(src) =>
						`\t\t<image:image><image:loc>${SITE_URL}${src}</image:loc></image:image>`
				)
			: []),
		'\t</url>'
	].join('\n');
};
const indexable = routes.filter(isIndexable);
writeFileSync(
	join(dist, 'sitemap.xml'),
	`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${indexable.map(sitemapEntry).join('\n')}
</urlset>
`
);

// llms.txt (https://llmstxt.org): a plain-text summary for AI search engines
const { name, hero, about, projects, skills } = content.en;
const llms = `# ${name}

> ${hero.eyebrow} based in Germany. ${hero.intro}

${about.paragraphs[0]}

The site is available in English (${SITE_URL}/) and German (${urlFor('/de')}).

## Projects

${projects
	.map(
		(p) =>
			`- **${p.title}**${p.link ? ` ([${p.link.label}](${p.link.href}))` : ''}: ${p.description}`
	)
	.join('\n')}

## Experience

${about.experience.map((e) => `- ${e.period}: ${e.role}, ${e.org}`).join('\n')}

## Education

${about.education.map((e) => `- ${e.period}: ${e.role}, ${e.org}`).join('\n')}

## Skills

${skills.join(', ')}

## Links

- [Website](${SITE_URL}/)
- [CV](${urlFor('/cv')}) ([PDF](${SITE_URL}/cv.pdf))
${links
	.filter((l) => l.href.startsWith('http'))
	.map((l) => `- [${l.label}](${l.href})`)
	.join('\n')}
- Email: ${EMAIL}
`;
writeFileSync(join(dist, 'llms.txt'), llms);

rmSync(ssrDir, { recursive: true, force: true });
console.log(
	`prerendered ${routes.length} pages + 404, sitemap (${indexable.length} URLs) and llms.txt for ${SITE_URL}`
);
