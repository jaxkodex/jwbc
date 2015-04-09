define(['marionette', 
        'tpl!templates/roleslist.tpl'] , function (Marionette, 
		rolesListTemplate) {
	var roleItemView;
	
	roleItemView = Marionette.ItemView.extend({
		tagName: 'tr',
		template: _.template('<td><%=noRol%></td>'),
		events: {
			'click': 'onClick'
		},
		onClick: function () {
			this.model.collection.trigger('go:rolform', this.model.id);
		}
	});
	
	return Marionette.CompositeView.extend({
		childViewContainer: 'tbody',
		template: rolesListTemplate,
		childView: roleItemView,
		events: {
			'click #new': 'showNewRolForm'
		},
		collectionEvents: {
			'go:rolform': 'gorolform'
		},
		gorolform: function (id) {
			this.trigger('go:rolform', id);
		},
		showNewRolForm: function (evt) {
			evt.preventDefault();
			this.trigger('go:newrolform');
		}
	});
});
