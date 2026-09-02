import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import CV from './components/CV.jsx';
import useReveal from './useReveal.js';

/**
 * Tiny router: "/" renders the one-page portfolio, "/cv" the CV viewer.
 */
const readLocation = () => ({
	path: window.location.pathname,
	hash: window.location.hash.slice(1),
	// changes on every navigation, even when path + hash are identical,
	// so clicking the same nav link twice still scrolls
	tick: Date.now()
});

const useLocation = () => {
	const [location, setLocation] = useState(readLocation);
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

export default function App() {
	const [{ path, hash, tick }, navigate] = useLocation();
	const isCV = path === '/cv';

	useReveal([path]);

	// scroll to hash target (or top) after every navigation
	useEffect(() => {
		if (isCV || !hash) {
			window.scrollTo({ top: 0 });
			return;
		}
		requestAnimationFrame(() =>
			document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
		);
	}, [path, hash, tick, isCV]);

	return (
		<>
			<div className="bg-glow" aria-hidden="true" />
			<Header navigate={navigate} path={path} />
			<main>
				{isCV ? (
					<CV />
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
