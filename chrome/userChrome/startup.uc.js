// ==UserScript==
// @name            startup
// @author          krishna-godoi
// @include         main
// @onlyonce
// ==/UserScript==

(() => {
	let backBtn = document.querySelector("#back-button");
	let tabsTbItems = document.querySelector("#TabsToolbar > .toolbar-items");

	document.querySelector("#TabsToolbar").insertBefore(backBtn, tabsTbItems);
})();
