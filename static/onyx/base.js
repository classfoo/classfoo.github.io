/**
 * Onyx Knowledge Base
 */
define("onyx/base", [ "jquery", "require", "css!./base.css", "onyx/ui" ],
		function($, require) {

			var UI = require("onyx/ui");

			function Base(options) {
				this.options = options;
				this.resource = this.options.resource;
				this.kid = this.options.resource.id;
				this.build(options);
			}

			Base.prototype.build = function(options) {
				this.dom = $("<div class='onyx-base'></div>");
				this.dom.appendTo(options.pdom);
				this.layout = UI.createLayout({
					clazz : "onyx-base-layout",
					header : {
						height : 32
					},
					body : {},
					pdom : this.dom
				});
				this.headerLayout = UI.createLayout({
					clazz : "onyx-base-headerlayout",
					left : {
						width : 256
					},
					middle : {},
					right : {
						width : 256
					},
					pdom : this.layout.getHeader()
				});
				this.navbar = UI.createNavBar({
					theme : "horizon",
					width : 72,
					pdom : this.headerLayout.getMiddle(),
					multipage : this.multipage,
					active : this.options.framename,
					items : [ {
						id : "home",
						caption : "知识库",
						icon : "icon-home",
						uri : "/base/home/" + this.kid
					}, {
						id : "analysis",
						caption : "图谱",
						icon : "icon-graph",
						uri : "/base/analysis/" + this.kid
					}, {
						id : "knowledges",
						caption : "实体",
						icon : "icon-entity",
						uri : "/base/knowledges/" + this.kid
					}, {
						id : "labels",
						caption : "标签",
						icon : "icon-label",
						uri : "/base/labels/" + this.kid
					}, {
						id : "materials",
						caption : "资料",
						icon : "icon-material",
						uri : "/base/materials/" + this.kid
					} ]
				});
				this.addButton = UI.createButton({
					theme : "icon",
					icon : "icon-add",
					caption : "添加",
					pdom : this.headerLayout.getRight()
				});
				this.multipage = UI.createMultiPage({
					clazz : "onyx-base-multipage",
					pdom : this.layout.getBody()
				});
				return this.dom;
			}

			Base.prototype.refresh = function(options) {
				this.navbar.setActive(options.framename, false);
				return $.dfd(this);
			}

			Base.prototype.getTopbar = function() {
				return this.topbar;
			}

			Base.prototype.showPage = function(options) {
				return this.multipage.showPage(options);
			}

			Base.prototype.clickButton = function() {
				UI.redirect("/edit/label/" + this.kid);
			}

			return Base;
		});

/**
 * Onyx Personal Home
 */
