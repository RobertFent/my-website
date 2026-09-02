import Card, { useCardGroup } from './Card.jsx';

const WIDTH = 47;

export default function Services() {
	const group = useCardGroup();
	return (
		<div id="services">
			<h1>Services</h1>
			<div className="service-components flex-row">
				<Card
					header="SaaS Web App Setup"
					width={WIDTH}
					icon="setup_white.png"
					linkName="Fiverr"
					link="https://www.fiverr.com/s/yvaNb0G"
					linkDescription="StackZero Setup Gig"
					{...group(0)}
				>
					I offer to setup StackZero on a freshly installed VPS hosted by
					Hetzner so that your SaaS Web App runs with under 5€/month
				</Card>
				<Card
					header="Cloud Cost Optimization"
					width={WIDTH}
					icon="optimization_white.png"
					linkName="Contact me"
					link="mailto:info@robertfent.com"
					linkDescription="info@robertfent.com"
					{...group(1)}
				>
					I offer to analyze your cloud setup on preferably AWS and its monthly
					costs to propose cost saving opportunities. If possible and needed I
					also offer to migrate your existing setup to Hetzner to save you up to
					97% monthly costs.
				</Card>
			</div>
		</div>
	);
}
