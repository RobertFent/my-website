import { Error } from '../../app/components/ErrorMessage.js';
import { html } from '../../core/modules/html.js';

export const Guestbook = ({ entries }) => {
	return html`
		<div id="guestbook-view">
			<style>
				me section {
					display: flex;
					flex-direction: column;
					justify-content: center;
					padding: var(--size-8);
					text-align: center;
					min-height: 8.5rem;
				}
				me table {
					width: 100%;
					border-collapse: collapse;
					margin-top: var(--size-6);
				}
				me th,
				me td {
					text-align: left;
					padding: var(--size-2);
					border-bottom: 1px solid var(--color-accent);
					font-size: 0.95rem;
				}
				me th {
					font-weight: bold;
				}
				me tr:last-child td {
					border-bottom: none;
				}
				me hr {
					margin: var(--size-6) 0;
					border: none;
					border-top: 1px solid var(--color-accent);
				}
				me form {
					max-width: 600px;
					width: 100%;
					margin: 0 auto;
					background: white;
					border: 1px solid var(--color-accent);
					border-radius: var(--radius-xl);
					padding: var(--size-6);
					box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
				}
				me form h2 {
					text-align: center;
					font-size: var(--scale-3);
					margin-bottom: var(--size-4);
					color: var(--color-primary);
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
				me button:hover {
					background: var(--color-accent);
				}
			</style>
			<section class="colored-component">
				<h1>Guestbook</h1>
			</section>

			<table data-testid="guestbookEntry-table">
				<thead>
					<tr>
						<th>Date</th>
						<th>Author</th>
						<th>Message</th>
					</tr>
				</thead>
				<tbody>
					${entries.map((entry) => {
						return GuestbookEntry(entry);
					})}
				</tbody>
			</table>

			<hr />

			<form
				hx-post="/guestbook"
				hx-target="#guestbook-view"
				hx-swap="outerHTML"
				data-testid="guestbookEntry-form"
			>
				<h2>✨ Leave me a nice message</h2>
				<div class="form-group">
					<label for="author">Your name</label>
					<input
						type="text"
						id="author"
						name="author"
						required
						placeholder="Jane Doe"
					/>
				</div>
				<div class="form-group">
					<label for="content">Your message</label>
					<input
						type="text"
						id="content"
						name="content"
						required
						placeholder="Had a great time here!"
					/>
				</div>
				<button type="submit">Submit Entry</button>
			</form>

			${Error()}
		</div>
	`;
};

export const GuestbookEntry = (entry) => {
	return html`
		<tr data-testid="guestbookEntry-item">
			<td>${new Date(entry.timestamp).toLocaleString()}</td>
			<td>${entry.author}</td>
			<td>${entry.content}</td>
		</tr>
	`;
};
