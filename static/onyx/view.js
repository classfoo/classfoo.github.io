/**
 * Onyx View
 */
define("onyx/view", [ "jquery", "require", "css!./view.css", "onyx/utils",
		"onyx/ui" ], function($, require) {

	var Utils = require("onyx/utils");

	var UI = require("onyx/ui");

	function View(options) {
		this.options = options;
		this.build(this.options);
	}

	View.prototype.build = function(options) {
		this.dom = $("<div class='onyx-view'></div>");
		this.dom.appendTo(this.options.pdom);
		this.multipage = UI.createMultiPage({
			clazz : "onyx-view-multipage",
			pdom : this.dom
		});
		return this.dom;
	}

	View.prototype.refresh = function(options) {
		return $.dfd(this);
	}

	View.prototype.showPage = function(options) {
		return this.multipage.showPage(options);
	}
	return View;
});

/**
 * Onyx Space Enter
 */
define(
		"onyx/view/entity",
		[ "jquery", "require", "onyx/utils", "onyx/ui", "onyx/canvas",
				"onyx/view/entitylabels", "onyx/view/entityproperties",
				"onyx/view/entitylinks", "onyx/view/entityevents" ],
		function($, require) {

			var Utils = require("onyx/utils");

			var UI = require("onyx/ui");

			var Canvas = require("onyx/canvas");

			var EntityLabels = require("onyx/view/entitylabels");

			var EntityProperties = require("onyx/view/entityproperties");

			var EntityLinks = require("onyx/view/entitylinks");

			var EntityEvents = require("onyx/view/entityevents");

			function Entity(options) {
				this.options = options;
				this.resource = this.options.resource;
				this.kid = this.resource.kid;
				this.eid = this.resource.id;
				this.build(this.options.pdom);
			}

			Entity.prototype.build = function(pdom) {
				this.dom = $("<div class='onyx-view-entity'></div>");
				this.dom.appendTo(pdom);
				this.buildHeader();
				this.buildBody();
				this.buildTools();
				this.buildFooter();
				return this.dom;
			}

			Entity.prototype.buildHeader = function() {
				this.header = $("<div class='onyx-view-entity-header'></div>");
				this.header.appendTo(this.dom);
				var container = $("<div class='onyx-view-entity-header-container'/>");
				container.appendTo(this.header);
				var left = $("<div class='onyx-view-entity-header-left'/>");
				left.appendTo(container);
				var right = $("<div class='onyx-view-entity-header-right'/>");
				right.appendTo(container);
				this.buildEntityLabels(left);
				this.buildEntityInfo(left);
			}

			Entity.prototype.buildEntityLabels = function(pdom) {
				this.entityLabels = new EntityLabels($.extend(this.options, {
					pdom : pdom
				}));
			}

			Entity.prototype.buildEntityInfo = function(pdom) {
				var left = $("<div class='onyx-view-entity-info-left'/>");
				left.appendTo(pdom);
				var right = $("<div class='onyx-view-entity-info-right'/>");
				right.appendTo(pdom);
				var image = $("<span class='onyx-view-entity-info-image iconfont icon-man1'/>");
				image.appendTo(left);
				var name = $("<div class='onyx-view-entity-info-name'/>");
				name.text(this.resource.name);
				name.appendTo(right);
				if (this.resource.description) {
					var description = $("<div class='onyx-view-entity-info-description'/>");
					description.text(this.resource.description);
					description.appendTo(right);
				} else {
					var description = $("<div class='onyx-view-entity-info-description-empty'/>");
					description.text("Oops，" + this.resource.name
							+ "的概要描述不存在，我来添加一下...");
					description.appendTo(right);
				}
			}

			Entity.prototype.buildBody = function() {
				this.body = $("<div class='onyx-view-entity-body'></div>");
				this.body.appendTo(this.dom);
				var container = $("<div class='onyx-view-entity-body-container'></div>");
				container.appendTo(this.body);
				this.buildPage(container);
				this.buildPanels(container);
			}

			Entity.prototype.buildPanels = function(pdom) {
				this.buildGraphPanel(pdom);
				this.buildSuspectsPanel(pdom);
			}

			Entity.prototype.buildGraphPanel = function(pdom) {
				var graph = $("<div class='onyx-view-entity-panel shadow'/>");
				graph.appendTo(pdom);
				var header = $("<div class='onyx-view-entity-panel-header'/>");
				header.text("查看图谱");
				header.appendTo(graph);

				var body = $("<div class='onyx-view-entity-panel-body'/>");
				body.appendTo(graph);

				var canvas = $("<div class='onyx-view-entity-panel-canvas'/>");
				canvas.appendTo(body);
				new Canvas(canvas, {
					id : this.kid
				}, this.resource, false);

				// var icon = $("<div class='onyx-view-entity-panel-graph-icon
				// iconfont icon-graph'>");
				// icon.appendTo(body);
				var footer = $("<div class='onyx-view-entity-panel-footer'/>");
				footer.appendTo(graph);
				// var self = this;
				// graph.on("click", function() {
				// UI.redirect("/graph/entity/" + self.resource.id);
				// });
			}

			Entity.prototype.buildSuspectsPanel = function(pdom) {
				var panel = $("<div class='onyx-view-entity-panel shadow'/>");
				panel.appendTo(pdom);
				var header = $("<div class='onyx-view-entity-panel-header'/>");
				header.text("疑似实体");
				header.appendTo(panel);
			}

			Entity.prototype.buildPage = function(pdom) {
				var page = $("<div class='onyx-view-entity-page shadow'/>");
				page.appendTo(pdom);
				var navbar = UI.createNavBar({
					clazz : "onyx-view-entity-navbar",
					theme : "horizon",
					active : "properties",
					items : [ {
						id : "properties",
						caption : "基本信息"
					}, {
						id : "links",
						caption : "关联"
					}, {
						id : "events",
						caption : "事件"
					}, {
						id : "materials",
						caption : "资料"
					} ],
					pdom : page
				});
				var multipage = UI.createMultiPage({
					pdom : page
				});
				navbar.on("switch", this.switchPage.bind(this, multipage));
				navbar.fire("switch", {
					id : "properties",
					caption : "基本信息"
				});
			}

			Entity.prototype.switchPage = function(multipage, event, page) {
				var self = this;
				multipage.showPage(page).done(function(page) {
					switch (page.id) {
					case "properties": {
						return self.switchPropertiesPage(page);
					}
					case "links": {
						return self.switchLinksPage(page);
					}
					case "events": {
						return self.switchEventsPage(page);
					}
					}
				});
			}

			Entity.prototype.switchPropertiesPage = function(page) {
				this.properties = new EntityProperties($.extend(this.options, {
					pdom : page.dom
				}));
			}

			Entity.prototype.switchLinksPage = function(page) {
				this.links = new EntityLinks($.extend(this.options, {
					pdom : page.dom
				}));
			}

			Entity.prototype.switchEventsPage = function(page) {
				this.links = new EntityEvents($.extend(this.options, {
					pdom : page.dom
				}));
			}

			Entity.prototype.buildFooter = function() {
				this.footer = $("<div class='onyx-view-entity-footer'></div>");
				this.footer.text("Copy Right @ XiaBai.com");
				this.footer.appendTo(this.dom);
			}

			Entity.prototype.buildTools = function() {
				this.tools = $("<div class='onyx-view-entity-tools'/>");
				this.tools.appendTo(this.dom);
				this.editTool = UI.createButton({
					clazz : "onyx-view-entity-tool",
					theme : "blue",
					icon : "icon-edit",
					uri : "/edit/entity/" + this.eid,
					pdom : this.tools
				});
				this.shareTool = UI.createButton({
					clazz : "onyx-view-entity-tool",
					theme : "blue",
					icon : "icon-relation",
					pdom : this.tools
				});
				this.commentTool = UI.createButton({
					clazz : "onyx-view-entity-tool",
					theme : "blue",
					icon : "icon-bell",
					pdom : this.tools
				});
			}

			Entity.prototype.refresh = function(options) {
				return $.dfd(this);
			}

			Entity.prototype.getPathes = function() {
				var dfd = $.Deferred();
				var self = this;
				Api.base().get(this.kid).done(function(base) {
					dfd.resolve([ {
						id : "home",
						caption : "虾掰",
						uri : "/"
					}, {
						id : "base",
						caption : "知识库",
						uri : "/space/base"
					}, {
						id : self.kid,
						name : base.name,
						uri : "/base/knowledges/" + self.kid
					}, {
						id : self.eid,
						name : self.resource.name,
						uri : "/view/entity/" + self.eid
					} ]);
				});
				return dfd.promise();

			}

			return Entity;
		});

