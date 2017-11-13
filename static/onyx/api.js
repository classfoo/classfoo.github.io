/**
 * Onyx Api
 */
define("onyx/api", [ "jquery", "require", "onyx/api/server", "onyx/api/label",
		"onyx/api/entity", "onyx/api/recommend", "onyx/api/base",
		"onyx/api/timeline", "onyx/api/material", "onyx/api/file",
		"onyx/api/image", "onyx/api/link", "onyx/api/linknames",
		"onyx/api/linknodes", "onyx/api/search", "onyx/api/event",
		"onyx/api/graph" ], function($, require) {

	var server;

	var bases = {};

	var base;

	var searches = {};

	var search;

	var labels = {};

	var label;

	var entities = {};

	var entity;

	var links = {};

	var link;

	var linknames = {};

	var linkname;

	var timelines = {};

	var timeline;

	var materials = {};

	var material;

	var base;

	var recommend;

	function Api() {
		window.Api = Api;
	}

	Api.recommend = function() {
		var Recommend = require("onyx/api/recommend");
		return new Recommend();
	}

	Api.server = function() {
		if (server) {
			return server;
		}
		var Server = require("onyx/api/server");
		server = new Server();
		return server;
	}

	Api.base = function(kid) {
		if (bases[kid]) {
			return bases[kid];
		}
		var Base = require("onyx/api/base");
		bases[kid] = new Base(kid);
		return bases[kid];
	}

	Api.search = function(kid) {
		if (!kid) {
			if (search) {
				return search;
			}
			var Search = require("onyx/api/search");
			search = new Search();
			return search;
		}
		if (searches[kid]) {
			return searches[kid];
		}
		var Search = require("onyx/api/search");
		searches[kid] = new Search(kid);
		return searches[kid];
	}

	Api.label = function(kid) {
		if (!kid) {
			if (label) {
				return label;
			}
			var Label = require("onyx/api/label");
			label = new Label();
			return label;
		}
		if (labels[kid]) {
			return labels[kid];
		}
		var Label = require("onyx/api/label");
		labels[kid] = new Label(kid);
		return labels[kid];
	}

	Api.entity = function(kid, eid) {
		if (!kid && !eid) {
			var Entity = require("onyx/api/entity");
			return new Entity();
		}
		var key = kid + eid;
		if (entities[key]) {
			return entities[key];
		}
		var Entity = require("onyx/api/entity");
		entities[key] = new Entity(kid, eid);
		return entities[key];
	}

	Api.link = function(kid) {
		if (!kid) {
			if (link) {
				return link;
			}
			var Link = require("onyx/api/link");
			link = new Link();
			return link;
		}
		if (links[kid]) {
			return links[kid];
		}
		var Link = require("onyx/api/link");
		links[kid] = new Link(kid);
		return links[kid];
	}

	Api.linknames = function(kid) {
		if (!kid) {
			if (linkname) {
				return linkname;
			}
			var LinkName = require("onyx/api/linknames");
			linkname = new LinkName();
			return linkname;
		}
		if (linknames[kid]) {
			return linknames[kid];
		}
		var LinkName = require("onyx/api/linknames");
		linknames[kid] = new LinkName(kid);
		return linknames[kid];
	}

	Api.linknodes = function() {
		var LinkNodes = require("onyx/api/linknodes");
		return new LinkNodes();
	}

	Api.timeline = function(kid) {
		if (!kid) {
			if (timeline) {
				return timeline;
			}
			var TimeLine = require("onyx/api/timeline");
			timeline = new TimeLine();
			return timeline;
		}
		if (timelines[kid]) {
			return timelines[kid];
		}
		var TimeLine = require("onyx/api/timeline");
		timelines[kid] = new TimeLine(kid);
		return timelines[kid];
	}

	Api.material = function(kid) {
		if (!kid) {
			if (material) {
				return material;
			}
			var Material = require("onyx/api/material");
			material = new Material();
			return material;
		}
		if (materials[kid]) {
			return materials[kid];
		}
		var Material = require("onyx/api/material");
		materials[kid] = new Material(kid);
		return materials[kid];
	}

	/**
	 * Api Event for entity events
	 */
	Api.event = function() {
		var Event = require("onyx/api/event");
		return new Event();
	}

	/**
	 * Api Graph for graph storage
	 */
	Api.graph = function() {
		var Graph = require("onyx/api/graph");
		return new Graph();
	}

	/**
	 * Api File for uploading and visit files
	 */
	Api.file = function() {
		var File = require("onyx/api/file");
		return new File();
	}

	/**
	 * Api Image for canvas drawing
	 */
	Api.image = function() {
		if (this.imageApi) {
			return this.imageApi;
		}
		var OnyxImage = require("onyx/api/image");
		this.imageApi = new OnyxImage();
		return this.imageApi;
	}

	Api.getResource = function(resource) {
		if (resource == null || typeof (resource) == "undefined") {
			return $.dfd({});
		}
		var type = resource.substring(0, 1);
		switch (type) {
		case 'k': {
			return Api.base().single(resource);
		}
		case 'u': {
			return $.dfd();// Api.user().single(resource);
		}
		case 'e': {
			return Api.entity().get(resource);
		}
		case 'm': {
			return Api.material().single(resource);
		}
		case 'l': {
			return Api.label().single(resource);
		}
		}
		return $.dfd({
			id : resource,
			caption : "知识库1"
		});
	}

	Api.get = function(api, options) {
		return this.ajax("get", api, options);
	}

	Api.post = function(api, options) {
		return this.ajax("post", api, options);
	}

	Api.upload = function(api, options) {
		return this.ajaxform("post", api, options);
	}

	Api.put = function(api, options) {
		return this.ajax("put", api, options);
	}

	Api.remove = function(api, options) {
		return this.ajax("delete", api, options);
	}

	Api.ajax = function(method, api, options) {
		var dfd = $.Deferred();
		var data = Api.stringifyData(options);
		$.ajax({
			method : method,
			url : "/onyxapi/v1/" + api,
			data : data,
			success : function(result) {
				dfd.resolve(result);
			},
			error : function(error) {
				dfd.resolve({});
			}
		});
		return dfd.promise();
	}

	Api.ajaxform = function(method, api, formdata) {
		var dfd = $.Deferred();
		$.ajax({
			method : method,
			url : "/onyxapi/v1/" + api,
			data : formdata,
			enctype : 'multipart/form-data',
			processData : false,
			contentType : false,
			success : function(result) {
				dfd.resolve(result);
			},
			error : function(error) {
				dfd.resolve({});
			}
		});
		return dfd.promise();
	}

	Api.stringifyData = function(options) {
		if (!options) {
			return null;
		}
		var data = {};
		$.each(options, function(k, v) {
			if (typeof (v) === "string") {
				data[k] = v;
				return;
			}
			data[k] = JSON.stringify(v);
		});
		return data;
	}
	return Api;
});

