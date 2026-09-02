import { hero } from '../content.js';

export default function Hero({ navigate }) {
	const go = (event, href) => {
		event.preventDefault();
		navigate(href);
	};

	return (
		<section id="home" className="hero container">
			<div className="hero-text">
				<p className="eyebrow reveal">{hero.eyebrow}</p>
				<h1 className="hero-title reveal" style={{ '--delay': '80ms' }}>
					{hero.name.split(' ')[0]}{' '}
					<span className="accent">{hero.name.split(' ')[1]}</span>
				</h1>
				<p className="hero-intro reveal" style={{ '--delay': '160ms' }}>
					{hero.intro}
				</p>
				<div className="hero-actions reveal" style={{ '--delay': '240ms' }}>
					<a
						className="btn btn-primary"
						href="/#projects"
						onClick={(e) => go(e, '/#projects')}
					>
						View projects
					</a>
					<a
						className="btn btn-ghost"
						href="/#contact"
						onClick={(e) => go(e, '/#contact')}
					>
						Get in touch
					</a>
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
						alt="Portrait of Robert Fent"
						width="600"
						height="800"
						fetchPriority="high"
					/>
				</div>
			</div>
		</section>
	);
}
