// Filename: app.js
define([
  'backbone',
  'marionette'
], function(Backbone, Marionette){
	
	var app = new Marionette.Application ();
	
	app.addRegions({
		menuWrapper: '#menu-wrapper',
		main: '#main',
		topbar: '#top-bar'
	});
	
	return app;
});