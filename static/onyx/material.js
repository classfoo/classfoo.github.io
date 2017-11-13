/**
 * Onyx Material Page
 */
define("onyx/material", [ "jquery", "require", "css!./material.css", "onyx/ui" ],
		function($, require) {

			var UI = require("onyx/ui");

			function Material(options) {
				this.options = options;
				this.build(options.pdom);
			}

			Material.prototype.build = function(pdom) {
				this.dom = $("<div class='onyx-material'></div>");
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
							active : "materials",
							items : [ {
								id : "materials",
								caption : "资料",
								active : true
							}, {
								id : "flows",
								caption : "数据流"
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

			Material.prototype.getRightPanel = function() {
				return this.layout.getRight();
			}

			Material.prototype.getMiddlePanel = function() {
				return this.layout.getMiddle();
			}

			Material.prototype.getLeftPanel = function() {
				return this.layout.getLeft();
			}

			Material.prototype.onSwitchLeftPanel = function(event, page) {
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

			Material.prototype.showEntityList = function(page) {
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

			Material.prototype.queryEntities = function() {
				var kid = this.options.resource.kid;
				return Api.entity(kid).list();
			}

			Material.prototype.showLabelList = function(page) {
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

			Material.prototype.queryLabels = function() {
				var kid = this.options.resource.kid;
				return Api.label(kid).list();
			}

			Material.prototype.onSwitchRightPanel = function(event) {
				this.refreshRightPanel();
			}

			Material.prototype.showProperties = function(page) {
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

			Material.prototype.getPropertyForm = function() {
				return this.propertyForm;
			}

			Material.prototype.showModifies = function(page) {
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

			Material.prototype.getModifyList = function() {
				return this.modifyList
			}

			Material.prototype.onSwitchMiddlePanel = function(event, page) {
				this.currentPage = page;
				this.refreshRightPanel();
			}

			Material.prototype.refresh = function(options) {
				return $.dfd({});
			}

			Material.prototype.refreshRightPanel = function() {
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

			Material.prototype.showPage = function(options) {
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

			Material.prototype.getOptionsId = function(options) {
				if ("label" == options.framename) {
					var resource = options.resource;
					return resource.lid;
				}
				if ("entity" == options.framename) {
					var resource = options.resource;
					return resource.eid;
				}
				if ("Material" == options.framename) {
					var resource = options.resource;
					return resource.cid;
				}
			}

			Material.prototype.docmd = function(cmd, event) {
				var middlePanel = this.layout.getMiddle();
				var page = middlePanel.getCurrentPage();
				page.component.docmd(cmd, event);
			}

			return Material;
		});
/**
 * Material Table
 */
define("onyx/material/home", [ "jquery", "require", "onyx/ui" ], function($,
		require) {

	var UI = require("onyx/ui");

	function Home(options) {
		this.options = options;
		this.resource = options.resource;
		this.kid = this.resource.kid;
		this.id = this.resource.id;
		this.modifies = [];
		this.build(options.pdom);
	}

	Home.prototype.build = function(pdom) {
		this.dom = $("<div class='onyx-material-home'></div>");
		this.dom.appendTo(pdom);
		return this.dom;
	}

	Home.prototype.refresh = function(options) {
		return $.dfd(this);
	}

	Home.prototype.getPathes = function() {
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
			uri : "/base/home/" + this.kid
		}, {
			id : this.tid,
			name : this.resource.name,
			uri : "/material/table/" + this.id
		} ];
	}

	return Home;
});

/**
 * Material Table
 */
define("onyx/material/table", [ "jquery", "require", "onyx/ui" ], function($,
		require) {

	var UI = require("onyx/ui");

	function Table(options) {
		this.options = options;
		this.resource = options.resource;
		this.kid = this.resource.kid;
		this.tid = this.resource.tid;
		this.edit = options.page;
		this.modifies = [];
		this.build(options.pdom);
	}

	Table.prototype.build = function(pdom) {
		this.dom = $("<div class='onyx-Material-table'></div>");
		this.dom.appendTo(pdom);
		return this.dom;
	}

	Table.prototype.refreshNavPanelByModify = function(modify) {
		var navPanel = this.edit.getRightPanel();
		navPanel.showPanel({
			id : "modifies"
		});
	}

	Table.prototype.onSelect = function(event, select) {
		var navPanel = this.edit.getRightPanel();
		var propertiesPanel = navPanel.showPanel({
			id : "properties"
		});
	}

	Table.prototype.onSwitch = function(event, panel) {
		var id = panel.id;
		this.buildFormProperties(panel.id, panel.dom);
	}

	Table.prototype.getModifies = function() {
		var result = [];
		for (var i = 0; i < this.modifies.length; i++) {
			var modify = this.modifies[i];
			var listItem = this.convertModifyToListItem(modify);
			result.push(listItem);
		}
		return result;
	}

	Table.prototype.clearModifies = function() {
		this.modifies = [];
		var navPanel = this.edit.getRightPanel();
		navPanel.showPanel({
			id : "modifies"
		});
	}

	Table.prototype.getSelected = function() {
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

	Table.prototype.convertModifyToListItem = function(modify) {
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

	Table.prototype.getData = function() {
		return {
			title : this.title.getData(),
			groups : this.group.getData()
		}
	}

	Table.prototype.setData = function(data) {
		return this.form.setData(data);
	}

	Table.prototype.docmd = function(cmd, event) {
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

	Table.prototype.docmd_save = function(event) {
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

	Table.prototype.refresh = function(options) {
		return $.dfd(this);
	}

	Table.prototype.close = function() {
		history.back();
	}

	Table.prototype.getPathes = function() {
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
			uri : "/base/home/" + this.kid
		}, {
			id : this.tid,
			name : this.resource.name,
			uri : "/material/table/" + this.tid
		} ];
	}

	return Table;
});