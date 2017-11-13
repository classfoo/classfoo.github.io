/**
 * Onyx UI Framework
 */
define("onyx/ui", [ "jquery", "require", "css!./ui.css", "onyx/utils",
		"page/page", "onyx/ui/layout", "onyx/ui/toolbar", "onyx/ui/navbar",
		"onyx/ui/navpanel", "onyx/ui/multipage", "onyx/ui/searchbox",
		"onyx/ui/breadcrumb", "onyx/ui/list", "onyx/ui/datalist",
		"onyx/ui/timeline", "onyx/ui/image", "onyx/ui/button", "onyx/ui/icon",
		"onyx/ui/showboard", "onyx/ui/editboard", "onyx/ui/slideboard",
		"onyx/ui/uploadboard", "onyx/ui/floatpanel", "onyx/ui/menu",
		"onyx/ui/explorer", "onyx/ui/text", "onyx/ui/textarea",
		"onyx/ui/pagelayout", "onyx/ui/editlayout", "onyx/ui/resourcebrowser",
		"onyx/ui/dialog", "onyx/ui/form", "onyx/ui/form/input",
		"onyx/ui/form/items", "onyx/ui/form/item", "onyx/ui/submiter",
		"onyx/ui/labelcard" ], function($, require) {

	var Utils = require("onyx/utils");

	var Page = require("page/page");

	function UI() {

	}

	/**
	 * Redirect to uri
	 */
	UI.redirect = function(uri) {
		Page(uri);
	}

	/**
	 * create Layout
	 */
	UI.createLayout = function(options) {
		var Layout = require("onyx/ui/layout");
		return new Layout(options);
	};

	/**
	 * create Page Layout
	 */
	UI.createPageLayout = function(options) {
		var PageLayout = require("onyx/ui/pagelayout");
		return new PageLayout(options);
	};

	/**
	 * create Edit Layout
	 */
	UI.createEditLayout = function(options) {
		var EditLayout = require("onyx/ui/editlayout");
		return new EditLayout(options);
	};

	/**
	 * create Navbar
	 */
	UI.createDialog = function(options) {
		var Dialog = require("onyx/ui/dialog");
		return new Dialog(options);
	}

	/**
	 * create Form
	 */
	UI.createForm = function(options) {
		var Form = require("onyx/ui/form");
		return new Form(options);
	}

	/**
	 * create Form Input
	 */
	UI.createFormInput = function(options) {
		var FormInput = require("onyx/ui/form/input");
		return new FormInput(options);
	}

	/**
	 * create Form Item
	 */
	UI.createFormItem = function(options) {
		var FormItem = require("onyx/ui/form/item");
		return new FormItem(options);
	}

	/**
	 * create Form Items
	 */
	UI.createFormItems = function(options) {
		var FormItems = require("onyx/ui/form/items");
		return new FormItems(options);
	}

	/**
	 * create Text
	 */
	UI.createText = function(options) {
		var Text = require("onyx/ui/text");
		return new Text(options);
	}

	/**
	 * create TextArea
	 */
	UI.createTextArea = function(options) {
		var TextArea = require("onyx/ui/textarea");
		return new TextArea(options);
	}

	/**
	 * create Navbar
	 */
	UI.createNavBar = function(options) {
		var NavBar = require("onyx/ui/navbar");
		return new NavBar(options);
	}

	/**
	 * create NavPanel
	 */
	UI.createNavPanel = function(options) {
		var NavPanel = require("onyx/ui/navpanel");
		return new NavPanel(options);
	}

	/**
	 * create MultiPage
	 */
	UI.createMultiPage = function(options) {
		var MultiPage = require("onyx/ui/multipage");
		return new MultiPage(options);
	}

	/**
	 * create Toolbar
	 */
	UI.createToolBar = function(options) {
		var ToolBar = require("onyx/ui/toolbar");
		return new ToolBar(options);
	};

	/**
	 * create Button
	 */
	UI.createButton = function(options) {
		var Button = require("onyx/ui/button");
		return new Button(options);
	};

	/**
	 * create Icon
	 */
	UI.createIcon = function(options) {
		var Icon = require("onyx/ui/icon");
		return new Icon(options);
	};

	/**
	 * create SearchBox
	 */
	UI.createSearchBox = function(options) {
		var SearchBox = require("onyx/ui/searchbox");
		return new SearchBox(options);
	};

	/**
	 * create BreadCrumb
	 */
	UI.createBreadCrumb = function(options) {
		var BreadCrumb = require("onyx/ui/breadcrumb");
		return new BreadCrumb(options);
	};

	/**
	 * create List
	 */
	UI.createList = function(options) {
		var List = require("onyx/ui/list");
		return new List(options);
	}

	/**
	 * create DataList
	 */
	UI.createDataList = function(options) {
		var DataList = require("onyx/ui/datalist");
		return new DataList(options);
	}

	/**
	 * create TimeLine
	 */
	UI.createTimeLine = function(options) {
		var TimeLine = require("onyx/ui/timeline");
		return new TimeLine(options);
	}

	UI.createImage = function(options) {
		var Image = require("onyx/ui/image");
		return new Image(options);
	}

	UI.createShowBoard = function(options) {
		var ShowBoard = require("onyx/ui/showboard");
		return new ShowBoard(options);
	}

	UI.createEditBoard = function(options) {
		var EditBoard = require("onyx/ui/editboard");
		return new EditBoard(options);
	}

	UI.createSlideBoard = function(options) {
		var SlideBoard = require("onyx/ui/slideboard");
		return new SlideBoard(options);
	}

	UI.createUploadBoard = function(options) {
		var UploadBoard = require("onyx/ui/uploadboard");
		return new UploadBoard(options);
	}

	UI.createFloatPanel = function(options) {
		var FloatPanel = require("onyx/ui/floatpanel");
		return new FloatPanel(options);
	}

	UI.createMenu = function(options) {
		var Menu = require("onyx/ui/menu");
		return new Menu(options);
	}

	UI.createExplorer = function(options) {
		var Explorer = require("onyx/ui/explorer");
		return new Explorer(options);
	}

	UI.createResourceBrowser = function(options) {
		var ResourceBrowser = require("onyx/ui/resourcebrowser");
		return new ResourceBrowser(options);
	}

	UI.createSubmiter = function(options) {
		var createSubmiter = require("onyx/ui/submiter");
		return new createSubmiter(options);
	}

	UI.createLabelCard = function(options) {
		var LabelCard = require("onyx/ui/labelcard");
		return new LabelCard(options);
	}

	return UI;
});

/**
 * Onyx UI Framework Widget
 */
define("onyx/ui/widget", [ "jquery", "require", "page/page" ], function($,
		require) {

	var Page = require("page/page");

	function Widget(options) {
		this.options = options || {};
		this.id = this.options.id || this.constructor.name;
		this.data = this.options.data;
		this.pdom = this.options.pdom;
		this.parent = this.options.parent;
		this.dom = this.build(this.pdom);
		this.dom.data(this);
		this.initStyles(this.options, this.dom);
		this.initEvents();
		this.initData();
	}

	Widget.prototype.initStyles = function(options, dom) {
		var style = options.style;
		if (style != null) {
			$.each(style, function(key, value) {
				dom.css(key, value);
			});
		}
		var clazz = options.clazz;
		if (clazz != null) {
			dom.addClass(clazz);
		}
		if (options.hidden) {
			dom.css("display", "none");
		}
	}

	Widget.prototype.initEvents = function() {
		var ons = this.options.on;
		if (ons) {
			for ( var on in ons) {
				this.on(on, ons[on]);
			}
		}
		var uri = this.options.uri;
		if (uri) {
			this.on("click", function() {
				Page(uri)
			});
		}
		var hover = this.options.hover;
		if (hover) {
			this.dom.on("mouseover", this.onMouseOver.bind(this))
			this.dom.on("mouseout", this.onMouseOver.bind(this))
		}
	}

	Widget.prototype.initData = function() {
		if (this.data) {
			this.dom.data(this.data);
		}
	}

	Widget.prototype.addClass = function(dom, prefix) {
		var clazz = prefix;
		var theme = null;
		var custom = this.options.clazz;
		var arglen = arguments.length;
		if (this.options.theme) {
			theme = clazz + '-' + this.options.theme;
		}
		for (var i = 2; i < arglen; i++) {
			var arg = arguments[i];
			if (!arg) {
				break;
			}
			clazz += '-' + arg;
			if (this.options.clazz) {
				custom += '-' + arg;
			}
			if (this.options.theme) {
				theme += '-' + arg;
			}
		}
		dom.addClass(clazz);
		if (this.options.clazz) {
			dom.addClass(custom);
		}
		if (this.options.theme) {
			dom.addClass(theme);
		}
	}

	Widget.prototype.removeClass = function(dom, prefix) {
		var clazz = prefix;
		var theme = null;
		var custom = this.options.clazz;
		var arglen = arguments.length;
		if (this.options.theme) {
			theme = clazz + '-' + this.options.theme;
		}
		for (var i = 2; i < arglen; i++) {
			var arg = arguments[i];
			if (!arg) {
				break;
			}
			clazz += '-' + arg;
			if (this.options.clazz) {
				custom += '-' + arg;
			}
			if (this.options.theme) {
				theme += '-' + arg;
			}
		}
		dom.removeClass(clazz);
		if (this.options.clazz) {
			dom.removeClass(custom);
		}
		if (this.options.theme) {
			dom.removeClass(theme);
		}
	}

	Widget.prototype.hasClass = function(dom, prefix) {
		var clazz = this.getClass(prefix, arguments);
		return dom.hasClass(clazz);
	}

	Widget.prototype.find = function(dom, prefix) {
		var clazz = this.getClass(prefix, arguments);
		return dom.find("." + clazz);
	}

	Widget.prototype.getClass = function(prefix, args) {
		var clazz = prefix;
		if (this.options.theme) {
			clazz += '-' + this.options.theme;
		}
		var arglen = args.length;
		for (var i = 2; i < arglen; i++) {
			var arg = args[i];
			if (!arg) {
				break;
			}
			clazz += '-' + arg;
		}
		return clazz;
	}

	/**
	 * get event target by class
	 */
	Widget.prototype.getEventTarget = function(event, prefix, args) {
		if (event.target == event.currentTarget) {
			if (this.hasClass(this.dom, prefix, args)) {
				return this.dom;
			}
			return null;
		}
		var target = $(event.target);
		while (target && !this.hasClass(target, prefix, args)) {
			target = target.parent();
			if (target == null || target.length == 0) {
				return null;
			}
			if (target[0] === event.currentTarget) {
				return null;
			}
		}
		return target;
	}

	Widget.prototype.setVisible = function(visbile) {
		if (visbile) {
			this.dom.css("display", "unset");
		} else {
			this.dom.css("display", "none");
		}
	}

	Widget.prototype.show = function(id) {
		this.id = id;
	}

	Widget.prototype.getId = function() {
		return this.id;
	}

	Widget.prototype.setId = function(id) {
		this.id = id;
	}

	Widget.prototype.getDom = function() {
		return this.dom;
	}

	Widget.prototype.getPDom = function() {
		return this.pdom;
	}

	Widget.prototype.appendTo = function(pdom) {
		this.dom.appendTo(pdom);
	}

	Widget.prototype.insertBefore = function(dom) {
		this.dom.insertBefore(dom);
	}

	Widget.prototype.insertAfter = function(dom) {
		this.dom.insertAfter(dom);
	}

	Widget.prototype.getDatas = function(datas, args) {
		if (!datas) {
			return $.dfd();
		}
		if (typeof (datas) == "function") {
			return datas(args);
		}
		return $.dfd(datas);
	}

	Widget.prototype.on = function(event, func) {
		this.dom.on(event, func);
	}

	Widget.prototype.onMouseOver = function(event) {
		var target = this.getEventTarget(event, this.options.hover);
		if (!target) {
			return;
		}
		if (this.hoverItem) {
			this.removeClass(this.hoverItem, this.options.hover, "over");
		}
		this.hoverItem = target;
		this.addClass(this.hoverItem, this.options.hover, "over");
	}

	Widget.prototype.onMouseOut = function(event) {
		var target = this.getEventTarget(event, this.options.hover);
		if (!target) {
			return;
		}
		if (this.hoverItem) {
			this.removeClass(this.hoverItem, this.options.hover, "over");
		}
	}

	Widget.prototype.fire = function(event, options) {
		return this.dom.trigger(event, options);
	}

	Widget.prototype.docmd = function(event, button) {
		if (!this.options.cmd) {
			return;
		}
		var button = button || this.getEventTarget(event, "onyx-ui-button");
		if (!button) {
			return;
		}
		var Button = button.data();
		this.options.cmd(Button.id, event);
	}

	Widget.prototype.redirect = function(uri) {
		Page(uri);
	}

	return Widget;
});

/**
 * Onyx UI Framework Toolbar
 */
define("onyx/ui/toolbar", [ "jquery", "require", "onyx/ui/widget",
		"onyx/utils", "onyx/ui/layout", "onyx/ui/button" ],
		function($, require) {

			var Widget = require("onyx/ui/widget");

			var Utils = require("onyx/utils");

			var Layout = require("onyx/ui/layout");

			var Button = require("onyx/ui/button");

			function ToolBar(options) {
				Widget.call(this, options);
			}

			ToolBar.prototype.build = function(pdom) {
				this.dom = $("<div/>");
				this.addClass(this.dom, "onyx-ui-toolbar");
				this.dom.appendTo(pdom);
				if (this.options.left || this.options.middle
						|| this.options.right) {
					this.buildLayout();
				}
				this.dom.on("click", this.docmd.bind(this));
				return this.dom;
			}

			ToolBar.prototype.buildLayout = function() {
				this.layout = new Layout({
					clazz : "onyx-ui-toolbar-layout",
					left : {},
					middle : {},
					right : {},
					pdom : this.dom
				});
				if (this.options.left) {
					var count = this.options.left.length;
					for (var i = 0; i < count; i++) {
						this.createLeftButton(this.options.left[i]);
					}
				}
				if (this.options.middle) {
					var count = this.options.middle.length;
					for (var i = 0; i < count; i++) {
						this.createMiddleButton(this.options.middle[i]);
					}
				}
				if (this.options.right) {
					var count = this.options.right.length;
					for (var i = 0; i < count; i++) {
						this.createRightButton(this.options.right[i]);
					}
				}
			}

			ToolBar.prototype.createButton = function(options) {
				return new Button($.extend(options, {
					pdom : this.dom
				}));
			}

			ToolBar.prototype.createLeftButton = function(options) {
				return new Button($.extend(options, {
					pdom : this.layout.getLeft()
				}));
			}

			ToolBar.prototype.createMiddleButton = function(options) {
				return new Button($.extend(options, {
					pdom : this.layout.getMiddle()
				}));
			}

			ToolBar.prototype.createRightButton = function(options) {
				return new Button($.extend(options, {
					pdom : this.layout.getRight()
				}));
			}

			ToolBar.prototype.docmd = function(event) {
				if (!this.options.cmd) {
					return;
				}
				var button = this.getEventTarget(event, "onyx-ui-button");
				if (!button) {
					return;
				}
				var Button = button.data();
				this.options.cmd(Button.id, event);
			}

			Utils.inherits(ToolBar, Widget);

			return ToolBar;
		});

/**
 * Onyx UI Framework Toolbar
 */
