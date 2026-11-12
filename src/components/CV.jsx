import { Timeline } from './About.jsx';
import { about, hero } from '../content.js';

export default function CV() {
	return (
		<section className="cv container">
			<div className="cv-bar">
				<div>
					<p className="eyebrow">{hero.eyebrow}</p>
					<h1>Curriculum Vitae – Robert Fent</h1>
				</div>
				<a className="btn btn-primary btn-small" href="/cv.pdf" download>
					Download PDF
				</a>
			</div>

			<p className="cv-summary">{hero.intro}</p>

			<div className="timelines">
				<Timeline
					title="Experience"
					items={about.experience}
					headingLevel={2}
				/>
				<Timeline title="Education" items={about.education} headingLevel={2} />
			</div>

			<div className="cv-skills">
				<h2>Skills</h2>
				<ul className="chips">
					{about.skills.map((skill) => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
			</div>

			<h2 className="cv-pdf-title">Full CV (PDF)</h2>
			<iframe
				className="cv-frame"
				src="/cv.pdf"
				title="CV of Robert Fent (PDF)"
				loading="lazy"
			/>
		</section>
	);
}
