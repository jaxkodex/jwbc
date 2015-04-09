define(['backbone', 'models/cliente'], function (Backbone, Cliente) {
	return Backbone.Collection.extend({
		url: baseUrl+'cliente',
		model: Cliente
	});
});