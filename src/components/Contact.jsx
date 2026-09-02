import { useState } from 'react';
import Section from './Section.jsx';
import Icon from './Icon.jsx';
import { EMAIL, links } from '../content.js';

export default function Contact() {
	const [author, setAuthor] = useState('');
	const [content, setContent] = useState('');
	const [sent, setSent] = useState(false);

	const onSubmit = (event) => {
		event.preventDefault();
		const subject = encodeURIComponent(`Message from ${author}`);
		const body = encodeURIComponent(`${content}\n\n— ${author}`);
		window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
		setSent(true);
		setTimeout(() => setSent(false), 4000);
	};

	return (
		<Section
			id="contact"
			index={4}
			title="Contact"
			lead="Have a project in mind or just want to say hello? My inbox is open."
		>
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
					<h3>Leave me a message</h3>
					<label>
						Your name
						<input
							type="text"
							name="author"
							required
							autoComplete="name"
							placeholder="Jane Doe"
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
						/>
					</label>
					<label>
						Your message
						<textarea
							name="content"
							required
							rows={4}
							placeholder="Hi Robert, …"
							value={content}
							onChange={(e) => setContent(e.target.value)}
						/>
					</label>
					<button type="submit" className="btn btn-primary">
						Send via e-mail
					</button>
					<p className={`form-note ${sent ? 'show' : ''}`} aria-live="polite">
						Opening your mail app — thank you!
					</p>
				</form>
			</div>
		</Section>
	);
}