define("onyx/ui/dialog", [ "jquery", "require", "onyx/ui/widget", "onyx/utils",
		"onyx/ui/layout", "onyx/ui/button" ], function($, require) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	var Layout = require("onyx/ui/layout");

	var Button = require("onyx/ui/button");

	function Dialog(options) {
		Widget.call(this, options);
	}

	Dialog.prototype.build = function(pdom) {
		if (this.options.modal) {
			this.modal = $("<div></div>");
			this.addClass(this.modal, "onyx-ui-dialog", "modal");
			this.modal.appendTo($("body"));
		}
		this.dom = $("<div></div>");
		this.addClass(this.dom, "onyx-ui-dialog");
		var width = this.options.width || 300;
		this.dom.css("width", width);
		this.dom.css("margin-left", -width / 2);
		var height = this.options.height || 200
		this.dom.css("height", height);
		this.dom.css("margin-top", -height / 2);
		this.dom.appendTo($("body"));
		this.layout = new Layout({
			clazz : "onyx-ui-dialog-layout",
			header : {
				height : 48
			},
			body : {},
			footer : {
				height : 48
			},
			pdom : this.dom
		});
		this.title = $("<span/>");
		this.addClass(this.title, "onyx-ui-dialog", "title");
		this.title.text(this.options.title);
		this.title.appendTo(this.layout.getHeader());
		this.buildContent(this.layout.getBody());
		this.buildButtons();
		return this.dom;
	}

	Dialog.prototype.buildContent = function(pdom) {
		var content = this.options.content;
		if (content && typeof (content) === "function") {
			this.content = content($.extend({
				pdom : pdom
			}, this.options));
		}
	}

	Dialog.prototype.buildButtons = function() {
		var buttons = this.options.buttons;
		if (!buttons) {
			return;
		}
		for (var i = 0; i < buttons.length; i++) {
			var options = buttons[i];
			if (typeof (options) == "string") {
				this.buildInnerButton(options);
			} else if (typeof (options) == "map") {
				var button = new Button($.extend({
					pdom : this.layout.getFooter()
				}, options));
			}
		}
	}

	Dialog.prototype.buildInnerButton = function(name) {
		if (name === "ok") {
			this.buildOkButton();
		} else if (name === "cancel") {
			this.buildCancelButton();
		} else if (name === "close") {
			this.buildCloseButton();
		}
	}

	Dialog.prototype.buildOkButton = function() {
		var button = new Button({
			clazz : "onyx-ui-button-blue",
			caption : "确定",
			pdom : this.layout.getFooter(),
			on : {
				click : this.onOkButtonClick.bind(this)
			}
		});
	}

	Dialog.prototype.buildCancelButton = function() {
		var button = new Button({
			clazz : "onyx-ui-button-gray",
			caption : "取消",
			pdom : this.layout.getFooter(),
			on : {
				click : this.onCancelButtonClick.bind(this)
			}
		});
	}

	Dialog.prototype.buildCloseButton = function() {
		var button = new Button({
			clazz : "onyx-ui-button-gray",
			caption : "关闭",
			pdom : this.layout.getFooter(),
			on : {
				click : this.onCloseButtonClick.bind(this)
			}
		});
	}

	Dialog.prototype.onOkButtonClick = function() {
		this.fire("ok", this);
		this.close();
	}

	Dialog.prototype.onCloseButtonClick = function() {
		this.fire("close", this);
		this.close();
	}

	Dialog.prototype.onCancelButtonClick = function(cmd) {
		this.fire("cancel", this);
		this.close();
	}

	Dialog.prototype.close = function() {
		this.dom.remove();
		if (this.modal) {
			this.modal.remove();
		}
	}

	Dialog.prototype.getContent = function() {
		return this.content;
	}

	Utils.inherits(Dialog, Widget);

	return Dialog;
});

/**
 * Onyx UI Framework Button
 */
define(
		"onyx/ui/button",
		[ "jquery", "require", "onyx/ui/widget", "onyx/utils" ],
		function($, require) {

			var Widget = require("onyx/ui/widget");

			var Utils = require("onyx/utils");

			function Button(options) {
				Widget.call(this, options);
			}

			Button.prototype.build = function(pdom) {
				this.dom = $("<span class='unselectable'></span>");
				this.addClass(this.dom, "onyx-ui-button");
				var caption = this.options.caption;
				if (caption) {
					this.dom.text(caption);
				}
				this.dom.addClass("iconfont");
				this.dom.addClass(this.options.icon);
				this.dom.appendTo(this.pdom);
				if (this.options.drop) {
					var drop = $("<span class='unselectable'></span>");
					this.addClass(drop, "onyx-ui-button", "drop");
					drop.addClass("iconfont");
					drop.addClass("icon-caret-down");
					drop.appendTo(this.pdom);
				}
				this.dom.on("click", this.docmd.bind(this));
				if (this.options.upload) {
					this.buildUpload();
				}
				return this.dom;
			}

			Button.prototype.buildUpload = function() {
				var upload = $("<input class='hidden' type='file' id='upload' name='image' />");
				upload.appendTo(this.pdom);
				var self = this;
				upload.on("change", function(event) {
					self.fire("upload", event.target.files[0]);
				});
				this.dom.on("click", function(event) {
					event.preventDefault();
					upload.trigger('click');
				})
			}

			Button.prototype.docmd = function(event) {
				if (!this.options.cmd) {
					return;
				}
				this.options.cmd(this.options.id, event);
			}

			Utils.inherits(Button, Widget);

			return Button;
		});

/**
 * Onyx UI Framework Icon
 */
define("onyx/ui/icon", [ "jquery", "require", "onyx/ui/widget", "onyx/utils" ],
		function($, require) {

			var Widget = require("onyx/ui/widget");

			var Utils = require("onyx/utils");

			function Icon(options) {
				Widget.call(this, options);
			}

			Icon.prototype.build = function(pdom) {
				this.dom = $("<a/>");
				this.addClass(this.dom, "onyx-ui-icon");
				this.dom.appendTo(pdom);
				this.span = $("<span class='iconfont'></span>");
				this.span.addClass(this.options.icon);
				this.span.appendTo(this.dom);
				if (this.options.caption) {
					this.text = $("<span></span>");
					this.text.text(this.options.caption);
					this.text.appendTo(this.dom);
				}
				return this.dom;
			}

			Utils.inherits(Icon, Widget);

			return Icon;
		});

/**
 * Onyx UI Framework Text
 */
define("onyx/ui/text", [ "jquery", "require", "onyx/ui/widget", "onyx/utils" ],
		function($, require) {

			var Widget = require("onyx/ui/widget");

			var Utils = require("onyx/utils");

			function Text(options) {
				this.text = options.text;
				this.placeholder = options.placeholder;
				Widget.call(this, options);
			}

			Text.prototype.build = function(pdom) {
				this.dom = $("<div></div>");
				this.addClass(this.dom, "onyx-ui-text");
				this.dom.appendTo(pdom);
				if (this.options.editable) {
					this.dom.on("dblclick", this.onDblClick.bind(this));
					this.dom.on("mouseover", this.onMouseOver.bind(this));
					this.dom.on("mouseout", this.onMouseOut.bind(this));
					this.dom.on("focusout", this.onBlur.bind(this));
				}
				this.span = $("<span/>");
				this.addClass(this.span, "onyx-ui-text", "span");
				this.span.appendTo(this.dom);
				if (this.text && this.text != "") {
					this.span.text(this.text);
				} else {
					if (this.options.editable && this.placeholder) {
						this.span.text(this.placeholder);
					}
				}
				return this.dom;
			}

			Text.prototype.onDblClick = function(event) {
				event.stopPropagation();
				this.startEdit();
			}

			Text.prototype.onMouseOver = function(event) {
				this.dom.addClass("onyx-ui-text-editable");
			}

			Text.prototype.onMouseOut = function(event) {
				event.stopPropagation();
				this.dom.removeClass("onyx-ui-text-editable");
			}

			Text.prototype.onBlur = function(event) {
				event.stopPropagation();
				this.endEdit();
			}

			Text.prototype.startEdit = function() {
				if (!this.options.editable) {
					return;
				}
				if (!this.input) {
					this.input = $("<input></input>");
					this.addClass(this.input, "onyx-ui-text", "input");
					this.input.appendTo(this.dom);
				}
				this.input.val(this.span.text());
				this.input.css("display", "block");
				this.span.css("display", "none");
				this.input.focus();
			}

			Text.prototype.endEdit = function() {
				if (!this.options.editable) {
					return;
				}
				var text = this.input.val();
				if (text == "" || this.text == text) {
					this.span.css("display", "block");
					this.input.css("display", "none");
					return;
				}
				this.span.text(text);
				this.span.css("display", "block");
				this.input.css("display", "none");
				if (this.text && this.text != "") {
					this.fire("modify", {
						type : "update",
						key : this.getId(),
						value : text,
						old : this.text
					});
				} else {
					this.fire("modify", {
						type : "create",
						key : this.getId(),
						value : text
					});
				}
				this.text = text;
			}

			Utils.inherits(Text, Widget);

			return Text;
		});

/**
 * Onyx UI Framework Icon
 */
define("onyx/ui/textarea", [ "jquery", "require", "onyx/ui/widget",
		"onyx/utils" ], function($, require) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	function TextArea(options) {
		Widget.call(this, options);
	}

	TextArea.prototype.build = function(pdom) {
		this.dom = $("<div/>");
		this.addClass(this.dom, "onyx-ui-textarea");
		this.dom.appendTo(pdom);
		this.textarea = $("<textarea/>");
		this.textarea.on("change", this.onChange.bind(this));
		if (this.options.placeholder) {
			this.textarea.attr("placeholder", this.options.placeholder);
		}
		var name = this.options.name || this.options.id;
		if (name) {
			this.textarea.attr("name", name);
		}
		this.addClass(this.textarea, "onyx-ui-textarea", "area");
		this.textarea.appendTo(this.dom);
		return this.dom;
	}

	TextArea.prototype.onChange = function(event) {
		this.fire("modify", {
			type : "update",
			key : this.getId(),
			value : this.textarea.val()
		});
	}
	Utils.inherits(TextArea, Widget);

	return TextArea;
});
/**
 * Onyx UI Framework Navbar
 */
define(
		"onyx/ui/navbar",
		[ "jquery", "require", "onyx/ui/widget", "onyx/utils" ],
		function($, require) {

			var Widget = require("onyx/ui/widget");

			var Utils = require("onyx/utils");

			function NavBar(options) {
				this.items = [];
				this.clazz = options.clazz;
				Widget.call(this, options);
				if (this.options.active) {
					this.setActive(this.options.active);
				}
			}

			NavBar.prototype.build = function(pdom) {
				this.dom = $("<div></div>");
				this.addClass(this.dom, "onyx-ui-navbar");
				this.dom.appendTo(pdom);
				if (this.clazz != null) {
					this.dom.addClass(this.clazz);
				}
				this.buildItems(this.options.items);
				this.dom.on("mouseover", this.onMouseOver.bind(this));
				this.dom.on("mouseout", this.onMouseOut.bind(this));
				this.dom.on("click", this.onClick.bind(this));
				this.dom.on("dblclick", this.onDblClick.bind(this));
				this.dom.on("dragover", this.onDragOver.bind(this))
				return this.dom;
			}

			NavBar.prototype.buildItems = function(items) {
				if (!items) {
					this.buildAddButton();
					return;
				}
				var activeItem = null;
				for (var i = 0; i < items.length; i++) {
					var item = items[i];
					item = this.buildItem(item);
					item.dom.appendTo(this.dom);
					this.items.push(item);
				}
				this.buildAddButton();
			}

			NavBar.prototype.buildItem = function(item) {
				var span = $("<span/>");
				this.addClass(span, "onyx-ui-navbar", "item");
				this.initStyles(item, span);
				span.addClass("iconfont");
				span.addClass(item.icon);
				var text = $("<span/>");
				this.addClass(text, "onyx-ui-navbar", "item", "text");
				text.text(item.caption || item.name);
				text.appendTo(span);
				item.dom = span;
				span.data(item);
				return item;
			}

			NavBar.prototype.buildAddButton = function() {
				if (!this.options.editable) {
					return;
				}
				this.button = $("<span class='iconfont icon-add unselectable'/>");
				this.addClass(this.button, "onyx-ui-navbar", "add");
				var caption = this.options.addbutton ? this.options.addbutton.caption
						: "添加"
				this.button.text(caption);
				this.button.appendTo(this.dom);
				this.button.on("click", this.onAddItem.bind(this));
			}

			NavBar.prototype.onMouseOver = function(event) {
				var target = this.getEventTarget(event, "onyx-ui-navbar",
						"item");
				if (!target) {
					return;
				}
				if (this.hoverItem) {
					this.removeClass(this.hoverItem, "onyx-ui-navbar", "item",
							"over");
				}
				this.hoverItem = target;
				this.addClass(this.hoverItem, "onyx-ui-navbar", "item", "over");
			}

			NavBar.prototype.onDragOver = function(event) {
			}

			NavBar.prototype.onMouseOut = function(event) {
				var target = this.getEventTarget(event, "onyx-ui-navbar",
						"item");
				if (!target) {
					return;
				}
				if (this.hoverItem) {
					this.removeClass(this.hoverItem, "onyx-ui-navbar", "item",
							"over");
				}
			}

			NavBar.prototype.onClick = function(event) {
				var target = this.getEventTarget(event, "onyx-ui-navbar",
						"item");
				if (!target) {
					return;
				}
				var item = target.data();
				this._setActive(item, true);
				if (this.editItem && (item != this.editItem)) {
					this.endEditItem(this.editItem);
				}
				// switch multipage
				if (item.uri) {
					this.redirect(item.uri);
				}
			}

			NavBar.prototype.onDblClick = function(event) {
				if (!this.options.editable) {
					return;
				}
				var target = this.getEventTarget(event, "onyx-ui-navbar",
						"item");
				if (!target) {
					return;
				}
				var item = target.data();
				this.startEditItem(item);
			}

			NavBar.prototype.startEditItem = function(item) {
				if (!this.options.editable) {
					return;
				}
				if (this.editItem) {
					this.endEditItem(this.editItem);
				}
				var textdom = this.find(item.dom, "onyx-ui-navbar", "item",
						"text");
				var value = textdom.text();
				textdom.text("");
				var editor = $("<div/>");
				this.addClass(editor, "onyx-ui-navbar", "item", "edit");
				editor.appendTo(item.dom);
				var input = $("<input/>");
				this.addClass(input, "onyx-ui-navbar", "item", "edit", "input");
				input.val(value);
				input.appendTo(editor);
				input.focus();
				var self = this;
				var button_ok = $("<span class='iconfont icon-check'></span>");
				this
						.addClass(button_ok, "onyx-ui-navbar", "item", "edit",
								"ok");
				button_ok.appendTo(editor);
				button_ok.on("click", function(event) {
					self.endEditItem(item);
					var value = input.val();
					textdom.text(value);
					event.stopPropagation();
				});
				var button_close = $("<span class='iconfont icon-close'></span>");
				this.addClass(button_close, "onyx-ui-navbar", "item", "edit",
						"close");
				button_close.appendTo(editor);
				button_close.on("click", function(event) {
					self.endEditItem(item);
					event.stopPropagation();
				});
				this.editItem = item;
			}

			NavBar.prototype.endEditItem = function(item) {
				if (!this.options.editable) {
					return;
				}
				var dom = item.dom;
				var inputdom = this.find(dom, "onyx-ui-navbar", "item", "edit",
						"input");
				var value = inputdom.val();
				if (!value || value == "") {
					this.removeItem(item.id);
					return;
				}
				this.find(dom, "onyx-ui-navbar", "item", "edit").remove();
				var textdom = this.find(item.dom, "onyx-ui-navbar", "item",
						"text");
				var oldvalue = item.caption || item.name;
				textdom.text(value);
				item.name = value;
				item.caption = value;
				item.dom.data(item);
				this.editItem = null;
				if (!oldvalue || oldvalue == "") {
					this.fire("modify", {
						type : "create",
						key : this.getId(),
						value : value
					});
				} else {
					this.fire("modify", {
						type : "update",
						key : this.getId(),
						value : value,
						old : oldvalue
					});
				}
			}

			NavBar.prototype.onAddItem = function(event) {
				var item = this.addItem({});
				this.startEditItem(item);
				this._setActive(item, true);
			}

			NavBar.prototype.setActive = function(itemid) {
				for (var i = 0; i < this.items.length; i++) {
					var item = this.items[i];
					if (item.id == itemid) {
						this._setActive(item, true);
						return;
					}
				}
			}

			NavBar.prototype._setActive = function(item, fireEvent) {
				if (this.activeItem) {
					this.removeClass(this.activeItem.dom, "onyx-ui-navbar",
							"item", "active");
				}
				this.activeItem = item;
				this.addClass(this.activeItem.dom, "onyx-ui-navbar", "item",
						"active");
				if (fireEvent) {
					// if (item.uri) {
					// var stateObject = {};
					// history.pushState(stateObject, item.caption, item.uri);
					// }
					this.fire("switch", item);
					this.fire("select", item);
				}
			}

			NavBar.prototype.getActive = function() {
				return this.activeItem;
			}

			NavBar.prototype.removeItem = function(itemid) {
				for (var i = this.items.length - 1; i >= 0; i--) {
					var item = this.items[i];
					if (item && item.id && itemid != item.id) {
						continue;
					}
					delete this.items[i];
					item.dom.remove();
					this.editItem = null;
					return item;
				}
				return null;
			}

			NavBar.prototype.addItem = function(options) {
				var item = this.buildItem(options);
				if (this.button) {
					item.dom.insertBefore(this.button);
				} else {
					item.dom.appendTo(this.dom);
				}
				this.items.push(item);
				return item;
			}

			NavBar.prototype.modifyItem = function(options) {
				for (var i = 0; i < this.items.length; i++) {
					var item = this.items[i];
					if (item.id === options.id) {
						if (options.newid) {
							item.id = options.newid;
						}
						if (options.caption) {
							item.caption = options.caption;
							if (item.dom) {
								item.dom.text(item.caption);
							}
						}
						return $.dfd(item);
					}
				}
				return $.dfd();
			}

			NavBar.prototype.showItem = function(options, fireEvent) {
				// check if item exists
				for (var i = 0; i < this.items.length; i++) {
					var item = this.items[i];
					if (item.id === options.id) {
						this._setActive(item, fireEvent);
						return $.dfd(item);
					}
				}
				// add item
				var item = this.addItem(options);
				this._setActive(item, fireEvent);
				return $.dfd(item);
			}

			Utils.inherits(NavBar, Widget);

			return NavBar;
		});