define(
		"onyx/base/home",
		[ "jquery", "require", "onyx/ui" ],
		function($, require) {

			var UI = require("onyx/ui");

			function Home(options) {
				this.options = options;
				this.resource = this.options.resource;
				this.kid = this.resource.id;
				this.build(options);
			}

			Home.prototype.build = function(options) {
				this.dom = $("<div class='onyx-base-home'></div>");
				this.dom.appendTo(options.pdom);
				this.buildHeader();
				this.buildBody();
				this.buildFooter();
				return this.dom;
			}

			Home.prototype.buildHeader = function() {
				this.header = $("<div class='onyx-base-home-header'></div>");
				this.header.appendTo(this.dom);
				this.icon = $("<span class='onyx-base-home-header-icon iconfont icon-base'></span>");
				this.icon.appendTo(this.header);
				this.title = $("<span class='onyx-base-home-header-title'></span>");
				this.title.text(this.resource.name);
				this.title.appendTo(this.header);
				this.desc = $("<span class='onyx-base-home-header-desc'></span>");
				this.desc.text(this.resource.desc);
				this.desc.appendTo(this.header);
				this.nav = $("<div class='onyx-base-home-header-nav'></div>");
				this.nav.appendTo(this.header);
				this.navbar = UI.createNavBar({
					theme : "tabset",
					active : "active",
					items : [ {
						id : "active",
						icon : "icon-active",
						caption : "动态"
					}, {
						id : "recommend",
						icon : "icon-recommend",
						caption : "推荐"
					}, {
						id : "members",
						icon : "icon-member",
						caption : "成员"
					}, {
						id : "favarite",
						icon : "icon-like",
						caption : "关注"
					}, {
						id : "tasks",
						icon : "icon-task",
						caption : "任务"
					} ],
					pdom : this.nav
				});
			}

			Home.prototype.buildBody = function() {
				this.body = $("<div class='onyx-base-home-body'/>");
				this.body.appendTo(this.dom);
				var container = $("<div class='onyx-base-home-body-container'/>");
				container.appendTo(this.body);
				this.buildPage(container);
				this.buildPanels(container);
			}

			Home.prototype.buildPage = function(container) {
				var page = $("<div class='onyx-base-home-body-page'/>");
				page.appendTo(container);
				this.buildSubmiter(page);
				this.buildTimeLine(page);
			}

			Home.prototype.buildSubmiter = function(page) {
				this.submiter = UI.createSubmiter({
					on : {
						submit : this.onSubmit.bind(this)
					},
					pdom : page
				});
			}

			Home.prototype.buildTimeLine = function(page) {
				this.timeline = UI.createDataList({
					items : this.queryTimeLine.bind(this),
					pdom : page
				});
			}

			Home.prototype.queryTimeLine = function() {
				return Api.timeline(this.kid).list();
			}

			Home.prototype.buildPanels = function(container) {
				this.buildConstructPanel(container);
				this.buildContributorsPanel(container);
				this.buildManagersPanel(container);
				this.buildSimilarsPanel(container);
			}

			Home.prototype.buildConstructPanel = function(container) {
				var graph = $("<div class='onyx-base-home-body-panel shadow'/>");
				graph.appendTo(container);
				var header = $("<div class='onyx-base-home-body-panel-header'/>");
				header.text("知识库");
				header.appendTo(graph);
				var body = $("<div class='onyx-base-home-body-panel-body'/>");
				body.appendTo(graph);
				var self = this;
				this.buildContributePanelItem(body, "addgraph", "探索图谱",
						"icon-graph").on("click", function() {
					UI.redirect("/graph/base/" + self.kid);
				});
				this.buildContributePanelItem(body, "adddoc", "深度解读",
						"icon-doc").on("click", function() {
					UI.redirect("/doc/new/" + self.kid);
				});
				this.buildContributePanelItem(body, "addentity", "添加实体",
						"icon-entity").on(
						"click",
						function() {
							var diloag = UI.createDialog({
								modal : true,
								title : "添加实体",
								content : function(dialog) {
									return UI.createForm({
										fields : [ {
											name : "name",
											type : "onyx/ui/form/input"
										} ],
										pdom : dialog.pdom
									});
								},
								buttons : [ "ok", "cancel" ],
								on : {
									"ok" : function(event, dialog) {
										dialog.getContent().getData().done(
												self.createEntity.bind(self));
									}
								}
							});
						});
				this.buildContributePanelItem(body, "addlabel", "添加标签",
						"icon-label").on("click", function() {
					UI.createDialog({
						title : "添加标签",
						buttons : [ "ok", "cancel" ]
					});
				});
				this.buildContributePanelItem(body, "addmaterial", "贡献资料",
						"icon-material").on("click", function() {
					UI.createDialog({
						title : "贡献资料",
						buttons : [ "ok", "cancel" ]
					});
				});
				this.buildContributePanelItem(body, "addvote", "发起投票",
						"icon-vote").on("click", function() {
					UI.createDialog({
						title : "发起投票",
						buttons : [ "ok", "cancel" ]
					});
				});
			}

			Home.prototype.createEntity = function(data) {
				Api.entity(this.kid).create(data).done(function(entity) {
					UI.redirect("/view/entity/" + entity.id);
				});
			}

			Home.prototype.buildContributePanelItem = function(pdom, name,
					caption, iconfont) {
				var self = this;
				var item = $("<div class='onyx-base-home-body-panel-body-item'/>");
				item.appendTo(pdom);
				var icon = $("<div class='onyx-base-home-body-panel-body-item-icon iconfont'/>");
				icon.addClass(iconfont);
				icon.appendTo(item);
				var text = $("<div class='onyx-base-home-body-panel-body-item-text'/>");
				text.text(caption);
				text.appendTo(item);
				return item;
			}

			Home.prototype.buildContributorsPanel = function(container) {
				var panel = $("<div class='onyx-base-home-body-panel shadow'/>");
				panel.appendTo(container);
				var header = $("<div class='onyx-base-home-body-panel-header'/>");
				header.text("股东");
				header.appendTo(panel);
				var body = $("<div class='onyx-base-home-body-panel-body'/>");
				body.appendTo(panel);
				UI.createList({
					items : [ {}, {}, {}, {} ],
					pdom : body
				});
			}

			Home.prototype.buildManagersPanel = function(container) {
				var panel = $("<div class='onyx-base-home-body-panel shadow'/>");
				panel.appendTo(container);
				var header = $("<div class='onyx-base-home-body-panel-header'/>");
				header.text("管理团队");
				header.appendTo(panel);
				var body = $("<div class='onyx-base-home-body-panel-body'/>");
				body.appendTo(panel);
				UI.createList({
					items : [ {}, {}, {}, {} ],
					pdom : body
				});
			}

			Home.prototype.buildSimilarsPanel = function(container) {
				var panel = $("<div class='onyx-base-home-body-panel shadow'/>");
				panel.appendTo(container);
				var header = $("<div class='onyx-base-home-body-panel-header'/>");
				header.text("相似知识库");
				header.appendTo(panel);
				var body = $("<div class='onyx-base-home-body-panel-body'/>");
				body.appendTo(panel);
				UI.createList({
					items : [ {}, {}, {}, {} ],
					pdom : body
				});
			}

			Home.prototype.buildFooter = function() {
				this.footer = $("<div class='onyx-base-home-footer'></div>");
				this.footer.text("Copy Right @ 虾掰.com");
				this.footer.appendTo(this.dom);
			}

			Home.prototype.onSubmit = function(event, formdata) {
				Api.material(this.kid).create(formdata).done(function(options) {
					UI.redirect("/material/home/" + options.id);
				});
			}

			Home.prototype.refresh = function(options) {
				return $.dfd(this);
			}

			Home.prototype.getPathes = function() {
				return $.dfd([ {
					id : "home",
					caption : "虾掰",
					uri : "/"
				}, {
					id : "base",
					caption : "知识库",
					uri : "/space/base"
				}, {
					id : this.kid,
					name : this.resource.name,
					uri : "/base/knowledges/" + this.kid
				} ]);
			}

			return Home;
		});

