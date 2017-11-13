/**
 * Onyx Space Enter
 */
define("onyx/edit", [ "jquery", "require", "css!./edit.css", "onyx/ui" ],
		function($, require) {

			var UI = require("onyx/ui");

			function Edit(options) {
				this.options = options;
				this.build(options.pdom);
			}

			Edit.prototype.build = function(pdom) {
				this.dom = $("<div class='onyx-edit'></div>");
				this.dom.appendTo(pdom);
				this.layout = UI.createEditLayout({
					toolbar : {
						cmd : this.docmd.bind(this),
						left : [ {
							id : "layout",
							theme : "blue",
							caption : "显示",
							drop : true,
							icon : "icon-layout"
						}, {
							id : "add",
							theme : "blue",
							caption : "",
							icon : "icon-add"
						} ],
						middle : [ {
							id : "add",
							theme : "blue",
							caption : "",
							icon : "icon-preview"
						} ],
						right : [ {
							id : "save",
							theme : "blue",
							caption : "保存",
							icon : "icon-save"
						}, {
							id : "close",
							theme : "gray",
							caption : "关闭",
							icon : "icon-close"
						} ]
					},
					leftPanel : {
						on : {
							"switch" : this.onSwitchLeftPanel.bind(this)
						},
						navbar : {
							active : "entities",
							items : [ {
								id : "entities",
								caption : "知识",
								active : true
							}, {
								id : "labels",
								caption : "标签"
							}, {
								id : "datas",
								caption : "数据"
							} ]
						}
					},
					middlePanel : {
						on : {
							"switch" : this.onSwitchMiddlePanel.bind(this)
						},
						navbar : {
							active : "home",
							theme : "browser",
							items : [ {
								id : "home",
								icon : "icon-home"
							} ]
						}
					},
					rightPanel : {
						on : {
							"switch" : this.onSwitchRightPanel.bind(this)
						},
						navbar : {
							active : "properties",
							items : [ {
								id : "properties",
								caption : "属性"
							}, {
								id : "modifies",
								caption : "修改"
							} ]
						}
					},
					pdom : this.dom
				});
				this.multipage = this.layout.getMiddle().getMultiPage();
				return this.dom;
			}

			Edit.prototype.getRightPanel = function() {
				return this.layout.getRight();
			}

			Edit.prototype.getMiddlePanel = function() {
				return this.layout.getMiddle();
			}

			Edit.prototype.getLeftPanel = function() {
				return this.layout.getLeft();
			}

			Edit.prototype.onSwitchLeftPanel = function(event, page) {
				switch (page.id) {
				case "labels": {
					this.showLabelList(page);
					break;
				}
				case "datas": {
					this.showDataList(page);
					break;
				}
				case "entities": {
					this.showEntityList(page);
					break;
				}
				}
			}

			Edit.prototype.showEntityList = function(page) {
				var search = UI.createSearchBox({
					pdom : page.dom,
				});
				this.entityList = UI.createList({
					datas : this.queryEntities.bind(this),
					pdom : page.dom
				});
				this.entityList.on("dblclickitem", function(event, item) {
					var data = $(item).data();
					UI.redirect("/edit/entity/" + data.eid);
				});
			}

			Edit.prototype.queryEntities = function() {
				var kid = this.options.resource.kid;
				return Api.entity(kid).list();
			}

			Edit.prototype.showLabelList = function(page) {
				var search = UI.createSearchBox({
					pdom : page.dom,
				});
				this.labelList = UI.createList({
					datas : this.queryLabels.bind(this),
					pdom : page.dom
				});
				this.labelList.on("dblclickitem", function(event, item) {
					var data = $(item).data();
					UI.redirect("/edit/label/" + data.lid);
				});
			}

			Edit.prototype.queryLabels = function() {
				var kid = this.options.resource.kid;
				return Api.label(kid).list();
			}

			Edit.prototype.onSwitchRightPanel = function(event) {
				this.refreshRightPanel();
			}

			Edit.prototype.showProperties = function(page) {
				if (!this.propertyForm) {
					this.propertyForm = UI.createForm({
						fields : [],
						pdom : page.dom
					});
				}
				var middlePanel = this.layout.getMiddle();
				var page = middlePanel.getCurrentPage();
				if (page.component.getSelected) {
					this.propertyForm.show(page.component.getSelected());
				}
			}

			Edit.prototype.getPropertyForm = function() {
				return this.propertyForm;
			}

			Edit.prototype.showModifies = function(page) {
				if (!this.layout) {
					return;
				}
				if (!this.modifyList) {
					this.modifyList = UI.createList({
						pdom : page.dom
					});
				}
				var middlePanel = this.layout.getMiddle();
				var page = middlePanel.getCurrentPage();
				this.modifyList.removeAll();
				this.modifyList.addItems(page.component.getModifies());
			}

			Edit.prototype.getModifyList = function() {
				return this.modifyList
			}

			Edit.prototype.onSwitchMiddlePanel = function(event, page) {
				this.currentPage = page;
				this.refreshRightPanel();
			}

			Edit.prototype.refresh = function(options) {
				return $.dfd({});
			}

			Edit.prototype.refreshRightPanel = function() {
				if (!this.layout) {
					return;
				}
				var rightPanel = this.getRightPanel();
				var page = rightPanel.getCurrentPage();
				switch (page.id) {
				case "properties": {
					this.showProperties(page);
					break;
				}
				case "modifies": {
					this.showModifies(page);
					break;
				}
				}
			}

			Edit.prototype.showPage = function(options) {
				var dfd = $.Deferred();
				var id = this.getOptionsId(options);
				var panelOptions = $.extend({}, options);
				var resource = options.resource;
				panelOptions.id = id;
				panelOptions.caption = resource.name;
				panelOptions.icon = "icon-object";
				var middlePanel = this.layout.getMiddle();
				middlePanel.showPanel(panelOptions).done(function(frame) {
					dfd.resolve(frame);
				});
				return dfd.promise();
			}

			Edit.prototype.getOptionsId = function(options) {
				if ("label" == options.framename) {
					var resource = options.resource;
					return resource.lid;
				}
				if ("entity" == options.framename) {
					var resource = options.resource;
					return resource.eid;
				}
				if ("contribute" == options.framename) {
					var resource = options.resource;
					return resource.cid;
				}
			}

			Edit.prototype.docmd = function(cmd, event) {
				var middlePanel = this.layout.getMiddle();
				var page = middlePanel.getCurrentPage();
				page.component.docmd(cmd, event);
			}

			return Edit;
		});

