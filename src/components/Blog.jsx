export default function Blog() {
	return (
		<div id="blog">
			<h1>Blog</h1>
			<div className="blog-components flex-row">
				<div className="link-entry">
					<span
						className="link-icon"
						style={{ backgroundImage: 'url(/icons/medium_white.svg)' }}
					/>
					<a href="https://medium.com/@robert.fent">medium.com/@robert.fent</a>
				</div>
			</div>
		</div>
	);
}