/**
 * Onyx UI Frameworkd NavPanel
 */
define("onyx/ui/navpanel",
		[ "jquery", "require", "onyx/ui/widget", "onyx/utils",
				"onyx/ui/layout", "onyx/ui/navbar", "onyx/ui/multipage" ],
		function($, require) {

			var Widget = require("onyx/ui/widget");

			var Utils = require("onyx/utils");

			var Layout = require("onyx/ui/layout");

			var NavBar = require("onyx/ui/navbar");

			var MultiPage = require("onyx/ui/multipage");

			function NavPanel(options) {
				Widget.call(this, options);
				if (this.options.navbar && this.options.navbar.active) {
					this.navbar.setActive(this.options.navbar.active);
				}
			}

			NavPanel.prototype.build = function(pdom) {
				this.dom = $("<div/>");
				this.addClass(this.dom, "onyx-ui-navpanel");
				this.dom.appendTo(pdom);
				this.layout = new Layout({
					clazz : "onyx-ui-navpanel-layout",
					header : {
						height : 28
					},
					body : {

					},
					pdom : this.dom
				});
				this.navbar = new NavBar($.extend({
					on : {
						"switch" : this.onNavBarSwitch.bind(this)
					},
					theme : "navpanel",
					pdom : this.layout.getHeader()
				}, this.options.navbar));
				return this.dom;
			}

			NavPanel.prototype.onNavBarSwitch = function(event, item) {
				event.stopPropagation();
				if (!this.multiPage) {
					this.multiPage = new MultiPage({
						pdom : this.layout.getBody()
					});
				}
				var self = this;
				this.multiPage.showPage(item).done(function(page) {
					self.fire("switch", page);
				});
			}

			NavPanel.prototype.getNavBar = function() {
				return this.navbar;
			}

			NavPanel.prototype.getMultiPage = function() {
				return this.multiPage;
			}

			NavPanel.prototype.showPanel = function(options) {
				var dfd = $.Deferred();
				var self = this;
				this.navbar.showItem(options, false);
				this.multiPage.showPage(options).done(function(page) {
					dfd.resolve(page);
				});
				return dfd.promise();
			}

			NavPanel.prototype.getPanel = function(panelid) {
				return this.getMultiPage().getPage(panelid);
			}

			NavPanel.prototype.getCurrentPage = function() {
				return this.getMultiPage().getCurrentPage();
			}

			NavPanel.prototype.getCurrentItem = function() {
				return this.getNavBar().getCurrentItem();
			}

			Utils.inherits(NavPanel, Widget);

			return NavPanel;
		});

/**
 * Onyx UI Framework Layout
 */
define(
		"onyx/ui/layout",
		[ "jquery", "require", "onyx/ui/widget", "onyx/utils" ],
		function($, require) {

			var Widget = require("onyx/ui/widget");

			var Utils = require("onyx/utils");

			function Layout(options) {
				this.clazz = options.clazz;
				Widget.call(this, options);
			}

			Layout.prototype.build = function(pdom) {
				this.dom = $("<div></div>");
				this.addClass(this.dom, "onyx-ui-layout");
				this.dom.appendTo(pdom);
				var header = this.options.header;
				if (header) {
					this.header = $("<div></div>");
					this.addClass(this.header, "onyx-ui-layout", "header");
					header.dom = this.header;
				}
				var body = this.options.body;
				if (body) {
					this.body = $("<div></div>");
					this.addClass(this.body, "onyx-ui-layout", "body");
					body.dom = this.body;
				}
				var footer = this.options.footer;
				if (footer) {
					this.footer = $("<div></div>");
					this.addClass(this.footer, "onyx-ui-layout", "footer");
					footer.dom = this.footer;
				}
				this.adjustHeaderBodyFooter(this.dom, [ header, body, footer ]);
				var left = this.options.left;
				if (left) {
					this.left = $("<div></div>");
					this.addClass(this.left, "onyx-ui-layout", "left");
					left.dom = this.left;
				}
				var middle = this.options.middle;
				if (middle) {
					this.middle = $("<div/>");
					this.addClass(this.middle, "onyx-ui-layout", "middle");
					middle.dom = this.middle;
				}
				var right = this.options.right;
				if (right) {
					this.right = $("<div></div>");
					this.addClass(this.right, "onyx-ui-layout", "right");
					right.dom = this.right;
				}

				this.adjustLeftMiddleRight(this.body == null ? this.dom
						: this.body, [ left, middle, right ]);
				return this.dom;
			}

			/**
			 * Adjust height of the Header, Body, Footer
			 */
			Layout.prototype.adjustHeaderBodyFooter = function(pdom, items) {
				var totalHeight = this.dom.innerHeight();
				var autoHeightItems = [];
				var autoHeightDoms = [];
				for (var i = 0; i < items.length; i++) {
					var item = items[i];
					if (!item) {
						continue;
					}
					if (item.height) {
						item.dom.css("height", item.height);
						totalHeight -= item.height;
						continue;
					}
					autoHeightItems.push(item);
				}
				// calc auto height
				var autoHeight = totalHeight / autoHeightItems.length;
				for (var i = 0; i < autoHeightItems.length; i++) {
					var item = autoHeightItems[i];
					item.dom.css("height", autoHeight);
				}
				// append to pdom
				for (var i = 0; i < items.length; i++) {
					var item = items[i];
					if (!item) {
						continue;
					}
					item.dom.appendTo(pdom);
				}
			}

			/**
			 * Adjust width of the Left, Middle, Right
			 */
			Layout.prototype.adjustLeftMiddleRight = function(pdom, items) {
				var totalWidth = this.dom.innerWidth();
				var autoWidthItems = [];
				var autoWidthDoms = [];
				for (var i = 0; i < items.length; i++) {
					var item = items[i];
					if (!item) {
						continue;
					}
					if (item.width) {
						item.dom.css("width", item.width);
						totalWidth -= item.width;
						continue;
					}
					autoWidthItems.push(item);
				}
				// calc auto width
				var autoWidth = totalWidth / autoWidthItems.length;
				for (var i = 0; i < autoWidthItems.length; i++) {
					var item = autoWidthItems[i];
					item.dom.css("width", autoWidth);
				}
				// append to pdom
				for (var i = 0; i < items.length; i++) {
					var item = items[i];
					if (!item) {
						continue;
					}
					item.dom.appendTo(pdom);
				}
			}

			Layout.prototype.refresh = function() {

			}

			Layout.prototype.getHeader = function() {
				return this.header
			}

			Layout.prototype.getBody = function() {
				return this.body;
			}

			Layout.prototype.getFooter = function() {
				return this.footer;
			}

			Layout.prototype.getLeft = function() {
				return this.left;
			}

			Layout.prototype.getMiddle = function() {
				return this.middle;
			}

			Layout.prototype.getRight = function() {
				return this.right;
			}

			Utils.inherits(Layout, Widget);

			return Layout;
		});

/**
 * Onyx UI Framework PageLayout
 */
define("onyx/ui/pagelayout", [ "jquery", "require", "onyx/ui/widget",
		"onyx/utils", "onyx/ui/layout", "onyx/ui/button", "onyx/ui/text",
		"onyx/ui/navbar", "onyx/ui/multipage", "onyx/ui/icon" ], function($,
		require) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	var Icon = require("onyx/ui/icon");

	var Layout = require("onyx/ui/layout");

	var Button = require("onyx/ui/button");

	var Text = require("onyx/ui/text");

	var Navbar = require("onyx/ui/navbar");

	var MultiPage = require("onyx/ui/multipage");

	function PageLayout(options) {
		this.clazz = options.clazz;
		this.resource = options.resource || {};
		this.properties = this.resource.properties || {};
		Widget.call(this, options);
	}

	PageLayout.prototype.build = function(pdom) {
		this.dom = $("<div></div>");
		this.addClass(this.dom, "onyx-ui-pagelayout", null);
		this.dom.appendTo(pdom);
		this.layout = new Layout({
			clazz : "onyx-ui-pagelayout-layout",
			header : {
				height : 64
			},
			body : {},
			pdom : this.dom
		});
		this.headerLayout = new Layout({
			clazz : "onyx-ui-pagelayout-header-layout",
			left : {
				width : 64
			},
			middle : {},
			right : {
				width : 500
			},
			pdom : this.layout.getHeader()
		});
		this.icon = new Icon({
			icon : this.resource.icon || "icon-user-circle",
			style : {
				"font-size" : "52px",
				"color" : "white"
			},
			pdom : this.headerLayout.getLeft()
		});
		this.title = new Text({
			text : this.properties.caption,
			style : {
				"font-size" : "18px",
				"color" : "white",
				"line-height" : "48px",
				"display" : "block"
			},
			pdom : this.headerLayout.getMiddle()
		});
		this.desc = new Text({
			text : this.properties.description,
			style : {
				"font-size" : "12px",
				"color" : "white",
				"line-height" : "12px",
				"display" : "block"
			},
			pdom : this.headerLayout.getMiddle()
		});
		this.bodyLayout = new Layout({
			clazz : "onyx-ui-pagelayout-body-layout",
			left : {
				width : 64
			},
			middle : {},
			pdom : this.layout.getBody()
		});
		this.leftPanelLayout = new Layout({
			clazz : "onyx-ui-pagelayout-leftpanel-layout",
			header : {
				height : 48
			},
			body : {},
			footer : {
				height : 64
			},
			pdom : this.bodyLayout.getLeft()
		});
		this.button = new Button({
			clazz : "onyx-ui-pagelayout-button",
			caption : "",
			icon : this.options.button.icon,
			onclick : this.options.button.onclick,
			pdom : this.leftPanelLayout.getHeader()
		});
		this.navbar = new Navbar({
			clazz : "onyx-ui-pagelayout-navbar",
			theme : "vertical",
			style : {
				"font-size" : 14
			},
			items : this.options.navbaritems,
			pdom : this.leftPanelLayout.getBody()
		});
		this.navbar.setActive(this.options.activeitem);
		this.multipage = new MultiPage({
			pdom : this.bodyLayout.getMiddle()
		});
		return this.dom;
	}

	PageLayout.prototype.getMultiPage = function() {
		return this.multipage;
	}

	PageLayout.prototype.refresh = function(options) {
		var page = this.multipage.getCurrentPage();
		if (!page || !page.component) {
			return;
		}
		return page.component.refresh();
	}

	Utils.inherits(PageLayout, Widget);

	return PageLayout;
});

/**
 * Onyx UI Framework EditLayout
 */
define("onyx/ui/editlayout", [ "jquery", "require", "onyx/ui/widget",
		"onyx/utils", "onyx/ui/layout", "onyx/ui/button", "onyx/ui/text",
		"onyx/ui/navpanel", "onyx/ui/icon" ], function($, require) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	var Icon = require("onyx/ui/icon");

	var Layout = require("onyx/ui/layout");

	var Button = require("onyx/ui/button");

	var Text = require("onyx/ui/text");

	var NavPanel = require("onyx/ui/navpanel");

	function EditLayout(options) {
		this.clazz = options.clazz;
		this.resource = options.resource || {};
		this.properties = this.resource.properties || {};
		Widget.call(this, options);
	}

	EditLayout.prototype.build = function(pdom) {
		this.dom = $("<div/>");
		this.addClass(this.dom, "onyx-ui-editlayout");
		this.dom.appendTo(pdom);
		this.layout = UI.createLayout({
			clazz : "onyx-ui-editlayout-layout",
			header : {
				height : 36
			},
			body : {},
			left : {
				width : 210
			},
			middle : {},
			right : {
				width : 210
			},
			pdom : this.dom
		});
		this.toolbar = UI.createToolBar($.extend({
			pdom : this.layout.getHeader()
		}, this.options.toolbar));
		this.middlePanel = UI.createNavPanel($.extend({
			pdom : this.layout.getMiddle()
		}, this.options.middlePanel));
		this.leftPanel = UI.createNavPanel($.extend({
			pdom : this.layout.getLeft()
		}, this.options.leftPanel));
		this.rightPanel = UI.createNavPanel($.extend({
			pdom : this.layout.getRight()
		}, this.options.rightPanel));
		return this.dom;
	}

	EditLayout.prototype.getLayout = function() {
		return this.layout;
	}

	EditLayout.prototype.getHeader = function() {
		return this.layout.getHeader();
	}

	EditLayout.prototype.getLeft = function() {
		return this.leftPanel;
	}

	EditLayout.prototype.getMiddle = function() {
		return this.middlePanel;
	}

	EditLayout.prototype.getRight = function() {
		return this.rightPanel;
	}

	Utils.inherits(EditLayout, Widget);

	return EditLayout;
});
/**
 * Onyx UI Framework MultiPage
 */
