import { useEffect, useState } from 'react';
import { nav } from '../content.js';

export default function Header({ navigate, path }) {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const go = (event, href) => {
		event.preventDefault();
		setOpen(false);
		navigate(href);
	};

	return (
		<header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
			<div className="container header-inner">
				<a className="brand" href="/" onClick={(e) => go(e, '/')}>
					<span className="brand-mark">R</span>
					<span className="brand-name">Robert Fent</span>
				</a>

				<button
					className="nav-toggle"
					aria-label="Toggle navigation"
					aria-expanded={open}
					onClick={() => setOpen((o) => !o)}
				>
					<span />
					<span />
				</button>

				<nav className={open ? 'open' : ''}>
					{nav.map(({ href, label }) => (
						<a key={href} href={href} onClick={(e) => go(e, href)}>
							{label}
						</a>
					))}
					<a
						href="/cv"
						className={`btn btn-small ${path === '/cv' ? 'btn-primary' : 'btn-ghost'}`}
						onClick={(e) => go(e, '/cv')}
					>
						CV
					</a>
				</nav>
			</div>
		</header>
	);
}
