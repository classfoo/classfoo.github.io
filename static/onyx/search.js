/**
 * Onyx Search Page
 */
define("onyx/search", [ "jquery", "require", "css!./search.css", "onyx/utils",
		"onyx/ui" ], function($, require) {

	var Utils = require("onyx/utils");

	var UI = require("onyx/ui");

	function Search(options) {
		this.options = options;
		this.build(this.options);
	}

	Search.prototype.build = function(options) {
		this.dom = $("<div class='onyx-search'></div>");
		this.dom.appendTo(this.options.pdom);
		this.layout = UI.createLayout({
			clazz : "onyx-search-layout",
			header : {
				height : 32
			},
			body : {},
			pdom : this.dom
		});
		this.headerLayout = UI.createLayout({
			clazz : "onyx-search-headerlayout",
			left : {
				width : 256
			},
			middle : {},
			right : {
				width : 256
			},
			pdom : this.layout.getHeader()
		});
		this.multipage = UI.createMultiPage({
			clazz : "onyx-search-multipage",
			pdom : this.layout.getBody()
		});
		return this.dom;
	}

	Search.prototype.refresh = function(options) {
		this.options = options;
		return $.dfd(this);
	}

	Search.prototype.getTopbar = function() {
		return this.topbar;
	}

	Search.prototype.showPage = function(options) {
		return this.multipage.showPage(options);
	}

	Search.prototype.docmd = function(cmd, event) {
		var page = this.multipage.getCurrentPage();
		page.component.docmd(cmd, event);
	}

	return Search;
});

/**
 * Onyx Search All
 */
define("onyx/search/all", [ "jquery", "require", "onyx/ui" ], function($,
		require) {

	var UI = require("onyx/ui");

	function All(options) {
		this.options = options;
		this.build(options);
	}

	All.prototype.build = function(options) {
		this.dom = $("<div class='onyx-search-all'></div>");
		this.dom.appendTo(options.pdom);
		var params = options.params;
		this.text = (params && params.text) || "";
		this.showboard = UI.createShowBoard({
			pdom : this.dom,
			onclick : this.play.bind(this),
			datas : this.queryData.bind(this)
		});
		return this.dom;
	}

	All.prototype.refresh = function(options) {
		var params = options.params;
		this.text = (params && params.text) || "";
		this.showboard.refresh()
		return $.dfd(this);
	}

	All.prototype.play = function(event) {
		var id = $(event.target).data("id");
		UI.redirect("/base/knowledges/" + id);
	}

	All.prototype.queryData = function() {
		return Api.search().all(this.text);
	}

	All.prototype.getPathes = function() {
		return $.dfd([ {
			id : "home",
			caption : "虾掰",
			uri : "/"
		}, {
			id : "search",
			caption : "搜索",
			uri : "/search"
		}, {
			id : "all",
			caption : "所有",
			uri : "/search/all"
		} ]);
	}

	All.prototype.docmd = function(cmd, event) {
	}
	return All;
});
