define(['marionette'], function (Marionette) {
	return Marionette.AppRouter.extend({
		appRoutes: {
			'permiso': 'showRolsView',
			'permiso/editar/:id': 'showRolFormView',
			'permiso/new': 'showRolFormView'
		}
	});
});
