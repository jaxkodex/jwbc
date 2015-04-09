<h3>Rol: <%=noRol%></h3>
<div id="error-guardar" class="alert alert-warning alert-dismissible hidden">
No se pudo realizar el registro de su información.
</div>
<form>
	<div class="form-group">
		<label class="control-label" for="noRol">Nombre</label>
		<input id="noRol" name="noRol" class="form-control input-sm" type="text" value="<%=noRol%>" />
	</div>
	<div class="checkbox">
		<label><input id="esRol" type="checkbox" <%if (esRol == 'A') {%>checked<% } %> />Activo</label>
	</div>
	<div class="row">
		<div class="col-sm-12">
			<label>Permisos</label><br />
			<div class="row">
				<div class="col-sm-12">
				<% _.each(todasLasOpcionesData, function (val) { %>
				<% if (val.esPadre == 'S') { %>
				<div class="col-sm-12" style="border-bottom: solid 1px #ccc;">
					<%=val.noOpcion%></div>
				<% } else { %>
				<div class="col-sm-6">
				<div class="checkbox">
					<label><input class="opciones" type="checkbox" data-idopcion="<%=val.idOpcion%>" <% if (!_.isUndefined(_.find(cmtbRolOpcions, function (element) { return element.cmtbOpcion.idOpcion == val.idOpcion }))) { %>checked<% } %> />
					<%=val.noOpcion%></label>
				</div>
				</div>
				<% } %>
				<% }); %>
				</div>
			</div>
		</div>
	</div>
	<div style="text-align: right;">
		<button id="cancel" class="btn btn-sm btn-default">Cancelar</button>&nbsp;
		<button class="btn btn-sm btn-primary" type="submit">Guardar</button>
	</div>
</form>