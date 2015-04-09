define(['backbone'], function (Backbone) {
	return Backbone.Model.extend({
		idAttribute: 'idCliente',
		defaults: {
			esCliente: 'A',
			cmtbEmpresa: {}
		}
	});
});