import Section from './Section.jsx';
import { about } from '../content.js';

function Timeline({ title, items }) {
	return (
		<div className="timeline reveal">
			<h3>{title}</h3>
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
		<Section id="about" index={1} title="About">
			<div className="about-grid">
				<figure className="about-photo reveal">
					<img
						src="/about.webp"
						alt="Robert and his fiancée wearing helmets"
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