define("onyx/ui/multipage", [ "jquery", "require", "onyx/ui/widget",
		"onyx/utils" ], function($, require) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	function MultiPage(options) {
		Widget.call(this, options);
		this.options = options;
		this.pages = {};
	}

	MultiPage.prototype.build = function(pdom) {
		this.dom = $("<div/>");
		this.addClass(this.dom, "onyx-ui-multipage");
		this.dom.appendTo(pdom);
		return this.dom;
	}

	/**
	 * get all pages
	 */
	MultiPage.prototype.getPages = function() {
		return this.pages;
	}

	/**
	 * get page by id
	 */
	MultiPage.prototype.getPage = function(pageid) {
		return this.pages[pageid];
	}

	/**
	 * create new empty page
	 */
	MultiPage.prototype.newPage = function(options) {

	}

	/**
	 * show page
	 */
	MultiPage.prototype.showPage = function(options) {
		var pageid = options.id;
		var page = this.pages[pageid];
		if (page) {
			this.currentPage = page;
			var dfd = $.Deferred();
			if (page.component && page.component.refresh) {
				var self = this;
				page.component.refresh($.extend({
					pdom : page.dom
				}, options)).done(function(component) {
					self._showPage(pageid);
					dfd.resolve(page);
				});
				return dfd.promise();
			} else {
				this._showPage(pageid);
				dfd.resolve(page);
				return dfd.promise();
			}
		}
		var page = $.extend({}, options);
		page.id = pageid;
		page.dom = $("<div/>");
		page.dom.attr("id", page.id);
		this.addClass(page.dom, "onyx-ui-multipage", "page");
		page.dom.appendTo(this.dom);
		this.pages[pageid] = page;
		this.currentPage = page;
		if (!options.compname) {
			this._showPage(pageid);
			return $.dfd(page);
		}
		var dfd = $.Deferred();
		require([ options.compname ], function(Component) {
			var componentOptions = $.extend({}, options);
			componentOptions.pdom = page.dom;
			page.component = new Component(componentOptions);
			dfd.resolve(page);
		});
		this._showPage(pageid);
		return dfd.promise();
	}

	MultiPage.prototype._showPage = function(pageid) {
		var self = this;
		$.each(this.pages,
				function(index, page) {
					if (page.id == pageid) {
						self.addClass(page.dom, "onyx-ui-multipage", "page",
								"show");
						self.removeClass(page.dom, "onyx-ui-multipage", "page",
								"hide");
					} else {
						self.addClass(page.dom, "onyx-ui-multipage", "page",
								"hide");
						self.removeClass(page.dom, "onyx-ui-multipage", "page",
								"show");
					}
				})
	}

	MultiPage.prototype.getCurrentPage = function() {
		return this.currentPage;
	}
	Utils.inherits(MultiPage, Widget);

	return MultiPage;
});

/**
 * Onyx UI Framework List
 */
define("onyx/ui/list", [ "jquery", "require", "onyx/ui/widget", "onyx/utils" ],
		function($, require) {

			var Widget = require("onyx/ui/widget");

			var Utils = require("onyx/utils");

			function List(options) {
				Widget.call(this, options)
			}

			List.prototype.build = function(pdom) {
				this.dom = $("<div class='unselectable'></div>");
				this.addClass(this.dom, "onyx-ui-list", null);
				this.dom.appendTo(pdom);
				this.ul = $("<ul></ul>");
				this.addClass(this.ul, "onyx-ui-list", "items");
				this.ul.appendTo(this.dom);
				this.ul.on("mouseover", this.onMouseOver.bind(this));
				this.ul.on("mouseout", this.onMouseOut.bind(this));
				this.ul.on("click", this.onClick.bind(this));
				this.ul.on("dblclick", this.onDblClick.bind(this));
				var self = this;
				this.getDatas(this.options.datas).done(function(items) {
					if (!items) {
						return;
					}
					self.addItems(items);
				});
				return this.dom;
			}

			List.prototype.addItems = function(items) {
				for (var i = 0; i < items.length; i++) {
					var item = items[i];
					this.addItem(item);
				}
			}

			List.prototype.addItem = function(item) {
				var li = $("<li draggable=true></li>");
				this.addClass(li, "onyx-ui-list", "item");
				li.data(item);
				li.appendTo(this.ul);
				var title = $("<span></span>");
				this.addClass(title, "onyx-ui-list", "item", "title");
				title.text(item.name || item.caption);
				var icon = item.icon || "icon-object";
				title.addClass("iconfont");
				title.addClass(icon);
				title.appendTo(li);
				var value = $("<div></div>");
				this.addClass(value, "onyx-ui-list", "item", "value");
				value.appendTo(li);
			}

			List.prototype.removeAll = function() {
				this.ul.children().remove();
			}

			List.prototype.onMouseOver = function(event) {
				var target = $(event.target);
				if (!this.hasClass(target, "onyx-ui-list", "item")) {
					return;
				}
				if (this.overItem) {
					this.overItem.removeClass("onyx-ui-list-item-over");
				}
				this.overItem = target;
				target.addClass("onyx-ui-list-item-over");
			}

			List.prototype.onMouseOut = function(event) {
				var target = $(event.target);
				if (!this.hasClass(target, "onyx-ui-list", "item")) {
					return;
				}
				target.removeClass("onyx-ui-list-item-over");
			}

			List.prototype.onClick = function(event) {
				event.stopPropagation();
				var item = this.getEventTarget(event, "onyx-ui-list", "item");
				if (!item) {
					return;
				}
				this.fire("clickitem", item);
			}

			List.prototype.onDblClick = function(event) {
				event.stopPropagation();
				var item = this.getEventTarget(event, "onyx-ui-list", "item");
				if (!item) {
					return;
				}
				this.fire("dblclickitem", item);
			}

			Utils.inherits(List, Widget);

			return List;
		});

/**
 * Onyx UI Framework DataList
 */
define(
		"onyx/ui/datalist",
		[ "jquery", "require", "onyx/ui/widget", "onyx/utils" ],
		function($, require) {

			var Widget = require("onyx/ui/widget");

			var Utils = require("onyx/utils");

			function DataList(options) {
				Widget.call(this, options)
			}

			DataList.prototype.build = function(pdom) {
				this.dom = $("<div></div>");
				this.addClass(this.dom, "onyx-ui-datalist");
				this.dom.appendTo(pdom);
				this.getDatas(this.options.items).done(
						this.buildTimeLineItems.bind(this));
				this.on("mouseover", this.onMouseOver.bind(this));
				this.on("mouseout", this.onMouseOut.bind(this));
				return this.dom;
			}

			DataList.prototype.buildTimeLineItems = function(items) {
				if (!items) {
					return;
				}
				for (var i = 0; i < items.length; i++) {
					var item = this.buildTimeLineItem(items[i]);
					item.appendTo(this.dom);
				}
			}

			DataList.prototype.buildTimeLineItem = function(item) {
				var timeline = $("<div></div>");
				this.addClass(timeline, "onyx-ui-datalist", "item");
				var body = $("<div></div>");
				this.addClass(body, "onyx-ui-datalist", "item", "body");
				body.appendTo(timeline);
				var icon = $("<div class='iconfont icon-object'></div>");
				this.addClass(icon, "onyx-ui-datalist", "item", "body", "icon");
				icon.appendTo(body);
				var details = $("<div></div>");
				this.addClass(details, "onyx-ui-datalist", "item", "body",
						"details");
				details.appendTo(body);
				var user = $("<p>卡拉斯佛（ClassFoo）：</p>");
				user.appendTo(details);
				var time = $("<p>8月10日 15:28 来自 Chrome</p>");
				time.appendTo(details);
				var content = $("<p>/p>");
				content.text(item.name);
				content.appendTo(details);
				var tools = $("<div class='onyx-base-home-body-datalist-tools'></div>");
				this.addClass(tools, "onyx-ui-datalist", "item", "tools");
				tools.appendTo(timeline);
				return timeline;
			}

			DataList.prototype.addItem = function(options) {
				var item = this.buildTimeLineItem(options);
				this.dom.prepend(item);
			}

			DataList.prototype.onMouseOver = function(event) {
				var target = this.getEventTarget(event, "onyx-ui-datalist",
						"item");
				if (!target) {
					return;
				}
				if (this.overItem) {
					this.overItem.removeClass("shadow");
				}
				this.overItem = target;
				target.addClass("shadow");
			}

			DataList.prototype.onMouseOut = function(event) {
				var target = this.getEventTarget(event, "onyx-ui-datalist",
						"item");
				if (!target) {
					return;
				}
				target.removeClass("shadow");
			}

			Utils.inherits(DataList, Widget);

			return DataList;
		});

/**
 * Onyx UI Framework TimeLine
 */
define("onyx/ui/timeline", [ "jquery", "require", "onyx/ui/widget",
		"onyx/utils" ], function($, require) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	function TimeLine(options) {
		this.items = [];
		Widget.call(this, options);
	}

	TimeLine.prototype.build = function(pdom) {
		this.dom = $("<div></div>");
		this.addClass(this.dom, "onyx-ui-timeline");
		this.dom.appendTo(pdom);
		this.ul = $("<ul></ul>");
		this.addClass(this.ul, "onyx-ui-timeline", "ul");
		this.ul.appendTo(this.dom);
		this.getDatas(this.options.datas).done(
				this.buildTimeLineItems.bind(this));
		this.on("mouseover", this.onMouseOver.bind(this));
		this.on("mouseout", this.onMouseOut.bind(this));
		return this.dom;
	}

	TimeLine.prototype.buildTimeLineItems = function(items) {
		if (!items) {
			return;
		}
		for (var i = 0; i < items.length; i++) {
			var item = items[i];
			var year = item.year;
			if (!year) {
				continue;
			}
			var yearItem = this.getYearItem(this.items, parseInt(year));
			var month = item.month;
			if (!month) {
				yearItem.id = item.id;
				yearItem.name = item.name;
				yearItem.details = item.details;
				continue;
			}
			var monthItem = this
					.getMonthItem(yearItem.monthes, parseInt(month));
			var day = item.day;
			if (!day) {
				monthItem.id = item.id;
				monthItem.name = item.name;
				monthItem.details = item.details;
				continue;
			}
			var dayItem = this.getDayItem(monthItem.days, parseInt(day));
			dayItem.id = item.id;
			dayItem.name = item.name;
			dayItem.details = item.details;
		}
		var self = this;
		this.items.forEach(function(year) {
			var yearDom = self.buildTimeLineItem(year);
			yearDom.appendTo(self.ul);
			year.monthes.forEach(function(month) {
				var monthDom = self.buildTimeLineItem(month);
				monthDom.appendTo(self.ul);
				month.days.forEach(function(day) {
					var dayDom = self.buildTimeLineItem(day);
					dayDom.appendTo(self.ul);
				})
			})
		});
	}

	TimeLine.prototype.getYearItem = function(yearItems, year) {
		for (var i = 0; i < yearItems.length; i++) {
			var item = yearItems[i];
			if (item.year == year) {
				return item;
			} else if (year > item.year) {
				var yearItem = {
					year : year,
					time : year + "年",
					monthes : []
				};
				yearItems.splice(i, 0, yearItem);
				return yearItem;
			}
		}
		var yearItem = {
			year : year,
			time : year + "年",
			monthes : []
		};
		yearItems.push(yearItem);
		return yearItem;
	}

	TimeLine.prototype.getMonthItem = function(monthItems, month) {
		for (var i = 0; i < monthItems.length; i++) {
			var item = monthItems[i];
			if (item.month == month) {
				return item;
			} else if (month > item.month) {
				var monthItem = {
					month : month,
					time : month + "月",
					days : []
				};
				monthItems.splice(i, 0, monthItem);
				return monthItem;
			}
		}
		var monthItem = {
			month : month,
			time : month + "月",
			days : []
		};
		monthItems.push(monthItem);
		return monthItem;
	}

	TimeLine.prototype.getDayItem = function(dayItems, day) {
		for (var i = 0; i < dayItems.length; i++) {
			var item = dayItems[i];
			if (item.day == day) {
				return item;
			} else if (day > item.day) {
				var dayItem = {
					day : day,
					time : day + "日"
				};
				dayItems.splice(i, 0, dayItem);
				return dayItem;
			}
		}
		var dayItem = {
			day : day,
			time : day + "日"
		};
		dayItems.push(dayItem);
		return dayItem;
	}

	TimeLine.prototype.buildTimeLineItem = function(data) {
		var item = $("<li></li>");
		this.addClass(item, "onyx-ui-timeline", "item");
		var time = $("<div></div>");
		this.addClass(time, "onyx-ui-timeline", "item", "time");
		time.appendTo(item);
		var time_item = $("<span></span>");
		this.addClass(time_item, "onyx-ui-timeline", "item", "time", "item");
		time_item.text(data.time);
		time_item.appendTo(time);

		var icon = $("<div></div>");
		this.addClass(icon, "onyx-ui-timeline", "item", "icon");
		// icon.appendTo(item);
		// if (data.name) {
		var content = $("<div></div>");
		this.addClass(content, "onyx-ui-timeline", "item", "content");
		content.appendTo(item);
		content.text(data.name);
		// }
		return item;
	}

	TimeLine.prototype.addItem = function(options) {
		var item = this.buildTimeLineItem(options);
		this.dom.prepend(item);
	}

	TimeLine.prototype.onMouseOver = function(event) {
		var target = this.getEventTarget(event, "onyx-ui-timeline", "item");
		if (!target) {
			return;
		}
		if (this.overItem) {
			this.overItem.removeClass("shadow");
		}
		this.overItem = target;
		target.addClass("shadow");
	}

	TimeLine.prototype.onMouseOut = function(event) {
		var target = this.getEventTarget(event, "onyx-ui-timeline", "item");
		if (!target) {
			return;
		}
		target.removeClass("shadow");
	}

	Utils.inherits(TimeLine, Widget);

	return TimeLine;
});
/**
 * Onyx UI Framework SearchBox
 */
define("onyx/ui/searchbox", [ "jquery", "require", "onyx/ui/widget",
		"onyx/utils" ], function($, require) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	function SearchBox(options) {
		Widget.call(this, options);
		this.options = options;
	}

	SearchBox.prototype.build = function(pdom) {
		this.dom = $("<div/>");
		this.addClass(this.dom, "onyx-ui-searchbox");
		this.dom.appendTo(pdom);
		this.items = $("<div></div>");
		this.addClass(this.items, "onyx-ui-searchbox", "items");
		this.items.appendTo(this.dom);
		this.input = $("<input type='text'></input>");
		this.addClass(this.input, "onyx-ui-searchbox", "input");
		if (this.options.placeholder) {
			this.input.attr("placeholder", this.options.placeholder);
		}
		this.input.appendTo(this.dom);
		this.input.focus();
		this.input.on("change", this.onChange.bind(this));
		this.input.on("focus", this.onFocus.bind(this));
		this.input.on("blur", this.onBlur.bind(this));
		return this.dom;
	}

	SearchBox.prototype.addItem = function(text) {
		var item = $("<div/>");
		this.addClass(item, "onyx-ui-searchbox", "item");
		item.text(text);
		item.appendTo(this.items);
	}

	SearchBox.prototype.onChange = function(event) {
		event.stopPropagation();
		var text = this.input.val();
		this.input.val("");
		this.addItem(text);
		this.fire("change", text);
	}

	SearchBox.prototype.onFocus = function(event) {
		event.stopPropagation();
		this.fire("active", event);
	}

	SearchBox.prototype.onBlur = function(event) {
		event.stopPropagation();
		this.fire("inactive", event);
	}

	SearchBox.prototype.setText = function(text) {
		this.input.val(text);
	}

	Utils.inherits(SearchBox, Widget);

	return SearchBox;
});

/**
 * Onyx UI Framework Bread Crumb
 */
