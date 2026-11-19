// Entferne alles, was eingeklappt werden kann (Shorts, Games, etc.)
function replaceDismissibleIds() {
	document.querySelectorAll('#dismissible').forEach((element) => {
		const title = element.querySelector('#title');
		if (title && (title.textContent.includes('Shorts') || title.textContent.includes('Playables'))) {
			const shelf = element.closest('ytd-rich-shelf-renderer');
			if (shelf) {
				shelf.remove();
			}
		}
		else if (title && ( title.textContent.includes('Von YouTube empfohlen') )) {
			const shelf = element.closest('ytd-rich-section-renderer');
			if (shelf) {
				shelf.remove();
			}
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
