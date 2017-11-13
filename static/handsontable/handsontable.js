/**
 * Onyx Handsontable requires
 */
define("handsontable", [ "/static/handsontable/handsontable.full.js",
		"css!/static/handsontable/handsontable.full.css",
		"/static/handsontable/moment/moment.js",
		"/static/handsontable/numbro/numbro.js",
		"/static/handsontable/pikaday/pikaday.js",
		"/static/handsontable/zeroclipboard/zeroclipboard.js" ], function(
		Handsontable) {
	return Handsontable;
});