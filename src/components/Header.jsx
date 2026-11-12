import { useEffect, useState } from 'react';
import Link from './Link.jsx';
import { useContent } from '../i18n.js';
import { alternatesFor, homePath, pathFor } from '../routes.js';

export default function Header({ route }) {
	const { nav, ui, lang } = useContent();
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const close = () => setOpen(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const home = homePath(lang);
	const otherLang = lang === 'de' ? 'en' : 'de';
	// same page in the other language, or that language's home page
	const switchTo = alternatesFor(route)?.[otherLang] ?? homePath(otherLang);
	const isCV = route.page === 'cv';

	return (
		<header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
			<div className="container header-inner">
				<Link
					className="brand"
					to={home}
					aria-label={ui.brandLabel}
					onNavigate={close}
				>
					<span className="brand-mark">R</span>
					<span className="brand-name">Robert Fent</span>
				</Link>

				<button
					type="button"
					className="nav-toggle"
					aria-controls="site-nav"
					aria-label={ui.toggleNav}
					aria-expanded={open}
					onClick={() => setOpen((o) => !o)}
				>
					<span />
					<span />
				</button>

				<nav
					id="site-nav"
					aria-label={ui.mainNav}
					className={open ? 'open' : ''}
				>
					{nav.map(({ hash, label }) => (
						<Link key={hash} to={`${home}#${hash}`} onNavigate={close}>
							{label}
						</Link>
					))}
					<Link
						className="lang-switch"
						to={switchTo}
						hrefLang={otherLang}
						lang={otherLang}
						title={ui.switchLang.title}
						aria-label={ui.switchLang.title}
						onNavigate={close}
					>
						{ui.switchLang.label}
					</Link>
					<Link
						to={pathFor({ locale: lang, page: 'cv' })}
						className={`btn btn-small ${isCV ? 'btn-primary' : 'btn-ghost'}`}
						aria-current={isCV ? 'page' : undefined}
						onNavigate={close}
					>
						{ui.cv}
					</Link>
				</nav>
			</div>
		</header>
	);
}
