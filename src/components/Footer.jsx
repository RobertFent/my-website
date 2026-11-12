import Link from './Link.jsx';
import { useContent } from '../i18n.js';

export default function Footer() {
	const { ui } = useContent();
	return (
		<footer className="site-footer">
			<div className="container footer-inner">
				<p suppressHydrationWarning>© {new Date().getFullYear()} Robert Fent</p>
				<nav className="footer-legal" aria-label={ui.privacy}>
					<Link to="/datenschutz" hrefLang="de">
						{ui.privacy}
					</Link>
				</nav>
				<p className="footer-credits">
					{ui.iconsBy}{' '}
					<a target="_blank" rel="noreferrer" href="https://icons8.com">
						Icons8
					</a>
					. {ui.designBy}{' '}
					<a target="_blank" rel="noreferrer" href="https://sizovs.net">
						Eduards Sizovs
					</a>
					.
				</p>
			</div>
		</footer>
	);
}
