// Entferne alles, was eingeklappt werden kann (Shorts, Games, etc.)
function replaceDismissibleIds() {
	document.querySelectorAll('#dismissible').forEach((element) => {
		const title = element.querySelector('#title');
		if (title && title.textContent.includes('Shorts') || title.textContent.includes('Playables')) {
			element.id = 'dismissed';
		}
	});
}

// Initialer Aufruf
replaceDismissibleIds();

// Wenn noch Elemente nachgeladen werden
const observer = new MutationObserver(() => {
	replaceDismissibleIds();
});

observer.observe(document, {
	childList: true,
	subtree: true,
	attributes: true,
	attributeFilter: ['id']
});
