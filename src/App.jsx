import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import CV from './components/CV.jsx';
import NotFound from './components/NotFound.jsx';
import useReveal from './useReveal.js';
import { applyMeta } from './seo.js';

/**
 * Tiny router: "/" renders the one-page portfolio, "/cv" the CV viewer,
 * anything else a 404 page.
 */
const readLocation = () => ({
	// normalise "/cv/" → "/cv" so trailing-slash URLs don't fall through
	path: window.location.pathname.replace(/(.)\/+$/, '$1'),
	hash: window.location.hash.slice(1),
	// changes on every navigation, even when path + hash are identical,
	// so clicking the same nav link twice still scrolls
	tick: Date.now()
});

const useLocation = (initialPath) => {
	// during prerendering (no window) the path is passed in explicitly
	const [location, setLocation] = useState(() =>
		typeof window === 'undefined'
			? { path: initialPath, hash: '', tick: 0 }
			: readLocation()
	);
	useEffect(() => {
		const onPop = () => setLocation(readLocation());
		window.addEventListener('popstate', onPop);
		return () => window.removeEventListener('popstate', onPop);
	}, []);
	const navigate = (to) => {
		window.history.pushState({}, '', to);
		setLocation(readLocation());
	};

	// keep <title>, description and canonical in sync on client-side navigation
	useEffect(() => applyMeta(location.path), [location.path]);
	return [location, navigate];
};

export default function App({ initialPath = '/' }) {
	const [{ path, hash, tick }, navigate] = useLocation(initialPath);
	const isCV = path === '/cv';
	const isHome = path === '/';

	useReveal([path]);

	// scroll to hash target (or top) after every navigation
	useEffect(() => {
		if (!isHome || !hash) {
			window.scrollTo({ top: 0 });
			return;
		}
		requestAnimationFrame(() =>
			document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
		);
	}, [path, hash, tick, isHome]);

	return (
		<>
			<a className="skip-link" href="#main">
				Skip to content
			</a>
			<div className="bg-glow" aria-hidden="true" />
			<Header navigate={navigate} path={path} />
			<main id="main" tabIndex={-1}>
				{isCV ? (
					<CV />
				) : !isHome ? (
					<NotFound navigate={navigate} />
				) : (
					<>
						<Hero navigate={navigate} />
						<About />
						<Projects />
						<Services />
						<Contact />
					</>
				)}
			</main>
			<Footer />
		</>
	);
}
