define(['backbone'], function (Backbone) {
	return Backbone.Model.extend({
		idAttribute: 'username',
		defaults: {}
	});
});