define("onyx/api/recommend", [ "jquery", "require" ], function($, require) {

	function Recommend() {
	}

	/**
	 * get Recommond list
	 * 
	 * @param offset
	 * @param limit
	 */
	Recommend.prototype.list = function(offset, limit) {
		return Api.get("timeline");
	}

	return Recommend;
});

/**
 * onyx search api
 */
define("onyx/api/search", [ "jquery", "require" ], function($, require) {

	function Search(kid) {
		this.kid = kid;
	}

	/**
	 * search all
	 */
	Search.prototype.all = function(text) {
		return Api.get("search", {
			type : "all",
			text : text
		});
	}

	/**
	 * search entity list
	 * 
	 * @param offset
	 * @param limit
	 */
	Search.prototype.searchEntities = function(text, offset, limit) {
		return Api.get("search", {
			kid : this.kid,
			type : "entity",
			text : text
		});
	}

	Search.prototype.label = function(text, offset, limit) {
		return Api.get("search", {
			kid : this.kid,
			type : "label",
			text : text
		});
	}

	return Search;
});

/**
 * Onyx Server Api
 */
define("onyx/api/server", [ "jquery", "require" ], function($, require) {

	function Server(kid) {
		this.kid = kid;
		this.bases = {};
	}

	/**
	 * get Base list
	 * 
	 * @param offset
	 * @param limit
	 */
	Server.prototype.listBases = function(offset, limit) {
		return Api.get("base");
	}

	/**
	 * create base
	 */
	Server.prototype.addBase = function(base) {
		return Api.post("base", base);
	}

	return Server;
});

