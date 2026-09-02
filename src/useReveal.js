import { useEffect } from 'react';

/**
 * Adds the "in" class to every `.reveal` element once it scrolls into view.
 * Elements are visible immediately when the user prefers reduced motion.
 */
export default function useReveal(deps = []) {
	useEffect(() => {
		const elements = document.querySelectorAll('.reveal');
		if (!elements.length) return;

		const reduce = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;
		if (reduce || !('IntersectionObserver' in window)) {
			elements.forEach((el) => el.classList.add('in'));
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('in');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
		);
		elements.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps);
}
