/**
 * Post-build step: renders every route to static HTML with its own <head>
 * (title, description, canonical, Open Graph, JSON-LD) so crawlers and link
 * previews get real content without running JavaScript.
 *
 * Output (served by Vercel with cleanUrls):
 *   dist/index.html  → /
 *   dist/cv.html     → /cv
 *   dist/404.html    → every unknown URL, with HTTP status 404
 */
import { readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');

const { render, pages, pageFor, urlFor, structuredData, SITE_URL, content } =
	await import(join(ssrDir, 'entry-server.js'));

const template = readFileSync(join(dist, 'index.html'), 'utf8');

const escape = (value) =>
	value
		.replace(/&/g, '&amp;')
		.replace(/"/g, '&quot;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');

/** Replace the content/href attribute of the tag matching `selector`. */
const setAttr = (html, tagPattern, attr, value) => {
	const re = new RegExp(`(<${tagPattern}[^>]*?\\s${attr}=")[^"]*(")`, 's');
	if (!re.test(html)) throw new Error(`prerender: no tag for ${tagPattern}`);
	return html.replace(re, `$1${escape(value)}$2`);
};
const meta = (key, value) => `meta\\s+(?:name|property)="${key}"`;

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

const buildPage = (path, { noindex = false } = {}) => {
	const { title, description } = pageFor(path);
	const url = urlFor(path);
	let html = template;

	html = html.replace(
		/<title>[^<]*<\/title>/,
		`<title>${escape(title)}</title>`
	);
	html = setAttr(html, meta('description'), 'content', description);
	html = setAttr(html, meta('og:title'), 'content', title);
	html = setAttr(html, meta('og:description'), 'content', description);
	html = setAttr(html, meta('og:url'), 'content', url);
	html = setAttr(html, meta('twitter:title'), 'content', title);
	html = setAttr(html, meta('twitter:description'), 'content', description);
	html = setAttr(html, 'link\\s+rel="canonical"', 'href', url);

	if (noindex) {
		html = setAttr(html, meta('robots'), 'content', 'noindex, follow');
		html = html.replace(/\s*<link\s+rel="canonical"[^>]*>/, '');
	}

	// the hero portrait only exists on the home page
	if (path !== '/') {
		html = html.replace(/\s*<link\s+rel="preload"\s+as="image"[^>]*>/, '');
	}

	html = html.replace('</head>', `\t${fontPreload}\n\t</head>`);

	const jsonLd = noindex
		? ''
		: `<script type="application/ld+json">${JSON.stringify(
				structuredData(path)
			).replace(/</g, '\\u003c')}</script>`;
	html = html.replace('<!--structured-data-->', jsonLd);

	// remove the dev-only comment block
	html = html.replace(/\s*<!--\s*The values below[\s\S]*?-->/, '');

	return inlineCss(html).replace('<!--app-html-->', render(path));
};

writeFileSync(join(dist, 'index.html'), buildPage('/'));
writeFileSync(join(dist, 'cv.html'), buildPage('/cv'));
writeFileSync(join(dist, '404.html'), buildPage('/404', { noindex: true }));

// sitemap.xml generated from the page list so it never drifts; the home page
// lists its photos so they can show up in image search for the name
const today = new Date().toISOString().slice(0, 10);
const images = {
	'/': ['/portrait.webp', '/about.webp', '/og-image.jpg']
};
const sitemapEntry = (path) =>
	[
		'\t<url>',
		`\t\t<loc>${urlFor(path)}</loc>`,
		`\t\t<lastmod>${today}</lastmod>`,
		...(images[path] ?? []).map(
			(src) =>
				`\t\t<image:image><image:loc>${SITE_URL}${src}</image:loc></image:image>`
		),
		'\t</url>'
	].join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${Object.keys(pages).map(sitemapEntry).join('\n')}
</urlset>
`;
writeFileSync(join(dist, 'sitemap.xml'), sitemap);

// llms.txt (https://llmstxt.org): a plain-text summary for AI search engines
const { hero, about, projects, services, links, EMAIL } = content;
const llms = `# ${hero.name}

> ${hero.eyebrow} based in Germany. ${hero.intro}

${about.paragraphs[0]}

## Services

${services.map((s) => `- **${s.title}**: ${s.description}`).join('\n')}

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

${about.skills.join(', ')}

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
	`prerendered ${Object.keys(pages).length} pages + 404, sitemap and llms.txt for ${SITE_URL}`
);
