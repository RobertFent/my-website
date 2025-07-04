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
