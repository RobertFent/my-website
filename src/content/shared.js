/**
 * Language-independent facts shared by every locale.
 */

export const EMAIL = 'info@robertfent.com';
export const NAME = 'Robert Fent';

/**
 * Controller details for the privacy policy. This is a personal,
 * non-commercial site, so it needs no Impressum (§ 5 DDG) and no postal address.
 */
export const LEGAL = { name: NAME, email: EMAIL };

export const links = [
	{ icon: 'email_white.png', href: `mailto:${EMAIL}`, label: EMAIL },
	{
		icon: 'github_white.svg',
		href: 'https://github.com/RobertFent',
		label: 'github.com/RobertFent'
	},
	{
		icon: 'linkedin_white.svg',
		href: 'https://www.linkedin.com/in/robert-fent-905140280',
		label: 'linkedin.com/in/robert-fent'
	},
	{
		icon: 'medium_white.svg',
		href: 'https://medium.com/@robert.fent',
		label: 'medium.com/@robert.fent'
	}
];

export const skills = [
	'JavaScript / TypeScript',
	'Python',
	'Next.js',
	'Node.js',
	'Flask',
	'FastAPI',
	'React',
	'Docker',
	'AWS',
	'Hetzner',
	'Ansible',
	'NGINX',
	'GitLab CI / GitHub Actions',
	'Linux & Shell',
	'SSO / OIDC',
	'LLM Integration',
	'Clean Code',
	'Software Architecture'
];

/** Project meta that doesn't change between languages, keyed by id. */
export const projectMeta = {
	suite: {
		icon: 'suite_white.svg',
		featured: true,
		tags: [
			'Authentik SSO',
			'Traefik',
			'PostgreSQL',
			'LiveKit',
			'Renovate',
			'ISMS'
		]
	},
	stackzero: {
		icon: 'html_white.png',
		tags: ['Node.js', 'Fastify', 'htmx', 'SQLite', 'Docker'],
		link: { href: 'https://github.com/RobertFent/StackZero', label: 'GitHub' }
	},
	hetzner: {
		icon: 'migration_white.png',
		tags: ['AWS', 'Hetzner', 'Docker Compose', 'NGINX']
	},
	homeserver: {
		icon: 'server_white.png',
		featured: true,
		tags: [
			'Ubuntu Server',
			'Docker Compose',
			'Traefik',
			'Home Assistant',
			'Grafana',
			'Tailscale'
		]
	},
	stocks: {
		icon: 'python_white.png',
		featured: true,
		tags: ['Python', 'CLI'],
		link: {
			href: 'https://github.com/RobertFent/PowerXStocksAnalyzer',
			label: 'GitHub'
		}
	},
	weather: {
		icon: 'weather_forecast_white.png',
		tags: ['Python', 'Time series'],
		link: {
			href: 'https://github.com/RobertFent/Weather-Forecast',
			label: 'GitHub'
		}
	}
};
