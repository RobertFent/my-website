import Section from './Section.jsx';
import { useContent } from '../i18n.js';

export function Timeline({ title, items, headingLevel = 3 }) {
	const Heading = `h${headingLevel}`;
	return (
		<div className="timeline reveal">
			<Heading>{title}</Heading>
			<ol>
				{items.map(({ period, role, org }) => (
					<li key={period}>
						<span className="timeline-period">{period}</span>
						<span className="timeline-role">{role}</span>
						<span className="timeline-org">{org}</span>
					</li>
				))}
			</ol>
		</div>
	);
}

export default function About() {
	const { about, sections, skills, ui } = useContent();
	return (
		<Section id="about" index={1} {...sections.about}>
			<div className="about-grid">
				<figure className="about-photo reveal">
					<img
						src="/about.webp"
						srcSet="/about-480.webp 480w, /about.webp 675w"
						sizes="(max-width: 860px) 360px, 440px"
						alt={about.photoAlt}
						loading="lazy"
						width="600"
						height="800"
					/>
				</figure>
				<div className="about-text reveal" style={{ '--delay': '80ms' }}>
					{about.paragraphs.map((p) => (
						<p key={p}>{p}</p>
					))}
					<h3>{ui.skills}</h3>
					<ul className="chips">
						{skills.map((skill) => (
							<li key={skill}>{skill}</li>
						))}
					</ul>
				</div>
			</div>
			<div className="timelines">
				<Timeline title={ui.experience} items={about.experience} />
				<Timeline title={ui.education} items={about.education} />
			</div>
		</Section>
	);
}
