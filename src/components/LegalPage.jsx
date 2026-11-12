import { LEGAL } from '../content/index.js';

/**
 * Impressum and Datenschutzerklärung (German only, as legally required).
 * Personal details come from LEGAL in src/content/shared.js.
 */
const missing = (value) => value ?? '[bitte ergänzen]';

function Address() {
	return (
		<p>
			{LEGAL.name}
			<br />
			{missing(LEGAL.street)}
			<br />
			{missing(LEGAL.postalCity)}
			<br />
			{LEGAL.country}
		</p>
	);
}

function Contact() {
	return (
		<p>
			E-Mail: <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>
			{LEGAL.phone && (
				<>
					<br />
					Telefon:{' '}
					<a href={`tel:${LEGAL.phone.replace(/\s/g, '')}`}>{LEGAL.phone}</a>
				</>
			)}
		</p>
	);
}

function Impressum() {
	return (
		<>
			<h1>Impressum</h1>

			<h2>Angaben gemäß § 5 DDG</h2>
			<Address />

			<h2>Kontakt</h2>
			<Contact />

			{LEGAL.vatId && (
				<>
					<h2>Umsatzsteuer-ID</h2>
					<p>
						Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: {LEGAL.vatId}
					</p>
				</>
			)}
			{LEGAL.smallBusiness && (
				<p>
					Gemäß § 19 UStG wird keine Umsatzsteuer berechnet
					(Kleinunternehmerregelung).
				</p>
			)}

			<h2>Verbraucherstreitbeilegung</h2>
			<p>
				Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
				einer Verbraucherschlichtungsstelle teilzunehmen.
			</p>

			<h2>Haftung für Links</h2>
			<p>
				Diese Website enthält Links zu externen Websites Dritter, auf deren
				Inhalte ich keinen Einfluss habe. Für die Inhalte der verlinkten Seiten
				ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Bei
				Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend
				entfernen.
			</p>
		</>
	);
}

function Datenschutz() {
	return (
		<>
			<h1>Datenschutzerklärung</h1>
			<p>
				Diese Datenschutzerklärung informiert Sie darüber, welche
				personenbezogenen Daten beim Besuch dieser Website verarbeitet werden.
				Diese Website setzt keine Cookies.
			</p>

			<h2>1. Verantwortlicher</h2>
			<Address />
			<Contact />

			<h2>2. Hosting und Server-Logfiles</h2>
			<p>
				Diese Website wird bei Vercel Inc. (USA) gehostet. Beim Aufruf der
				Website verarbeitet Vercel automatisch technisch notwendige Daten, die
				Ihr Browser übermittelt, insbesondere IP-Adresse, Datum und Uhrzeit des
				Zugriffs, aufgerufene Seite, Referrer-URL sowie Browser- und
				Betriebssysteminformationen. Diese Daten sind erforderlich, um die
				Website auszuliefern und ihre Sicherheit und Stabilität zu
				gewährleisten.
			</p>
			<p>
				Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; mein berechtigtes
				Interesse liegt in der sicheren und zuverlässigen Bereitstellung der
				Website. Eine Übermittlung in die USA erfolgt auf Grundlage des EU-US
				Data Privacy Framework bzw. von Standardvertragsklauseln (Art. 46 Abs. 2
				lit. c DSGVO). Weitere Informationen finden Sie in der{' '}
				<a
					href="https://vercel.com/legal/privacy-policy"
					target="_blank"
					rel="noreferrer"
				>
					Datenschutzerklärung von Vercel
				</a>
				.
			</p>

			<h2>3. Reichweitenmessung (Vercel Web Analytics und Speed Insights)</h2>
			<p>
				Zur Auswertung der Nutzung und der Ladegeschwindigkeit dieser Website
				verwende ich Vercel Web Analytics und Vercel Speed Insights. Diese
				Dienste arbeiten ohne Cookies und speichern keine Daten auf Ihrem
				Endgerät. Besuche werden nur in anonymisierter, aggregierter Form
				ausgewertet (zum Beispiel aufgerufene Seiten, Herkunftsland, Gerätetyp
				und Ladezeiten); eine Identifizierung einzelner Besucher ist nicht
				möglich.
			</p>
			<p>
				Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; mein berechtigtes
				Interesse liegt darin, die Website zu verbessern und technische Probleme
				zu erkennen.
			</p>

			<h2>4. Schriftarten</h2>
			<p>
				Die auf dieser Website verwendeten Schriftarten werden lokal von diesem
				Server geladen. Es findet keine Verbindung zu Servern Dritter wie Google
				Fonts statt.
			</p>

			<h2>5. Kontakt per E-Mail</h2>
			<p>
				Das Kontaktformular auf dieser Website überträgt keine Daten an einen
				Server. Es öffnet lediglich Ihr eigenes E-Mail-Programm mit einer
				vorausgefüllten Nachricht. Wenn Sie mir eine E-Mail senden, verarbeite
				ich Ihre Angaben (zum Beispiel Name, E-Mail-Adresse und Inhalt der
				Nachricht), um Ihre Anfrage zu beantworten.
			</p>
			<p>
				Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage auf
				einen Vertrag abzielt, und im Übrigen Art. 6 Abs. 1 lit. f DSGVO. Ihre
				Daten werden gelöscht, sobald sie für die Bearbeitung nicht mehr
				erforderlich sind und keine gesetzlichen Aufbewahrungspflichten
				entgegenstehen.
			</p>

			<h2>6. Links zu externen Websites</h2>
			<p>
				Diese Website verlinkt auf externe Profile, etwa bei GitHub, LinkedIn
				und Medium. Daten werden an diese Anbieter erst übertragen, wenn Sie
				einen solchen Link anklicken. Dann gelten die Datenschutzbestimmungen
				des jeweiligen Anbieters.
			</p>

			<h2>7. Ihre Rechte</h2>
			<p>
				Sie haben nach der DSGVO das Recht auf Auskunft (Art. 15), Berichtigung
				(Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18),
				Datenübertragbarkeit (Art. 20) sowie das Recht, einer Verarbeitung auf
				Grundlage von Art. 6 Abs. 1 lit. f DSGVO zu widersprechen (Art. 21).
				Wenden Sie sich dazu einfach per E-Mail an mich.
			</p>
			<p>
				Außerdem haben Sie das Recht, sich bei einer
				Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO).
			</p>

			<p className="legal-updated">Stand: November 2026</p>
		</>
	);
}

export default function LegalPage({ page }) {
	return (
		<article className="legal container" lang="de">
			{page === 'impressum' ? <Impressum /> : <Datenschutz />}
		</article>
	);
}
