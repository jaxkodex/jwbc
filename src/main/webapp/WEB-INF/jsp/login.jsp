<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Ingresar al Sistema | jwbc</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/styles.css">
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/login-styles.css">
</head>
<body>
	<div class="container">
		<div class="col-sm-offset-3 col-sm-6">
		<div class="login-wrapper">
			<div class="logo">
				<img class="img-responsive" src="${pageContext.request.contextPath}/resources/img/logo.png" />
			</div>
			<div class="login">
				<h3 class="text-center">Sistema de Digitalización</h3>
				<c:if test="${not empty error}">
				<div class="alert alert-warning">Verifique su usuario y contraseña por favor.</div>
				</c:if>
				<form action="${pageContext.request.contextPath}/login" method="POST">
					<div class="form-group">
						<label for="username">Usuario</label>
						<input id="username" name="username" type="text" class="form-control input-sm" placeholder="Usuario" />
					</div>
					<div class="form-group">
						<label for="password">Contraseña</label>
						<input id="password" name="password" type="password" class="form-control input-sm" placeholder="Contraseña" />
					</div>
					<div class="clearfix">
						<button class="btn btn-sm btn-primary pull-right">Ingresar</button>
					</div>
				</form>
			</div>
			</div>
		</div>
	</div>
	<script src="${pageContext.request.contextPath}/resources/js/libs/jquery-1.11.1.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/libs/bootstrap.min.js"></script>
	<script>
		$(function () {
			$('#username').focus();
		});
	</script>
</body>
</html>
