import { useState } from 'react';

const items = [
	{
		title: 'Skills',
		bullets: true,
		entries: [
			<>JavaScript/TypeScript, Python</>,
			<>Node.js/Flask</>,
			<>Docker, AWS, GitLab CI</>,
			<>Clean Code &amp; Software Architecture</>,
			<>Linux, Shell</>
		]
	},
	{
		title: 'Work Experience',
		entries: [
			<>
				<strong>10/2019 - 06/2021</strong>: Fullstack Software Developer @
				DioVision Systems GmbH
			</>,
			<>
				<strong>10/2023 - 05/2024</strong>: Fullstack Software Developer @ T.CON
				GmbH &amp; Co. KG
			</>,
			<>
				<strong>06/2024 - present</strong>: Fullstack Software Developer &amp;
				DevOps Engineer @ ECO2GROW GmbH
			</>
		]
	},
	{
		title: 'Education',
		entries: [
			<>
				<strong>10/2017 - 09/2021</strong>: B.A. in Media Informatics @
				University of Regensburg
			</>,
			<>
				<strong>10/2021 - 09/2023</strong>: M.Sc in Computer Science @ OTH
				Regensburg
			</>
		]
	}
];

function AboutItem({ title, entries, bullets }) {
	const [open, setOpen] = useState(false);
	return (
		<div className="about-item" onClick={() => setOpen((o) => !o)}>
			<a role="button" aria-expanded={open}>
				{title}
			</a>
			<ul
				className={open ? 'li-visible' : ''}
				style={bullets ? { listStyle: 'inside' } : undefined}
			>
				{entries.map((entry, i) => (
					<li key={i}>{entry}</li>
				))}
			</ul>
		</div>
	);
}

export default function About() {
	return (
		<div id="about" className="colored-component flex-row">
			<div className="left-content">
				<img src="/me.jpeg" alt="Photo of me" />
			</div>
			<div className="right-content">
				<h1>About Me</h1>
				<p>
					Howdy 🤠, my name is Robert, I am 27 years old and I live in Germany.
				</p>
				<p>
					I am a passionate Software Developer who loves to build new Software
					with a focus on maintainablity, automated deployments and low cost.
				</p>
				<p>
					I am also into working out 🏋️, drinking coffee ☕, cocking 👨‍🍳 or
					traveling 🧳 with my fiancee. Actually I am doing most activities with
					her if I think about it🤔 but I love her so this is okay 🫶. Anyways
					there is one very important hobby I share with my brother Lugo -&gt;
					Warhammer🛠️🎨
				</p>
				<div className="flex-row about-items">
					{items.map((item) => (
						<AboutItem key={item.title} {...item} />
					))}
				</div>
			</div>
		</div>
	);
}