/**
 * Onyx Personal Home
 */
define("onyx/base/knowledges", [ "jquery", "require", "onyx/ui" ], function($,
		require) {

	var UI = require("onyx/ui");

	function Knowledges(options) {
		this.options = options;
		this.resource = this.options.resource;
		this.kid = this.resource.id;
		this.build(options);
	}

	Knowledges.prototype.build = function(options) {
		this.dom = $("<div class='onyx-base-knowledges'></div>");
		this.dom.appendTo(options.pdom);
		this.showboard = UI.createShowBoard({
			type : "entity",
			datas : this.queryEntities.bind(this, this.kid),
			pdom : this.dom
		});
		return this.dom;
	}

	Knowledges.prototype.refresh = function(options) {
		return $.dfd(this);
	}

	Knowledges.prototype.queryEntities = function(kid) {
		return Api.entity(this.kid).list();
	}

	Knowledges.prototype.getPathes = function() {
		return $.dfd([ {
			id : "home",
			caption : "虾掰",
			uri : "/"
		}, {
			id : "base",
			caption : "知识库",
			uri : "/space/base"
		}, {
			id : this.kid,
			name : this.resource.name,
			uri : "/base/knowledges/" + this.kid
		} ]);
	}

	return Knowledges;
});

/**
 * Onyx Personal Files
 */
define("onyx/base/labels", [ "jquery", "require", "onyx/ui" ], function($,
		require) {

	var UI = require("onyx/ui");

	function Labels(options) {
		this.options = options;
		this.resource = this.options.resource;
		this.kid = this.resource.id;
		this.build(options);
	}

	Labels.prototype.build = function(options) {
		this.dom = $("<div class='onyx-base-labels'></div>");
		this.dom.appendTo(options.pdom);
		this.showboard = UI.createShowBoard({
			datas : this.querylabels.bind(this, this.kid),
			pdom : this.dom
		});
		return this.dom;
	}

	Labels.prototype.querylabels = function(kid) {
		return Api.base(this.kid).listLabels();
	}

	Labels.prototype.refresh = function(options) {
		return $.dfd();
	}

	Labels.prototype.getPathes = function() {
		return $.dfd([ {
			id : "home",
			caption : "虾掰",
			uri : "/"
		}, {
			id : "base",
			caption : "知识库",
			uri : "/space/base"
		}, {
			id : this.kid,
			name : this.resource.name,
			uri : "/base/labels/" + this.kid
		} ]);
	}

	return Labels;
});

/**
 * Onyx Personal Files
 */
