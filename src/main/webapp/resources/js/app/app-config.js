require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		bootstrap: {
			deps: ['jquery'],
		},
		marionette: {
			deps: ['jquery', 'underscore', 'backbone'],
			exports: 'Marionette'
		}
	},
	paths: {
		jquery: '../libs/jquery-1.11.1',
		velocity: '../libs/velocity.min',
		underscore: '../libs/underscore',
		backbone: '../libs/backbone',
		bootstrap: '../libs/bootstrap',
		marionette: '../libs/backbone.marionette',
		moment: '../libs/moment.min',
		tpl: '../libs/tpl'
	}
});

require(['app',
         'velocity',
         'models/usuario',
         'views/topbar', 'views/menu',
         'routers/security', 'controllers/security',
         'routers/configuration', 'controllers/configuration',
         'jquery',
         'bootstrap'], function (App,
        		 Velocity,
        		 Usuario,
        		 TopbarView, MenuView,
        		 SecurityRouter, securityController,
        		 ConfigurationRouter, configurationController) {
	
	App.addInitializer(function () {
		var menuItemCollection = new Backbone.Collection(opcionesData);
		App.userModel = new Usuario (userData);
		
		App.topbar.show(new TopbarView({
			model: App.userModel
		}));
		
		App.menuWrapper.show(new MenuView({
			collection: menuItemCollection
		}));
		new SecurityRouter({
			controller: securityController
		});
		new ConfigurationRouter({
			controller: configurationController
		});
		
		Velocity($('#loading-placeholder'), {
			left: '-100px',
			opacity: '0.0'
		}, { duration: 500 })
		.then(function () {
			$('#loading-placeholder').addClass('hidden');
			$('#main-container').css({ opacity: '0.0' }).removeClass('hidden');
			Velocity($('#main-container'), 'fadeIn', { duration: 500 });
		});
		
		
		Backbone.history.start();
	});
	
	App.start();
});
