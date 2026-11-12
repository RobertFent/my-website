import { Timeline } from './About.jsx';
import { useContent } from '../i18n.js';

export default function CV() {
	const { about, hero, skills, ui } = useContent();
	return (
		<section className="cv container">
			<div className="cv-bar">
				<div>
					<p className="eyebrow">{hero.eyebrow}</p>
					<h1>{ui.cvTitle}</h1>
				</div>
				<a className="btn btn-primary btn-small" href="/cv.pdf" download>
					{ui.downloadPdf}
				</a>
			</div>

			<p className="cv-summary">{hero.intro}</p>

			<div className="timelines">
				<Timeline
					title={ui.experience}
					items={about.experience}
					headingLevel={2}
				/>
				<Timeline
					title={ui.education}
					items={about.education}
					headingLevel={2}
				/>
			</div>

			<div className="cv-skills">
				<h2>{ui.skills}</h2>
				<ul className="chips">
					{skills.map((skill) => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
			</div>

			<h2 className="cv-pdf-title">{ui.fullCvPdf}</h2>
			<iframe
				className="cv-frame"
				src="/cv.pdf"
				title={ui.cvFrameTitle}
				loading="lazy"
			/>
		</section>
	);
}