define("onyx/ui/breadcrumb", [ "jquery", "require", "onyx/ui/widget",
		"onyx/utils" ], function($, require) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	function BreadCrumb(options) {
		Widget.call(this, options);
		this.options = options;
	}

	BreadCrumb.prototype.build = function(pdom) {
		this.dom = $("<ul/>");
		this.addClass(this.dom, "onyx-ui-breadcrumb");
		this.dom.appendTo(pdom);
		this.buildPathes(this.options.pathes);
		// this.on("mouseover", this.onMouseOver.bind(this));
		// this.on("mouseout", this.onMouseOut.bind(this));
		this.on("click", this.onClickItem.bind(this));
		return this.dom;
	}

	BreadCrumb.prototype.buildPathes = function(pathes) {
		if (!pathes) {
			return;
		}
		for (var i = 0; i < pathes.length; i++) {
			var path = pathes[i];
			var li = $("<li class='iconfont'/>");
			this.addClass(li, "onyx-ui-breadcrumb", "item");
			li.addClass(path.icon || ("icon-" + path.id));
			li.text(path.caption || path.name);
			li.appendTo(this.dom);
			li.data(path);
			if (i != pathes.length - 1) {
				var split = $("<li class='iconfont icon-chevron-right'/>");
				this.addClass(split, "onyx-ui-breadcrumb", "split");
				split.appendTo(this.dom);
			}
		}
	}

	BreadCrumb.prototype.setPathes = function(pathes) {
		this.dom.children().remove();
		this.buildPathes(pathes);
	}

	BreadCrumb.prototype.onClickItem = function(event) {
		var target = $(event.target);
		if (!this.hasClass(target, "onyx-ui-breadcrumb", "item")) {
			return;
		}
		var path = target.data();
		UI.redirect(path.uri);
	}

	Utils.inherits(BreadCrumb, Widget);

	return BreadCrumb;
});

/**
 * Onyx UI Framework SearchBox
 */
define("onyx/ui/image",
		[ "jquery", "require", "onyx/ui/widget", "onyx/utils" ], function($,
				require) {

			var Widget = require("onyx/ui/widget");

			var Utils = require("onyx/utils");

			function Image(options) {
				Widget.call(this, options);
				this.options = options;
			}

			Image.prototype.build = function(pdom) {
				this.dom = $("<div/>");
				this.addClass(this.dom, "onyx-ui-image");
				this.dom.appendTo(pdom);
				this.input = $("<img src=" + this.options.src + "></img>");
				this.input.appendTo(this.dom);
				return this.dom;
			}

			Utils.inherits(Image, Widget);

			return Image;
		});

/**
 * Onyx UI Framework ShowBoard
 */
define("onyx/ui/showboard", [ "jquery", "require", "masonry", "onyx/ui/widget",
		"onyx/utils", "onyx/ui/showboard/item", "onyx/ui/showboard/item/base",
		"onyx/ui/showboard/item/entity", "onyx/ui/showboard/item/label",
		"onyx/ui/showboard/item/nameindex" ], function($, require, Masonry) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	var ShowBoardItem = require("onyx/ui/showboard/item");

	var ShowBoardItem_Base = require("onyx/ui/showboard/item/base");

	var ShowBoardItem_Entity = require("onyx/ui/showboard/item/entity");

	var ShowBoardItem_Label = require("onyx/ui/showboard/item/label");

	var ShowBoardItem_NameIndex = require("onyx/ui/showboard/item/nameindex");

	function ShowBoard(options) {
		Widget.call(this, options);
		this.options = options;
	}

	ShowBoard.prototype.build = function(pdom) {
		this.dom = $("<div></div>");
		this.addClass(this.dom, "onyx-ui-showboard");
		this.dom.appendTo(pdom);
		this.container = $("<div></div>");
		this.addClass(this.container, "onyx-ui-showboard", "container");
		this.container.appendTo(this.dom);
		this.container.on("mouseover", this.onMouseOver.bind(this));
		this.container.on("mouseout", this.onMouseOut.bind(this));
		this.container.on("click", this.onClickItem.bind(this));
		var self = this;
		this.getDatas(this.options.datas).done(function(datas) {
			self.buildData(datas);
		});
		return this.dom;
	}

	ShowBoard.prototype.buildData = function(datas) {
		// calc the initial item width
		var width = datas.width || 128;
		var gap = datas.gap || 10;
		var self = this;
		$.each(datas, function(index, data) {
			var type = data.type || self.options.type;
			switch (type) {
			case "base": {
				var item = new ShowBoardItem_Base($.extend({
					parent : self,
					pdom : self.container,
					width : width
				}, data));
				break;
			}
			case "entity": {
				var item = new ShowBoardItem_Entity($.extend({
					parent : self,
					pdom : self.container,
					width : width
				}, data));
				break;
			}
			case "label": {
				var item = new ShowBoardItem_Label($.extend({
					parent : self,
					pdom : self.container,
					width : width
				}, data));
				break;
			}
			case "nameindex": {
				var item = new ShowBoardItem_NameIndex($.extend({
					parent : self,
					pdom : self.container,
					width : width
				}, data));
				break;
			}
			default: {
				var item = new ShowBoardItem({
					parent : self,
					pdom : self.container,
					width : width,
					data : data
				});
				break;
			}
			}
		});
		var msnry = new Masonry(this.container[0], {
			itemSelector : ".onyx-ui-showboard-item",
			columnWidth : width,
			gutter : gap
		});
	}

	ShowBoard.prototype.onMouseOver = function(event) {
		var target = this.getEventTarget(event, "onyx-ui-showboard", "item");
		if (!target) {
			return;
		}
		if (this.hoverGridItem && this.hoverGridItem != target) {
			this.removeClass(this.hoverGridItem, "onyx-ui-showboard", "item",
					"over");
		}
		this.hoverGridItem = target;
		this.addClass(this.hoverGridItem, "onyx-ui-showboard", "item", "over");
	}

	ShowBoard.prototype.onMouseOut = function(event) {
		var target = this.getEventTarget(event, "onyx-ui-showboard", "item");
		if (!target) {
			return;
		}
		if (this.hoverGridItem) {
			this.removeClass(this.hoverGridItem, "onyx-ui-showboard", "item",
					"over");
		}
	}

	ShowBoard.prototype.onClickItem = function(event) {
		var button = this.getEventTarget(event, "onyx-ui-button");
		if (button) {
			event.stopPropagation();
			this.docmd(event, button);
			return;
		}
		var target = this.getEventTarget(event, "onyx-ui-showboard", "item");
		if (!target) {
			return;
		}
		var item = target.data();
		if (item && item.show) {
			item.show();
		}
		this.fire("clickitem", target);
	}

	ShowBoard.prototype.setData = function(datas) {
		var children = this.container.children();
		if (children) {
			children.remove();
		}
		this.buildData(datas);
	}

	ShowBoard.prototype.refresh = function() {
		this.container.children().remove();
		var self = this;
		this.getDatas(this.options.datas).done(function(datas) {
			self.buildData(datas);
		});
		return this.dom;
	}

	Utils.inherits(ShowBoard, Widget);

	return ShowBoard;
});

/**
 * Onyx UI Framework ShowBoard Item
 */
define(
		"onyx/ui/showboard/item",
		[ "jquery", "require", "onyx/ui/widget", "onyx/utils", "onyx/ui/layout" ],
		function($, require, Masonry) {

			var Widget = require("onyx/ui/widget");

			var Utils = require("onyx/utils");

			var Layout = require("onyx/ui/layout");

			function ShowBoardItem(options) {
				Widget.call(this, options);
				this.setData(options.data);
			}

			ShowBoardItem.prototype.build = function(pdom) {
				this.dom = $("<div class='iconfont icon-doc'/>");
				if (this.parent.draggable) {
					this.dom.attr("draggable", true);
				}
				this.addClass(this.dom, "onyx-ui-showboard-item");
				var self = this;
				$.each(this.options, function(k, v) {
					self.dom.data(k, v);
				});
				this.dom.css("width", this.options.width || 128);
				if (this.data.height) {
					this.dom.css("height", this.data.height);
				}
				// this.dom.css("height", this.options.height || 128);
				if (this.data.color) {
					this.dom.css("background-color", this.data.color);
					this.dom.css("border", "none");
					this.dom.css("color", "white");
				} else {
					if (this.options.color) {
						this.dom.css("background-color", this.options.color);
						this.dom.css("border", "none");
						this.dom.css("color", "white");
					}
				}
				this.dom.appendTo(pdom);
				if (this.data.parents && this.data.parents.length != 0) {
					this.header = $("<div></div>");
					this.addClass(this.header, "onyx-ui-showboard-item",
							"header");
					this.header.appendTo(this.dom);
					this.header.text(this.data.parents);
				}
				if (this.data.properties && this.data.properties.length != 0) {
					this.body = $("<div></div>");
					this.addClass(this.body, "onyx-ui-showboard-item", "body");
					this.body.appendTo(this.dom);
					for (var i = 0; i < this.data.properties.length; i++) {
						var property = this.data.properties[i];
						var span = $("<span class='iconfont icon-doc onyx-ui-showboard-item-property'></span>");
						span.text(property);
						span.appendTo(this.body);
					}
				}
				this.footer = $("<div></div>");
				this.addClass(this.footer, "onyx-ui-showboard-item", "footer");
				this.footer.appendTo(this.dom);
				var title = $("<span/>");
				title.text(this.data.caption || this.data.name);
				this.addClass(title, "onyx-ui-showboard-item", "title");
				title.appendTo(this.footer);
				return this.dom;
			}

			ShowBoardItem.prototype.setData = function(data) {
				this.data = data;
				this.dom.data(data);
			}

			ShowBoardItem.prototype.getData = function() {
				return this.data;
			}

			Utils.inherits(ShowBoardItem, Widget);

			return ShowBoardItem;
		});

/**
 * Onyx UI Framework ShowBoard Item Base
 */
define(
		"onyx/ui/showboard/item/base",
		[ "jquery", "require", "onyx/ui/widget", "onyx/utils",
				"onyx/ui/showboard/item" ],
		function($, require, Masonry) {

			var Widget = require("onyx/ui/widget");

			var Utils = require("onyx/utils");

			function ShowBoardItem_Base(options) {
				Widget.call(this, options);
			}

			ShowBoardItem_Base.prototype.build = function(pdom) {
				this.dom = $("<div/>");
				this.dom.data(this.options);
				this.addClass(this.dom, "onyx-ui-showboard-item");
				this.addClass(this.dom, "onyx-ui-showboard-item-base");
				this.dom.css("width", "266px");
				this.dom.appendTo(pdom);
				this.buildHeader();
				this.buildNameDesc();
				this.buildSummaries();
				this.buildTools();
				return this.dom;
			}

			ShowBoardItem_Base.prototype.buildHeader = function() {
				// base top image
				this.header = $("<div></div>");
				this.addClass(this.header, "onyx-ui-showboard-item-base",
						"header");
				this.header.appendTo(this.dom);
				this.icon = $("<span class='iconfont icon-base'></span>");
				this.addClass(this.icon, "onyx-ui-showboard-item-base", "icon");
				this.icon.appendTo(this.header);
			}

			ShowBoardItem_Base.prototype.buildNameDesc = function() {
				// base name
				this.name = $("<div></div>");
				this.name.text(this.options.name);
				this.addClass(this.name, "onyx-ui-showboard-item-base", "name");
				this.name.appendTo(this.dom);
				// base description
				this.desc = $("<div></div>");
				this.desc.text(this.options.desc);
				this.addClass(this.desc, "onyx-ui-showboard-item-base", "desc");
				this.desc.appendTo(this.dom);
			}

			ShowBoardItem_Base.prototype.buildSummaries = function() {
				// summary
				this.summaries = $("<div></div>");
				this.addClass(this.summaries, "onyx-ui-showboard-item-base",
						"summaries");
				this.summaries.appendTo(this.dom);
				// view summary
				this.views = $("<span class='iconfont icon-user-circle'/>");
				this.views.text("3532356");
				this.addClass(this.views, "onyx-ui-showboard-item-base",
						"summary");
				this.views.appendTo(this.summaries);
				// favarite summary
				this.favarites = $("<span class='iconfont icon-recommend'/>");
				this.favarites.text("87233");
				this.addClass(this.favarites, "onyx-ui-showboard-item-base",
						"summary");
				this.favarites.appendTo(this.summaries);
				// items summary
				this.items = $("<span class='iconfont icon-marker'/>");
				this.items.text("56343");
				this.addClass(this.items, "onyx-ui-showboard-item-base",
						"summary");
				this.items.appendTo(this.summaries);
			}

			ShowBoardItem_Base.prototype.buildTools = function() {
				// tools
				this.toolbar = UI.createToolBar({
					clazz : "onyx-ui-showboard-item-base-tools",
					pdom : this.dom
				});
				UI.createButton({
					id : "explorer",
					theme : "bubble",
					icon : "icon-search",
					caption : "探索",
					pdom : this.toolbar.getDom()
				});
				UI.createButton({
					id : "graph",
					theme : "bubble",
					icon : "icon-graph",
					caption : "图谱",
					pdom : this.toolbar.getDom()
				});
			}

			ShowBoardItem_Base.prototype.show = function() {
				UI.redirect("/graph/base/" + this.options.id);
			}

			Utils.inherits(ShowBoardItem_Base, Widget);

			return ShowBoardItem_Base;
		});

/**
 * Onyx UI Framework ShowBoard Item Entity
 */
define("onyx/ui/showboard/item/entity", [ "jquery", "require",
		"onyx/ui/widget", "onyx/utils", "onyx/ui/showboard/item" ], function($,
		require, Masonry) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	function ShowBoardItem_Entity(options) {
		Widget.call(this, options);
	}

	ShowBoardItem_Entity.prototype.build = function(pdom) {
		this.dom = $("<div/>");
		this.dom.data(this.options);
		this.addClass(this.dom, "onyx-ui-showboard-item");
		this.addClass(this.dom, "onyx-ui-showboard-item-entity");
		this.dom.css("width", "128px");
		if (this.options.color) {
			this.dom.css("background-color", this.options.color);
		}
		// this.dom.css("height", 160*(1+Math.random()));
		this.dom.appendTo(pdom);
		// header
		this.header = $("<div class='iconfont icon-hot'></div>");
		this.addClass(this.header, "onyx-ui-showboard-item-entity", "header");
		this.header.appendTo(this.dom);
		var self = this;
		Api.base().get(this.options.kid).done(function(base) {
			self.header.text(base.name);
		})
		// entity image
		this.image = $("<div class='iconfont icon-knowledge'></div>");
		this.addClass(this.image, "onyx-ui-showboard-item-entity", "image");
		this.image.appendTo(this.dom);
		// entity name
		this.name = $("<div></div>");
		this.name.text(this.options.name || this.options.caption);
		this.addClass(this.name, "onyx-ui-showboard-item-entity", "name");
		this.name.appendTo(this.dom)
		// entity labels;
		if (this.options.labels) {
			this.labels = $("<div></div>");
			this.addClass(this.labels, "onyx-ui-showboard-item-entity",
					"labels");
			this.labels.appendTo(this.dom);
			for (var i = 0; i < this.options.labels.length; i++) {
				var label = this.options.labels[i];
				var labelDom = $("<span/>");
				this.addClass(labelDom, "onyx-ui-showboard-item-entity",
						"label");
				labelDom.text(label);
				labelDom.appendTo(this.labels);
			}
		}
		// this.user = $("<div class='iconfont icon-user-circle'></div>");
		// this.addClass(this.user, "onyx-ui-showboard-item-entity", "user");
		// this.user.text("用户 2017年3月24日 12:33:23");
		// this.user.appendTo(this.dom);
		// tools
		this.tools = $("<div></div>");
		this.addClass(this.tools, "onyx-ui-showboard-item-entity", "tools");
		this.tools.appendTo(this.dom);
		// explore tool
		this.explore = $("<span class='iconfont icon-discover'/>");
		this.explore.text("探索");
		this.addClass(this.explore, "onyx-ui-showboard-item-entity", "tool");
		this.explore.appendTo(this.tools);
		// graph tool
		this.graph = $("<span class='iconfont icon-relation'/>");
		this.graph.text("图谱");
		this.addClass(this.graph, "onyx-ui-showboard-item-entity", "tool");
		this.graph.appendTo(this.tools);
		return this.dom;
	}

	ShowBoardItem_Entity.prototype.show = function() {
		UI.redirect("/entity/properties/" + this.options.id);
	}

	Utils.inherits(ShowBoardItem_Entity, Widget);

	return ShowBoardItem_Entity;
});

/**
 * Onyx UI Framework ShowBoard Item Label
 */
