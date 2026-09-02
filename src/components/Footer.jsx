export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="container footer-inner">
				<p>© {new Date().getFullYear()} Robert Fent</p>
				<p className="footer-credits">
					Icons by{' '}
					<a target="_blank" rel="noreferrer" href="https://icons8.com">
						Icons8
					</a>
					. Original design based on work by{' '}
					<a target="_blank" rel="noreferrer" href="https://sizovs.net">
						Eduards Sizovs
					</a>
					.
				</p>
			</div>
		</footer>
	);
}
