define(['underscore', 
        'marionette',
        'tpl!templates/rolform.tpl'], function (_, Marionette,
        		rolFormTemplate) {
	return Marionette.ItemView.extend({
		template: rolFormTemplate,
		events: {
			'submit': 'guardar',
			'click #cancel': 'cancelar'
		},
		modelEvents: {
			'invalid': 'onInvalidModel'
		},
		cancelar: function (evt) {
			evt.preventDefault();
			this.trigger('go:rollist');
		},
		guardar: function (evt) {
			evt.preventDefault();
			var me, obj;
			obj = this.model.toJSON();
			me = this;
			obj.cmtbRolOpcions = [];
			obj.noRol = this.$('#noRol').val();
			obj.esRol = this.$('#esRol').prop('checked') ? 'A' : 'I';
			
			$('.opciones:checked').each(function (index, value) {
				obj.cmtbRolOpcions.push({ cmtbOpcion: { idOpcion: $(value).data('idopcion') } });
			});
			this.model.save(obj, {
				success: function () {
					me.trigger('go:rollist');
				},
				error: function () {
					$('#error-guardar').fadeIn();
				}
			});
		},
		onInvalidModel: function (model, error) {
			this.$('.form-group').removeClass('has-warning');
			this.$('.help-block').remove();
			var parentEl = this.$('#'+error.element).parent();
			parentEl.addClass('has-warning');
			parentEl.append($('<div>').addClass('help-block').text(error.mensaje));
		}
	});
});
