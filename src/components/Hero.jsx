import Link from './Link.jsx';
import { useContent } from '../i18n.js';
import { homePath } from '../routes.js';

export default function Hero() {
	const { hero, name, lang } = useContent();
	const home = homePath(lang);
	const [first, last] = name.split(' ');

	return (
		<section id="home" className="hero container">
			<div className="hero-text">
				<p className="eyebrow reveal">{hero.eyebrow}</p>
				<h1 className="hero-title reveal" style={{ '--delay': '80ms' }}>
					{first} <span className="accent">{last}</span>
				</h1>
				<p className="hero-intro reveal" style={{ '--delay': '160ms' }}>
					{hero.intro}
				</p>
				<div className="hero-actions reveal" style={{ '--delay': '240ms' }}>
					<Link className="btn btn-primary" to={`${home}#projects`}>
						{hero.viewProjects}
					</Link>
					<Link className="btn btn-ghost" to={`${home}#contact`}>
						{hero.getInTouch}
					</Link>
				</div>
				<dl className="hero-stats reveal" style={{ '--delay': '320ms' }}>
					{hero.stats.map(({ value, label }) => (
						<div key={label}>
							<dt>{value}</dt>
							<dd>{label}</dd>
						</div>
					))}
				</dl>
			</div>
			<div className="hero-visual reveal" style={{ '--delay': '200ms' }}>
				<div className="portrait-frame">
					<img
						src="/portrait.webp"
						srcSet="/portrait-600.webp 600w, /portrait.webp 772w"
						sizes="(max-width: 860px) 300px, 420px"
						alt={hero.portraitAlt}
						width="600"
						height="800"
						fetchPriority="high"
					/>
				</div>
			</div>
		</section>
	);
}
