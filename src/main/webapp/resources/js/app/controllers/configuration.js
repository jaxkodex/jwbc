define(['app', 'backbone',
        'models/cliente',
        'collections/clientes',
        'views/clientelist', 'views/clienteform'], function (App, Backbone,
        		Cliente,
        		Clientes,
        		ClienteListView, ClienteFormView) {
	var clientes = new Clientes();
	
	return {
		showClienteListView: function () {
			var me;
			me = this;
			clientes.fetch({
				reset: true,
				success: function () {
					var view = new ClienteListView({
						collection: clientes
					});
					view.on('go:editarclienteform', function (id) {
						me.showEditarClienteFormView(id);
						Backbone.history.navigate('#cliente/edit/'+id);
					});
					view.on('go:nuevoclienteform', function () {
						me.showNuevoClienteFormView();
						Backbone.history.navigate('#cliente/new');
					});
					App.main.show(view);
				}
			});
		},
		showNuevoClienteFormView: function () {
			var cliente, view;
			cliente = new Cliente;
			clientes.add(cliente);
			view = new ClienteFormView({
				model: cliente
			});
			App.main.show(view);
		},
		showEditarClienteFormView: function (id) {
			var cliente, view;
			cliente = clientes.get(id);
			if (_.isUndefined(cliente)) {
				cliente = new Cliente;
				cliente.set('idCliente', id);
				clientes.add(cliente);
			}
			cliente.fetch({
				success: function () {
					console.log(cliente.toJSON());
					view = new ClienteFormView({
						model: cliente
					});
					App.main.show(view);
				}
			});
		}
	};
});