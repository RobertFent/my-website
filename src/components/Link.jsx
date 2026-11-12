import { useNavigate } from '../i18n.js';

/**
 * Internal link: navigates client-side, but leaves modified clicks
 * (new tab, new window) to the browser.
 */
export default function Link({ to, onNavigate, ...props }) {
	const navigate = useNavigate();
	const onClick = (event) => {
		if (
			event.defaultPrevented ||
			event.button !== 0 ||
			event.metaKey ||
			event.ctrlKey ||
			event.shiftKey ||
			event.altKey
		)
			return;
		event.preventDefault();
		onNavigate?.();
		navigate(to);
	};
	return <a href={to} onClick={onClick} {...props} />;
}
