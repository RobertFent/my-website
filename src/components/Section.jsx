/**
 * Shared section shell: numbered eyebrow, heading, optional lead paragraph.
 */
export default function Section({
	id,
	index,
	title,
	lead,
	children,
	className = ''
}) {
	return (
		<section id={id} className={`section container ${className}`}>
			<header className="section-head reveal">
				<p className="eyebrow">
					<span className="section-index">
						{String(index).padStart(2, '0')}
					</span>
					{title}
				</p>
				<h2>{title}</h2>
				{lead && <p className="section-lead">{lead}</p>}
			</header>
			{children}
		</section>
	);
}
