export default function CV() {
	return (
		<section className="cv container">
			<div className="cv-bar">
				<h1>Curriculum Vitae</h1>
				<a className="btn btn-primary btn-small" href="/cv.pdf" download>
					Download PDF
				</a>
			</div>
			<iframe
				className="cv-frame"
				src="/cv.pdf"
				title="CV of Robert Fent"
			/>
		</section>
	);
}
