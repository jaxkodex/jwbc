define(['marionette', 'tpl!templates/topbar.tpl'], function (Marionette, topbarTemplate) {
	return Marionette.ItemView.extend({
		template: topbarTemplate
	});
});