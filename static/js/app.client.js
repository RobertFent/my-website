htmx.config.includeIndicatorStyles = false;

document.addEventListener('htmx:configRequest', (event) => {
	const { appversion } = document.body.dataset;
	event.detail.headers['x-app-version'] = appversion;
});

// remove closeables -> atm its only the alert
document.addEventListener('click', (event) => {
	const close = event.target.closest('[data-js-close]');
	if (close) {
		const closeable = close.closest('[data-js-closeable]');
		closeable.remove();
	}
});

// auto remove the proper elements -> atm its only the alert
document.addEventListener('htmx:afterProcessNode', (event) => {
	const element = event.detail.elt;
	const timing = element.getAttribute('data-js-remove-me');
	if (timing) {
		setTimeout(() => {
			if (element.parentElement)
				element.parentElement.removeChild(element);
		}, htmx.parseInterval(timing));
	}
});

// add click animations to about me lists
let aboutItems = document.getElementsByClassName('about-item');
for (const aboutItem of aboutItems) {
	aboutItem.addEventListener('click', () => {
		for (const item of aboutItems) {
			if (item === aboutItem) {
				continue;
			}
			item.getElementsByTagName('ul')[0].classList.remove('li-visible');
		}
		aboutItem.getElementsByTagName('ul')[0].classList.toggle('li-visible');
	});
}

// add click and exit hover animations to project cards
let projectComponents = document.getElementsByClassName('project-component');
for (const projectComponent of projectComponents) {
	projectComponent.addEventListener('click', () => {
		projectComponent
			.getElementsByClassName('content')[0]
			.classList.toggle('content-visible');
		projectComponent.classList.toggle('clicked');
	});
	projectComponent.addEventListener('mouseleave', () => {
		projectComponent
			.getElementsByClassName('content')[0]
			.classList.remove('content-visible');
		projectComponent.classList.remove('clicked');
	});
}