/**
 * Onyx Entity Labels
 */
define(
		"onyx/view/entitylabels",
		[ "jquery", "require", "onyx/utils", "onyx/ui" ],
		function($, require) {

			function EntityLabels(options) {
				this.options = options;
				this.resource = this.options.resource;
				this.kid = this.resource.kid;
				this.eid = this.resource.id;
				this.build(this.options.pdom);
			}

			EntityLabels.prototype.build = function(pdom) {
				this.labels = $("<div class='onyx-view-entity-info-labels'/>");
				this.labels.appendTo(pdom);
				for (var i = 0; i < this.resource.labels.length; i++) {
					var label = this.resource.labels[i];
					this.buildItem(label);
				}
				this.addButton = $("<span class='onyx-view-entity-info-label-add iconfont icon-add'/>");
				this.addButton.text("添加");
				this.addButton.appendTo(this.labels);
				var self = this;
				this.addButton.on("click", function() {
					UI.createDialog({
						title : "添加标签",
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
										self.addLabel.bind(self));
							}
						}
					});
				});
			}

			EntityLabels.prototype.buildItem = function(label) {
				var labelDom = $("<span class='onyx-view-entity-info-label'/>");
				labelDom.text(label);
				labelDom.appendTo(this.labels);
			}

			EntityLabels.prototype.appendItem = function(label) {
				var labelDom = $("<span class='onyx-view-entity-info-label'/>");
				labelDom.text(label);
				labelDom.insertBefore(this.addButton);
			}

			EntityLabels.prototype.addLabel = function(data) {
				var self = this;
				Api.entity(this.kid).addLabel({
					kid : this.resource.kid,
					eid : this.resource.id,
					name : data.name
				}).done(function(label) {
					for (var i = 0; i < label.labels.length; i++) {
						self.appendItem(label.labels[i]);
					}
				});
			}

			return EntityLabels;
		});