define("onyx/ui/showboard/item/label", [ "jquery", "require", "onyx/ui/widget",
		"onyx/utils", "onyx/ui/showboard/item" ],
		function($, require, Masonry) {

			var Widget = require("onyx/ui/widget");

			var Utils = require("onyx/utils");

			function ShowBoardItem_Label(options) {
				Widget.call(this, options);
			}

			ShowBoardItem_Label.prototype.build = function(pdom) {
				this.dom = $("<div class='iconfont icon-doc'/>");
				this.addClass(this.dom, "onyx-ui-showboard-item");
				this.dom.text(this.options.name);
				this.dom.appendTo(pdom);
				return this.dom;
			}

			ShowBoardItem_Label.prototype.show = function() {
				UI.redirect("/view/label/" + this.options.id);
			}

			Utils.inherits(ShowBoardItem_Label, Widget);

			return ShowBoardItem_Label;
		});

/**
 * Onyx UI Framework ShowBoard Item Entity
 */
define("onyx/ui/showboard/item/nameindex", [ "jquery", "require",
		"onyx/ui/widget", "onyx/utils", "onyx/ui/showboard/item" ], function($,
		require, Masonry) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	function ShowBoardItem_NameIndex(options) {
		Widget.call(this, options);
	}

	ShowBoardItem_NameIndex.prototype.build = function(pdom) {
		this.dom = $("<div/>");
		this.dom.data(this.options);
		this.addClass(this.dom, "onyx-ui-showboard-item");
		this.addClass(this.dom, "onyx-ui-showboard-item-entity");
		this.dom.css("width", "128px");
		if (this.options.color) {
			this.dom.css("background-color", this.options.color);
		}
		this.dom.appendTo(pdom);
		// header
		this.header = $("<div class='iconfont icon-hot'></div>");
		this.addClass(this.header, "onyx-ui-showboard-item-entity", "header");
		this.header.appendTo(this.dom);
		// entity image
		this.image = $("<div class='iconfont icon-knowledge'></div>");
		this.addClass(this.image, "onyx-ui-showboard-item-entity", "image");
		this.image.appendTo(this.dom);
		// entity name
		this.name = $("<div></div>");
		this.name.text(this.options.name || this.options.caption);
		this.addClass(this.name, "onyx-ui-showboard-item-entity", "name");
		this.name.appendTo(this.dom)
		// entity labels;
		if (this.options.objects) {
			this.labels = $("<div></div>");
			this.addClass(this.labels, "onyx-ui-showboard-item-entity",
					"labels");
			this.labels.appendTo(this.dom);
			var summaries = new Map();
			for (var i = 0; i < this.options.objects.length; i++) {
				var object = this.options.objects[i];
				if (!object.kid) {
					continue;
				}
				var count = summaries.get(object.kid);
				if (count) {
					summaries.set(object.kid, count + 1);
				} else {
					summaries.set(object.kid, 1);
				}
			}
			var self = this;
			summaries.forEach(function(value, key, map) {
				var labelDom = $("<span/>");
				self.addClass(labelDom, "onyx-ui-showboard-item-entity",
						"label");
				Api.base().get(key).done(function(base) {
					labelDom.text(base.name + "收录" + value + "条");
					labelDom.appendTo(self.labels);
				});
			})
		}
		// tools
		this.tools = $("<div></div>");
		this.addClass(this.tools, "onyx-ui-showboard-item-entity", "tools");
		this.tools.appendTo(this.dom);
		// explore tool
		this.explore = $("<span class='iconfont icon-discover'/>");
		this.explore.text("探索");
		this.addClass(this.explore, "onyx-ui-showboard-item-entity", "tool");
		this.explore.appendTo(this.tools);
		// graph tool
		this.graph = $("<span class='iconfont icon-relation'/>");
		this.graph.text("图谱");
		this.addClass(this.graph, "onyx-ui-showboard-item-entity", "tool");
		this.graph.appendTo(this.tools);
		return this.dom;
	}

	ShowBoardItem_NameIndex.prototype.show = function() {
		UI.redirect("/view/entity/" + this.options.id);
	}

	Utils.inherits(ShowBoardItem_NameIndex, Widget);

	return ShowBoardItem_NameIndex;
});

/**
 * Onyx UI Framework EditBoard
 */
define(
		"onyx/ui/editboard",
		[ "jquery", "require", "onyx/ui/widget", "onyx/utils",
				"onyx/ui/editboard/item" ],
		function($, require, Masonry) {

			var Widget = require("onyx/ui/widget");

			var Utils = require("onyx/utils");

			var EditBoardItem = require("onyx/ui/editboard/item");

			function EditBoard(options) {
				this.items = [];
				Widget.call(this, options);
			}

			EditBoard.prototype.build = function(pdom) {
				this.dom = $("<div></div>");
				this.addClass(this.dom, "onyx-ui-editboard");
				this.dom.appendTo(pdom);
				this.container = $("<div></div>");
				this.addClass(this.container, "onyx-ui-editboard", "container");
				this.container.appendTo(this.dom);
				this.container.on("mouseover", this.onMouseOver.bind(this));
				this.container.on("mouseout", this.onMouseOut.bind(this));
				this.container.on("click", this.onClick.bind(this));
				this.container.on("modify", this.onModify.bind(this));
				var self = this;
				this.getDatas(this.options.datas).done(function(datas) {
					if (datas) {
						self.buildData(datas);
					}
					self.buildAddButton();
				});
				return this.dom;
			}

			EditBoard.prototype.buildData = function(datas) {
				// calc the initial item width
				var width = datas.width || 128;
				var gap = datas.gap || 10;
				var self = this;
				$.each(datas, function(index, data) {
					var item = new EditBoardItem({
						parent : self,
						pdom : self.container,
						width : width,
						data : data
					});
					self.items.push(item);
				});
			}

			EditBoard.prototype.buildAddButton = function() {
				if (!this.options.editable) {
					return;
				}
				this.add = $("<div class='unselectable onyx-ui-editboard-item-add'>添加</div>");
				this.addClass(this.add, 'onyx-ui-editboard', 'item');
				this.add.appendTo(this.container);
				this.add.on("click", this.onClickAdd.bind(this));
			}

			EditBoard.prototype.addItem = function(event) {
				var item = new EditBoardItem();
				item.insertBefore(this.add);
				this.items.push(item);
				return item;
			}

			EditBoard.prototype.onMouseOver = function(event) {
				var target = this.getEventTarget(event, "onyx-ui-editboard",
						"item");
				if (!target) {
					return;
				}
				if (this.hoverGridItem && this.hoverGridItem != target) {
					this.removeClass(this.hoverGridItem, "onyx-ui-editboard",
							"item", "over");
				}
				this.hoverGridItem = target;
				this.addClass(this.hoverGridItem, "onyx-ui-editboard", "item",
						"over");
			}

			EditBoard.prototype.onMouseOut = function(event) {
				var target = this.getEventTarget(event, "onyx-ui-editboard",
						"item");
				if (!target) {
					return;
				}
				if (this.hoverGridItem) {
					this.removeClass(this.hoverGridItem, "onyx-ui-editboard",
							"item", "over");
				}
			}

			EditBoard.prototype.onClick = function(event) {
				var target = $(event.target);
				if (this.hasClass(target, "onyx-ui-editboard", "container")) {
					return;
				}
				this.fire("clickitem", target);
				this.fire("select", target);
			}

			EditBoard.prototype.onClickAdd = function(event) {
				event.stopPropagation();
				var item = this.addItem();
				item.startEdit();
			}

			EditBoard.prototype.onModify = function(event, modify) {
				event.stopPropagation();
				var type = modify.type;
				var key = modify.key;
				var value = modify.value;
				this.fire("modify", {
					type : type,
					key : this.getId(),
					value : value
				});
			}

			EditBoard.prototype.setData = function(datas) {
				var children = this.container.children();
				if (children) {
					children.remove();
				}
				this.buildData(datas);
			}

			Utils.inherits(EditBoard, Widget);

			return EditBoard;
		});

/**
 * Onyx UI Framework EditBoard Item
 */
define("onyx/ui/editboard/item", [ "jquery", "require", "onyx/ui/widget",
		"onyx/utils", "onyx/ui/layout", "onyx/ui/text" ], function($, require,
		Masonry) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	var Layout = require("onyx/ui/layout");

	var Text = require("onyx/ui/text");

	function EditBoardItem(options) {
		Widget.call(this, options);
	}

	EditBoardItem.prototype.build = function(pdom) {
		this.dom = $("<div></div>");
		this.addClass(this.dom, "onyx-ui-editboard-item", null);
		this.dom.appendTo(pdom);
		this.icon = $("<span class='iconfont icon-doc'></span>");
		this.addClass(this.icon, "onyx-ui-editboard-item", "icon");
		this.icon.appendTo(this.dom);
		this.text = $("<span></span>");
		this.addClass(this.text, "onyx-ui-editboard-item", "text");
		this.text.text((this.options.data && this.options.data.type) || "文本");
		this.text.appendTo(this.dom);
		this.name = new Text({
			id : "name",
			text : this.options.data && this.options.data.name,
			clazz : "onyx-ui-editboard-item-name",
			editable : true,
			pdom : this.dom
		});
		this.icon.on("modify", this.onModifyType.bind(this));
		this.name.on("modify", this.onModifyName.bind(this));
		return this.dom;
	}

	EditBoardItem.prototype.startEdit = function(data) {
		this.name.startEdit();
	}

	EditBoardItem.prototype.onModifyType = function(event, modify) {
	}

	EditBoardItem.prototype.onModifyName = function(event, modify) {
		event.stopPropagation();
		switch (modify.type) {
		case "create": {
			this.setId(modify.value);
			this.fire("modify", {
				type : "create",
				key : this.getId(),
				value : modify
			});
			break;
		}
		case "update": {
			this.fire("modify", {
				type : "update",
				key : this.getId(),
				value : modify
			});
			break;
		}
		}
	}

	EditBoardItem.prototype.setData = function(data) {
		this.data = data;
		this.dom.data(data);
	}

	EditBoardItem.prototype.getData = function() {
		return this.data;
	}

	Utils.inherits(EditBoardItem, Widget);

	return EditBoardItem;
});

/**
 * Onyx UI Framework SlideBoard
 */
define("onyx/ui/slideboard", [ "jquery", "require", "onyx/ui/widget",
		"onyx/utils" ],
		function($, require) {

			var Widget = require("onyx/ui/widget");

			var Utils = require("onyx/utils");

			function SlideBoard(options) {
				Widget.call(this, options);
				this.options = options;
			}

			SlideBoard.prototype.build = function(pdom) {
				this.dom = $("<div></div>");
				this.addClass(this.dom, "onyx-ui-slideboard");
				this.dom.appendTo(pdom);
				this.dom.on("click", this.onClickBlank.bind(this));
				this.layout = UI.createLayout({
					clazz : "onyx-ui-slideboard-layout",
					body : {

					},
					footer : {
						height : 64
					},
					pdom : this.dom
				});
				this.container = $("<div></div>");
				this
						.addClass(this.container, "onyx-ui-slideboard",
								"container");
				this.container.appendTo(this.layout.getBody());
				this.container.on("mouseover", this.onMouseOver.bind(this));
				this.container.on("mouseout", this.onMouseOut.bind(this));
				this.container.on("click", this.onClickItem.bind(this));
				var self = this;
				this.getDatas(this.options.datas).done(function(datas) {
					self.buildData(datas);
				});
				return this.dom;
			}

			SlideBoard.prototype.buildData = function(datas) {
				var self = this;
				$.each(datas, function(index, data) {
					var item = $("<div></div>");
					self.addClass(item, "onyx-ui-slideboard", "item");
					item.appendTo(self.container);
					var icon = $("<img></img>");
					icon.attr("src", "/onyxapi/v1/image/" + data.id + ".png");
					self.addClass(icon, "onyx-ui-slideboard", "item", "icon");
					icon.appendTo(item);
					var text = $("<span></span>");
					self.addClass(text, "onyx-ui-slideboard", "item", "text");
					text.text(data.name);
					text.appendTo(item);
					item.data(data);
				});
			}

			SlideBoard.prototype.search = function(text) {
				this.container.children().remove();
				var self = this;
				var search = this.options.search;
				if (!search) {
					return;
				}
				search(text).done(function(datas) {
					self.buildData(datas);
				})
			}

			SlideBoard.prototype.onMouseOver = function(event) {
				var target = this.getEventTarget(event, "onyx-ui-slideboard",
						"item");
				if (!target) {
					return;
				}
				if (this.hoverGridItem && this.hoverGridItem != target) {
					this.removeClass(this.hoverGridItem, "onyx-ui-slideboard",
							"item", "over");
				}
				this.hoverGridItem = target;
				this.addClass(this.hoverGridItem, "onyx-ui-slideboard", "item",
						"over");
			}

			SlideBoard.prototype.onMouseOut = function(event) {
				var target = this.getEventTarget(event, "onyx-ui-slideboard",
						"item");
				if (!target) {
					return;
				}
				if (this.hoverGridItem) {
					this.removeClass(this.hoverGridItem, "onyx-ui-slideboard",
							"item", "over");
				}
			}

			SlideBoard.prototype.onClickItem = function(event) {
				event.stopPropagation();
				var target = this.getEventTarget(event, "onyx-ui-slideboard",
						"item");
				if (!target) {
					this.fire("clickblank");
					return;
				}
				this.fire("clickitem", target);
			}

			SlideBoard.prototype.onClickBlank = function(event) {
				this.fire("clickblank");
			}

			SlideBoard.prototype.setData = function(datas) {
				var children = this.container.children();
				if (children) {
					children.remove();
				}
				this.buildData(datas);
			}

			Utils.inherits(SlideBoard, Widget);

			return SlideBoard;
		});

/**
 * Onyx UI Framework Upload Board
 */
define(
		"onyx/ui/uploadboard",
		[ "jquery", "require", "onyx/ui/widget", "onyx/utils" ],
		function($, require) {

			var Widget = require("onyx/ui/widget");

			var Utils = require("onyx/utils");

			function UploadBoard(options) {
				this.items = [];
				Widget.call(this, options);
			}

			UploadBoard.prototype.build = function(pdom) {
				this.dom = $("<div/>");
				this.addClass(this.dom, "onyx-ui-uploadboard");
				this.dom.appendTo(pdom);
				this.buildUploader();
				return this.dom;
			}

			UploadBoard.prototype.buildUploader = function() {
				var wrapper = $("<div/>");
				this.addClass(wrapper, "onyx-ui-uploadboard", "wrapper");
				wrapper.appendTo(this.dom);
				var item = $("<div/>");
				this.addClass(item, "onyx-ui-uploadboard", "uploader");
				item.appendTo(wrapper);
				var add = $("<span class='iconfont icon-add'></span>");
				this.addClass(add, "onyx-ui-uploadboard", "uploader", "add");
				add.appendTo(item);
				var input = $("<input class='hidden' type='file' id='file' name='file' />");
				input.appendTo(this.dom);
				var self = this;
				input.on("change", this.onUpload.bind(this, item, input));
				item.on("click", this.onClickUploader.bind(this, input));
				return item;
			}

			UploadBoard.prototype.onClickUploader = function(input, event) {
				event.preventDefault();
				input.trigger('click');
			}

			UploadBoard.prototype.onUpload = function(item, input, event) {
				input.remove();
				this.setItemWaitting(item);
				var self = this;
				var file = event.target.files[0];
				Api.file().upload(file).done(function(files) {
					self.onFinishUpload(item, files);
				});
			}

			UploadBoard.prototype.setItemWaitting = function(item) {
				// set item to waitting
				item.removeClass("iconfont");
				item.removeClass("icon-add");
				item.children().remove();
				var icon = $("<img src='/static/images/waitting.gif'></img>");
				this.addClass(icon, "onyx-ui-uploadboard", "uploader",
						"waitting");
				icon.appendTo(item);
			}

			UploadBoard.prototype.onFinishUpload = function(item, files) {
				var file = files[0];
				item.children().remove();
				var input = $("<input class='hidden' id='fileid' name='fileid' />");
				input.val(file.id);
				input.appendTo(item);
				var icon = $("<span class='iconfont'></span>");
				var format = file.name.substr(file.name.lastIndexOf('.') + 1);
				icon.addClass("icon-format-" + format);
				this.addClass(icon, "onyx-ui-uploadboard", "uploader", "icon");
				icon.appendTo(item);
				var name = $("<span class='ellipsis'></span>");
				name.text(file.name);
				this.addClass(name, "onyx-ui-uploadboard", "uploader", "name");
				name.appendTo(item);
				var uploaded = this.hasClass(item, "onyx-ui-uploadboard",
						"uploader", "uploaded");
				if (!uploaded) {
					this.buildUploader();
				}
				this.addClass(item, "onyx-ui-uploadboard", "uploader",
						"uploaded");
				this.fire("upload", file);
			}

			Utils.inherits(UploadBoard, Widget);

			return UploadBoard;
		});

