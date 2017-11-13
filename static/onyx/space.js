/**
 * Onyx Space Enter
 */
define("onyx/space", [ "jquery", "require", "css!./space.css", "onyx/utils",
		"onyx/ui" ], function($, require) {

	var Utils = require("onyx/utils");

	var UI = require("onyx/ui");

	function Space(options) {
		this.options = options;
		this.build(this.options);
	}

	Space.prototype.build = function(options) {
		this.dom = $("<div class='onyx-space'></div>");
		this.dom.appendTo(this.options.pdom);
		this.layout = UI.createLayout({
			clazz : "onyx-space-layout",
			header : {
				height : 32
			},
			body : {},
			pdom : this.dom
		});
		this.headerLayout = UI.createLayout({
			clazz : "onyx-space-headerlayout",
			left : {
				width : 256
			},
			middle : {},
			right : {
				width : 256
			},
			pdom : this.layout.getHeader()
		});
		this.buildButtons();
		this.navbar = UI.createNavBar({
			on : {
				"switch" : this.onSwitchNavBar.bind(this)
			},
			theme : "horizon",
			width : 72,
			active : this.options.framename,
			items : [ {
				id : "recommend",
				caption : "推荐",
				icon : "icon-recommend",
				uri : "/space/recommend",
			}, {
				id : "base",
				caption : "知识库",
				icon : "icon-base",
				uri : "/space/base",
			}, {
				id : "leak",
				caption : "爆料",
				icon : "icon-leak",
				uri : "/space/leak",
			} ],
			pdom : this.headerLayout.getMiddle()
		});
		this.multipage = UI.createMultiPage({
			clazz : "onyx-space-multipage",
			pdom : this.layout.getBody()
		});
		return this.dom;
	}

	Space.prototype.buildButtons = function(options) {
		this.refreshButton = UI.createButton({
			id : "refresh",
			hidden : true,
			cmd : this.docmd.bind(this),
			theme : "icon",
			icon : "icon-refresh",
			caption : "刷新",
			pdom : this.headerLayout.getRight()
		});
		this.addButton = UI.createButton({
			id : "add",
			hidden : true,
			cmd : this.docmd.bind(this),
			theme : "icon",
			icon : "icon-add",
			caption : "添加",
			pdom : this.headerLayout.getRight()
		});
		this.leakButton = UI.createButton({
			id : "leak",
			hidden : true,
			cmd : this.docmd.bind(this),
			theme : "icon",
			icon : "icon-leak",
			caption : "我要爆料",
			pdom : this.headerLayout.getRight()
		});
	}

	Space.prototype.onSwitchNavBar = function(event, item) {
		this.refreshButton.setVisible(item.id == "recommend");
		this.addButton.setVisible(item.id == "base");
		this.leakButton.setVisible(item.id == "leak");
	}

	Space.prototype.refresh = function(options) {
		this.navbar.setActive(options.framename, false);
		this.options = options;
		return $.dfd(this);
	}

	Space.prototype.getTopbar = function() {
		return this.topbar;
	}

	Space.prototype.showPage = function(options) {
		return this.multipage.showPage(options);
	}

	Space.prototype.docmd = function(cmd, event) {
		var page = this.multipage.getCurrentPage();
		page.component.docmd(cmd, event);
	}

	return Space;
});

/**
 * Onyx Space Enter
 */
define("onyx/space/recommend", [ "jquery", "require", "onyx/ui" ], function($,
		require) {

	var UI = require("onyx/ui");

	function Recommend(options) {
		this.options = options;
		this.build(options);
	}

	Recommend.prototype.build = function(options) {
		this.dom = $("<div class='onyx-space-recommend'></div>");
		this.dom.appendTo(options.pdom);
		this.showboard = UI.createShowBoard({
			pdom : this.dom,
			onclick : this.play.bind(this),
			datas : this.queryData.bind(this)
		});
		return this.dom;
	}

	Recommend.prototype.refresh = function(options) {
		return $.dfd(this);
	}

	Recommend.prototype.play = function(event) {
		var id = $(event.target).data("id");
		UI.redirect("/base/knowledges/" + id);
	}

	Recommend.prototype.queryData = function() {
		return Api.recommend().list();
	}

	Recommend.prototype.getPathes = function() {
		return $.dfd([ {
			id : "home",
			caption : "虾掰",
			uri : "/"
		}, {
			id : "recommend",
			caption : "推荐",
			uri : "/space/recommend"
		} ]);
	}

	Recommend.prototype.docmd = function(cmd, event) {
		debugger;
	}
	return Recommend;
});