define("onyx/api/base", [ "jquery", "require" ], function($, require) {

	function Base(kid) {
		this.kid = kid;
		this.bases = {};
	}

	/**
	 * get Base resource
	 */
	Base.prototype.get = function(kid) {
		var cache = this.bases[kid];
		if (cache) {
			return $.dfd(cache);
		}
		var dfd = $.Deferred();
		var self = this;
		Api.get("base/" + kid).done(function(base) {
			self.bases[kid] = base;
			dfd.resolve(base);
		});
		return dfd.promise();
	}

	/**
	 * get Base list
	 * 
	 * @param offset
	 * @param limit
	 */
	Base.prototype.list = function(offset, limit) {
		return Api.get("base");
	}

	/**
	 * get Base resource
	 */
	Base.prototype.single = function(kid) {
		return Api.get("base/" + kid);
	}

	/**
	 * create base
	 */
	Base.prototype.create = function(base) {
		return Api.post("base", base);
	}

	/**
	 * add label into base
	 */
	Base.prototype.addLabel = function(name) {
		return Api.post("label", {
			kid : this.kid,
			name : name
		});
	}

	/**
	 * list labels in base
	 */
	Base.prototype.listLabels = function() {
		return Api.get("label", {
			kid : this.kid
		});
	}

	/**
	 * search labels in base
	 */
	Base.prototype.searchLabels = function(text, offset, limit) {
		return Api.get("search", {
			kid : this.kid,
			type : "label",
			text : text
		});
	}

	/**
	 * add entity into base
	 */
	Base.prototype.addEntity = function(options) {
		var entity = $.extend({
			kid : this.kid
		}, options);
		return Api.post("entity", entity);
	}

	/**
	 * list entities in base
	 */
	Base.prototype.listEntities = function() {
		return Api.get("entity", {
			kid : this.kid
		});
	}

	/**
	 * search entities in base
	 * 
	 * @param offset
	 * @param limit
	 */
	Base.prototype.searchEntities = function(text, offset, limit) {
		return Api.get("search", {
			kid : this.kid,
			type : "entity",
			text : text
		});
	}

	Base.prototype.listGraphs = function() {
		return Api.get("graph", {
			kid : this.kid
		});
	}

	return Base;
});

/**
 * Onyx Label Api
 */
define(
		"onyx/api/label",
		[ "jquery", "require" ],
		function($, require) {

			function Label(kid) {
				this.kid = kid;
				this.labelNames = [];
				this.labelMap = {};
			}

			/**
			 * get label list
			 * 
			 * @param offset
			 * @param limit
			 */
			Label.prototype.list = function(offset, limit) {
				return Api.get("label", {
					kid : this.kid
				});
			}

			/**
			 * get label resource
			 * 
			 * @param lid
			 */
			Label.prototype.get = function(lid) {
				return Api.get("label/" + lid);
			}

			/**
			 * get label image
			 * 
			 * @param name
			 */
			Label.prototype.image = function(name) {
				var dfd = $.Deferred();
				Api
						.get("label/" + name, {
							kid : this.kid
						})
						.done(
								function(label) {
									var icon = (label.properties && label.properties.icon)
											|| "\ue66f";
									var color = (label.properties && label.properties.background)
											|| "#C5DBF0";
									var background = (label.properties && label.properties.color)
											|| "white";
									var canvasOffscreen = document
											.createElement('canvas');
									canvasOffscreen.width = 64;
									canvasOffscreen.height = 64;
									var context = canvasOffscreen
											.getContext('2d');
									context.save();
									context.beginPath();
									context.moveTo(0, 0);
									context.rect(0, 0, 64, 64);
									context.font = "48px iconfont";
									context.textAlign = "center";
									context.fillStyle = background;
									context.fill();
									context.fillStyle = color;
									context.fillText(icon, 32, 48);
									context.closePath();
									context.restore();
									dfd.resolve(canvasOffscreen);
								});
				return dfd.promise();
			}

			/**
			 * get label properties by name
			 */
			Label.prototype.properties = function(name) {
				return $.dfd([ {}, {}, {}, {} ]);
			}

			/**
			 * get label parents by name
			 */
			Label.prototype.parents = function(name) {
				return $.dfd([ {}, {}, {}, {} ]);
			}

			/**
			 * save label modifies
			 * 
			 * @param kid
			 * @param lid
			 * @param modifies
			 */
			Label.prototype.save = function(options) {
				return Api.post("label", options);
			}
			return Label;
		});

