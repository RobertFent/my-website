import Icon from './Icon.jsx';
import Link from './Link.jsx';
import { EMAIL } from '../content/index.js';
import { useContent } from '../i18n.js';
import { homePath, pathFor } from '../routes.js';

/** Detail page for one service: what's included, process, case study, FAQ. */
export default function ServicePage({ id }) {
	const { lang, services, ui } = useContent();
	const service = services.find((s) => s.id === id);
	const others = services.filter((s) => s.id !== id);
	const home = homePath(lang);
	const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(service.title)}`;

	return (
		<article className="service-page container">
			<nav className="breadcrumbs" aria-label={ui.breadcrumb}>
				<ol>
					<li>
						<Link to={home}>{ui.home}</Link>
					</li>
					<li>
						<Link to={`${home}#services`}>{ui.services}</Link>
					</li>
					<li aria-current="page">{service.title}</li>
				</ol>
			</nav>

			<header className="service-hero reveal">
				<span className="icon-badge">
					<Icon name={service.icon} size={28} />
				</span>
				<p className="eyebrow">{ui.service}</p>
				<h1>{service.title}</h1>
				<p className="service-intro">{service.intro}</p>
				<a className="btn btn-primary" href={mailto}>
					{service.cta}
				</a>
			</header>

			<div className="service-columns">
				<section className="card reveal">
					<h2>{ui.included}</h2>
					<ul className="checklist">
						{service.included.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</section>

				<section
					className="card case-study reveal"
					style={{ '--delay': '80ms' }}
				>
					<p className="eyebrow">{ui.caseStudy}</p>
					<h2>{service.caseStudy.title}</h2>
					<p>{service.caseStudy.text}</p>
					<p className="case-result">{service.caseStudy.result}</p>
				</section>
			</div>

			<section className="service-block reveal">
				<h2>{ui.process}</h2>
				<ol className="steps">
					{service.process.map((step, i) => (
						<li key={step.title} className="card">
							<span className="step-index">
								{String(i + 1).padStart(2, '0')}
							</span>
							<h3>{step.title}</h3>
							<p>{step.text}</p>
						</li>
					))}
				</ol>
			</section>

			<section className="service-block reveal">
				<h2>{ui.faq}</h2>
				<div className="faq">
					{service.faq.map(({ q, a }) => (
						<details key={q} className="card">
							<summary>
								<h3>{q}</h3>
							</summary>
							<p>{a}</p>
						</details>
					))}
				</div>
			</section>

			<section className="card service-cta reveal">
				<h2>{ui.ctaTitle}</h2>
				<p>{ui.ctaText}</p>
				<a className="btn btn-primary" href={mailto}>
					{service.cta}
				</a>
			</section>

			<section className="service-block reveal">
				<h2>{ui.otherServices}</h2>
				<ul className="other-services">
					{others.map((s) => (
						<li key={s.id}>
							<Link
								className="card"
								to={pathFor({ locale: lang, page: 'service', id: s.id })}
							>
								<span className="icon-badge small">
									<Icon name={s.icon} size={20} />
								</span>
								<span>{s.title}</span>
								<span className="link-arrow" aria-hidden="true">
									→
								</span>
							</Link>
						</li>
					))}
				</ul>
			</section>
		</article>
	);
}
