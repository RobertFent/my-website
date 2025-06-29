import { html } from '../../core/modules/html.js';

export const ProductionNote = () => {
	return html`
		<style>
			.center-message {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				height: 70vh;
				font-family: sans-serif;
				font-size: 1.5rem;
			}
		</style>
		<div class="center-message">🚧 This page is still in production...</div>
	`;
};
