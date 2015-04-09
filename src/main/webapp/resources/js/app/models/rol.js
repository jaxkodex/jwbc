define(['backbone'], function (Backbone) {
	return Backbone.Model.extend({
		idAttribute: 'idRol',
		defaults: {
			noRol: '',
			esRol: 'A',
			cmtbRolOpcions: []
		},
		validate: function (attributes, options) {
			if (_.isUndefined(attributes.noRol) || _.isEmpty(attributes.noRol.trim())) {
				return {
					element: 'noRol',
					mensaje: 'El campo nombre es un campo obligatorio.'
				};
			}
		}
	});
});
