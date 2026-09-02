import Section from './Section.jsx';
import Icon from './Icon.jsx';
import { services } from '../content.js';

export default function Services() {
	return (
		<Section
			id="services"
			index={3}
			title="Services"
			lead="Two things I can do for you as a freelancer."
		>
			<div className="service-grid">
				{services.map((service, i) => (
					<article
						key={service.title}
						className="card service reveal"
						style={{ '--delay': `${i * 90}ms` }}
					>
						<span className="icon-badge">
							<Icon name={service.icon} size={26} />
						</span>
						<h3>{service.title}</h3>
						<p>{service.description}</p>
						<a
							className="btn btn-primary"
							href={service.cta.href}
							target={
								service.cta.href.startsWith('http') ? '_blank' : undefined
							}
							rel="noreferrer"
						>
							{service.cta.label}
						</a>
					</article>
				))}
			</div>
		</Section>
	);
}
