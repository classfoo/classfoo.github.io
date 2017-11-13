/**
 * Onyx App Enter
 */
define("onyx/app", [ "jquery", "require", "css!./app.css", "./ui",
		"onyx/app/topbar" ], function($, require) {

	var UI = require("onyx/ui");

	var Topbar = require("onyx/app/topbar");

	function App() {
	}

	App.prototype.build = function(pdom) {
		this.dom = $("<div class='onyx-app'></div>");
		this.dom.appendTo(pdom);
		this.layout = UI.createLayout({
			clazz : "onyx-app",
			header : {
				height : 48
			},
			body : {},
			pdom : this.dom
		});
		this.topbar = new Topbar(this);
		this.topbar.build(this.layout.getHeader());
		this.multipage = UI.createMultiPage({
			pdom : this.layout.getBody(),
			bundles : {
				"space" : "onyx/space",
				"personal" : "onyx/personal",
				"settings" : "onyx/settings"
			}
		});
		var self = this;
	}

	App.prototype.getTopbar = function() {
		return this.topbar;
	}

	App.prototype.getMultiPage = function() {
		return this.multipage;
	}

	return App;
});

/**
 * Onyx Topbar
 */
define("onyx/app/topbar", [ "jquery", "require", "../ui", "../space",
		"../personal", "../settings" ], function($, require) {

	var UI = require("../ui");

	function Topbar(app) {
		this.app = app;
	}

	Topbar.prototype.build = function(pdom) {
		this.dom = $("<div class='onyx-app-topbar'></div>");
		this.dom.appendTo(pdom);
		this.layout = UI.createLayout({
			clazz : "onyx-app-topbar-layout",
			left : {
				width : 56
			},
			middle : {

			},
			right : {
				width : 152
			},
			pdom : this.dom
		});
		this.logo = UI.createImage({
			src : "/static/onyx/css/images/logo.png",
			pdom : this.layout.getLeft(),
			style : {
				width : 64,
				height : 64,
				margin : "8px"
			}
		});
		this.searchbox = UI.createSearchBox({
			placeholder : "search all...",
			style : {
				width : "100%",
				height : "60%",
				top : 2,
				"margin-top" : "8px"
			},
			pdom : this.layout.getMiddle()
		});
		this.spaceIcon = UI.createIcon({
			pdom : this.layout.getRight(),
			style : {
				"margin-top" : "8px"
			},
			onclick : this.onClickSpace.bind(this)
		});
		this.personalIcon = UI.createIcon({
			pdom : this.layout.getRight(),
			style : {
				"margin-top" : "8px"
			},
			onclick : this.onClickPersonal.bind(this)

		});
		this.settingsIcon = UI.createIcon({
			pdom : this.layout.getRight(),
			style : {
				"margin-top" : "8px"
			},
			onclick : this.onClickSettings.bind(this)
		});
	}

	Topbar.prototype.getNavbar = function() {
		return this.navbar;
	}

	Topbar.prototype.onClickSpace = function() {
		this.app.multipage.showPage({
			id : "space",
			bundle : "onyx/space"
		});
	}

	Topbar.prototype.onClickPersonal = function() {
		this.app.multipage.showPage({
			id : "personal",
			bundle : "onyx/personal"
		});
	}

	Topbar.prototype.onClickSettings = function() {
		this.app.multipage.showPage({
			id : "settings",
			bundle : "onyx/settings"
		});
	}
	return Topbar;
});