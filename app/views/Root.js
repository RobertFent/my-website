import { html } from '../../core/modules/html.js';
import { Contact } from '../components/Contact.js';
import { ProductionNote } from '../components/ProductionNote.js';
import { ProjectComponent } from '../components/ProjectComponent.js';

export const Root = ({ entries }) => {
	return html`
		<style>
			me {
				margin: var(--size-32);
			}
			me .flex-row {
				display: flex;
				flex-direction: row;
				gap: var(--size-12);
			}
			me #home {
				display: flex;
				flex-direction: column;
				margin-top: var(--size-32);
				height: 70vh;
			}
			me h1 {
				font-size: var(--size-14);
			}
			me #about {
				margin-bottom: var(--size-8);
			}
			me #about p {
				font-size: var(--size-5);
			}
			me #about img {
				border-radius: var(--radius-xl);
				min-width: 250px;
			}
			me #about .about-items {
				position: relative;
				gap: var(--size-0);
				justify-content: space-evenly;
			}
			me #about .about-item {
				margin: var(--size-6);
				flex: 1 1 calc(30%);
			}
			me #about .about-item a {
				cursor: pointer;
				font-size: var(--size-6);
			}
			me #about .about-item ul {
				position: absolute; /* Hinder ul from growing its parent */
				max-width: 30%;
				overflow: hidden;
				max-height: 0vh;
			}
			me #about .about-item li {
				margin-top: var(--size-6);
			}
			me #about .about-item .li-visible {
				max-height: 40vh;
			}
			me #projects {
				margin-top: var(--size-32);
				margin-bottom: var(--size-8);
			}
			me #projects .project-components {
				margin-top: var(--size-12);
				flex-wrap: wrap;
				justify-content: flex-start;
			}
			@media (max-width: 1200px) {
				me {
					margin: var(--size-8);
				}
				me .flex-row {
					gap: var(--size-12);
				}
				me #about {
					margin-top: var(--size-32);
				}
				me #about p {
					font-size: var(--size-4);
				}
			}
			@media (max-width: 900px) {
				me {
					margin: var(--size-4);
				}
				me h1 {
					font-size: var(--size-12);
				}
				me #home {
					justify-content: flex-start;
					margin-top: var(--size-32);
					height: 70vh;
				}
				me #about img {
					max-width: 350px;
				}
				me #about {
					margin-top: 0;
					flex-direction: column;
				}
				me #about .about-items {
					flex-direction: column;
				}
				me #about .about-item ul {
					position: relative;
					max-width: 100%;
					overflow: hidden;
				}
				me #projects {
					margin-top: var(--size-16);
					flex-direction: column;
				}
				me #projects .project-components {
					flex-direction: column;
				}
				me #contact {
					margin-top: var(--size-16);
					flex-direction: column;
				}
				@media (max-width: 600px) {
					me {
						margin: var(--size-2);
					}
					me #about img {
						max-width: 100%;
					}
					me #about .about-item {
						margin-left: 0;
					}
				}
			}
		</style>

		<div id="home">
			<h1>Robert Fent</h1>
			<h2>Fullstack Software Developer & DevOps Engineer</h2>
		</div>

		<div id="about" class="colored-component flex-row">
			<div class="left-content">
				<img src="/static/me.jpeg" alt="Photo of me" />
			</div>
			<div class="right-content">
				<h1>About Me</h1>
				<p>
					Howdy 🤠, my name is Robert, I am 27 years old and I live in
					Germany.
				</p>
				<p>
					I am a passionate Software Developer who loves to build new
					Software with a focus on maintainablity, automated
					deployments and low cost.
				</p>
				<p>
					I am also into working out 🏋️, drinking coffee ☕, cocking
					👨‍🍳 or traveling 🧳 with my fiancee. Actually I am doing most
					activities with her if I think about it🤔 but I love her so
					this is okay 🫶. Anyways there is one very important hobby I
					share with my brother Lugo -> Warhammer🛠️🎨
				</p>
				<div class="flex-row about-items">
					<div class="about-item">
						<a>Skills</a>
						<ul style="list-style: inside;">
							<li>JavaScript/TypeScript, Python</li>
							<li>Node.js/Flask</li>
							<li>Docker, AWS, GitLab CI</li>
							<li>Clean Code & Software Architecture</li>
							<li>Linux, Shell</li>
						</ul>
					</div>
					<div class="about-item">
						<a>Work Experience</a>
						<ul>
							<li>
								<strong>10/2019 - 06/2021</strong>: Fullstack
								Software Developer @ DioVision Systems GmbH
							</li>
							<li>
								<strong>10/2023 - 05/2024</strong>: Fullstack
								Software Developer @ T.CON GmbH & Co. KG
							</li>
							<li>
								<strong>06/2024 - present</strong>: Fullstack
								Software Developer & DevOps Engineer @ ECO2GROW
								GmbH
							</li>
						</ul>
					</div>
					<div class="about-item">
						<a>Education</a>
						<ul>
							<li>
								<strong>10/2017 - 09/2021</strong>: B.A. in
								Media Informatics @ University of Regensburg
							</li>
							<li>
								<strong>10/2021 - 09/2023</strong>: M.Sc in
								Computer Science @ OTH Regensburg
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div id="projects">
			<h1>Projects</h1>
			<div class="project-components flex-row">
				${ProjectComponent(
					'StackZero',
					'I built this site using my own lightweight framework called <strong>StackZero</strong>, which is based on a simple and efficient stack: <a href="https://nodejs.org">Node.js</a> with <a href="https://fastify.dev/">Fastify</a>, <a href="https://htmx.org/">htmx</a> and <a href="https://sqlite.org/">SQLite</a> — all wrapped in <a href="https://www.docker.com/">Docker</a> and deployed via <a href="https://github.com/features/actions">GitHub Actions</a>. The entire setup is designed to be low-cost (under 5€ per month, including DNS via <a href="https://www.ionos.de/">Ionos</a> and hosting on a <a href="https://www.hetzner.com/">Hetzner</a> server), transparent, and fully under my control.',
					'html_white.png',
					'https://github.com/RobertFent/StackZero',
					'StackZero'
				)}
				${ProjectComponent(
					'Home Server',
					'I setup an home server using an <strong>HP ProDesk 600 G4</strong> running <a href="https://ubuntu.com/">Ubuntu Server</a>, fully automated with <a href="https://www.ansible.com/">Ansible</a> and containerized via <a href="https://www.docker.com/">Docker Compose</a>. It hosts a media automation suite based on the <strong>arr stack</strong> and <a href="https://www.plex.tv/">Plex</a> — all using images from <a href="https://www.linuxserver.io/">LinuxServer.io</a>. The setup is zero-config, reproducible, and entirely under my control — ideal for managing media and services on my own terms.',
					'server_white.png'
				)}
				${ProjectComponent(
					'Hetzner Migration',
					'I migrated our infrastructure from <strong>AWS</strong> to <strong>Hetzner</strong>, reducing monthly costs from ~4.000€ to ~100€ — saving around 3.900€ per month. The setup previously relied mostly on EC2 and ECS, which I fully replaced by consolidating all services into a single <a href="https://docs.docker.com/compose/">Docker Compose</a> stack. I added <a href="https://hub.docker.com/r/nginxproxy/nginx-proxy">NGINX</a> as a reverse proxy and automated HTTPS via <a href="https://hub.docker.com/r/nginxproxy/acme-companion">acme</a>. Everything is now containerized, reproducible, and fully under my control — deployed on a performant Hetzner server.',
					'migration_white.png'
				)}
				${ProjectComponent(
					'Stocks Analyzer',
					'I built a stock automation tool in <a href="https://www.python.org/">Python</a> based on the <strong>PowerX Strategy</strong> by Markus Heitkoetter. Designed as a command line application, it generated buy and sell signals to support my trading decisions — all fully local and under my control.',
					'python_white.png',
					'https://github.com/RobertFent/PowerXStocksAnalyzer',
					'PowerXStocksAnalyzer'
				)}
				${ProjectComponent(
					'Weather Forecast',
					'I built a small forecasting tool in <a href="https://www.python.org/">Python</a> to predict future weather based on historical data. It allows data updates via the <a href="https://www.worldweatheronline.com/developer/">WorldWeatherOnline API</a> and supports feature selection and training via a simple CLI — ideal for experimenting with time series prediction in a fully local setup.',
					'weather_forecast_white.png',
					'https://github.com/RobertFent/Weather-Forecast',
					'Weather-Forecast'
				)}
			</div>
		</div>
		<div id="contact">${Contact({ entries })}</div>
		${ProductionNote()}
	`;
};
