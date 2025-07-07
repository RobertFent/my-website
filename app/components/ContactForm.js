import { html } from '../../core/modules/html.js';
import { ErrorMessage } from './ErrorMessage.js';

/**
 * Returns an HTML template for a contact form with styling for labels, input fields, and buttons.
 * The form includes fields for the user's name and message, with a submit button.
 * @date Jul 7th 2025
 * @author Robot
 *
 * @returns {string}
 */
export const ContactForm = () => {
	return html` <div id="contact-form">
		<style>
			me h2 {
				margin-bottom: var(--size-4);
				text-align: center;
			}
			me form {
				background: var(--color-secondary);
				border: 1px solid var(--color-accent);
				border-radius: var(--radius-xl);
				padding: var(--size-6);
			}
			me .form-group {
				display: flex;
				flex-direction: column;
				margin-bottom: var(--size-4);
			}
			me label {
				margin-bottom: var(--size-1);
				font-weight: 600;
				color: var(--color-primary);
			}
			me button {
				margin-top: var(--size-2);
				padding: var(--size-2) var(--size-4);
				border: none;
				border-radius: var(--radius-sm);
				background: var(--color-primary);
				color: white;
				font-weight: bold;
				cursor: pointer;
				transition: background 0.2s ease;
			}
			me input[type='text'] {
				padding: var(--size-2);
				border: 1px solid var(--color-grey-300);
				border-radius: var(--radius-sm);
				font-size: 1rem;
				color: var(--color-primary);
			}
			me input[type='text']:focus {
				outline: 2px solid var(--color-accent);
				outline-offset: 2px;
			}
			me button:hover {
				background: var(--color-accent);
			}
			me h1 {
				width: 100vw;
			}
		</style>
		<h2>✨ Leave me a nice message</h2>
		<form
			hx-post="/contact_entries"
			hx-target="#contact-form"
			hx-swap="outerHTML"
			hx-target="this"
		>
			<div class="form-group">
				<label for="author">Your name</label>
				<input
					type="text"
					id="author"
					name="author"
					required
					placeholder="Alexander Fent"
				/>
			</div>
			<div class="form-group">
				<label for="content">Your message</label>
				<input
					type="text"
					id="content"
					name="content"
					required
					placeholder="Howdy!🤠"
				/>
			</div>
			<button type="submit">Submit Entry</button>
			${ErrorMessage()}
		</form>
		<h1>Table Here -> put lefty here so that table may be centered</h1>
	</div>`;
};
