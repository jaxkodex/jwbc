<h3>Cliente: <%=cmtbEmpresa.deRuc%> - <%=cmtbEmpresa.deNombre%></h3>
<div id="error-guardar" class="alert alert-warning alert-dismissible hidden">
No se pudo realizar el registro de su información.
</div>
<form>
	<div class="row">
		<div class="col-sm-2">
			<div class="form-group">
				<label class="control-label" for="deRuc">RUC</label>
				<input id="deRuc" name="deRuc" class="form-control input-sm" type="text" value="<%=cmtbEmpresa.deRuc%>" />
			</div>
		</div>
		<div class="col-sm-10">
			<div class="form-group">
				<label class="control-label" for="deNombre">Nombre</label>
				<input id="deNombre" name="deNombre" class="form-control input-sm" type="text" value="<%=cmtbEmpresa.deNombre%>" />
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-2">
			<div class="form-group">
				<label class="control-label" for="deCodigo">Código</label>
				<input id="deCodigo" name="deCodigo" class="form-control input-sm" type="text" value="<%=cmtbEmpresa.deCodigo%>" />
			</div>
		</div>
		<div class="col-sm-10">
			<div class="form-group">
				<label class="control-label" for="deRazonsocial">Razón Social</label>
				<input id="deRazonsocial" name="deRazonsocial" class="form-control input-sm" type="text" value="<%=cmtbEmpresa.deRazonsocial%>" />
			</div>
		</div>
	</div>
	<div class="form-group">
		<label class="control-label" for="deDireccion">Dirección</label>
		<input id="deDireccion" name="deDireccion" class="form-control input-sm" type="text" value="<%=cmtbEmpresa.deDireccion%>" />
	</div>
	<div class="checkbox">
		<label><input id="esCliente" type="checkbox" <%if (esCliente == 'A') {%>checked<% } %> />Activo</label>
	</div>
	<div style="text-align: right;">
		<button id="cancel" class="btn btn-sm btn-default">Cancelar</button>&nbsp;
		<button class="btn btn-sm btn-primary" type="submit">Guardar</button>
	</div>
</form>