define("onyx/base/analysis", [ "jquery", "require", "onyx/ui" ], function($,
		require) {

	var UI = require("onyx/ui");

	function Analysis(options) {
		this.options = options;
		this.resource = this.options.resource;
		this.kid = this.resource.id;
		this.build(options.pdom);
	}

	Analysis.prototype.build = function(pdom) {
		this.dom = $("<div class='onyx-base-analysis'></div>");
		this.dom.appendTo(pdom);
		this.showboard = UI.createShowBoard({
			datas : this.getDatas.bind(this),
			pdom : this.dom
		});
		return this.dom;
	}

	Analysis.prototype.getDatas = function(kid) {
		return Api.base(kid).listGraphs();
	}

	Analysis.prototype.refresh = function(options) {
		return $.dfd(this);
	}

	Analysis.prototype.getPathes = function() {
		return $.dfd([ {
			id : "home",
			caption : "虾掰",
			uri : "/"
		}, {
			id : "base",
			caption : "知识库",
			uri : "/space/base"
		}, {
			id : this.kid,
			name : this.resource.name,
			uri : "/base/analysis/" + this.kid
		} ]);
	}

	return Analysis;
});

/**
 * Onyx Base Materials
 */
define("onyx/base/materials", [ "jquery", "require", "onyx/ui" ], function($,
		require) {

	var UI = require("onyx/ui");

	function Materials(options) {
		this.options = options;
		this.resource = this.options.resource;
		this.kid = this.resource.id;
		this.build(options.pdom);
	}

	Materials.prototype.build = function(pdom) {
		this.dom = $("<div class='onyx-base-datas'></div>");
		this.dom.appendTo(pdom);
		this.showboard = UI.createShowBoard({
			datas : this.getDatas.bind(this),
			pdom : this.dom
		});
		return this.dom;
	}

	Materials.prototype.getDatas = function(kid) {
		return Api.material(kid).list();
	}

	Materials.prototype.refresh = function(options) {
		return $.dfd(this);
	}

	Materials.prototype.getPathes = function() {
		return $.dfd([ {
			id : "home",
			caption : "虾掰",
			uri : "/"
		}, {
			id : "base",
			caption : "知识库",
			uri : "/space/base"
		}, {
			id : this.kid,
			name : this.resource.name,
			uri : "/base/materials/" + this.kid
		} ]);
	}
	return Materials;
});

/**
 * Onyx base members
 */
define("onyx/base/members", [ "jquery", "require", "onyx/ui" ], function($,
		require) {

	var UI = require("onyx/ui");

	function Members(options) {
		this.options = options;
		this.resource = this.options.resource;
		this.kid = this.resource.id;
		this.build(options.pdom);
	}

	Members.prototype.build = function(pdom) {
		this.dom = $("<div class='onyx-base-members'></div>");
		this.dom.appendTo(pdom);
		this.showboard = UI.createShowBoard({
			datas : this.getDatas.bind(this),
			pdom : this.dom
		});
		return this.dom;
	}

	Members.prototype.getDatas = function(kid) {
		return $.dfd([ {
			id : "admin",
			name : "管理员"
		} ]);
	}

	Members.prototype.refresh = function(options) {
		return $.dfd(this);
	}

	Members.prototype.getPathes = function() {
		return $.dfd([ {
			id : "home",
			caption : "虾掰",
			uri : "/"
		}, {
			id : "base",
			caption : "知识库",
			uri : "/space/base"
		}, {
			id : this.kid,
			name : this.resource.name,
			uri : "/base/members/" + this.kid
		} ]);
	}

	return Members;
});

/**
 * Onyx Base Tasks
 */
define("onyx/base/tasks", [ "jquery", "require", "onyx/ui" ], function($,
		require) {

	var UI = require("onyx/ui");

	function Tasks(options) {
		this.options = options;
		this.resource = this.options.resource;
		this.kid = this.resource.id;
		this.build(options.pdom);
	}

	Tasks.prototype.build = function(pdom) {
		this.dom = $("<div class='onyx-base-tasks'></div>");
		this.dom.appendTo(pdom);
		this.showboard = UI.createShowBoard({
			datas : this.getDatas.bind(this),
			pdom : this.dom
		});
		return this.dom;
	}

	Tasks.prototype.getDatas = function(kid) {
		return $.dfd([ {
			id : "task1",
			name : "任务1"
		} ]);
	}

	Tasks.prototype.refresh = function(options) {
		return $.dfd(this);
	}

	Tasks.prototype.getPathes = function() {
		return $.dfd([ {
			id : "home",
			caption : "虾掰",
			uri : "/"
		}, {
			id : "base",
			caption : "知识库",
			uri : "/space/base"
		}, {
			id : this.kid,
			name : this.resource.name,
			uri : "/base/tasks/" + this.kid
		} ]);
	}

	return Tasks;
});