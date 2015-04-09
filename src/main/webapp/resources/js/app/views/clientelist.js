define(['marionette', 'tpl!templates/clientelist.tpl'], function (Marionette, clienteListTemplate) {
	var ClientItemListView = Marionette.ItemView.extend({
		events: {
			'click': 'showDetail'
		},
		tagName: 'tr',
		template: _.template('<td><%=cmtbEmpresa.deRuc%></td><td><%=cmtbEmpresa.deNombre%></td><td><%=cmtbEmpresa.deRazonsocial%></td>'),
		showDetail: function () {
			this.model.collection.trigger('go:editarclienteform', this.model.id);
		}
	});
	
	return Marionette.CompositeView.extend({
		childViewContainer: 'tbody',
		template: clienteListTemplate,
		childView: ClientItemListView,
		collectionEvents: {
			'go:editarclienteform': 'showEditarClienteForm'
		},
		showEditarClienteForm: function (id) {
			this.trigger('go:editarclienteform', id);
		}
	});
});