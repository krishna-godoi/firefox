// ==UserScript==
// @name            urlbarFocus
// @author          krishna-godoi
// @include         main
// @onlyonce
// ==/UserScript==

console.log("urlbarFocus");

(() => {
	const urlbar = document.querySelector("#urlbar-input");
	urlbar.addEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			urlbar.blur();
		}
	});
})();
