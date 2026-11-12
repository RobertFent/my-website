import { useState } from 'react';
import Section from './Section.jsx';
import Icon from './Icon.jsx';
import { EMAIL, links } from '../content/index.js';
import { useContent } from '../i18n.js';

export default function Contact() {
	const { contact, sections } = useContent();
	const [author, setAuthor] = useState('');
	const [content, setContent] = useState('');
	const [sent, setSent] = useState(false);

	const onSubmit = (event) => {
		event.preventDefault();
		const subject = encodeURIComponent(contact.subject(author));
		const body = encodeURIComponent(`${content}\n\n— ${author}`);
		window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
		setSent(true);
		setTimeout(() => setSent(false), 4000);
	};

	return (
		<Section id="contact" index={3} {...sections.contact}>
			<div className="contact-grid">
				<ul className="link-list reveal">
					{links.map(({ icon, href, label }) => (
						<li key={href}>
							<a
								href={href}
								target={href.startsWith('http') ? '_blank' : undefined}
								rel="noreferrer"
							>
								<span className="icon-badge small">
									<Icon name={icon} size={20} />
								</span>
								<span>{label}</span>
								<span className="link-arrow" aria-hidden="true">
									→
								</span>
							</a>
						</li>
					))}
				</ul>

				<form
					className="card contact-form reveal"
					style={{ '--delay': '100ms' }}
					onSubmit={onSubmit}
				>
					<h3>{contact.formTitle}</h3>
					<label>
						{contact.name}
						<input
							type="text"
							name="author"
							required
							autoComplete="name"
							placeholder={contact.namePlaceholder}
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
						/>
					</label>
					<label>
						{contact.message}
						<textarea
							name="content"
							required
							rows={4}
							placeholder={contact.messagePlaceholder}
							value={content}
							onChange={(e) => setContent(e.target.value)}
						/>
					</label>
					<button type="submit" className="btn btn-primary">
						{contact.submit}
					</button>
					<p className={`form-note ${sent ? 'show' : ''}`} aria-live="polite">
						{contact.sent}
					</p>
				</form>
			</div>
		</Section>
	);
}
