import Section from './Section.jsx';
import Icon from './Icon.jsx';
import { projects, sections } from '../content.js';

export default function Projects() {
	return (
		<Section id="projects" index={2} {...sections.projects}>
			<div className="project-grid">
				{projects.map((project, i) => (
					<article
						key={project.title}
						className={`card project reveal ${project.featured ? 'featured' : ''}`}
						style={{ '--delay': `${(i % 3) * 70}ms` }}
					>
						<div className="card-top">
							<span className="icon-badge">
								<Icon name={project.icon} size={26} />
							</span>
							{project.link && (
								<a
									className="card-link"
									href={project.link.href}
									target="_blank"
									rel="noreferrer"
									aria-label={`${project.title} on ${project.link.label}`}
								>
									{project.link.label} <span aria-hidden="true">↗</span>
								</a>
							)}
						</div>
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						<ul className="tags">
							{project.tags.map((tag) => (
								<li key={tag}>{tag}</li>
							))}
						</ul>
					</article>
				))}
			</div>
		</Section>
	);
}
