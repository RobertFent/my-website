/**
 * Deutsche Texte der Website.
 */
export default {
	lang: 'de',
	ogLocale: 'de_DE',

	meta: {
		home: {
			title: 'Robert Fent – Fullstack-Entwickler & DevOps Engineer',
			description:
				'Robert Fent, Fullstack-Softwareentwickler & DevOps Engineer aus Deutschland. Wartbare Software, automatisierte Infrastruktur, Cloud-Kostenoptimierung und KI-Integration.'
		},
		cv: {
			title:
				'Lebenslauf – Robert Fent | Fullstack-Entwickler & DevOps Engineer',
			description:
				'Lebenslauf von Robert Fent: Erfahrung als Fullstack-Softwareentwickler & DevOps Engineer, M.Sc. Informatik (OTH Regensburg). Online ansehen oder als PDF herunterladen.'
		},
		notfound: {
			title: 'Seite nicht gefunden – Robert Fent',
			description: 'Die gesuchte Seite existiert nicht oder wurde verschoben.'
		}
	},

	ui: {
		skip: 'Zum Inhalt springen',
		home: 'Startseite',
		brandLabel: 'Robert Fent – Startseite',
		toggleNav: 'Navigation öffnen',
		mainNav: 'Hauptnavigation',
		switchLang: { label: 'EN', title: 'English version' },
		cv: 'Lebenslauf',
		cvTitle: 'Lebenslauf – Robert Fent',
		downloadPdf: 'PDF herunterladen',
		fullCvPdf: 'Vollständiger Lebenslauf (PDF, Englisch)',
		cvFrameTitle: 'Lebenslauf von Robert Fent (PDF)',
		experience: 'Berufserfahrung',
		education: 'Ausbildung',
		skills: 'Kenntnisse',
		notFoundTitle: 'Seite nicht gefunden',
		notFoundText: 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
		backHome: 'Zur Startseite',
		legalNotice: 'Impressum',
		privacy: 'Datenschutz',
		iconsBy: 'Icons von',
		designBy: 'Ursprüngliches Design basierend auf der Arbeit von',
		services: 'Leistungen',
		learnMore: 'Mehr erfahren',
		service: 'Leistung',
		included: 'Das ist enthalten',
		process: 'So läuft es ab',
		caseStudy: 'Referenz',
		faq: 'Häufige Fragen',
		ctaTitle: 'Interesse?',
		ctaText:
			'Erzählen Sie mir kurz von Ihrem Projekt, und ich melde mich mit den nächsten Schritten.',
		otherServices: 'Weitere Leistungen',
		breadcrumb: 'Brotkrümelnavigation',
		projectOn: (project, site) => `${project} auf ${site}`
	},

	nav: [
		{ hash: 'about', label: 'Über mich' },
		{ hash: 'projects', label: 'Projekte' },
		{ hash: 'services', label: 'Leistungen' },
		{ hash: 'contact', label: 'Kontakt' }
	],

	sections: {
		about: {
			label: 'Über mich',
			title: 'Softwareentwickler und DevOps Engineer aus Deutschland'
		},
		projects: {
			label: 'Projekte',
			title: 'Software- und Infrastrukturprojekte',
			lead: 'Eine Auswahl an Projekten, die ich beruflich und privat umgesetzt habe.'
		},
		services: {
			label: 'Leistungen',
			title: 'Freelance: Entwicklung, DevOps und KI',
			lead: 'Womit ich Sie als Freelancer unterstützen kann.'
		},
		contact: {
			label: 'Kontakt',
			title: 'Lassen Sie uns zusammenarbeiten',
			lead: 'Sie haben ein Projekt im Kopf oder möchten einfach Hallo sagen? Schreiben Sie mir.'
		}
	},

	hero: {
		eyebrow: 'Fullstack-Softwareentwickler & DevOps Engineer',
		intro:
			'Ich entwickle wartbare Software und die sichere, automatisierte und kosteneffiziente Infrastruktur, auf der sie läuft. Meine Projekte reichen von einer einzelnen Landingpage bis zu einer kompletten internen Software-Suite mit integrierter KI.',
		viewProjects: 'Projekte ansehen',
		getInTouch: 'Kontakt aufnehmen',
		portraitAlt: 'Porträt von Robert Fent',
		stats: [
			{ value: '5+', label: 'Jahre Softwareentwicklung' },
			{ value: '97%', label: 'gesenkte Cloud-Kosten' },
			{ value: '0€', label: 'monatliches Hosting dieser Website' }
		]
	},

	about: {
		photoAlt: 'Robert Fent und seine Frau Sara mit Helmen',
		paragraphs: [
			'Hallo, ich bin Robert, Softwareentwickler aus Deutschland. Ich entwickle gerne neue Software mit Fokus auf Wartbarkeit, automatisierte Deployments und niedrige Betriebskosten. Im Terminal beim Aufsetzen von Infrastruktur fühle ich mich genauso wohl wie beim Schreiben von Anwendungscode.',
			'Abseits der Tastatur mache ich Kraftsport und Muay Thai, trinke guten Kaffee, koche gerne und reise mit meiner Frau Sara. Außerdem teile ich mit meinem Bruder ein langjähriges Hobby: Warhammer-Miniaturen bauen und bemalen.'
		],
		experience: [
			{
				period: '06/2024 – heute',
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
				role: 'M.Sc. Informatik',
				org: 'OTH Regensburg'
			},
			{
				period: '10/2017 – 09/2021',
				role: 'B.A. Medieninformatik',
				org: 'Universität Regensburg'
			}
		]
	},

	projects: [
		{
			id: 'suite',
			title: 'Interne Software-Suite',
			description:
				'Die komplette interne Software-Suite unseres Unternehmens von Grund auf entwickelt: selbst gehostete Alternativen zu allen SaaS-Tools, für die wir bezahlt haben, hinter einem Authentik-Login mit verpflichtender MFA. Ein CRM, ein Wiki im Stil von Notion, Team-Chat, ein virtuelles 2D-Büro mit Audio und Video, ein ISMS nach ISO 27001, ein KI-gestützter Mail- und Kalender-Client für Microsoft 365, ein Diagramm-Tool auf Basis von draw.io und ein Update-Dashboard, das Renovate-Merge-Requests prüft und master deployt. Ein Hetzner-Server, ein Docker-Compose-Stack pro Fehlerdomäne, nächtliche verschlüsselte Backups mit monatlichen Wiederherstellungstests und ein Preflight-Check, der nichts Unsicheres startet.'
		},
		{
			id: 'stackzero',
			title: 'StackZero',
			description:
				'Ein schlankes Framework für minimale SaaS-Apps: Node.js mit Fastify, htmx und SQLite, verpackt in Docker und deployt über GitHub Actions. Ausgelegt, um eine komplette Web-App für unter 5 € im Monat zu betreiben. Die erste Version dieser Website basierte darauf.'
		},
		{
			id: 'hetzner',
			title: 'Hetzner-Migration',
			description:
				'Die Infrastruktur unseres Unternehmens von AWS (EC2, ECS) auf einen einzigen Docker-Compose-Stack bei Hetzner migriert, mit NGINX als Reverse Proxy und automatischem HTTPS. Die monatlichen Kosten sanken von rund 4.000 € auf etwa 100 €.'
		},
		{
			id: 'homeserver',
			title: 'Homeserver',
			description:
				'Ein Ubuntu-Homeserver mit fünf unabhängigen Docker-Compose-Stacks: ein Medien-Stack (Jellyfin, Navidrome), dessen gesamter Download-Verkehr über einen VPN-Killswitch läuft, Home Assistant zur Überwachung und Optimierung meiner PV-Anlage und meines Speichers, InfluxDB und Grafana für Energieauswertungen, Uptime Kuma sowie nächtliche restic-Backups mit automatischen Wiederherstellungstests. Keine Portweiterleitungen: Traefik ist der einzige Eingang, mit Let’s-Encrypt-Zertifikaten über DNS-01 und Fernzugriff über Tailscale. IoT-Geräte laufen in einem eigenen OpenWrt-Subnetz.'
		},
		{
			id: 'stocks',
			title: 'Stocks Analyzer',
			description:
				'Ein Kommandozeilen-Tool, das die PowerX-Strategie von Markus Heitkoetter umsetzt. Es erzeugt aus Marktdaten Kauf- und Verkaufssignale als Entscheidungshilfe beim Trading, vollständig lokal.'
		},
		{
			id: 'weather',
			title: 'Wettervorhersage',
			description:
				'Ein kleines Vorhersage-Tool, das das Wetter auf Basis historischer Daten prognostiziert. Es lädt Updates über die WorldWeatherOnline-API und unterstützt Feature-Auswahl und Training über eine einfache CLI.'
		}
	],

	services: [
		{
			id: 'website',
			slug: 'website-erstellung-vercel',
			title: 'Website-Erstellung mit Vercel',
			description:
				'Ich entwickle eine Onepager-Website wie diese und veröffentliche sie auf Vercel, mit automatischem HTTPS und Deployments bei jedem Push, und verbinde Ihre eigene Domain per DNS, zum Beispiel bei Ionos.',
			metaTitle:
				'Website erstellen lassen mit Vercel – schnelle Onepager | Robert Fent',
			metaDescription:
				'Ich erstelle Ihre Onepager-Website und bringe sie auf Vercel online: automatisches HTTPS, Deployments bei jedem Push, eigene Domain und solide SEO-Grundlagen.',
			intro:
				'Eine schnelle, moderne Onepager-Website, die Ihnen gehört: zugeschnitten auf Ihre Inhalte, gehostet auf Vercel und erreichbar unter Ihrer eigenen Domain. Jede Änderung geht automatisch online.',
			included: [
				'Eine Onepager-Website, gestaltet und entwickelt für Ihre Inhalte',
				'Hosting auf Vercel mit automatischem HTTPS',
				'Automatische Deployments bei jedem Push in Ihr Git-Repository',
				'Ihre eigene Domain per DNS verbunden, zum Beispiel bei Ionos',
				'SEO-Grundlagen: vorgerendertes HTML, Metadaten, Sitemap und strukturierte Daten',
				'Auf Wunsch datenschutzfreundliche Statistiken ohne Cookies'
			],
			process: [
				{
					title: 'Kick-off',
					text: 'Wir besprechen Ihre Ziele, Ihre Inhalte und Ihre Domain.'
				},
				{
					title: 'Umsetzung',
					text: 'Ich gestalte und entwickle die Website. Jede Änderung bekommt einen eigenen Vorschau-Link.'
				},
				{
					title: 'Launch',
					text: 'Ich verbinde Ihre Domain, aktiviere HTTPS und schalte die Website live.'
				},
				{
					title: 'Übergabe',
					text: 'Repository und Hosting-Account gehören Ihnen, ohne Lock-in.'
				}
			],
			caseStudy: {
				title: 'Diese Website',
				text: 'Die Website, die Sie gerade sehen: ein vorgerenderter React-Onepager auf Vercel mit eigenen Metadaten pro Seite, strukturierten Daten und automatisch erzeugter Sitemap.',
				result: 'Lighthouse: 99–100 bei Performance, Barrierefreiheit und SEO'
			},
			faq: [
				{
					q: 'Was kostet das Hosting bei Vercel?',
					a: 'Der kostenlose Hobby-Tarif von Vercel ist für private, nicht kommerzielle Websites gedacht. Für Unternehmenswebsites ist der Pro-Tarif nötig. Ich helfe Ihnen vor dem Start, den passenden Tarif zu wählen.'
				},
				{
					q: 'Muss ich programmieren können?',
					a: 'Nein. Einrichtung und Deployment übernehme ich. Wenn Sie Texte selbst ändern möchten, zeige ich Ihnen gerne, wie das geht; jede Änderung geht automatisch online.'
				},
				{
					q: 'Kann ich meine bestehende Domain behalten?',
					a: 'Ja. Ich verbinde Ihre vorhandene Domain, indem ich die DNS-Einträge anpasse, zum Beispiel bei Ionos.'
				}
			],
			cta: 'Angebot anfragen'
		},
		{
			id: 'cloud',
			slug: 'cloud-kosten-senken',
			title: 'Cloud-Kosten senken',
			description:
				'Ich analysiere Ihr Cloud-Setup (bevorzugt AWS) und Ihre monatliche Rechnung, zeige konkrete Einsparungen auf und migriere Ihre Dienste, wo es sinnvoll ist, zu Hetzner. So lassen sich bis zu 97 % der monatlichen Kosten sparen.',
			metaTitle: 'Cloud-Kosten senken & AWS-zu-Hetzner-Migration | Robert Fent',
			metaDescription:
				'Senken Sie Ihre Cloud-Rechnung: Ich analysiere Ihr AWS-Setup, zeige konkrete Einsparungen und migriere zu Hetzner, wo es sich lohnt. Referenz: von rund 4.000 € auf 100 € im Monat.',
			intro:
				'Cloud-Rechnungen wachsen leise. Ich analysiere Ihr Setup und Ihre monatliche Rechnung, zeige Ihnen, wohin das Geld fließt und was Sie sparen können, und setze die Änderungen um, bis hin zur kompletten Migration von AWS zu Hetzner.',
			included: [
				'Analyse Ihrer Cloud-Architektur und Ihrer monatlichen Rechnung',
				'Eine schriftliche Liste konkreter Einsparungen mit geschätzter Wirkung',
				'Migration von AWS (zum Beispiel EC2 und ECS) zu Hetzner, wo es sich lohnt',
				'Docker-Compose-Setup mit Reverse Proxy und automatischem HTTPS',
				'Backups und Dokumentation, damit Ihr Team das Ergebnis selbst betreiben kann'
			],
			process: [
				{
					title: 'Analyse',
					text: 'Ich gehe Ihre Infrastruktur und Ihre Rechnung Posten für Posten durch.'
				},
				{
					title: 'Vorschlag',
					text: 'Sie erhalten konkrete Sparoptionen mit ihren Vor- und Nachteilen und entscheiden selbst.'
				},
				{
					title: 'Migration',
					text: 'Ich setze die Änderungen Schritt für Schritt um und plane so, dass Ausfallzeiten kurz bleiben.'
				},
				{
					title: 'Übergabe',
					text: 'Dokumentation und eine Einweisung, damit Ihr Team die Kontrolle behält.'
				}
			],
			caseStudy: {
				title: 'Migration von AWS zu Hetzner',
				text: 'Ich habe die Infrastruktur unseres Unternehmens von AWS (EC2, ECS) auf einen einzigen Docker-Compose-Stack bei Hetzner migriert, mit NGINX als Reverse Proxy und automatischem HTTPS.',
				result: 'Monatliche Kosten: von rund 4.000 € auf etwa 100 € (−97 %)'
			},
			faq: [
				{
					q: 'Muss ich AWS verlassen?',
					a: 'Nein. Oft lässt sich schon innerhalb von AWS sparen, etwa durch passend dimensionierte Instanzen oder das Entfernen ungenutzter Ressourcen. Eine Migration schlage ich nur vor, wenn sie sich klar lohnt.'
				},
				{
					q: 'Wie viel kann ich sparen?',
					a: 'Das hängt von Ihrem Setup ab. Bei unserer eigenen Migration sanken die monatlichen Kosten von rund 4.000 € auf etwa 100 €. Die Analyse zeigt, was bei Ihnen realistisch ist.'
				},
				{
					q: 'Mit welchen Cloud-Anbietern arbeiten Sie?',
					a: 'Hauptsächlich mit AWS und Hetzner, dazu Docker, Ansible und NGINX oder Traefik.'
				}
			],
			cta: 'Kontakt aufnehmen'
		},
		{
			id: 'ai',
			slug: 'ki-integration',
			title: 'KI-Einführung & Integration',
			description:
				'Ich führe KI in Ihrem Unternehmen ein und binde sie in die Tools ein, die Sie bereits nutzen: von der Wahl des passenden Modells (gehostet oder selbst betrieben) über LLM-Assistenten bis zu Automatisierungen in Ihrer bestehenden Infrastruktur, mit Blick auf Datenschutz und laufende Kosten.',
			metaTitle:
				'KI-Integration für Unternehmen – LLM-Einführung & Automatisierung | Robert Fent',
			metaDescription:
				'Ich führe KI in Ihrem Unternehmen ein: gehostete oder selbst betriebene Modelle, LLM-Assistenten und Automatisierungen in Ihren bestehenden Tools, datenschutzbewusst umgesetzt.',
			intro:
				'KI bringt am meisten, wenn sie in den Tools arbeitet, die Ihr Team ohnehin nutzt. Ich helfe Ihnen bei der Wahl des passenden Modells, entwickle Assistenten und Automatisierungen und betreibe sie sicher in Ihrer Infrastruktur.',
			included: [
				'Auswahl des passenden Modells, gehostet oder selbst betrieben',
				'LLM-Assistenten für Ihr Team',
				'Automatisierungen und Integrationen in Ihre bestehenden Tools',
				'Datenschutz und laufende Kosten von Anfang an mitgedacht',
				'Sicherer Betrieb in Ihrer Infrastruktur, zum Beispiel hinter Single Sign-on'
			],
			process: [
				{
					title: 'Anwendungsfälle',
					text: 'Wir finden heraus, wo KI Ihrem Team wirklich Zeit spart.'
				},
				{
					title: 'Modellwahl',
					text: 'Ich vergleiche gehostete und selbst betriebene Modelle nach Qualität, Datenschutz und Kosten.'
				},
				{
					title: 'Integration',
					text: 'Ich baue den Assistenten oder die Automatisierung in Ihre bestehenden Tools ein.'
				},
				{
					title: 'Betrieb',
					text: 'Deployment, Zugriffskontrolle und Monitoring in Ihrer Infrastruktur.'
				}
			],
			caseStudy: {
				title: 'KI-gestützter Mail- und Kalender-Client',
				text: 'Als Teil der selbst gehosteten Software-Suite unseres Unternehmens habe ich einen KI-gestützten Mail- und Kalender-Client für Microsoft 365 entwickelt, hinter einem Authentik-Single-Sign-on mit verpflichtender MFA.',
				result: 'KI im Arbeitsalltag, innerhalb der eigenen Infrastruktur'
			},
			faq: [
				{
					q: 'Kann die KI auf unseren eigenen Servern laufen?',
					a: 'Ja. Wenn es zu Ihren Datenschutzanforderungen passt, sind selbst betriebene Modelle eine Option. Ich vergleiche sie mit gehosteten Modellen nach Qualität und laufenden Kosten.'
				},
				{
					q: 'Verlassen unsere Daten das Unternehmen?',
					a: 'Das hängt vom gewählten Setup ab. Mit selbst betriebenen Modellen bleiben sie vollständig in Ihrer Infrastruktur; bei gehosteten Modellen wähle ich Anbieter und Einstellungen passend zu Ihren Datenschutzanforderungen.'
				}
			],
			cta: 'Anwendungsfall besprechen'
		}
	],

	contact: {
		formTitle: 'Schreiben Sie mir',
		name: 'Ihr Name',
		namePlaceholder: 'Max Mustermann',
		message: 'Ihre Nachricht',
		messagePlaceholder: 'Hallo Robert, …',
		submit: 'Per E-Mail senden',
		sent: 'Ihr E-Mail-Programm wird geöffnet. Vielen Dank!',
		subject: (author) => `Nachricht von ${author}`
	}
};
