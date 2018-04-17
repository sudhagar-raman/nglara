(function(){
	'use strict';
	
	var app = angular.module("leaseWeb", ['ngRoute', 'checklist-model', 'ui.bootstrap.pagination']);
       
    app.constant('API_URL', 'http://localhost/nglaravel/public/api/v1/');

    app.config(['$routeProvider', function($routeProvider) {
		  $routeProvider.
			when("/home", 
					{
						templateUrl: "ngapp/views/home.html", 
						controller: "HomeController"
					}
				)
			.otherwise({redirectTo: '/home'});
	}]);
})()