/**
 * Onyx Entity Api
 */
define("onyx/api/entity", [ "jquery", "require" ], function($, require) {

	function Entity(kid, eid) {
		this.kid = kid;
		this.id = eid;
		this.entityNames = [];
		this.entityMap = {};
	}

	/**
	 * get entity list
	 * 
	 * @param offset
	 * @param limit
	 */
	Entity.prototype.list = function(offset, limit) {
		return Api.get("entity", {
			kid : this.kid
		});
	}

	/**
	 * get entity resource
	 * 
	 * @param eid
	 */
	Entity.prototype.get = function(eid) {
		return Api.get("entity/" + eid);
	}

	/**
	 * create entity
	 * 
	 * @param kid
	 * @param lid
	 * @param modifies
	 */
	Entity.prototype.create = function(options) {
		var entity = $.extend({
			kid : this.kid
		}, options);
		return Api.post("entity", entity);
	}

	/**
	 * add entity Label
	 * 
	 * @param kid
	 * @param lid
	 * @param modifies
	 */
	Entity.prototype.addLabels = function(options) {
		return Api.post("entitylabel", {
			kid : this.kid,
			eid : options.eid,
			labels : options.labels
		});
	}

	/**
	 * add entity Label
	 * 
	 * @param kid
	 * @param lid
	 * @param modifies
	 */
	Entity.prototype.addProperty = function(options) {
		return Api.post("entityproperty", {
			id : this.id,
			name : options.name,
			value : options.value
		});
	}

	/**
	 * save entity modifies
	 * 
	 * @param kid
	 * @param lid
	 * @param modifies
	 */
	Entity.prototype.save = function(options) {
		return Api.post("entity", options);
	}

	/**
	 * query links
	 * 
	 * @param id
	 */
	Entity.prototype.links = function(options) {
		return Api.get("link", options);
	}

	return Entity;
});

/**
 * Onyx Link Api
 */
define("onyx/api/link", [ "jquery", "require" ], function($, require) {

	function Link(kid) {
		this.kid = kid;
	}

	/**
	 * get link names by source
	 * 
	 * @param eid
	 * @param offset
	 * @param limit
	 */
	Link.prototype.names = function(eid, offset, limit) {
		return Api.get("link", {
			kid : this.kid,
			eid : eid
		});
	}

	Link.prototype.addLinks = function(links) {
		return Api.post("link", {
			links : links
		});
	}

	return Link;
});

/**
 * Onyx Link Query Names
 */
define("onyx/api/linknames", [ "jquery", "require" ], function($, require) {

	function LinkNames(kid) {
		this.kid = kid;
	}

	/**
	 * get link names by source
	 * 
	 * @param eid
	 * @param offset
	 * @param limit
	 */
	LinkNames.prototype.list = function(eid, offset, limit) {
		return Api.get("linknames/" + eid);
	}

	return LinkNames;
});

/**
 * query links and nodes by one node
 */