/**
 * Onyx Entity Properties
 */
define(
		"onyx/view/entityproperties",
		[ "jquery", "require", "onyx/utils", "onyx/ui" ],
		function($, require) {

			function EntityProperties(options) {
				this.options = options;
				this.resource = this.options.resource;
				this.kid = this.resource.kid;
				this.eid = this.resource.id;
				this.build(this.options.pdom);
			}

			EntityProperties.prototype.build = function(pdom) {
				this.dom = $("<div class='onyx-view-entity-properties'></div>");
				this.dom.appendTo(pdom);
				var toolbar = $("<div class='onyx-view-entity-properties-toolbar'></div>");
				toolbar.appendTo(this.dom);
				UI.createButton({
					theme : "blue",
					icon : "icon-add",
					caption : "添加",
					pdom : toolbar
				});
				UI.createButton({
					theme : "blue",
					icon : "icon-remove",
					caption : "删除",
					pdom : toolbar
				});
				// UI.createSearchBox({
				// placeholder : "搜索",
				// pdom : toolbar
				// });
				var properties = this.resource.properties;
				for ( var key in properties) {
					var item = $("<div class='onyx-view-entity-property'/>");
					item.appendTo(this.dom);
					var keydom = $("<span class='onyx-view-entity-property-key'/>");
					keydom.text(key);
					keydom.appendTo(item);
					var value = properties[key];
					var valuedom = $("<span class='onyx-view-entity-property-value'/>");
					valuedom.text(value);
					valuedom.appendTo(item);
				}
			}
			return EntityProperties;
		});

/**
 * Onyx Entity Links
 */
define(
		"onyx/view/entitylinks",
		[ "jquery", "require", "onyx/utils", "onyx/ui" ],
		function($, require) {

			function EntityLinks(options) {
				this.options = options;
				this.resource = this.options.resource;
				this.kid = this.resource.kid;
				this.eid = this.resource.id;
				this.build(this.options.pdom);
			}

			EntityLinks.prototype.build = function(pdom) {
				this.dom = $("<div class='onyx-view-entity-links'/>");
				this.dom.appendTo(pdom);
				this.toolbar = $("<div class='onyx-view-entity-links-toolbar'/>");
				this.toolbar.appendTo(this.dom);
				this.addButton = UI.createButton({
					theme : "blue",
					id : "add",
					caption : "添加",
					icon : "icon-add",
					pdom : this.toolbar
				});
				this.addButton.on("click", this.addLink.bind(this));
				var self = this;
				Api.entity(this.kid).links({
					id : this.resource.id
				}).done(self.buildLinks.bind(self));
				return this.dom;
			}

			EntityLinks.prototype.buildLinks = function(links) {
				for (var i = 0; i < links.length; i++) {
					var link = links[i];
					var item = $("<div class='onyx-view-entity-links-item'/>");
					item.text(link.name);
					item.appendTo(this.dom);
				}
			}

			EntityLinks.prototype.addLink = function() {
				UI.createDialog({
					title : "添加关联",
					content : function(content) {
						return UI.createForm({
							fields : [ {
								name : "type",
								caption : "类型",
								type : "onyx/ui/form/input",
							}, {
								name : "entity",
								caption : "对象",
								type : "onyx/ui/form/input",
							} ],
							pdom : content.pdom
						});
					},
					buttons : [ "ok", "cancel" ]
				});
			}

			EntityLinks.prototype.buildLinkDialog = function(content) {
			}
			return EntityLinks;
		});

