import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import CV from './components/CV.jsx';
import ServicePage from './components/ServicePage.jsx';
import LegalPage from './components/LegalPage.jsx';
import NotFound from './components/NotFound.jsx';
import useReveal from './useReveal.js';
import { applyMeta } from './seo.js';
import { resolve } from './routes.js';
import { LocaleContext, NavigateContext, useContent } from './i18n.js';

/**
 * Tiny client-side router on top of the History API. Routes are defined in
 * routes.js; every page is also prerendered at build time.
 */
const readLocation = () => ({
	path: window.location.pathname,
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
	return [location, navigate];
};

const renderPage = (route) => {
	switch (route.page) {
		case 'home':
			return (
				<>
					<Hero />
					<About />
					<Projects />
					<Services />
					<Contact />
				</>
			);
		case 'cv':
			return <CV />;
		case 'service':
			return <ServicePage id={route.id} />;
		case 'impressum':
		case 'datenschutz':
			return <LegalPage page={route.page} />;
		default:
			return <NotFound />;
	}
};

export default function App({ initialPath = '/' }) {
	const [{ path, hash, tick }, navigate] = useLocation(initialPath);
	const route = useMemo(() => resolve(path), [path]);
	const isHome = route.page === 'home';

	useReveal([path]);

	// keep <title>, description, canonical and lang in sync on navigation
	useEffect(() => applyMeta(route), [route]);

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
		<NavigateContext.Provider value={navigate}>
			<LocaleContext.Provider value={route.locale}>
				<SkipLink />
				<div className="bg-glow" aria-hidden="true" />
				<Header route={route} />
				<main id="main" tabIndex={-1}>
					{renderPage(route)}
				</main>
				<Footer />
			</LocaleContext.Provider>
		</NavigateContext.Provider>
	);
}

function SkipLink() {
	const { ui } = useContent();
	return (
		<a className="skip-link" href="#main">
			{ui.skip}
		</a>
	);
}