/**
 * Label Edit
 */
define("onyx/edit/label", [ "jquery", "require", "onyx/ui" ], function($,
		require) {

	var UI = require("onyx/ui");

	function Label(options) {
		this.options = options;
		this.resource = options.resource;
		this.kid = this.resource.kid;
		this.lid = this.resource.id;
		this.edit = options.page;
		this.modifies = [];
		this.build(options.pdom);
	}

	Label.prototype.build = function(pdom) {
		this.dom = $("<div class='onyx-edit-label'></div>");
		this.dom.appendTo(pdom);
		this.layout = UI.createLayout({
			on : {
				"switch" : function(event) {
					event.stopPropagation();
				},
				"modify" : this.onModify.bind(this),
				"select" : this.onSelect.bind(this)
			},
			clazz : "onyx-edit-label-form",
			header : {
				height : 112
			},
			body : {

			},
			pdom : this.dom
		});
		this.headerLayout = UI.createLayout({
			clazz : "onyx-edit-label-form",
			left : {
				width : 112
			},
			middle : {

			},
			right : {
				width : 112
			},
			pdom : this.layout.getHeader()
		});
		this.icon = UI.createIcon({
			id : "icon",
			clazz : "onyx-edit-label-form-icon",
			icon : "icon-user-circle",
			editable : true,
			pdom : this.headerLayout.getLeft()
		});
		this.name = UI.createText({
			id : "name",
			clazz : "onyx-edit-label-form-name",
			placeholder : "输入标签名称...",
			text : this.resource.name,
			editable : true,
			pdom : this.headerLayout.getMiddle()
		});
		this.parents = UI.createNavBar({
			id : "parents",
			clazz : "onyx-edit-label-form-parents",
			theme : "bubble",
			visible : false,
			editable : true,
			addbutton : {
				caption : "父标签"
			},
			items : this.resource.parents,
			pdom : this.headerLayout.getMiddle()
		});
		this.navPanel = UI.createNavPanel({
			on : {
				"switch" : this.onSwitch.bind(this)
			},
			id : "properties",
			navbar : {
				theme : "browser",
				active : "properties",
				items : [ {
					id : "properties",
					caption : "属性"
				} ]
			},
			pdom : this.layout.getBody()
		});
		return this.dom;
	}

	Label.prototype.onModify = function(event, modify) {
		if (!modify) {
			return;
		}
		var item = {};
		switch (modify.key) {
		case "name": {
			item.key = "name";
			item.operate = modify.type;
			item.name = modify.value;
			break;
		}
		case "parents": {
			item.key = "parents";
			item.operate = modify.type;
			item.parent = modify.value;
			break;
		}
		case "properties": {
			item.key = "properties";
			item.operate = modify.type;
			var submodify = modify.value;
			item.pname = submodify.value;
			item.ptype = "text";
			break;
		}
		}
		this.modifies.push(item);
		var navPanel = this.edit.getRightPanel();
		navPanel.showPanel({
			id : "modifies"
		});
	}

	Label.prototype.refreshNavPanelByModify = function(modify) {
		if (modify.key == "name") {
			this.navPanel.showPanel({
				id : "properties",
				caption : modify.value + "-属性"
			}).done(function(navbar, page) {
				navbar.modifyItem({
					id : "properties",
					caption : modify.value + "-属性"
				});
			});
		}
		if (modify.key == "parents") {
			if (modify.type == "update") {
				this.navPanel.showPanel({
					id : modify.old,
					caption : modify.value + "-属性"
				}).done(function(navbar, page) {
					navbar.modifyItem({
						id : modify.old,
						newid : modify.value,
						caption : modify.value + "-属性"
					});
				});
			} else {
				this.navPanel.showPanel({
					id : modify.value,
					caption : modify.value + "-属性"
				});
			}
		}
		var navPanel = this.edit.getRightPanel();
		navPanel.showPanel({
			id : "modifies"
		});
	}

	Label.prototype.onSelect = function(event, select) {
		var navPanel = this.edit.getRightPanel();
		var propertiesPanel = navPanel.showPanel({
			id : "properties"
		});
	}

	Label.prototype.onSwitch = function(event, panel) {
		var id = panel.id;
		this.buildFormProperties(panel.id, panel.dom);
	}

	Label.prototype.buildFormProperties = function(label, pdom) {
		if (!this.panels) {
			this.panels = {};
		}
		var panel = this.panels[label];
		if (panel) {
			// panel.refresh();
			return;
		}
		var resource = this.options.resource;
		var kid = resource.kid;
		var properties = resource.properties;
		var editboard = UI.createEditBoard({
			id : label,
			editable : true,
			datas : properties,
			pdom : pdom
		});
		this.panels[label] = editboard;
	}

	Label.prototype.getModifies = function() {
		var result = [];
		for (var i = 0; i < this.modifies.length; i++) {
			var modify = this.modifies[i];
			var listItem = this.convertModifyToListItem(modify);
			result.push(listItem);
		}
		return result;
	}

	Label.prototype.clearModifies = function() {
		this.modifies = [];
		var navPanel = this.edit.getRightPanel();
		navPanel.showPanel({
			id : "modifies"
		});
	}

	Label.prototype.getSelected = function() {
		return [ {
			id : "name",
			caption : "名称",
			label : "名称",
			type : "onyx/ui/form/input",
			compName : "onyx/ui/form/input",
			value : ""
		}, {
			id : "type",
			caption : "类型",
			label : "类型",
			type : "onyx/ui/form/input",
			compName : "onyx/ui/form/input",
			value : ""
		} ];
	}

	Label.prototype.convertModifyToListItem = function(modify) {
		var operate = modify.operate;
		var key = modify.key;
		switch (key) {
		case "name": {
			var name = modify.name;
			return {
				icon : "icon-" + operate,
				name : operate + "名称为：" + name
			};
		}
		case "parents": {
			var parent = modify.parent;
			return {
				icon : "icon-" + operate,
				name : operate + "父标签：" + parent
			};
		}
		case "properties": {
			var pname = modify.pname;
			return {
				icon : "icon-" + operate,
				name : operate + "属性：" + pname
			};
		}
		}
	}

	Label.prototype.getData = function() {
		return {
			title : this.title.getData(),
			groups : this.group.getData()
		}
	}

	Label.prototype.setData = function(data) {
		return this.form.setData(data);
	}

	Label.prototype.docmd = function(cmd, event) {
		switch (cmd) {
		case "save": {
			return this.docmd_save(event);
		}
		case "close": {
			history.back();
			return $.dfd();
		}
		}
	}

	Label.prototype.docmd_save = function(event) {
		if (!this.modifies || this.modifies.length == 0) {
			alert("没有任何修改！");
			return;
		}
		var self = this;
		var resource = this.options.resource;
		Api.label().save({
			kid : resource.kid,
			lid : resource.lid,
			modifies : this.modifies
		}).done(function(result) {
			self.clearModifies();
			alert(result);
		});
	}

	Label.prototype.refresh = function(options) {
		return $.dfd(this);
	}

	Label.prototype.close = function() {
		history.back();
	}

	Label.prototype.getPathes = function() {
		return [ {
			id : "root",
			caption : "Onyx",
			uri : "/"
		}, {
			id : "base",
			caption : "知识库",
			uri : "/space/base"
		}, {
			id : this.kid,
			name : this.kid,
			uri : "/base/labels/" + this.kid
		}, {
			id : this.lid,
			name : this.resource.name,
			uri : "/edit/label/" + this.lid
		} ];
	}

	return Label;
});

