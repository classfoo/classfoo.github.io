/**
 * Label Edit
 */
define("onyx/edit/contribute", [ "jquery", "require", "onyx/ui" ], function($,
		require) {

	var UI = require("onyx/ui");

	function Label(options) {
		this.options = options;
		this.resource = options.resource;
		this.kid = this.resource.kid;
		this.lid = this.resource.lid;
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
