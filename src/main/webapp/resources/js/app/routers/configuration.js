define(['marionette'], function (Marionette) {
	return Marionette.AppRouter.extend({
		appRoutes: {
			'cliente': 'showClienteListView',
			'cliente/edit/:id': 'showEditarClienteFormView',
			'cliente/new': 'showNuevoClienteFormView'
		}
	});
});