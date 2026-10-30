/**
 * All site copy lives here so the components stay purely presentational.
 */

export const EMAIL = 'info@robertfent.com';

export const nav = [
	{ href: '/#about', label: 'About' },
	{ href: '/#projects', label: 'Projects' },
	{ href: '/#services', label: 'Services' },
	{ href: '/#contact', label: 'Contact' }
];

export const hero = {
	eyebrow: 'Fullstack Software Developer & DevOps Engineer',
	name: 'Robert Fent',
	intro:
		'I build maintainable software and the infrastructure it runs on — automated, secure and at minimal cost. From a single landing page to a complete internal software suite with AI built in.',
	stats: [
		{ value: '5+', label: 'years in software development' },
		{ value: '97%', label: 'cloud cost reduction' },
		{ value: '0€', label: 'monthly hosting for this site' }
	]
};

export const about = {
	paragraphs: [
		'Hi, I’m Robert, a software developer based in Germany. I enjoy building new software with a focus on maintainability, automated deployments and low running costs, and I’m just as happy in a terminal setting up infrastructure as I am writing application code.',
		'Away from the keyboard I like working out, doing Muay Thai, good coffee, cooking and travelling with my wife Sara. I also share a long-standing hobby with my brother: painting and building Warhammer miniatures.'
	],
	skills: [
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
	],
	experience: [
		{
			period: '06/2024 – present',
			role: 'Fullstack Software Developer & DevOps Engineer',
			org: 'ECO2GROW GmbH'
		},
		{
			period: '10/2023 – 05/2024',
			role: 'Fullstack Software Developer',
			org: 'T.CON GmbH & Co. KG'
		},
		{
			period: '10/2019 – 06/2021',
			role: 'Fullstack Software Developer',
			org: 'DioVision Systems GmbH'
		}
	],
	education: [
		{
			period: '10/2021 – 09/2023',
			role: 'M.Sc. Computer Science',
			org: 'OTH Regensburg'
		},
		{
			period: '10/2017 – 09/2021',
			role: 'B.A. Media Informatics',
			org: 'University of Regensburg'
		}
	]
};

export const projects = [
	{
		title: 'Internal Software Suite',
		icon: 'suite_white.svg',
		featured: true,
		tags: [
			'Authentik SSO',
			'Traefik',
			'PostgreSQL',
			'LiveKit',
			'Renovate',
			'ISMS'
		],
		description:
			'Built our company’s entire internal software suite from the ground up — self-hosted replacements for every SaaS tool we paid for, behind one Authentik login with enforced MFA. A CRM, a Notion-like wiki, team chat, a 2D virtual office with audio and video, an ISO 27001 ISMS, an AI-assisted mail and calendar client for Microsoft 365, a draw.io-based diagram tool and an update dashboard that reviews Renovate merge requests and deploys master. One Hetzner server, one Docker Compose stack per failure domain, nightly encrypted backups with monthly restore tests, and a preflight that refuses to start anything unsafe.'
	},
	{
		title: 'StackZero',
		icon: 'html_white.png',
		tags: ['Node.js', 'Fastify', 'htmx', 'SQLite', 'Docker'],
		description:
			'A lightweight framework for minimal SaaS apps: Node.js with Fastify, htmx and SQLite, wrapped in Docker and deployed via GitHub Actions. Designed to run a complete web app for under 5€ per month — the first version of this site was built with it.',
		link: { href: 'https://github.com/RobertFent/StackZero', label: 'GitHub' }
	},
	{
		title: 'Hetzner Migration',
		icon: 'migration_white.png',
		tags: ['AWS', 'Hetzner', 'Docker Compose', 'NGINX'],
		description:
			'Migrated our company infrastructure from AWS (EC2, ECS) to a single Docker Compose stack on Hetzner with NGINX as reverse proxy and automated HTTPS — cutting monthly costs from roughly 4,000€ to about 100€.'
	},
	{
		title: 'Home Server',
		icon: 'server_white.png',
		featured: true,
		tags: [
			'Ubuntu Server',
			'Docker Compose',
			'Traefik',
			'Home Assistant',
			'Grafana',
			'Tailscale'
		],
		description:
			'An Ubuntu home server running five independent Docker Compose stacks: a media stack (Jellyfin, Navidrome) with all download traffic forced through a VPN kill switch, Home Assistant monitoring and optimising my PV system and battery, InfluxDB and Grafana for energy analytics, Uptime Kuma, and nightly restic backups with automated restore checks. Nothing is port-forwarded — Traefik is the only ingress, with Let’s Encrypt certificates via DNS-01 and remote access over Tailscale. IoT devices live on their own OpenWrt subnet.'
	},
	{
		title: 'Stocks Analyzer',
		icon: 'python_white.png',
		featured: true,
		tags: ['Python', 'CLI'],
		description:
			'A command-line tool implementing the PowerX strategy by Markus Heitkoetter. It generates buy and sell signals from market data to support trading decisions — fully local.',
		link: {
			href: 'https://github.com/RobertFent/PowerXStocksAnalyzer',
			label: 'GitHub'
		}
	},
	{
		title: 'Weather Forecast',
		icon: 'weather_forecast_white.png',
		tags: ['Python', 'Time series'],
		description:
			'A small forecasting tool that predicts future weather from historical data. Pulls updates from the WorldWeatherOnline API and supports feature selection and training through a simple CLI.',
		link: {
			href: 'https://github.com/RobertFent/Weather-Forecast',
			label: 'GitHub'
		}
	}
];

export const services = [
	{
		title: 'Website Setup on Vercel',
		icon: 'setup_white.png',
		description:
			'I build and deploy a single-page website like this one on Vercel — free hosting, automatic HTTPS and deployments on every push — and connect your own domain via DNS at Ionos.',
		cta: { href: `mailto:${EMAIL}`, label: 'Request a quote' }
	},
	{
		title: 'Cloud Cost Optimization',
		icon: 'optimization_white.png',
		description:
			'I analyze your cloud setup (preferably AWS) and its monthly bill, propose concrete savings, and — where it makes sense — migrate your services to Hetzner to save up to 97% of your monthly costs.',
		cta: { href: `mailto:${EMAIL}`, label: 'Get in touch' }
	},
	{
		title: 'AI Setup & Infrastructure Integration',
		icon: 'ai_white.svg',
		description:
			'I set up AI for your business and wire it into the tools you already use — from choosing the right model (hosted or self-hosted) to LLM-powered assistants, automations and integrations in your existing infrastructure, with data privacy and running costs in mind.',
		cta: { href: `mailto:${EMAIL}`, label: 'Discuss your use case' }
	}
];

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
