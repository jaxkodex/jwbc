define(['backbone', 'models/rol'], function (Backbone, Rol) {
	return Backbone.Collection.extend({
		url: baseUrl+'rol',
		model:Rol
	});
});