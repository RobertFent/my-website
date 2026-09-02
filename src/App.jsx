import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Blog from './components/Blog.jsx';
import CV from './components/CV.jsx';

/**
 * Tiny router: "/" renders the one-page portfolio, "/cv" the CV viewer.
 * No router library needed for two routes.
 */
const usePath = () => {
	const [path, setPath] = useState(window.location.pathname);
	useEffect(() => {
		const onPop = () => setPath(window.location.pathname);
		window.addEventListener('popstate', onPop);
		return () => window.removeEventListener('popstate', onPop);
	}, []);
	const navigate = (to) => {
		window.history.pushState({}, '', to);
		setPath(new URL(to, window.location.origin).pathname);
	};
	return [path, navigate];
};

export default function App() {
	const [path, navigate] = usePath();
	const isCV = path === '/cv';

	// scroll to hash target after navigating back to "/"
	useEffect(() => {
		if (isCV) return;
		const id = window.location.hash.slice(1);
		if (!id) {
			window.scrollTo({ top: 0 });
			return;
		}
		requestAnimationFrame(() =>
			document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
		);
	}, [path, isCV]);

	return (
		<>
			<Header navigate={navigate} />
			<main className={isCV ? 'main-cv' : ''}>
				{isCV ? (
					<CV />
				) : (
					<div className="root">
						<Home />
						<div id="website-content">
							<About />
							<Projects />
							<Services />
							<Contact />
							<Blog />
						</div>
					</div>
				)}
			</main>
			<Footer />
		</>
	);
}
