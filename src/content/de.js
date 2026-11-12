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
				'Robert Fent, Fullstack-Softwareentwickler & DevOps Engineer aus Deutschland. Projekte zu wartbarer Software, automatisierter Infrastruktur, Cloud-Kostenoptimierung und KI-Integration.'
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
		privacy: 'Datenschutz',
		iconsBy: 'Icons von',
		designBy: 'Ursprüngliches Design basierend auf der Arbeit von',
		projectOn: (project, site) => `${project} auf ${site}`
	},

	nav: [
		{ hash: 'about', label: 'Über mich' },
		{ hash: 'projects', label: 'Projekte' },
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
		contact: {
			label: 'Kontakt',
			title: 'Schreiben Sie mir',
			lead: 'Fragen zu einem Projekt, eine Idee zum Austauschen oder einfach Hallo sagen? Mein Postfach ist offen.'
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
