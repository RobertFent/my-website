/**
 * English site copy.
 */
export default {
	lang: 'en',
	ogLocale: 'en_US',

	meta: {
		home: {
			title: 'Robert Fent – Fullstack Developer & DevOps Engineer',
			description:
				'Robert Fent, Fullstack Software Developer & DevOps Engineer in Germany. Maintainable software, automated infrastructure, cloud cost optimization and AI integration.'
		},
		cv: {
			title: 'CV – Robert Fent | Fullstack Developer & DevOps Engineer',
			description:
				'Curriculum vitae of Robert Fent: experience as Fullstack Software Developer & DevOps Engineer, M.Sc. Computer Science (OTH Regensburg). View or download as PDF.'
		},
		notfound: {
			title: 'Page not found – Robert Fent',
			description:
				'The page you are looking for doesn’t exist or has been moved.'
		}
	},

	ui: {
		skip: 'Skip to content',
		home: 'Home',
		brandLabel: 'Robert Fent – home',
		toggleNav: 'Toggle navigation',
		mainNav: 'Main',
		switchLang: { label: 'DE', title: 'Deutsche Version' },
		cv: 'CV',
		cvTitle: 'Curriculum Vitae – Robert Fent',
		downloadPdf: 'Download PDF',
		fullCvPdf: 'Full CV (PDF)',
		cvFrameTitle: 'CV of Robert Fent (PDF)',
		experience: 'Experience',
		education: 'Education',
		skills: 'Skills',
		notFoundTitle: 'Page not found',
		notFoundText:
			'The page you are looking for doesn’t exist or has been moved.',
		backHome: 'Back to home',
		legalNotice: 'Legal notice',
		privacy: 'Privacy policy',
		iconsBy: 'Icons by',
		designBy: 'Original design based on work by',
		services: 'Services',
		learnMore: 'Learn more',
		service: 'Service',
		included: 'What’s included',
		process: 'How it works',
		caseStudy: 'Case study',
		faq: 'Frequently asked questions',
		ctaTitle: 'Interested?',
		ctaText:
			'Tell me a bit about your project and I’ll get back to you with next steps.',
		otherServices: 'Other services',
		breadcrumb: 'Breadcrumb',
		projectOn: (project, site) => `${project} on ${site}`
	},

	nav: [
		{ hash: 'about', label: 'About' },
		{ hash: 'projects', label: 'Projects' },
		{ hash: 'services', label: 'Services' },
		{ hash: 'contact', label: 'Contact' }
	],

	sections: {
		about: {
			label: 'About',
			title: 'Software developer and DevOps engineer based in Germany'
		},
		projects: {
			label: 'Projects',
			title: 'Software and infrastructure projects',
			lead: 'A selection of things I have built at work and on my own time.'
		},
		services: {
			label: 'Services',
			title: 'Freelance development, DevOps and AI services',
			lead: 'Some things I can do for you as a freelancer.'
		},
		contact: {
			label: 'Contact',
			title: 'Let’s work together',
			lead: 'Have a project in mind or just want to say hello? My inbox is open.'
		}
	},

	hero: {
		eyebrow: 'Fullstack Software Developer & DevOps Engineer',
		intro:
			'I build maintainable software and the secure, automated and cost-efficient infrastructure it runs on. My projects range from a single landing page to a complete internal software suite with AI built in.',
		viewProjects: 'View projects',
		getInTouch: 'Get in touch',
		portraitAlt: 'Portrait of Robert Fent',
		stats: [
			{ value: '5+', label: 'years in software development' },
			{ value: '97%', label: 'cloud cost reduction' },
			{ value: '0€', label: 'monthly hosting for this site' }
		]
	},

	about: {
		photoAlt: 'Robert Fent and his wife Sara wearing helmets',
		paragraphs: [
			'Hi, I’m Robert, a software developer based in Germany. I enjoy building new software with a focus on maintainability, automated deployments and low running costs, and I’m just as happy in a terminal setting up infrastructure as I am writing application code.',
			'Away from the keyboard I like working out, doing Muay Thai, good coffee, cooking and travelling with my wife Sara. I also share a long-standing hobby with my brother: painting and building Warhammer miniatures.'
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
	},

	projects: [
		{
			id: 'suite',
			title: 'Internal Software Suite',
			description:
				'Built our company’s entire internal software suite from the ground up: self-hosted replacements for every SaaS tool we paid for, behind one Authentik login with enforced MFA. A CRM, a Notion-like wiki, team chat, a 2D virtual office with audio and video, an ISO 27001 ISMS, an AI-assisted mail and calendar client for Microsoft 365, a draw.io-based diagram tool and an update dashboard that reviews Renovate merge requests and deploys master. One Hetzner server, one Docker Compose stack per failure domain, nightly encrypted backups with monthly restore tests, and a preflight that refuses to start anything unsafe.'
		},
		{
			id: 'stackzero',
			title: 'StackZero',
			description:
				'A lightweight framework for minimal SaaS apps: Node.js with Fastify, htmx and SQLite, wrapped in Docker and deployed via GitHub Actions. Designed to run a complete web app for under 5€ per month. The first version of this site was built with it.'
		},
		{
			id: 'hetzner',
			title: 'Hetzner Migration',
			description:
				'Migrated our company infrastructure from AWS (EC2, ECS) to a single Docker Compose stack on Hetzner with NGINX as reverse proxy and automated HTTPS, cutting monthly costs from roughly 4,000€ to about 100€.'
		},
		{
			id: 'homeserver',
			title: 'Home Server',
			description:
				'An Ubuntu home server running five independent Docker Compose stacks: a media stack (Jellyfin, Navidrome) with all download traffic forced through a VPN kill switch, Home Assistant monitoring and optimising my PV system and battery, InfluxDB and Grafana for energy analytics, Uptime Kuma, and nightly restic backups with automated restore checks. Nothing is port-forwarded: Traefik is the only ingress, with Let’s Encrypt certificates via DNS-01 and remote access over Tailscale. IoT devices live on their own OpenWrt subnet.'
		},
		{
			id: 'stocks',
			title: 'Stocks Analyzer',
			description:
				'A command-line tool implementing the PowerX strategy by Markus Heitkoetter. It generates buy and sell signals from market data to support trading decisions, fully local.'
		},
		{
			id: 'weather',
			title: 'Weather Forecast',
			description:
				'A small forecasting tool that predicts future weather from historical data. Pulls updates from the WorldWeatherOnline API and supports feature selection and training through a simple CLI.'
		}
	],

	services: [
		{
			id: 'website',
			slug: 'website-setup-vercel',
			title: 'Website Setup on Vercel',
			description:
				'I build and deploy a single-page website like this one on Vercel with automatic HTTPS and deployments on every push, and connect your own domain via DNS, for example at Ionos.',
			metaTitle:
				'Website Setup on Vercel – Fast Single-Page Websites | Robert Fent',
			metaDescription:
				'I build and launch your single-page website on Vercel: automatic HTTPS, deployments on every push, your own domain and solid SEO basics. Freelancer in Germany.',
			intro:
				'A fast, modern single-page website that you own: built for your content, hosted on Vercel and live on your own domain. Every change you push goes online automatically.',
			included: [
				'A single-page website designed and built for your content',
				'Hosting on Vercel with automatic HTTPS',
				'Automatic deployments on every push to your Git repository',
				'Your own domain connected via DNS, for example at Ionos',
				'SEO basics: prerendered HTML, page metadata, sitemap and structured data',
				'Privacy-friendly, cookieless analytics on request'
			],
			process: [
				{
					title: 'Kick-off',
					text: 'We talk about your goals, your content and your domain.'
				},
				{
					title: 'Build',
					text: 'I design and build the site. Every change gets its own preview link you can check.'
				},
				{
					title: 'Launch',
					text: 'I connect your domain, enable HTTPS and put the site live.'
				},
				{
					title: 'Handover',
					text: 'You own the repository and the hosting account, with no lock-in.'
				}
			],
			caseStudy: {
				title: 'This website',
				text: 'The site you are looking at: a prerendered React single-page site on Vercel with per-page metadata, structured data and a generated sitemap.',
				result: 'Lighthouse: 99–100 in performance, accessibility and SEO'
			},
			faq: [
				{
					q: 'What does hosting on Vercel cost?',
					a: 'Vercel’s free Hobby plan is meant for personal, non-commercial sites. Business websites need the Pro plan. I’ll help you pick the right plan before we start.'
				},
				{
					q: 'Do I need to know how to code?',
					a: 'No. I take care of the setup and deployment. If you want to update texts yourself, I can show you how; every change you push goes live automatically.'
				},
				{
					q: 'Can I keep my existing domain?',
					a: 'Yes. I connect the domain you already own by updating its DNS records, for example at Ionos.'
				}
			],
			cta: 'Request a quote'
		},
		{
			id: 'cloud',
			slug: 'cloud-cost-optimization',
			title: 'Cloud Cost Optimization',
			description:
				'I analyze your cloud setup (preferably AWS) and its monthly bill, propose concrete savings and, where it makes sense, migrate your services to Hetzner to save up to 97% of your monthly costs.',
			metaTitle:
				'Cloud Cost Optimization & AWS to Hetzner Migration | Robert Fent',
			metaDescription:
				'Lower your cloud bill: I analyze your AWS setup, propose concrete savings and migrate to Hetzner where it makes sense. Case study: from about 4,000€ to 100€ per month.',
			intro:
				'Cloud bills grow quietly. I analyze your setup and your monthly bill, show you where the money goes and what you can save, and carry out the changes, up to a full migration from AWS to Hetzner.',
			included: [
				'Review of your cloud architecture and your monthly bill',
				'A written list of concrete savings with their estimated impact',
				'Migration from AWS (for example EC2 and ECS) to Hetzner where it pays off',
				'Docker Compose setup with reverse proxy and automated HTTPS',
				'Backups and documentation so your team can run the result'
			],
			process: [
				{
					title: 'Analysis',
					text: 'I go through your infrastructure and your bill line by line.'
				},
				{
					title: 'Proposal',
					text: 'You get concrete savings options with their trade-offs, so you can decide.'
				},
				{
					title: 'Migration',
					text: 'I implement the changes step by step, planned to keep downtime short.'
				},
				{
					title: 'Handover',
					text: 'Documentation and a walkthrough so your team stays in control.'
				}
			],
			caseStudy: {
				title: 'AWS to Hetzner migration',
				text: 'I migrated our company infrastructure from AWS (EC2, ECS) to a single Docker Compose stack on Hetzner, with NGINX as reverse proxy and automated HTTPS.',
				result: 'Monthly costs: from about 4,000€ to about 100€ (−97%)'
			},
			faq: [
				{
					q: 'Do I have to move away from AWS?',
					a: 'No. Often there are savings within AWS itself, for example by right-sizing or removing unused resources. I only propose a migration where it clearly pays off.'
				},
				{
					q: 'How much can I save?',
					a: 'That depends on your setup. In our own migration, monthly costs dropped from roughly 4,000€ to about 100€. The analysis shows what is realistic for you.'
				},
				{
					q: 'Which cloud providers do you work with?',
					a: 'Mainly AWS and Hetzner, with Docker, Ansible and NGINX or Traefik on top.'
				}
			],
			cta: 'Get in touch'
		},
		{
			id: 'ai',
			slug: 'ai-integration',
			title: 'AI Setup & Infrastructure Integration',
			description:
				'I set up AI for your business and wire it into the tools you already use: from choosing the right model (hosted or self-hosted) to LLM-powered assistants, automations and integrations in your existing infrastructure, with data privacy and running costs in mind.',
			metaTitle:
				'AI Integration for Businesses – LLM Setup & Automation | Robert Fent',
			metaDescription:
				'I set up AI for your business: hosted or self-hosted models, LLM-powered assistants and automations integrated into your existing tools, with data privacy in mind.',
			intro:
				'AI is most useful when it works inside the tools your team already uses. I help you choose the right model, build assistants and automations, and run them securely in your infrastructure.',
			included: [
				'Choosing the right model, hosted or self-hosted',
				'LLM-powered assistants for your team',
				'Automations and integrations with the tools you already use',
				'Data privacy and running costs considered from the start',
				'Secure deployment in your infrastructure, for example behind single sign-on'
			],
			process: [
				{
					title: 'Use cases',
					text: 'We identify where AI saves your team real time.'
				},
				{
					title: 'Model choice',
					text: 'I compare hosted and self-hosted options on quality, privacy and cost.'
				},
				{
					title: 'Integration',
					text: 'I build the assistant or automation into your existing tools.'
				},
				{
					title: 'Operation',
					text: 'Deployment, access control and monitoring in your infrastructure.'
				}
			],
			caseStudy: {
				title: 'AI-assisted mail and calendar client',
				text: 'As part of our company’s self-hosted software suite I built an AI-assisted mail and calendar client for Microsoft 365, behind one Authentik single sign-on with enforced MFA.',
				result: 'AI integrated into daily work, inside our own infrastructure'
			},
			faq: [
				{
					q: 'Can the AI run on our own servers?',
					a: 'Yes. If it fits your data privacy requirements, self-hosted models are an option. I compare them with hosted models on quality and running costs.'
				},
				{
					q: 'Does our data leave the company?',
					a: 'That depends on the setup you choose. With self-hosted models it can stay entirely on your infrastructure; with hosted models I choose providers and settings that match your privacy requirements.'
				}
			],
			cta: 'Discuss your use case'
		}
	],

	contact: {
		formTitle: 'Leave me a message',
		name: 'Your name',
		namePlaceholder: 'Jane Doe',
		message: 'Your message',
		messagePlaceholder: 'Hi Robert, …',
		submit: 'Send via e-mail',
		sent: 'Opening your mail app. Thank you!',
		subject: (author) => `Message from ${author}`
	}
};