/**
 * Entity Edit
 */
define("onyx/edit/entity", [ "jquery", "require", "onyx/ui" ], function($,
		require) {

	var UI = require("onyx/ui");

	function Entity(options) {
		this.options = options;
		this.resource = this.options.resource;
		this.kid = this.resource.kid;
		this.eid = this.resource.id;
		this.edit = options.page;
		this.modifies = [];
		this.build(options.pdom);
	}

	Entity.prototype.build = function(pdom) {
		this.dom = $("<div class='onyx-edit-entity'></div>");
		this.dom.appendTo(pdom);
		this.layout = UI.createLayout({
			clazz : "onyx-edit-entity-form",
			on : {
				"switch" : function(event) {
					event.stopPropagation();
				},
				"modify" : this.onModify.bind(this),
				"select" : this.onSelect.bind(this)
			},
			header : {
				height : 112
			},
			body : {

			},
			pdom : this.dom
		});
		this.headerLayout = UI.createLayout({
			clazz : "onyx-edit-entity-form",
			left : {
				width : 112
			},
			right : {

			},
			pdom : this.layout.getHeader()
		});
		this.icon = UI.createIcon({
			id : "icon",
			clazz : "onyx-edit-entity-form-icon",
			icon : "icon-user-circle",
			editable : true,
			pdom : this.headerLayout.getLeft()
		});
		this.title = UI.createText({
			id : "title",
			clazz : "onyx-edit-entity-form-title",
			placeholder : "双击输入知识名称...",
			text : this.resource.name,
			editable : true,
			pdom : this.headerLayout.getRight()
		});
		this.labels = UI.createNavBar({
			id : "labels",
			theme : "bubble",
			editable : true,
			addbutton : {
				caption : "标签"
			},
			pdom : this.headerLayout.getRight()
		});
		this.navPanel = UI.createNavPanel({
			on : {
				"switch" : this.onSwitch.bind(this)
			},
			navbar : {
				active : "properties",
				theme : "browser",
				items : [ {
					id : "properties",
					caption : "属性",
					icon : "icon-home"
				} ]
			},
			pdom : this.layout.getBody()
		});
		var self = this;
		this.labels.on("switch", function(event, item) {
			self.navPanel.showPanel(item);
		})
		return this.dom;
	}

	Entity.prototype.onModify = function(event, modify) {
		if (!modify) {
			return;
		}
		this.modifies.push(modify);
		var navPanel = this.edit.getRightPanel();
		var editList = this.edit.getModifyList()
		var self = this;
		navPanel.showPanel({
			id : "modifies"
		});
	}

	Entity.prototype.onSelect = function(event, select) {
		var navPanel = this.edit.getRightPanel();
		var propertiesPanel = navPanel.showPanel({
			id : "properties"
		});
	}

	Entity.prototype.onSwitch = function(event, panel) {
		var id = panel.id;
		this.buildFormProperties(panel.id, panel.dom);
	}

	Entity.prototype.buildFormProperties = function(label, pdom) {
		if (!this.panels) {
			this.panels = {};
		}
		var panel = this.panels[label];
		if (panel) {
			// panel.refresh();
			return;
		}
		var resource = this.options.resource;
		var kid = resource.kid;
		var properties = resource.properties;
		var editboard = UI.createEditBoard({
			id : label,
			editable : true,
			datas : properties,
			pdom : pdom
		});
		this.panels[label] = editboard;
	}

	Entity.prototype.getModifies = function() {
		var result = [];
		for (var i = 0; i < this.modifies.length; i++) {
			var modify = this.modifies[i];
			var listItem = this.convertModifyToListItem(modify);
			result.push(listItem);
		}
		return result;
	}

	Entity.prototype.convertModifyToListItem = function(step) {
		var type = step.type;
		var key = step.key;
		var value = step.value;
		return {
			icon : "icon-" + type,
			name : type + ":" + key + "=" + value
		};
	}

	Entity.prototype.getData = function() {
		return {
			title : this.title.getData(),
			groups : this.group.getData()
		}
	}

	Entity.prototype.setData = function(data) {
		return this.form.setData(data);
	}

	Entity.prototype.docmd = function(cmd, event) {
		switch (cmd) {
		case "save": {
			return this.docmd_save(event);
		}
		case "close": {
			history.back();
			return $.dfd();
		}
		}
		return null;
	}

	Entity.prototype.docmd_save = function(event) {
		Api.entity(this.resource.kid).save({
			eid : this.resource.eid,
			kid : this.resource.kid,
			modifies : this.modifies
		});
	}

	Entity.prototype.refresh = function(options) {
		return $.dfd(this);
	}

	Entity.prototype.close = function() {
		history.back();
	}

	Entity.prototype.getPathes = function() {
		return [ {
			id : "root",
			caption : "Onyx",
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
			uri : "/edit/entity/" + this.eid
		} ];
	}

	return Entity;
});

