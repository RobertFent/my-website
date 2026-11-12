import Section from './Section.jsx';
import { about, sections } from '../content.js';

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
	return (
		<Section id="about" index={1} {...sections.about}>
			<div className="about-grid">
				<figure className="about-photo reveal">
					<img
						src="/about.webp"
						srcSet="/about-480.webp 480w, /about.webp 675w"
						sizes="(max-width: 860px) 360px, 440px"
						alt="Robert Fent and his wife Sara wearing helmets"
						loading="lazy"
						width="600"
						height="800"
					/>
				</figure>
				<div className="about-text reveal" style={{ '--delay': '80ms' }}>
					{about.paragraphs.map((p) => (
						<p key={p}>{p}</p>
					))}
					<h3>Skills</h3>
					<ul className="chips">
						{about.skills.map((skill) => (
							<li key={skill}>{skill}</li>
						))}
					</ul>
				</div>
			</div>
			<div className="timelines">
				<Timeline title="Experience" items={about.experience} />
				<Timeline title="Education" items={about.education} />
			</div>
		</Section>
	);
}
