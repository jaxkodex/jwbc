<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>jwbc</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/app-styles.css">
	<script type="text/javascript">
		var userData = ${userData};
		var opcionesData = ${opcionesData};
		var todasLasOpcionesData = ${todasLasOpcionesData};
		var contextPath = '${pageContext.request.contextPath}';
		var baseUrl = contextPath+'/api/';
	</script>
</head>
<body>
	<div id="loading-placeholder" class="text-center" style="padding-top: 70px; position: relative;">
		<h4>Cargando...</h4>
		<img alt="Cargando..." src="${pageContext.request.contextPath}/resources/img/loading.gif">
		<p><small><i>jwbc &copy; <%= new java.text.SimpleDateFormat("yyyy").format(new java.util.Date()) %> example.com</i></small></p>
	</div>
	<div class="header">
		<div class="row">
			<div id="top-bar" class="col-sm-12"></div>
		</div>
	</div>
	<div class="hidden" id="main-container">
		<div class="contents-wrapper">
			<div id="menu-wrapper" class="pull-left"></div>
			<div class="contents">
				<div class="container-fluid">
					<div class="row">
						<div id="main" class="col-sm-12"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<script data-main="${pageContext.request.contextPath}/resources/js/app/app-config.js" src="${pageContext.request.contextPath}/resources/js/libs/require.js"></script>
</body>
</html>
