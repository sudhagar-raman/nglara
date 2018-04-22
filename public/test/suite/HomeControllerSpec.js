describe("Test HomeController", function(){


		beforeEach(module('leaseWeb'));
		var $controller, ServersService, $provide;

		beforeEach(function(){
			ServersService = jasmine.createSpy('ServersService', ['getServerList']);
			module(function($provide){
				$provide.value('ServersService', ServersService);
			})
		});

		beforeEach(inject(function(_$controller_){
			$controller = _$controller_
		}))

		describe("Test Defaults:", function(){
			it("Controller to be defined", function(){
				expect($controller).toBeDefined();
			});

			it("Check title", function(){
				var $scope = {};
				var controller = $controller('HomeController', {'$scope': $scope});
				expect($scope.title).toBe('Home page');
			});

			it("Check no_data", function(){
				var $scope = {};
				var controller = $controller('HomeController', {'$scope': $scope});
				expect($scope.no_data).toBe('No data found');
			});
		});


});