// ==UserScript==
// @name            openUrlbarOnTabClick
// @author          krishna-godoi
// @include         main
// @onlyonce
// ==/UserScript==

console.log("openUrlBarOnTabClick");

(() => {
	gBrowser.tabContainer.addEventListener("dblclick", () => {
		document.querySelector("#urlbar-container .urlbar-input-container").click();
	}, false);
})();
