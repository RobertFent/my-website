import Section from './Section.jsx';
import Icon from './Icon.jsx';
import Link from './Link.jsx';
import { useContent } from '../i18n.js';
import { pathFor } from '../routes.js';

export default function Services() {
	const { lang, sections, services, ui } = useContent();
	return (
		<Section id="services" index={3} {...sections.services}>
			<div className="service-grid">
				{services.map((service, i) => (
					<article
						key={service.id}
						className="card service reveal"
						style={{ '--delay': `${i * 90}ms` }}
					>
						<span className="icon-badge">
							<Icon name={service.icon} size={26} />
						</span>
						<h3>
							<Link
								to={pathFor({ locale: lang, page: 'service', id: service.id })}
							>
								{service.title}
							</Link>
						</h3>
						<p>{service.description}</p>
						<Link
							className="btn btn-primary"
							to={pathFor({ locale: lang, page: 'service', id: service.id })}
							aria-label={`${ui.learnMore}: ${service.title}`}
						>
							{ui.learnMore}
						</Link>
					</article>
				))}
			</div>
		</Section>
	);
}
