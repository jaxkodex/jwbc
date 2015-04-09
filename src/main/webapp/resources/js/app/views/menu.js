define(['jquery',
        'underscore', 
        'marionette'], function ($, _, Marionette) {
	var MenuItemView = Marionette.ItemView.extend({
		tagName: 'li',
		events: {
			'click': 'onClickMenuItem',
		},
		template: _.template('<% if (esPadre == "S") {%><%=noOpcion%><% } else { %><a href="<%=urlOpcion%>"><%=noOpcion%></a><% } %>'),
		onRender: function () {
			if (this.model.get('esPadre') == 'S') {
				this.$el.addClass('menu-parent');
			}
		},
		onClickMenuItem: function (evt) {
			if (this.model.get('esPadre') != 'S') {
				$('#menu-wrapper li').removeClass('active');
				this.$el.addClass('active');
			}
		}
	});
	
	return Marionette.CompositeView.extend({
		template: _.template('<ul class="list-unstyled"></ul>'),
		childViewContainer: 'ul',
		childView: MenuItemView
	});
});