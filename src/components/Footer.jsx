export default function Footer() {
	return (
		<footer className="site-footer">
			© {new Date().getFullYear()} Based on work by{' '}
			<a href="https://sizovs.net">Eduards Sizovs</a>. Enhanced &amp; maintained
			by <a href="https://robertfent.com">Robert Fent</a>. All rights reserved.
			<br />
			<p>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://icons8.com/icon/3tC9EQumUAuq/github"
				>
					GitHub
				</a>
				,{' '}
				<a
					target="_blank"
					rel="noreferrer"
					href="https://icons8.com/icon/8808/linkedin"
				>
					LinkedIn
				</a>{' '}
				and{' '}
				<a
					target="_blank"
					rel="noreferrer"
					href="https://icons8.com/icon/111591/medium-monogram"
				>
					Medium
				</a>{' '}
				icon by{' '}
				<a target="_blank" rel="noreferrer" href="https://icons8.com">
					Icons8
				</a>
			</p>
		</footer>
	);
}
