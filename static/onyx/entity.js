/**
 * Onyx Entity
 */
define(
		"onyx/entity",
		[ "jquery", "require", "css!./entity.css", "onyx/utils", "onyx/ui",
				"onyx/entity/labels", , "onyx/entity/graph",
				"onyx/entity/properties", "onyx/entity/links",
				"onyx/entity/events" ],
		function($, require) {

			var Utils = require("onyx/utils");

			var UI = require("onyx/ui");

			var EntityLabels = require("onyx/entity/labels");

			var EntityGraph = require("onyx/entity/graph");

			var EntityProperties = require("onyx/entity/properties");

			var EntityLinks = require("onyx/entity/links");

			var EntityEvents = require("onyx/entity/events");

			function Entity(options) {
				this.options = options;
				this.resource = this.options.resource;
				this.kid = this.resource.kid;
				this.id = this.resource.id;
				this.build(this.options.pdom);
			}

			Entity.prototype.rebuild = function(options) {
				this.options = options;
				this.resource = this.options.resource;
				this.kid = this.resource.kid;
				this.id = this.resource.id;
				var pdom = this.dom.parent();
				this.dom.remove();
				this.build(pdom);
			}

			Entity.prototype.build = function(pdom) {
				this.dom = $("<div class='onyx-entity'></div>");
				this.dom.appendTo(pdom);
				this.buildHeader();
				this.buildBody();
				this.buildTools();
				this.buildFooter();
				return this.dom;
			}

			Entity.prototype.buildHeader = function() {
				this.header = $("<div class='onyx-entity-header'></div>");
				this.header.appendTo(this.dom);
				var container = $("<div class='onyx-entity-header-container'/>");
				container.appendTo(this.header);
				var left = $("<div class='onyx-entity-header-left'/>");
				left.appendTo(container);
				var right = $("<div class='onyx-entity-header-right'/>");
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
				var left = $("<div class='onyx-entity-info-left'/>");
				left.appendTo(pdom);
				var right = $("<div class='onyx-entity-info-right'/>");
				right.appendTo(pdom);
				var image = $("<span class='onyx-entity-info-image iconfont icon-man1'/>");
				image.appendTo(left);
				var name = $("<div class='onyx-entity-info-name'/>");
				name.text(this.resource.name);
				name.appendTo(right);
				if (this.resource.description) {
					var description = $("<div class='onyx-entity-info-description'/>");
					description.text(this.resource.description);
					description.appendTo(right);
				} else {
					var description = $("<div class='onyx-entity-info-description-empty'/>");
					description.text("Oops，" + this.resource.name
							+ "的概要描述不存在，我来添加一下...");
					description.appendTo(right);
				}
			}

			Entity.prototype.buildBody = function() {
				this.body = $("<div class='onyx-entity-body'></div>");
				this.body.appendTo(this.dom);
				var container = $("<div class='onyx-entity-body-container'></div>");
				container.appendTo(this.body);
				this.buildPage(container);
				this.buildPanels(container);
			}

			Entity.prototype.buildPanels = function(pdom) {
				this.buildGraphPanel(pdom);
				this.buildSuspectsPanel(pdom);
			}

			Entity.prototype.buildGraphPanel = function(pdom) {
				this.entityGraph = new EntityGraph($.extend(this.options, {
					pdom : pdom
				}));
			}

			Entity.prototype.buildSuspectsPanel = function(pdom) {
				var panel = $("<div class='onyx-entity-panel shadow'/>");
				panel.appendTo(pdom);
				var header = $("<div class='onyx-entity-panel-header'/>");
				header.text("疑似实体");
				header.appendTo(panel);
			}

			Entity.prototype.buildPage = function(pdom) {
				var page = $("<div class='onyx-entity-page shadow'/>");
				page.appendTo(pdom);
				var active = this.options.framename;
				var navbar = UI.createNavBar({
					clazz : "onyx-entity-navbar",
					theme : "horizon",
					active : active,
					items : [ {
						id : "properties",
						caption : "基本信息",
						uri : "/entity/properties/" + this.id
					}, {
						id : "links",
						caption : "关联",
						uri : "/entity/links/" + this.id
					}, {
						id : "events",
						caption : "事件",
						uri : "/entity/events/" + this.id
					}, {
						id : "materials",
						caption : "资料",
						uri : "/entity/materials/" + this.id
					} ],
					pdom : page
				});
				this.multipage = UI.createMultiPage({
					pdom : page
				});
				// navbar.on("switch", this.switchPage.bind(this, multipage));
				// navbar.fire("switch", {
				// id : "properties",
				// caption : "基本信息"
				// });
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
				this.footer = $("<div class='onyx-entity-footer'></div>");
				this.footer.text("Copy Right @ XiaBai.com");
				this.footer.appendTo(this.dom);
			}

			Entity.prototype.buildTools = function() {
				this.tools = $("<div class='onyx-entity-tools'/>");
				this.tools.appendTo(this.dom);
				this.editTool = UI.createButton({
					clazz : "onyx-entity-tool",
					theme : "blue",
					icon : "icon-edit",
					uri : "/edit/entity/" + this.id,
					pdom : this.tools
				});
				this.shareTool = UI.createButton({
					clazz : "onyx-entity-tool",
					theme : "blue",
					icon : "icon-relation",
					pdom : this.tools
				});
				this.commentTool = UI.createButton({
					clazz : "onyx-entity-tool",
					theme : "blue",
					icon : "icon-bell",
					pdom : this.tools
				});
			}

			Entity.prototype.refresh = function(options) {
				if (options.resource.id === this.id) {
					return $.dfd(this);
				}
				this.rebuild(options);
				return $.dfd(this);
			}

			Entity.prototype.showPage = function(options) {
				return this.multipage.showPage(options);
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
		"onyx/entity/labels",
		[ "jquery", "require", "onyx/utils", "onyx/ui" ],
		function($, require) {

			function EntityLabels(options) {
				this.options = options;
				this.resource = this.options.resource;
				this.kid = this.resource.kid;
				this.id = this.resource.id;
				this.build(this.options.pdom);
			}

			EntityLabels.prototype.build = function(pdom) {
				this.labels = $("<div class='onyx-entity-info-labels'/>");
				this.labels.appendTo(pdom);
				for (var i = 0; i < this.resource.labels.length; i++) {
					var label = this.resource.labels[i];
					this.buildItem(label);
				}
				this.addButton = $("<span class='onyx-entity-info-label-add iconfont icon-add'/>");
				this.addButton.text("添加");
				this.addButton.appendTo(this.labels);
				var self = this;
				this.addButton.on("click", function() {
					UI.createDialog({
						title : "添加标签",
						width : 600,
						height : 400,
						content : function(dialog) {
							return UI.createForm({
								fields : [ {
									name : "labels",
									caption : "标签名",
									type : "onyx/ui/form/searchinput",
									on : {
										"search" : self.onSearch.bind(this)
									}
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
				var labelDom = $("<span class='onyx-entity-info-label'/>");
				labelDom.text(label);
				labelDom.appendTo(this.labels);
				labelDom.on("mouseover", this.onMouseOver.bind(this));
				labelDom.on("mouseout", this.onMouseOver.bind(this));
			}

			EntityLabels.prototype.appendItem = function(label) {
				var labelDom = $("<span class='onyx-entity-info-label'/>");
				labelDom.text(label);
				labelDom.insertBefore(this.addButton);
			}

			EntityLabels.prototype.addLabel = function(data) {
				var self = this;
				var labels = data.labels;
				var names = [];
				for (var i = 0; i < labels.length; i++) {
					var label = labels[i];
					var id = label.id;
					var name = label.name;
					if (!label.id) {
						Api.base(this.kid).addLabel(name);
					}
					names.push(name);
				}
				Api.entity(this.kid, this.id).addLabels({
					kid : this.resource.kid,
					eid : this.resource.id,
					labels : names
				}).done(function(label) {
					for (var i = 0; i < label.labels.length; i++) {
						self.appendItem(label.labels[i]);
					}
				});
			}

			EntityLabels.prototype.onMouseOver = function(event) {
				var target = $(event.target);
				if (!target.hasClass("onyx-entity-info-label")) {
					return;
				}
				var name = target.text();
				this.labelCard = UI.createLabelCard({
					kid : this.kid,
					name : name,
					pdom : target
				});
			}

			EntityLabels.prototype.onMouseOut = function(event) {
			}

			EntityLabels.prototype.onSearch = function(event, text) {
				return Api.base(this.kid).searchLabels(text);
			}

			return EntityLabels;
		});

/**
 * Onyx Entity Graph Panel
 */
define("onyx/entity/graph", [ "jquery", "require", "onyx/utils", "onyx/ui",
		"onyx/canvas" ], function($, require) {

	var Canvas = require("onyx/canvas");

	function EntityGraph(options) {
		this.options = options;
		this.resource = this.options.resource;
		this.kid = this.resource.kid;
		this.id = this.resource.id;
		this.build(this.options.pdom);
	}

	EntityGraph.prototype.build = function(pdom) {
		this.dom = $("<div class='onyx-entity-panel shadow'/>");
		this.dom.appendTo(pdom);
		var header = $("<div class='onyx-entity-panel-header'/>");
		header.text("查看图谱");
		header.appendTo(this.dom);

		this.body = $("<div class='onyx-entity-panel-body'/>");
		this.body.appendTo(this.dom);
		this.buildCanvas(this.body);
		var footer = $("<div class='onyx-entity-panel-footer'/>");
		footer.appendTo(this.dom);
	}

	EntityGraph.prototype.buildCanvas = function(pdom) {
		this.canvas = $("<div class='onyx-entity-panel-canvas'/>");
		this.canvas.appendTo(pdom);
		new Canvas(this.canvas, {
			id : this.kid
		}, this.resource, false);
		return this.canvas;
	}

	EntityGraph.prototype.refresh = function() {
		this.canvas.remove();
		this.buildCanvas(this.body);
	}

	return EntityGraph;
});

/**
 * Onyx Entity Properties
 */
define(
		"onyx/entity/properties",
		[ "jquery", "require", "onyx/utils", "onyx/ui" ],
		function($, require) {

			function EntityProperties(options) {
				this.options = options;
				this.resource = this.options.resource;
				this.kid = this.resource.kid;
				this.id = this.resource.id;
				this.build(this.options.pdom);
			}

			EntityProperties.prototype.build = function(pdom) {
				this.dom = $("<div class='onyx-entity-properties'></div>");
				this.dom.appendTo(pdom);
				var toolbar = $("<div class='onyx-entity-properties-toolbar'></div>");
				toolbar.appendTo(this.dom);
				this.addButton = UI.createButton({
					theme : "blue",
					icon : "icon-add",
					caption : "添加",
					pdom : toolbar
				});
				this.addButton.on("click", this.addProperty.bind(this));
				var properties = this.resource.properties;
				for ( var key in properties) {
					var item = $("<div class='onyx-entity-property shadow'/>");
					item.appendTo(this.dom);
					var keydom = $("<span class='onyx-entity-property-key'/>");
					keydom.text(key);
					keydom.appendTo(item);
					var icondom = $("<span class='onyx-entity-property-icon iconfont icon-phone'/>");
					icondom.appendTo(item);
					var value = properties[key];
					var valuedom = $("<span class='onyx-entity-property-value'/>");
					valuedom.text(value);
					valuedom.appendTo(item);
				}
			}

			EntityProperties.prototype.addProperty = function(event) {
				UI.createDialog({
					modal : true,
					width : 600,
					height : 400,
					title : "添加属性",
					content : this.buildPropertyDialog.bind(this),
					buttons : [ "ok", "cancel" ],
					on : {
						"ok" : this.onAddProperty.bind(this)
					}
				});
			}

			EntityProperties.prototype.buildPropertyDialog = function(dialog) {
				return UI.createForm({
					fields : [ {
						name : "type",
						caption : "类型",
						type : "onyx/ui/form/searchinput",
						on : {
							"search" : function() {
								return $.dfd();
							}
						}
					}, {
						name : "name",
						caption : "名称",
						type : "onyx/ui/form/input"
					}, {
						name : "value",
						caption : "值",
						type : "onyx/ui/form/input"
					} ],
					pdom : dialog.pdom
				});
			}

			EntityProperties.prototype.onAddProperty = function(event, dialog) {
				var self = this;
				dialog.getContent().getData().done(function(data) {
					Api.entity(self.kid, self.id).addProperty({
						name : data.name,
						value : data.value
					}).done(function(result) {
						var properties = self.options.resource.properties;
						properties = $.extend(properties, result);
						self._refresh(self.options);
					});
				})
			}

			EntityProperties.prototype._refresh = function(options) {
				this.options = options;
				this.resource = this.options.resource;
				this.kid = this.resource.kid;
				this.id = this.resource.id;
				this.dom.remove();
				this.build(this.options.pdom);
				return $.dfd(this);
			}

			EntityProperties.prototype.getPathes = function() {
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
						uri : "/base/home/" + self.kid
					}, {
						id : self.eid,
						name : self.resource.name,
						uri : "/entity/properties" + self.id
					} ]);
				});
				return dfd.promise();
			}
			return EntityProperties;
		});

/**
 * Onyx Entity Links
 */
define(
		"onyx/entity/links",
		[ "jquery", "require", "onyx/utils", "onyx/ui" ],
		function($, require) {

			function EntityLinks(options) {
				this.options = options;
				this.resource = this.options.resource;
				this.kid = this.resource.kid;
				this.id = this.resource.id;
				this.build(this.options.pdom);
			}

			EntityLinks.prototype.build = function(pdom) {
				this.dom = $("<div class='onyx-entity-links'/>");
				this.dom.appendTo(pdom);
				this.toolbar = $("<div class='onyx-entity-links-toolbar'/>");
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
				var map = {};
				for (var i = 0; i < links.length; i++) {
					var link = links[i];
					var name = link.name;
					if (map[name]) {
						map[name].push(link);
					} else {
						map[name] = [ link ];
					}
				}
				for ( var key in map) {
					var array = map[key];
					var item = $("<div class='onyx-entity-links-items shadow'/>");
					item.appendTo(this.dom);
					var header = $("<div class='onyx-entity-links-items-header'/>");
					header.text(array[0].name);
					header.appendTo(item);
					var rightButton = $("<span class='onyx-entity-links-items-header-button iconfont icon-chevron-right'></span>");
					rightButton.appendTo(header);
					var addButton = $("<span class='onyx-entity-links-items-header-button iconfont icon-add'></span>");
					addButton.appendTo(header);
					var leftButton = $("<span class='onyx-entity-links-items-header-button iconfont icon-chevron-left'></span>");
					leftButton.appendTo(header);
					var body = $("<div class='onyx-entity-links-items-body'/>");
					body.appendTo(item);
					this.buildLinkItems(body, array);
				}
			}

			EntityLinks.prototype.buildLinkItems = function(body, array) {
				for (var i = 0; i < array.length; i++) {
					var link = array[i];
					var item = $("<div class='onyx-entity-links-item'/>");
					item.text(link.targetname);
					item.appendTo(body);
				}
			}
			EntityLinks.prototype.addLink = function() {
				UI.createDialog({
					modal : true,
					title : "添加关联",
					width : 600,
					height : 400,
					content : this.buildLinkDialog.bind(this),
					buttons : [ "ok", "cancel" ],
					on : {
						"ok" : this.onAddLink.bind(this)
					}
				});
			}

			EntityLinks.prototype.buildLinkDialog = function(content) {
				var form = UI.createForm({
					fields : [ {
						name : "linktype",
						caption : "类型",
						type : "onyx/ui/form/input",
					}, {
						name : "entities",
						caption : "对象",
						type : "onyx/ui/form/searchinput",
						on : {
							"search" : this.onSearchEntity.bind(this)
						}
					} ],
					pdom : content.pdom
				});
				return form;
			}

			EntityLinks.prototype.onSearchEntity = function(text) {
				return Api.base(this.kid).searchEntities(text);
			}

			EntityLinks.prototype.onAddLink = function(event, dialog) {
				var content = dialog.getContent();
				var self = this;
				content.getData().done(function(data) {
					var type = data.linktype || "未知关系";
					var entities = data.entities;
					var links = [];
					for (var i = 0; i < entities.length; i++) {
						var entity = entities[i];
						var link = {
							name : type,
							source : self.resource,
							target : entity
						}
						links.push(link);
					}
					Api.link().addLinks(links).done(function() {
						self._refresh(self.options);
					});
				});
			}

			EntityLinks.prototype._refresh = function(options) {
				this.options = options;
				this.resource = this.options.resource;
				this.kid = this.resource.kid;
				this.id = this.resource.id;
				this.dom.remove();
				this.build(this.options.pdom);
				options.page.entityGraph.refresh();
				return $.dfd(this);
			}

			EntityLinks.prototype.getPathes = function() {
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
						uri : "/base/home/" + self.kid
					}, {
						id : self.eid,
						name : self.resource.name,
						uri : "/entity/links/" + self.id
					} ]);
				});
				return dfd.promise();
			}
			return EntityLinks;
		});

/**
 * Onyx Entity Events
 */
define("onyx/entity/events", [ "jquery", "require", "onyx/utils", "onyx/ui" ],
		function($, require) {

			function EntityEvents(options) {
				this.options = options;
				this.resource = this.options.resource;
				this.kid = this.resource.kid;
				this.id = this.resource.id;
				this.build(this.options.pdom);
			}

			EntityEvents.prototype.build = function(pdom) {
				this.dom = $("<div class='onyx-entity-events'/>");
				this.dom.appendTo(pdom);
				var self = this;
				Api.event().list(this.id).done(function(events) {
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
					clazz : "onyx-entity-events-timeline",
					datas : items,
					pdom : pdom
				});
			}

			EntityEvents.prototype.getPathes = function() {
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
						uri : "/base/home/" + self.kid
					}, {
						id : self.eid,
						name : self.resource.name,
						uri : "/entity/events/" + self.id
					} ]);
				});
				return dfd.promise();
			}
			return EntityEvents;
		});