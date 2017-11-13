/**
 * Onyx UI Framework
 */
define("onyx/onyx", [ "jquery", "require", "css!./ui.css", "onyx/utils",
		"onyx/api", "page/page", "onyx/ui" ], function($, require) {

	/**
	 * extends jquery dfd method
	 */
	$.dfd = function(obj) {
		var dfd = $.Deferred();
		dfd.resolve(obj);
		return dfd.promise();
	}

	window.Utils = require("onyx/utils");

	window.Api = require("onyx/api");

	window.UI = require("onyx/ui");

	window.requestAnimFrame = (function() {
		return window.requestAnimationFrame
				|| window.webkitRequestAnimationFrame
				|| window.mozRequestAnimationFrame
				|| window.oRequestAnimationFrame
				|| window.msRequestAnimationFrame
				|| function(callback, element) {
					return window.setTimeout(callback, 1000 / 60);
				};
	})();

	window.cancelAnimFrame = (function() {
		return window.cancelAnimationFrame
				|| window.webkitCancelRequestAnimationFrame
				|| window.mozCancelRequestAnimationFrame
				|| window.oCancelRequestAnimationFrame
				|| window.msCancelRequestAnimationFrame || clearTimeout;
	})();

	var Page = require("page/page");

	function Onyx() {

	}

	/**
	 * Initialize UI Framework
	 */
	Onyx.init = function(options) {
		var onyx = new Onyx();
		onyx.initialize(options);
	}

	/**
	 * initialize UI web urls
	 */
	Onyx.prototype.initialize = function(options) {
		// listen redirects
		$.each(options.redirect, function(fromPath, toPath) {
			Page(fromPath, toPath);
		});
		var self = this;
		require([ options.compname ], function(Explorer) {
			var explorer = new Explorer(options);
			// listen all the url changes
			options.component = explorer;
			options.explorer = explorer;
			Page("*", self.onExecute.bind(self, options));
			UI.redirect(window.location.pathname);
		});
		window.onpopstate = function() {
			var json = window.history.state;
			UI.redirect(json.path);
		}
	}

	/**
	 * execute on web request
	 */
	Onyx.prototype.onExecute = function(options, ctx) {
		var path = ctx.path;
		options.uri = path;
		var root = Utils.ensurePathEndWithSplash(options.root);
		if (!path.startsWith(root)) {
			return;
		}
		var path = path.substring(root.length - 1);
		var url = Utils.parseUrl(path);
		var pathes = url.path.split('/');
		options.pagename = pathes[1];
		options.framename = pathes[2];
		options.resid = pathes[3];
		options.params = url.params;
		var onResource = this.onResource.bind(this, options)
		Api.getResource(options.resid).done(onResource.bind(this));
	}

	Onyx.prototype.onResource = function(options, resource) {
		// options.resource = resource;
		var explorer = options.explorer;
		var pageOptions = $.extend({
			resource : resource
		}, options);
		if (resource && resource.id) {
			pageOptions.id = options.pagename + '/' + resource.id;
		} else {
			pageOptions.id = options.pagename;
		}
		pageOptions.compname = 'onyx/' + options.pagename;
		explorer.showPage(pageOptions).done(
				function(page) {
					if (!page || !page.component) {
						return;
					}
					var frameOptions = $.extend({}, pageOptions);
					if (resource && resource.id) {
						frameOptions.id = pageOptions.framename + '/'
								+ resource.id
					} else {
						frameOptions.id = pageOptions.framename;
					}
					frameOptions.page = page.component;
					frameOptions.compname = 'onyx/' + pageOptions.pagename
							+ '/' + pageOptions.framename;
					page.component.showPage(frameOptions).done(
							function(resourceOptions) {
								explorer.refreshPage(resourceOptions);
							});
				});
	}

	return Onyx;
});