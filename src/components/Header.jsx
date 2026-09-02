const links = [
	{ href: '/', label: 'Home' },
	{ href: '/#about', label: 'About' },
	{ href: '/#projects', label: 'Projects' },
	{ href: '/#services', label: 'Services' },
	{ href: '/#contact', label: 'Contact' },
	{ href: '/cv', label: 'CV' }
];

export default function Header({ navigate }) {
	const onClick = (event, href) => {
		event.preventDefault();
		navigate(href);
	};

	return (
		<header className="site-header">
			<div className="name-heading">
				<span style={{ color: 'var(--color-accent)' }}>R</span>obert
			</div>
			<nav>
				{links.map(({ href, label }) => (
					<a key={href} href={href} onClick={(e) => onClick(e, href)}>
						{label}
					</a>
				))}
			</nav>
		</header>
	);
}
