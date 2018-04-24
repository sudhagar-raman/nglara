<!DOCTYPE html>
<html>
<head>
  <title>NG-Lara Demo</title>
  <link href="<?= asset('ngapp/libs/bootstrap-3.3.7-dist/css/bootstrap.min.css') ?>" rel="stylesheet">
  <link href="<?= asset('assets/css/style.css') ?>" rel="stylesheet">
</head>

<body ng-app="leaseWeb" ng-controller="HomeController as home">
	<div class="container-fluid">
		<div class="row row-banner">
			<div class="col-md-12">
				<div class="col-md-6">
					<span class="logo">Servers</span>
				</div>
			</div>	
		</div>
		<br>
		<div ng-include="'ngapp/views/layout.html'"></div>
 	</div>

  <!-- external dependencies -->
  <script src="ngapp/libs/angular/angular.min.js"></script>
  <script src="ngapp/libs/angular/angular-route.min.js"></script>
  <script src="ngapp/libs/jquery/jquery-3.3.1.min.js"></script>
  <script src="ngapp/libs/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>

  <!-- ngapp dependencies -->
  <script src="ngapp/app.js"></script>
  <script src="ngapp/controllers/HomeController.js"></script>
  <script src="ngapp/services/ServersService.js"></script>
  <script src="ngapp/libs/js/checklist-model.js"></script>
  <script src="ngapp/libs/js/pagination.js"></script>
</body>
</html>