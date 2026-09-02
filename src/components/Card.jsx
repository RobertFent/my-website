import { useState } from 'react';

/**
 * Expandable card used for projects and services.
 * Click toggles the content; hovering another card collapses the previous one.
 */
export default function Card({
	header,
	children,
	width,
	icon,
	linkName,
	link,
	linkDescription,
	isOpen,
	onToggle,
	onHover
}) {
	const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
	const open = isOpen ?? uncontrolledOpen;
	const toggle = onToggle ?? (() => setUncontrolledOpen((o) => !o));

	return (
		<div
			className={`card ${open ? 'clicked' : ''}`}
			style={{ flex: `1 1 ${width}%`, maxWidth: `${width}%` }}
			onClick={toggle}
			onMouseEnter={onHover}
		>
			<span
				className="card-icon"
				style={{ backgroundImage: `url(/icons/${icon})` }}
			/>
			<h1>{header}</h1>
			<div className={`card-content ${open ? 'content-visible' : ''}`}>
				<p>{children}</p>
				{link && (
					<p className="git-link">
						{linkName}: <a href={link}>{linkDescription}</a>.
					</p>
				)}
			</div>
			<p className="expand-button">{open ? 'Read Less' : 'Read More'}</p>
		</div>
	);
}

/**
 * Hook that gives a group of cards "only one open at a time" behaviour.
 */
export function useCardGroup() {
	const [openIndex, setOpenIndex] = useState(null);
	return (index) => ({
		isOpen: openIndex === index,
		onToggle: () => setOpenIndex((i) => (i === index ? null : index)),
		onHover: () => setOpenIndex((i) => (i === index ? i : null))
	});
}
