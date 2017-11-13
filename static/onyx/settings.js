/**
 * Onyx Space Enter
 */
define("onyx/settings", [ "jquery", "require", "css!./settings.css", "onyx/ui",
		"onyx/canvas" ], function($, require) {

	var UI = require("onyx/ui");
	var Canvas = require("onyx/canvas");

	function Settings(options) {
		this.options = options;
		this.build(options.pdom);
	}

	Settings.prototype.build = function(pdom) {
		this.dom = $("<div class='onyx-settings'></div>");
		this.dom.appendTo(pdom);
		var self = this;
		return this.dom;
	}

	Settings.prototype.show = function(options) {

	}

	Settings.prototype.getTopbar = function() {
		return this.topbar;
	}

	Settings.prototype.getMultiPage = function() {
		return this.multipage;
	}

	return Settings;
});
