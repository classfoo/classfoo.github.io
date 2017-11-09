/**
 * Require Config
 */
require.config({
	baseUrl : "/static",
	paths : {
		jquery : "/static/jquery/jquery-2.2.4",
		masonry : "/static/masonry/masonry",
		handsontable : "/static/handsontable/handsontable"
	},
	modules : [ {
		name : 'mymodule',
		exclude : [ 'css/normalize' ]
	} ],
	map : {
		'*' : {
			'css' : '/static/require/css.js'
		}
	}
});

require([ "jquery", "onyx/onyx" ], function($, Onyx) {
	Onyx.init({
		root : "/",
		compname : "onyx/web",
		pdom : $("body"),
		redirect : {
			"/" : "/space",
			"/space" : "/space/recommend",
			"/personal" : "/personal/files",
			"/base" : "/base/home",
			"/edit" : "/edit/home",
			"/search" : "/search/all"
		}
	});
});