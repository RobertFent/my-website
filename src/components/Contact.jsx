import { useState } from 'react';

const EMAIL = 'info@robertfent.com';

const contacts = [
	{ icon: 'email_white.png', href: `mailto:${EMAIL}`, label: EMAIL },
	{
		icon: 'github_white.svg',
		href: 'https://github.com/RobertFent',
		label: 'github.com/RobertFent'
	},
	{
		icon: 'linkedin_white.svg',
		href: 'https://www.linkedin.com/in/robert-fent-905140280',
		label: 'linkedin.com/in/robert-fent'
	}
];

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
		<div id="contact">
			<h1>Contact</h1>
			<div className="contact-components flex-row">
				<div className="contact-left">
					{contacts.map(({ icon, href, label }) => (
						<div className="link-entry" key={href}>
							<span
								className="link-icon"
								style={{ backgroundImage: `url(/icons/${icon})` }}
							/>
							<a href={href}>{label}</a>
						</div>
					))}
				</div>
				<div className="contact-right">
					<h2>Leave me a nice message ✨</h2>
					<form onSubmit={onSubmit}>
						<div className="form-group">
							<label htmlFor="author">Your name</label>
							<input
								type="text"
								id="author"
								name="author"
								required
								placeholder="Alexander Fent"
								value={author}
								onChange={(e) => setAuthor(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="content">Your message</label>
							<input
								type="text"
								id="content"
								name="content"
								required
								placeholder="Howdy!🤠"
								value={content}
								onChange={(e) => setContent(e.target.value)}
							/>
						</div>
						<button type="submit">Send via E-Mail</button>
					</form>
					<p className={`submit-message ${sent ? 'show-message' : ''}`}>
						Opening your mail app … thank you! :-)
					</p>
				</div>
			</div>
		</div>
	);
}
