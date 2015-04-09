define(['app', 'backbone',
        'models/rol',
        'collections/roles',
        'views/noencontrado', 
        'views/roleslist', 'views/rolform'], function (App, Backbone,
        		Rol,
        		Roles, 
        		NoEncontradoView, 
        		RolesListView, RolFormView) {
	var roles = new Roles;
	return {
		showRolsView: function () {
			var me;
			me = this;
			roles.fetch({
				reset: true,
				success: function () {
					var view = new RolesListView({
						collection: roles
					});
					App.main.show(view);
					view.on('go:rolform', function (id) {
						me.showRolFormView(id);
						Backbone.history.navigate('#permiso/editar/'+id);
					});
					view.on('go:newrolform', function () {
						me.showNewRolFormView();
						Backbone.history.navigate('#permiso/new');
					});
				}
			});
		},
		showRolFormView: function (id) {
			var rol, me;
			me = this;
			rol = roles.get(id);
			if (_.isUndefined(rol)) {
				rol = new Rol({ idRol: id });
				roles.add(rol);
			}
			rol.fetch({
				success: function () {
					var view = new RolFormView({
						model: rol
					});
					view.on('go:rollist', function () {
						me.showRolsView();
						Backbone.history.navigate('#permiso');
					});
					App.main.show(view);
				},
				error: function () {
					var view = new NoEncontradoView;
					App.main.show(view);
				}
			});
		},
		showNewRolFormView: function () {
			var rol, me;
			me = this;
			rol = new Rol();
			roles.add(rol);
			var view = new RolFormView({
				model: rol
			});
			view.on('go:rollist', function () {
				me.showRolsView();
				Backbone.history.navigate('#permiso');
			});
			App.main.show(view);
		}
	};
});
