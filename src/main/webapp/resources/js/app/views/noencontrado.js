define(['marionette', 
        'tpl!templates/noencontrado.tpl'], function (Marionette,
        		noEncontradoTemplate) {
	return Marionette.ItemView.extend({
		template: noEncontradoTemplate
	});
});