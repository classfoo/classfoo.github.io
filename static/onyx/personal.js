/**
 * Onyx Personal
 */
define("onyx/personal",
		[ "jquery", "require", "css!./personal.css", "onyx/ui" ], function($,
				require) {

			var UI = require("onyx/ui");

			function Personal(options) {
				this.options = options;
				this.build(options);
			}

			Personal.prototype.build = function(options) {
				this.dom = $("<div class='onyx-personal'></div>");
				this.dom.appendTo(options.pdom);
				this.layout = UI.createLayout({
					clazz : "onyx-personal-layout",
					header : {
						height : 32
					},
					body : {},
					pdom : this.dom
				});
				this.multipage = UI.createMultiPage({
					clazz : "onyx-personal-multipage",
					pdom : this.layout.getBody()
				});
				this.navbar = UI.createNavBar({
					theme : "horizon",
					width : 72,
					pdom : this.layout.getHeader(),
					multipage : this.multipage,
					active : "knowledgebase",
					items : [ {
						id : "timeline",
						caption : "动态",
						icon : "icon-hot",
						uri : "/personal/knowledgebase/" + options.resource.id,
						active : true,
						clazz : "onyx-personal-navbar-item"
					},{
						id : "knowledgebase",
						caption : "知识库",
						icon : "icon-home",
						uri : "/personal/knowledgebase/" + options.resource.id,
						active : true,
						clazz : "onyx-personal-navbar-item"
					}, {
						id : "leaks",
						caption : "爆料",
						icon : "icon-leaks",
						uri : "/personal/leaks/" + options.resource.id,
						clazz : "onyx-personal-navbar-item"
					}, {
						id : "recents",
						caption : "最近",
						icon : "icon-recents",
						uri : "/personal/recents/" + options.resource.id,
						clazz : "onyx-personal-navbar-item"
					}, {
						id : "share",
						caption : "分享",
						icon : "icon-share",
						uri : "/personal/share/" + options.resource.id,
						clazz : "onyx-personal-navbar-item"
					}]
				});
				var self = this;
				return this.dom;
			}

			Personal.prototype.refresh = function(options) {
				this.dom.text(options.resource.id);
				return $.dfd(this);
			}

			Personal.prototype.getTopbar = function() {
				return this.topbar;
			}

			Personal.prototype.getMultiPage = function() {
				return this.multipage;
			}

			return Personal;
		});

/**
 * Onyx Personal Home
 */
define("onyx/personal/home", [ "jquery", "require", "onyx/ui" ], function($,
		require) {

	var UI = require("onyx/ui");

	function Home(options) {
		this.options = options;
		this.build(options.pdom);
	}

	Home.prototype.build = function(pdom) {
		this.dom = $("<div class='onyx-personal-home'></div>");
		this.dom.appendTo(pdom);
		this.layout = UI.createLayout({
			clazz : "onyx-personal-home-layout",
			right : {
				width : 143
			},
			middle : {},
			pdom : this.dom
		});
		var self = this;
		return this.dom;
	}

	Home.prototype.refresh = function(options) {
		var dfd = $.Deferred();
		this.dom.text(options.resource);
		dfd.resolve(this);
		return dfd.promise();
	}

	return Home;
});

/**
 * Onyx Personal Files
 */
define("onyx/personal/files", [ "jquery", "require", "onyx/ui" ], function($,
		require) {

	var UI = require("onyx/ui");

	function Files(options) {
		this.options = options;
		this.build(options.pdom);
	}

	Files.prototype.build = function(pdom) {
		this.dom = $("<div class='onyx-personal-files'></div>");
		this.dom.appendTo(pdom);
		this.layout = UI.createLayout({
			clazz : "onyx-personal-files-layout",
			right : {
				width : 143
			},
			middle : {},
			pdom : this.dom
		});
		this.explorer = UI.createExplorer({
			root : "/classfoo",
			path : "/classfoo/disk/fold1/fold2/fold3",
			datas : this.getDatas.bind(this),
			pdom : this.layout.getMiddle()
		});
		return this.dom;
	}

	Files.prototype.getDatas = function(event) {
		var dfd = $.Deferred();
		dfd.resolve({
			pathes : this.getPathes.bind(this),
			resources : this.getResources.bind(this)
		});
		return dfd.promise();

	}

	Files.prototype.getPathes = function(event) {
		var dfd = $.Deferred();
		dfd.resolve([ {
			id : "a",
			name : "目录1",
			icon : "icon-fold",
			path : "/a"
		} ]);
		return dfd.promise();
	}

	Files.prototype.getResources = function() {
		var dfd = $.Deferred();
		var items = [];
		for (var i = 0; i < 200; i++) {
			items.push({
				id : "a",
				name : "目录1",
				icon : "icon-fold",
				path : "/a"
			});
		}
		dfd.resolve(items);
		return dfd.promise();
	}

	Files.prototype.refresh = function(options) {
		var dfd = $.Deferred();
		this.dom.text(options.resource);
		dfd.resolve(this);
		return dfd.promise();
	}

	return Files;
});

/**
 * Onyx Personal Files
 */
define("onyx/personal/favorite", [ "jquery", "require", "onyx/ui" ], function(
		$, require) {

	var UI = require("onyx/ui");

	function Favorite(options) {
		this.options = options;
		this.build(options.pdom);
	}

	Favorite.prototype.build = function(pdom) {
		this.dom = $("<div class='onyx-personal-favorite'></div>");
		this.dom.appendTo(pdom);
		this.layout = UI.createLayout({
			clazz : "onyx-personal-favorite-layout",
			right : {
				width : 143
			},
			middle : {},
			pdom : this.dom
		});
		var self = this;
		return this.dom;
	}

	Favorite.prototype.refresh = function(options) {
		var dfd = $.Deferred();
		this.dom.text(options.resource);
		dfd.resolve(this);
		return dfd.promise();
	}

	return Favorite;
});

/**
 * Onyx Personal Files
 */
define("onyx/personal/share", [ "jquery", "require", "onyx/ui" ], function($,
		require) {

	var UI = require("onyx/ui");

	function Share(options) {
		this.options = options;
		this.build(options.pdom);
	}

	Share.prototype.build = function(pdom) {
		this.dom = $("<div class='onyx-personal-share'></div>");
		this.dom.appendTo(pdom);
		this.layout = UI.createLayout({
			clazz : "onyx-personal-share-layout",
			right : {
				width : 143
			},
			middle : {},
			pdom : this.dom
		});
		var self = this;
		return this.dom;
	}

	Share.prototype.refresh = function(options) {
		var dfd = $.Deferred();
		this.dom.text(options.resource);
		dfd.resolve(this);
		return dfd.promise();
	}

	return Share;
});

/**
 * Onyx Personal Files
 */
define("onyx/personal/trash", [ "jquery", "require", "onyx/ui" ], function($,
		require) {

	var UI = require("onyx/ui");

	function Trash(options) {
		this.options = options;
		this.build(options.pdom);
	}

	Trash.prototype.build = function(pdom) {
		this.dom = $("<div class='onyx-personal-trash'></div>");
		this.dom.appendTo(pdom);
		this.layout = UI.createLayout({
			clazz : "onyx-personal-trash-layout",
			right : {
				width : 143
			},
			middle : {},
			pdom : this.dom
		});
		var self = this;
		return this.dom;
	}

	Trash.prototype.refresh = function(options) {
		this.dom.text(options.resource);
		return $.dfd(this);
	}

	return Trash;
});