/**
 * Onyx Graph
 */
define("onyx/graph", [ "jquery", "require", "css!./graph.css", "onyx/ui",
		"onyx/canvas" ], function($, require) {

	var UI = require("onyx/ui");
	var Canvas = require("onyx/canvas");
	function Graph(options) {
		this.options = options;
		this.build(options.pdom);
	}

	Graph.prototype.build = function(pdom) {
		this.dom = $("<div class='onyx-graph'></div>");
		this.dom.appendTo(pdom);
		this.multiPage = UI.createMultiPage({
			pdom : this.dom
		});
		return this.dom;
	}

	Graph.prototype.showPage = function(options) {
		return this.multiPage.showPage(options);
	}

	return Graph;
});

/**
 * Onyx Space Enter
 */
define("onyx/graph/base", [ "jquery", "require", "onyx/ui", "onyx/canvas" ],
		function($, require) {

			var UI = require("onyx/ui");

			var Canvas = require("onyx/canvas");

			function Base(options) {
				this.options = options;
				this.resource = this.options.resource;
				this.kid = this.resource.id;
				this.build(options.pdom);
			}

			Base.prototype.build = function(pdom) {
				this.dom = $("<div class='onyx-graph-base'></div>");
				this.dom.appendTo(pdom);
				this.canvas = new Canvas(this.dom, this.resource, null, true);
				return this.dom;
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
				}, {
					id : this.kid,
					name : this.resource.name,
					uri : "/base/home/" + this.kid
				}, {
					id : "graph",
					name : "图谱",
					uri : "/graph/base/" + this.kid
				} ]);
			}

			return Base;
		});

/**
 * Onyx Graph Entity
 */
define("onyx/graph/entity", [ "jquery", "require", "onyx/ui", "onyx/canvas" ],
		function($, require) {

			var UI = require("onyx/ui");

			var Canvas = require("onyx/canvas");

			function Entity(options) {
				this.options = options;
				this.resource = this.options.resource;
				this.kid = this.resource.kid;
				this.build(options.pdom);
			}

			Entity.prototype.build = function(pdom) {
				var self = this;
				Api.base().get(this.kid).done(function(base) {
					self.dom = $("<div class='onyx-graph-entity'></div>");
					self.dom.appendTo(pdom);
					self.canvas = new Canvas(self.dom, base, self.resource, true);
				})
				return this.dom;
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
						id : base.id,
						name : base.name,
						uri : "/base/home/" + base.kid
					}, {
						id : self.resource.id,
						name : self.resource.name,
						uri : "/view/entity/" + self.resource.id
					}, {
						id : "graph",
						name : "图谱",
						uri : "/graph/entity/" + self.resource.id
					} ]);
				})
				return dfd.promise();
			}

			return Entity;
		});