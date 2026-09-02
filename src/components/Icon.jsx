/**
 * Renders one of the white icons in /public/icons as a CSS mask,
 * so it takes whatever `color` the surrounding CSS sets.
 */
export default function Icon({ name, size = 24, className = '' }) {
	return (
		<span
			aria-hidden="true"
			className={`icon ${className}`}
			style={{
				'--icon': `url(/icons/${name})`,
				width: size,
				height: size
			}}
		/>
	);
}
