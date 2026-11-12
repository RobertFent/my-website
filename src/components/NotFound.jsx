import Link from './Link.jsx';
import { useContent } from '../i18n.js';
import { homePath } from '../routes.js';

export default function NotFound() {
	const { lang, ui } = useContent();
	return (
		<section className="cv container not-found">
			<h1>{ui.notFoundTitle}</h1>
			<p>{ui.notFoundText}</p>
			<Link className="btn btn-primary" to={homePath(lang)}>
				{ui.backHome}
			</Link>
		</section>
	);
}