/**
 * Onyx Space Enter
 */
define("onyx/space/base", [ "jquery", "require", "onyx/ui" ], function($,
		require) {

	var UI = require("onyx/ui");

	function Base(options) {
		this.options = options;
		this.build(options.pdom);
	}

	Base.prototype.build = function(pdom) {
		this.dom = $("<div class='onyx-space-base'></div>");
		this.dom.appendTo(pdom);
		this.showboard = UI.createShowBoard({
			type : "base",
			pdom : this.dom,
			datas : this.queryData.bind(this),
			cmd : this.docmd.bind(this)
		});
		return this.dom;
	}

	Base.prototype.refresh = function(options) {
		var dfd = $.Deferred();
		dfd.resolve(this);
		return dfd.promise();
	}

	Base.prototype.queryData = function() {
		return Api.base().list();
	}

	Base.prototype.getPathes = function() {
		return $.dfd([ {
			id : "home",
			caption : "虾掰",
			uri : "/"
		}, {
			id : "base",
			caption : "知识库",
			uri : "/space/base"
		} ]);
	}

	Base.prototype.docmd = function(cmd, event) {
		UI.createDialog({
			modal : true,
			title : "创建知识库",
			content : this.buildCreateBaseDialog.bind(this),
			buttons : [ "ok", "cancel" ],
			on : {
				"ok" : this.createBase.bind(this)
			}
		});
	}

	Base.prototype.buildCreateBaseDialog = function(dialog) {
		return UI.createForm({
			fields : [ {
				name : "name",
				caption : "名称",
				type : "onyx/ui/form/input"
			}, {
				name : "desc",
				caption : "描述",
				type : "onyx/ui/form/input"
			} ],
			pdom : dialog.pdom
		});
	}

	Base.prototype.createBase = function(event, dialog) {
		dialog.getContent().getData().done(function(data) {
			Api.base().create(data).done(function(base) {
				UI.redirect("/base/home/" + base.id);
			});
		})
	}
	return Base;
});

/**
 * Onyx Space Enter
 */
define("onyx/space/leak", [ "jquery", "require", "onyx/ui" ], function($,
		require) {

	var UI = require("onyx/ui");

	function Leak(options) {
		this.options = options;
		this.build(options.pdom);
	}

	Leak.prototype.build = function(pdom) {
		this.dom = $("<div class='onyx-space-leak'></div>");
		this.dom.appendTo(pdom);
		this.page = $("<div class='onyx-space-leak-page'/>");
		this.page.appendTo(this.dom);
		this.submiter = UI.createSubmiter({
			on : {
				submit : this.onSubmit.bind(this)
			},
			pdom : this.page
		});
		this.timeline = UI.createDataList({
			items : this.queryDataList.bind(this),
			pdom : this.page
		});
		return this.dom;
	}

	Leak.prototype.queryDataList = function() {
		return Api.timeline().list();
	}

	Leak.prototype.onSubmit = function(event, formdata) {
		var self = this;
		Api.material().create(formdata).done(function(options) {
			// UI.redirect("/material/home/" + options.id);
			self.addTimeLineItem(options);
		});
	}

	Leak.prototype.addTimeLineItem = function(options) {
		this.timeline.addItem(options);
	}

	Leak.prototype.refresh = function(options) {
		var dfd = $.Deferred();
		dfd.resolve(this);
		return dfd.promise();
	}

	Leak.prototype.play = function() {
		var id = $(event.target).data("id");
		UI.redirect("/base/knowledges/" + id);
	}

	Leak.prototype.queryData = function() {
		var dfd = $.Deferred();
		dfd.resolve([ {
			width : 200,
			height : 300
		} ]);
		return dfd.promise();
	}

	Leak.prototype.show = function() {

	}

	Leak.prototype.getPathes = function() {
		return $.dfd([ {
			id : "home",
			caption : "虾掰",
			uri : "/"
		}, {
			id : "leak",
			caption : "爆料",
			uri : "/space/leak"
		} ]);
	}

	Leak.prototype.docmd = function(cmd, event) {
		switch (cmd) {
		case "leak": {
			alert("爆料");
		}
		}
	}
	return Leak;
});