/**
 * Onyx Entity Events
 */
define("onyx/view/entityevents",
		[ "jquery", "require", "onyx/utils", "onyx/ui" ], function($, require) {

			function EntityEvents(options) {
				this.options = options;
				this.resource = this.options.resource;
				this.kid = this.resource.kid;
				this.eid = this.resource.id;
				this.build(this.options.pdom);
			}

			EntityEvents.prototype.build = function(pdom) {
				this.dom = $("<div class='onyx-view-entity-events'/>");
				this.dom.appendTo(pdom);
				var self = this;
				Api.event().list(this.eid).done(function(events) {
					self.buildEvents(events, self.dom);
				});
			}

			EntityEvents.prototype.buildEvents = function(events, pdom) {
				if (!events) {
					return;
				}
				var items = [];
				for (var i = 0; i < events.length; i++) {
					var event = events[i];
					var times = event.time.split("/");
					var year = times[0];
					var month = times[1];
					var day = times[2];
					items.push({
						id : event.eid,
						name : event.name,
						details : event.properties,
						year : year,
						month : month,
						day : day
					});
				}
				UI.createTimeLine({
					clazz : "onyx-view-entity-events-timeline",
					datas : items,
					pdom : pdom
				});
			}

			return EntityEvents;
		});

/**
 * Onyx Space Label
 */
define("onyx/view/label", [ "jquery", "require", "onyx/utils", "onyx/ui" ],
		function($, require) {

			var Utils = require("onyx/utils");

			var UI = require("onyx/ui");

			function Label(options) {
				this.options = options;
				this.resource = this.options.resource;
				this.kid = this.resource.kid;
				this.lid = this.resource.id;
				this.build(this.options.pdom);
			}

			Label.prototype.build = function(pdom) {
				this.dom = $("<div class='onyx-view-label'></div>");
				this.dom.appendTo(pdom);
				this.buildHeader();
				this.buildBody();
				this.buildTools();
				this.buildFooter();
				return this.dom;
			}

			Label.prototype.buildHeader = function() {
				this.header = $("<div class='onyx-view-label-header'></div>");
				this.header.appendTo(this.dom);
			}

			Label.prototype.buildBody = function() {
				this.body = $("<div class='onyx-view-label-body'></div>");
				this.body.appendTo(this.dom);
				this.buildPage();
			}

			Label.prototype.buildPage = function() {
				this.page = $("<div class='onyx-view-label-page'/>");
				this.page.appendTo(this.body);
				var paragraph = $("<div class='onyx-view-label-paragraph'/>");
				paragraph.appendTo(this.page);
				paragraph.text(this.resource.name);

			}

			Label.prototype.buildFooter = function() {
				this.footer = $("<div class='onyx-view-label-footer'></div>");
				this.footer.appendTo(this.dom);
			}

			Label.prototype.buildTools = function() {
				this.tools = $("<div class='onyx-view-label-tools'/>");
				this.tools.appendTo(this.dom);
				this.editTool = UI.createButton({
					clazz : "onyx-view-label-tool",
					theme : "blue",
					icon : "icon-edit",
					uri : "/edit/label/" + this.lid,
					pdom : this.tools
				});
				this.shareTool = UI.createButton({
					clazz : "onyx-view-label-tool",
					theme : "blue",
					icon : "icon-relation",
					pdom : this.tools
				});
				this.commentTool = UI.createButton({
					clazz : "onyx-view-label-tool",
					theme : "blue",
					icon : "icon-bell",
					pdom : this.tools
				});
			}

			Label.prototype.refresh = function(options) {
				return $.dfd(this);
			}

			Label.prototype.getPathes = function() {
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
					name : this.kid,
					uri : "/base/knowledges/" + this.kid
				}, {
					id : this.eid,
					name : this.resource.name,
					uri : "/view/label/" + this.lid
				} ]);
			}

			return Label;
		});