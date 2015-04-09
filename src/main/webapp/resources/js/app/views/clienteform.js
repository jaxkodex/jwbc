define(['marionette', 'tpl!templates/clienteform.tpl'], function (Marionette, clienteFormTemplate) {
	return Marionette.ItemView.extend({
		template: clienteFormTemplate
	});
});