/**
 * Label Edit
 */
define("onyx/edit/graph", [ "jquery", "require", "onyx/ui" ], function($,
		require) {

	var UI = require("onyx/ui");

	function Graph(options) {
		this.options = options;
		this.build(options.pdom);
	}

	Graph.prototype.build = function(pdom) {
		this.dom = $("<div class='onyx-edit-entity'></div>");
		this.dom.appendTo(pdom);
		this.layout = UI.createLayout({
			clazz : "onyx-edit",
			header : {
				height : 32
			},
			body : {},
			pdom : this.dom
		});
		this.toolbar = UI.createToolbar({
			pdom : this.layout.getHeader()
		});
		this.toolbar.createLeftButton({
			id : "layout",
			caption : "显示",
			drop : true,
			icon : "icon-layout"
		});
		this.toolbar.createLeftButton({
			id : "add",
			caption : "",
			icon : "icon-add"
		});
		this.toolbar.createMiddleButton({
			id : "preview",
			caption : "",
			icon : "icon-preview",
			style : {
				"float" : "left",
				"margin-top" : "-12px"
			}
		});
		this.toolbar.createMiddleButton({
			id : "entity",
			caption : "实体",
			drop : true,
			icon : "icon-entity"
		});
		this.toolbar.createMiddleButton({
			id : "relation",
			caption : "关系",
			drop : true,
			icon : "icon-relation"
		});
		this.toolbar.createMiddleButton({
			id : "event",
			caption : "事件",
			drop : true,
			icon : "icon-event"
		});
		this.toolbar.createMiddleButton({
			id : "indicate",
			caption : "指标",
			drop : true,
			icon : "icon-indicate"
		});
		this.toolbar.createRightButton({
			id : "save",
			caption : "",
			icon : "icon-save"
		});
		this.toolbar.createRightButton({
			id : "publish",
			caption : "",
			icon : "icon-publish"
		});
		this.toolbar.createRightButton({
			id : "close",
			caption : "",
			icon : "icon-close",
			onclick : this.close.bind(this)
		});
		this.canvas = new Canvas();
		this.canvas.build(this.layout.getBody());
		var self = this;
		return this.dom;
	}

	Graph.prototype.docmd = function(cmd, event) {
	}

	Graph.prototype.refresh = function(options) {
		return $.dfd(this);
	}

	Graph.prototype.close = function() {
		history.back();
	}

	return Label;
});