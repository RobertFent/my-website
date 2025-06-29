import { html } from '../../core/modules/html.js';
import { ProductionNote } from '../components/ProductionNote.js';

export const Root = () => {
	return html`
		<div id="home">
			<style>
				me {
					display: flex;
					flex-direction: column;
					justify-content: center;
					height: 90vh;
					margin-left: var(--size-8);
				}
				@media (max-width: 600px) {
					me {
						justify-content: flex-start;
						margin-top: var(--size-32);
					}
				}
			</style>
			<h1>Robert Fent</h1>
			<h2>Full Stack Software Developer & Tech Enthusiast</h2>
		</div>

		<div id="about">
			<style>
				me .about-content {
					display: flex;
					flex-direction: row;
					gap: var(--size-16);
					margin: var(--size-32);
				}
				me img {
					border-radius: var(--radius-xl);
					box-shadow: 0 2px 12px #0002;
				}
				me h1 {
					font-size: var(--size-16);
				}
				@media (max-width: 600px) {
					me .about-content {
						flex-direction: column;
						margin: var(--size-2);
					}
				}
			</style>
			<div class="about-content colored-component">
				<div class="left-content">
					<img src="/static/me.jpeg" alt="Photo of me" />
				</div>
				<div class="right-content">
					<h1>About Me</h1>
					<p>
						Howdy 🤠, my name is Robert, I am 27 years old and I
						live in Germany.
					</p>
					<p>
						I am a passionate Software Developer who loves to build
						new Software with a focus on maintainablity, automated
						deployments and low cost.
					</p>
					<p>
						I am also into working out 🏋️, cocking 👨‍🍳 or traveling
						🧳 with my fiancee. Actually I am doing most activities
						with her if I think about it🤔 but I love her so this is
						okay 🫶. Anyways there is one very important hobby I
						share with my brother Lugo -> Warhammer🛠️🎨
					</p>
					<p style="margin-top: 2rem">
						<a href="https://github.com/RobertFent">GitHub</a>
					</p>
					<p>
						<a href="mailto:info@robertfent.com">Contact me</a>
					</p>
				</div>
			</div>
			<div>${ProductionNote()}</div>
		</div>
	`;
	// return html`
	// 	<div>
	// 		<style>
	// 			me section {
	// 				display: flex;
	// 				flex-direction: column;
	// 				justify-content: center;
	// 				padding: var(--size-8);
	// 				text-align: center;
	// 				min-height: 8rem;
	// 			}
	// 			me .main-section {
	// 				display: flex;
	// 				flex-wrap: wrap;
	// 				gap: var(--size-8);
	// 				margin-top: var(--size-6);
	// 			}
	// 			me .profile-content {
	// 				flex: 1 1 30%;
	// 			}
	// 			me .profile-upper-content {
	// 				padding: var(--size-6);
	// 				display: flex;
	// 				align-items: center;
	// 				gap: var(--size-8);
	// 			}
	// 			me .profile-upper-content a {
	// 				color: var(--color-primary);
	// 				text-decoration: underline;
	// 				margin-top: var(--size-60);
	// 			}
	// 			me .profile-lower-content {
	// 				padding: var(--size-6);
	// 				text-align: left;
	// 			}
	// 			me .main-section p {
	// 				margin-bottom: var(--size-4);
	// 			}
	// 			me .tech-content {
	// 				flex: 1 1 40%;
	// 				display: flex;
	// 				flex-direction: column;
	// 				justify-content: center;
	// 			}
	// 			@media (max-width: 1300px) {
	// 				me .profile-upper-content img {
	// 					width: 100%;
	// 				}
	// 				me .profile-upper-content {
	// 					flex-direction: column;
	// 					text-align: center;
	// 				}
	// 				me .profile-content {
	// 					flex: 1 1 100%;
	// 				}
	// 				me section {
	// 					padding: var(--size-0);
	// 					margin-bottom: var(--size-6);
	// 				}
	// 				me .main-section {
	// 					margin-top: var(--size-8);
	// 				}

	// 				me .tech-content {
	// 					flex: 1 1 100%;
	// 				}
	// 			}
	// 		</style>
	// 		<section class="colored-component">
	// 			<h1>Robert Fent</h1>
	// 			<h3 style="margin-top: var(--size-2)">
	// 				Full Stack Software Developer & Tech Enthusiast
	// 			</h3>
	// 		</section>
	// 		<section>
	// 			<h2>About this Website and Me</h2>
	// 			<hr />
	// 			<div class="main-section">
	// 				<!-- Left Column: Profile -->
	// 				<div class="profile-content">
	// 					<div class="colored-component">
	// 						<div class="profile-upper-content">
	// 							<img
	// 								src="/static/me.jpeg"
	// 								alt="Photo of me"
	// 								style="height: 100%; max-width: 300px; border-radius: var(--radius-xl); box-shadow: 0 2px 12px #0002; margin: 0 auto;"
	// 							/>
	// 							<div style="text-align: left;">
	//
	// 						</div>
	// 					</div>
	// 				</div>
	// 				<!-- Right Column: Tech Description -->
	// 				<div class="tech-content">
	// 					<h2 style="margin-bottom: var(--size-8);">StackZero</h2>
	// 					<p>
	// 						I built this site using my own lightweight framework
	// 						called <strong>StackZero</strong>, which is based on
	// 						a simple and efficient stack:
	// 						<a href="https://nodejs.org">Node.js</a> with
	// 						<a href="https://fastify.dev/">Fastify</a> as the
	// 						backend, <a href="https://htmx.org/">htmx</a> for as
	// 						frontend and
	// 						<a href="https://sqlite.org/">SQLite</a> as the
	// 						simple database — all wrapped in
	// 						<a href="https://www.docker.com/">Docker</a> and
	// 						deployed via
	// 						<a href="https://github.com/features/actions"
	// 							>GitHub Actions</a
	// 						>. The entire setup is designed to be low-cost
	// 						(under 5€ per month, including DNS via
	// 						<a href="https://www.ionos.de/">Ionos</a> and
	// 						hosting on a
	// 						<a href="https://www.hetzner.com/">Hetzner</a>
	// 						server), transparent, and fully under my control —
	// 						with no hidden dependencies or vendor lock-in. I
	// 						also use
	// 						<a href="https://playwright.dev/">Playwright</a> to
	// 						run end-to-end browser tests, ensuring that
	// 						everything works reliably across deployments.
	// 					</p>
	// 					<hr style="margin-top: 2rem; margin-bottom: 2rem;" />
	// 					<p>
	// 						<strong>
	// 							I offer StackZero at several freelance websites.
	// 							Feel free to visit the product page at
	// 							<a
	// 								href="https://robertfentastic.gumroad.com/l/niqtv"
	// 								>Gumroad</a
	// 							>
	// 							or
	// 							<a
	// 								href="https://leanstack.lemonsqueezy.com/buy/03a1ea26-6aa8-4465-a8f0-0b7ad91388d9"
	// 								>Lemon Squeezy</a
	// 							>
	// 							or simply check out the git project at
	// 							<a
	// 								href="https://github.com/RobertFent/StackZero"
	// 								>GitHub</a
	// 							>:-)
	// 						</strong>
	// 					</p>
	// 				</div>
	// 			</div>
	// 		</section>
	// 	</div>
	// `;
};
