/**
 * Site copy per locale, merged with the language-independent facts.
 */
import en from './en.js';
import de from './de.js';
import { NAME, projectMeta, skills } from './shared.js';

export * from './shared.js';

const withShared = (locale) => ({
	...locale,
	name: NAME,
	skills,
	projects: locale.projects.map((p) => ({ ...projectMeta[p.id], ...p }))
});

export const content = { en: withShared(en), de: withShared(de) };
export const LOCALES = Object.keys(content);
