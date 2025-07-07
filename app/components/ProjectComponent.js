import { html } from '../../core/modules/html.js';

export const ProjectComponent = (
	header,
	content,
	iconName,
	gitHubLink,
	gitHubLinkName
) => {
	return html`
		<div class="project-component">
			<style>
				me {
					background-color: #2b2b2b;
					border-radius: var(--radius-md);
					padding: var(--size-8);
					align-self: flex-start;
					cursor: pointer;
					&:not(.clicked):hover {
						background-color: var(--color-accent);
					}
					flex: 1 1 calc(30%);
					box-sizing: border-box;
					max-width: calc(30% - 20px);
				}
				me h1 {
					font-size: var(--size-6);
					white-space: nowrap;
				}
				me .icon {
					background: url('/static/icons/${iconName}');
					background-size: auto 100%;
					height: 50px;
					width: 50px;
					display: block;
				}
				me .content {
					overflow: hidden;
					max-height: 0vh;
					transition-property: all;
					transition-duration: 1s;
					transition-timing-function: cubic-bezier(1, 1, 1, 1);
				}
				me .content-visible {
					max-height: 40vh;
				}
				me .content .git-link {
					margin-top: var(--size-2);
					margin-bottom: var(--size-2);
				}
				me .expand_button {
					text-decoration: underline;
					cursor: pointer;
				}
				me .expand_button:hover {
					text-decoration: none;
				}
				@media (max-width: 900px) {
					me {
						flex: 1 1 100%;
						max-width: 100vw;
					}
					me h1 {
						font-size: var(--size-8);
					}
				}
			</style>
			<span class="icon"></span>
			<h1>${header}</h1>
			<div class="content">
				<p>${content}</p>
				${gitHubLink
					? html`<p class="git-link">
							GitHub:
							<a href="${gitHubLink}">${gitHubLinkName}</a>.
					  </p>`
					: ''}
			</div>
			<p class="expand_button">Read More</p>
		</div>
	`;
};
