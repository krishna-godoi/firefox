// userchrome.css usercontent.css activate
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Fill SVG Color
user_pref("svg.context-properties.content.enabled", true);

// CSS's `:has()` selector 
user_pref("layout.css.has-selector.enabled", true);

// Integrated calculator at urlbar
user_pref("browser.urlbar.suggest.calculator", true);

// Integrated unit convertor at urlbar
user_pref("browser.urlbar.unitConversion.enabled", true);

/* Trim  URL */
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.trimURLs", true);

/* show compact mode */
user_pref("browser.compactmode.show", true);

user_pref("browser.tabs.cardPreview.showThumbnails", true);

/* uc customizations (taken from minifox) */
user_pref("uc.tweak.round-browser", true);
user_pref("uc.tweak.browser-margins", true);
user_pref("uc.tweak.no-window-controls", true);
user_pref("uc.tweak.translucency", true);
user_pref("uc.tweak.bottom-nav", false);


/* browser ui customizations under "Customize Toolbar" */
user_pref("browser.uiCustomization.state", {
	"placements": {
		"widget-overflow-fixed-list": [],
		"unified-extensions-area": [
			"_d7742d87-e61d-4b78-b8a1-b469842139fa_-browser-action",
			"_446900e4-71c2-419f-a6a7-df9c091e268b_-browser-action",
			"87677a2c52b84ad3a151a4a72f5bd3c4_jetpack-browser-action",
			"_react-devtools-browser-action",
			"enhancerforyoutube_maximerf_addons_mozilla_org-browser-action",
			"jid1-niffy2ca8fy1tg_jetpack-browser-action",
			"_6ac85730-7d0f-4de0-b3fa-21142dd85326_-browser-action",
			"firefoxcolor_mozilla_com-browser-action"
		],
		"nav-bar": [
			"back-button",
			"forward-button",
			"urlbar-container",
			"unified-extensions-button"
		],
		"toolbar-menubar": ["menubar-items"],
		"TabsToolbar": [
			"tabbrowser-tabs",
			"new-tab-button",
			"downloads-button",
			"alltabs-button"
		],
		"PersonalToolbar": []
	}, "seen": [
		"save-to-pocket-button",
		"developer-button",
		"_446900e4-71c2-419f-a6a7-df9c091e268b_-browser-action",
		"87677a2c52b84ad3a151a4a72f5bd3c4_jetpack-browser-action",
		"_react-devtools-browser-action",
		"enhancerforyoutube_maximerf_addons_mozilla_org-browser-action",
		"jid1-niffy2ca8fy1tg_jetpack-browser-action",
		"_6ac85730-7d0f-4de0-b3fa-21142dd85326_-browser-action",
		"firefoxcolor_mozilla_com-browser-action",
		"_d7742d87-e61d-4b78-b8a1-b469842139fa_-browser-action"
	], "dirtyAreaCache": [
		"nav-bar",
		"toolbar-menubar",
		"TabsToolbar",
		"PersonalToolbar",
		"unified-extensions-area"
	], "currentVersion": 20, "newElementCount": 15
});
