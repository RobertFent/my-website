export default function NotFound({ navigate }) {
	return (
		<section className="cv container not-found">
			<h1>Page not found</h1>
			<p>The page you are looking for doesn’t exist or has been moved.</p>
			<a
				className="btn btn-primary"
				href="/"
				onClick={(e) => {
					e.preventDefault();
					navigate('/');
				}}
			>
				Back to home
			</a>
		</section>
	);
}