/**
 * Onyx UI Framework Table Board
 */
define("onyx/ui/tableboard", [ "jquery", "require", "handsontable",
		"onyx/ui/widget", "onyx/utils", "onyx/ui/dialog" ],
		function($, require) {

			var Widget = require("onyx/ui/widget");

			var Utils = require("onyx/utils");

			var Dialog = require("onyx/ui/dialog");

			var Handsontable = require("handsontable");

			function TableBoard(options) {
				this.items = [];
				Widget.call(this, options);
			}

			TableBoard.prototype.build = function(pdom) {
				this.dom = $("<div/>");
				this.addClass(this.dom, "onyx-ui-tableboard");
				this.dom.appendTo(pdom);
				this.buildItem();
				this.dom.on("click", this.onClickItem.bind(this));
				return this.dom;
			}

			TableBoard.prototype.buildItem = function() {
				var wrapper = $("<div/>");
				this.addClass(wrapper, "onyx-ui-tableboard", "wrapper");
				wrapper.appendTo(this.dom);
				var item = $("<div class=''/>");
				this.addClass(item, "onyx-ui-tableboard", "item");
				item.appendTo(wrapper);
				var add = $("<span class='iconfont icon-add'></span>");
				this.addClass(add, "onyx-ui-tableboard", "item", "add");
				add.appendTo(item);
				this.items.push(item);
				return item;
			}

			TableBoard.prototype.onClickItem = function(event) {
				event.preventDefault();
				var target = this.getEventTarget(event, "onyx-ui-tableboard",
						"item");
				if (!target) {
					return;
				}
				this.startEditTable(target);
			}

			TableBoard.prototype.startEditTable = function(item) {
				this.dialog = new Dialog({
					clazz : "onyx-ui-tableboard-dialog",
					title : "编辑数据",
					width : 800,
					height : 600,
					content : this.buildDialogContent.bind(this, item),
					buttons : [ "ok", "close" ]
				});
				var self = this;
				this.dialog.on("ok", this.onSubmitTable.bind(this, item));
			}

			TableBoard.prototype.onSubmitTable = function(item, event) {
				var uploaded = this.hasClass(item, "onyx-ui-tableboard",
						"item", "added");
				if (uploaded) {
					var data = this.handsontable.getData();
					var input = item.children("input");
					input.val(JSON.stringify(data));
					return;
				}
				this.addClass(item, "onyx-ui-tableboard", "item", "added");
				item.removeClass("iconfont");
				item.removeClass("icon-add");
				item.children().remove();
				var tableName = "表格" + this.items.length
				var input = $("<input HIDDEN></input>");
				input.attr("name", tableName);
				var data = this.handsontable.getData();
				input.val(JSON.stringify(data));
				input.appendTo(item);
				var icon = $("<span class='iconfont icon-data1'></span>");
				this.addClass(icon, "onyx-ui-tableboard", "item", "icon");
				icon.appendTo(item);
				var name = $("<span class='ellipsis'></span>");
				name.text(tableName);
				this.addClass(name, "onyx-ui-tableboard", "item", "name");
				name.appendTo(item);
				this.buildItem();
			}

			TableBoard.prototype.buildDialogContent = function(item, options) {
				var input = item.children("input");
				var data = (input && input.val()) ? $.parseJSON(input.val())
						: Handsontable.helper.createEmptySpreadsheetData(100,
								40);
				var container = $("<div></div>");
				this.addClass(container, "onyx-ui-tableboard", "dialog",
						"container");
				container.appendTo(options.pdom);
				this.handsontable = new Handsontable(container[0], {
					data : data,
					rowcount : 100,
					colcount : 30,
					comments : true,
					rowHeaders : true,
					colHeaders : true,
					colWidths : 80,
					rowHeights : 23,
					autoRowSize : false,
					autoColSize : false
				});
				return this;
			}

			Utils.inherits(TableBoard, Widget);

			return TableBoard;
		});

/**
 * Onyx UI Framework Float Panel
 */
define("onyx/ui/floatpanel", [ "jquery", "require", "onyx/ui/widget",
		"onyx/utils" ], function($, require) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	function FloatPanel(options) {
		Widget.call(this, options);
		this.options = options;
	}

	FloatPanel.prototype.build = function(pdom) {
		this.dom = $("<div/>");
		this.addClass(this.dom, "onyx-ui-floatpanel");
		this.dom.appendTo(pdom);
		var self = this;
		this.getDatas(this.options.datas).done(function(datas) {
			$.each(datas, function(index, data) {
				// self.buildItem(data, self.dom);
			})
		});
		return this.dom;
	}

	Utils.inherits(FloatPanel, Widget);

	return FloatPanel;
});

/**
 * Onyx UI Framework Float Panel
 */
define("onyx/ui/menu", [ "jquery", "require", "onyx/ui/widget", "onyx/utils" ],
		function($, require) {

			var Widget = require("onyx/ui/widget");

			var Utils = require("onyx/utils");

			function Menu(options) {
				Widget.call(this, options);
				this.options = options;
			}

			Menu.prototype.build = function(pdom) {
				this.dom = $("<div/>");
				this.addClass(this.dom, "onyx-ui-menu");
				this.dom.appendTo(pdom);
				var self = this;
				this.getDatas(this.options.datas).done(function(datas) {
					$.each(datas, function(index, data) {
						// self.buildItem(data, self.dom);
					})
				});
				return this.dom;
			}

			Utils.inherits(Menu, Widget);

			return Menu;
		});

/**
 * Onyx UI Framework Explorer
 */
define("onyx/ui/explorer", [ "jquery", "require", "onyx/ui/widget",
		"onyx/utils", "onyx/ui/layout", "onyx/ui/toolbar",
		"onyx/ui/resourcepath", "onyx/ui/resourcegrid" ], function($, require) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	var Layout = require("onyx/ui/layout");

	var Toolbar = require("onyx/ui/toolbar");

	var ResourcePath = require("onyx/ui/resourcepath");

	var ResourceGrid = require("onyx/ui/resourcegrid");

	function Explorer(options) {
		Widget.call(this, options);
		this.options = options;
	}

	Explorer.prototype.build = function(pdom) {
		this.dom = $("<div/>");
		this.addClass(this.dom, "onyx-ui-explorer");
		this.dom.appendTo(pdom);
		this.layout = new Layout({
			header : {
				height : 32
			},
			body : {
				height : 32
			},
			footer : {

			},
			pdom : this.dom
		});
		var self = this;
		this.getDatas(this.options.datas).done(function(datas) {
			self.buildToolbar(self.layout.getHeader());
			self.buildResourcePath(datas.pathes, self.layout.getBody());
			self.buildResourceGrid(datas.resources, self.layout.getFooter());
		})
		return this.dom;
	}

	Explorer.prototype.buildToolbar = function(pdom) {
		this.toolbar = new Toolbar({
			pdom : pdom
		});
		this.toolbar.createLeftButton({
			id : "create",
			caption : "新建",
			icon : "icon-add",
			uri : "/editor"
		});
		this.toolbar.createLeftButton({
			id : "remove",
			caption : "删除",
			icon : "icon-remove",
			uri : "/editor"
		});
		this.toolbar.createLeftButton({
			id : "move",
			caption : "移动",
			icon : "icon-move",
			uri : "/editor"
		});
	}

	Explorer.prototype.buildResourcePath = function(datas, pdom) {
		var path = new ResourcePath({
			datas : datas,
			pdom : pdom
		});
	}

	Explorer.prototype.buildResourceGrid = function(datas, pdom) {
		this.grid = new ResourceGrid({
			datas : datas,
			pdom : pdom
		});
	}

	Utils.inherits(Explorer, Widget);

	return Explorer;
});

/**
 * Onyx UI Framework Explorer
 */
define("onyx/ui/resourcebrowser", [ "jquery", "require", "onyx/ui/widget",
		"onyx/utils", "onyx/ui/layout", "onyx/ui/toolbar",
		"onyx/ui/resourcepath", "onyx/ui/resourcegrid", "onyx/ui/showboard",
		"onyx/ui/searchbox" ], function($, require) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	var Layout = require("onyx/ui/layout");

	var Toolbar = require("onyx/ui/toolbar");

	var ResourcePath = require("onyx/ui/resourcepath");

	var ResourceGrid = require("onyx/ui/resourcegrid");

	var ShowBoard = require("onyx/ui/showboard");

	var SearchBox = require("onyx/ui/searchbox");

	function ResourceBrowser(options) {
		Widget.call(this, options);
		this.options = options;
	}

	ResourceBrowser.prototype.build = function(pdom) {
		this.dom = $("<div/>");
		this.addClass(this.dom, "onyx-ui-resourcebrowser");
		this.dom.appendTo(pdom);
		this.layout = new Layout({
			clazz : "onyx-ui-resourcebrowser-layout",
			header : {
				height : 36
			},
			body : {},
			pdom : this.dom
		});
		var self = this;
		this.getDatas(this.options.datas).done(function(datas) {
			self.buildHeader(self.layout.getHeader());
			self.buildBody(datas, self.layout.getBody());
		})
		return this.dom;
	}

	ResourceBrowser.prototype.buildHeader = function(pdom) {
		this.headerLayout = new Layout({
			left : {
				width : 128
			},
			middle : {

			},
			right : {
				width : 128
			},
			pdom : pdom
		});
		this.searchbox = new SearchBox({
			clazz : "onyx-ui-resourcebrowser-searchbox",
			pdom : this.headerLayout.getLeft()
		});
		this.toolbar = new Toolbar({
			pdom : this.headerLayout.getMiddle()
		});
		this.toolbar.createLeftButton({
			id : "create",
			caption : "新建",
			icon : "icon-add",
			uri : "/editor"
		});
		this.toolbar.createLeftButton({
			id : "remove",
			caption : "删除",
			icon : "icon-remove",
			uri : "/editor"
		});
		this.toolbar.createLeftButton({
			id : "move",
			caption : "移动",
			icon : "icon-move",
			uri : "/editor"
		});
	}

	ResourceBrowser.prototype.buildBody = function(datas, pdom) {
		this.showboard = new ShowBoard({
			datas : datas,
			width : 64,
			pdom : pdom
		});
	}

	ResourceBrowser.prototype.refresh = function(datas) {
		var self = this;
		this.getDatas(this.options.datas).done(function(datas) {
			self.showboard.setData(datas);
		})
		return $.dfd(this);
	}

	Utils.inherits(ResourceBrowser, Widget);

	return ResourceBrowser;
});

/**
 * Onyx UI Framework Resource View
 */
define("onyx/ui/resourcepath", [ "jquery", "require", "onyx/ui/widget",
		"onyx/utils", "onyx/ui/icon" ], function($, require) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	var Icon = require("onyx/ui/icon");

	function ResourcePath(options) {
		Widget.call(this, options);
		this.options = options;
	}

	ResourcePath.prototype.build = function(pdom) {
		this.dom = $("<div/>");
		this.addClass(this.dom, "onyx-ui-resourcepath");
		this.dom.appendTo(pdom);
		var self = this;
		this.getDatas(this.options.datas).done(function(datas) {
			self.buildResourcePathItems(datas);
		});
		return this.dom;
	}

	ResourcePath.prototype.buildResourcePathItems = function(datas) {
		for (var i = 0; i < datas.length; i++) {
			var item = datas[i];
			var itemIcon = new Icon({
				clazz : "onyx-ui-resourcepath-item",
				id : item.id,
				icon : item.icon,
				caption : item.name,
				path : item.path,
				pdom : this.dom
			});
			if (i == datas.length - 1) {
				continue;
			}
			var splitIcon = new Icon({
				clazz : "onyx-ui-resourcepath-split",
				id : "split",
				icon : "icon-chevron-right",
				pdom : this.dom
			});
		}
	}
	Utils.inherits(ResourcePath, Widget);

	return ResourcePath;
});

/**
 * Onyx UI Framework Resource View
 */
define("onyx/ui/resourcegrid", [ "jquery", "require", "onyx/ui/widget",
		"onyx/utils" ], function($, require) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	function ResourceGrid(options) {
		Widget.call(this, options);
		this.options = options;
	}

	ResourceGrid.prototype.build = function(pdom) {
		this.dom = $("<div/>");
		this.addClass(this.dom, "onyx-ui-resourcegrid");
		this.dom.appendTo(pdom);
		var self = this;
		this.getDatas(this.options.datas).done(function(datas) {
			self.buildResourceGridItem(datas);
		});
		this.dom.on("mouseover", ".onyx-ui-resourcegrid-item",
				this.onMouseOverItem.bind(this));
		this.dom.on("click", ".onyx-ui-resourcegrid-item", this.onClickItem
				.bind(this));
		return this.dom;
	}

	ResourceGrid.prototype.buildResourceGridItem = function(datas) {
		for (var i = 0; i < datas.length; i++) {
			var data = datas[i];
			var itemDom = $("<div/>");
			this.addClass(itemDom, "onyx-ui-resourcegrid", "item");
			var span = $("<span class='iconfont'/>");
			this.addClass(span, "onyx-ui-resourcegrid", "item", "icon");
			span.addClass(data.icon);
			span.appendTo(itemDom);
			var text = $("<span/>");
			this.addClass(text, "onyx-ui-resourcegrid", "item", "text");
			text.text(data.name);
			text.appendTo(itemDom);
			var check = $("<span class='iconfont icon-check-circle'/>");
			this.addClass(check, "onyx-ui-resourcegrid", "item", "check");
			check.appendTo(itemDom);
			itemDom.appendTo(this.dom);
		}
	}

	ResourceGrid.prototype.onMouseOverItem = function(event) {
		var target = $(event.target);
		if (!target.hasClass("onyx-ui-resourcegrid-item")) {
			return;
		}
		if (this.hoverGridItem) {
			this.hoverGridItem.removeClass("onyx-ui-resourcegrid-item-over");
			this.hoverGridItem.children(".onyx-ui-resourcegrid-item-check")
					.css("display", "none");
		}
		this.hoverGridItem = target;
		this.hoverGridItem.addClass("onyx-ui-resourcegrid-item-over");
		this.hoverGridItem.children(".onyx-ui-resourcegrid-item-check").css(
				"display", "block");
	}

	ResourceGrid.prototype.onClickItem = function(event) {
		var target = $(event.target);
		if (!target.hasClass("onyx-ui-resourcegrid-item")) {
			return;
		}
		this.redirect(this.options.root + "/UUID");
	}

	Utils.inherits(ResourceGrid, Widget);

	return ResourceGrid;
});

/**
 * Onyx UI Framework Resource View
 */
