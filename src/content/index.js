/**
 * Site copy per locale, merged with the language-independent facts.
 */
import en from './en.js';
import de from './de.js';
import { NAME, projectMeta, serviceMeta, skills } from './shared.js';

export * from './shared.js';

const withShared = (locale) => ({
	...locale,
	name: NAME,
	skills,
	projects: locale.projects.map((p) => ({ ...projectMeta[p.id], ...p })),
	services: locale.services.map((s) => ({ ...serviceMeta[s.id], ...s }))
});

export const content = { en: withShared(en), de: withShared(de) };
export const LOCALES = Object.keys(content);
