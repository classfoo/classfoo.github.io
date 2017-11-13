define("onyx/utils", [ "jquery", "require" ], function($, require) {

	var Utils = function() {

	}

	/**
	 * 构造类继承关系
	 * 
	 * @memberOf module:zrender/core/util
	 * @param {Function}
	 *            clazz 源类
	 * @param {Function}
	 *            baseClazz 基类
	 */
	Utils.inherits = function(clazz, baseClazz) {
		var clazzPrototype = clazz.prototype;
		function inst() {
		}
		inst.prototype = baseClazz.prototype;
		clazz.prototype = new inst();
		for ( var prop in clazzPrototype) {
			clazz.prototype[prop] = clazzPrototype[prop];
		}
		clazz.prototype.constructor = clazz;
		clazz.superClass = baseClazz;
	}

	/**
	 * return Deferred object with data
	 */
	Utils.deferred = function(data) {
		var dfd = $.Deferred();
		dfd.resolve(data);
		return dfd.promise();
	}

	/**
	 * make sure path end with splash
	 */
	Utils.ensurePathEndWithSplash = function(path) {
		if (path == null || path.length == 0) {
			return "/";
		}
		if (path.endsWith('/')) {
			return path;
		}
		return path + '/';
	}

	/**
	 * get sub path with index count splits
	 */
	Utils.subStringPath = function(path, index) {
		var splits = path.split("/");
		if (index >= splits.length) {
			return null;
		}
		var sub = "";
		for (var i = 0; i <= index; i++) {
			sub += splits[i];
			if (i != index) {
				sub += '/';
			}
		}
		return sub;
	}

	Utils.guid = function() {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000).toString(16)
					.substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4()
				+ s4() + s4();
	}

	/**
	 * parse url return a map with path and params
	 */
	Utils.parseUrl = function(url) {
		var index = url.indexOf('?');
		if (index == -1) {
			return {
				path : url
			};
		}
		var path = url.substring(0, index);
		var urlparams = url.substring(index + 1);
		var params = Utils.parseUrlParams(urlparams);
		return {
			path : path,
			params : params
		}
	}

	/**
	 * parse url params string into params map
	 */
	Utils.parseUrlParams = function(urlparams) {
		if (!urlparams) {
			return {};
		}
		var params = {};
		var splits = urlparams.split("&");
		for (var i = 0; i < splits.length; i++) {
			var split = splits[i];
			var pair = split.split("=");
			var key = pair[0];
			var value = pair[1];
			params[key] = value;
		}
		return params;
	}

	return Utils;
});