define("onyx/ui/resourcelist", [ "jquery", "require", "onyx/ui/widget",
		"onyx/utils" ], function($, require) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	function ResourceList(options) {
		Widget.call(this, options);
		this.options = options;
	}

	ResourceList.prototype.build = function(pdom) {
		this.dom = $("<div/>");
		this.addClass(this.dom, "onyx-ui-resourcelist");
		this.dom.appendTo(pdom);
		this.buildListItems(this.dom);
		return this.dom;
	}

	ResourceList.prototype.buildListItems = function(pdom) {
		var self = this;
		this.getDatas().done(function(datas) {
			for (var i = 0; i < datas.length; i++) {
				var item = $("<div/>");
				self.addClass(item, "onyx-ui-resourcelist", "item");
				item.appendTo(pdom);
			}
		});
	}

	Utils.inherits(ResourceList, Widget);

	return ResourceList;
});

/**
 * Onyx UI Framework Form
 */
define("onyx/ui/form",
		[ "jquery", "require", "onyx/ui/widget", "onyx/utils",
				"onyx/ui/form/input", "onyx/ui/form/searchinput",
				"onyx/ui/form/items" ], function($, require) {

			var Widget = require("onyx/ui/widget");

			var Utils = require("onyx/utils");

			function Form(options) {
				Widget.call(this, options);
			}

			Form.prototype.build = function(pdom) {
				this.dom = $("<form class='onyx-ui-form'></form>");
				this.dom.appendTo(pdom);
				var self = this;
				this.fields = {};
				this.buildFields(this.options.fields);
				return this.dom;
			}

			Form.prototype.buildFields = function(fields) {
				for (var i = 0; i < fields.length; i++) {
					var row = $("<div></div>");
					this.addClass(row, "onyx-ui-form", "row");
					row.appendTo(this.dom);
					var field = fields[i];
					if (field.options && field.options.hidden) {
						row.addClass("hidden");
					}
					if (field.type) {
						var Field = require(field.type);
						this.fields[field.name] = new Field($.extend({
							pdom : row
						}, field));
					}
				}
			}

			Form.prototype.getData = function() {
				var data = {};
				$.each(this.fields, function(k, v) {
					data[k] = v.getValue();
				});
				return $.dfd(data);
			}

			Form.prototype.setData = function(data) {
				$.each(this.fields, function(name, field) {
					var value = data[name];
					field.setValue(value);
				});
			}

			/**
			 * refresh form with options
			 */
			Form.prototype.show = function(fields) {
				this.buildFields(fields);
			}

			Utils.inherits(Form, Widget);

			return Form;
		});

/**
 * Onyx UI Framework Form
 */
define("onyx/ui/form/input", [ "jquery", "require", "onyx/ui/widget",
		"onyx/utils" ], function($, require) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	function FormInput(options) {
		Widget.call(this, options);
	}

	FormInput.prototype.build = function(pdom) {
		this.dom = $("<div class='onyx-ui-form-input'></div>");
		this.dom.appendTo(pdom);
		var fieldlabel = this.options.label || this.options.caption;
		if (fieldlabel) {
			this.name = $("<span class='onyx-ui-form-input-name'/>");
			this.name.text(fieldlabel);
			this.name.appendTo(this.dom);
		}
		this.value = $("<input class='onyx-ui-form-input-value'/>");
		if (this.options.value) {
			this.value.val(this.options.value);
		}
		this.value.appendTo(this.dom);
		return this.dom;
	}

	FormInput.prototype.getValue = function() {
		return this.value.val();
	}

	FormInput.prototype.setValue = function(value) {
		return this.value.val(value);
	}

	Utils.inherits(FormInput, Widget);

	return FormInput;
});

/**
 * Onyx UI Framework Form Search Input
 */
define("onyx/ui/form/searchinput", [ "jquery", "require", "onyx/ui/widget",
		"onyx/utils" ], function($, require) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	function FormSearchInput(options) {
		Widget.call(this, options);
		this.selects = {};
	}

	FormSearchInput.prototype.build = function(pdom) {
		this.dom = $("<div/>");
		this.addClass(this.dom, "onyx-ui-form-searchinput");
		this.dom.appendTo(pdom);
		this.header = $("<div/>");
		this.addClass(this.header, "onyx-ui-form-searchinput", "header");
		this.header.appendTo(this.dom);
		var fieldlabel = this.options.label || this.options.caption;
		if (fieldlabel) {
			this.name = $("<span/>");
			this.addClass(this.name, "onyx-ui-form-searchinput", "name");
			this.name.text(fieldlabel);
			this.name.appendTo(this.header);
		}
		this.value = $("<input/>");
		this.addClass(this.value, "onyx-ui-form-searchinput", "value");
		if (this.options.value) {
			this.value.val(this.options.value);
		}
		this.value.appendTo(this.header);
		this.value.on("change", this.onSearch.bind(this));
		this.icon = $("<span class='iconfont icon-search'/>");
		this.addClass(this.icon, "onyx-ui-form-searchinput", "icon");
		this.icon.appendTo(this.header);
		this.panel = $("<div/>");
		this.addClass(this.panel, "onyx-ui-form-searchinput", "panel");
		this.panel.text("搜索关联对象...");
		this.panel.appendTo(this.dom);
		this.panel.on("mouseover", this.onMouseOverPanel.bind(this));
		this.panel.on("mouseout", this.onMouseOutPanel.bind(this));
		this.panel.on("click", this.onClickPanel.bind(this));
		this.search("");
		return this.dom;
	}

	FormSearchInput.prototype.buildSearchPanel = function(text, items) {
		this.panel.text("");
		this.panel.children().remove();
		if (!items) {
			return;
		}
		// TODO if not exists
		if (text && text != "") {
			var dom = this.buildSearchPanelItem({
				id : null,
				name : text
			});
			dom.css("background-color", "blue");
		}
		for (var i = 0; i < items.length; i++) {
			var item = items[i];
			this.buildSearchPanelItem(item);
		}
	}

	FormSearchInput.prototype.buildSearchPanelItem = function(item) {
		var itemdom = $("<div/>");
		this.addClass(itemdom, "onyx-ui-form-searchinput", "panel", "item");
		itemdom.text(item.name);
		itemdom.attr("id", item.id);
		itemdom.data(item);
		itemdom.appendTo(this.panel);
		return itemdom;
	}

	FormSearchInput.prototype.getValue = function() {
		var result = [];
		for ( var id in this.selects) {
			var select = this.selects[id];
			if (!select) {
				continue;
			}
			result.push(select);
		}
		return result;
	}

	FormSearchInput.prototype.setValue = function(value) {
		this.selects = value;
		return $.dfd(this.selects);
	}

	FormSearchInput.prototype.search = function(text) {
		var search = this.options.on["search"];
		var self = this;
		search.call(this, text).done(function(items) {
			self.buildSearchPanel(text, items);
		});
	}

	FormSearchInput.prototype.onSearch = function(event) {
		var text = this.value.val();
		this.search(text)
	}

	FormSearchInput.prototype.onMouseOverPanel = function(event) {
		var target = this.getEventTarget(event,
				"onyx-ui-form-searchinput-panel", "item");
		if (!target) {
			return;
		}
		if (this.hoverItem) {
			this.removeClass(this.hoverItem, "onyx-ui-form-searchinput-panel",
					"item", "over");
		}
		this.hoverItem = target;
		this.addClass(this.hoverItem, "onyx-ui-form-searchinput", "panel-item",
				"over");
	}

	FormSearchInput.prototype.onMouseOutPanel = function(event) {
		var target = this.getEventTarget(event,
				"onyx-ui-form-searchinput-panel", "item");
		if (!target) {
			return;
		}
		if (this.hoverItem) {
			this.removeClass(this.hoverItem, "onyx-ui-form-searchinput-panel",
					"item", "over");
		}
	}

	FormSearchInput.prototype.onClickPanel = function(event) {
		var target = this.getEventTarget(event,
				"onyx-ui-form-searchinput-panel", "item");
		if (!target) {
			return;
		}
		var item = target.data();
		if (this.isSelected(item)) {
			target.css("background-color", "#88B6D8");
			this.unselect(item);
		} else {
			target.css("background-color", "red");
			this.select(item);
		}
	}

	FormSearchInput.prototype.isSelected = function(item) {
		if (this.selects[item.id]) {
			return true;
		}
		return false;
	}

	FormSearchInput.prototype.select = function(item) {
		this.selects[item.id] = item;
	}

	FormSearchInput.prototype.unselect = function(item) {
		this.selects[item.id] = null;
	}

	Utils.inherits(FormSearchInput, Widget);

	return FormSearchInput;
});

/**
 * Onyx UI Framework Form
 */
define("onyx/ui/form/items", [ "jquery", "require", "onyx/ui/widget",
		"onyx/utils", "onyx/ui/form/item" ], function($, require) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	var FormItem = require("onyx/ui/form/item");

	function FormItems(options) {
		Widget.call(this, options);
	}

	FormItems.prototype.build = function(pdom) {
		this.items = [];
		this.dom = $("<div></div>");
		this.addClass(this.dom, 'onyx-ui-form-items', null);
		this.dom.appendTo(pdom);
		this.add = $("<div>添加</div>");
		this.addClass(this.add, 'onyx-ui-form-items', 'add');
		this.add.appendTo(this.dom);
		this.add.on("click", this.addItem.bind(this));
		return this.dom;
	}

	FormItems.prototype.addItem = function(event) {
		var item = new FormItem();
		item.insertBefore(this.add);
		this.items.push(item);
		return item;
	}

	FormItems.prototype.getValue = function() {
		var result = [];
		var self = this;
		$.each(this.items, function(i) {
			result.push(self.items[i].getValue());
		});
		return result;
	}
	FormItems.prototype.setValue = function(value) {
		var self = this;
		$.each(value, function(i) {
			var v = value[i];
			var item = self.addItem();
			item.setValue(v);
		});
	}

	Utils.inherits(FormItems, Widget);

	return FormItems;
});

/**
 * Onyx UI Framework Form
 */
define("onyx/ui/form/item", [ "jquery", "require", "onyx/ui/widget",
		"onyx/utils" ], function($, require) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	function FormItem(options) {
		Widget.call(this, options);
	}

	FormItem.prototype.build = function(pdom) {
		this.dom = $("<div></div>");
		this.addClass(this.dom, "onyx-ui-form-item", null);
		this.dom.appendTo(pdom);
		this.icon = $("<span class='iconfont icon-doc'></span>");
		this.addClass(this.icon, "onyx-ui-form-item", "icon");
		this.icon.appendTo(this.dom);
		this.text = $("<span contenteditable='true'></span>");
		this.addClass(this.text, "onyx-ui-form-item", "text");
		this.text.appendTo(this.dom);
		this.name = $("<span contenteditable='true'></span>");
		this.addClass(this.name, "onyx-ui-form-item", "name");
		this.name.appendTo(this.dom);
		return this.dom;
	}

	FormItem.prototype.getValue = function() {
		return this.text.text();
	}

	FormItem.prototype.setValue = function(value) {
		this.text.text(value);
	}

	Utils.inherits(FormItem, Widget);

	return FormItem;
});

/**
 * Onyx UI Framework Float Panel
 */
define(
		"onyx/ui/submiter",
		[ "jquery", "require", "onyx/ui/widget", "onyx/utils" ],
		function($, require) {

			var Widget = require("onyx/ui/widget");

			var Utils = require("onyx/utils");

			function Submiter(options) {
				Widget.call(this, options);
				this.options = options;
			}

			Submiter.prototype.build = function(pdom) {
				this.dom = $("<div class='shadow'/>");
				this.addClass(this.dom, "onyx-ui-submiter");
				this.dom.appendTo(pdom);
				this.buildSender();
				return this.dom;
			}

			Submiter.prototype.buildSender = function() {
				this.header = $("<span/>");
				this.header.text("有什么想要爆料的？");
				this.addClass(this.header, "onyx-ui-submiter", "header");
				this.header.appendTo(this.dom);
				this.sendForm = $("<form method='post' enctype='multipart/form-data'></form>");
				this.addClass(this.sendForm, "onyx-ui-submiter", "form");
				this.sendForm.appendTo(this.dom);
				this.multipage = UI.createMultiPage({
					on : {
						modify : this.onModify.bind(this)
					},
					clazz : "onyx-ui-submiter-multipage",
					pdom : this.sendForm
				});
				this.toolbar = $("<span/>");
				this.addClass(this.toolbar, "onyx-ui-submiter", "toolbar");
				this.toolbar.appendTo(this.dom);
				var self = this;
				this.navbar = UI.createNavBar({
					on : {
						"switch" : function(event, item) {
							self.multipage.showPage(item);
						}
					},
					clazz : "onyx-ui-submiter-tool-left",
					theme : "footer",
					active : "text",
					items : [ {
						id : "text",
						compname : "onyx/ui/textarea",
						editable : true,
						name : "name",
						placeholder : "(●′ω`●)...",
						icon : "icon-message",
						caption : "文字",
					}, {
						id : "doc",
						compname : "onyx/ui/uploadboard",
						icon : "icon-doc",
						caption : "文件",
					}, {
						id : "table",
						compname : "onyx/ui/tableboard",
						editable : true,
						icon : "icon-table",
						caption : "表格",
					}, {
						id : "url",
						compname : "onyx/ui/text",
						editable : true,
						placeholder : "双击编辑",
						icon : "icon-link",
						caption : "网址",
					}, {
						id : "database",
						compname : "onyx/ui/editboard",
						icon : "icon-database",
						caption : "数据库",
					} ],
					pdom : this.toolbar
				});
				this.contributeButton = UI.createButton({
					clazz : "onyx-ui-submiter-tool-right",
					theme : "blue",
					id : "send",
					icon : "icon-upload",
					caption : "发布",
					pdom : this.toolbar,
					on : {
						click : this.onButtonClick.bind(this)
					}
				});
			}

			Submiter.prototype.onModify = function(event, modify) {
			}

			Submiter.prototype.onButtonClick = function(event) {
				var inputs = this.sendForm.find("input");
				var formdata = new FormData(this.sendForm[0]);
				this.fire("submit", formdata);
			}

			Utils.inherits(Submiter, Widget);

			return Submiter;
		});

/**
 * Onyx UI Framework Float Label Card
 */
define("onyx/ui/labelcard", [ "jquery", "require", "onyx/ui/widget",
		"onyx/utils" ], function($, require) {

	var Widget = require("onyx/ui/widget");

	var Utils = require("onyx/utils");

	function LabelCard(options) {
		Widget.call(this, options);
		this.options = options;
	}

	LabelCard.prototype.build = function(pdom) {
		this.dom = $("<div class='shadow'/>");
		this.addClass(this.dom, "onyx-ui-labelcard");
		this.dom.css("left", this.options.left);
		this.dom.css("top", this.options.top);
		this.dom.appendTo(pdom);
		var self = this;
		Api.label(this.options.kid).get(this.options.name).done(
				function(label) {
					self.buildCard(label, self.dom);
				});
		this.dom.on("mouseleave", this.onMouseLeave.bind(this));
		return this.dom;
	}

	LabelCard.prototype.buildCard = function(label, pdom) {
		var header = $("<div/>");
		this.addClass(header, "onyx-ui-labelcard", "header");
		header.appendTo(pdom);

		var icon = $("<div class='iconfont icon-label'/>");
		this.addClass(icon, "onyx-ui-labelcard", "icon");
		icon.appendTo(header);

		var title = $("<div/>");
		this.addClass(title, "onyx-ui-labelcard", "title");
		title.text(label.name || label);
		title.appendTo(header);

		var body = $("<div/>");
		this.addClass(body, "onyx-ui-labelcard", "body");
		body.appendTo(pdom);

		var footer = $("<div/>");
		this.addClass(footer, "onyx-ui-labelcard", "footer");
		footer.appendTo(pdom);
	}

	LabelCard.prototype.onMouseLeave = function(event) {
		this.dom.remove();
	}

	Utils.inherits(LabelCard, Widget);

	return LabelCard;
});