define("onyx/api/linknodes", [ "jquery", "require" ], function($, require) {

	function LinkNodes() {
	}

	/**
	 * get links and nodes by one node
	 * 
	 * @param eid
	 * @param offset
	 * @param limit
	 */
	LinkNodes.prototype.list = function(options) {
		return Api.get("linknodes/" + options.id, options);
	}

	return LinkNodes;
});

/**
 * Onyx Timeline Api
 */
define("onyx/api/timeline", [ "jquery", "require" ], function($, require) {

	function TimeLine(kid) {
		this.kid = kid;
	}

	/**
	 * get TimeLine list
	 * 
	 * @param offset
	 * @param limit
	 */
	TimeLine.prototype.list = function(offset, limit) {
		return Api.get("timeline");
	}

	return TimeLine;
});

/**
 * Onyx Material Api
 */
define("onyx/api/material", [ "jquery", "require" ], function($, require) {

	function Material(kid) {
		this.kid = kid;
	}

	/**
	 * get Material resource
	 */
	Material.prototype.single = function(mid) {
		return Api.get("material/" + mid);
	}

	/**
	 * get material list
	 * 
	 * @param offset
	 * @param limit
	 */
	Material.prototype.list = function(offset, limit) {
		return Api.get("material");
	}

	/**
	 * create a new material
	 * 
	 * @param data
	 *            formdata for new contribute
	 */
	Material.prototype.create = function(data) {
		data.append("kid", this.kid);
		return Api.upload("material", data);
	}

	return Material;
});

/**
 * API Event
 */
define("onyx/api/event", [ "jquery", "require" ], function($, require) {

	function Event() {
	}

	/**
	 * query events of entity
	 */
	Event.prototype.list = function(eid) {
		return Api.get("event/" + eid);
	}

	return Event;
});

/**
 * API Graph
 */
define("onyx/api/graph", [ "jquery", "require" ], function($, require) {

	function Graph() {
	}

	/**
	 * save graph
	 */
	Graph.prototype.save = function(json) {
		return Api.post("graph", json);
	}

	return Graph;
});

/**
 * API File
 */
define("onyx/api/file", [ "jquery", "require" ], function($, require) {

	function File() {
	}

	/**
	 * upload a file to server
	 */
	File.prototype.upload = function(file) {
		var data = new FormData();
		data.append("file", file);
		return Api.upload("file", data);
	}

	return File;
});

/**
 * API Image
 */
define("onyx/api/image", [ "jquery", "require" ], function($, require) {

	function ImageApi() {
		this.images = {};
	}

	/**
	 * upload a file to server
	 */
	ImageApi.prototype.get = function(id) {
		var image = this.images[id];
		if (image) {
			return $.dfd(image);
		}
		var dfd = $.Deferred();
		var image = new Image(); // 创建img元素
		var self = this;
		image.onload = function() {
			self.images[id] = image;
			dfd.resolve(image);
		}
		image.onerror = function() {
			// 通过node.id获取类型信息，将icon绘制到canvas，然后取出image
			Api.entity().get(id).done(function(entity) {
				Api.image().name(entity.name).done(function(image) {
					dfd.resolve(image);
				});
			});
		}
		image.src = "/onyxapi/v1/image/" + id;
		return dfd.promise();
	}

	ImageApi.prototype.name = function(name) {
		var icon = name.charAt(0);
		var color = "gray";
		var background = "white";
		var canvasOffscreen = document.createElement('canvas');
		canvasOffscreen.width = 64;
		canvasOffscreen.height = 64;
		var context = canvasOffscreen.getContext('2d');
		context.save();
		context.beginPath();
		context.moveTo(0, 0);
		context.rect(0, 0, 64, 64);
		context.font = "48px 微软雅黑";
		context.textAlign = "center";
		context.fillStyle = background;
		context.fill();
		context.fillStyle = color;
		context.fillText(icon, 32, 48);
		context.closePath();
		context.restore();
		return $.dfd(canvasOffscreen);
	}
	return ImageApi;
});
